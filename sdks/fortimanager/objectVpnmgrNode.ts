// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectVpnmgrNode extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVpnmgrNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVpnmgrNodeState, opts?: pulumi.CustomResourceOptions): ObjectVpnmgrNode {
        return new ObjectVpnmgrNode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVpnmgrNode:ObjectVpnmgrNode';

    /**
     * Returns true if the given object is an instance of ObjectVpnmgrNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVpnmgrNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVpnmgrNode.__pulumiType;
    }

    public readonly addRoute!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly assignIp!: pulumi.Output<string>;
    public readonly assignIpFrom!: pulumi.Output<string>;
    public readonly authpasswds!: pulumi.Output<string[]>;
    public readonly authusr!: pulumi.Output<string | undefined>;
    public readonly authusrgrp!: pulumi.Output<string | undefined>;
    public readonly autoConfiguration!: pulumi.Output<string>;
    public readonly autoDiscoveryReceiver!: pulumi.Output<string>;
    public readonly autoDiscoverySender!: pulumi.Output<string>;
    public readonly automaticRouting!: pulumi.Output<string | undefined>;
    public readonly banner!: pulumi.Output<string | undefined>;
    public readonly defaultGateway!: pulumi.Output<string>;
    public readonly dhcpRaGiaddr!: pulumi.Output<string>;
    public readonly dhcpServer!: pulumi.Output<string | undefined>;
    public readonly dnsMode!: pulumi.Output<string>;
    public readonly dnsService!: pulumi.Output<string>;
    public readonly domain!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly encapsulation!: pulumi.Output<string>;
    public readonly exchangeInterfaceIp!: pulumi.Output<string>;
    public readonly extgw!: pulumi.Output<string | undefined>;
    public readonly extgwHubip!: pulumi.Output<string | undefined>;
    public readonly extgwP2PerNet!: pulumi.Output<string | undefined>;
    public readonly extgwip!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly hubIfaces!: pulumi.Output<string[]>;
    public readonly hubPublicIp!: pulumi.Output<string | undefined>;
    public readonly ifaces!: pulumi.Output<string[]>;
    public readonly ipRanges!: pulumi.Output<outputs.ObjectVpnmgrNodeIpRange[] | undefined>;
    public readonly ipsecLeaseHold!: pulumi.Output<number>;
    public readonly ipv4DnsServer1!: pulumi.Output<string>;
    public readonly ipv4DnsServer2!: pulumi.Output<string>;
    public readonly ipv4DnsServer3!: pulumi.Output<string>;
    public readonly ipv4EndIp!: pulumi.Output<string>;
    public readonly ipv4ExcludeRanges!: pulumi.Output<outputs.ObjectVpnmgrNodeIpv4ExcludeRange[] | undefined>;
    public readonly ipv4Name!: pulumi.Output<string | undefined>;
    public readonly ipv4Netmask!: pulumi.Output<string>;
    public readonly ipv4SplitExclude!: pulumi.Output<string | undefined>;
    public readonly ipv4SplitInclude!: pulumi.Output<string | undefined>;
    public readonly ipv4StartIp!: pulumi.Output<string>;
    public readonly ipv4WinsServer1!: pulumi.Output<string>;
    public readonly ipv4WinsServer2!: pulumi.Output<string>;
    public readonly l2tp!: pulumi.Output<string>;
    public readonly localGw!: pulumi.Output<string>;
    public readonly localid!: pulumi.Output<string | undefined>;
    public readonly modeCfg!: pulumi.Output<string>;
    public readonly modeCfgIpVersion!: pulumi.Output<string | undefined>;
    public readonly netDevice!: pulumi.Output<string>;
    public readonly networkId!: pulumi.Output<number | undefined>;
    public readonly networkOverlay!: pulumi.Output<string>;
    public readonly peergrp!: pulumi.Output<string | undefined>;
    public readonly peerid!: pulumi.Output<string | undefined>;
    public readonly peers!: pulumi.Output<string[]>;
    public readonly peertype!: pulumi.Output<string>;
    public readonly protectedSubnets!: pulumi.Output<outputs.ObjectVpnmgrNodeProtectedSubnet[] | undefined>;
    public readonly protocol!: pulumi.Output<number | undefined>;
    public readonly publicIp!: pulumi.Output<string | undefined>;
    public readonly role!: pulumi.Output<string | undefined>;
    public readonly routeOverlap!: pulumi.Output<string | undefined>;
    public readonly scopemembers!: pulumi.Output<outputs.ObjectVpnmgrNodeScopemember[] | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly spokeZones!: pulumi.Output<string[]>;
    public readonly summaryAddrs!: pulumi.Output<outputs.ObjectVpnmgrNodeSummaryAddr[] | undefined>;
    public readonly tunnelSearch!: pulumi.Output<string>;
    public readonly unitySupport!: pulumi.Output<string>;
    public readonly usrgrp!: pulumi.Output<string | undefined>;
    public readonly vpnInterfacePriority!: pulumi.Output<number | undefined>;
    public readonly vpnZones!: pulumi.Output<string[]>;
    public readonly vpntables!: pulumi.Output<string[]>;
    public readonly xauthtype!: pulumi.Output<string>;

    /**
     * Create a ObjectVpnmgrNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectVpnmgrNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVpnmgrNodeArgs | ObjectVpnmgrNodeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVpnmgrNodeState | undefined;
            resourceInputs["addRoute"] = state ? state.addRoute : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["assignIp"] = state ? state.assignIp : undefined;
            resourceInputs["assignIpFrom"] = state ? state.assignIpFrom : undefined;
            resourceInputs["authpasswds"] = state ? state.authpasswds : undefined;
            resourceInputs["authusr"] = state ? state.authusr : undefined;
            resourceInputs["authusrgrp"] = state ? state.authusrgrp : undefined;
            resourceInputs["autoConfiguration"] = state ? state.autoConfiguration : undefined;
            resourceInputs["autoDiscoveryReceiver"] = state ? state.autoDiscoveryReceiver : undefined;
            resourceInputs["autoDiscoverySender"] = state ? state.autoDiscoverySender : undefined;
            resourceInputs["automaticRouting"] = state ? state.automaticRouting : undefined;
            resourceInputs["banner"] = state ? state.banner : undefined;
            resourceInputs["defaultGateway"] = state ? state.defaultGateway : undefined;
            resourceInputs["dhcpRaGiaddr"] = state ? state.dhcpRaGiaddr : undefined;
            resourceInputs["dhcpServer"] = state ? state.dhcpServer : undefined;
            resourceInputs["dnsMode"] = state ? state.dnsMode : undefined;
            resourceInputs["dnsService"] = state ? state.dnsService : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["encapsulation"] = state ? state.encapsulation : undefined;
            resourceInputs["exchangeInterfaceIp"] = state ? state.exchangeInterfaceIp : undefined;
            resourceInputs["extgw"] = state ? state.extgw : undefined;
            resourceInputs["extgwHubip"] = state ? state.extgwHubip : undefined;
            resourceInputs["extgwP2PerNet"] = state ? state.extgwP2PerNet : undefined;
            resourceInputs["extgwip"] = state ? state.extgwip : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["hubIfaces"] = state ? state.hubIfaces : undefined;
            resourceInputs["hubPublicIp"] = state ? state.hubPublicIp : undefined;
            resourceInputs["ifaces"] = state ? state.ifaces : undefined;
            resourceInputs["ipRanges"] = state ? state.ipRanges : undefined;
            resourceInputs["ipsecLeaseHold"] = state ? state.ipsecLeaseHold : undefined;
            resourceInputs["ipv4DnsServer1"] = state ? state.ipv4DnsServer1 : undefined;
            resourceInputs["ipv4DnsServer2"] = state ? state.ipv4DnsServer2 : undefined;
            resourceInputs["ipv4DnsServer3"] = state ? state.ipv4DnsServer3 : undefined;
            resourceInputs["ipv4EndIp"] = state ? state.ipv4EndIp : undefined;
            resourceInputs["ipv4ExcludeRanges"] = state ? state.ipv4ExcludeRanges : undefined;
            resourceInputs["ipv4Name"] = state ? state.ipv4Name : undefined;
            resourceInputs["ipv4Netmask"] = state ? state.ipv4Netmask : undefined;
            resourceInputs["ipv4SplitExclude"] = state ? state.ipv4SplitExclude : undefined;
            resourceInputs["ipv4SplitInclude"] = state ? state.ipv4SplitInclude : undefined;
            resourceInputs["ipv4StartIp"] = state ? state.ipv4StartIp : undefined;
            resourceInputs["ipv4WinsServer1"] = state ? state.ipv4WinsServer1 : undefined;
            resourceInputs["ipv4WinsServer2"] = state ? state.ipv4WinsServer2 : undefined;
            resourceInputs["l2tp"] = state ? state.l2tp : undefined;
            resourceInputs["localGw"] = state ? state.localGw : undefined;
            resourceInputs["localid"] = state ? state.localid : undefined;
            resourceInputs["modeCfg"] = state ? state.modeCfg : undefined;
            resourceInputs["modeCfgIpVersion"] = state ? state.modeCfgIpVersion : undefined;
            resourceInputs["netDevice"] = state ? state.netDevice : undefined;
            resourceInputs["networkId"] = state ? state.networkId : undefined;
            resourceInputs["networkOverlay"] = state ? state.networkOverlay : undefined;
            resourceInputs["peergrp"] = state ? state.peergrp : undefined;
            resourceInputs["peerid"] = state ? state.peerid : undefined;
            resourceInputs["peers"] = state ? state.peers : undefined;
            resourceInputs["peertype"] = state ? state.peertype : undefined;
            resourceInputs["protectedSubnets"] = state ? state.protectedSubnets : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["publicIp"] = state ? state.publicIp : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["routeOverlap"] = state ? state.routeOverlap : undefined;
            resourceInputs["scopemembers"] = state ? state.scopemembers : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["spokeZones"] = state ? state.spokeZones : undefined;
            resourceInputs["summaryAddrs"] = state ? state.summaryAddrs : undefined;
            resourceInputs["tunnelSearch"] = state ? state.tunnelSearch : undefined;
            resourceInputs["unitySupport"] = state ? state.unitySupport : undefined;
            resourceInputs["usrgrp"] = state ? state.usrgrp : undefined;
            resourceInputs["vpnInterfacePriority"] = state ? state.vpnInterfacePriority : undefined;
            resourceInputs["vpnZones"] = state ? state.vpnZones : undefined;
            resourceInputs["vpntables"] = state ? state.vpntables : undefined;
            resourceInputs["xauthtype"] = state ? state.xauthtype : undefined;
        } else {
            const args = argsOrState as ObjectVpnmgrNodeArgs | undefined;
            resourceInputs["addRoute"] = args ? args.addRoute : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["assignIp"] = args ? args.assignIp : undefined;
            resourceInputs["assignIpFrom"] = args ? args.assignIpFrom : undefined;
            resourceInputs["authpasswds"] = args?.authpasswds ? pulumi.secret(args.authpasswds) : undefined;
            resourceInputs["authusr"] = args ? args.authusr : undefined;
            resourceInputs["authusrgrp"] = args ? args.authusrgrp : undefined;
            resourceInputs["autoConfiguration"] = args ? args.autoConfiguration : undefined;
            resourceInputs["autoDiscoveryReceiver"] = args ? args.autoDiscoveryReceiver : undefined;
            resourceInputs["autoDiscoverySender"] = args ? args.autoDiscoverySender : undefined;
            resourceInputs["automaticRouting"] = args ? args.automaticRouting : undefined;
            resourceInputs["banner"] = args ? args.banner : undefined;
            resourceInputs["defaultGateway"] = args ? args.defaultGateway : undefined;
            resourceInputs["dhcpRaGiaddr"] = args ? args.dhcpRaGiaddr : undefined;
            resourceInputs["dhcpServer"] = args ? args.dhcpServer : undefined;
            resourceInputs["dnsMode"] = args ? args.dnsMode : undefined;
            resourceInputs["dnsService"] = args ? args.dnsService : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["encapsulation"] = args ? args.encapsulation : undefined;
            resourceInputs["exchangeInterfaceIp"] = args ? args.exchangeInterfaceIp : undefined;
            resourceInputs["extgw"] = args ? args.extgw : undefined;
            resourceInputs["extgwHubip"] = args ? args.extgwHubip : undefined;
            resourceInputs["extgwP2PerNet"] = args ? args.extgwP2PerNet : undefined;
            resourceInputs["extgwip"] = args ? args.extgwip : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["hubIfaces"] = args ? args.hubIfaces : undefined;
            resourceInputs["hubPublicIp"] = args ? args.hubPublicIp : undefined;
            resourceInputs["ifaces"] = args ? args.ifaces : undefined;
            resourceInputs["ipRanges"] = args ? args.ipRanges : undefined;
            resourceInputs["ipsecLeaseHold"] = args ? args.ipsecLeaseHold : undefined;
            resourceInputs["ipv4DnsServer1"] = args ? args.ipv4DnsServer1 : undefined;
            resourceInputs["ipv4DnsServer2"] = args ? args.ipv4DnsServer2 : undefined;
            resourceInputs["ipv4DnsServer3"] = args ? args.ipv4DnsServer3 : undefined;
            resourceInputs["ipv4EndIp"] = args ? args.ipv4EndIp : undefined;
            resourceInputs["ipv4ExcludeRanges"] = args ? args.ipv4ExcludeRanges : undefined;
            resourceInputs["ipv4Name"] = args ? args.ipv4Name : undefined;
            resourceInputs["ipv4Netmask"] = args ? args.ipv4Netmask : undefined;
            resourceInputs["ipv4SplitExclude"] = args ? args.ipv4SplitExclude : undefined;
            resourceInputs["ipv4SplitInclude"] = args ? args.ipv4SplitInclude : undefined;
            resourceInputs["ipv4StartIp"] = args ? args.ipv4StartIp : undefined;
            resourceInputs["ipv4WinsServer1"] = args ? args.ipv4WinsServer1 : undefined;
            resourceInputs["ipv4WinsServer2"] = args ? args.ipv4WinsServer2 : undefined;
            resourceInputs["l2tp"] = args ? args.l2tp : undefined;
            resourceInputs["localGw"] = args ? args.localGw : undefined;
            resourceInputs["localid"] = args ? args.localid : undefined;
            resourceInputs["modeCfg"] = args ? args.modeCfg : undefined;
            resourceInputs["modeCfgIpVersion"] = args ? args.modeCfgIpVersion : undefined;
            resourceInputs["netDevice"] = args ? args.netDevice : undefined;
            resourceInputs["networkId"] = args ? args.networkId : undefined;
            resourceInputs["networkOverlay"] = args ? args.networkOverlay : undefined;
            resourceInputs["peergrp"] = args ? args.peergrp : undefined;
            resourceInputs["peerid"] = args ? args.peerid : undefined;
            resourceInputs["peers"] = args ? args.peers : undefined;
            resourceInputs["peertype"] = args ? args.peertype : undefined;
            resourceInputs["protectedSubnets"] = args ? args.protectedSubnets : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["publicIp"] = args ? args.publicIp : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["routeOverlap"] = args ? args.routeOverlap : undefined;
            resourceInputs["scopemembers"] = args ? args.scopemembers : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["spokeZones"] = args ? args.spokeZones : undefined;
            resourceInputs["summaryAddrs"] = args ? args.summaryAddrs : undefined;
            resourceInputs["tunnelSearch"] = args ? args.tunnelSearch : undefined;
            resourceInputs["unitySupport"] = args ? args.unitySupport : undefined;
            resourceInputs["usrgrp"] = args ? args.usrgrp : undefined;
            resourceInputs["vpnInterfacePriority"] = args ? args.vpnInterfacePriority : undefined;
            resourceInputs["vpnZones"] = args ? args.vpnZones : undefined;
            resourceInputs["vpntables"] = args ? args.vpntables : undefined;
            resourceInputs["xauthtype"] = args ? args.xauthtype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authpasswds"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectVpnmgrNode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVpnmgrNode resources.
 */
