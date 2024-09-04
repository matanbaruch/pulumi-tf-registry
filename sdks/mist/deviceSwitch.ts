// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DeviceSwitch extends pulumi.CustomResource {
    /**
     * Get an existing DeviceSwitch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceSwitchState, opts?: pulumi.CustomResourceOptions): DeviceSwitch {
        return new DeviceSwitch(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mist:index/deviceSwitch:DeviceSwitch';

    /**
     * Returns true if the given object is an instance of DeviceSwitch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeviceSwitch {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeviceSwitch.__pulumiType;
    }

    public readonly aclPolicies!: pulumi.Output<outputs.DeviceSwitchAclPolicy[] | undefined>;
    /**
     * ACL Tags to identify traffic source or destination. Key name is the tag name
     */
    public readonly aclTags!: pulumi.Output<{[key: string]: outputs.DeviceSwitchAclTags} | undefined>;
    /**
     * additional CLI commands to append to the generated Junos config **Note**: no check is done
     */
    public readonly additionalConfigCmds!: pulumi.Output<string[] | undefined>;
    public readonly deviceId!: pulumi.Output<string>;
    public /*out*/ readonly deviceprofileId!: pulumi.Output<string>;
    public readonly dhcpSnooping!: pulumi.Output<outputs.DeviceSwitchDhcpSnooping | undefined>;
    public readonly dhcpdConfig!: pulumi.Output<outputs.DeviceSwitchDhcpdConfig | undefined>;
    /**
     * for a claimed switch, we control the configs by default. This option (disables the behavior)
     */
    public readonly disableAutoConfig!: pulumi.Output<boolean>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    public readonly dnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    public readonly dnsSuffixes!: pulumi.Output<string[] | undefined>;
    /**
     * EVPN Junos settings
     */
    public readonly evpnConfig!: pulumi.Output<outputs.DeviceSwitchEvpnConfig | undefined>;
    public readonly extraRoutes!: pulumi.Output<{[key: string]: outputs.DeviceSwitchExtraRoutes} | undefined>;
    /**
     * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
     */
    public readonly extraRoutes6!: pulumi.Output<{[key: string]: outputs.DeviceSwitchExtraRoutes6} | undefined>;
    public /*out*/ readonly image1Url!: pulumi.Output<string>;
    public /*out*/ readonly image2Url!: pulumi.Output<string>;
    public /*out*/ readonly image3Url!: pulumi.Output<string>;
    /**
     * Junos IP Config
     */
    public readonly ipConfig!: pulumi.Output<outputs.DeviceSwitchIpConfig | undefined>;
    /**
     * device MAC address
     */
    public /*out*/ readonly mac!: pulumi.Output<string>;
    /**
     * for an adopted switch, we don’t overwrite their existing configs automatically
     */
    public readonly managed!: pulumi.Output<boolean>;
    /**
     * map where the device belongs to
     */
    public readonly mapId!: pulumi.Output<string | undefined>;
    /**
     * enable mist_nac to use radsec
     */
    public readonly mistNac!: pulumi.Output<outputs.DeviceSwitchMistNac | undefined>;
    /**
     * device Model
     */
    public /*out*/ readonly model!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Property key is network name
     */
    public readonly networks!: pulumi.Output<{[key: string]: outputs.DeviceSwitchNetworks} | undefined>;
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * list of NTP servers specific to this device. By default, those in Site Settings will be used
     */
    public readonly ntpServers!: pulumi.Output<string[] | undefined>;
    /**
     * - If HA configuration: key parameter will be nodeX (eg: node1) - If there are 2 routing engines, re1 mgmt IP has to be
     * set separately (if desired): key parameter = `re1`
     */
    public readonly oobIpConfig!: pulumi.Output<outputs.DeviceSwitchOobIpConfig | undefined>;
    public /*out*/ readonly orgId!: pulumi.Output<string>;
    /**
     * Junos OSPF config
     */
    public readonly ospfConfig!: pulumi.Output<outputs.DeviceSwitchOspfConfig | undefined>;
    /**
     * Property key is the network name
     */
    public readonly otherIpConfigs!: pulumi.Output<{[key: string]: outputs.DeviceSwitchOtherIpConfigs} | undefined>;
    /**
     * Property key is the port name or range (e.g. "ge-0/0/0-10")
     */
    public readonly portConfig!: pulumi.Output<{[key: string]: outputs.DeviceSwitchPortConfig} | undefined>;
    /**
     * Property key is the port mirroring instance name port_mirroring can be added under device/site settings. It takes
     * interface and ports as input for ingress, interface as input for egress and can take interface and port as output.
     */
    public readonly portMirroring!: pulumi.Output<{[key: string]: outputs.DeviceSwitchPortMirroring} | undefined>;
    public readonly portUsages!: pulumi.Output<{[key: string]: outputs.DeviceSwitchPortUsages} | undefined>;
    /**
     * Junos Radius config
     */
    public readonly radiusConfig!: pulumi.Output<outputs.DeviceSwitchRadiusConfig | undefined>;
    public readonly remoteSyslog!: pulumi.Output<outputs.DeviceSwitchRemoteSyslog | undefined>;
    public readonly role!: pulumi.Output<string | undefined>;
    /**
     * used for OSPF / BGP / EVPN
     */
    public readonly routerId!: pulumi.Output<string | undefined>;
    /**
     * device Serial
     */
    public /*out*/ readonly serial!: pulumi.Output<string>;
    public readonly siteId!: pulumi.Output<string>;
    public readonly snmpConfig!: pulumi.Output<outputs.DeviceSwitchSnmpConfig | undefined>;
    public readonly stpConfig!: pulumi.Output<outputs.DeviceSwitchStpConfig | undefined>;
    public readonly switchMgmt!: pulumi.Output<outputs.DeviceSwitchSwitchMgmt | undefined>;
    /**
     * Device Type. enum: `switch`
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * whether to use it for snmp / syslog / tacplus / radius
     */
    public readonly useRouterIdAsSourceIp!: pulumi.Output<boolean>;
    /**
     * a dictionary of name->value, the vars can then be used in Wlans. This can overwrite those from Site Vars
     */
    public readonly vars!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * required for preprovisioned Virtual Chassis
     */
    public readonly virtualChassis!: pulumi.Output<outputs.DeviceSwitchVirtualChassis | undefined>;
    public readonly vrfConfig!: pulumi.Output<outputs.DeviceSwitchVrfConfig | undefined>;
    /**
     * Property key is the network name
     */
    public readonly vrfInstances!: pulumi.Output<{[key: string]: outputs.DeviceSwitchVrfInstances} | undefined>;
    /**
     * Junos VRRP config
     */
    public readonly vrrpConfig!: pulumi.Output<outputs.DeviceSwitchVrrpConfig | undefined>;
    /**
     * x in pixel
     */
    public readonly x!: pulumi.Output<number | undefined>;
    /**
     * y in pixel
     */
    public readonly y!: pulumi.Output<number | undefined>;

    /**
     * Create a DeviceSwitch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceSwitchArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeviceSwitchArgs | DeviceSwitchState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeviceSwitchState | undefined;
            resourceInputs["aclPolicies"] = state ? state.aclPolicies : undefined;
            resourceInputs["aclTags"] = state ? state.aclTags : undefined;
            resourceInputs["additionalConfigCmds"] = state ? state.additionalConfigCmds : undefined;
            resourceInputs["deviceId"] = state ? state.deviceId : undefined;
            resourceInputs["deviceprofileId"] = state ? state.deviceprofileId : undefined;
            resourceInputs["dhcpSnooping"] = state ? state.dhcpSnooping : undefined;
            resourceInputs["dhcpdConfig"] = state ? state.dhcpdConfig : undefined;
            resourceInputs["disableAutoConfig"] = state ? state.disableAutoConfig : undefined;
            resourceInputs["dnsServers"] = state ? state.dnsServers : undefined;
            resourceInputs["dnsSuffixes"] = state ? state.dnsSuffixes : undefined;
            resourceInputs["evpnConfig"] = state ? state.evpnConfig : undefined;
            resourceInputs["extraRoutes"] = state ? state.extraRoutes : undefined;
            resourceInputs["extraRoutes6"] = state ? state.extraRoutes6 : undefined;
            resourceInputs["image1Url"] = state ? state.image1Url : undefined;
            resourceInputs["image2Url"] = state ? state.image2Url : undefined;
            resourceInputs["image3Url"] = state ? state.image3Url : undefined;
            resourceInputs["ipConfig"] = state ? state.ipConfig : undefined;
            resourceInputs["mac"] = state ? state.mac : undefined;
            resourceInputs["managed"] = state ? state.managed : undefined;
            resourceInputs["mapId"] = state ? state.mapId : undefined;
            resourceInputs["mistNac"] = state ? state.mistNac : undefined;
            resourceInputs["model"] = state ? state.model : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["ntpServers"] = state ? state.ntpServers : undefined;
            resourceInputs["oobIpConfig"] = state ? state.oobIpConfig : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["ospfConfig"] = state ? state.ospfConfig : undefined;
            resourceInputs["otherIpConfigs"] = state ? state.otherIpConfigs : undefined;
            resourceInputs["portConfig"] = state ? state.portConfig : undefined;
            resourceInputs["portMirroring"] = state ? state.portMirroring : undefined;
            resourceInputs["portUsages"] = state ? state.portUsages : undefined;
            resourceInputs["radiusConfig"] = state ? state.radiusConfig : undefined;
            resourceInputs["remoteSyslog"] = state ? state.remoteSyslog : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["routerId"] = state ? state.routerId : undefined;
            resourceInputs["serial"] = state ? state.serial : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["snmpConfig"] = state ? state.snmpConfig : undefined;
            resourceInputs["stpConfig"] = state ? state.stpConfig : undefined;
            resourceInputs["switchMgmt"] = state ? state.switchMgmt : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["useRouterIdAsSourceIp"] = state ? state.useRouterIdAsSourceIp : undefined;
            resourceInputs["vars"] = state ? state.vars : undefined;
            resourceInputs["virtualChassis"] = state ? state.virtualChassis : undefined;
            resourceInputs["vrfConfig"] = state ? state.vrfConfig : undefined;
            resourceInputs["vrfInstances"] = state ? state.vrfInstances : undefined;
            resourceInputs["vrrpConfig"] = state ? state.vrrpConfig : undefined;
            resourceInputs["x"] = state ? state.x : undefined;
            resourceInputs["y"] = state ? state.y : undefined;
        } else {
            const args = argsOrState as DeviceSwitchArgs | undefined;
            if ((!args || args.deviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceId'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            resourceInputs["aclPolicies"] = args ? args.aclPolicies : undefined;
            resourceInputs["aclTags"] = args ? args.aclTags : undefined;
            resourceInputs["additionalConfigCmds"] = args ? args.additionalConfigCmds : undefined;
            resourceInputs["deviceId"] = args ? args.deviceId : undefined;
            resourceInputs["dhcpSnooping"] = args ? args.dhcpSnooping : undefined;
            resourceInputs["dhcpdConfig"] = args ? args.dhcpdConfig : undefined;
            resourceInputs["disableAutoConfig"] = args ? args.disableAutoConfig : undefined;
            resourceInputs["dnsServers"] = args ? args.dnsServers : undefined;
            resourceInputs["dnsSuffixes"] = args ? args.dnsSuffixes : undefined;
            resourceInputs["evpnConfig"] = args ? args.evpnConfig : undefined;
            resourceInputs["extraRoutes"] = args ? args.extraRoutes : undefined;
            resourceInputs["extraRoutes6"] = args ? args.extraRoutes6 : undefined;
            resourceInputs["ipConfig"] = args ? args.ipConfig : undefined;
            resourceInputs["managed"] = args ? args.managed : undefined;
            resourceInputs["mapId"] = args ? args.mapId : undefined;
            resourceInputs["mistNac"] = args ? args.mistNac : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["ntpServers"] = args ? args.ntpServers : undefined;
            resourceInputs["oobIpConfig"] = args ? args.oobIpConfig : undefined;
            resourceInputs["ospfConfig"] = args ? args.ospfConfig : undefined;
            resourceInputs["otherIpConfigs"] = args ? args.otherIpConfigs : undefined;
            resourceInputs["portConfig"] = args ? args.portConfig : undefined;
            resourceInputs["portMirroring"] = args ? args.portMirroring : undefined;
            resourceInputs["portUsages"] = args ? args.portUsages : undefined;
            resourceInputs["radiusConfig"] = args ? args.radiusConfig : undefined;
            resourceInputs["remoteSyslog"] = args ? args.remoteSyslog : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["routerId"] = args ? args.routerId : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["snmpConfig"] = args ? args.snmpConfig : undefined;
            resourceInputs["stpConfig"] = args ? args.stpConfig : undefined;
            resourceInputs["switchMgmt"] = args ? args.switchMgmt : undefined;
            resourceInputs["useRouterIdAsSourceIp"] = args ? args.useRouterIdAsSourceIp : undefined;
            resourceInputs["vars"] = args ? args.vars : undefined;
            resourceInputs["virtualChassis"] = args ? args.virtualChassis : undefined;
            resourceInputs["vrfConfig"] = args ? args.vrfConfig : undefined;
            resourceInputs["vrfInstances"] = args ? args.vrfInstances : undefined;
            resourceInputs["vrrpConfig"] = args ? args.vrrpConfig : undefined;
            resourceInputs["x"] = args ? args.x : undefined;
            resourceInputs["y"] = args ? args.y : undefined;
            resourceInputs["deviceprofileId"] = undefined /*out*/;
            resourceInputs["image1Url"] = undefined /*out*/;
            resourceInputs["image2Url"] = undefined /*out*/;
            resourceInputs["image3Url"] = undefined /*out*/;
            resourceInputs["mac"] = undefined /*out*/;
            resourceInputs["model"] = undefined /*out*/;
            resourceInputs["orgId"] = undefined /*out*/;
            resourceInputs["serial"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DeviceSwitch.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DeviceSwitch resources.
 */
export interface DeviceSwitchState {
    aclPolicies?: pulumi.Input<pulumi.Input<inputs.DeviceSwitchAclPolicy>[]>;
    /**
     * ACL Tags to identify traffic source or destination. Key name is the tag name
     */
    aclTags?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchAclTags>}>;
    /**
     * additional CLI commands to append to the generated Junos config **Note**: no check is done
     */
    additionalConfigCmds?: pulumi.Input<pulumi.Input<string>[]>;
    deviceId?: pulumi.Input<string>;
    deviceprofileId?: pulumi.Input<string>;
    dhcpSnooping?: pulumi.Input<inputs.DeviceSwitchDhcpSnooping>;
    dhcpdConfig?: pulumi.Input<inputs.DeviceSwitchDhcpdConfig>;
    /**
     * for a claimed switch, we control the configs by default. This option (disables the behavior)
     */
    disableAutoConfig?: pulumi.Input<boolean>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    dnsSuffixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * EVPN Junos settings
     */
    evpnConfig?: pulumi.Input<inputs.DeviceSwitchEvpnConfig>;
    extraRoutes?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchExtraRoutes>}>;
    /**
     * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
     */
    extraRoutes6?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchExtraRoutes6>}>;
    image1Url?: pulumi.Input<string>;
    image2Url?: pulumi.Input<string>;
    image3Url?: pulumi.Input<string>;
    /**
     * Junos IP Config
     */
    ipConfig?: pulumi.Input<inputs.DeviceSwitchIpConfig>;
    /**
     * device MAC address
     */
    mac?: pulumi.Input<string>;
    /**
     * for an adopted switch, we don’t overwrite their existing configs automatically
     */
    managed?: pulumi.Input<boolean>;
    /**
     * map where the device belongs to
     */
    mapId?: pulumi.Input<string>;
    /**
     * enable mist_nac to use radsec
     */
    mistNac?: pulumi.Input<inputs.DeviceSwitchMistNac>;
    /**
     * device Model
     */
    model?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Property key is network name
     */
    networks?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchNetworks>}>;
    notes?: pulumi.Input<string>;
    /**
     * list of NTP servers specific to this device. By default, those in Site Settings will be used
     */
    ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * - If HA configuration: key parameter will be nodeX (eg: node1) - If there are 2 routing engines, re1 mgmt IP has to be
     * set separately (if desired): key parameter = `re1`
     */
    oobIpConfig?: pulumi.Input<inputs.DeviceSwitchOobIpConfig>;
    orgId?: pulumi.Input<string>;
    /**
     * Junos OSPF config
     */
    ospfConfig?: pulumi.Input<inputs.DeviceSwitchOspfConfig>;
    /**
     * Property key is the network name
     */
    otherIpConfigs?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchOtherIpConfigs>}>;
    /**
     * Property key is the port name or range (e.g. "ge-0/0/0-10")
     */
    portConfig?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortConfig>}>;
    /**
     * Property key is the port mirroring instance name port_mirroring can be added under device/site settings. It takes
     * interface and ports as input for ingress, interface as input for egress and can take interface and port as output.
     */
    portMirroring?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortMirroring>}>;
    portUsages?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortUsages>}>;
    /**
     * Junos Radius config
     */
    radiusConfig?: pulumi.Input<inputs.DeviceSwitchRadiusConfig>;
    remoteSyslog?: pulumi.Input<inputs.DeviceSwitchRemoteSyslog>;
    role?: pulumi.Input<string>;
    /**
     * used for OSPF / BGP / EVPN
     */
    routerId?: pulumi.Input<string>;
    /**
     * device Serial
     */
    serial?: pulumi.Input<string>;
    siteId?: pulumi.Input<string>;
    snmpConfig?: pulumi.Input<inputs.DeviceSwitchSnmpConfig>;
    stpConfig?: pulumi.Input<inputs.DeviceSwitchStpConfig>;
    switchMgmt?: pulumi.Input<inputs.DeviceSwitchSwitchMgmt>;
    /**
     * Device Type. enum: `switch`
     */
    type?: pulumi.Input<string>;
    /**
     * whether to use it for snmp / syslog / tacplus / radius
     */
    useRouterIdAsSourceIp?: pulumi.Input<boolean>;
    /**
     * a dictionary of name->value, the vars can then be used in Wlans. This can overwrite those from Site Vars
     */
    vars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * required for preprovisioned Virtual Chassis
     */
    virtualChassis?: pulumi.Input<inputs.DeviceSwitchVirtualChassis>;
    vrfConfig?: pulumi.Input<inputs.DeviceSwitchVrfConfig>;
    /**
     * Property key is the network name
     */
    vrfInstances?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchVrfInstances>}>;
    /**
     * Junos VRRP config
     */
    vrrpConfig?: pulumi.Input<inputs.DeviceSwitchVrrpConfig>;
    /**
     * x in pixel
     */
    x?: pulumi.Input<number>;
    /**
     * y in pixel
     */
    y?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DeviceSwitch resource.
 */
