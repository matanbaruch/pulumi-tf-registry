const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fetch all Terraform providers
async function getAllProviders() {
    const baseUrl = 'https://registry.terraform.io';
    let allProviders = [];
    let nextUrl = baseUrl + '/v2/providers?page[number]=1&page[size]=100';

    while (nextUrl) {
        try {
            const response = await fetch(nextUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Filter out providers with tier "community"
            const filteredProviders = data.data.filter(provider => provider.attributes.tier !== 'community');
            allProviders = allProviders.concat(filteredProviders);

            // Get next URL from the response
            nextUrl = data.links.next ? `${baseUrl}${data.links.next}` : null;

            console.log(`Fetched ${filteredProviders.length} non-community providers. Total: ${allProviders.length}`);

            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error('Error fetching providers:', error);
            break;
        }
    }

    return allProviders;
}

// Execute Pulumi command to generate SDKs
async function runPulumiCommand(provider) {
    const command = `pulumi package add terraform-provider ${provider.attributes.namespace}/${provider.attributes.name}`;
    try {
        execSync(command);

        // Update the package name in the package.json
        const packageJsonPath = path.join('sdks', provider.attributes.name, 'package.json');
        console.log(`Checking package.json at ${packageJsonPath}`);
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (packageJson.name === `@pulumi/${provider.attributes.name}`) {
                packageJson.name = `@matanbaruch/${provider.attributes.namespace.toLowerCase()}-${provider.attributes.name}`;
                fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
                console.log(`Updated package name in ${packageJsonPath}`);
            }
        } else {
            console.warn(`package.json not found for ${provider.attributes.name} at ${packageJsonPath}`);
        }
    } catch (error) {
        console.error(`Unable to convert ${provider.attributes.namespace}/${provider.attributes.name}: ${error.message}`);
    }
}

// Main execution function
async function main() {
    try {
        const providers = await getAllProviders();
        console.log(`Total non-community providers fetched: ${providers.length}`);

        providers.forEach(provider => {
            console.log(`Provider Fetched: ${provider.attributes.namespace}/${provider.attributes.name}`);
        });

        const promises = providers.map(provider => {
            console.log(`Running Pulumi command for ${provider.attributes.namespace}/${provider.attributes.name}`);
            return runPulumiCommand(provider);
        });
        await Promise.all(promises);

        console.log('All Pulumi commands have been executed.');
    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main();
