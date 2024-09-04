// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FabricVirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing FabricVirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FabricVirtualNetworkState, opts?: pulumi.CustomResourceOptions): FabricVirtualNetwork {
        return new FabricVirtualNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'catalystcenter:index/fabricVirtualNetwork:FabricVirtualNetwork';

    /**
     * Returns true if the given object is an instance of FabricVirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FabricVirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FabricVirtualNetwork.__pulumiType;
    }

    /**
     * Guest Virtual Network enablement flag - Default value: `false`
     */
    public readonly isGuest!: pulumi.Output<boolean>;
    /**
     * Scalable Groups to be associated to virtual network
     */
    public readonly sgNames!: pulumi.Output<string[] | undefined>;
    /**
     * Virtual Network Name to be assigned at global level
     */
    public readonly virtualNetworkName!: pulumi.Output<string>;
    /**
     * vManage vpn id for SD-WAN
     */
    public readonly vmanageVpnId!: pulumi.Output<string | undefined>;

    /**
     * Create a FabricVirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricVirtualNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FabricVirtualNetworkArgs | FabricVirtualNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FabricVirtualNetworkState | undefined;
            resourceInputs["isGuest"] = state ? state.isGuest : undefined;
            resourceInputs["sgNames"] = state ? state.sgNames : undefined;
            resourceInputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
            resourceInputs["vmanageVpnId"] = state ? state.vmanageVpnId : undefined;
        } else {
            const args = argsOrState as FabricVirtualNetworkArgs | undefined;
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            resourceInputs["isGuest"] = args ? args.isGuest : undefined;
            resourceInputs["sgNames"] = args ? args.sgNames : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
            resourceInputs["vmanageVpnId"] = args ? args.vmanageVpnId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FabricVirtualNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FabricVirtualNetwork resources.
 */
export interface FabricVirtualNetworkState {
    /**
     * Guest Virtual Network enablement flag - Default value: `false`
     */
    isGuest?: pulumi.Input<boolean>;
    /**
     * Scalable Groups to be associated to virtual network
     */
    sgNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Virtual Network Name to be assigned at global level
     */
    virtualNetworkName?: pulumi.Input<string>;
    /**
     * vManage vpn id for SD-WAN
     */
    vmanageVpnId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FabricVirtualNetwork resource.
 */
export interface FabricVirtualNetworkArgs {
    /**
     * Guest Virtual Network enablement flag - Default value: `false`
     */
    isGuest?: pulumi.Input<boolean>;
    /**
     * Scalable Groups to be associated to virtual network
     */
    sgNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Virtual Network Name to be assigned at global level
     */
    virtualNetworkName: pulumi.Input<string>;
    /**
     * vManage vpn id for SD-WAN
     */
    vmanageVpnId?: pulumi.Input<string>;
}
