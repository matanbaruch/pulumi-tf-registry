// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RocketmqInstance extends pulumi.CustomResource {
    /**
     * Get an existing RocketmqInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RocketmqInstanceState, opts?: pulumi.CustomResourceOptions): RocketmqInstance {
        return new RocketmqInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/rocketmqInstance:RocketmqInstance';

    /**
     * Returns true if the given object is an instance of RocketmqInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RocketmqInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RocketmqInstance.__pulumiType;
    }

    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    public readonly autoRenewPeriod!: pulumi.Output<number | undefined>;
    public readonly autoRenewPeriodUnit!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly instanceName!: pulumi.Output<string | undefined>;
    public readonly networkInfo!: pulumi.Output<outputs.RocketmqInstanceNetworkInfo>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly periodUnit!: pulumi.Output<string>;
    public readonly productInfo!: pulumi.Output<outputs.RocketmqInstanceProductInfo | undefined>;
    public readonly remark!: pulumi.Output<string | undefined>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly seriesCode!: pulumi.Output<string>;
    public readonly serviceCode!: pulumi.Output<string>;
    public readonly software!: pulumi.Output<outputs.RocketmqInstanceSoftware | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly subSeriesCode!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.RocketmqInstanceTimeouts | undefined>;

    /**
     * Create a RocketmqInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RocketmqInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RocketmqInstanceArgs | RocketmqInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RocketmqInstanceState | undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = state ? state.autoRenewPeriod : undefined;
            resourceInputs["autoRenewPeriodUnit"] = state ? state.autoRenewPeriodUnit : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["networkInfo"] = state ? state.networkInfo : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["periodUnit"] = state ? state.periodUnit : undefined;
            resourceInputs["productInfo"] = state ? state.productInfo : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["seriesCode"] = state ? state.seriesCode : undefined;
            resourceInputs["serviceCode"] = state ? state.serviceCode : undefined;
            resourceInputs["software"] = state ? state.software : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subSeriesCode"] = state ? state.subSeriesCode : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RocketmqInstanceArgs | undefined;
            if ((!args || args.networkInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkInfo'");
            }
            if ((!args || args.paymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paymentType'");
            }
            if ((!args || args.seriesCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'seriesCode'");
            }
            if ((!args || args.serviceCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceCode'");
            }
            if ((!args || args.subSeriesCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subSeriesCode'");
            }
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = args ? args.autoRenewPeriod : undefined;
            resourceInputs["autoRenewPeriodUnit"] = args ? args.autoRenewPeriodUnit : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["networkInfo"] = args ? args.networkInfo : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["periodUnit"] = args ? args.periodUnit : undefined;
            resourceInputs["productInfo"] = args ? args.productInfo : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["seriesCode"] = args ? args.seriesCode : undefined;
            resourceInputs["serviceCode"] = args ? args.serviceCode : undefined;
            resourceInputs["software"] = args ? args.software : undefined;
            resourceInputs["subSeriesCode"] = args ? args.subSeriesCode : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RocketmqInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RocketmqInstance resources.
 */
export interface RocketmqInstanceState {
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    autoRenewPeriodUnit?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    networkInfo?: pulumi.Input<inputs.RocketmqInstanceNetworkInfo>;
    paymentType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    productInfo?: pulumi.Input<inputs.RocketmqInstanceProductInfo>;
    remark?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    seriesCode?: pulumi.Input<string>;
    serviceCode?: pulumi.Input<string>;
    software?: pulumi.Input<inputs.RocketmqInstanceSoftware>;
    status?: pulumi.Input<string>;
    subSeriesCode?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RocketmqInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a RocketmqInstance resource.
 */
export interface RocketmqInstanceArgs {
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    autoRenewPeriodUnit?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    networkInfo: pulumi.Input<inputs.RocketmqInstanceNetworkInfo>;
    paymentType: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    periodUnit?: pulumi.Input<string>;
    productInfo?: pulumi.Input<inputs.RocketmqInstanceProductInfo>;
    remark?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    seriesCode: pulumi.Input<string>;
    serviceCode: pulumi.Input<string>;
    software?: pulumi.Input<inputs.RocketmqInstanceSoftware>;
    subSeriesCode: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RocketmqInstanceTimeouts>;
}
