// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkingQosBandwidthLimitRuleV2 extends pulumi.CustomResource {
    /**
     * Get an existing NetworkingQosBandwidthLimitRuleV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkingQosBandwidthLimitRuleV2State, opts?: pulumi.CustomResourceOptions): NetworkingQosBandwidthLimitRuleV2 {
        return new NetworkingQosBandwidthLimitRuleV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/networkingQosBandwidthLimitRuleV2:NetworkingQosBandwidthLimitRuleV2';

    /**
     * Returns true if the given object is an instance of NetworkingQosBandwidthLimitRuleV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkingQosBandwidthLimitRuleV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkingQosBandwidthLimitRuleV2.__pulumiType;
    }

    public readonly direction!: pulumi.Output<string | undefined>;
    public readonly maxBurstKbps!: pulumi.Output<number | undefined>;
    public readonly maxKbps!: pulumi.Output<number>;
    public readonly qosPolicyId!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkingQosBandwidthLimitRuleV2Timeouts | undefined>;

    /**
     * Create a NetworkingQosBandwidthLimitRuleV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkingQosBandwidthLimitRuleV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkingQosBandwidthLimitRuleV2Args | NetworkingQosBandwidthLimitRuleV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkingQosBandwidthLimitRuleV2State | undefined;
            resourceInputs["direction"] = state ? state.direction : undefined;
            resourceInputs["maxBurstKbps"] = state ? state.maxBurstKbps : undefined;
            resourceInputs["maxKbps"] = state ? state.maxKbps : undefined;
            resourceInputs["qosPolicyId"] = state ? state.qosPolicyId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkingQosBandwidthLimitRuleV2Args | undefined;
            if ((!args || args.maxKbps === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxKbps'");
            }
            if ((!args || args.qosPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'qosPolicyId'");
            }
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["maxBurstKbps"] = args ? args.maxBurstKbps : undefined;
            resourceInputs["maxKbps"] = args ? args.maxKbps : undefined;
            resourceInputs["qosPolicyId"] = args ? args.qosPolicyId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkingQosBandwidthLimitRuleV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkingQosBandwidthLimitRuleV2 resources.
 */
export interface NetworkingQosBandwidthLimitRuleV2State {
    direction?: pulumi.Input<string>;
    maxBurstKbps?: pulumi.Input<number>;
    maxKbps?: pulumi.Input<number>;
    qosPolicyId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkingQosBandwidthLimitRuleV2Timeouts>;
}

/**
 * The set of arguments for constructing a NetworkingQosBandwidthLimitRuleV2 resource.
 */
export interface NetworkingQosBandwidthLimitRuleV2Args {
    direction?: pulumi.Input<string>;
    maxBurstKbps?: pulumi.Input<number>;
    maxKbps: pulumi.Input<number>;
    qosPolicyId: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkingQosBandwidthLimitRuleV2Timeouts>;
}
