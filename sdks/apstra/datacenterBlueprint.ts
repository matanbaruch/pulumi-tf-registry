// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatacenterBlueprint extends pulumi.CustomResource {
    /**
     * Get an existing DatacenterBlueprint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatacenterBlueprintState, opts?: pulumi.CustomResourceOptions): DatacenterBlueprint {
        return new DatacenterBlueprint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'apstra:index/datacenterBlueprint:DatacenterBlueprint';

    /**
     * Returns true if the given object is an instance of DatacenterBlueprint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatacenterBlueprint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatacenterBlueprint.__pulumiType;
    }

    /**
     * The count of access switches in the topology.
     */
    public /*out*/ readonly accessSwitchCount!: pulumi.Output<number>;
    /**
     * The anti-affinity policy has three modes: * `disabled` (default) - ports selection is based on assigned interface maps
     * and interface names (provided or auto-assigned). Port breakouts could terminate on the same physical ports. *
     * `enabled_loose` - controls interface names that were not defined by the user. Does not control or override user-defined
     * cabling. (If you haven't explicitly assigned any interface names, loose and strict are effectively the same policy.) *
     * `enabled_strict` - completely controls port distribution and could override user-defined assignments. When you enable
     * the strict policy, a statement appears at the top of the cabling map (Staged/Active > Physical > Links and Staged/Active
     * > Physical > Topology Selection) stating that the anti-affinity policy is enabled.
     */
    public readonly antiAffinityMode!: pulumi.Output<string>;
    /**
     * When designing high availability (HA) systems, you want parallel links between two devices to terminate on different
     * physical ports, thus avoiding transceiver failures from impacting both links on a device. Depending on the number of
     * interfaces on a system, manually modifying these links could be time-consuming. With the anti-affinity policy you can
     * apply certain constraints to the cabling map to control automatic port assignments.
     */
    public readonly antiAffinityPolicy!: pulumi.Output<outputs.DatacenterBlueprintAntiAffinityPolicy>;
    /**
     * Number of build errors.
     */
    public /*out*/ readonly buildErrorsCount!: pulumi.Output<number>;
    /**
     * Number of build warnings.
     */
    public /*out*/ readonly buildWarningsCount!: pulumi.Output<number>;
    /**
     * Default L3 MTU for IP links to generic systems. A null or empty value implies AOS will not render explicit MTU value and
     * system defaults will be used. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0
     */
    public readonly defaultIpLinksToGenericMtu!: pulumi.Output<number>;
    /**
     * Default L3 MTU for SVI interfaces. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    public readonly defaultSviL3Mtu!: pulumi.Output<number>;
    /**
     * ESI MAC address most significant byte. Must be an even number between 0 and 254 inclusive.
     */
    public readonly esiMacMsb!: pulumi.Output<number>;
    /**
     * When `true`, all EVPN VTEPs in the fabric will redistribute ARP/IPV6 ND (when possible on NOS type) as EVPN type 5 /32
     * routes in the routing table. Currently, this option is only certified for Juniper Junos. FRR (SONiC) does this
     * implicitly and cannot be disabled. This setting will be ignored. On Arista and Cisco, no configuration is rendered and
     * will result in a Blueprint warning that it is not supported by AOS. This value is disabled by default, as it generates a
     * very large number of routes in the BGP routing table and takes large amounts of TCAM. When these /32 & /128 routes are
     * generated, they enable direct unicast routing to host destinations on VNIs that are not stretched to the ingress VTEP,
     * and avoid a route lookup to a subnet (eg, /24) that may be hosted on many leafs. Requires Apstra >=4.2.0.
     */
    public readonly evpnType5Routes!: pulumi.Output<boolean>;
    /**
     * The count of external routers attached to the topology.
     */
    public /*out*/ readonly externalRouterCount!: pulumi.Output<number>;
    /**
     * Addressing scheme for both superspine/spine and spine/leaf links. Requires Apstra >=4.1.1. Must be one of: ipv4, ipv6,
     * ipv4_ipv6
     */
    public readonly fabricAddressing!: pulumi.Output<string | undefined>;
    /**
     * MTU of fabric links. Must be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    public readonly fabricMtu!: pulumi.Output<number>;
    /**
     * The count of generic systems in the topology.
     */
    public /*out*/ readonly genericSystemCount!: pulumi.Output<number>;
    /**
     * Indicates whether the staging blueprint has uncommitted changes.
     */
    public /*out*/ readonly hasUncommittedChanges!: pulumi.Output<boolean>;
    /**
     * Enables support for IPv6 virtual networks and IPv6 external connectivity points. This adds resource requirements and
     * device configurations, including IPv6 loopback addresses on leafs, spines and superspines, IPv6 addresses for MLAG SVI
     * subnets and IPv6 addresses for leaf L3 peer links. This option cannot be disabled without re-creating the Blueprint.
     * Applies only to EVPN blueprints.
     */
    public readonly ipv6Applications!: pulumi.Output<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE.** Enables configuring the maximum number of
     * nexthops and interface numbers reserved for use in EVPN-VXLAN overlay network on Junos leaf devices. AOS default is
     * `true`. Requires Apstra >=4.2.0
     */
    public readonly junosEvpnMaxNexthopAndInterfaceNumber!: pulumi.Output<boolean>;
    /**
     * In releases before 4.2, Apstra used a single default switch instance as the configuration model for Junos. In Apstra
     * 4.2, Apstra transitioned to using MAC-VRF for all new blueprints and normalized the configuration of Junos to Junos
     * Evolved. This option allows you to transition Junos devices to the MAC-VRF configuration model for any blueprints
     * deployed before the 4.2 release. All models use the VLAN-Aware service type. Requires Apstra >=4.2.0
     */
    public readonly junosEvpnRoutingInstanceModeMacVrf!: pulumi.Output<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE on EX-series devices.** When `true,`VXLAN Overlay
     * ECMP will be enabled on Junos EX-series devices. Requires Apstra >=4.2.0.
     */
    public readonly junosExOverlayEcmp!: pulumi.Output<boolean>;
    /**
     * **Changing this value may result in a flap of all BGP sessions as the sessions are re-negotiated.** When `true`, the bgp
     * graceful restart feature is enabled on Junos devices. Requires Apstra >=4.2.0
     */
    public readonly junosGracefulRestart!: pulumi.Output<boolean>;
    /**
     * The count of leaf switches in the topology.
     */
    public /*out*/ readonly leafSwitchCount!: pulumi.Output<number>;
    /**
     * Maximum number of EVPN routes to accept on Leaf Switches. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    public readonly maxEvpnRoutesCount!: pulumi.Output<number>;
    /**
     * Maximum number of routes to accept from external routers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    public readonly maxExternalRoutesCount!: pulumi.Output<number>;
    /**
     * Maximum number of underlay routes permitted between fabric nodes. A positive integer will be rendered into the device
     * BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).Setting this option may be required in the event of leaking EVPN
     * routes from a Security Zone into the default Security Zone (VRF) which may generate a large number of /32 and /128
     * routes. It is suggested that this value be effectively unlimited on all Blueprints to ensure BGP stability in the
     * underlay. Unlimited is also suggested for non-EVPN Blueprints considering the impact to traffic if spine-leaf sessions
     * go offline.
     */
    public readonly maxFabricRoutesCount!: pulumi.Output<number>;
    /**
     * Maximum number of routes to accept between MLAG peers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    public readonly maxMlagRoutesCount!: pulumi.Output<number>;
    /**
     * Blueprint name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * When `true`: routing zones will not be rendered on leafs where they are not required, resulting in less resource
     * consumption. Requires Apstra >=4.2.0
     */
    public readonly optimizeRoutingZoneFootprint!: pulumi.Output<boolean>;
    /**
     * For 3-stage and 5-stage topologies, the count of spine switches in the topology.
     */
    public /*out*/ readonly spineSwitchCount!: pulumi.Output<number>;
    /**
     * Deployment status of the Blueprint
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * For 5-stage topologies, the count of superspine switches in the topology.
     */
    public /*out*/ readonly superspineSwitchCount!: pulumi.Output<number>;
    /**
     * ID of Rack Based Template used to instantiate the Blueprint.
     */
    public readonly templateId!: pulumi.Output<string>;
    /**
     * Currently active blueprint version
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a DatacenterBlueprint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatacenterBlueprintArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatacenterBlueprintArgs | DatacenterBlueprintState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatacenterBlueprintState | undefined;
            resourceInputs["accessSwitchCount"] = state ? state.accessSwitchCount : undefined;
            resourceInputs["antiAffinityMode"] = state ? state.antiAffinityMode : undefined;
            resourceInputs["antiAffinityPolicy"] = state ? state.antiAffinityPolicy : undefined;
            resourceInputs["buildErrorsCount"] = state ? state.buildErrorsCount : undefined;
            resourceInputs["buildWarningsCount"] = state ? state.buildWarningsCount : undefined;
            resourceInputs["defaultIpLinksToGenericMtu"] = state ? state.defaultIpLinksToGenericMtu : undefined;
            resourceInputs["defaultSviL3Mtu"] = state ? state.defaultSviL3Mtu : undefined;
            resourceInputs["esiMacMsb"] = state ? state.esiMacMsb : undefined;
            resourceInputs["evpnType5Routes"] = state ? state.evpnType5Routes : undefined;
            resourceInputs["externalRouterCount"] = state ? state.externalRouterCount : undefined;
            resourceInputs["fabricAddressing"] = state ? state.fabricAddressing : undefined;
            resourceInputs["fabricMtu"] = state ? state.fabricMtu : undefined;
            resourceInputs["genericSystemCount"] = state ? state.genericSystemCount : undefined;
            resourceInputs["hasUncommittedChanges"] = state ? state.hasUncommittedChanges : undefined;
            resourceInputs["ipv6Applications"] = state ? state.ipv6Applications : undefined;
            resourceInputs["junosEvpnMaxNexthopAndInterfaceNumber"] = state ? state.junosEvpnMaxNexthopAndInterfaceNumber : undefined;
            resourceInputs["junosEvpnRoutingInstanceModeMacVrf"] = state ? state.junosEvpnRoutingInstanceModeMacVrf : undefined;
            resourceInputs["junosExOverlayEcmp"] = state ? state.junosExOverlayEcmp : undefined;
            resourceInputs["junosGracefulRestart"] = state ? state.junosGracefulRestart : undefined;
            resourceInputs["leafSwitchCount"] = state ? state.leafSwitchCount : undefined;
            resourceInputs["maxEvpnRoutesCount"] = state ? state.maxEvpnRoutesCount : undefined;
            resourceInputs["maxExternalRoutesCount"] = state ? state.maxExternalRoutesCount : undefined;
            resourceInputs["maxFabricRoutesCount"] = state ? state.maxFabricRoutesCount : undefined;
            resourceInputs["maxMlagRoutesCount"] = state ? state.maxMlagRoutesCount : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["optimizeRoutingZoneFootprint"] = state ? state.optimizeRoutingZoneFootprint : undefined;
            resourceInputs["spineSwitchCount"] = state ? state.spineSwitchCount : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["superspineSwitchCount"] = state ? state.superspineSwitchCount : undefined;
            resourceInputs["templateId"] = state ? state.templateId : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as DatacenterBlueprintArgs | undefined;
            if ((!args || args.templateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'templateId'");
            }
            resourceInputs["antiAffinityMode"] = args ? args.antiAffinityMode : undefined;
            resourceInputs["antiAffinityPolicy"] = args ? args.antiAffinityPolicy : undefined;
            resourceInputs["defaultIpLinksToGenericMtu"] = args ? args.defaultIpLinksToGenericMtu : undefined;
            resourceInputs["defaultSviL3Mtu"] = args ? args.defaultSviL3Mtu : undefined;
            resourceInputs["esiMacMsb"] = args ? args.esiMacMsb : undefined;
            resourceInputs["evpnType5Routes"] = args ? args.evpnType5Routes : undefined;
            resourceInputs["fabricAddressing"] = args ? args.fabricAddressing : undefined;
            resourceInputs["fabricMtu"] = args ? args.fabricMtu : undefined;
            resourceInputs["ipv6Applications"] = args ? args.ipv6Applications : undefined;
            resourceInputs["junosEvpnMaxNexthopAndInterfaceNumber"] = args ? args.junosEvpnMaxNexthopAndInterfaceNumber : undefined;
            resourceInputs["junosEvpnRoutingInstanceModeMacVrf"] = args ? args.junosEvpnRoutingInstanceModeMacVrf : undefined;
            resourceInputs["junosExOverlayEcmp"] = args ? args.junosExOverlayEcmp : undefined;
            resourceInputs["junosGracefulRestart"] = args ? args.junosGracefulRestart : undefined;
            resourceInputs["maxEvpnRoutesCount"] = args ? args.maxEvpnRoutesCount : undefined;
            resourceInputs["maxExternalRoutesCount"] = args ? args.maxExternalRoutesCount : undefined;
            resourceInputs["maxFabricRoutesCount"] = args ? args.maxFabricRoutesCount : undefined;
            resourceInputs["maxMlagRoutesCount"] = args ? args.maxMlagRoutesCount : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["optimizeRoutingZoneFootprint"] = args ? args.optimizeRoutingZoneFootprint : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["accessSwitchCount"] = undefined /*out*/;
            resourceInputs["buildErrorsCount"] = undefined /*out*/;
            resourceInputs["buildWarningsCount"] = undefined /*out*/;
            resourceInputs["externalRouterCount"] = undefined /*out*/;
            resourceInputs["genericSystemCount"] = undefined /*out*/;
            resourceInputs["hasUncommittedChanges"] = undefined /*out*/;
            resourceInputs["leafSwitchCount"] = undefined /*out*/;
            resourceInputs["spineSwitchCount"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["superspineSwitchCount"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatacenterBlueprint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatacenterBlueprint resources.
 */
export interface DatacenterBlueprintState {
    /**
     * The count of access switches in the topology.
     */
    accessSwitchCount?: pulumi.Input<number>;
    /**
     * The anti-affinity policy has three modes: * `disabled` (default) - ports selection is based on assigned interface maps
     * and interface names (provided or auto-assigned). Port breakouts could terminate on the same physical ports. *
     * `enabled_loose` - controls interface names that were not defined by the user. Does not control or override user-defined
     * cabling. (If you haven't explicitly assigned any interface names, loose and strict are effectively the same policy.) *
     * `enabled_strict` - completely controls port distribution and could override user-defined assignments. When you enable
     * the strict policy, a statement appears at the top of the cabling map (Staged/Active > Physical > Links and Staged/Active
     * > Physical > Topology Selection) stating that the anti-affinity policy is enabled.
     */
    antiAffinityMode?: pulumi.Input<string>;
    /**
     * When designing high availability (HA) systems, you want parallel links between two devices to terminate on different
     * physical ports, thus avoiding transceiver failures from impacting both links on a device. Depending on the number of
     * interfaces on a system, manually modifying these links could be time-consuming. With the anti-affinity policy you can
     * apply certain constraints to the cabling map to control automatic port assignments.
     */
    antiAffinityPolicy?: pulumi.Input<inputs.DatacenterBlueprintAntiAffinityPolicy>;
    /**
     * Number of build errors.
     */
    buildErrorsCount?: pulumi.Input<number>;
    /**
     * Number of build warnings.
     */
    buildWarningsCount?: pulumi.Input<number>;
    /**
     * Default L3 MTU for IP links to generic systems. A null or empty value implies AOS will not render explicit MTU value and
     * system defaults will be used. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0
     */
    defaultIpLinksToGenericMtu?: pulumi.Input<number>;
    /**
     * Default L3 MTU for SVI interfaces. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    defaultSviL3Mtu?: pulumi.Input<number>;
    /**
     * ESI MAC address most significant byte. Must be an even number between 0 and 254 inclusive.
     */
    esiMacMsb?: pulumi.Input<number>;
    /**
     * When `true`, all EVPN VTEPs in the fabric will redistribute ARP/IPV6 ND (when possible on NOS type) as EVPN type 5 /32
     * routes in the routing table. Currently, this option is only certified for Juniper Junos. FRR (SONiC) does this
     * implicitly and cannot be disabled. This setting will be ignored. On Arista and Cisco, no configuration is rendered and
     * will result in a Blueprint warning that it is not supported by AOS. This value is disabled by default, as it generates a
     * very large number of routes in the BGP routing table and takes large amounts of TCAM. When these /32 & /128 routes are
     * generated, they enable direct unicast routing to host destinations on VNIs that are not stretched to the ingress VTEP,
     * and avoid a route lookup to a subnet (eg, /24) that may be hosted on many leafs. Requires Apstra >=4.2.0.
     */
    evpnType5Routes?: pulumi.Input<boolean>;
    /**
     * The count of external routers attached to the topology.
     */
    externalRouterCount?: pulumi.Input<number>;
    /**
     * Addressing scheme for both superspine/spine and spine/leaf links. Requires Apstra >=4.1.1. Must be one of: ipv4, ipv6,
     * ipv4_ipv6
     */
    fabricAddressing?: pulumi.Input<string>;
    /**
     * MTU of fabric links. Must be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    fabricMtu?: pulumi.Input<number>;
    /**
     * The count of generic systems in the topology.
     */
    genericSystemCount?: pulumi.Input<number>;
    /**
     * Indicates whether the staging blueprint has uncommitted changes.
     */
    hasUncommittedChanges?: pulumi.Input<boolean>;
    /**
     * Enables support for IPv6 virtual networks and IPv6 external connectivity points. This adds resource requirements and
     * device configurations, including IPv6 loopback addresses on leafs, spines and superspines, IPv6 addresses for MLAG SVI
     * subnets and IPv6 addresses for leaf L3 peer links. This option cannot be disabled without re-creating the Blueprint.
     * Applies only to EVPN blueprints.
     */
    ipv6Applications?: pulumi.Input<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE.** Enables configuring the maximum number of
     * nexthops and interface numbers reserved for use in EVPN-VXLAN overlay network on Junos leaf devices. AOS default is
     * `true`. Requires Apstra >=4.2.0
     */
    junosEvpnMaxNexthopAndInterfaceNumber?: pulumi.Input<boolean>;
    /**
     * In releases before 4.2, Apstra used a single default switch instance as the configuration model for Junos. In Apstra
     * 4.2, Apstra transitioned to using MAC-VRF for all new blueprints and normalized the configuration of Junos to Junos
     * Evolved. This option allows you to transition Junos devices to the MAC-VRF configuration model for any blueprints
     * deployed before the 4.2 release. All models use the VLAN-Aware service type. Requires Apstra >=4.2.0
     */
    junosEvpnRoutingInstanceModeMacVrf?: pulumi.Input<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE on EX-series devices.** When `true,`VXLAN Overlay
     * ECMP will be enabled on Junos EX-series devices. Requires Apstra >=4.2.0.
     */
    junosExOverlayEcmp?: pulumi.Input<boolean>;
    /**
     * **Changing this value may result in a flap of all BGP sessions as the sessions are re-negotiated.** When `true`, the bgp
     * graceful restart feature is enabled on Junos devices. Requires Apstra >=4.2.0
     */
    junosGracefulRestart?: pulumi.Input<boolean>;
    /**
     * The count of leaf switches in the topology.
     */
    leafSwitchCount?: pulumi.Input<number>;
    /**
     * Maximum number of EVPN routes to accept on Leaf Switches. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxEvpnRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of routes to accept from external routers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxExternalRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of underlay routes permitted between fabric nodes. A positive integer will be rendered into the device
     * BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).Setting this option may be required in the event of leaking EVPN
     * routes from a Security Zone into the default Security Zone (VRF) which may generate a large number of /32 and /128
     * routes. It is suggested that this value be effectively unlimited on all Blueprints to ensure BGP stability in the
     * underlay. Unlimited is also suggested for non-EVPN Blueprints considering the impact to traffic if spine-leaf sessions
     * go offline.
     */
    maxFabricRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of routes to accept between MLAG peers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxMlagRoutesCount?: pulumi.Input<number>;
    /**
     * Blueprint name.
     */
    name?: pulumi.Input<string>;
    /**
     * When `true`: routing zones will not be rendered on leafs where they are not required, resulting in less resource
     * consumption. Requires Apstra >=4.2.0
     */
    optimizeRoutingZoneFootprint?: pulumi.Input<boolean>;
    /**
     * For 3-stage and 5-stage topologies, the count of spine switches in the topology.
     */
    spineSwitchCount?: pulumi.Input<number>;
    /**
     * Deployment status of the Blueprint
     */
    status?: pulumi.Input<string>;
    /**
     * For 5-stage topologies, the count of superspine switches in the topology.
     */
    superspineSwitchCount?: pulumi.Input<number>;
    /**
     * ID of Rack Based Template used to instantiate the Blueprint.
     */
    templateId?: pulumi.Input<string>;
    /**
     * Currently active blueprint version
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DatacenterBlueprint resource.
 */
export interface DatacenterBlueprintArgs {
    /**
     * The anti-affinity policy has three modes: * `disabled` (default) - ports selection is based on assigned interface maps
     * and interface names (provided or auto-assigned). Port breakouts could terminate on the same physical ports. *
     * `enabled_loose` - controls interface names that were not defined by the user. Does not control or override user-defined
     * cabling. (If you haven't explicitly assigned any interface names, loose and strict are effectively the same policy.) *
     * `enabled_strict` - completely controls port distribution and could override user-defined assignments. When you enable
     * the strict policy, a statement appears at the top of the cabling map (Staged/Active > Physical > Links and Staged/Active
     * > Physical > Topology Selection) stating that the anti-affinity policy is enabled.
     */
    antiAffinityMode?: pulumi.Input<string>;
    /**
     * When designing high availability (HA) systems, you want parallel links between two devices to terminate on different
     * physical ports, thus avoiding transceiver failures from impacting both links on a device. Depending on the number of
     * interfaces on a system, manually modifying these links could be time-consuming. With the anti-affinity policy you can
     * apply certain constraints to the cabling map to control automatic port assignments.
     */
    antiAffinityPolicy?: pulumi.Input<inputs.DatacenterBlueprintAntiAffinityPolicy>;
    /**
     * Default L3 MTU for IP links to generic systems. A null or empty value implies AOS will not render explicit MTU value and
     * system defaults will be used. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0
     */
    defaultIpLinksToGenericMtu?: pulumi.Input<number>;
    /**
     * Default L3 MTU for SVI interfaces. Should be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    defaultSviL3Mtu?: pulumi.Input<number>;
    /**
     * ESI MAC address most significant byte. Must be an even number between 0 and 254 inclusive.
     */
    esiMacMsb?: pulumi.Input<number>;
    /**
     * When `true`, all EVPN VTEPs in the fabric will redistribute ARP/IPV6 ND (when possible on NOS type) as EVPN type 5 /32
     * routes in the routing table. Currently, this option is only certified for Juniper Junos. FRR (SONiC) does this
     * implicitly and cannot be disabled. This setting will be ignored. On Arista and Cisco, no configuration is rendered and
     * will result in a Blueprint warning that it is not supported by AOS. This value is disabled by default, as it generates a
     * very large number of routes in the BGP routing table and takes large amounts of TCAM. When these /32 & /128 routes are
     * generated, they enable direct unicast routing to host destinations on VNIs that are not stretched to the ingress VTEP,
     * and avoid a route lookup to a subnet (eg, /24) that may be hosted on many leafs. Requires Apstra >=4.2.0.
     */
    evpnType5Routes?: pulumi.Input<boolean>;
    /**
     * Addressing scheme for both superspine/spine and spine/leaf links. Requires Apstra >=4.1.1. Must be one of: ipv4, ipv6,
     * ipv4_ipv6
     */
    fabricAddressing?: pulumi.Input<string>;
    /**
     * MTU of fabric links. Must be an even number between 1280 and 9216. Requires Apstra >=4.2.0.
     */
    fabricMtu?: pulumi.Input<number>;
    /**
     * Enables support for IPv6 virtual networks and IPv6 external connectivity points. This adds resource requirements and
     * device configurations, including IPv6 loopback addresses on leafs, spines and superspines, IPv6 addresses for MLAG SVI
     * subnets and IPv6 addresses for leaf L3 peer links. This option cannot be disabled without re-creating the Blueprint.
     * Applies only to EVPN blueprints.
     */
    ipv6Applications?: pulumi.Input<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE.** Enables configuring the maximum number of
     * nexthops and interface numbers reserved for use in EVPN-VXLAN overlay network on Junos leaf devices. AOS default is
     * `true`. Requires Apstra >=4.2.0
     */
    junosEvpnMaxNexthopAndInterfaceNumber?: pulumi.Input<boolean>;
    /**
     * In releases before 4.2, Apstra used a single default switch instance as the configuration model for Junos. In Apstra
     * 4.2, Apstra transitioned to using MAC-VRF for all new blueprints and normalized the configuration of Junos to Junos
     * Evolved. This option allows you to transition Junos devices to the MAC-VRF configuration model for any blueprints
     * deployed before the 4.2 release. All models use the VLAN-Aware service type. Requires Apstra >=4.2.0
     */
    junosEvpnRoutingInstanceModeMacVrf?: pulumi.Input<boolean>;
    /**
     * **Changing this value will result in a disruptive restart of the PFE on EX-series devices.** When `true,`VXLAN Overlay
     * ECMP will be enabled on Junos EX-series devices. Requires Apstra >=4.2.0.
     */
    junosExOverlayEcmp?: pulumi.Input<boolean>;
    /**
     * **Changing this value may result in a flap of all BGP sessions as the sessions are re-negotiated.** When `true`, the bgp
     * graceful restart feature is enabled on Junos devices. Requires Apstra >=4.2.0
     */
    junosGracefulRestart?: pulumi.Input<boolean>;
    /**
     * Maximum number of EVPN routes to accept on Leaf Switches. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxEvpnRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of routes to accept from external routers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxExternalRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of underlay routes permitted between fabric nodes. A positive integer will be rendered into the device
     * BGP configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).Setting this option may be required in the event of leaking EVPN
     * routes from a Security Zone into the default Security Zone (VRF) which may generate a large number of /32 and /128
     * routes. It is suggested that this value be effectively unlimited on all Blueprints to ensure BGP stability in the
     * underlay. Unlimited is also suggested for non-EVPN Blueprints considering the impact to traffic if spine-leaf sessions
     * go offline.
     */
    maxFabricRoutesCount?: pulumi.Input<number>;
    /**
     * Maximum number of routes to accept between MLAG peers. A positive integer will be rendered into the device BGP
     * configuration as a maximum limit. Using a zero will render a `0` into the same line of configuration resulting in
     * platform-specific behavior: Either *unlimited routes permitted*, or *no routes permitted* depending on the NOS in use. A
     * `-1` can be used to force clear any prior configuration from Apstra, ensuring that no maximum value will be rendered
     * into the BGP configuration (default device behavior).
     */
    maxMlagRoutesCount?: pulumi.Input<number>;
    /**
     * Blueprint name.
     */
    name?: pulumi.Input<string>;
    /**
     * When `true`: routing zones will not be rendered on leafs where they are not required, resulting in less resource
     * consumption. Requires Apstra >=4.2.0
     */
    optimizeRoutingZoneFootprint?: pulumi.Input<boolean>;
    /**
     * ID of Rack Based Template used to instantiate the Blueprint.
     */
    templateId: pulumi.Input<string>;
}
