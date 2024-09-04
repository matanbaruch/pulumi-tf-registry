// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosDstZoneIpProtoProtoNameLevelIndicator extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstZoneIpProtoProtoNameLevelIndicator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstZoneIpProtoProtoNameLevelIndicatorState, opts?: pulumi.CustomResourceOptions): DdosDstZoneIpProtoProtoNameLevelIndicator {
        return new DdosDstZoneIpProtoProtoNameLevelIndicator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstZoneIpProtoProtoNameLevelIndicator:DdosDstZoneIpProtoProtoNameLevelIndicator';

    /**
     * Returns true if the given object is an instance of DdosDstZoneIpProtoProtoNameLevelIndicator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstZoneIpProtoProtoNameLevelIndicator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstZoneIpProtoProtoNameLevelIndicator.__pulumiType;
    }

    /**
     * Expected minimal data size
     */
    public readonly dataPacketSize!: pulumi.Output<number | undefined>;
    /**
     * LevelNum
     */
    public readonly levelNum!: pulumi.Output<string>;
    /**
     * Protocol
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Score corresponding to the indicator
     */
    public readonly score!: pulumi.Output<number | undefined>;
    /**
     * Indicator per-src threshold
     */
    public readonly srcThresholdLargeNum!: pulumi.Output<number | undefined>;
    /**
     * Indicator per-src threshold
     */
    public readonly srcThresholdNum!: pulumi.Output<number | undefined>;
    /**
     * Indicator per-src threshold (Non-zero floating point)
     */
    public readonly srcThresholdStr!: pulumi.Output<string | undefined>;
    /**
     * Violation actions to use when this src indicator threshold reaches
     */
    public readonly srcViolationActions!: pulumi.Output<string | undefined>;
    /**
     * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits;
     * 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio':
     * ratio of incoming packet rate divided by the rate of outgoing packets; 'frag-rate': rate of incoming fragmented packets;
     * 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * ZoneName
     */
    public readonly zoneName!: pulumi.Output<string>;
    /**
     * Threshold for the entire zone
     */
    public readonly zoneThresholdLargeNum!: pulumi.Output<number | undefined>;
    /**
     * Threshold for the entire zone
     */
    public readonly zoneThresholdNum!: pulumi.Output<number | undefined>;
    /**
     * Threshold for the entire zone (Non-zero floating point)
     */
    public readonly zoneThresholdStr!: pulumi.Output<string | undefined>;
    /**
     * Violation actions to use when this zone indicator threshold reaches
     */
    public readonly zoneViolationActions!: pulumi.Output<string | undefined>;

    /**
     * Create a DdosDstZoneIpProtoProtoNameLevelIndicator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstZoneIpProtoProtoNameLevelIndicatorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstZoneIpProtoProtoNameLevelIndicatorArgs | DdosDstZoneIpProtoProtoNameLevelIndicatorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstZoneIpProtoProtoNameLevelIndicatorState | undefined;
            resourceInputs["dataPacketSize"] = state ? state.dataPacketSize : undefined;
            resourceInputs["levelNum"] = state ? state.levelNum : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["score"] = state ? state.score : undefined;
            resourceInputs["srcThresholdLargeNum"] = state ? state.srcThresholdLargeNum : undefined;
            resourceInputs["srcThresholdNum"] = state ? state.srcThresholdNum : undefined;
            resourceInputs["srcThresholdStr"] = state ? state.srcThresholdStr : undefined;
            resourceInputs["srcViolationActions"] = state ? state.srcViolationActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
            resourceInputs["zoneThresholdLargeNum"] = state ? state.zoneThresholdLargeNum : undefined;
            resourceInputs["zoneThresholdNum"] = state ? state.zoneThresholdNum : undefined;
            resourceInputs["zoneThresholdStr"] = state ? state.zoneThresholdStr : undefined;
            resourceInputs["zoneViolationActions"] = state ? state.zoneViolationActions : undefined;
        } else {
            const args = argsOrState as DdosDstZoneIpProtoProtoNameLevelIndicatorArgs | undefined;
            if ((!args || args.levelNum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'levelNum'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["dataPacketSize"] = args ? args.dataPacketSize : undefined;
            resourceInputs["levelNum"] = args ? args.levelNum : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["score"] = args ? args.score : undefined;
            resourceInputs["srcThresholdLargeNum"] = args ? args.srcThresholdLargeNum : undefined;
            resourceInputs["srcThresholdNum"] = args ? args.srcThresholdNum : undefined;
            resourceInputs["srcThresholdStr"] = args ? args.srcThresholdStr : undefined;
            resourceInputs["srcViolationActions"] = args ? args.srcViolationActions : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
            resourceInputs["zoneThresholdLargeNum"] = args ? args.zoneThresholdLargeNum : undefined;
            resourceInputs["zoneThresholdNum"] = args ? args.zoneThresholdNum : undefined;
            resourceInputs["zoneThresholdStr"] = args ? args.zoneThresholdStr : undefined;
            resourceInputs["zoneViolationActions"] = args ? args.zoneViolationActions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstZoneIpProtoProtoNameLevelIndicator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstZoneIpProtoProtoNameLevelIndicator resources.
 */
