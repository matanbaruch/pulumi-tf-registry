// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DcxExtraConfig extends pulumi.CustomResource {
    /**
     * Get an existing DcxExtraConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DcxExtraConfigState, opts?: pulumi.CustomResourceOptions): DcxExtraConfig {
        return new DcxExtraConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dcxExtraConfig:DcxExtraConfig';

    /**
     * Returns true if the given object is an instance of DcxExtraConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DcxExtraConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DcxExtraConfig.__pulumiType;
    }

    /**
     * direct connect tunnel bandwidth.
     */
    public readonly bandwidth!: pulumi.Output<number | undefined>;
    /**
     * be enabled BFD.
     */
    public readonly bfdEnable!: pulumi.Output<number | undefined>;
    /**
     * BFD config info.
     */
    public readonly bfdInfo!: pulumi.Output<outputs.DcxExtraConfigBfdInfo | undefined>;
    /**
     * idc BGP, Asn, AuthKey.
     */
    public readonly bgpPeer!: pulumi.Output<outputs.DcxExtraConfigBgpPeer | undefined>;
    /**
     * direct connect tunnel user idc connect ip.
     */
    public readonly customerAddress!: pulumi.Output<string | undefined>;
    /**
     * direct connect tunnel id.
     */
    public readonly directConnectTunnelId!: pulumi.Output<string>;
    /**
     * BGP community attribute.
     */
    public readonly enableBgpCommunity!: pulumi.Output<boolean | undefined>;
    /**
     * 0: disable IPv61: enable IPv6.
     */
    public readonly ipv6Enable!: pulumi.Output<number | undefined>;
    /**
     * direct connect tunnel support jumbo frame1: enable direct connect tunnel jumbo frame0: disable direct connect tunnel
     * jumbo frame.
     */
    public readonly jumboEnable!: pulumi.Output<number | undefined>;
    /**
     * be enabled NQA.
     */
    public readonly nqaEnable!: pulumi.Output<number | undefined>;
    /**
     * NQA config info.
     */
    public readonly nqaInfo!: pulumi.Output<outputs.DcxExtraConfigNqaInfo | undefined>;
    /**
     * user filter network prefixes.
     */
    public readonly routeFilterPrefixes!: pulumi.Output<outputs.DcxExtraConfigRouteFilterPrefixes | undefined>;
    /**
     * direct connect tunnel tencent cloud connect ip.
     */
    public readonly tencentAddress!: pulumi.Output<string | undefined>;
    /**
     * direct connect tunnel tencent cloud backup connect ip.
     */
    public readonly tencentBackupAddress!: pulumi.Output<string | undefined>;
    /**
     * direct connect tunnel vlan id.
     */
    public readonly vlan!: pulumi.Output<number | undefined>;

    /**
     * Create a DcxExtraConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DcxExtraConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DcxExtraConfigArgs | DcxExtraConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DcxExtraConfigState | undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["bfdEnable"] = state ? state.bfdEnable : undefined;
            resourceInputs["bfdInfo"] = state ? state.bfdInfo : undefined;
            resourceInputs["bgpPeer"] = state ? state.bgpPeer : undefined;
            resourceInputs["customerAddress"] = state ? state.customerAddress : undefined;
            resourceInputs["directConnectTunnelId"] = state ? state.directConnectTunnelId : undefined;
            resourceInputs["enableBgpCommunity"] = state ? state.enableBgpCommunity : undefined;
            resourceInputs["ipv6Enable"] = state ? state.ipv6Enable : undefined;
            resourceInputs["jumboEnable"] = state ? state.jumboEnable : undefined;
            resourceInputs["nqaEnable"] = state ? state.nqaEnable : undefined;
            resourceInputs["nqaInfo"] = state ? state.nqaInfo : undefined;
            resourceInputs["routeFilterPrefixes"] = state ? state.routeFilterPrefixes : undefined;
            resourceInputs["tencentAddress"] = state ? state.tencentAddress : undefined;
            resourceInputs["tencentBackupAddress"] = state ? state.tencentBackupAddress : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
        } else {
            const args = argsOrState as DcxExtraConfigArgs | undefined;
            if ((!args || args.directConnectTunnelId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'directConnectTunnelId'");
            }
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["bfdEnable"] = args ? args.bfdEnable : undefined;
            resourceInputs["bfdInfo"] = args ? args.bfdInfo : undefined;
            resourceInputs["bgpPeer"] = args ? args.bgpPeer : undefined;
            resourceInputs["customerAddress"] = args ? args.customerAddress : undefined;
            resourceInputs["directConnectTunnelId"] = args ? args.directConnectTunnelId : undefined;
            resourceInputs["enableBgpCommunity"] = args ? args.enableBgpCommunity : undefined;
            resourceInputs["ipv6Enable"] = args ? args.ipv6Enable : undefined;
            resourceInputs["jumboEnable"] = args ? args.jumboEnable : undefined;
            resourceInputs["nqaEnable"] = args ? args.nqaEnable : undefined;
            resourceInputs["nqaInfo"] = args ? args.nqaInfo : undefined;
            resourceInputs["routeFilterPrefixes"] = args ? args.routeFilterPrefixes : undefined;
            resourceInputs["tencentAddress"] = args ? args.tencentAddress : undefined;
            resourceInputs["tencentBackupAddress"] = args ? args.tencentBackupAddress : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DcxExtraConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DcxExtraConfig resources.
 */
