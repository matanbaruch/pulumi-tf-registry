// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DdosDstEntryPortRange extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstEntryPortRange resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstEntryPortRangeState, opts?: pulumi.CustomResourceOptions): DdosDstEntryPortRange {
        return new DdosDstEntryPortRange(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstEntryPortRange:DdosDstEntryPortRange';

    /**
     * Returns true if the given object is an instance of DdosDstEntryPortRange.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstEntryPortRange {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstEntryPortRange.__pulumiType;
    }

    public readonly captureConfig!: pulumi.Output<outputs.DdosDstEntryPortRangeCaptureConfig | undefined>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    public readonly deny!: pulumi.Output<number | undefined>;
    /**
     * Enable ddos detection
     */
    public readonly detectionEnable!: pulumi.Output<number | undefined>;
    /**
     * DstEntryName
     */
    public readonly dstEntryName!: pulumi.Output<string>;
    /**
     * Enable ddos top-k entries
     */
    public readonly enableTopK!: pulumi.Output<number | undefined>;
    /**
     * Global limit ID
     */
    public readonly glid!: pulumi.Output<string | undefined>;
    public readonly glidExceedAction!: pulumi.Output<outputs.DdosDstEntryPortRangeGlidExceedAction | undefined>;
    /**
     * Configure IP Filter
     */
    public readonly ipFilteringPolicy!: pulumi.Output<string | undefined>;
    public readonly ipFilteringPolicyOper!: pulumi.Output<outputs.DdosDstEntryPortRangeIpFilteringPolicyOper | undefined>;
    public readonly patternRecognition!: pulumi.Output<outputs.DdosDstEntryPortRangePatternRecognition | undefined>;
    public readonly patternRecognitionPuDetails!: pulumi.Output<outputs.DdosDstEntryPortRangePatternRecognitionPuDetails | undefined>;
    public readonly portInd!: pulumi.Output<outputs.DdosDstEntryPortRangePortInd | undefined>;
    /**
     * Port-Range End Port Number
     */
    public readonly portRangeEnd!: pulumi.Output<number>;
    /**
     * Port-Range Start Port Number
     */
    public readonly portRangeStart!: pulumi.Output<number>;
    public readonly progressionTracking!: pulumi.Output<outputs.DdosDstEntryPortRangeProgressionTracking | undefined>;
    /**
     * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4
     * Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Set T2 counter value of current context to specified value
     */
    public readonly setCounterBaseVal!: pulumi.Output<number | undefined>;
    public readonly sflow!: pulumi.Output<outputs.DdosDstEntryPortRangeSflow | undefined>;
    public readonly template!: pulumi.Output<outputs.DdosDstEntryPortRangeTemplate | undefined>;
    /**
     * Maximum number of records to show in topk
     */
    public readonly topkNumRecords!: pulumi.Output<number | undefined>;
    public readonly topkSources!: pulumi.Output<outputs.DdosDstEntryPortRangeTopkSources | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosDstEntryPortRange resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstEntryPortRangeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstEntryPortRangeArgs | DdosDstEntryPortRangeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstEntryPortRangeState | undefined;
            resourceInputs["captureConfig"] = state ? state.captureConfig : undefined;
            resourceInputs["deny"] = state ? state.deny : undefined;
            resourceInputs["detectionEnable"] = state ? state.detectionEnable : undefined;
            resourceInputs["dstEntryName"] = state ? state.dstEntryName : undefined;
            resourceInputs["enableTopK"] = state ? state.enableTopK : undefined;
            resourceInputs["glid"] = state ? state.glid : undefined;
            resourceInputs["glidExceedAction"] = state ? state.glidExceedAction : undefined;
            resourceInputs["ipFilteringPolicy"] = state ? state.ipFilteringPolicy : undefined;
            resourceInputs["ipFilteringPolicyOper"] = state ? state.ipFilteringPolicyOper : undefined;
            resourceInputs["patternRecognition"] = state ? state.patternRecognition : undefined;
            resourceInputs["patternRecognitionPuDetails"] = state ? state.patternRecognitionPuDetails : undefined;
            resourceInputs["portInd"] = state ? state.portInd : undefined;
            resourceInputs["portRangeEnd"] = state ? state.portRangeEnd : undefined;
            resourceInputs["portRangeStart"] = state ? state.portRangeStart : undefined;
            resourceInputs["progressionTracking"] = state ? state.progressionTracking : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["setCounterBaseVal"] = state ? state.setCounterBaseVal : undefined;
            resourceInputs["sflow"] = state ? state.sflow : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["topkNumRecords"] = state ? state.topkNumRecords : undefined;
            resourceInputs["topkSources"] = state ? state.topkSources : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosDstEntryPortRangeArgs | undefined;
            if ((!args || args.dstEntryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstEntryName'");
            }
            if ((!args || args.portRangeEnd === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portRangeEnd'");
            }
            if ((!args || args.portRangeStart === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portRangeStart'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            resourceInputs["captureConfig"] = args ? args.captureConfig : undefined;
            resourceInputs["deny"] = args ? args.deny : undefined;
            resourceInputs["detectionEnable"] = args ? args.detectionEnable : undefined;
            resourceInputs["dstEntryName"] = args ? args.dstEntryName : undefined;
            resourceInputs["enableTopK"] = args ? args.enableTopK : undefined;
            resourceInputs["glid"] = args ? args.glid : undefined;
            resourceInputs["glidExceedAction"] = args ? args.glidExceedAction : undefined;
            resourceInputs["ipFilteringPolicy"] = args ? args.ipFilteringPolicy : undefined;
            resourceInputs["ipFilteringPolicyOper"] = args ? args.ipFilteringPolicyOper : undefined;
            resourceInputs["patternRecognition"] = args ? args.patternRecognition : undefined;
            resourceInputs["patternRecognitionPuDetails"] = args ? args.patternRecognitionPuDetails : undefined;
            resourceInputs["portInd"] = args ? args.portInd : undefined;
            resourceInputs["portRangeEnd"] = args ? args.portRangeEnd : undefined;
            resourceInputs["portRangeStart"] = args ? args.portRangeStart : undefined;
            resourceInputs["progressionTracking"] = args ? args.progressionTracking : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["setCounterBaseVal"] = args ? args.setCounterBaseVal : undefined;
            resourceInputs["sflow"] = args ? args.sflow : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["topkNumRecords"] = args ? args.topkNumRecords : undefined;
            resourceInputs["topkSources"] = args ? args.topkSources : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstEntryPortRange.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstEntryPortRange resources.
 */
export interface DdosDstEntryPortRangeState {
    captureConfig?: pulumi.Input<inputs.DdosDstEntryPortRangeCaptureConfig>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Enable ddos detection
     */
    detectionEnable?: pulumi.Input<number>;
    /**
     * DstEntryName
     */
    dstEntryName?: pulumi.Input<string>;
    /**
     * Enable ddos top-k entries
     */
    enableTopK?: pulumi.Input<number>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    glidExceedAction?: pulumi.Input<inputs.DdosDstEntryPortRangeGlidExceedAction>;
    /**
     * Configure IP Filter
     */
    ipFilteringPolicy?: pulumi.Input<string>;
    ipFilteringPolicyOper?: pulumi.Input<inputs.DdosDstEntryPortRangeIpFilteringPolicyOper>;
    patternRecognition?: pulumi.Input<inputs.DdosDstEntryPortRangePatternRecognition>;
    patternRecognitionPuDetails?: pulumi.Input<inputs.DdosDstEntryPortRangePatternRecognitionPuDetails>;
    portInd?: pulumi.Input<inputs.DdosDstEntryPortRangePortInd>;
    /**
     * Port-Range End Port Number
     */
    portRangeEnd?: pulumi.Input<number>;
    /**
     * Port-Range Start Port Number
     */
    portRangeStart?: pulumi.Input<number>;
    progressionTracking?: pulumi.Input<inputs.DdosDstEntryPortRangeProgressionTracking>;
    /**
     * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4
     * Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
     */
    protocol?: pulumi.Input<string>;
    /**
     * Set T2 counter value of current context to specified value
     */
    setCounterBaseVal?: pulumi.Input<number>;
    sflow?: pulumi.Input<inputs.DdosDstEntryPortRangeSflow>;
    template?: pulumi.Input<inputs.DdosDstEntryPortRangeTemplate>;
    /**
     * Maximum number of records to show in topk
     */
    topkNumRecords?: pulumi.Input<number>;
    topkSources?: pulumi.Input<inputs.DdosDstEntryPortRangeTopkSources>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosDstEntryPortRange resource.
 */
export interface DdosDstEntryPortRangeArgs {
    captureConfig?: pulumi.Input<inputs.DdosDstEntryPortRangeCaptureConfig>;
    /**
     * Blacklist and Drop all incoming packets for protocol
     */
    deny?: pulumi.Input<number>;
    /**
     * Enable ddos detection
     */
    detectionEnable?: pulumi.Input<number>;
    /**
     * DstEntryName
     */
    dstEntryName: pulumi.Input<string>;
    /**
     * Enable ddos top-k entries
     */
    enableTopK?: pulumi.Input<number>;
    /**
     * Global limit ID
     */
    glid?: pulumi.Input<string>;
    glidExceedAction?: pulumi.Input<inputs.DdosDstEntryPortRangeGlidExceedAction>;
    /**
     * Configure IP Filter
     */
    ipFilteringPolicy?: pulumi.Input<string>;
    ipFilteringPolicyOper?: pulumi.Input<inputs.DdosDstEntryPortRangeIpFilteringPolicyOper>;
    patternRecognition?: pulumi.Input<inputs.DdosDstEntryPortRangePatternRecognition>;
    patternRecognitionPuDetails?: pulumi.Input<inputs.DdosDstEntryPortRangePatternRecognitionPuDetails>;
    portInd?: pulumi.Input<inputs.DdosDstEntryPortRangePortInd>;
    /**
     * Port-Range End Port Number
     */
    portRangeEnd: pulumi.Input<number>;
    /**
     * Port-Range Start Port Number
     */
    portRangeStart: pulumi.Input<number>;
    progressionTracking?: pulumi.Input<inputs.DdosDstEntryPortRangeProgressionTracking>;
    /**
     * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4
     * Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port;
     */
    protocol: pulumi.Input<string>;
    /**
     * Set T2 counter value of current context to specified value
     */
    setCounterBaseVal?: pulumi.Input<number>;
    sflow?: pulumi.Input<inputs.DdosDstEntryPortRangeSflow>;
    template?: pulumi.Input<inputs.DdosDstEntryPortRangeTemplate>;
    /**
     * Maximum number of records to show in topk
     */
    topkNumRecords?: pulumi.Input<number>;
    topkSources?: pulumi.Input<inputs.DdosDstEntryPortRangeTopkSources>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
