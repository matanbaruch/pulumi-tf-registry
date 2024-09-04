// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataSafeAuditPolicyManagement extends pulumi.CustomResource {
    /**
     * Get an existing DataSafeAuditPolicyManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSafeAuditPolicyManagementState, opts?: pulumi.CustomResourceOptions): DataSafeAuditPolicyManagement {
        return new DataSafeAuditPolicyManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/dataSafeAuditPolicyManagement:DataSafeAuditPolicyManagement';

    /**
     * Returns true if the given object is an instance of DataSafeAuditPolicyManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSafeAuditPolicyManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSafeAuditPolicyManagement.__pulumiType;
    }

    public readonly auditConditions!: pulumi.Output<outputs.DataSafeAuditPolicyManagementAuditCondition[] | undefined>;
    public /*out*/ readonly auditSpecifications!: pulumi.Output<outputs.DataSafeAuditPolicyManagementAuditSpecification[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isDataSafeServiceAccountExcluded!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly provisionTrigger!: pulumi.Output<boolean | undefined>;
    public readonly retrieveFromTargetTrigger!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public readonly targetId!: pulumi.Output<string | undefined>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeLastProvisioned!: pulumi.Output<string>;
    public /*out*/ readonly timeLastRetrieved!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataSafeAuditPolicyManagementTimeouts | undefined>;

    /**
     * Create a DataSafeAuditPolicyManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DataSafeAuditPolicyManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSafeAuditPolicyManagementArgs | DataSafeAuditPolicyManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSafeAuditPolicyManagementState | undefined;
            resourceInputs["auditConditions"] = state ? state.auditConditions : undefined;
            resourceInputs["auditSpecifications"] = state ? state.auditSpecifications : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isDataSafeServiceAccountExcluded"] = state ? state.isDataSafeServiceAccountExcluded : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["provisionTrigger"] = state ? state.provisionTrigger : undefined;
            resourceInputs["retrieveFromTargetTrigger"] = state ? state.retrieveFromTargetTrigger : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["targetId"] = state ? state.targetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeLastProvisioned"] = state ? state.timeLastProvisioned : undefined;
            resourceInputs["timeLastRetrieved"] = state ? state.timeLastRetrieved : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataSafeAuditPolicyManagementArgs | undefined;
            resourceInputs["auditConditions"] = args ? args.auditConditions : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isDataSafeServiceAccountExcluded"] = args ? args.isDataSafeServiceAccountExcluded : undefined;
            resourceInputs["provisionTrigger"] = args ? args.provisionTrigger : undefined;
            resourceInputs["retrieveFromTargetTrigger"] = args ? args.retrieveFromTargetTrigger : undefined;
            resourceInputs["targetId"] = args ? args.targetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["auditSpecifications"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeLastProvisioned"] = undefined /*out*/;
            resourceInputs["timeLastRetrieved"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataSafeAuditPolicyManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataSafeAuditPolicyManagement resources.
 */
export interface DataSafeAuditPolicyManagementState {
    auditConditions?: pulumi.Input<pulumi.Input<inputs.DataSafeAuditPolicyManagementAuditCondition>[]>;
    auditSpecifications?: pulumi.Input<pulumi.Input<inputs.DataSafeAuditPolicyManagementAuditSpecification>[]>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isDataSafeServiceAccountExcluded?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    provisionTrigger?: pulumi.Input<boolean>;
    retrieveFromTargetTrigger?: pulumi.Input<boolean>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeLastProvisioned?: pulumi.Input<string>;
    timeLastRetrieved?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeAuditPolicyManagementTimeouts>;
}

/**
 * The set of arguments for constructing a DataSafeAuditPolicyManagement resource.
 */
export interface DataSafeAuditPolicyManagementArgs {
    auditConditions?: pulumi.Input<pulumi.Input<inputs.DataSafeAuditPolicyManagementAuditCondition>[]>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isDataSafeServiceAccountExcluded?: pulumi.Input<boolean>;
    provisionTrigger?: pulumi.Input<boolean>;
    retrieveFromTargetTrigger?: pulumi.Input<boolean>;
    targetId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeAuditPolicyManagementTimeouts>;
}
