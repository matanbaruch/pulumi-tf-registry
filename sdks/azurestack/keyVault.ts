// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeyVault extends pulumi.CustomResource {
    /**
     * Get an existing KeyVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyVaultState, opts?: pulumi.CustomResourceOptions): KeyVault {
        return new KeyVault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurestack:index/keyVault:KeyVault';

    /**
     * Returns true if the given object is an instance of KeyVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyVault.__pulumiType;
    }

    public readonly accessPolicies!: pulumi.Output<outputs.KeyVaultAccessPolicy[]>;
    public readonly enableRbacAuthorization!: pulumi.Output<boolean | undefined>;
    public readonly enabledForDeployment!: pulumi.Output<boolean | undefined>;
    public readonly enabledForDiskEncryption!: pulumi.Output<boolean | undefined>;
    public readonly enabledForTemplateDeployment!: pulumi.Output<boolean | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkAcls!: pulumi.Output<outputs.KeyVaultNetworkAcls | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly skuName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KeyVaultTimeouts | undefined>;
    public /*out*/ readonly vaultUri!: pulumi.Output<string>;

    /**
     * Create a KeyVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyVaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyVaultArgs | KeyVaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyVaultState | undefined;
            resourceInputs["accessPolicies"] = state ? state.accessPolicies : undefined;
            resourceInputs["enableRbacAuthorization"] = state ? state.enableRbacAuthorization : undefined;
            resourceInputs["enabledForDeployment"] = state ? state.enabledForDeployment : undefined;
            resourceInputs["enabledForDiskEncryption"] = state ? state.enabledForDiskEncryption : undefined;
            resourceInputs["enabledForTemplateDeployment"] = state ? state.enabledForTemplateDeployment : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkAcls"] = state ? state.networkAcls : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["skuName"] = state ? state.skuName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vaultUri"] = state ? state.vaultUri : undefined;
        } else {
            const args = argsOrState as KeyVaultArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.skuName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'skuName'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["accessPolicies"] = args ? args.accessPolicies : undefined;
            resourceInputs["enableRbacAuthorization"] = args ? args.enableRbacAuthorization : undefined;
            resourceInputs["enabledForDeployment"] = args ? args.enabledForDeployment : undefined;
            resourceInputs["enabledForDiskEncryption"] = args ? args.enabledForDiskEncryption : undefined;
            resourceInputs["enabledForTemplateDeployment"] = args ? args.enabledForTemplateDeployment : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkAcls"] = args ? args.networkAcls : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vaultUri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KeyVault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyVault resources.
 */
export interface KeyVaultState {
    accessPolicies?: pulumi.Input<pulumi.Input<inputs.KeyVaultAccessPolicy>[]>;
    enableRbacAuthorization?: pulumi.Input<boolean>;
    enabledForDeployment?: pulumi.Input<boolean>;
    enabledForDiskEncryption?: pulumi.Input<boolean>;
    enabledForTemplateDeployment?: pulumi.Input<boolean>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkAcls?: pulumi.Input<inputs.KeyVaultNetworkAcls>;
    resourceGroupName?: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KeyVaultTimeouts>;
    vaultUri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyVault resource.
 */
export interface KeyVaultArgs {
    accessPolicies?: pulumi.Input<pulumi.Input<inputs.KeyVaultAccessPolicy>[]>;
    enableRbacAuthorization?: pulumi.Input<boolean>;
    enabledForDeployment?: pulumi.Input<boolean>;
    enabledForDiskEncryption?: pulumi.Input<boolean>;
    enabledForTemplateDeployment?: pulumi.Input<boolean>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkAcls?: pulumi.Input<inputs.KeyVaultNetworkAcls>;
    resourceGroupName: pulumi.Input<string>;
    skuName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tenantId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KeyVaultTimeouts>;
}
