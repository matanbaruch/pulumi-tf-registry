// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CmsHybridMonitorFcTask extends pulumi.CustomResource {
    /**
     * Get an existing CmsHybridMonitorFcTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmsHybridMonitorFcTaskState, opts?: pulumi.CustomResourceOptions): CmsHybridMonitorFcTask {
        return new CmsHybridMonitorFcTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cmsHybridMonitorFcTask:CmsHybridMonitorFcTask';

    /**
     * Returns true if the given object is an instance of CmsHybridMonitorFcTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CmsHybridMonitorFcTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CmsHybridMonitorFcTask.__pulumiType;
    }

    public /*out*/ readonly hybridMonitorFcTaskId!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly targetUserId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CmsHybridMonitorFcTaskTimeouts | undefined>;
    public readonly yarmConfig!: pulumi.Output<string>;

    /**
     * Create a CmsHybridMonitorFcTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CmsHybridMonitorFcTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmsHybridMonitorFcTaskArgs | CmsHybridMonitorFcTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmsHybridMonitorFcTaskState | undefined;
            resourceInputs["hybridMonitorFcTaskId"] = state ? state.hybridMonitorFcTaskId : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["targetUserId"] = state ? state.targetUserId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["yarmConfig"] = state ? state.yarmConfig : undefined;
        } else {
            const args = argsOrState as CmsHybridMonitorFcTaskArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.yarmConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'yarmConfig'");
            }
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["targetUserId"] = args ? args.targetUserId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["yarmConfig"] = args ? args.yarmConfig : undefined;
            resourceInputs["hybridMonitorFcTaskId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CmsHybridMonitorFcTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CmsHybridMonitorFcTask resources.
 */
export interface CmsHybridMonitorFcTaskState {
    hybridMonitorFcTaskId?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    targetUserId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CmsHybridMonitorFcTaskTimeouts>;
    yarmConfig?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CmsHybridMonitorFcTask resource.
 */
export interface CmsHybridMonitorFcTaskArgs {
    namespace: pulumi.Input<string>;
    targetUserId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CmsHybridMonitorFcTaskTimeouts>;
    yarmConfig: pulumi.Input<string>;
}
