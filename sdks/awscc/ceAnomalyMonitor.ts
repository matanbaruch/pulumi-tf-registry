// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CeAnomalyMonitor extends pulumi.CustomResource {
    /**
     * Get an existing CeAnomalyMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CeAnomalyMonitorState, opts?: pulumi.CustomResourceOptions): CeAnomalyMonitor {
        return new CeAnomalyMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ceAnomalyMonitor:CeAnomalyMonitor';

    /**
     * Returns true if the given object is an instance of CeAnomalyMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CeAnomalyMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CeAnomalyMonitor.__pulumiType;
    }

    /**
     * The date when the monitor was created.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The value for evaluated dimensions.
     */
    public /*out*/ readonly dimensionalValueCount!: pulumi.Output<number>;
    /**
     * The date when the monitor last evaluated for anomalies.
     */
    public /*out*/ readonly lastEvaluatedDate!: pulumi.Output<string>;
    /**
     * The date when the monitor was last updated.
     */
    public /*out*/ readonly lastUpdatedDate!: pulumi.Output<string>;
    /**
     * Monitor ARN
     */
    public /*out*/ readonly monitorArn!: pulumi.Output<string>;
    /**
     * The dimensions to evaluate
     */
    public readonly monitorDimension!: pulumi.Output<string>;
    /**
     * The name of the monitor.
     */
    public readonly monitorName!: pulumi.Output<string>;
    public readonly monitorSpecification!: pulumi.Output<string>;
    public readonly monitorType!: pulumi.Output<string>;
    /**
     * Tags to assign to monitor.
     */
    public readonly resourceTags!: pulumi.Output<outputs.CeAnomalyMonitorResourceTag[]>;

    /**
     * Create a CeAnomalyMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CeAnomalyMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CeAnomalyMonitorArgs | CeAnomalyMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CeAnomalyMonitorState | undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["dimensionalValueCount"] = state ? state.dimensionalValueCount : undefined;
            resourceInputs["lastEvaluatedDate"] = state ? state.lastEvaluatedDate : undefined;
            resourceInputs["lastUpdatedDate"] = state ? state.lastUpdatedDate : undefined;
            resourceInputs["monitorArn"] = state ? state.monitorArn : undefined;
            resourceInputs["monitorDimension"] = state ? state.monitorDimension : undefined;
            resourceInputs["monitorName"] = state ? state.monitorName : undefined;
            resourceInputs["monitorSpecification"] = state ? state.monitorSpecification : undefined;
            resourceInputs["monitorType"] = state ? state.monitorType : undefined;
            resourceInputs["resourceTags"] = state ? state.resourceTags : undefined;
        } else {
            const args = argsOrState as CeAnomalyMonitorArgs | undefined;
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.monitorType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorType'");
            }
            resourceInputs["monitorDimension"] = args ? args.monitorDimension : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["monitorSpecification"] = args ? args.monitorSpecification : undefined;
            resourceInputs["monitorType"] = args ? args.monitorType : undefined;
            resourceInputs["resourceTags"] = args ? args.resourceTags : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["dimensionalValueCount"] = undefined /*out*/;
            resourceInputs["lastEvaluatedDate"] = undefined /*out*/;
            resourceInputs["lastUpdatedDate"] = undefined /*out*/;
            resourceInputs["monitorArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CeAnomalyMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CeAnomalyMonitor resources.
 */
export interface CeAnomalyMonitorState {
    /**
     * The date when the monitor was created.
     */
    creationDate?: pulumi.Input<string>;
    /**
     * The value for evaluated dimensions.
     */
    dimensionalValueCount?: pulumi.Input<number>;
    /**
     * The date when the monitor last evaluated for anomalies.
     */
    lastEvaluatedDate?: pulumi.Input<string>;
    /**
     * The date when the monitor was last updated.
     */
    lastUpdatedDate?: pulumi.Input<string>;
    /**
     * Monitor ARN
     */
    monitorArn?: pulumi.Input<string>;
    /**
     * The dimensions to evaluate
     */
    monitorDimension?: pulumi.Input<string>;
    /**
     * The name of the monitor.
     */
    monitorName?: pulumi.Input<string>;
    monitorSpecification?: pulumi.Input<string>;
    monitorType?: pulumi.Input<string>;
    /**
     * Tags to assign to monitor.
     */
    resourceTags?: pulumi.Input<pulumi.Input<inputs.CeAnomalyMonitorResourceTag>[]>;
}

/**
 * The set of arguments for constructing a CeAnomalyMonitor resource.
 */
export interface CeAnomalyMonitorArgs {
    /**
     * The dimensions to evaluate
     */
    monitorDimension?: pulumi.Input<string>;
    /**
     * The name of the monitor.
     */
    monitorName: pulumi.Input<string>;
    monitorSpecification?: pulumi.Input<string>;
    monitorType: pulumi.Input<string>;
    /**
     * Tags to assign to monitor.
     */
    resourceTags?: pulumi.Input<pulumi.Input<inputs.CeAnomalyMonitorResourceTag>[]>;
}
