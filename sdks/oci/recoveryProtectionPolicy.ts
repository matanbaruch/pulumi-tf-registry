// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RecoveryProtectionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing RecoveryProtectionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecoveryProtectionPolicyState, opts?: pulumi.CustomResourceOptions): RecoveryProtectionPolicy {
        return new RecoveryProtectionPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/recoveryProtectionPolicy:RecoveryProtectionPolicy';

    /**
     * Returns true if the given object is an instance of RecoveryProtectionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecoveryProtectionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecoveryProtectionPolicy.__pulumiType;
    }

    public readonly backupRetentionPeriodInDays!: pulumi.Output<number>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly isPredefinedPolicy!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly mustEnforceCloudLocality!: pulumi.Output<boolean>;
    public readonly policyLockedDateTime!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.RecoveryProtectionPolicyTimeouts | undefined>;

    /**
     * Create a RecoveryProtectionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RecoveryProtectionPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecoveryProtectionPolicyArgs | RecoveryProtectionPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecoveryProtectionPolicyState | undefined;
            resourceInputs["backupRetentionPeriodInDays"] = state ? state.backupRetentionPeriodInDays : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isPredefinedPolicy"] = state ? state.isPredefinedPolicy : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["mustEnforceCloudLocality"] = state ? state.mustEnforceCloudLocality : undefined;
            resourceInputs["policyLockedDateTime"] = state ? state.policyLockedDateTime : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RecoveryProtectionPolicyArgs | undefined;
            if ((!args || args.backupRetentionPeriodInDays === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupRetentionPeriodInDays'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["backupRetentionPeriodInDays"] = args ? args.backupRetentionPeriodInDays : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["mustEnforceCloudLocality"] = args ? args.mustEnforceCloudLocality : undefined;
            resourceInputs["policyLockedDateTime"] = args ? args.policyLockedDateTime : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["isPredefinedPolicy"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RecoveryProtectionPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RecoveryProtectionPolicy resources.
 */
export interface RecoveryProtectionPolicyState {
    backupRetentionPeriodInDays?: pulumi.Input<number>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isPredefinedPolicy?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    mustEnforceCloudLocality?: pulumi.Input<boolean>;
    policyLockedDateTime?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RecoveryProtectionPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a RecoveryProtectionPolicy resource.
 */
export interface RecoveryProtectionPolicyArgs {
    backupRetentionPeriodInDays: pulumi.Input<number>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mustEnforceCloudLocality?: pulumi.Input<boolean>;
    policyLockedDateTime?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RecoveryProtectionPolicyTimeouts>;
}
