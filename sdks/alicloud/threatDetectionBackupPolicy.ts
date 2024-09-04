// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ThreatDetectionBackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ThreatDetectionBackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ThreatDetectionBackupPolicyState, opts?: pulumi.CustomResourceOptions): ThreatDetectionBackupPolicy {
        return new ThreatDetectionBackupPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/threatDetectionBackupPolicy:ThreatDetectionBackupPolicy';

    /**
     * Returns true if the given object is an instance of ThreatDetectionBackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThreatDetectionBackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThreatDetectionBackupPolicy.__pulumiType;
    }

    public readonly backupPolicyName!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;
    public readonly policyRegionId!: pulumi.Output<string | undefined>;
    public readonly policyVersion!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ThreatDetectionBackupPolicyTimeouts | undefined>;
    public readonly uuidLists!: pulumi.Output<string[]>;

    /**
     * Create a ThreatDetectionBackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ThreatDetectionBackupPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ThreatDetectionBackupPolicyArgs | ThreatDetectionBackupPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ThreatDetectionBackupPolicyState | undefined;
            resourceInputs["backupPolicyName"] = state ? state.backupPolicyName : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["policyRegionId"] = state ? state.policyRegionId : undefined;
            resourceInputs["policyVersion"] = state ? state.policyVersion : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uuidLists"] = state ? state.uuidLists : undefined;
        } else {
            const args = argsOrState as ThreatDetectionBackupPolicyArgs | undefined;
            if ((!args || args.backupPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupPolicyName'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.policyVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyVersion'");
            }
            if ((!args || args.uuidLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uuidLists'");
            }
            resourceInputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["policyRegionId"] = args ? args.policyRegionId : undefined;
            resourceInputs["policyVersion"] = args ? args.policyVersion : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["uuidLists"] = args ? args.uuidLists : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ThreatDetectionBackupPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ThreatDetectionBackupPolicy resources.
 */
export interface ThreatDetectionBackupPolicyState {
    backupPolicyName?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
    policyRegionId?: pulumi.Input<string>;
    policyVersion?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionBackupPolicyTimeouts>;
    uuidLists?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ThreatDetectionBackupPolicy resource.
 */
export interface ThreatDetectionBackupPolicyArgs {
    backupPolicyName: pulumi.Input<string>;
    policy: pulumi.Input<string>;
    policyRegionId?: pulumi.Input<string>;
    policyVersion: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ThreatDetectionBackupPolicyTimeouts>;
    uuidLists: pulumi.Input<pulumi.Input<string>[]>;
}
