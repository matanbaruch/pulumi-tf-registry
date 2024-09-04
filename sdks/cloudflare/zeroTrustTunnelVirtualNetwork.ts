// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ZeroTrustTunnelVirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustTunnelVirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustTunnelVirtualNetworkState, opts?: pulumi.CustomResourceOptions): ZeroTrustTunnelVirtualNetwork {
        return new ZeroTrustTunnelVirtualNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/zeroTrustTunnelVirtualNetwork:ZeroTrustTunnelVirtualNetwork';

    /**
     * Returns true if the given object is an instance of ZeroTrustTunnelVirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZeroTrustTunnelVirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZeroTrustTunnelVirtualNetwork.__pulumiType;
    }

    /**
     * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * Description of the tunnel virtual network.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Whether this virtual network is the default one for the account. This means IP Routes belong to this virtual network and
     * Teams Clients in the account route through this virtual network, unless specified otherwise for each case.
     */
    public readonly isDefaultNetwork!: pulumi.Output<boolean | undefined>;
    /**
     * A user-friendly name chosen when the virtual network is created.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a ZeroTrustTunnelVirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustTunnelVirtualNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZeroTrustTunnelVirtualNetworkArgs | ZeroTrustTunnelVirtualNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZeroTrustTunnelVirtualNetworkState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["isDefaultNetwork"] = state ? state.isDefaultNetwork : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as ZeroTrustTunnelVirtualNetworkArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["isDefaultNetwork"] = args ? args.isDefaultNetwork : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZeroTrustTunnelVirtualNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZeroTrustTunnelVirtualNetwork resources.
 */
export interface ZeroTrustTunnelVirtualNetworkState {
    /**
     * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    accountId?: pulumi.Input<string>;
    /**
     * Description of the tunnel virtual network.
     */
    comment?: pulumi.Input<string>;
    /**
     * Whether this virtual network is the default one for the account. This means IP Routes belong to this virtual network and
     * Teams Clients in the account route through this virtual network, unless specified otherwise for each case.
     */
    isDefaultNetwork?: pulumi.Input<boolean>;
    /**
     * A user-friendly name chosen when the virtual network is created.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZeroTrustTunnelVirtualNetwork resource.
 */
export interface ZeroTrustTunnelVirtualNetworkArgs {
    /**
     * The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    accountId: pulumi.Input<string>;
    /**
     * Description of the tunnel virtual network.
     */
    comment?: pulumi.Input<string>;
    /**
     * Whether this virtual network is the default one for the account. This means IP Routes belong to this virtual network and
     * Teams Clients in the account route through this virtual network, unless specified otherwise for each case.
     */
    isDefaultNetwork?: pulumi.Input<boolean>;
    /**
     * A user-friendly name chosen when the virtual network is created.
     */
    name?: pulumi.Input<string>;
}
