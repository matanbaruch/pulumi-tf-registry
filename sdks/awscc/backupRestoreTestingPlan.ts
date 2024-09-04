// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupRestoreTestingPlan extends pulumi.CustomResource {
    /**
     * Get an existing BackupRestoreTestingPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupRestoreTestingPlanState, opts?: pulumi.CustomResourceOptions): BackupRestoreTestingPlan {
        return new BackupRestoreTestingPlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/backupRestoreTestingPlan:BackupRestoreTestingPlan';

    /**
     * Returns true if the given object is an instance of BackupRestoreTestingPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupRestoreTestingPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupRestoreTestingPlan.__pulumiType;
    }

    public readonly recoveryPointSelection!: pulumi.Output<outputs.BackupRestoreTestingPlanRecoveryPointSelection>;
    public /*out*/ readonly restoreTestingPlanArn!: pulumi.Output<string>;
    public readonly restoreTestingPlanName!: pulumi.Output<string>;
    public readonly scheduleExpression!: pulumi.Output<string>;
    public readonly scheduleExpressionTimezone!: pulumi.Output<string>;
    public readonly startWindowHours!: pulumi.Output<number>;
    public readonly tags!: pulumi.Output<outputs.BackupRestoreTestingPlanTag[]>;

    /**
     * Create a BackupRestoreTestingPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupRestoreTestingPlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupRestoreTestingPlanArgs | BackupRestoreTestingPlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupRestoreTestingPlanState | undefined;
            resourceInputs["recoveryPointSelection"] = state ? state.recoveryPointSelection : undefined;
            resourceInputs["restoreTestingPlanArn"] = state ? state.restoreTestingPlanArn : undefined;
            resourceInputs["restoreTestingPlanName"] = state ? state.restoreTestingPlanName : undefined;
            resourceInputs["scheduleExpression"] = state ? state.scheduleExpression : undefined;
            resourceInputs["scheduleExpressionTimezone"] = state ? state.scheduleExpressionTimezone : undefined;
            resourceInputs["startWindowHours"] = state ? state.startWindowHours : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as BackupRestoreTestingPlanArgs | undefined;
            if ((!args || args.recoveryPointSelection === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recoveryPointSelection'");
            }
            if ((!args || args.restoreTestingPlanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restoreTestingPlanName'");
            }
            if ((!args || args.scheduleExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleExpression'");
            }
            resourceInputs["recoveryPointSelection"] = args ? args.recoveryPointSelection : undefined;
            resourceInputs["restoreTestingPlanName"] = args ? args.restoreTestingPlanName : undefined;
            resourceInputs["scheduleExpression"] = args ? args.scheduleExpression : undefined;
            resourceInputs["scheduleExpressionTimezone"] = args ? args.scheduleExpressionTimezone : undefined;
            resourceInputs["startWindowHours"] = args ? args.startWindowHours : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["restoreTestingPlanArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupRestoreTestingPlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupRestoreTestingPlan resources.
 */
export interface BackupRestoreTestingPlanState {
    recoveryPointSelection?: pulumi.Input<inputs.BackupRestoreTestingPlanRecoveryPointSelection>;
    restoreTestingPlanArn?: pulumi.Input<string>;
    restoreTestingPlanName?: pulumi.Input<string>;
    scheduleExpression?: pulumi.Input<string>;
    scheduleExpressionTimezone?: pulumi.Input<string>;
    startWindowHours?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.BackupRestoreTestingPlanTag>[]>;
}

/**
 * The set of arguments for constructing a BackupRestoreTestingPlan resource.
 */
export interface BackupRestoreTestingPlanArgs {
    recoveryPointSelection: pulumi.Input<inputs.BackupRestoreTestingPlanRecoveryPointSelection>;
    restoreTestingPlanName: pulumi.Input<string>;
    scheduleExpression: pulumi.Input<string>;
    scheduleExpressionTimezone?: pulumi.Input<string>;
    startWindowHours?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.BackupRestoreTestingPlanTag>[]>;
}
