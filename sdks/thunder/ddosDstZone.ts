// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstZone extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstZoneState, opts?: pulumi.CustomResourceOptions): DdosDstZone {
        return new DdosDstZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstZone:DdosDstZone';

    /**
     * Returns true if the given object is an instance of DdosDstZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstZone.__pulumiType;
    }

    /**
     * Configure action-list to take
     */
    public readonly actionList!: pulumi.Output<string | undefined>;
    /**
     * BGP advertised
     */
    public readonly advertisedEnable!: pulumi.Output<number | undefined>;
    public readonly captureConfigLists!: pulumi.Output<outputs.DdosDstZoneCaptureConfigList[] | undefined>;
    public readonly collectors!: pulumi.Output<outputs.DdosDstZoneCollector[] | undefined>;
    /**
     * Continuous learning of detection
     */
    public readonly continuousLearning!: pulumi.Output<number | undefined>;
    /**
     * Description for this Destination Zone
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Destination NAT IP address
     */
    public readonly destNatIp!: pulumi.Output<string | undefined>;
    /**
     * Destination NAT IPv6 address
     */
    public readonly destNatIpv6!: pulumi.Output<string | undefined>;
    public readonly detection!: pulumi.Output<outputs.DdosDstZoneDetection | undefined>;
    /**
     * Drop fragmented packets
     */
    public readonly dropFragPkt!: pulumi.Output<number | undefined>;
    public readonly enableTopKs!: pulumi.Output<outputs.DdosDstZoneEnableTopK[] | undefined>;
    /**
     * Force configure operational mode
     */
    public readonly forceOperationalMode!: pulumi.Output<number | undefined>;
    /**
     * Global limit ID for the whole zone
     */
    public readonly glid!: pulumi.Output<string | undefined>;
    public readonly hwBlacklistBlocking!: pulumi.Output<outputs.DdosDstZoneHwBlacklistBlocking | undefined>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    public readonly inboundForwardDscp!: pulumi.Output<number | undefined>;
    public readonly ipProto!: pulumi.Output<outputs.DdosDstZoneIpProto | undefined>;
    public readonly ips!: pulumi.Output<outputs.DdosDstZoneIp[] | undefined>;
    public readonly ipv6s!: pulumi.Output<outputs.DdosDstZoneIpv6[] | undefined>;
    /**
     * Is It Created from Onbox GUI Wizard
     */
    public readonly isFromWizard!: pulumi.Output<number | undefined>;
    /**
     * Enable logging
     */
    public readonly logEnable!: pulumi.Output<number | undefined>;
    /**
     * Enable High frequency logging for non-event logs per zone
     */
    public readonly logHighFrequency!: pulumi.Output<number | undefined>;
    /**
     * Enable log periodic
     */
    public readonly logPeriodic!: pulumi.Output<number | undefined>;
    /**
     * Non-restrictive mode ignores Zero Thresholds Indicators
     */
    public readonly nonRestrictive!: pulumi.Output<number | undefined>;
    /**
     * 'idle': Idle mode; 'monitor': Monitor mode; 'learning': Learning mode;
     */
    public readonly operationalMode!: pulumi.Output<string | undefined>;
    /**
     * To set dscp value for outbound
     */
    public readonly outboundForwardDscp!: pulumi.Output<number | undefined>;
    public readonly outboundPolicy!: pulumi.Output<outputs.DdosDstZoneOutboundPolicy | undefined>;
    public readonly packetAnomalyDetection!: pulumi.Output<outputs.DdosDstZonePacketAnomalyDetection | undefined>;
    /**
     * to enable pattern recognition hardware filter
     */
    public readonly patternRecognitionHwFilterEnable!: pulumi.Output<number | undefined>;
    /**
     * 'high': High sensitive pattern recognition; 'medium': Medium sensitive pattern recognition; 'low': Low sensitive pattern
     * recognition;
     */
    public readonly patternRecognitionSensitivity!: pulumi.Output<string | undefined>;
    /**
     * Global limit ID per address
     */
    public readonly perAddrGlid!: pulumi.Output<string | undefined>;
    public readonly port!: pulumi.Output<outputs.DdosDstZonePort | undefined>;
    public readonly portRangeLists!: pulumi.Output<outputs.DdosDstZonePortRangeList[] | undefined>;
    /**
     * Rate limit per second per zone(Default : 1 per second)
     */
    public readonly rateLimit!: pulumi.Output<number | undefined>;
    /**
     * Disable Reporting
     */
    public readonly reportingDisabled!: pulumi.Output<number | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.DdosDstZoneSamplingEnable[] | undefined>;
    /**
     * Set T2 counter value of current context to specified value
     */
    public readonly setCounterBaseVal!: pulumi.Output<number | undefined>;
    /**
     * Enable sFlow counter polling packets, tcp-basic, tcp-stateful and http. WARNING: Zone level Sflow polling might induce
     * heavy CP
     */
    public readonly sflowCommon!: pulumi.Output<number | undefined>;
    /**
     * Enable sFlow HTTP counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the total
     * number
     */
    public readonly sflowHttp!: pulumi.Output<number | undefined>;
    /**
     * Enable sFlow Layer 4 counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the
     * number of
     */
    public readonly sflowLayer4!: pulumi.Output<number | undefined>;
    /**
     * Enable sFlow packet-level counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on
     * the total
     */
    public readonly sflowPackets!: pulumi.Output<number | undefined>;
    public readonly sflowTcp!: pulumi.Output<outputs.DdosDstZoneSflowTcp | undefined>;
    /**
     * Configure source NAT
     */
    public readonly sourceNatPool!: pulumi.Output<string | undefined>;
    public readonly srcPort!: pulumi.Output<outputs.DdosDstZoneSrcPort | undefined>;
    public readonly srcPortRangeLists!: pulumi.Output<outputs.DdosDstZoneSrcPortRangeList[] | undefined>;
    /**
     * Enable from-l3-peer flag for the zone, thus all the ip entries in the zone will be dynamically created/deleted based on
     * the BGP
     */
    public readonly telemetryEnable!: pulumi.Output<number | undefined>;
    public readonly topkDestinations!: pulumi.Output<outputs.DdosDstZoneTopkDestinations | undefined>;
    /**
     * 'default': Distribute traffic to one slot using default distribution mechanism; 'source-ip-based': Distribute traffic
     * between slots, based on source ip;
     */
    public readonly trafficDistributionMode!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly webGui!: pulumi.Output<outputs.DdosDstZoneWebGui | undefined>;
    public readonly zoneName!: pulumi.Output<string>;
    /**
     * Apply threshold profile
     */
    public readonly zoneProfile!: pulumi.Output<string | undefined>;
    public readonly zoneTemplate!: pulumi.Output<outputs.DdosDstZoneZoneTemplate | undefined>;

    /**
     * Create a DdosDstZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstZoneArgs | DdosDstZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstZoneState | undefined;
            resourceInputs["actionList"] = state ? state.actionList : undefined;
            resourceInputs["advertisedEnable"] = state ? state.advertisedEnable : undefined;
            resourceInputs["captureConfigLists"] = state ? state.captureConfigLists : undefined;
            resourceInputs["collectors"] = state ? state.collectors : undefined;
            resourceInputs["continuousLearning"] = state ? state.continuousLearning : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destNatIp"] = state ? state.destNatIp : undefined;
            resourceInputs["destNatIpv6"] = state ? state.destNatIpv6 : undefined;
            resourceInputs["detection"] = state ? state.detection : undefined;
            resourceInputs["dropFragPkt"] = state ? state.dropFragPkt : undefined;
            resourceInputs["enableTopKs"] = state ? state.enableTopKs : undefined;
            resourceInputs["forceOperationalMode"] = state ? state.forceOperationalMode : undefined;
            resourceInputs["glid"] = state ? state.glid : undefined;
            resourceInputs["hwBlacklistBlocking"] = state ? state.hwBlacklistBlocking : undefined;
            resourceInputs["inboundForwardDscp"] = state ? state.inboundForwardDscp : undefined;
            resourceInputs["ipProto"] = state ? state.ipProto : undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["ipv6s"] = state ? state.ipv6s : undefined;
            resourceInputs["isFromWizard"] = state ? state.isFromWizard : undefined;
            resourceInputs["logEnable"] = state ? state.logEnable : undefined;
            resourceInputs["logHighFrequency"] = state ? state.logHighFrequency : undefined;
            resourceInputs["logPeriodic"] = state ? state.logPeriodic : undefined;
            resourceInputs["nonRestrictive"] = state ? state.nonRestrictive : undefined;
            resourceInputs["operationalMode"] = state ? state.operationalMode : undefined;
            resourceInputs["outboundForwardDscp"] = state ? state.outboundForwardDscp : undefined;
            resourceInputs["outboundPolicy"] = state ? state.outboundPolicy : undefined;
            resourceInputs["packetAnomalyDetection"] = state ? state.packetAnomalyDetection : undefined;
            resourceInputs["patternRecognitionHwFilterEnable"] = state ? state.patternRecognitionHwFilterEnable : undefined;
            resourceInputs["patternRecognitionSensitivity"] = state ? state.patternRecognitionSensitivity : undefined;
            resourceInputs["perAddrGlid"] = state ? state.perAddrGlid : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["portRangeLists"] = state ? state.portRangeLists : undefined;
            resourceInputs["rateLimit"] = state ? state.rateLimit : undefined;
            resourceInputs["reportingDisabled"] = state ? state.reportingDisabled : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["setCounterBaseVal"] = state ? state.setCounterBaseVal : undefined;
            resourceInputs["sflowCommon"] = state ? state.sflowCommon : undefined;
            resourceInputs["sflowHttp"] = state ? state.sflowHttp : undefined;
            resourceInputs["sflowLayer4"] = state ? state.sflowLayer4 : undefined;
            resourceInputs["sflowPackets"] = state ? state.sflowPackets : undefined;
            resourceInputs["sflowTcp"] = state ? state.sflowTcp : undefined;
            resourceInputs["sourceNatPool"] = state ? state.sourceNatPool : undefined;
            resourceInputs["srcPort"] = state ? state.srcPort : undefined;
            resourceInputs["srcPortRangeLists"] = state ? state.srcPortRangeLists : undefined;
            resourceInputs["telemetryEnable"] = state ? state.telemetryEnable : undefined;
            resourceInputs["topkDestinations"] = state ? state.topkDestinations : undefined;
            resourceInputs["trafficDistributionMode"] = state ? state.trafficDistributionMode : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["webGui"] = state ? state.webGui : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
            resourceInputs["zoneProfile"] = state ? state.zoneProfile : undefined;
            resourceInputs["zoneTemplate"] = state ? state.zoneTemplate : undefined;
        } else {
            const args = argsOrState as DdosDstZoneArgs | undefined;
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["actionList"] = args ? args.actionList : undefined;
            resourceInputs["advertisedEnable"] = args ? args.advertisedEnable : undefined;
            resourceInputs["captureConfigLists"] = args ? args.captureConfigLists : undefined;
            resourceInputs["collectors"] = args ? args.collectors : undefined;
            resourceInputs["continuousLearning"] = args ? args.continuousLearning : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destNatIp"] = args ? args.destNatIp : undefined;
            resourceInputs["destNatIpv6"] = args ? args.destNatIpv6 : undefined;
            resourceInputs["detection"] = args ? args.detection : undefined;
            resourceInputs["dropFragPkt"] = args ? args.dropFragPkt : undefined;
            resourceInputs["enableTopKs"] = args ? args.enableTopKs : undefined;
            resourceInputs["forceOperationalMode"] = args ? args.forceOperationalMode : undefined;
            resourceInputs["glid"] = args ? args.glid : undefined;
            resourceInputs["hwBlacklistBlocking"] = args ? args.hwBlacklistBlocking : undefined;
            resourceInputs["inboundForwardDscp"] = args ? args.inboundForwardDscp : undefined;
            resourceInputs["ipProto"] = args ? args.ipProto : undefined;
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["ipv6s"] = args ? args.ipv6s : undefined;
            resourceInputs["isFromWizard"] = args ? args.isFromWizard : undefined;
            resourceInputs["logEnable"] = args ? args.logEnable : undefined;
            resourceInputs["logHighFrequency"] = args ? args.logHighFrequency : undefined;
            resourceInputs["logPeriodic"] = args ? args.logPeriodic : undefined;
            resourceInputs["nonRestrictive"] = args ? args.nonRestrictive : undefined;
            resourceInputs["operationalMode"] = args ? args.operationalMode : undefined;
            resourceInputs["outboundForwardDscp"] = args ? args.outboundForwardDscp : undefined;
            resourceInputs["outboundPolicy"] = args ? args.outboundPolicy : undefined;
            resourceInputs["packetAnomalyDetection"] = args ? args.packetAnomalyDetection : undefined;
            resourceInputs["patternRecognitionHwFilterEnable"] = args ? args.patternRecognitionHwFilterEnable : undefined;
            resourceInputs["patternRecognitionSensitivity"] = args ? args.patternRecognitionSensitivity : undefined;
            resourceInputs["perAddrGlid"] = args ? args.perAddrGlid : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["portRangeLists"] = args ? args.portRangeLists : undefined;
            resourceInputs["rateLimit"] = args ? args.rateLimit : undefined;
            resourceInputs["reportingDisabled"] = args ? args.reportingDisabled : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["setCounterBaseVal"] = args ? args.setCounterBaseVal : undefined;
            resourceInputs["sflowCommon"] = args ? args.sflowCommon : undefined;
            resourceInputs["sflowHttp"] = args ? args.sflowHttp : undefined;
            resourceInputs["sflowLayer4"] = args ? args.sflowLayer4 : undefined;
            resourceInputs["sflowPackets"] = args ? args.sflowPackets : undefined;
            resourceInputs["sflowTcp"] = args ? args.sflowTcp : undefined;
            resourceInputs["sourceNatPool"] = args ? args.sourceNatPool : undefined;
            resourceInputs["srcPort"] = args ? args.srcPort : undefined;
            resourceInputs["srcPortRangeLists"] = args ? args.srcPortRangeLists : undefined;
            resourceInputs["telemetryEnable"] = args ? args.telemetryEnable : undefined;
            resourceInputs["topkDestinations"] = args ? args.topkDestinations : undefined;
            resourceInputs["trafficDistributionMode"] = args ? args.trafficDistributionMode : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["webGui"] = args ? args.webGui : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
            resourceInputs["zoneProfile"] = args ? args.zoneProfile : undefined;
            resourceInputs["zoneTemplate"] = args ? args.zoneTemplate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstZone resources.
 */
