// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosDstZonePortZoneServicePatternRecognition extends pulumi.CustomResource {
    /**
     * Get an existing DdosDstZonePortZoneServicePatternRecognition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosDstZonePortZoneServicePatternRecognitionState, opts?: pulumi.CustomResourceOptions): DdosDstZonePortZoneServicePatternRecognition {
        return new DdosDstZonePortZoneServicePatternRecognition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosDstZonePortZoneServicePatternRecognition:DdosDstZonePortZoneServicePatternRecognition';

    /**
     * Returns true if the given object is an instance of DdosDstZonePortZoneServicePatternRecognition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosDstZonePortZoneServicePatternRecognition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosDstZonePortZoneServicePatternRecognition.__pulumiType;
    }

    /**
     * 'heuristic': heuristic algorithm;
     */
    public readonly algorithm!: pulumi.Output<string>;
    /**
     * Set offset of the payload
     */
    public readonly appPayloadOffset!: pulumi.Output<number | undefined>;
    /**
     * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
     */
    public readonly captureTraffic!: pulumi.Output<string | undefined>;
    /**
     * Extracted filter inactive threshold
     */
    public readonly filterInactiveThreshold!: pulumi.Output<number | undefined>;
    /**
     * Extracted filter threshold
     */
    public readonly filterThreshold!: pulumi.Output<number | undefined>;
    /**
     * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * PortNum
     */
    public readonly portNum!: pulumi.Output<string>;
    /**
     * Protocol
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
     */
    public readonly sensitivity!: pulumi.Output<string | undefined>;
    /**
     * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger
     * pattern recognition (default);
     */
    public readonly triggeredBy!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * ZoneName
     */
    public readonly zoneName!: pulumi.Output<string>;

    /**
     * Create a DdosDstZonePortZoneServicePatternRecognition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosDstZonePortZoneServicePatternRecognitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosDstZonePortZoneServicePatternRecognitionArgs | DdosDstZonePortZoneServicePatternRecognitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosDstZonePortZoneServicePatternRecognitionState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["appPayloadOffset"] = state ? state.appPayloadOffset : undefined;
            resourceInputs["captureTraffic"] = state ? state.captureTraffic : undefined;
            resourceInputs["filterInactiveThreshold"] = state ? state.filterInactiveThreshold : undefined;
            resourceInputs["filterThreshold"] = state ? state.filterThreshold : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["portNum"] = state ? state.portNum : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["sensitivity"] = state ? state.sensitivity : undefined;
            resourceInputs["triggeredBy"] = state ? state.triggeredBy : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as DdosDstZonePortZoneServicePatternRecognitionArgs | undefined;
            if ((!args || args.algorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'algorithm'");
            }
            if ((!args || args.portNum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portNum'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.zoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneName'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["appPayloadOffset"] = args ? args.appPayloadOffset : undefined;
            resourceInputs["captureTraffic"] = args ? args.captureTraffic : undefined;
            resourceInputs["filterInactiveThreshold"] = args ? args.filterInactiveThreshold : undefined;
            resourceInputs["filterThreshold"] = args ? args.filterThreshold : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["portNum"] = args ? args.portNum : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["sensitivity"] = args ? args.sensitivity : undefined;
            resourceInputs["triggeredBy"] = args ? args.triggeredBy : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["zoneName"] = args ? args.zoneName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosDstZonePortZoneServicePatternRecognition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosDstZonePortZoneServicePatternRecognition resources.
 */
export interface DdosDstZonePortZoneServicePatternRecognitionState {
    /**
     * 'heuristic': heuristic algorithm;
     */
    algorithm?: pulumi.Input<string>;
    /**
     * Set offset of the payload
     */
    appPayloadOffset?: pulumi.Input<number>;
    /**
     * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
     */
    captureTraffic?: pulumi.Input<string>;
    /**
     * Extracted filter inactive threshold
     */
    filterInactiveThreshold?: pulumi.Input<number>;
    /**
     * Extracted filter threshold
     */
    filterThreshold?: pulumi.Input<number>;
    /**
     * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
     */
    mode?: pulumi.Input<string>;
    /**
     * PortNum
     */
    portNum?: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol?: pulumi.Input<string>;
    /**
     * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
     */
    sensitivity?: pulumi.Input<string>;
    /**
     * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger
     * pattern recognition (default);
     */
    triggeredBy?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosDstZonePortZoneServicePatternRecognition resource.
 */
export interface DdosDstZonePortZoneServicePatternRecognitionArgs {
    /**
     * 'heuristic': heuristic algorithm;
     */
    algorithm: pulumi.Input<string>;
    /**
     * Set offset of the payload
     */
    appPayloadOffset?: pulumi.Input<number>;
    /**
     * 'all': Capture all packets; 'dropped': Capture dropped packets (default);
     */
    captureTraffic?: pulumi.Input<string>;
    /**
     * Extracted filter inactive threshold
     */
    filterInactiveThreshold?: pulumi.Input<number>;
    /**
     * Extracted filter threshold
     */
    filterThreshold?: pulumi.Input<number>;
    /**
     * 'capture-never-expire': War-time capture without rate exceeding and never expires; 'manual': Manual mode;
     */
    mode?: pulumi.Input<string>;
    /**
     * PortNum
     */
    portNum: pulumi.Input<string>;
    /**
     * Protocol
     */
    protocol: pulumi.Input<string>;
    /**
     * 'high': High Sensitivity; 'medium': Medium Sensitivity; 'low': Low Sensitivity;
     */
    sensitivity?: pulumi.Input<string>;
    /**
     * 'zone-escalation': Zone escalation trigger pattern recognition; 'packet-rate-exceeds': Packet rate limit exceeds trigger
     * pattern recognition (default);
     */
    triggeredBy?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * ZoneName
     */
    zoneName: pulumi.Input<string>;
}
