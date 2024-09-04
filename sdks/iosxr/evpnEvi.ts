// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EvpnEvi extends pulumi.CustomResource {
    /**
     * Get an existing EvpnEvi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EvpnEviState, opts?: pulumi.CustomResourceOptions): EvpnEvi {
        return new EvpnEvi(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/evpnEvi:EvpnEvi';

    /**
     * Returns true if the given object is an instance of EvpnEvi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EvpnEvi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EvpnEvi.__pulumiType;
    }

    /**
     * Configure EVPN Instance MAC advertisement
     */
    public readonly advertiseMac!: pulumi.Output<boolean | undefined>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`65535`
     */
    public readonly bgpRdFourByteAsAssignedNumber!: pulumi.Output<number | undefined>;
    /**
     * Four Byte AS number - Range: `65536`-`4294967295`
     */
    public readonly bgpRdFourByteAsNumber!: pulumi.Output<number | undefined>;
    /**
     * IP address
     */
    public readonly bgpRdIpv4Address!: pulumi.Output<string | undefined>;
    /**
     * IP-address:nn (hex or decimal format) - Range: `0`-`65535`
     */
    public readonly bgpRdIpv4AddressAssignedNumber!: pulumi.Output<number | undefined>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`4294967295`
     */
    public readonly bgpRdTwoByteAsAssignedNumber!: pulumi.Output<number | undefined>;
    /**
     * Two Byte AS Number - Range: `1`-`65535`
     */
    public readonly bgpRdTwoByteAsNumber!: pulumi.Output<number | undefined>;
    /**
     * Export route policy
     */
    public readonly bgpRoutePolicyExport!: pulumi.Output<string | undefined>;
    /**
     * Import route policy
     */
    public readonly bgpRoutePolicyImport!: pulumi.Output<string | undefined>;
    /**
     * Four Byte AS number Route Target
     */
    public readonly bgpRouteTargetExportFourByteAsFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetExportFourByteAsFormat[] | undefined>;
    /**
     * IP address
     */
    public readonly bgpRouteTargetExportIpv4AddressFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetExportIpv4AddressFormat[] | undefined>;
    /**
     * Two Byte AS Number Route Target
     */
    public readonly bgpRouteTargetExportTwoByteAsFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetExportTwoByteAsFormat[] | undefined>;
    /**
     * Four Byte AS number Route Target
     */
    public readonly bgpRouteTargetImportFourByteAsFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetImportFourByteAsFormat[] | undefined>;
    /**
     * IP address
     */
    public readonly bgpRouteTargetImportIpv4AddressFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetImportIpv4AddressFormat[] | undefined>;
    /**
     * Two Byte AS Number Route Target
     */
    public readonly bgpRouteTargetImportTwoByteAsFormats!: pulumi.Output<outputs.EvpnEviBgpRouteTargetImportTwoByteAsFormat[] | undefined>;
    /**
     * Disabling control-word
     */
    public readonly controlWordDisable!: pulumi.Output<boolean | undefined>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * Description for this EVPN Instance
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Configure EVPN Instance E-Tree
     */
    public readonly etree!: pulumi.Output<boolean | undefined>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Leaf Site
     */
    public readonly etreeLeaf!: pulumi.Output<boolean | undefined>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Route-Target Leaf Site
     */
    public readonly etreeRtLeaf!: pulumi.Output<boolean | undefined>;
    /**
     * Configure EVPN Instance load-balancing
     */
    public readonly loadBalancing!: pulumi.Output<boolean | undefined>;
    /**
     * Static configuration of Flow Label
     */
    public readonly loadBalancingFlowLabelStatic!: pulumi.Output<boolean | undefined>;
    /**
     * Enabling unknown unicast suppression
     */
    public readonly unknownUnicastSuppression!: pulumi.Output<boolean | undefined>;
    /**
     * Configure EVPN Instance VPN ID - Range: `1`-`65534`
     */
    public readonly vpnId!: pulumi.Output<number>;

    /**
     * Create a EvpnEvi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EvpnEviArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EvpnEviArgs | EvpnEviState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EvpnEviState | undefined;
            resourceInputs["advertiseMac"] = state ? state.advertiseMac : undefined;
            resourceInputs["bgpRdFourByteAsAssignedNumber"] = state ? state.bgpRdFourByteAsAssignedNumber : undefined;
            resourceInputs["bgpRdFourByteAsNumber"] = state ? state.bgpRdFourByteAsNumber : undefined;
            resourceInputs["bgpRdIpv4Address"] = state ? state.bgpRdIpv4Address : undefined;
            resourceInputs["bgpRdIpv4AddressAssignedNumber"] = state ? state.bgpRdIpv4AddressAssignedNumber : undefined;
            resourceInputs["bgpRdTwoByteAsAssignedNumber"] = state ? state.bgpRdTwoByteAsAssignedNumber : undefined;
            resourceInputs["bgpRdTwoByteAsNumber"] = state ? state.bgpRdTwoByteAsNumber : undefined;
            resourceInputs["bgpRoutePolicyExport"] = state ? state.bgpRoutePolicyExport : undefined;
            resourceInputs["bgpRoutePolicyImport"] = state ? state.bgpRoutePolicyImport : undefined;
            resourceInputs["bgpRouteTargetExportFourByteAsFormats"] = state ? state.bgpRouteTargetExportFourByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetExportIpv4AddressFormats"] = state ? state.bgpRouteTargetExportIpv4AddressFormats : undefined;
            resourceInputs["bgpRouteTargetExportTwoByteAsFormats"] = state ? state.bgpRouteTargetExportTwoByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetImportFourByteAsFormats"] = state ? state.bgpRouteTargetImportFourByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetImportIpv4AddressFormats"] = state ? state.bgpRouteTargetImportIpv4AddressFormats : undefined;
            resourceInputs["bgpRouteTargetImportTwoByteAsFormats"] = state ? state.bgpRouteTargetImportTwoByteAsFormats : undefined;
            resourceInputs["controlWordDisable"] = state ? state.controlWordDisable : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["etree"] = state ? state.etree : undefined;
            resourceInputs["etreeLeaf"] = state ? state.etreeLeaf : undefined;
            resourceInputs["etreeRtLeaf"] = state ? state.etreeRtLeaf : undefined;
            resourceInputs["loadBalancing"] = state ? state.loadBalancing : undefined;
            resourceInputs["loadBalancingFlowLabelStatic"] = state ? state.loadBalancingFlowLabelStatic : undefined;
            resourceInputs["unknownUnicastSuppression"] = state ? state.unknownUnicastSuppression : undefined;
            resourceInputs["vpnId"] = state ? state.vpnId : undefined;
        } else {
            const args = argsOrState as EvpnEviArgs | undefined;
            if ((!args || args.vpnId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpnId'");
            }
            resourceInputs["advertiseMac"] = args ? args.advertiseMac : undefined;
            resourceInputs["bgpRdFourByteAsAssignedNumber"] = args ? args.bgpRdFourByteAsAssignedNumber : undefined;
            resourceInputs["bgpRdFourByteAsNumber"] = args ? args.bgpRdFourByteAsNumber : undefined;
            resourceInputs["bgpRdIpv4Address"] = args ? args.bgpRdIpv4Address : undefined;
            resourceInputs["bgpRdIpv4AddressAssignedNumber"] = args ? args.bgpRdIpv4AddressAssignedNumber : undefined;
            resourceInputs["bgpRdTwoByteAsAssignedNumber"] = args ? args.bgpRdTwoByteAsAssignedNumber : undefined;
            resourceInputs["bgpRdTwoByteAsNumber"] = args ? args.bgpRdTwoByteAsNumber : undefined;
            resourceInputs["bgpRoutePolicyExport"] = args ? args.bgpRoutePolicyExport : undefined;
            resourceInputs["bgpRoutePolicyImport"] = args ? args.bgpRoutePolicyImport : undefined;
            resourceInputs["bgpRouteTargetExportFourByteAsFormats"] = args ? args.bgpRouteTargetExportFourByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetExportIpv4AddressFormats"] = args ? args.bgpRouteTargetExportIpv4AddressFormats : undefined;
            resourceInputs["bgpRouteTargetExportTwoByteAsFormats"] = args ? args.bgpRouteTargetExportTwoByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetImportFourByteAsFormats"] = args ? args.bgpRouteTargetImportFourByteAsFormats : undefined;
            resourceInputs["bgpRouteTargetImportIpv4AddressFormats"] = args ? args.bgpRouteTargetImportIpv4AddressFormats : undefined;
            resourceInputs["bgpRouteTargetImportTwoByteAsFormats"] = args ? args.bgpRouteTargetImportTwoByteAsFormats : undefined;
            resourceInputs["controlWordDisable"] = args ? args.controlWordDisable : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["etree"] = args ? args.etree : undefined;
            resourceInputs["etreeLeaf"] = args ? args.etreeLeaf : undefined;
            resourceInputs["etreeRtLeaf"] = args ? args.etreeRtLeaf : undefined;
            resourceInputs["loadBalancing"] = args ? args.loadBalancing : undefined;
            resourceInputs["loadBalancingFlowLabelStatic"] = args ? args.loadBalancingFlowLabelStatic : undefined;
            resourceInputs["unknownUnicastSuppression"] = args ? args.unknownUnicastSuppression : undefined;
            resourceInputs["vpnId"] = args ? args.vpnId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EvpnEvi.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EvpnEvi resources.
 */
