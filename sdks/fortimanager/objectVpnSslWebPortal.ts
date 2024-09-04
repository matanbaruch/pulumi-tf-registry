// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectVpnSslWebPortal extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVpnSslWebPortal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVpnSslWebPortalState, opts?: pulumi.CustomResourceOptions): ObjectVpnSslWebPortal {
        return new ObjectVpnSslWebPortal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVpnSslWebPortal:ObjectVpnSslWebPortal';

    /**
     * Returns true if the given object is an instance of ObjectVpnSslWebPortal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVpnSslWebPortal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVpnSslWebPortal.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly allowUserAccesses!: pulumi.Output<string[]>;
    public readonly autoConnect!: pulumi.Output<string | undefined>;
    public readonly bookmarkGroups!: pulumi.Output<outputs.ObjectVpnSslWebPortalBookmarkGroup[] | undefined>;
    public readonly clientSrcRange!: pulumi.Output<string>;
    public readonly clipboard!: pulumi.Output<string>;
    public readonly customLang!: pulumi.Output<string | undefined>;
    public readonly customizeForticlientDownloadUrl!: pulumi.Output<string>;
    public readonly defaultProtocol!: pulumi.Output<string>;
    public readonly defaultWindowHeight!: pulumi.Output<number>;
    public readonly defaultWindowWidth!: pulumi.Output<number>;
    public readonly dhcp6RaLinkaddr!: pulumi.Output<string>;
    public readonly dhcpIpOverlap!: pulumi.Output<string | undefined>;
    public readonly dhcpRaGiaddr!: pulumi.Output<string>;
    public readonly displayBookmark!: pulumi.Output<string | undefined>;
    public readonly displayConnectionTools!: pulumi.Output<string | undefined>;
    public readonly displayHistory!: pulumi.Output<string | undefined>;
    public readonly displayStatus!: pulumi.Output<string | undefined>;
    public readonly dnsServer1!: pulumi.Output<string | undefined>;
    public readonly dnsServer2!: pulumi.Output<string | undefined>;
    public readonly dnsSuffix!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly exclusiveRouting!: pulumi.Output<string>;
    public readonly focusBookmark!: pulumi.Output<string>;
    public readonly forticlientDownload!: pulumi.Output<string>;
    public readonly forticlientDownloadMethod!: pulumi.Output<string>;
    public readonly heading!: pulumi.Output<string | undefined>;
    public readonly hideSsoCredential!: pulumi.Output<string | undefined>;
    public readonly hostCheck!: pulumi.Output<string | undefined>;
    public readonly hostCheckInterval!: pulumi.Output<number | undefined>;
    public readonly hostCheckPolicy!: pulumi.Output<string | undefined>;
    public readonly ipMode!: pulumi.Output<string | undefined>;
    public readonly ipPools!: pulumi.Output<string | undefined>;
    public readonly ipv6DnsServer1!: pulumi.Output<string | undefined>;
    public readonly ipv6DnsServer2!: pulumi.Output<string | undefined>;
    public readonly ipv6ExclusiveRouting!: pulumi.Output<string>;
    public readonly ipv6Pools!: pulumi.Output<string | undefined>;
    public readonly ipv6ServiceRestriction!: pulumi.Output<string>;
    public readonly ipv6SplitTunneling!: pulumi.Output<string | undefined>;
    public readonly ipv6SplitTunnelingRoutingAddresses!: pulumi.Output<string[]>;
    public readonly ipv6SplitTunnelingRoutingNegate!: pulumi.Output<string>;
    public readonly ipv6TunnelMode!: pulumi.Output<string>;
    public readonly ipv6WinsServer1!: pulumi.Output<string | undefined>;
    public readonly ipv6WinsServer2!: pulumi.Output<string | undefined>;
    public readonly keepAlive!: pulumi.Output<string | undefined>;
    public readonly landingPage!: pulumi.Output<outputs.ObjectVpnSslWebPortalLandingPage | undefined>;
    public readonly landingPageMode!: pulumi.Output<string>;
    public readonly limitUserLogins!: pulumi.Output<string>;
    public readonly macAddrAction!: pulumi.Output<string | undefined>;
    public readonly macAddrCheck!: pulumi.Output<string | undefined>;
    public readonly macAddrCheckRules!: pulumi.Output<outputs.ObjectVpnSslWebPortalMacAddrCheckRule[] | undefined>;
    public readonly macosForticlientDownloadUrl!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly osCheck!: pulumi.Output<string | undefined>;
    public readonly osCheckList!: pulumi.Output<outputs.ObjectVpnSslWebPortalOsCheckList | undefined>;
    public readonly preferIpv6Dns!: pulumi.Output<string>;
    public readonly redirUrl!: pulumi.Output<string | undefined>;
    public readonly rewriteIpUriUi!: pulumi.Output<string>;
    public readonly savePassword!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly serviceRestriction!: pulumi.Output<string>;
    public readonly skipCheckForBrowser!: pulumi.Output<string>;
    public readonly skipCheckForUnsupportedBrowser!: pulumi.Output<string | undefined>;
    public readonly skipCheckForUnsupportedOs!: pulumi.Output<string | undefined>;
    public readonly smbMaxVersion!: pulumi.Output<string | undefined>;
    public readonly smbMinVersion!: pulumi.Output<string | undefined>;
    public readonly smbNtlmv1Auth!: pulumi.Output<string | undefined>;
    public readonly smbv1!: pulumi.Output<string | undefined>;
    public readonly splitDns!: pulumi.Output<outputs.ObjectVpnSslWebPortalSplitDn[] | undefined>;
    public readonly splitTunneling!: pulumi.Output<string | undefined>;
    public readonly splitTunnelingRoutingAddresses!: pulumi.Output<string[]>;
    public readonly splitTunnelingRoutingNegate!: pulumi.Output<string>;
    public readonly theme!: pulumi.Output<string | undefined>;
    public readonly transformBackwardSlashes!: pulumi.Output<string | undefined>;
    public readonly tunnelMode!: pulumi.Output<string>;
    public readonly useSdwan!: pulumi.Output<string>;
    public readonly userBookmark!: pulumi.Output<string | undefined>;
    public readonly userGroupBookmark!: pulumi.Output<string | undefined>;
    public readonly webMode!: pulumi.Output<string>;
    public readonly windowsForticlientDownloadUrl!: pulumi.Output<string | undefined>;
    public readonly winsServer1!: pulumi.Output<string | undefined>;
    public readonly winsServer2!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectVpnSslWebPortal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectVpnSslWebPortalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVpnSslWebPortalArgs | ObjectVpnSslWebPortalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVpnSslWebPortalState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["allowUserAccesses"] = state ? state.allowUserAccesses : undefined;
            resourceInputs["autoConnect"] = state ? state.autoConnect : undefined;
            resourceInputs["bookmarkGroups"] = state ? state.bookmarkGroups : undefined;
            resourceInputs["clientSrcRange"] = state ? state.clientSrcRange : undefined;
            resourceInputs["clipboard"] = state ? state.clipboard : undefined;
            resourceInputs["customLang"] = state ? state.customLang : undefined;
            resourceInputs["customizeForticlientDownloadUrl"] = state ? state.customizeForticlientDownloadUrl : undefined;
            resourceInputs["defaultProtocol"] = state ? state.defaultProtocol : undefined;
            resourceInputs["defaultWindowHeight"] = state ? state.defaultWindowHeight : undefined;
            resourceInputs["defaultWindowWidth"] = state ? state.defaultWindowWidth : undefined;
            resourceInputs["dhcp6RaLinkaddr"] = state ? state.dhcp6RaLinkaddr : undefined;
            resourceInputs["dhcpIpOverlap"] = state ? state.dhcpIpOverlap : undefined;
            resourceInputs["dhcpRaGiaddr"] = state ? state.dhcpRaGiaddr : undefined;
            resourceInputs["displayBookmark"] = state ? state.displayBookmark : undefined;
            resourceInputs["displayConnectionTools"] = state ? state.displayConnectionTools : undefined;
            resourceInputs["displayHistory"] = state ? state.displayHistory : undefined;
            resourceInputs["displayStatus"] = state ? state.displayStatus : undefined;
            resourceInputs["dnsServer1"] = state ? state.dnsServer1 : undefined;
            resourceInputs["dnsServer2"] = state ? state.dnsServer2 : undefined;
            resourceInputs["dnsSuffix"] = state ? state.dnsSuffix : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["exclusiveRouting"] = state ? state.exclusiveRouting : undefined;
            resourceInputs["focusBookmark"] = state ? state.focusBookmark : undefined;
            resourceInputs["forticlientDownload"] = state ? state.forticlientDownload : undefined;
            resourceInputs["forticlientDownloadMethod"] = state ? state.forticlientDownloadMethod : undefined;
            resourceInputs["heading"] = state ? state.heading : undefined;
            resourceInputs["hideSsoCredential"] = state ? state.hideSsoCredential : undefined;
            resourceInputs["hostCheck"] = state ? state.hostCheck : undefined;
            resourceInputs["hostCheckInterval"] = state ? state.hostCheckInterval : undefined;
            resourceInputs["hostCheckPolicy"] = state ? state.hostCheckPolicy : undefined;
            resourceInputs["ipMode"] = state ? state.ipMode : undefined;
            resourceInputs["ipPools"] = state ? state.ipPools : undefined;
            resourceInputs["ipv6DnsServer1"] = state ? state.ipv6DnsServer1 : undefined;
            resourceInputs["ipv6DnsServer2"] = state ? state.ipv6DnsServer2 : undefined;
            resourceInputs["ipv6ExclusiveRouting"] = state ? state.ipv6ExclusiveRouting : undefined;
            resourceInputs["ipv6Pools"] = state ? state.ipv6Pools : undefined;
            resourceInputs["ipv6ServiceRestriction"] = state ? state.ipv6ServiceRestriction : undefined;
            resourceInputs["ipv6SplitTunneling"] = state ? state.ipv6SplitTunneling : undefined;
            resourceInputs["ipv6SplitTunnelingRoutingAddresses"] = state ? state.ipv6SplitTunnelingRoutingAddresses : undefined;
            resourceInputs["ipv6SplitTunnelingRoutingNegate"] = state ? state.ipv6SplitTunnelingRoutingNegate : undefined;
            resourceInputs["ipv6TunnelMode"] = state ? state.ipv6TunnelMode : undefined;
            resourceInputs["ipv6WinsServer1"] = state ? state.ipv6WinsServer1 : undefined;
            resourceInputs["ipv6WinsServer2"] = state ? state.ipv6WinsServer2 : undefined;
            resourceInputs["keepAlive"] = state ? state.keepAlive : undefined;
            resourceInputs["landingPage"] = state ? state.landingPage : undefined;
            resourceInputs["landingPageMode"] = state ? state.landingPageMode : undefined;
            resourceInputs["limitUserLogins"] = state ? state.limitUserLogins : undefined;
            resourceInputs["macAddrAction"] = state ? state.macAddrAction : undefined;
            resourceInputs["macAddrCheck"] = state ? state.macAddrCheck : undefined;
            resourceInputs["macAddrCheckRules"] = state ? state.macAddrCheckRules : undefined;
            resourceInputs["macosForticlientDownloadUrl"] = state ? state.macosForticlientDownloadUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["osCheck"] = state ? state.osCheck : undefined;
            resourceInputs["osCheckList"] = state ? state.osCheckList : undefined;
            resourceInputs["preferIpv6Dns"] = state ? state.preferIpv6Dns : undefined;
            resourceInputs["redirUrl"] = state ? state.redirUrl : undefined;
            resourceInputs["rewriteIpUriUi"] = state ? state.rewriteIpUriUi : undefined;
            resourceInputs["savePassword"] = state ? state.savePassword : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["serviceRestriction"] = state ? state.serviceRestriction : undefined;
            resourceInputs["skipCheckForBrowser"] = state ? state.skipCheckForBrowser : undefined;
            resourceInputs["skipCheckForUnsupportedBrowser"] = state ? state.skipCheckForUnsupportedBrowser : undefined;
            resourceInputs["skipCheckForUnsupportedOs"] = state ? state.skipCheckForUnsupportedOs : undefined;
            resourceInputs["smbMaxVersion"] = state ? state.smbMaxVersion : undefined;
            resourceInputs["smbMinVersion"] = state ? state.smbMinVersion : undefined;
            resourceInputs["smbNtlmv1Auth"] = state ? state.smbNtlmv1Auth : undefined;
            resourceInputs["smbv1"] = state ? state.smbv1 : undefined;
            resourceInputs["splitDns"] = state ? state.splitDns : undefined;
            resourceInputs["splitTunneling"] = state ? state.splitTunneling : undefined;
            resourceInputs["splitTunnelingRoutingAddresses"] = state ? state.splitTunnelingRoutingAddresses : undefined;
            resourceInputs["splitTunnelingRoutingNegate"] = state ? state.splitTunnelingRoutingNegate : undefined;
            resourceInputs["theme"] = state ? state.theme : undefined;
            resourceInputs["transformBackwardSlashes"] = state ? state.transformBackwardSlashes : undefined;
            resourceInputs["tunnelMode"] = state ? state.tunnelMode : undefined;
            resourceInputs["useSdwan"] = state ? state.useSdwan : undefined;
            resourceInputs["userBookmark"] = state ? state.userBookmark : undefined;
            resourceInputs["userGroupBookmark"] = state ? state.userGroupBookmark : undefined;
            resourceInputs["webMode"] = state ? state.webMode : undefined;
            resourceInputs["windowsForticlientDownloadUrl"] = state ? state.windowsForticlientDownloadUrl : undefined;
            resourceInputs["winsServer1"] = state ? state.winsServer1 : undefined;
            resourceInputs["winsServer2"] = state ? state.winsServer2 : undefined;
        } else {
            const args = argsOrState as ObjectVpnSslWebPortalArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["allowUserAccesses"] = args ? args.allowUserAccesses : undefined;
            resourceInputs["autoConnect"] = args ? args.autoConnect : undefined;
            resourceInputs["bookmarkGroups"] = args ? args.bookmarkGroups : undefined;
            resourceInputs["clientSrcRange"] = args ? args.clientSrcRange : undefined;
            resourceInputs["clipboard"] = args ? args.clipboard : undefined;
            resourceInputs["customLang"] = args ? args.customLang : undefined;
            resourceInputs["customizeForticlientDownloadUrl"] = args ? args.customizeForticlientDownloadUrl : undefined;
            resourceInputs["defaultProtocol"] = args ? args.defaultProtocol : undefined;
            resourceInputs["defaultWindowHeight"] = args ? args.defaultWindowHeight : undefined;
            resourceInputs["defaultWindowWidth"] = args ? args.defaultWindowWidth : undefined;
            resourceInputs["dhcp6RaLinkaddr"] = args ? args.dhcp6RaLinkaddr : undefined;
            resourceInputs["dhcpIpOverlap"] = args ? args.dhcpIpOverlap : undefined;
            resourceInputs["dhcpRaGiaddr"] = args ? args.dhcpRaGiaddr : undefined;
            resourceInputs["displayBookmark"] = args ? args.displayBookmark : undefined;
            resourceInputs["displayConnectionTools"] = args ? args.displayConnectionTools : undefined;
            resourceInputs["displayHistory"] = args ? args.displayHistory : undefined;
            resourceInputs["displayStatus"] = args ? args.displayStatus : undefined;
            resourceInputs["dnsServer1"] = args ? args.dnsServer1 : undefined;
            resourceInputs["dnsServer2"] = args ? args.dnsServer2 : undefined;
            resourceInputs["dnsSuffix"] = args ? args.dnsSuffix : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["exclusiveRouting"] = args ? args.exclusiveRouting : undefined;
            resourceInputs["focusBookmark"] = args ? args.focusBookmark : undefined;
            resourceInputs["forticlientDownload"] = args ? args.forticlientDownload : undefined;
            resourceInputs["forticlientDownloadMethod"] = args ? args.forticlientDownloadMethod : undefined;
            resourceInputs["heading"] = args ? args.heading : undefined;
            resourceInputs["hideSsoCredential"] = args ? args.hideSsoCredential : undefined;
            resourceInputs["hostCheck"] = args ? args.hostCheck : undefined;
            resourceInputs["hostCheckInterval"] = args ? args.hostCheckInterval : undefined;
            resourceInputs["hostCheckPolicy"] = args ? args.hostCheckPolicy : undefined;
            resourceInputs["ipMode"] = args ? args.ipMode : undefined;
            resourceInputs["ipPools"] = args ? args.ipPools : undefined;
            resourceInputs["ipv6DnsServer1"] = args ? args.ipv6DnsServer1 : undefined;
            resourceInputs["ipv6DnsServer2"] = args ? args.ipv6DnsServer2 : undefined;
            resourceInputs["ipv6ExclusiveRouting"] = args ? args.ipv6ExclusiveRouting : undefined;
            resourceInputs["ipv6Pools"] = args ? args.ipv6Pools : undefined;
            resourceInputs["ipv6ServiceRestriction"] = args ? args.ipv6ServiceRestriction : undefined;
            resourceInputs["ipv6SplitTunneling"] = args ? args.ipv6SplitTunneling : undefined;
            resourceInputs["ipv6SplitTunnelingRoutingAddresses"] = args ? args.ipv6SplitTunnelingRoutingAddresses : undefined;
            resourceInputs["ipv6SplitTunnelingRoutingNegate"] = args ? args.ipv6SplitTunnelingRoutingNegate : undefined;
            resourceInputs["ipv6TunnelMode"] = args ? args.ipv6TunnelMode : undefined;
            resourceInputs["ipv6WinsServer1"] = args ? args.ipv6WinsServer1 : undefined;
            resourceInputs["ipv6WinsServer2"] = args ? args.ipv6WinsServer2 : undefined;
            resourceInputs["keepAlive"] = args ? args.keepAlive : undefined;
            resourceInputs["landingPage"] = args ? args.landingPage : undefined;
            resourceInputs["landingPageMode"] = args ? args.landingPageMode : undefined;
            resourceInputs["limitUserLogins"] = args ? args.limitUserLogins : undefined;
            resourceInputs["macAddrAction"] = args ? args.macAddrAction : undefined;
            resourceInputs["macAddrCheck"] = args ? args.macAddrCheck : undefined;
            resourceInputs["macAddrCheckRules"] = args ? args.macAddrCheckRules : undefined;
            resourceInputs["macosForticlientDownloadUrl"] = args ? args.macosForticlientDownloadUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osCheck"] = args ? args.osCheck : undefined;
            resourceInputs["osCheckList"] = args ? args.osCheckList : undefined;
            resourceInputs["preferIpv6Dns"] = args ? args.preferIpv6Dns : undefined;
            resourceInputs["redirUrl"] = args ? args.redirUrl : undefined;
            resourceInputs["rewriteIpUriUi"] = args ? args.rewriteIpUriUi : undefined;
            resourceInputs["savePassword"] = args ? args.savePassword : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["serviceRestriction"] = args ? args.serviceRestriction : undefined;
            resourceInputs["skipCheckForBrowser"] = args ? args.skipCheckForBrowser : undefined;
            resourceInputs["skipCheckForUnsupportedBrowser"] = args ? args.skipCheckForUnsupportedBrowser : undefined;
            resourceInputs["skipCheckForUnsupportedOs"] = args ? args.skipCheckForUnsupportedOs : undefined;
            resourceInputs["smbMaxVersion"] = args ? args.smbMaxVersion : undefined;
            resourceInputs["smbMinVersion"] = args ? args.smbMinVersion : undefined;
            resourceInputs["smbNtlmv1Auth"] = args ? args.smbNtlmv1Auth : undefined;
            resourceInputs["smbv1"] = args ? args.smbv1 : undefined;
            resourceInputs["splitDns"] = args ? args.splitDns : undefined;
            resourceInputs["splitTunneling"] = args ? args.splitTunneling : undefined;
            resourceInputs["splitTunnelingRoutingAddresses"] = args ? args.splitTunnelingRoutingAddresses : undefined;
            resourceInputs["splitTunnelingRoutingNegate"] = args ? args.splitTunnelingRoutingNegate : undefined;
            resourceInputs["theme"] = args ? args.theme : undefined;
            resourceInputs["transformBackwardSlashes"] = args ? args.transformBackwardSlashes : undefined;
            resourceInputs["tunnelMode"] = args ? args.tunnelMode : undefined;
            resourceInputs["useSdwan"] = args ? args.useSdwan : undefined;
            resourceInputs["userBookmark"] = args ? args.userBookmark : undefined;
            resourceInputs["userGroupBookmark"] = args ? args.userGroupBookmark : undefined;
            resourceInputs["webMode"] = args ? args.webMode : undefined;
            resourceInputs["windowsForticlientDownloadUrl"] = args ? args.windowsForticlientDownloadUrl : undefined;
            resourceInputs["winsServer1"] = args ? args.winsServer1 : undefined;
            resourceInputs["winsServer2"] = args ? args.winsServer2 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectVpnSslWebPortal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVpnSslWebPortal resources.
 */
