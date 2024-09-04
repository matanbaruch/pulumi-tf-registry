// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing VpnEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnEndpointState, opts?: pulumi.CustomResourceOptions): VpnEndpoint {
        return new VpnEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecloud:index/vpnEndpoint:VpnEndpoint';

    /**
     * Returns true if the given object is an instance of VpnEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnEndpoint.__pulumiType;
    }

    public readonly floatingIpId!: pulumi.Output<string>;
    public /*out*/ readonly manageFloatingIp!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly vpnServiceId!: pulumi.Output<string>;

    /**
     * Create a VpnEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnEndpointArgs | VpnEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnEndpointState | undefined;
            resourceInputs["floatingIpId"] = state ? state.floatingIpId : undefined;
            resourceInputs["manageFloatingIp"] = state ? state.manageFloatingIp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vpnServiceId"] = state ? state.vpnServiceId : undefined;
        } else {
            const args = argsOrState as VpnEndpointArgs | undefined;
            if ((!args || args.vpnServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpnServiceId'");
            }
            resourceInputs["floatingIpId"] = args ? args.floatingIpId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vpnServiceId"] = args ? args.vpnServiceId : undefined;
            resourceInputs["manageFloatingIp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnEndpoint resources.
 */
export interface VpnEndpointState {
    floatingIpId?: pulumi.Input<string>;
    manageFloatingIp?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    vpnServiceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnEndpoint resource.
 */
export interface VpnEndpointArgs {
    floatingIpId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpnServiceId: pulumi.Input<string>;
}