export interface EvpnEviState {
    /**
     * Configure EVPN Instance MAC advertisement
     */
    advertiseMac?: pulumi.Input<boolean>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`65535`
     */
    bgpRdFourByteAsAssignedNumber?: pulumi.Input<number>;
    /**
     * Four Byte AS number - Range: `65536`-`4294967295`
     */
    bgpRdFourByteAsNumber?: pulumi.Input<number>;
    /**
     * IP address
     */
    bgpRdIpv4Address?: pulumi.Input<string>;
    /**
     * IP-address:nn (hex or decimal format) - Range: `0`-`65535`
     */
    bgpRdIpv4AddressAssignedNumber?: pulumi.Input<number>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`4294967295`
     */
    bgpRdTwoByteAsAssignedNumber?: pulumi.Input<number>;
    /**
     * Two Byte AS Number - Range: `1`-`65535`
     */
    bgpRdTwoByteAsNumber?: pulumi.Input<number>;
    /**
     * Export route policy
     */
    bgpRoutePolicyExport?: pulumi.Input<string>;
    /**
     * Import route policy
     */
    bgpRoutePolicyImport?: pulumi.Input<string>;
    /**
     * Four Byte AS number Route Target
     */
    bgpRouteTargetExportFourByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportFourByteAsFormat>[]>;
    /**
     * IP address
     */
    bgpRouteTargetExportIpv4AddressFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportIpv4AddressFormat>[]>;
    /**
     * Two Byte AS Number Route Target
     */
    bgpRouteTargetExportTwoByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportTwoByteAsFormat>[]>;
    /**
     * Four Byte AS number Route Target
     */
    bgpRouteTargetImportFourByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportFourByteAsFormat>[]>;
    /**
     * IP address
     */
    bgpRouteTargetImportIpv4AddressFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportIpv4AddressFormat>[]>;
    /**
     * Two Byte AS Number Route Target
     */
    bgpRouteTargetImportTwoByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportTwoByteAsFormat>[]>;
    /**
     * Disabling control-word
     */
    controlWordDisable?: pulumi.Input<boolean>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * Description for this EVPN Instance
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Configure EVPN Instance E-Tree
     */
    etree?: pulumi.Input<boolean>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Leaf Site
     */
    etreeLeaf?: pulumi.Input<boolean>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Route-Target Leaf Site
     */
    etreeRtLeaf?: pulumi.Input<boolean>;
    /**
     * Configure EVPN Instance load-balancing
     */
    loadBalancing?: pulumi.Input<boolean>;
    /**
     * Static configuration of Flow Label
     */
    loadBalancingFlowLabelStatic?: pulumi.Input<boolean>;
    /**
     * Enabling unknown unicast suppression
     */
    unknownUnicastSuppression?: pulumi.Input<boolean>;
    /**
     * Configure EVPN Instance VPN ID - Range: `1`-`65534`
     */
    vpnId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a EvpnEvi resource.
 */
export interface EvpnEviArgs {
    /**
     * Configure EVPN Instance MAC advertisement
     */
    advertiseMac?: pulumi.Input<boolean>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`65535`
     */
    bgpRdFourByteAsAssignedNumber?: pulumi.Input<number>;
    /**
     * Four Byte AS number - Range: `65536`-`4294967295`
     */
    bgpRdFourByteAsNumber?: pulumi.Input<number>;
    /**
     * IP address
     */
    bgpRdIpv4Address?: pulumi.Input<string>;
    /**
     * IP-address:nn (hex or decimal format) - Range: `0`-`65535`
     */
    bgpRdIpv4AddressAssignedNumber?: pulumi.Input<number>;
    /**
     * AS:nn (hex or decimal format) - Range: `0`-`4294967295`
     */
    bgpRdTwoByteAsAssignedNumber?: pulumi.Input<number>;
    /**
     * Two Byte AS Number - Range: `1`-`65535`
     */
    bgpRdTwoByteAsNumber?: pulumi.Input<number>;
    /**
     * Export route policy
     */
    bgpRoutePolicyExport?: pulumi.Input<string>;
    /**
     * Import route policy
     */
    bgpRoutePolicyImport?: pulumi.Input<string>;
    /**
     * Four Byte AS number Route Target
     */
    bgpRouteTargetExportFourByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportFourByteAsFormat>[]>;
    /**
     * IP address
     */
    bgpRouteTargetExportIpv4AddressFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportIpv4AddressFormat>[]>;
    /**
     * Two Byte AS Number Route Target
     */
    bgpRouteTargetExportTwoByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetExportTwoByteAsFormat>[]>;
    /**
     * Four Byte AS number Route Target
     */
    bgpRouteTargetImportFourByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportFourByteAsFormat>[]>;
    /**
     * IP address
     */
    bgpRouteTargetImportIpv4AddressFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportIpv4AddressFormat>[]>;
    /**
     * Two Byte AS Number Route Target
     */
    bgpRouteTargetImportTwoByteAsFormats?: pulumi.Input<pulumi.Input<inputs.EvpnEviBgpRouteTargetImportTwoByteAsFormat>[]>;
    /**
     * Disabling control-word
     */
    controlWordDisable?: pulumi.Input<boolean>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * Description for this EVPN Instance
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Configure EVPN Instance E-Tree
     */
    etree?: pulumi.Input<boolean>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Leaf Site
     */
    etreeLeaf?: pulumi.Input<boolean>;
    /**
     * Designate EVPN Instance as EVPN E-Tree Route-Target Leaf Site
     */
    etreeRtLeaf?: pulumi.Input<boolean>;
    /**
     * Configure EVPN Instance load-balancing
     */
    loadBalancing?: pulumi.Input<boolean>;
    /**
     * Static configuration of Flow Label
     */
    loadBalancingFlowLabelStatic?: pulumi.Input<boolean>;
    /**
     * Enabling unknown unicast suppression
     */
    unknownUnicastSuppression?: pulumi.Input<boolean>;
    /**
     * Configure EVPN Instance VPN ID - Range: `1`-`65534`
     */
    vpnId: pulumi.Input<number>;
}
