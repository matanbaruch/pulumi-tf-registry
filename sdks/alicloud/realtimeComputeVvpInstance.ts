// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RealtimeComputeVvpInstance extends pulumi.CustomResource {
    /**
     * Get an existing RealtimeComputeVvpInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RealtimeComputeVvpInstanceState, opts?: pulumi.CustomResourceOptions): RealtimeComputeVvpInstance {
        return new RealtimeComputeVvpInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/realtimeComputeVvpInstance:RealtimeComputeVvpInstance';

    /**
     * Returns true if the given object is an instance of RealtimeComputeVvpInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RealtimeComputeVvpInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RealtimeComputeVvpInstance.__pulumiType;
    }

    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly duration!: pulumi.Output<number | undefined>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly pricingCycle!: pulumi.Output<string | undefined>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly resourceSpec!: pulumi.Output<outputs.RealtimeComputeVvpInstanceResourceSpec | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly storage!: pulumi.Output<outputs.RealtimeComputeVvpInstanceStorage>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.RealtimeComputeVvpInstanceTimeouts | undefined>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly vswitchIds!: pulumi.Output<string[]>;
    public readonly vvpInstanceName!: pulumi.Output<string>;
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a RealtimeComputeVvpInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RealtimeComputeVvpInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RealtimeComputeVvpInstanceArgs | RealtimeComputeVvpInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RealtimeComputeVvpInstanceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["pricingCycle"] = state ? state.pricingCycle : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["resourceSpec"] = state ? state.resourceSpec : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["vswitchIds"] = state ? state.vswitchIds : undefined;
            resourceInputs["vvpInstanceName"] = state ? state.vvpInstanceName : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as RealtimeComputeVvpInstanceArgs | undefined;
            if ((!args || args.paymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paymentType'");
            }
            if ((!args || args.storage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storage'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            if ((!args || args.vswitchIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vswitchIds'");
            }
            if ((!args || args.vvpInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vvpInstanceName'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["pricingCycle"] = args ? args.pricingCycle : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["resourceSpec"] = args ? args.resourceSpec : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["vswitchIds"] = args ? args.vswitchIds : undefined;
            resourceInputs["vvpInstanceName"] = args ? args.vvpInstanceName : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RealtimeComputeVvpInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RealtimeComputeVvpInstance resources.
 */
export interface RealtimeComputeVvpInstanceState {
    createTime?: pulumi.Input<string>;
    duration?: pulumi.Input<number>;
    paymentType?: pulumi.Input<string>;
    pricingCycle?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    resourceSpec?: pulumi.Input<inputs.RealtimeComputeVvpInstanceResourceSpec>;
    status?: pulumi.Input<string>;
    storage?: pulumi.Input<inputs.RealtimeComputeVvpInstanceStorage>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RealtimeComputeVvpInstanceTimeouts>;
    vpcId?: pulumi.Input<string>;
    vswitchIds?: pulumi.Input<pulumi.Input<string>[]>;
    vvpInstanceName?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RealtimeComputeVvpInstance resource.
 */
export interface RealtimeComputeVvpInstanceArgs {
    duration?: pulumi.Input<number>;
    paymentType: pulumi.Input<string>;
    pricingCycle?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    resourceSpec?: pulumi.Input<inputs.RealtimeComputeVvpInstanceResourceSpec>;
    storage: pulumi.Input<inputs.RealtimeComputeVvpInstanceStorage>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.RealtimeComputeVvpInstanceTimeouts>;
    vpcId: pulumi.Input<string>;
    vswitchIds: pulumi.Input<pulumi.Input<string>[]>;
    vvpInstanceName: pulumi.Input<string>;
    zoneId: pulumi.Input<string>;
}
