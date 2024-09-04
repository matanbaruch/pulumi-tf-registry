// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway extends pulumi.CustomResource {
    /**
     * Get an existing VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayState, opts?: pulumi.CustomResourceOptions): VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway {
        return new VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/vrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway:VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway';

    /**
     * Returns true if the given object is an instance of VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway.__pulumiType;
    }

    /**
     * IP Address
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * The amount the priority will decrease
     */
    public readonly priorityCost!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * VridVal
     */
    public readonly vridVal!: pulumi.Output<string>;

    /**
     * Create a VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayArgs | VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayState | undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["priorityCost"] = state ? state.priorityCost : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vridVal"] = state ? state.vridVal : undefined;
        } else {
            const args = argsOrState as VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayArgs | undefined;
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.vridVal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vridVal'");
            }
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["priorityCost"] = args ? args.priorityCost : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vridVal"] = args ? args.vridVal : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway resources.
 */
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayState {
    /**
     * IP Address
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The amount the priority will decrease
     */
    priorityCost?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * VridVal
     */
    vridVal?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway resource.
 */
export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayArgs {
    /**
     * IP Address
     */
    ipAddress: pulumi.Input<string>;
    /**
     * The amount the priority will decrease
     */
    priorityCost?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * VridVal
     */
    vridVal: pulumi.Input<string>;
}
