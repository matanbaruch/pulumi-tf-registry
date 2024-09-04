// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EdgeSpoke extends pulumi.CustomResource {
    /**
     * Get an existing EdgeSpoke resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeSpokeState, opts?: pulumi.CustomResourceOptions): EdgeSpoke {
        return new EdgeSpoke(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/edgeSpoke:EdgeSpoke';

    /**
     * Returns true if the given object is an instance of EdgeSpoke.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EdgeSpoke {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EdgeSpoke.__pulumiType;
    }

    /**
     * Approved learned CIDRs for BGP Spoke Gateway.
     */
    public readonly approvedLearnedCidrs!: pulumi.Output<string[] | undefined>;
    /**
     * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
     */
    public readonly bgpHoldTime!: pulumi.Output<number | undefined>;
    /**
     * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
     */
    public readonly bgpPollingTime!: pulumi.Output<number | undefined>;
    /**
     * DNS server IP.
     */
    public readonly dnsServerIp!: pulumi.Output<string | undefined>;
    /**
     * Enables Edge Active-Standby Mode.
     */
    public readonly enableEdgeActiveStandby!: pulumi.Output<boolean | undefined>;
    /**
     * Enables Preemptive Mode for Edge Active-Standby, available only with Active-Standby enabled.
     */
    public readonly enableEdgeActiveStandbyPreemptive!: pulumi.Output<boolean | undefined>;
    /**
     * Enable Edge transitive routing.
     */
    public readonly enableEdgeTransitiveRouting!: pulumi.Output<boolean | undefined>;
    /**
     * Enable jumbo frame.
     */
    public readonly enableJumboFrame!: pulumi.Output<boolean | undefined>;
    /**
     * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
     */
    public readonly enableLearnedCidrsApproval!: pulumi.Output<boolean | undefined>;
    /**
     * Enable management over private network.
     */
    public readonly enableManagementOverPrivateNetwork!: pulumi.Output<boolean | undefined>;
    /**
     * Enable preserve as path when advertising manual summary CIDRs on BGP spoke gateway.
     */
    public readonly enablePreserveAsPath!: pulumi.Output<boolean | undefined>;
    /**
     * Edge as a Spoke name.
     */
    public readonly gwName!: pulumi.Output<string>;
    /**
     * WAN/LAN/MANAGEMENT interfaces.
     */
    public readonly interfaces!: pulumi.Output<outputs.EdgeSpokeInterface[]>;
    /**
     * The latitude of the Edge as a Spoke.
     */
    public readonly latitude!: pulumi.Output<string>;
    /**
     * Local AS number.
     */
    public readonly localAsNumber!: pulumi.Output<string>;
    /**
     * The longitude of the Edge as a Spoke.
     */
    public readonly longitude!: pulumi.Output<string>;
    /**
     * Set of management egress gateway IP/prefix.
     */
    public readonly managementEgressIpPrefixLists!: pulumi.Output<string[] | undefined>;
    /**
     * List of AS numbers to prepend gateway BGP AS_Path field.
     */
    public readonly prependAsPaths!: pulumi.Output<string[] | undefined>;
    /**
     * Ethernet interface RX queue size.
     */
    public readonly rxQueueSize!: pulumi.Output<string | undefined>;
    /**
     * Secondary DNS server IP.
     */
    public readonly secondaryDnsServerIp!: pulumi.Output<string | undefined>;
    /**
     * Site ID.
     */
    public readonly siteId!: pulumi.Output<string>;
    /**
     * Intended CIDR list to be advertised to external BGP router.
     */
    public readonly spokeBgpManualAdvertiseCidrs!: pulumi.Output<string[] | undefined>;
    /**
     * State of Edge as a Spoke.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The location where the ZTP file will be stored.
     */
    public readonly ztpFileDownloadPath!: pulumi.Output<string>;
    /**
     * ZTP file type.
     */
    public readonly ztpFileType!: pulumi.Output<string>;

    /**
     * Create a EdgeSpoke resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeSpokeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EdgeSpokeArgs | EdgeSpokeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EdgeSpokeState | undefined;
            resourceInputs["approvedLearnedCidrs"] = state ? state.approvedLearnedCidrs : undefined;
            resourceInputs["bgpHoldTime"] = state ? state.bgpHoldTime : undefined;
            resourceInputs["bgpPollingTime"] = state ? state.bgpPollingTime : undefined;
            resourceInputs["dnsServerIp"] = state ? state.dnsServerIp : undefined;
            resourceInputs["enableEdgeActiveStandby"] = state ? state.enableEdgeActiveStandby : undefined;
            resourceInputs["enableEdgeActiveStandbyPreemptive"] = state ? state.enableEdgeActiveStandbyPreemptive : undefined;
            resourceInputs["enableEdgeTransitiveRouting"] = state ? state.enableEdgeTransitiveRouting : undefined;
            resourceInputs["enableJumboFrame"] = state ? state.enableJumboFrame : undefined;
            resourceInputs["enableLearnedCidrsApproval"] = state ? state.enableLearnedCidrsApproval : undefined;
            resourceInputs["enableManagementOverPrivateNetwork"] = state ? state.enableManagementOverPrivateNetwork : undefined;
            resourceInputs["enablePreserveAsPath"] = state ? state.enablePreserveAsPath : undefined;
            resourceInputs["gwName"] = state ? state.gwName : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["latitude"] = state ? state.latitude : undefined;
            resourceInputs["localAsNumber"] = state ? state.localAsNumber : undefined;
            resourceInputs["longitude"] = state ? state.longitude : undefined;
            resourceInputs["managementEgressIpPrefixLists"] = state ? state.managementEgressIpPrefixLists : undefined;
            resourceInputs["prependAsPaths"] = state ? state.prependAsPaths : undefined;
            resourceInputs["rxQueueSize"] = state ? state.rxQueueSize : undefined;
            resourceInputs["secondaryDnsServerIp"] = state ? state.secondaryDnsServerIp : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["spokeBgpManualAdvertiseCidrs"] = state ? state.spokeBgpManualAdvertiseCidrs : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["ztpFileDownloadPath"] = state ? state.ztpFileDownloadPath : undefined;
            resourceInputs["ztpFileType"] = state ? state.ztpFileType : undefined;
        } else {
            const args = argsOrState as EdgeSpokeArgs | undefined;
            if ((!args || args.gwName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gwName'");
            }
            if ((!args || args.interfaces === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaces'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            if ((!args || args.ztpFileDownloadPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ztpFileDownloadPath'");
            }
            if ((!args || args.ztpFileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ztpFileType'");
            }
            resourceInputs["approvedLearnedCidrs"] = args ? args.approvedLearnedCidrs : undefined;
            resourceInputs["bgpHoldTime"] = args ? args.bgpHoldTime : undefined;
            resourceInputs["bgpPollingTime"] = args ? args.bgpPollingTime : undefined;
            resourceInputs["dnsServerIp"] = args ? args.dnsServerIp : undefined;
            resourceInputs["enableEdgeActiveStandby"] = args ? args.enableEdgeActiveStandby : undefined;
            resourceInputs["enableEdgeActiveStandbyPreemptive"] = args ? args.enableEdgeActiveStandbyPreemptive : undefined;
            resourceInputs["enableEdgeTransitiveRouting"] = args ? args.enableEdgeTransitiveRouting : undefined;
            resourceInputs["enableJumboFrame"] = args ? args.enableJumboFrame : undefined;
            resourceInputs["enableLearnedCidrsApproval"] = args ? args.enableLearnedCidrsApproval : undefined;
            resourceInputs["enableManagementOverPrivateNetwork"] = args ? args.enableManagementOverPrivateNetwork : undefined;
            resourceInputs["enablePreserveAsPath"] = args ? args.enablePreserveAsPath : undefined;
            resourceInputs["gwName"] = args ? args.gwName : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["latitude"] = args ? args.latitude : undefined;
            resourceInputs["localAsNumber"] = args ? args.localAsNumber : undefined;
            resourceInputs["longitude"] = args ? args.longitude : undefined;
            resourceInputs["managementEgressIpPrefixLists"] = args ? args.managementEgressIpPrefixLists : undefined;
            resourceInputs["prependAsPaths"] = args ? args.prependAsPaths : undefined;
            resourceInputs["rxQueueSize"] = args ? args.rxQueueSize : undefined;
            resourceInputs["secondaryDnsServerIp"] = args ? args.secondaryDnsServerIp : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["spokeBgpManualAdvertiseCidrs"] = args ? args.spokeBgpManualAdvertiseCidrs : undefined;
            resourceInputs["ztpFileDownloadPath"] = args ? args.ztpFileDownloadPath : undefined;
            resourceInputs["ztpFileType"] = args ? args.ztpFileType : undefined;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EdgeSpoke.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EdgeSpoke resources.
 */