export interface ObjectVpnmgrNodeState {
    addRoute?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    assignIp?: pulumi.Input<string>;
    assignIpFrom?: pulumi.Input<string>;
    authpasswds?: pulumi.Input<pulumi.Input<string>[]>;
    authusr?: pulumi.Input<string>;
    authusrgrp?: pulumi.Input<string>;
    autoConfiguration?: pulumi.Input<string>;
    autoDiscoveryReceiver?: pulumi.Input<string>;
    autoDiscoverySender?: pulumi.Input<string>;
    automaticRouting?: pulumi.Input<string>;
    banner?: pulumi.Input<string>;
    defaultGateway?: pulumi.Input<string>;
    dhcpRaGiaddr?: pulumi.Input<string>;
    dhcpServer?: pulumi.Input<string>;
    dnsMode?: pulumi.Input<string>;
    dnsService?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    encapsulation?: pulumi.Input<string>;
    exchangeInterfaceIp?: pulumi.Input<string>;
    extgw?: pulumi.Input<string>;
    extgwHubip?: pulumi.Input<string>;
    extgwP2PerNet?: pulumi.Input<string>;
    extgwip?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    hubIfaces?: pulumi.Input<pulumi.Input<string>[]>;
    hubPublicIp?: pulumi.Input<string>;
    ifaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipRanges?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeIpRange>[]>;
    ipsecLeaseHold?: pulumi.Input<number>;
    ipv4DnsServer1?: pulumi.Input<string>;
    ipv4DnsServer2?: pulumi.Input<string>;
    ipv4DnsServer3?: pulumi.Input<string>;
    ipv4EndIp?: pulumi.Input<string>;
    ipv4ExcludeRanges?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeIpv4ExcludeRange>[]>;
    ipv4Name?: pulumi.Input<string>;
    ipv4Netmask?: pulumi.Input<string>;
    ipv4SplitExclude?: pulumi.Input<string>;
    ipv4SplitInclude?: pulumi.Input<string>;
    ipv4StartIp?: pulumi.Input<string>;
    ipv4WinsServer1?: pulumi.Input<string>;
    ipv4WinsServer2?: pulumi.Input<string>;
    l2tp?: pulumi.Input<string>;
    localGw?: pulumi.Input<string>;
    localid?: pulumi.Input<string>;
    modeCfg?: pulumi.Input<string>;
    modeCfgIpVersion?: pulumi.Input<string>;
    netDevice?: pulumi.Input<string>;
    networkId?: pulumi.Input<number>;
    networkOverlay?: pulumi.Input<string>;
    peergrp?: pulumi.Input<string>;
    peerid?: pulumi.Input<string>;
    peers?: pulumi.Input<pulumi.Input<string>[]>;
    peertype?: pulumi.Input<string>;
    protectedSubnets?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeProtectedSubnet>[]>;
    protocol?: pulumi.Input<number>;
    publicIp?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    routeOverlap?: pulumi.Input<string>;
    scopemembers?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeScopemember>[]>;
    scopetype?: pulumi.Input<string>;
    spokeZones?: pulumi.Input<pulumi.Input<string>[]>;
    summaryAddrs?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeSummaryAddr>[]>;
    tunnelSearch?: pulumi.Input<string>;
    unitySupport?: pulumi.Input<string>;
    usrgrp?: pulumi.Input<string>;
    vpnInterfacePriority?: pulumi.Input<number>;
    vpnZones?: pulumi.Input<pulumi.Input<string>[]>;
    vpntables?: pulumi.Input<pulumi.Input<string>[]>;
    xauthtype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVpnmgrNode resource.
 */
export interface ObjectVpnmgrNodeArgs {
    addRoute?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    assignIp?: pulumi.Input<string>;
    assignIpFrom?: pulumi.Input<string>;
    authpasswds?: pulumi.Input<pulumi.Input<string>[]>;
    authusr?: pulumi.Input<string>;
    authusrgrp?: pulumi.Input<string>;
    autoConfiguration?: pulumi.Input<string>;
    autoDiscoveryReceiver?: pulumi.Input<string>;
    autoDiscoverySender?: pulumi.Input<string>;
    automaticRouting?: pulumi.Input<string>;
    banner?: pulumi.Input<string>;
    defaultGateway?: pulumi.Input<string>;
    dhcpRaGiaddr?: pulumi.Input<string>;
    dhcpServer?: pulumi.Input<string>;
    dnsMode?: pulumi.Input<string>;
    dnsService?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    encapsulation?: pulumi.Input<string>;
    exchangeInterfaceIp?: pulumi.Input<string>;
    extgw?: pulumi.Input<string>;
    extgwHubip?: pulumi.Input<string>;
    extgwP2PerNet?: pulumi.Input<string>;
    extgwip?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    hubIfaces?: pulumi.Input<pulumi.Input<string>[]>;
    hubPublicIp?: pulumi.Input<string>;
    ifaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipRanges?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeIpRange>[]>;
    ipsecLeaseHold?: pulumi.Input<number>;
    ipv4DnsServer1?: pulumi.Input<string>;
    ipv4DnsServer2?: pulumi.Input<string>;
    ipv4DnsServer3?: pulumi.Input<string>;
    ipv4EndIp?: pulumi.Input<string>;
    ipv4ExcludeRanges?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeIpv4ExcludeRange>[]>;
    ipv4Name?: pulumi.Input<string>;
    ipv4Netmask?: pulumi.Input<string>;
    ipv4SplitExclude?: pulumi.Input<string>;
    ipv4SplitInclude?: pulumi.Input<string>;
    ipv4StartIp?: pulumi.Input<string>;
    ipv4WinsServer1?: pulumi.Input<string>;
    ipv4WinsServer2?: pulumi.Input<string>;
    l2tp?: pulumi.Input<string>;
    localGw?: pulumi.Input<string>;
    localid?: pulumi.Input<string>;
    modeCfg?: pulumi.Input<string>;
    modeCfgIpVersion?: pulumi.Input<string>;
    netDevice?: pulumi.Input<string>;
    networkId?: pulumi.Input<number>;
    networkOverlay?: pulumi.Input<string>;
    peergrp?: pulumi.Input<string>;
    peerid?: pulumi.Input<string>;
    peers?: pulumi.Input<pulumi.Input<string>[]>;
    peertype?: pulumi.Input<string>;
    protectedSubnets?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeProtectedSubnet>[]>;
    protocol?: pulumi.Input<number>;
    publicIp?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    routeOverlap?: pulumi.Input<string>;
    scopemembers?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeScopemember>[]>;
    scopetype?: pulumi.Input<string>;
    spokeZones?: pulumi.Input<pulumi.Input<string>[]>;
    summaryAddrs?: pulumi.Input<pulumi.Input<inputs.ObjectVpnmgrNodeSummaryAddr>[]>;
    tunnelSearch?: pulumi.Input<string>;
    unitySupport?: pulumi.Input<string>;
    usrgrp?: pulumi.Input<string>;
    vpnInterfacePriority?: pulumi.Input<number>;
    vpnZones?: pulumi.Input<pulumi.Input<string>[]>;
    vpntables?: pulumi.Input<pulumi.Input<string>[]>;
    xauthtype?: pulumi.Input<string>;
}
