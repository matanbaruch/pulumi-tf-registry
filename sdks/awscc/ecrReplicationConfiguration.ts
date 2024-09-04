// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EcrReplicationConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing EcrReplicationConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcrReplicationConfigurationState, opts?: pulumi.CustomResourceOptions): EcrReplicationConfiguration {
        return new EcrReplicationConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ecrReplicationConfiguration:EcrReplicationConfiguration';

    /**
     * Returns true if the given object is an instance of EcrReplicationConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcrReplicationConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcrReplicationConfiguration.__pulumiType;
    }

    /**
     * The RegistryId associated with the aws account.
     */
    public /*out*/ readonly registryId!: pulumi.Output<string>;
    /**
     * An object representing the replication configuration for a registry.
     */
    public readonly replicationConfiguration!: pulumi.Output<outputs.EcrReplicationConfigurationReplicationConfiguration>;

    /**
     * Create a EcrReplicationConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EcrReplicationConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcrReplicationConfigurationArgs | EcrReplicationConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcrReplicationConfigurationState | undefined;
            resourceInputs["registryId"] = state ? state.registryId : undefined;
            resourceInputs["replicationConfiguration"] = state ? state.replicationConfiguration : undefined;
        } else {
            const args = argsOrState as EcrReplicationConfigurationArgs | undefined;
            if ((!args || args.replicationConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replicationConfiguration'");
            }
            resourceInputs["replicationConfiguration"] = args ? args.replicationConfiguration : undefined;
            resourceInputs["registryId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcrReplicationConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcrReplicationConfiguration resources.
 */
export interface EcrReplicationConfigurationState {
    /**
     * The RegistryId associated with the aws account.
     */
    registryId?: pulumi.Input<string>;
    /**
     * An object representing the replication configuration for a registry.
     */
    replicationConfiguration?: pulumi.Input<inputs.EcrReplicationConfigurationReplicationConfiguration>;
}

/**
 * The set of arguments for constructing a EcrReplicationConfiguration resource.
 */
export interface EcrReplicationConfigurationArgs {
    /**
     * An object representing the replication configuration for a registry.
     */
    replicationConfiguration: pulumi.Input<inputs.EcrReplicationConfigurationReplicationConfiguration>;
}