export interface EdgeSpokeState {
    /**
     * Approved learned CIDRs for BGP Spoke Gateway.
     */
    approvedLearnedCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
     */
    bgpHoldTime?: pulumi.Input<number>;
    /**
     * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
     */
    bgpPollingTime?: pulumi.Input<number>;
    /**
     * DNS server IP.
     */
    dnsServerIp?: pulumi.Input<string>;
    /**
     * Enables Edge Active-Standby Mode.
     */
    enableEdgeActiveStandby?: pulumi.Input<boolean>;
    /**
     * Enables Preemptive Mode for Edge Active-Standby, available only with Active-Standby enabled.
     */
    enableEdgeActiveStandbyPreemptive?: pulumi.Input<boolean>;
    /**
     * Enable Edge transitive routing.
     */
    enableEdgeTransitiveRouting?: pulumi.Input<boolean>;
    /**
     * Enable jumbo frame.
     */
    enableJumboFrame?: pulumi.Input<boolean>;
    /**
     * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
     */
    enableLearnedCidrsApproval?: pulumi.Input<boolean>;
    /**
     * Enable management over private network.
     */
    enableManagementOverPrivateNetwork?: pulumi.Input<boolean>;
    /**
     * Enable preserve as path when advertising manual summary CIDRs on BGP spoke gateway.
     */
    enablePreserveAsPath?: pulumi.Input<boolean>;
    /**
     * Edge as a Spoke name.
     */
    gwName?: pulumi.Input<string>;
    /**
     * WAN/LAN/MANAGEMENT interfaces.
     */
    interfaces?: pulumi.Input<pulumi.Input<inputs.EdgeSpokeInterface>[]>;
    /**
     * The latitude of the Edge as a Spoke.
     */
    latitude?: pulumi.Input<string>;
    /**
     * Local AS number.
     */
    localAsNumber?: pulumi.Input<string>;
    /**
     * The longitude of the Edge as a Spoke.
     */
    longitude?: pulumi.Input<string>;
    /**
     * Set of management egress gateway IP/prefix.
     */
    managementEgressIpPrefixLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of AS numbers to prepend gateway BGP AS_Path field.
     */
    prependAsPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Ethernet interface RX queue size.
     */
    rxQueueSize?: pulumi.Input<string>;
    /**
     * Secondary DNS server IP.
     */
    secondaryDnsServerIp?: pulumi.Input<string>;
    /**
     * Site ID.
     */
    siteId?: pulumi.Input<string>;
    /**
     * Intended CIDR list to be advertised to external BGP router.
     */
    spokeBgpManualAdvertiseCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * State of Edge as a Spoke.
     */
    state?: pulumi.Input<string>;
    /**
     * The location where the ZTP file will be stored.
     */
    ztpFileDownloadPath?: pulumi.Input<string>;
    /**
     * ZTP file type.
     */
    ztpFileType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EdgeSpoke resource.
 */
export interface EdgeSpokeArgs {
    /**
     * Approved learned CIDRs for BGP Spoke Gateway.
     */
    approvedLearnedCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
     */
    bgpHoldTime?: pulumi.Input<number>;
    /**
     * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
     */
    bgpPollingTime?: pulumi.Input<number>;
    /**
     * DNS server IP.
     */
    dnsServerIp?: pulumi.Input<string>;
    /**
     * Enables Edge Active-Standby Mode.
     */
    enableEdgeActiveStandby?: pulumi.Input<boolean>;
    /**
     * Enables Preemptive Mode for Edge Active-Standby, available only with Active-Standby enabled.
     */
    enableEdgeActiveStandbyPreemptive?: pulumi.Input<boolean>;
    /**
     * Enable Edge transitive routing.
     */
    enableEdgeTransitiveRouting?: pulumi.Input<boolean>;
    /**
     * Enable jumbo frame.
     */
    enableJumboFrame?: pulumi.Input<boolean>;
    /**
     * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
     */
    enableLearnedCidrsApproval?: pulumi.Input<boolean>;
    /**
     * Enable management over private network.
     */
    enableManagementOverPrivateNetwork?: pulumi.Input<boolean>;
    /**
     * Enable preserve as path when advertising manual summary CIDRs on BGP spoke gateway.
     */
    enablePreserveAsPath?: pulumi.Input<boolean>;
    /**
     * Edge as a Spoke name.
     */
    gwName: pulumi.Input<string>;
    /**
     * WAN/LAN/MANAGEMENT interfaces.
     */
    interfaces: pulumi.Input<pulumi.Input<inputs.EdgeSpokeInterface>[]>;
    /**
     * The latitude of the Edge as a Spoke.
     */
    latitude?: pulumi.Input<string>;
    /**
     * Local AS number.
     */
    localAsNumber?: pulumi.Input<string>;
    /**
     * The longitude of the Edge as a Spoke.
     */
    longitude?: pulumi.Input<string>;
    /**
     * Set of management egress gateway IP/prefix.
     */
    managementEgressIpPrefixLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of AS numbers to prepend gateway BGP AS_Path field.
     */
    prependAsPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Ethernet interface RX queue size.
     */
    rxQueueSize?: pulumi.Input<string>;
    /**
     * Secondary DNS server IP.
     */
    secondaryDnsServerIp?: pulumi.Input<string>;
    /**
     * Site ID.
     */
    siteId: pulumi.Input<string>;
    /**
     * Intended CIDR list to be advertised to external BGP router.
     */
    spokeBgpManualAdvertiseCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location where the ZTP file will be stored.
     */
    ztpFileDownloadPath: pulumi.Input<string>;
    /**
     * ZTP file type.
     */
    ztpFileType: pulumi.Input<string>;
}
