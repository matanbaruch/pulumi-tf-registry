// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LakehouseMonitor extends pulumi.CustomResource {
    /**
     * Get an existing LakehouseMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LakehouseMonitorState, opts?: pulumi.CustomResourceOptions): LakehouseMonitor {
        return new LakehouseMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/lakehouseMonitor:LakehouseMonitor';

    /**
     * Returns true if the given object is an instance of LakehouseMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LakehouseMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LakehouseMonitor.__pulumiType;
    }

    public readonly assetsDir!: pulumi.Output<string>;
    public readonly baselineTableName!: pulumi.Output<string | undefined>;
    public readonly customMetrics!: pulumi.Output<outputs.LakehouseMonitorCustomMetric[] | undefined>;
    public /*out*/ readonly dashboardId!: pulumi.Output<string>;
    public readonly dataClassificationConfig!: pulumi.Output<outputs.LakehouseMonitorDataClassificationConfig | undefined>;
    public /*out*/ readonly driftMetricsTableName!: pulumi.Output<string>;
    public readonly inferenceLog!: pulumi.Output<outputs.LakehouseMonitorInferenceLog | undefined>;
    public readonly latestMonitorFailureMsg!: pulumi.Output<string | undefined>;
    public /*out*/ readonly monitorVersion!: pulumi.Output<string>;
    public readonly notifications!: pulumi.Output<outputs.LakehouseMonitorNotifications | undefined>;
    public readonly outputSchemaName!: pulumi.Output<string>;
    public /*out*/ readonly profileMetricsTableName!: pulumi.Output<string>;
    public readonly schedule!: pulumi.Output<outputs.LakehouseMonitorSchedule | undefined>;
    public readonly skipBuiltinDashboard!: pulumi.Output<boolean | undefined>;
    public readonly slicingExprs!: pulumi.Output<string[] | undefined>;
    public readonly snapshot!: pulumi.Output<outputs.LakehouseMonitorSnapshot | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tableName!: pulumi.Output<string>;
    public readonly timeSeries!: pulumi.Output<outputs.LakehouseMonitorTimeSeries | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.LakehouseMonitorTimeouts | undefined>;
    public readonly warehouseId!: pulumi.Output<string | undefined>;

    /**
     * Create a LakehouseMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LakehouseMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LakehouseMonitorArgs | LakehouseMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LakehouseMonitorState | undefined;
            resourceInputs["assetsDir"] = state ? state.assetsDir : undefined;
            resourceInputs["baselineTableName"] = state ? state.baselineTableName : undefined;
            resourceInputs["customMetrics"] = state ? state.customMetrics : undefined;
            resourceInputs["dashboardId"] = state ? state.dashboardId : undefined;
            resourceInputs["dataClassificationConfig"] = state ? state.dataClassificationConfig : undefined;
            resourceInputs["driftMetricsTableName"] = state ? state.driftMetricsTableName : undefined;
            resourceInputs["inferenceLog"] = state ? state.inferenceLog : undefined;
            resourceInputs["latestMonitorFailureMsg"] = state ? state.latestMonitorFailureMsg : undefined;
            resourceInputs["monitorVersion"] = state ? state.monitorVersion : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["outputSchemaName"] = state ? state.outputSchemaName : undefined;
            resourceInputs["profileMetricsTableName"] = state ? state.profileMetricsTableName : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["skipBuiltinDashboard"] = state ? state.skipBuiltinDashboard : undefined;
            resourceInputs["slicingExprs"] = state ? state.slicingExprs : undefined;
            resourceInputs["snapshot"] = state ? state.snapshot : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tableName"] = state ? state.tableName : undefined;
            resourceInputs["timeSeries"] = state ? state.timeSeries : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["warehouseId"] = state ? state.warehouseId : undefined;
        } else {
            const args = argsOrState as LakehouseMonitorArgs | undefined;
            if ((!args || args.assetsDir === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetsDir'");
            }
            if ((!args || args.outputSchemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputSchemaName'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            resourceInputs["assetsDir"] = args ? args.assetsDir : undefined;
            resourceInputs["baselineTableName"] = args ? args.baselineTableName : undefined;
            resourceInputs["customMetrics"] = args ? args.customMetrics : undefined;
            resourceInputs["dataClassificationConfig"] = args ? args.dataClassificationConfig : undefined;
            resourceInputs["inferenceLog"] = args ? args.inferenceLog : undefined;
            resourceInputs["latestMonitorFailureMsg"] = args ? args.latestMonitorFailureMsg : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["outputSchemaName"] = args ? args.outputSchemaName : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["skipBuiltinDashboard"] = args ? args.skipBuiltinDashboard : undefined;
            resourceInputs["slicingExprs"] = args ? args.slicingExprs : undefined;
            resourceInputs["snapshot"] = args ? args.snapshot : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["timeSeries"] = args ? args.timeSeries : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["warehouseId"] = args ? args.warehouseId : undefined;
            resourceInputs["dashboardId"] = undefined /*out*/;
            resourceInputs["driftMetricsTableName"] = undefined /*out*/;
            resourceInputs["monitorVersion"] = undefined /*out*/;
            resourceInputs["profileMetricsTableName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LakehouseMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LakehouseMonitor resources.
 */
export interface LakehouseMonitorState {
    assetsDir?: pulumi.Input<string>;
    baselineTableName?: pulumi.Input<string>;
    customMetrics?: pulumi.Input<pulumi.Input<inputs.LakehouseMonitorCustomMetric>[]>;
    dashboardId?: pulumi.Input<string>;
    dataClassificationConfig?: pulumi.Input<inputs.LakehouseMonitorDataClassificationConfig>;
    driftMetricsTableName?: pulumi.Input<string>;
    inferenceLog?: pulumi.Input<inputs.LakehouseMonitorInferenceLog>;
    latestMonitorFailureMsg?: pulumi.Input<string>;
    monitorVersion?: pulumi.Input<string>;
    notifications?: pulumi.Input<inputs.LakehouseMonitorNotifications>;
    outputSchemaName?: pulumi.Input<string>;
    profileMetricsTableName?: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.LakehouseMonitorSchedule>;
    skipBuiltinDashboard?: pulumi.Input<boolean>;
    slicingExprs?: pulumi.Input<pulumi.Input<string>[]>;
    snapshot?: pulumi.Input<inputs.LakehouseMonitorSnapshot>;
    status?: pulumi.Input<string>;
    tableName?: pulumi.Input<string>;
    timeSeries?: pulumi.Input<inputs.LakehouseMonitorTimeSeries>;
    timeouts?: pulumi.Input<inputs.LakehouseMonitorTimeouts>;
    warehouseId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LakehouseMonitor resource.
 */
export interface LakehouseMonitorArgs {
    assetsDir: pulumi.Input<string>;
    baselineTableName?: pulumi.Input<string>;
    customMetrics?: pulumi.Input<pulumi.Input<inputs.LakehouseMonitorCustomMetric>[]>;
    dataClassificationConfig?: pulumi.Input<inputs.LakehouseMonitorDataClassificationConfig>;
    inferenceLog?: pulumi.Input<inputs.LakehouseMonitorInferenceLog>;
    latestMonitorFailureMsg?: pulumi.Input<string>;
    notifications?: pulumi.Input<inputs.LakehouseMonitorNotifications>;
    outputSchemaName: pulumi.Input<string>;
    schedule?: pulumi.Input<inputs.LakehouseMonitorSchedule>;
    skipBuiltinDashboard?: pulumi.Input<boolean>;
    slicingExprs?: pulumi.Input<pulumi.Input<string>[]>;
    snapshot?: pulumi.Input<inputs.LakehouseMonitorSnapshot>;
    tableName: pulumi.Input<string>;
    timeSeries?: pulumi.Input<inputs.LakehouseMonitorTimeSeries>;
    timeouts?: pulumi.Input<inputs.LakehouseMonitorTimeouts>;
    warehouseId?: pulumi.Input<string>;
}