export interface DdosDstZoneIpProtoProtoNameLevelIndicatorState {
    /**
     * Expected minimal data size
     */
    dataPacketSize?: pulumi.Input<number>;
    /**
     * LevelNum
     */
    levelNum?: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol?: pulumi.Input<string>;
    /**
     * Score corresponding to the indicator
     */
    score?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold
     */
    srcThresholdLargeNum?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold
     */
    srcThresholdNum?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold (Non-zero floating point)
     */
    srcThresholdStr?: pulumi.Input<string>;
    /**
     * Violation actions to use when this src indicator threshold reaches
     */
    srcViolationActions?: pulumi.Input<string>;
    /**
     * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits;
     * 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio':
     * ratio of incoming packet rate divided by the rate of outgoing packets; 'frag-rate': rate of incoming fragmented packets;
     * 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
     */
    type?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName?: pulumi.Input<string>;
    /**
     * Threshold for the entire zone
     */
    zoneThresholdLargeNum?: pulumi.Input<number>;
    /**
     * Threshold for the entire zone
     */
    zoneThresholdNum?: pulumi.Input<number>;
    /**
     * Threshold for the entire zone (Non-zero floating point)
     */
    zoneThresholdStr?: pulumi.Input<string>;
    /**
     * Violation actions to use when this zone indicator threshold reaches
     */
    zoneViolationActions?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosDstZoneIpProtoProtoNameLevelIndicator resource.
 */
export interface DdosDstZoneIpProtoProtoNameLevelIndicatorArgs {
    /**
     * Expected minimal data size
     */
    dataPacketSize?: pulumi.Input<number>;
    /**
     * LevelNum
     */
    levelNum: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol: pulumi.Input<string>;
    /**
     * Score corresponding to the indicator
     */
    score?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold
     */
    srcThresholdLargeNum?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold
     */
    srcThresholdNum?: pulumi.Input<number>;
    /**
     * Indicator per-src threshold (Non-zero floating point)
     */
    srcThresholdStr?: pulumi.Input<string>;
    /**
     * Violation actions to use when this src indicator threshold reaches
     */
    srcViolationActions?: pulumi.Input<string>;
    /**
     * 'pkt-rate': rate of incoming packets; 'pkt-drop-rate': rate of packets got dropped; 'bit-rate': rate of incoming bits;
     * 'pkt-drop-ratio': ratio of incoming packet rate divided by the rate of dropping packets; 'bytes-to-bytes-from-ratio':
     * ratio of incoming packet rate divided by the rate of outgoing packets; 'frag-rate': rate of incoming fragmented packets;
     * 'cpu-utilization': average data CPU utilization; 'interface-utilization': outside interface utilization;
     */
    type: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName: pulumi.Input<string>;
    /**
     * Threshold for the entire zone
     */
    zoneThresholdLargeNum?: pulumi.Input<number>;
    /**
     * Threshold for the entire zone
     */
    zoneThresholdNum?: pulumi.Input<number>;
    /**
     * Threshold for the entire zone (Non-zero floating point)
     */
    zoneThresholdStr?: pulumi.Input<string>;
    /**
     * Violation actions to use when this zone indicator threshold reaches
     */
    zoneViolationActions?: pulumi.Input<string>;
}
