// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SiteRecoveryReplicationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SiteRecoveryReplicationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteRecoveryReplicationPolicyState, opts?: pulumi.CustomResourceOptions): SiteRecoveryReplicationPolicy {
        return new SiteRecoveryReplicationPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/siteRecoveryReplicationPolicy:SiteRecoveryReplicationPolicy';

    /**
     * Returns true if the given object is an instance of SiteRecoveryReplicationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SiteRecoveryReplicationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SiteRecoveryReplicationPolicy.__pulumiType;
    }

    public readonly applicationConsistentSnapshotFrequencyInMinutes!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly recoveryPointRetentionInMinutes!: pulumi.Output<number>;
    public readonly recoveryVaultName!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SiteRecoveryReplicationPolicyTimeouts | undefined>;

    /**
     * Create a SiteRecoveryReplicationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteRecoveryReplicationPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SiteRecoveryReplicationPolicyArgs | SiteRecoveryReplicationPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SiteRecoveryReplicationPolicyState | undefined;
            resourceInputs["applicationConsistentSnapshotFrequencyInMinutes"] = state ? state.applicationConsistentSnapshotFrequencyInMinutes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["recoveryPointRetentionInMinutes"] = state ? state.recoveryPointRetentionInMinutes : undefined;
            resourceInputs["recoveryVaultName"] = state ? state.recoveryVaultName : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SiteRecoveryReplicationPolicyArgs | undefined;
            if ((!args || args.applicationConsistentSnapshotFrequencyInMinutes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationConsistentSnapshotFrequencyInMinutes'");
            }
            if ((!args || args.recoveryPointRetentionInMinutes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recoveryPointRetentionInMinutes'");
            }
            if ((!args || args.recoveryVaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recoveryVaultName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationConsistentSnapshotFrequencyInMinutes"] = args ? args.applicationConsistentSnapshotFrequencyInMinutes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recoveryPointRetentionInMinutes"] = args ? args.recoveryPointRetentionInMinutes : undefined;
            resourceInputs["recoveryVaultName"] = args ? args.recoveryVaultName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SiteRecoveryReplicationPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SiteRecoveryReplicationPolicy resources.
 */
export interface SiteRecoveryReplicationPolicyState {
    applicationConsistentSnapshotFrequencyInMinutes?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    recoveryPointRetentionInMinutes?: pulumi.Input<number>;
    recoveryVaultName?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SiteRecoveryReplicationPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a SiteRecoveryReplicationPolicy resource.
 */
export interface SiteRecoveryReplicationPolicyArgs {
    applicationConsistentSnapshotFrequencyInMinutes: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    recoveryPointRetentionInMinutes: pulumi.Input<number>;
    recoveryVaultName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SiteRecoveryReplicationPolicyTimeouts>;
}
