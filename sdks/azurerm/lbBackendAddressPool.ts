// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbBackendAddressPool extends pulumi.CustomResource {
    /**
     * Get an existing LbBackendAddressPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbBackendAddressPoolState, opts?: pulumi.CustomResourceOptions): LbBackendAddressPool {
        return new LbBackendAddressPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/lbBackendAddressPool:LbBackendAddressPool';

    /**
     * Returns true if the given object is an instance of LbBackendAddressPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbBackendAddressPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbBackendAddressPool.__pulumiType;
    }

    public /*out*/ readonly backendIpConfigurations!: pulumi.Output<string[]>;
    public /*out*/ readonly inboundNatRules!: pulumi.Output<string[]>;
    public /*out*/ readonly loadBalancingRules!: pulumi.Output<string[]>;
    public readonly loadbalancerId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly outboundRules!: pulumi.Output<string[]>;
    public readonly synchronousMode!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.LbBackendAddressPoolTimeouts | undefined>;
    public readonly tunnelInterfaces!: pulumi.Output<outputs.LbBackendAddressPoolTunnelInterface[] | undefined>;
    public readonly virtualNetworkId!: pulumi.Output<string | undefined>;

    /**
     * Create a LbBackendAddressPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbBackendAddressPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbBackendAddressPoolArgs | LbBackendAddressPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbBackendAddressPoolState | undefined;
            resourceInputs["backendIpConfigurations"] = state ? state.backendIpConfigurations : undefined;
            resourceInputs["inboundNatRules"] = state ? state.inboundNatRules : undefined;
            resourceInputs["loadBalancingRules"] = state ? state.loadBalancingRules : undefined;
            resourceInputs["loadbalancerId"] = state ? state.loadbalancerId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundRules"] = state ? state.outboundRules : undefined;
            resourceInputs["synchronousMode"] = state ? state.synchronousMode : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tunnelInterfaces"] = state ? state.tunnelInterfaces : undefined;
            resourceInputs["virtualNetworkId"] = state ? state.virtualNetworkId : undefined;
        } else {
            const args = argsOrState as LbBackendAddressPoolArgs | undefined;
            if ((!args || args.loadbalancerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadbalancerId'");
            }
            resourceInputs["loadbalancerId"] = args ? args.loadbalancerId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["synchronousMode"] = args ? args.synchronousMode : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["tunnelInterfaces"] = args ? args.tunnelInterfaces : undefined;
            resourceInputs["virtualNetworkId"] = args ? args.virtualNetworkId : undefined;
            resourceInputs["backendIpConfigurations"] = undefined /*out*/;
            resourceInputs["inboundNatRules"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["outboundRules"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbBackendAddressPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbBackendAddressPool resources.
 */
export interface LbBackendAddressPoolState {
    backendIpConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    inboundNatRules?: pulumi.Input<pulumi.Input<string>[]>;
    loadBalancingRules?: pulumi.Input<pulumi.Input<string>[]>;
    loadbalancerId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    outboundRules?: pulumi.Input<pulumi.Input<string>[]>;
    synchronousMode?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbBackendAddressPoolTimeouts>;
    tunnelInterfaces?: pulumi.Input<pulumi.Input<inputs.LbBackendAddressPoolTunnelInterface>[]>;
    virtualNetworkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LbBackendAddressPool resource.
 */
export interface LbBackendAddressPoolArgs {
    loadbalancerId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    synchronousMode?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LbBackendAddressPoolTimeouts>;
    tunnelInterfaces?: pulumi.Input<pulumi.Input<inputs.LbBackendAddressPoolTunnelInterface>[]>;
    virtualNetworkId?: pulumi.Input<string>;
}
