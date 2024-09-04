// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MwsStorageConfigurations extends pulumi.CustomResource {
    /**
     * Get an existing MwsStorageConfigurations resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MwsStorageConfigurationsState, opts?: pulumi.CustomResourceOptions): MwsStorageConfigurations {
        return new MwsStorageConfigurations(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/mwsStorageConfigurations:MwsStorageConfigurations';

    /**
     * Returns true if the given object is an instance of MwsStorageConfigurations.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MwsStorageConfigurations {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MwsStorageConfigurations.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string>;
    public readonly bucketName!: pulumi.Output<string>;
    public /*out*/ readonly creationTime!: pulumi.Output<number>;
    public /*out*/ readonly storageConfigurationId!: pulumi.Output<string>;
    public readonly storageConfigurationName!: pulumi.Output<string>;

    /**
     * Create a MwsStorageConfigurations resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MwsStorageConfigurationsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MwsStorageConfigurationsArgs | MwsStorageConfigurationsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MwsStorageConfigurationsState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["bucketName"] = state ? state.bucketName : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["storageConfigurationId"] = state ? state.storageConfigurationId : undefined;
            resourceInputs["storageConfigurationName"] = state ? state.storageConfigurationName : undefined;
        } else {
            const args = argsOrState as MwsStorageConfigurationsArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.bucketName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucketName'");
            }
            if ((!args || args.storageConfigurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageConfigurationName'");
            }
            resourceInputs["accountId"] = args?.accountId ? pulumi.secret(args.accountId) : undefined;
            resourceInputs["bucketName"] = args ? args.bucketName : undefined;
            resourceInputs["storageConfigurationName"] = args ? args.storageConfigurationName : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["storageConfigurationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountId"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MwsStorageConfigurations.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MwsStorageConfigurations resources.
 */
export interface MwsStorageConfigurationsState {
    accountId?: pulumi.Input<string>;
    bucketName?: pulumi.Input<string>;
    creationTime?: pulumi.Input<number>;
    storageConfigurationId?: pulumi.Input<string>;
    storageConfigurationName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MwsStorageConfigurations resource.
 */
export interface MwsStorageConfigurationsArgs {
    accountId: pulumi.Input<string>;
    bucketName: pulumi.Input<string>;
    storageConfigurationName: pulumi.Input<string>;
}