export interface DdosDstZoneState {
    /**
     * Configure action-list to take
     */
    actionList?: pulumi.Input<string>;
    /**
     * BGP advertised
     */
    advertisedEnable?: pulumi.Input<number>;
    captureConfigLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneCaptureConfigList>[]>;
    collectors?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneCollector>[]>;
    /**
     * Continuous learning of detection
     */
    continuousLearning?: pulumi.Input<number>;
    /**
     * Description for this Destination Zone
     */
    description?: pulumi.Input<string>;
    /**
     * Destination NAT IP address
     */
    destNatIp?: pulumi.Input<string>;
    /**
     * Destination NAT IPv6 address
     */
    destNatIpv6?: pulumi.Input<string>;
    detection?: pulumi.Input<inputs.DdosDstZoneDetection>;
    /**
     * Drop fragmented packets
     */
    dropFragPkt?: pulumi.Input<number>;
    enableTopKs?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneEnableTopK>[]>;
    /**
     * Force configure operational mode
     */
    forceOperationalMode?: pulumi.Input<number>;
    /**
     * Global limit ID for the whole zone
     */
    glid?: pulumi.Input<string>;
    hwBlacklistBlocking?: pulumi.Input<inputs.DdosDstZoneHwBlacklistBlocking>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    inboundForwardDscp?: pulumi.Input<number>;
    ipProto?: pulumi.Input<inputs.DdosDstZoneIpProto>;
    ips?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneIp>[]>;
    ipv6s?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneIpv6>[]>;
    /**
     * Is It Created from Onbox GUI Wizard
     */
    isFromWizard?: pulumi.Input<number>;
    /**
     * Enable logging
     */
    logEnable?: pulumi.Input<number>;
    /**
     * Enable High frequency logging for non-event logs per zone
     */
    logHighFrequency?: pulumi.Input<number>;
    /**
     * Enable log periodic
     */
    logPeriodic?: pulumi.Input<number>;
    /**
     * Non-restrictive mode ignores Zero Thresholds Indicators
     */
    nonRestrictive?: pulumi.Input<number>;
    /**
     * 'idle': Idle mode; 'monitor': Monitor mode; 'learning': Learning mode;
     */
    operationalMode?: pulumi.Input<string>;
    /**
     * To set dscp value for outbound
     */
    outboundForwardDscp?: pulumi.Input<number>;
    outboundPolicy?: pulumi.Input<inputs.DdosDstZoneOutboundPolicy>;
    packetAnomalyDetection?: pulumi.Input<inputs.DdosDstZonePacketAnomalyDetection>;
    /**
     * to enable pattern recognition hardware filter
     */
    patternRecognitionHwFilterEnable?: pulumi.Input<number>;
    /**
     * 'high': High sensitive pattern recognition; 'medium': Medium sensitive pattern recognition; 'low': Low sensitive pattern
     * recognition;
     */
    patternRecognitionSensitivity?: pulumi.Input<string>;
    /**
     * Global limit ID per address
     */
    perAddrGlid?: pulumi.Input<string>;
    port?: pulumi.Input<inputs.DdosDstZonePort>;
    portRangeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZonePortRangeList>[]>;
    /**
     * Rate limit per second per zone(Default : 1 per second)
     */
    rateLimit?: pulumi.Input<number>;
    /**
     * Disable Reporting
     */
    reportingDisabled?: pulumi.Input<number>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneSamplingEnable>[]>;
    /**
     * Set T2 counter value of current context to specified value
     */
    setCounterBaseVal?: pulumi.Input<number>;
    /**
     * Enable sFlow counter polling packets, tcp-basic, tcp-stateful and http. WARNING: Zone level Sflow polling might induce
     * heavy CP
     */
    sflowCommon?: pulumi.Input<number>;
    /**
     * Enable sFlow HTTP counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the total
     * number
     */
    sflowHttp?: pulumi.Input<number>;
    /**
     * Enable sFlow Layer 4 counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the
     * number of
     */
    sflowLayer4?: pulumi.Input<number>;
    /**
     * Enable sFlow packet-level counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on
     * the total
     */
    sflowPackets?: pulumi.Input<number>;
    sflowTcp?: pulumi.Input<inputs.DdosDstZoneSflowTcp>;
    /**
     * Configure source NAT
     */
    sourceNatPool?: pulumi.Input<string>;
    srcPort?: pulumi.Input<inputs.DdosDstZoneSrcPort>;
    srcPortRangeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneSrcPortRangeList>[]>;
    /**
     * Enable from-l3-peer flag for the zone, thus all the ip entries in the zone will be dynamically created/deleted based on
     * the BGP
     */
    telemetryEnable?: pulumi.Input<number>;
    topkDestinations?: pulumi.Input<inputs.DdosDstZoneTopkDestinations>;
    /**
     * 'default': Distribute traffic to one slot using default distribution mechanism; 'source-ip-based': Distribute traffic
     * between slots, based on source ip;
     */
    trafficDistributionMode?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    webGui?: pulumi.Input<inputs.DdosDstZoneWebGui>;
    zoneName?: pulumi.Input<string>;
    /**
     * Apply threshold profile
     */
    zoneProfile?: pulumi.Input<string>;
    zoneTemplate?: pulumi.Input<inputs.DdosDstZoneZoneTemplate>;
}

