// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AzureServicePrincipal extends pulumi.CustomResource {
    /**
     * Get an existing AzureServicePrincipal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AzureServicePrincipalState, opts?: pulumi.CustomResourceOptions): AzureServicePrincipal {
        return new AzureServicePrincipal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'octopusdeploy:index/azureServicePrincipal:AzureServicePrincipal';

    /**
     * Returns true if the given object is an instance of AzureServicePrincipal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureServicePrincipal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureServicePrincipal.__pulumiType;
    }

    /**
     * The application ID of this resource.
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * The authentication endpoint URI for this resource.
     */
    public readonly authenticationEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The Azure environment associated with this resource. Valid Azure environments are `AzureCloud`, `AzureChinaCloud`,
     * `AzureGermanCloud`, or `AzureUSGovernment`.
     */
    public readonly azureEnvironment!: pulumi.Output<string>;
    /**
     * The description of this Azure service principal account.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A list of environment IDs associated with this resource.
     */
    public readonly environments!: pulumi.Output<string[]>;
    /**
     * The name of this resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password associated with this resource.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The resource manager endpoint URI for this resource.
     */
    public readonly resourceManagerEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The space ID associated with this resource.
     */
    public readonly spaceId!: pulumi.Output<string>;
    /**
     * The subscription ID of this resource.
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    /**
     * The tenant ID of this resource.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    public readonly tenantTags!: pulumi.Output<string[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    public readonly tenantedDeploymentParticipation!: pulumi.Output<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    public readonly tenants!: pulumi.Output<string[]>;

    /**
     * Create a AzureServicePrincipal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureServicePrincipalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AzureServicePrincipalArgs | AzureServicePrincipalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AzureServicePrincipalState | undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["authenticationEndpoint"] = state ? state.authenticationEndpoint : undefined;
            resourceInputs["azureEnvironment"] = state ? state.azureEnvironment : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environments"] = state ? state.environments : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["resourceManagerEndpoint"] = state ? state.resourceManagerEndpoint : undefined;
            resourceInputs["spaceId"] = state ? state.spaceId : undefined;
            resourceInputs["subscriptionId"] = state ? state.subscriptionId : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["tenantTags"] = state ? state.tenantTags : undefined;
            resourceInputs["tenantedDeploymentParticipation"] = state ? state.tenantedDeploymentParticipation : undefined;
            resourceInputs["tenants"] = state ? state.tenants : undefined;
        } else {
            const args = argsOrState as AzureServicePrincipalArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["authenticationEndpoint"] = args ? args.authenticationEndpoint : undefined;
            resourceInputs["azureEnvironment"] = args ? args.azureEnvironment : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environments"] = args ? args.environments : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["resourceManagerEndpoint"] = args ? args.resourceManagerEndpoint : undefined;
            resourceInputs["spaceId"] = args ? args.spaceId : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["tenantTags"] = args ? args.tenantTags : undefined;
            resourceInputs["tenantedDeploymentParticipation"] = args ? args.tenantedDeploymentParticipation : undefined;
            resourceInputs["tenants"] = args ? args.tenants : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AzureServicePrincipal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AzureServicePrincipal resources.
 */
export interface AzureServicePrincipalState {
    /**
     * The application ID of this resource.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The authentication endpoint URI for this resource.
     */
    authenticationEndpoint?: pulumi.Input<string>;
    /**
     * The Azure environment associated with this resource. Valid Azure environments are `AzureCloud`, `AzureChinaCloud`,
     * `AzureGermanCloud`, or `AzureUSGovernment`.
     */
    azureEnvironment?: pulumi.Input<string>;
    /**
     * The description of this Azure service principal account.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of environment IDs associated with this resource.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The password associated with this resource.
     */
    password?: pulumi.Input<string>;
    /**
     * The resource manager endpoint URI for this resource.
     */
    resourceManagerEndpoint?: pulumi.Input<string>;
    /**
     * The space ID associated with this resource.
     */
    spaceId?: pulumi.Input<string>;
    /**
     * The subscription ID of this resource.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The tenant ID of this resource.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    tenantTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    tenantedDeploymentParticipation?: pulumi.Input<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a AzureServicePrincipal resource.
 */
export interface AzureServicePrincipalArgs {
    /**
     * The application ID of this resource.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The authentication endpoint URI for this resource.
     */
    authenticationEndpoint?: pulumi.Input<string>;
    /**
     * The Azure environment associated with this resource. Valid Azure environments are `AzureCloud`, `AzureChinaCloud`,
     * `AzureGermanCloud`, or `AzureUSGovernment`.
     */
    azureEnvironment?: pulumi.Input<string>;
    /**
     * The description of this Azure service principal account.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of environment IDs associated with this resource.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The password associated with this resource.
     */
    password: pulumi.Input<string>;
    /**
     * The resource manager endpoint URI for this resource.
     */
    resourceManagerEndpoint?: pulumi.Input<string>;
    /**
     * The space ID associated with this resource.
     */
    spaceId?: pulumi.Input<string>;
    /**
     * The subscription ID of this resource.
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * The tenant ID of this resource.
     */
    tenantId: pulumi.Input<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    tenantTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    tenantedDeploymentParticipation?: pulumi.Input<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
}
