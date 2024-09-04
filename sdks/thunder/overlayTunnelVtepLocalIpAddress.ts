// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OverlayTunnelVtepLocalIpAddress extends pulumi.CustomResource {
    /**
     * Get an existing OverlayTunnelVtepLocalIpAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OverlayTunnelVtepLocalIpAddressState, opts?: pulumi.CustomResourceOptions): OverlayTunnelVtepLocalIpAddress {
        return new OverlayTunnelVtepLocalIpAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/overlayTunnelVtepLocalIpAddress:OverlayTunnelVtepLocalIpAddress';

    /**
     * Returns true if the given object is an instance of OverlayTunnelVtepLocalIpAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OverlayTunnelVtepLocalIpAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OverlayTunnelVtepLocalIpAddress.__pulumiType;
    }

    /**
     * Id1
     */
    public readonly id1!: pulumi.Output<string>;
    /**
     * Source Tunnel End Point IPv4 address
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly vniLists!: pulumi.Output<outputs.OverlayTunnelVtepLocalIpAddressVniList[] | undefined>;

    /**
     * Create a OverlayTunnelVtepLocalIpAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OverlayTunnelVtepLocalIpAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OverlayTunnelVtepLocalIpAddressArgs | OverlayTunnelVtepLocalIpAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OverlayTunnelVtepLocalIpAddressState | undefined;
            resourceInputs["id1"] = state ? state.id1 : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vniLists"] = state ? state.vniLists : undefined;
        } else {
            const args = argsOrState as OverlayTunnelVtepLocalIpAddressArgs | undefined;
            if ((!args || args.id1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'id1'");
            }
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            resourceInputs["id1"] = args ? args.id1 : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vniLists"] = args ? args.vniLists : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OverlayTunnelVtepLocalIpAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OverlayTunnelVtepLocalIpAddress resources.
 */
export interface OverlayTunnelVtepLocalIpAddressState {
    /**
     * Id1
     */
    id1?: pulumi.Input<string>;
    /**
     * Source Tunnel End Point IPv4 address
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    vniLists?: pulumi.Input<pulumi.Input<inputs.OverlayTunnelVtepLocalIpAddressVniList>[]>;
}

/**
 * The set of arguments for constructing a OverlayTunnelVtepLocalIpAddress resource.
 */
export interface OverlayTunnelVtepLocalIpAddressArgs {
    /**
     * Id1
     */
    id1: pulumi.Input<string>;
    /**
     * Source Tunnel End Point IPv4 address
     */
    ipAddress: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    vniLists?: pulumi.Input<pulumi.Input<inputs.OverlayTunnelVtepLocalIpAddressVniList>[]>;
}
