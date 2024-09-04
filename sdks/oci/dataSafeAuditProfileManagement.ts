// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataSafeAuditProfileManagement extends pulumi.CustomResource {
    /**
     * Get an existing DataSafeAuditProfileManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSafeAuditProfileManagementState, opts?: pulumi.CustomResourceOptions): DataSafeAuditProfileManagement {
        return new DataSafeAuditProfileManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/dataSafeAuditProfileManagement:DataSafeAuditProfileManagement';

    /**
     * Returns true if the given object is an instance of DataSafeAuditProfileManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSafeAuditProfileManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSafeAuditProfileManagement.__pulumiType;
    }

    public /*out*/ readonly auditCollectedVolume!: pulumi.Output<string>;
    public readonly changeRetentionTrigger!: pulumi.Output<boolean | undefined>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isOverrideGlobalRetentionSetting!: pulumi.Output<boolean | undefined>;
    public readonly isPaidUsageEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly offlineMonths!: pulumi.Output<number | undefined>;
    public readonly onlineMonths!: pulumi.Output<number | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly targetId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataSafeAuditProfileManagementTimeouts | undefined>;

    /**
     * Create a DataSafeAuditProfileManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DataSafeAuditProfileManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSafeAuditProfileManagementArgs | DataSafeAuditProfileManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSafeAuditProfileManagementState | undefined;
            resourceInputs["auditCollectedVolume"] = state ? state.auditCollectedVolume : undefined;
            resourceInputs["changeRetentionTrigger"] = state ? state.changeRetentionTrigger : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isOverrideGlobalRetentionSetting"] = state ? state.isOverrideGlobalRetentionSetting : undefined;
            resourceInputs["isPaidUsageEnabled"] = state ? state.isPaidUsageEnabled : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["offlineMonths"] = state ? state.offlineMonths : undefined;
            resourceInputs["onlineMonths"] = state ? state.onlineMonths : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["targetId"] = state ? state.targetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataSafeAuditProfileManagementArgs | undefined;
            resourceInputs["changeRetentionTrigger"] = args ? args.changeRetentionTrigger : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isOverrideGlobalRetentionSetting"] = args ? args.isOverrideGlobalRetentionSetting : undefined;
            resourceInputs["isPaidUsageEnabled"] = args ? args.isPaidUsageEnabled : undefined;
            resourceInputs["offlineMonths"] = args ? args.offlineMonths : undefined;
            resourceInputs["onlineMonths"] = args ? args.onlineMonths : undefined;
            resourceInputs["targetId"] = args ? args.targetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["auditCollectedVolume"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataSafeAuditProfileManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataSafeAuditProfileManagement resources.
 */
export interface DataSafeAuditProfileManagementState {
    auditCollectedVolume?: pulumi.Input<string>;
    changeRetentionTrigger?: pulumi.Input<boolean>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isOverrideGlobalRetentionSetting?: pulumi.Input<boolean>;
    isPaidUsageEnabled?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    offlineMonths?: pulumi.Input<number>;
    onlineMonths?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeAuditProfileManagementTimeouts>;
}

/**
 * The set of arguments for constructing a DataSafeAuditProfileManagement resource.
 */
export interface DataSafeAuditProfileManagementArgs {
    changeRetentionTrigger?: pulumi.Input<boolean>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isOverrideGlobalRetentionSetting?: pulumi.Input<boolean>;
    isPaidUsageEnabled?: pulumi.Input<boolean>;
    offlineMonths?: pulumi.Input<number>;
    onlineMonths?: pulumi.Input<number>;
    targetId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeAuditProfileManagementTimeouts>;
}
