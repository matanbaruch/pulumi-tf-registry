// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcPublicGatewayIpReverseDns extends pulumi.CustomResource {
    /**
     * Get an existing VpcPublicGatewayIpReverseDns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPublicGatewayIpReverseDnsState, opts?: pulumi.CustomResourceOptions): VpcPublicGatewayIpReverseDns {
        return new VpcPublicGatewayIpReverseDns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/vpcPublicGatewayIpReverseDns:VpcPublicGatewayIpReverseDns';

    /**
     * Returns true if the given object is an instance of VpcPublicGatewayIpReverseDns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPublicGatewayIpReverseDns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPublicGatewayIpReverseDns.__pulumiType;
    }

    /**
     * The IP ID
     */
    public readonly gatewayIpId!: pulumi.Output<string>;
    /**
     * The reverse DNS for this IP
     */
    public readonly reverse!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VpcPublicGatewayIpReverseDnsTimeouts | undefined>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a VpcPublicGatewayIpReverseDns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcPublicGatewayIpReverseDnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPublicGatewayIpReverseDnsArgs | VpcPublicGatewayIpReverseDnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcPublicGatewayIpReverseDnsState | undefined;
            resourceInputs["gatewayIpId"] = state ? state.gatewayIpId : undefined;
            resourceInputs["reverse"] = state ? state.reverse : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as VpcPublicGatewayIpReverseDnsArgs | undefined;
            if ((!args || args.gatewayIpId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayIpId'");
            }
            if ((!args || args.reverse === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reverse'");
            }
            resourceInputs["gatewayIpId"] = args ? args.gatewayIpId : undefined;
            resourceInputs["reverse"] = args ? args.reverse : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcPublicGatewayIpReverseDns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcPublicGatewayIpReverseDns resources.
 */
export interface VpcPublicGatewayIpReverseDnsState {
    /**
     * The IP ID
     */
    gatewayIpId?: pulumi.Input<string>;
    /**
     * The reverse DNS for this IP
     */
    reverse?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcPublicGatewayIpReverseDnsTimeouts>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcPublicGatewayIpReverseDns resource.
 */
export interface VpcPublicGatewayIpReverseDnsArgs {
    /**
     * The IP ID
     */
    gatewayIpId: pulumi.Input<string>;
    /**
     * The reverse DNS for this IP
     */
    reverse: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcPublicGatewayIpReverseDnsTimeouts>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}
