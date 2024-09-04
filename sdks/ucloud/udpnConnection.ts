// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UdpnConnection extends pulumi.CustomResource {
    /**
     * Get an existing UdpnConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UdpnConnectionState, opts?: pulumi.CustomResourceOptions): UdpnConnection {
        return new UdpnConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ucloud:index/udpnConnection:UdpnConnection';

    /**
     * Returns true if the given object is an instance of UdpnConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UdpnConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UdpnConnection.__pulumiType;
    }

    public readonly bandwidth!: pulumi.Output<number | undefined>;
    public readonly chargeType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly duration!: pulumi.Output<number | undefined>;
    public /*out*/ readonly expireTime!: pulumi.Output<string>;
    public readonly peerRegion!: pulumi.Output<string>;

    /**
     * Create a UdpnConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UdpnConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UdpnConnectionArgs | UdpnConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UdpnConnectionState | undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["chargeType"] = state ? state.chargeType : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["expireTime"] = state ? state.expireTime : undefined;
            resourceInputs["peerRegion"] = state ? state.peerRegion : undefined;
        } else {
            const args = argsOrState as UdpnConnectionArgs | undefined;
            if ((!args || args.peerRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerRegion'");
            }
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["chargeType"] = args ? args.chargeType : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["peerRegion"] = args ? args.peerRegion : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["expireTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UdpnConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UdpnConnection resources.
 */
export interface UdpnConnectionState {
    bandwidth?: pulumi.Input<number>;
    chargeType?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    duration?: pulumi.Input<number>;
    expireTime?: pulumi.Input<string>;
    peerRegion?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UdpnConnection resource.
 */
export interface UdpnConnectionArgs {
    bandwidth?: pulumi.Input<number>;
    chargeType?: pulumi.Input<string>;
    duration?: pulumi.Input<number>;
    peerRegion: pulumi.Input<string>;
}
