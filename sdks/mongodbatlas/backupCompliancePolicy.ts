// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupCompliancePolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupCompliancePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupCompliancePolicyState, opts?: pulumi.CustomResourceOptions): BackupCompliancePolicy {
        return new BackupCompliancePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/backupCompliancePolicy:BackupCompliancePolicy';

    /**
     * Returns true if the given object is an instance of BackupCompliancePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupCompliancePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupCompliancePolicy.__pulumiType;
    }

    public readonly authorizedEmail!: pulumi.Output<string>;
    public readonly authorizedUserFirstName!: pulumi.Output<string>;
    public readonly authorizedUserLastName!: pulumi.Output<string>;
    public readonly copyProtectionEnabled!: pulumi.Output<boolean | undefined>;
    public readonly encryptionAtRestEnabled!: pulumi.Output<boolean | undefined>;
    public readonly onDemandPolicyItem!: pulumi.Output<outputs.BackupCompliancePolicyOnDemandPolicyItem>;
    public readonly pitEnabled!: pulumi.Output<boolean | undefined>;
    public readonly policyItemDaily!: pulumi.Output<outputs.BackupCompliancePolicyPolicyItemDaily | undefined>;
    public readonly policyItemHourly!: pulumi.Output<outputs.BackupCompliancePolicyPolicyItemHourly | undefined>;
    public readonly policyItemMonthlies!: pulumi.Output<outputs.BackupCompliancePolicyPolicyItemMonthly[] | undefined>;
    public readonly policyItemWeeklies!: pulumi.Output<outputs.BackupCompliancePolicyPolicyItemWeekly[] | undefined>;
    public readonly policyItemYearlies!: pulumi.Output<outputs.BackupCompliancePolicyPolicyItemYearly[] | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly restoreWindowDays!: pulumi.Output<number>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly updatedDate!: pulumi.Output<string>;
    public /*out*/ readonly updatedUser!: pulumi.Output<string>;

    /**
     * Create a BackupCompliancePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupCompliancePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupCompliancePolicyArgs | BackupCompliancePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupCompliancePolicyState | undefined;
            resourceInputs["authorizedEmail"] = state ? state.authorizedEmail : undefined;
            resourceInputs["authorizedUserFirstName"] = state ? state.authorizedUserFirstName : undefined;
            resourceInputs["authorizedUserLastName"] = state ? state.authorizedUserLastName : undefined;
            resourceInputs["copyProtectionEnabled"] = state ? state.copyProtectionEnabled : undefined;
            resourceInputs["encryptionAtRestEnabled"] = state ? state.encryptionAtRestEnabled : undefined;
            resourceInputs["onDemandPolicyItem"] = state ? state.onDemandPolicyItem : undefined;
            resourceInputs["pitEnabled"] = state ? state.pitEnabled : undefined;
            resourceInputs["policyItemDaily"] = state ? state.policyItemDaily : undefined;
            resourceInputs["policyItemHourly"] = state ? state.policyItemHourly : undefined;
            resourceInputs["policyItemMonthlies"] = state ? state.policyItemMonthlies : undefined;
            resourceInputs["policyItemWeeklies"] = state ? state.policyItemWeeklies : undefined;
            resourceInputs["policyItemYearlies"] = state ? state.policyItemYearlies : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["restoreWindowDays"] = state ? state.restoreWindowDays : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["updatedDate"] = state ? state.updatedDate : undefined;
            resourceInputs["updatedUser"] = state ? state.updatedUser : undefined;
        } else {
            const args = argsOrState as BackupCompliancePolicyArgs | undefined;
            if ((!args || args.authorizedEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizedEmail'");
            }
            if ((!args || args.authorizedUserFirstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizedUserFirstName'");
            }
            if ((!args || args.authorizedUserLastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizedUserLastName'");
            }
            if ((!args || args.onDemandPolicyItem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onDemandPolicyItem'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["authorizedEmail"] = args ? args.authorizedEmail : undefined;
            resourceInputs["authorizedUserFirstName"] = args ? args.authorizedUserFirstName : undefined;
            resourceInputs["authorizedUserLastName"] = args ? args.authorizedUserLastName : undefined;
            resourceInputs["copyProtectionEnabled"] = args ? args.copyProtectionEnabled : undefined;
            resourceInputs["encryptionAtRestEnabled"] = args ? args.encryptionAtRestEnabled : undefined;
            resourceInputs["onDemandPolicyItem"] = args ? args.onDemandPolicyItem : undefined;
            resourceInputs["pitEnabled"] = args ? args.pitEnabled : undefined;
            resourceInputs["policyItemDaily"] = args ? args.policyItemDaily : undefined;
            resourceInputs["policyItemHourly"] = args ? args.policyItemHourly : undefined;
            resourceInputs["policyItemMonthlies"] = args ? args.policyItemMonthlies : undefined;
            resourceInputs["policyItemWeeklies"] = args ? args.policyItemWeeklies : undefined;
            resourceInputs["policyItemYearlies"] = args ? args.policyItemYearlies : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["restoreWindowDays"] = args ? args.restoreWindowDays : undefined;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["updatedDate"] = undefined /*out*/;
            resourceInputs["updatedUser"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupCompliancePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupCompliancePolicy resources.
 */
export interface BackupCompliancePolicyState {
    authorizedEmail?: pulumi.Input<string>;
    authorizedUserFirstName?: pulumi.Input<string>;
    authorizedUserLastName?: pulumi.Input<string>;
    copyProtectionEnabled?: pulumi.Input<boolean>;
    encryptionAtRestEnabled?: pulumi.Input<boolean>;
    onDemandPolicyItem?: pulumi.Input<inputs.BackupCompliancePolicyOnDemandPolicyItem>;
    pitEnabled?: pulumi.Input<boolean>;
    policyItemDaily?: pulumi.Input<inputs.BackupCompliancePolicyPolicyItemDaily>;
    policyItemHourly?: pulumi.Input<inputs.BackupCompliancePolicyPolicyItemHourly>;
    policyItemMonthlies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemMonthly>[]>;
    policyItemWeeklies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemWeekly>[]>;
    policyItemYearlies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemYearly>[]>;
    projectId?: pulumi.Input<string>;
    restoreWindowDays?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    updatedDate?: pulumi.Input<string>;
    updatedUser?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BackupCompliancePolicy resource.
 */
export interface BackupCompliancePolicyArgs {
    authorizedEmail: pulumi.Input<string>;
    authorizedUserFirstName: pulumi.Input<string>;
    authorizedUserLastName: pulumi.Input<string>;
    copyProtectionEnabled?: pulumi.Input<boolean>;
    encryptionAtRestEnabled?: pulumi.Input<boolean>;
    onDemandPolicyItem: pulumi.Input<inputs.BackupCompliancePolicyOnDemandPolicyItem>;
    pitEnabled?: pulumi.Input<boolean>;
    policyItemDaily?: pulumi.Input<inputs.BackupCompliancePolicyPolicyItemDaily>;
    policyItemHourly?: pulumi.Input<inputs.BackupCompliancePolicyPolicyItemHourly>;
    policyItemMonthlies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemMonthly>[]>;
    policyItemWeeklies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemWeekly>[]>;
    policyItemYearlies?: pulumi.Input<pulumi.Input<inputs.BackupCompliancePolicyPolicyItemYearly>[]>;
    projectId: pulumi.Input<string>;
    restoreWindowDays?: pulumi.Input<number>;
}
