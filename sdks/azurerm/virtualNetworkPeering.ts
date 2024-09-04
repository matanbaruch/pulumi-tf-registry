// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualNetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkPeeringState, opts?: pulumi.CustomResourceOptions): VirtualNetworkPeering {
        return new VirtualNetworkPeering(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/virtualNetworkPeering:VirtualNetworkPeering';

    /**
     * Returns true if the given object is an instance of VirtualNetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkPeering.__pulumiType;
    }

    public readonly allowForwardedTraffic!: pulumi.Output<boolean | undefined>;
    public readonly allowGatewayTransit!: pulumi.Output<boolean | undefined>;
    public readonly allowVirtualNetworkAccess!: pulumi.Output<boolean | undefined>;
    public readonly localSubnetNames!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly onlyIpv6PeeringEnabled!: pulumi.Output<boolean | undefined>;
    public readonly peerCompleteVirtualNetworksEnabled!: pulumi.Output<boolean | undefined>;
    public readonly remoteSubnetNames!: pulumi.Output<string[] | undefined>;
    public readonly remoteVirtualNetworkId!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualNetworkPeeringTimeouts | undefined>;
    public readonly triggers!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly useRemoteGateways!: pulumi.Output<boolean | undefined>;
    public readonly virtualNetworkName!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkPeeringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNetworkPeeringArgs | VirtualNetworkPeeringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualNetworkPeeringState | undefined;
            resourceInputs["allowForwardedTraffic"] = state ? state.allowForwardedTraffic : undefined;
            resourceInputs["allowGatewayTransit"] = state ? state.allowGatewayTransit : undefined;
            resourceInputs["allowVirtualNetworkAccess"] = state ? state.allowVirtualNetworkAccess : undefined;
            resourceInputs["localSubnetNames"] = state ? state.localSubnetNames : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onlyIpv6PeeringEnabled"] = state ? state.onlyIpv6PeeringEnabled : undefined;
            resourceInputs["peerCompleteVirtualNetworksEnabled"] = state ? state.peerCompleteVirtualNetworksEnabled : undefined;
            resourceInputs["remoteSubnetNames"] = state ? state.remoteSubnetNames : undefined;
            resourceInputs["remoteVirtualNetworkId"] = state ? state.remoteVirtualNetworkId : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["triggers"] = state ? state.triggers : undefined;
            resourceInputs["useRemoteGateways"] = state ? state.useRemoteGateways : undefined;
            resourceInputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
        } else {
            const args = argsOrState as VirtualNetworkPeeringArgs | undefined;
            if ((!args || args.remoteVirtualNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteVirtualNetworkId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            resourceInputs["allowForwardedTraffic"] = args ? args.allowForwardedTraffic : undefined;
            resourceInputs["allowGatewayTransit"] = args ? args.allowGatewayTransit : undefined;
            resourceInputs["allowVirtualNetworkAccess"] = args ? args.allowVirtualNetworkAccess : undefined;
            resourceInputs["localSubnetNames"] = args ? args.localSubnetNames : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onlyIpv6PeeringEnabled"] = args ? args.onlyIpv6PeeringEnabled : undefined;
            resourceInputs["peerCompleteVirtualNetworksEnabled"] = args ? args.peerCompleteVirtualNetworksEnabled : undefined;
            resourceInputs["remoteSubnetNames"] = args ? args.remoteSubnetNames : undefined;
            resourceInputs["remoteVirtualNetworkId"] = args ? args.remoteVirtualNetworkId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
            resourceInputs["useRemoteGateways"] = args ? args.useRemoteGateways : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualNetworkPeering.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualNetworkPeering resources.
 */
export interface VirtualNetworkPeeringState {
    allowForwardedTraffic?: pulumi.Input<boolean>;
    allowGatewayTransit?: pulumi.Input<boolean>;
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    localSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    onlyIpv6PeeringEnabled?: pulumi.Input<boolean>;
    peerCompleteVirtualNetworksEnabled?: pulumi.Input<boolean>;
    remoteSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    remoteVirtualNetworkId?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VirtualNetworkPeeringTimeouts>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    useRemoteGateways?: pulumi.Input<boolean>;
    virtualNetworkName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualNetworkPeering resource.
 */
export interface VirtualNetworkPeeringArgs {
    allowForwardedTraffic?: pulumi.Input<boolean>;
    allowGatewayTransit?: pulumi.Input<boolean>;
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    localSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    onlyIpv6PeeringEnabled?: pulumi.Input<boolean>;
    peerCompleteVirtualNetworksEnabled?: pulumi.Input<boolean>;
    remoteSubnetNames?: pulumi.Input<pulumi.Input<string>[]>;
    remoteVirtualNetworkId: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VirtualNetworkPeeringTimeouts>;
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    useRemoteGateways?: pulumi.Input<boolean>;
    virtualNetworkName: pulumi.Input<string>;
}
