// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NsxtEdgegatewayBgpIpPrefixList extends pulumi.CustomResource {
    /**
     * Get an existing NsxtEdgegatewayBgpIpPrefixList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxtEdgegatewayBgpIpPrefixListState, opts?: pulumi.CustomResourceOptions): NsxtEdgegatewayBgpIpPrefixList {
        return new NsxtEdgegatewayBgpIpPrefixList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxtEdgegatewayBgpIpPrefixList:NsxtEdgegatewayBgpIpPrefixList';

    /**
     * Returns true if the given object is an instance of NsxtEdgegatewayBgpIpPrefixList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxtEdgegatewayBgpIpPrefixList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxtEdgegatewayBgpIpPrefixList.__pulumiType;
    }

    /**
     * BGP IP Prefix List description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Edge gateway ID for BGP IP Prefix List Configuration
     */
    public readonly edgeGatewayId!: pulumi.Output<string>;
    /**
     * BGP IP Prefix List entry
     */
    public readonly ipPrefixes!: pulumi.Output<outputs.NsxtEdgegatewayBgpIpPrefixListIpPrefix[]>;
    /**
     * BGP IP Prefix List name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    public readonly org!: pulumi.Output<string | undefined>;

    /**
     * Create a NsxtEdgegatewayBgpIpPrefixList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxtEdgegatewayBgpIpPrefixListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxtEdgegatewayBgpIpPrefixListArgs | NsxtEdgegatewayBgpIpPrefixListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxtEdgegatewayBgpIpPrefixListState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["edgeGatewayId"] = state ? state.edgeGatewayId : undefined;
            resourceInputs["ipPrefixes"] = state ? state.ipPrefixes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["org"] = state ? state.org : undefined;
        } else {
            const args = argsOrState as NsxtEdgegatewayBgpIpPrefixListArgs | undefined;
            if ((!args || args.edgeGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'edgeGatewayId'");
            }
            if ((!args || args.ipPrefixes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipPrefixes'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["edgeGatewayId"] = args ? args.edgeGatewayId : undefined;
            resourceInputs["ipPrefixes"] = args ? args.ipPrefixes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["org"] = args ? args.org : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NsxtEdgegatewayBgpIpPrefixList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxtEdgegatewayBgpIpPrefixList resources.
 */
export interface NsxtEdgegatewayBgpIpPrefixListState {
    /**
     * BGP IP Prefix List description
     */
    description?: pulumi.Input<string>;
    /**
     * Edge gateway ID for BGP IP Prefix List Configuration
     */
    edgeGatewayId?: pulumi.Input<string>;
    /**
     * BGP IP Prefix List entry
     */
    ipPrefixes?: pulumi.Input<pulumi.Input<inputs.NsxtEdgegatewayBgpIpPrefixListIpPrefix>[]>;
    /**
     * BGP IP Prefix List name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NsxtEdgegatewayBgpIpPrefixList resource.
 */
export interface NsxtEdgegatewayBgpIpPrefixListArgs {
    /**
     * BGP IP Prefix List description
     */
    description?: pulumi.Input<string>;
    /**
     * Edge gateway ID for BGP IP Prefix List Configuration
     */
    edgeGatewayId: pulumi.Input<string>;
    /**
     * BGP IP Prefix List entry
     */
    ipPrefixes: pulumi.Input<pulumi.Input<inputs.NsxtEdgegatewayBgpIpPrefixListIpPrefix>[]>;
    /**
     * BGP IP Prefix List name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
}