export interface DcxExtraConfigState {
    /**
     * direct connect tunnel bandwidth.
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * be enabled BFD.
     */
    bfdEnable?: pulumi.Input<number>;
    /**
     * BFD config info.
     */
    bfdInfo?: pulumi.Input<inputs.DcxExtraConfigBfdInfo>;
    /**
     * idc BGP, Asn, AuthKey.
     */
    bgpPeer?: pulumi.Input<inputs.DcxExtraConfigBgpPeer>;
    /**
     * direct connect tunnel user idc connect ip.
     */
    customerAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel id.
     */
    directConnectTunnelId?: pulumi.Input<string>;
    /**
     * BGP community attribute.
     */
    enableBgpCommunity?: pulumi.Input<boolean>;
    /**
     * 0: disable IPv61: enable IPv6.
     */
    ipv6Enable?: pulumi.Input<number>;
    /**
     * direct connect tunnel support jumbo frame1: enable direct connect tunnel jumbo frame0: disable direct connect tunnel
     * jumbo frame.
     */
    jumboEnable?: pulumi.Input<number>;
    /**
     * be enabled NQA.
     */
    nqaEnable?: pulumi.Input<number>;
    /**
     * NQA config info.
     */
    nqaInfo?: pulumi.Input<inputs.DcxExtraConfigNqaInfo>;
    /**
     * user filter network prefixes.
     */
    routeFilterPrefixes?: pulumi.Input<inputs.DcxExtraConfigRouteFilterPrefixes>;
    /**
     * direct connect tunnel tencent cloud connect ip.
     */
    tencentAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel tencent cloud backup connect ip.
     */
    tencentBackupAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel vlan id.
     */
    vlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DcxExtraConfig resource.
 */
export interface DcxExtraConfigArgs {
    /**
     * direct connect tunnel bandwidth.
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * be enabled BFD.
     */
    bfdEnable?: pulumi.Input<number>;
    /**
     * BFD config info.
     */
    bfdInfo?: pulumi.Input<inputs.DcxExtraConfigBfdInfo>;
    /**
     * idc BGP, Asn, AuthKey.
     */
    bgpPeer?: pulumi.Input<inputs.DcxExtraConfigBgpPeer>;
    /**
     * direct connect tunnel user idc connect ip.
     */
    customerAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel id.
     */
    directConnectTunnelId: pulumi.Input<string>;
    /**
     * BGP community attribute.
     */
    enableBgpCommunity?: pulumi.Input<boolean>;
    /**
     * 0: disable IPv61: enable IPv6.
     */
    ipv6Enable?: pulumi.Input<number>;
    /**
     * direct connect tunnel support jumbo frame1: enable direct connect tunnel jumbo frame0: disable direct connect tunnel
     * jumbo frame.
     */
    jumboEnable?: pulumi.Input<number>;
    /**
     * be enabled NQA.
     */
    nqaEnable?: pulumi.Input<number>;
    /**
     * NQA config info.
     */
    nqaInfo?: pulumi.Input<inputs.DcxExtraConfigNqaInfo>;
    /**
     * user filter network prefixes.
     */
    routeFilterPrefixes?: pulumi.Input<inputs.DcxExtraConfigRouteFilterPrefixes>;
    /**
     * direct connect tunnel tencent cloud connect ip.
     */
    tencentAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel tencent cloud backup connect ip.
     */
    tencentBackupAddress?: pulumi.Input<string>;
    /**
     * direct connect tunnel vlan id.
     */
    vlan?: pulumi.Input<number>;
}