/**
 * The set of arguments for constructing a DdosDstZone resource.
 */
export interface DdosDstZoneArgs {
    /**
     * Configure action-list to take
     */
    actionList?: pulumi.Input<string>;
    /**
     * BGP advertised
     */
    advertisedEnable?: pulumi.Input<number>;
    captureConfigLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneCaptureConfigList>[]>;
    collectors?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneCollector>[]>;
    /**
     * Continuous learning of detection
     */
    continuousLearning?: pulumi.Input<number>;
    /**
     * Description for this Destination Zone
     */
    description?: pulumi.Input<string>;
    /**
     * Destination NAT IP address
     */
    destNatIp?: pulumi.Input<string>;
    /**
     * Destination NAT IPv6 address
     */
    destNatIpv6?: pulumi.Input<string>;
    detection?: pulumi.Input<inputs.DdosDstZoneDetection>;
    /**
     * Drop fragmented packets
     */
    dropFragPkt?: pulumi.Input<number>;
    enableTopKs?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneEnableTopK>[]>;
    /**
     * Force configure operational mode
     */
    forceOperationalMode?: pulumi.Input<number>;
    /**
     * Global limit ID for the whole zone
     */
    glid?: pulumi.Input<string>;
    hwBlacklistBlocking?: pulumi.Input<inputs.DdosDstZoneHwBlacklistBlocking>;
    /**
     * To set dscp value for inbound packets (DSCP Value for the clear traffic marking)
     */
    inboundForwardDscp?: pulumi.Input<number>;
    ipProto?: pulumi.Input<inputs.DdosDstZoneIpProto>;
    ips?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneIp>[]>;
    ipv6s?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneIpv6>[]>;
    /**
     * Is It Created from Onbox GUI Wizard
     */
    isFromWizard?: pulumi.Input<number>;
    /**
     * Enable logging
     */
    logEnable?: pulumi.Input<number>;
    /**
     * Enable High frequency logging for non-event logs per zone
     */
    logHighFrequency?: pulumi.Input<number>;
    /**
     * Enable log periodic
     */
    logPeriodic?: pulumi.Input<number>;
    /**
     * Non-restrictive mode ignores Zero Thresholds Indicators
     */
    nonRestrictive?: pulumi.Input<number>;
    /**
     * 'idle': Idle mode; 'monitor': Monitor mode; 'learning': Learning mode;
     */
    operationalMode?: pulumi.Input<string>;
    /**
     * To set dscp value for outbound
     */
    outboundForwardDscp?: pulumi.Input<number>;
    outboundPolicy?: pulumi.Input<inputs.DdosDstZoneOutboundPolicy>;
    packetAnomalyDetection?: pulumi.Input<inputs.DdosDstZonePacketAnomalyDetection>;
    /**
     * to enable pattern recognition hardware filter
     */
    patternRecognitionHwFilterEnable?: pulumi.Input<number>;
    /**
     * 'high': High sensitive pattern recognition; 'medium': Medium sensitive pattern recognition; 'low': Low sensitive pattern
     * recognition;
     */
    patternRecognitionSensitivity?: pulumi.Input<string>;
    /**
     * Global limit ID per address
     */
    perAddrGlid?: pulumi.Input<string>;
    port?: pulumi.Input<inputs.DdosDstZonePort>;
    portRangeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZonePortRangeList>[]>;
    /**
     * Rate limit per second per zone(Default : 1 per second)
     */
    rateLimit?: pulumi.Input<number>;
    /**
     * Disable Reporting
     */
    reportingDisabled?: pulumi.Input<number>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneSamplingEnable>[]>;
    /**
     * Set T2 counter value of current context to specified value
     */
    setCounterBaseVal?: pulumi.Input<number>;
    /**
     * Enable sFlow counter polling packets, tcp-basic, tcp-stateful and http. WARNING: Zone level Sflow polling might induce
     * heavy CP
     */
    sflowCommon?: pulumi.Input<number>;
    /**
     * Enable sFlow HTTP counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the total
     * number
     */
    sflowHttp?: pulumi.Input<number>;
    /**
     * Enable sFlow Layer 4 counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on the
     * number of
     */
    sflowLayer4?: pulumi.Input<number>;
    /**
     * Enable sFlow packet-level counter polling. WARNING: Zone level Sflow polling might induce heavy CPU load depending on
     * the total
     */
    sflowPackets?: pulumi.Input<number>;
    sflowTcp?: pulumi.Input<inputs.DdosDstZoneSflowTcp>;
    /**
     * Configure source NAT
     */
    sourceNatPool?: pulumi.Input<string>;
    srcPort?: pulumi.Input<inputs.DdosDstZoneSrcPort>;
    srcPortRangeLists?: pulumi.Input<pulumi.Input<inputs.DdosDstZoneSrcPortRangeList>[]>;
    /**
     * Enable from-l3-peer flag for the zone, thus all the ip entries in the zone will be dynamically created/deleted based on
     * the BGP
     */
    telemetryEnable?: pulumi.Input<number>;
    topkDestinations?: pulumi.Input<inputs.DdosDstZoneTopkDestinations>;
    /**
     * 'default': Distribute traffic to one slot using default distribution mechanism; 'source-ip-based': Distribute traffic
     * between slots, based on source ip;
     */
    trafficDistributionMode?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    webGui?: pulumi.Input<inputs.DdosDstZoneWebGui>;
    zoneName: pulumi.Input<string>;
    /**
     * Apply threshold profile
     */
    zoneProfile?: pulumi.Input<string>;
    zoneTemplate?: pulumi.Input<inputs.DdosDstZoneZoneTemplate>;
}