export interface ObjectVpnSslWebPortalState {
    adom?: pulumi.Input<string>;
    allowUserAccesses?: pulumi.Input<pulumi.Input<string>[]>;
    autoConnect?: pulumi.Input<string>;
    bookmarkGroups?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalBookmarkGroup>[]>;
    clientSrcRange?: pulumi.Input<string>;
    clipboard?: pulumi.Input<string>;
    customLang?: pulumi.Input<string>;
    customizeForticlientDownloadUrl?: pulumi.Input<string>;
    defaultProtocol?: pulumi.Input<string>;
    defaultWindowHeight?: pulumi.Input<number>;
    defaultWindowWidth?: pulumi.Input<number>;
    dhcp6RaLinkaddr?: pulumi.Input<string>;
    dhcpIpOverlap?: pulumi.Input<string>;
    dhcpRaGiaddr?: pulumi.Input<string>;
    displayBookmark?: pulumi.Input<string>;
    displayConnectionTools?: pulumi.Input<string>;
    displayHistory?: pulumi.Input<string>;
    displayStatus?: pulumi.Input<string>;
    dnsServer1?: pulumi.Input<string>;
    dnsServer2?: pulumi.Input<string>;
    dnsSuffix?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exclusiveRouting?: pulumi.Input<string>;
    focusBookmark?: pulumi.Input<string>;
    forticlientDownload?: pulumi.Input<string>;
    forticlientDownloadMethod?: pulumi.Input<string>;
    heading?: pulumi.Input<string>;
    hideSsoCredential?: pulumi.Input<string>;
    hostCheck?: pulumi.Input<string>;
    hostCheckInterval?: pulumi.Input<number>;
    hostCheckPolicy?: pulumi.Input<string>;
    ipMode?: pulumi.Input<string>;
    ipPools?: pulumi.Input<string>;
    ipv6DnsServer1?: pulumi.Input<string>;
    ipv6DnsServer2?: pulumi.Input<string>;
    ipv6ExclusiveRouting?: pulumi.Input<string>;
    ipv6Pools?: pulumi.Input<string>;
    ipv6ServiceRestriction?: pulumi.Input<string>;
    ipv6SplitTunneling?: pulumi.Input<string>;
    ipv6SplitTunnelingRoutingAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    ipv6SplitTunnelingRoutingNegate?: pulumi.Input<string>;
    ipv6TunnelMode?: pulumi.Input<string>;
    ipv6WinsServer1?: pulumi.Input<string>;
    ipv6WinsServer2?: pulumi.Input<string>;
    keepAlive?: pulumi.Input<string>;
    landingPage?: pulumi.Input<inputs.ObjectVpnSslWebPortalLandingPage>;
    landingPageMode?: pulumi.Input<string>;
    limitUserLogins?: pulumi.Input<string>;
    macAddrAction?: pulumi.Input<string>;
    macAddrCheck?: pulumi.Input<string>;
    macAddrCheckRules?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalMacAddrCheckRule>[]>;
    macosForticlientDownloadUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    osCheck?: pulumi.Input<string>;
    osCheckList?: pulumi.Input<inputs.ObjectVpnSslWebPortalOsCheckList>;
    preferIpv6Dns?: pulumi.Input<string>;
    redirUrl?: pulumi.Input<string>;
    rewriteIpUriUi?: pulumi.Input<string>;
    savePassword?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serviceRestriction?: pulumi.Input<string>;
    skipCheckForBrowser?: pulumi.Input<string>;
    skipCheckForUnsupportedBrowser?: pulumi.Input<string>;
    skipCheckForUnsupportedOs?: pulumi.Input<string>;
    smbMaxVersion?: pulumi.Input<string>;
    smbMinVersion?: pulumi.Input<string>;
    smbNtlmv1Auth?: pulumi.Input<string>;
    smbv1?: pulumi.Input<string>;
    splitDns?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalSplitDn>[]>;
    splitTunneling?: pulumi.Input<string>;
    splitTunnelingRoutingAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    splitTunnelingRoutingNegate?: pulumi.Input<string>;
    theme?: pulumi.Input<string>;
    transformBackwardSlashes?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
    useSdwan?: pulumi.Input<string>;
    userBookmark?: pulumi.Input<string>;
    userGroupBookmark?: pulumi.Input<string>;
    webMode?: pulumi.Input<string>;
    windowsForticlientDownloadUrl?: pulumi.Input<string>;
    winsServer1?: pulumi.Input<string>;
    winsServer2?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVpnSslWebPortal resource.
 */
export interface ObjectVpnSslWebPortalArgs {
    adom?: pulumi.Input<string>;
    allowUserAccesses?: pulumi.Input<pulumi.Input<string>[]>;
    autoConnect?: pulumi.Input<string>;
    bookmarkGroups?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalBookmarkGroup>[]>;
    clientSrcRange?: pulumi.Input<string>;
    clipboard?: pulumi.Input<string>;
    customLang?: pulumi.Input<string>;
    customizeForticlientDownloadUrl?: pulumi.Input<string>;
    defaultProtocol?: pulumi.Input<string>;
    defaultWindowHeight?: pulumi.Input<number>;
    defaultWindowWidth?: pulumi.Input<number>;
    dhcp6RaLinkaddr?: pulumi.Input<string>;
    dhcpIpOverlap?: pulumi.Input<string>;
    dhcpRaGiaddr?: pulumi.Input<string>;
    displayBookmark?: pulumi.Input<string>;
    displayConnectionTools?: pulumi.Input<string>;
    displayHistory?: pulumi.Input<string>;
    displayStatus?: pulumi.Input<string>;
    dnsServer1?: pulumi.Input<string>;
    dnsServer2?: pulumi.Input<string>;
    dnsSuffix?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exclusiveRouting?: pulumi.Input<string>;
    focusBookmark?: pulumi.Input<string>;
    forticlientDownload?: pulumi.Input<string>;
    forticlientDownloadMethod?: pulumi.Input<string>;
    heading?: pulumi.Input<string>;
    hideSsoCredential?: pulumi.Input<string>;
    hostCheck?: pulumi.Input<string>;
    hostCheckInterval?: pulumi.Input<number>;
    hostCheckPolicy?: pulumi.Input<string>;
    ipMode?: pulumi.Input<string>;
    ipPools?: pulumi.Input<string>;
    ipv6DnsServer1?: pulumi.Input<string>;
    ipv6DnsServer2?: pulumi.Input<string>;
    ipv6ExclusiveRouting?: pulumi.Input<string>;
    ipv6Pools?: pulumi.Input<string>;
    ipv6ServiceRestriction?: pulumi.Input<string>;
    ipv6SplitTunneling?: pulumi.Input<string>;
    ipv6SplitTunnelingRoutingAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    ipv6SplitTunnelingRoutingNegate?: pulumi.Input<string>;
    ipv6TunnelMode?: pulumi.Input<string>;
    ipv6WinsServer1?: pulumi.Input<string>;
    ipv6WinsServer2?: pulumi.Input<string>;
    keepAlive?: pulumi.Input<string>;
    landingPage?: pulumi.Input<inputs.ObjectVpnSslWebPortalLandingPage>;
    landingPageMode?: pulumi.Input<string>;
    limitUserLogins?: pulumi.Input<string>;
    macAddrAction?: pulumi.Input<string>;
    macAddrCheck?: pulumi.Input<string>;
    macAddrCheckRules?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalMacAddrCheckRule>[]>;
    macosForticlientDownloadUrl?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    osCheck?: pulumi.Input<string>;
    osCheckList?: pulumi.Input<inputs.ObjectVpnSslWebPortalOsCheckList>;
    preferIpv6Dns?: pulumi.Input<string>;
    redirUrl?: pulumi.Input<string>;
    rewriteIpUriUi?: pulumi.Input<string>;
    savePassword?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    serviceRestriction?: pulumi.Input<string>;
    skipCheckForBrowser?: pulumi.Input<string>;
    skipCheckForUnsupportedBrowser?: pulumi.Input<string>;
    skipCheckForUnsupportedOs?: pulumi.Input<string>;
    smbMaxVersion?: pulumi.Input<string>;
    smbMinVersion?: pulumi.Input<string>;
    smbNtlmv1Auth?: pulumi.Input<string>;
    smbv1?: pulumi.Input<string>;
    splitDns?: pulumi.Input<pulumi.Input<inputs.ObjectVpnSslWebPortalSplitDn>[]>;
    splitTunneling?: pulumi.Input<string>;
    splitTunnelingRoutingAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    splitTunnelingRoutingNegate?: pulumi.Input<string>;
    theme?: pulumi.Input<string>;
    transformBackwardSlashes?: pulumi.Input<string>;
    tunnelMode?: pulumi.Input<string>;
    useSdwan?: pulumi.Input<string>;
    userBookmark?: pulumi.Input<string>;
    userGroupBookmark?: pulumi.Input<string>;
    webMode?: pulumi.Input<string>;
    windowsForticlientDownloadUrl?: pulumi.Input<string>;
    winsServer1?: pulumi.Input<string>;
    winsServer2?: pulumi.Input<string>;
}