export interface DeviceSwitchArgs {
    aclPolicies?: pulumi.Input<pulumi.Input<inputs.DeviceSwitchAclPolicy>[]>;
    /**
     * ACL Tags to identify traffic source or destination. Key name is the tag name
     */
    aclTags?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchAclTags>}>;
    /**
     * additional CLI commands to append to the generated Junos config **Note**: no check is done
     */
    additionalConfigCmds?: pulumi.Input<pulumi.Input<string>[]>;
    deviceId: pulumi.Input<string>;
    dhcpSnooping?: pulumi.Input<inputs.DeviceSwitchDhcpSnooping>;
    dhcpdConfig?: pulumi.Input<inputs.DeviceSwitchDhcpdConfig>;
    /**
     * for a claimed switch, we control the configs by default. This option (disables the behavior)
     */
    disableAutoConfig?: pulumi.Input<boolean>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
     */
    dnsSuffixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * EVPN Junos settings
     */
    evpnConfig?: pulumi.Input<inputs.DeviceSwitchEvpnConfig>;
    extraRoutes?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchExtraRoutes>}>;
    /**
     * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
     */
    extraRoutes6?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchExtraRoutes6>}>;
    /**
     * Junos IP Config
     */
    ipConfig?: pulumi.Input<inputs.DeviceSwitchIpConfig>;
    /**
     * for an adopted switch, we don’t overwrite their existing configs automatically
     */
    managed?: pulumi.Input<boolean>;
    /**
     * map where the device belongs to
     */
    mapId?: pulumi.Input<string>;
    /**
     * enable mist_nac to use radsec
     */
    mistNac?: pulumi.Input<inputs.DeviceSwitchMistNac>;
    name?: pulumi.Input<string>;
    /**
     * Property key is network name
     */
    networks?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchNetworks>}>;
    notes?: pulumi.Input<string>;
    /**
     * list of NTP servers specific to this device. By default, those in Site Settings will be used
     */
    ntpServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * - If HA configuration: key parameter will be nodeX (eg: node1) - If there are 2 routing engines, re1 mgmt IP has to be
     * set separately (if desired): key parameter = `re1`
     */
    oobIpConfig?: pulumi.Input<inputs.DeviceSwitchOobIpConfig>;
    /**
     * Junos OSPF config
     */
    ospfConfig?: pulumi.Input<inputs.DeviceSwitchOspfConfig>;
    /**
     * Property key is the network name
     */
    otherIpConfigs?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchOtherIpConfigs>}>;
    /**
     * Property key is the port name or range (e.g. "ge-0/0/0-10")
     */
    portConfig?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortConfig>}>;
    /**
     * Property key is the port mirroring instance name port_mirroring can be added under device/site settings. It takes
     * interface and ports as input for ingress, interface as input for egress and can take interface and port as output.
     */
    portMirroring?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortMirroring>}>;
    portUsages?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchPortUsages>}>;
    /**
     * Junos Radius config
     */
    radiusConfig?: pulumi.Input<inputs.DeviceSwitchRadiusConfig>;
    remoteSyslog?: pulumi.Input<inputs.DeviceSwitchRemoteSyslog>;
    role?: pulumi.Input<string>;
    /**
     * used for OSPF / BGP / EVPN
     */
    routerId?: pulumi.Input<string>;
    siteId: pulumi.Input<string>;
    snmpConfig?: pulumi.Input<inputs.DeviceSwitchSnmpConfig>;
    stpConfig?: pulumi.Input<inputs.DeviceSwitchStpConfig>;
    switchMgmt?: pulumi.Input<inputs.DeviceSwitchSwitchMgmt>;
    /**
     * whether to use it for snmp / syslog / tacplus / radius
     */
    useRouterIdAsSourceIp?: pulumi.Input<boolean>;
    /**
     * a dictionary of name->value, the vars can then be used in Wlans. This can overwrite those from Site Vars
     */
    vars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * required for preprovisioned Virtual Chassis
     */
    virtualChassis?: pulumi.Input<inputs.DeviceSwitchVirtualChassis>;
    vrfConfig?: pulumi.Input<inputs.DeviceSwitchVrfConfig>;
    /**
     * Property key is the network name
     */
    vrfInstances?: pulumi.Input<{[key: string]: pulumi.Input<inputs.DeviceSwitchVrfInstances>}>;
    /**
     * Junos VRRP config
     */
    vrrpConfig?: pulumi.Input<inputs.DeviceSwitchVrrpConfig>;
    /**
     * x in pixel
     */
    x?: pulumi.Input<number>;
    /**
     * y in pixel
     */
    y?: pulumi.Input<number>;
}
