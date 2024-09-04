const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fetch all Terraform providers
async function getAllProviders() {
    const baseUrl = 'https://registry.terraform.io/v1/providers';
    let allProviders = [];
    let nextUrl = baseUrl;
    let currentUrl = '';

    while (nextUrl && nextUrl !== currentUrl) {
        try {
            currentUrl = nextUrl;
            const response = await fetch(currentUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            allProviders = allProviders.concat(data.providers);

            nextUrl = data.meta.next_url && data.meta.next_url !== currentUrl ? data.meta.next_url : null;

            console.log(`Fetched ${data.providers.length} providers. Total: ${allProviders.length}`);

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
    const command = `pulumi package add terraform-provider ${provider.namespace}/${provider.name}`;
    try {
        execSync(command);

        // Update the package name in the package.json
        const packageJsonPath = path.join('sdks', provider.name, 'package.json');
        console.log(`Checking package.json at ${packageJsonPath}`);
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (packageJson.name === `@pulumi/${provider.name}`) {
                packageJson.name = `@matanbaruch/${provider.name}`;
                fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
                console.log(`Updated package name in ${packageJsonPath}`);
            }
        } else {
            console.warn(`package.json not found for ${provider.name} at ${packageJsonPath}`);
        }
    } catch (error) {
        console.error(`Unable to convert ${provider.namespace}/${provider.name}: ${error.message}`);
    }
}

// Main execution function
async function main() {
    try {
        const providers = await getAllProviders();
        console.log(`Total providers fetched: ${providers.length}`);

        // Run Pulumi commands in parallel
        const promises = providers.map(provider => {
            console.log(`Running Pulumi command for ${provider.namespace}/${provider.name}`);
            return runPulumiCommand(provider);
        });
        await Promise.all(promises);

        console.log('All Pulumi commands have been executed.');
    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main();
