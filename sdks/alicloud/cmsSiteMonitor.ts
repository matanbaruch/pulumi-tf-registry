// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CmsSiteMonitor extends pulumi.CustomResource {
    /**
     * Get an existing CmsSiteMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmsSiteMonitorState, opts?: pulumi.CustomResourceOptions): CmsSiteMonitor {
        return new CmsSiteMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cmsSiteMonitor:CmsSiteMonitor';

    /**
     * Returns true if the given object is an instance of CmsSiteMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CmsSiteMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CmsSiteMonitor.__pulumiType;
    }

    public readonly address!: pulumi.Output<string>;
    public readonly alertIds!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly interval!: pulumi.Output<number | undefined>;
    public readonly ispCities!: pulumi.Output<outputs.CmsSiteMonitorIspCity[] | undefined>;
    public readonly optionsJson!: pulumi.Output<string | undefined>;
    public readonly taskName!: pulumi.Output<string>;
    public /*out*/ readonly taskState!: pulumi.Output<string>;
    public readonly taskType!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CmsSiteMonitorTimeouts | undefined>;
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a CmsSiteMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CmsSiteMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmsSiteMonitorArgs | CmsSiteMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmsSiteMonitorState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["alertIds"] = state ? state.alertIds : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["ispCities"] = state ? state.ispCities : undefined;
            resourceInputs["optionsJson"] = state ? state.optionsJson : undefined;
            resourceInputs["taskName"] = state ? state.taskName : undefined;
            resourceInputs["taskState"] = state ? state.taskState : undefined;
            resourceInputs["taskType"] = state ? state.taskType : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as CmsSiteMonitorArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.taskName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskName'");
            }
            if ((!args || args.taskType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskType'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["alertIds"] = args ? args.alertIds : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["ispCities"] = args ? args.ispCities : undefined;
            resourceInputs["optionsJson"] = args ? args.optionsJson : undefined;
            resourceInputs["taskName"] = args ? args.taskName : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["taskState"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CmsSiteMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CmsSiteMonitor resources.
 */
export interface CmsSiteMonitorState {
    address?: pulumi.Input<string>;
    alertIds?: pulumi.Input<pulumi.Input<string>[]>;
    createTime?: pulumi.Input<string>;
    interval?: pulumi.Input<number>;
    ispCities?: pulumi.Input<pulumi.Input<inputs.CmsSiteMonitorIspCity>[]>;
    optionsJson?: pulumi.Input<string>;
    taskName?: pulumi.Input<string>;
    taskState?: pulumi.Input<string>;
    taskType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CmsSiteMonitorTimeouts>;
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CmsSiteMonitor resource.
 */
export interface CmsSiteMonitorArgs {
    address: pulumi.Input<string>;
    alertIds?: pulumi.Input<pulumi.Input<string>[]>;
    interval?: pulumi.Input<number>;
    ispCities?: pulumi.Input<pulumi.Input<inputs.CmsSiteMonitorIspCity>[]>;
    optionsJson?: pulumi.Input<string>;
    taskName: pulumi.Input<string>;
    taskType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CmsSiteMonitorTimeouts>;
}
