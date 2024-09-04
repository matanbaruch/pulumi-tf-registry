// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackboneVirtualCircuitMarketplace extends pulumi.CustomResource {
    /**
     * Get an existing BackboneVirtualCircuitMarketplace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackboneVirtualCircuitMarketplaceState, opts?: pulumi.CustomResourceOptions): BackboneVirtualCircuitMarketplace {
        return new BackboneVirtualCircuitMarketplace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packetfabric:index/backboneVirtualCircuitMarketplace:BackboneVirtualCircuitMarketplace';

    /**
     * Returns true if the given object is an instance of BackboneVirtualCircuitMarketplace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackboneVirtualCircuitMarketplace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackboneVirtualCircuitMarketplace.__pulumiType;
    }

    public readonly bandwidths!: pulumi.Output<outputs.BackboneVirtualCircuitMarketplaceBandwidth[]>;
    /**
     * A brief description of this connection.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    public readonly flexBandwidthId!: pulumi.Output<string | undefined>;
    public readonly interfaces!: pulumi.Output<outputs.BackboneVirtualCircuitMarketplaceInterface[]>;
    /**
     * The market code (e.g. "ATL" or "DAL") in which you would like the marketplace provider to provision their side of the
     * connection. If the marketplace provider has services published in the marketplace, you can use the PacketFabric portal
     * to see which POPs they are in. Simply remove the number from the POP to get the market code (e.g. if they offer services
     * in "DAL5", enter "DAL" for the market).
     */
    public readonly market!: pulumi.Output<string>;
    /**
     * The upper bound, in Mbps, to limit incoming data by.
     */
    public readonly rateLimitIn!: pulumi.Output<number | undefined>;
    /**
     * The upper bound, in Mbps, to limit outgoing data by.
     */
    public readonly rateLimitOut!: pulumi.Output<number | undefined>;
    /**
     * The routing ID of the marketplace provider that will be receiving this request. Example: TR-1RI-OQ85
     */
    public readonly routingId!: pulumi.Output<string>;
    /**
     * UUID of the marketplace service being requested.
     */
    public readonly serviceUuid!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BackboneVirtualCircuitMarketplaceTimeouts | undefined>;

    /**
     * Create a BackboneVirtualCircuitMarketplace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackboneVirtualCircuitMarketplaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackboneVirtualCircuitMarketplaceArgs | BackboneVirtualCircuitMarketplaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackboneVirtualCircuitMarketplaceState | undefined;
            resourceInputs["bandwidths"] = state ? state.bandwidths : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["flexBandwidthId"] = state ? state.flexBandwidthId : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["market"] = state ? state.market : undefined;
            resourceInputs["rateLimitIn"] = state ? state.rateLimitIn : undefined;
            resourceInputs["rateLimitOut"] = state ? state.rateLimitOut : undefined;
            resourceInputs["routingId"] = state ? state.routingId : undefined;
            resourceInputs["serviceUuid"] = state ? state.serviceUuid : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BackboneVirtualCircuitMarketplaceArgs | undefined;
            if ((!args || args.bandwidths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidths'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.interfaces === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaces'");
            }
            if ((!args || args.market === undefined) && !opts.urn) {
                throw new Error("Missing required property 'market'");
            }
            if ((!args || args.routingId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routingId'");
            }
            resourceInputs["bandwidths"] = args ? args.bandwidths : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["flexBandwidthId"] = args ? args.flexBandwidthId : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["market"] = args ? args.market : undefined;
            resourceInputs["rateLimitIn"] = args ? args.rateLimitIn : undefined;
            resourceInputs["rateLimitOut"] = args ? args.rateLimitOut : undefined;
            resourceInputs["routingId"] = args ? args.routingId : undefined;
            resourceInputs["serviceUuid"] = args ? args.serviceUuid : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackboneVirtualCircuitMarketplace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackboneVirtualCircuitMarketplace resources.
 */
export interface BackboneVirtualCircuitMarketplaceState {
    bandwidths?: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceBandwidth>[]>;
    /**
     * A brief description of this connection.
     */
    description?: pulumi.Input<string>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    flexBandwidthId?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceInterface>[]>;
    /**
     * The market code (e.g. "ATL" or "DAL") in which you would like the marketplace provider to provision their side of the
     * connection. If the marketplace provider has services published in the marketplace, you can use the PacketFabric portal
     * to see which POPs they are in. Simply remove the number from the POP to get the market code (e.g. if they offer services
     * in "DAL5", enter "DAL" for the market).
     */
    market?: pulumi.Input<string>;
    /**
     * The upper bound, in Mbps, to limit incoming data by.
     */
    rateLimitIn?: pulumi.Input<number>;
    /**
     * The upper bound, in Mbps, to limit outgoing data by.
     */
    rateLimitOut?: pulumi.Input<number>;
    /**
     * The routing ID of the marketplace provider that will be receiving this request. Example: TR-1RI-OQ85
     */
    routingId?: pulumi.Input<string>;
    /**
     * UUID of the marketplace service being requested.
     */
    serviceUuid?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceTimeouts>;
}

/**
 * The set of arguments for constructing a BackboneVirtualCircuitMarketplace resource.
 */
export interface BackboneVirtualCircuitMarketplaceArgs {
    bandwidths: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceBandwidth>[]>;
    /**
     * A brief description of this connection.
     */
    description: pulumi.Input<string>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    flexBandwidthId?: pulumi.Input<string>;
    interfaces: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceInterface>[]>;
    /**
     * The market code (e.g. "ATL" or "DAL") in which you would like the marketplace provider to provision their side of the
     * connection. If the marketplace provider has services published in the marketplace, you can use the PacketFabric portal
     * to see which POPs they are in. Simply remove the number from the POP to get the market code (e.g. if they offer services
     * in "DAL5", enter "DAL" for the market).
     */
    market: pulumi.Input<string>;
    /**
     * The upper bound, in Mbps, to limit incoming data by.
     */
    rateLimitIn?: pulumi.Input<number>;
    /**
     * The upper bound, in Mbps, to limit outgoing data by.
     */
    rateLimitOut?: pulumi.Input<number>;
    /**
     * The routing ID of the marketplace provider that will be receiving this request. Example: TR-1RI-OQ85
     */
    routingId: pulumi.Input<string>;
    /**
     * UUID of the marketplace service being requested.
     */
    serviceUuid?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitMarketplaceTimeouts>;
}
