// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate.__pulumiType;
    }

    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Destination MAC Address zero Drop
     */
    public readonly soPktsL2redirectDestMacZeroDrop!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L2redirect Intf is not UP
     */
    public readonly soPktsL2redirectInterfaceNotUp!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Redirect Table Error due to invalid redirect info
     */
    public readonly soPktsL2redirectInvalidRedirectInf!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt port not retrieved
     */
    public readonly soPktsL2redirectPortRetrievalError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt vlan not retrieved
     */
    public readonly soPktsL2redirectVlanRetrievalError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 Redirect RX multi-slot Destination MAC Error
     */
    public readonly soPktsL3RedirectChassisDestMacEr!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 Redirect encap error drop during transmission
     */
    public readonly soPktsL3RedirectEncapErrorDrop!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 redirect encap Fragmentation error
     */
    public readonly soPktsL3RedirectFragmentationError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 Redirect inner mac zero drop during transmission
     */
    public readonly soPktsL3RedirectInnerMacZeroDrop!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 Redirect Invalid Device direction during transmission
     */
    public readonly soPktsL3RedirectInvalidDevDir!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 Redirect Table error Drop
     */
    public readonly soPktsL3RedirectTableError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for L3 redirect Table no redirect entry found error
     */
    public readonly soPktsL3RedirectTableNoEntryFoun!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total SLB NAT release failures
     */
    public readonly soPktsSlbNatReleaseFail!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total SLB NAT reserve failures
     */
    public readonly soPktsSlbNatReserveFail!: pulumi.Output<number | undefined>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateState | undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["soPktsL2redirectDestMacZeroDrop"] = state ? state.soPktsL2redirectDestMacZeroDrop : undefined;
            resourceInputs["soPktsL2redirectInterfaceNotUp"] = state ? state.soPktsL2redirectInterfaceNotUp : undefined;
            resourceInputs["soPktsL2redirectInvalidRedirectInf"] = state ? state.soPktsL2redirectInvalidRedirectInf : undefined;
            resourceInputs["soPktsL2redirectPortRetrievalError"] = state ? state.soPktsL2redirectPortRetrievalError : undefined;
            resourceInputs["soPktsL2redirectVlanRetrievalError"] = state ? state.soPktsL2redirectVlanRetrievalError : undefined;
            resourceInputs["soPktsL3RedirectChassisDestMacEr"] = state ? state.soPktsL3RedirectChassisDestMacEr : undefined;
            resourceInputs["soPktsL3RedirectEncapErrorDrop"] = state ? state.soPktsL3RedirectEncapErrorDrop : undefined;
            resourceInputs["soPktsL3RedirectFragmentationError"] = state ? state.soPktsL3RedirectFragmentationError : undefined;
            resourceInputs["soPktsL3RedirectInnerMacZeroDrop"] = state ? state.soPktsL3RedirectInnerMacZeroDrop : undefined;
            resourceInputs["soPktsL3RedirectInvalidDevDir"] = state ? state.soPktsL3RedirectInvalidDevDir : undefined;
            resourceInputs["soPktsL3RedirectTableError"] = state ? state.soPktsL3RedirectTableError : undefined;
            resourceInputs["soPktsL3RedirectTableNoEntryFoun"] = state ? state.soPktsL3RedirectTableNoEntryFoun : undefined;
            resourceInputs["soPktsSlbNatReleaseFail"] = state ? state.soPktsSlbNatReleaseFail : undefined;
            resourceInputs["soPktsSlbNatReserveFail"] = state ? state.soPktsSlbNatReserveFail : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateArgs | undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["soPktsL2redirectDestMacZeroDrop"] = args ? args.soPktsL2redirectDestMacZeroDrop : undefined;
            resourceInputs["soPktsL2redirectInterfaceNotUp"] = args ? args.soPktsL2redirectInterfaceNotUp : undefined;
            resourceInputs["soPktsL2redirectInvalidRedirectInf"] = args ? args.soPktsL2redirectInvalidRedirectInf : undefined;
            resourceInputs["soPktsL2redirectPortRetrievalError"] = args ? args.soPktsL2redirectPortRetrievalError : undefined;
            resourceInputs["soPktsL2redirectVlanRetrievalError"] = args ? args.soPktsL2redirectVlanRetrievalError : undefined;
            resourceInputs["soPktsL3RedirectChassisDestMacEr"] = args ? args.soPktsL3RedirectChassisDestMacEr : undefined;
            resourceInputs["soPktsL3RedirectEncapErrorDrop"] = args ? args.soPktsL3RedirectEncapErrorDrop : undefined;
            resourceInputs["soPktsL3RedirectFragmentationError"] = args ? args.soPktsL3RedirectFragmentationError : undefined;
            resourceInputs["soPktsL3RedirectInnerMacZeroDrop"] = args ? args.soPktsL3RedirectInnerMacZeroDrop : undefined;
            resourceInputs["soPktsL3RedirectInvalidDevDir"] = args ? args.soPktsL3RedirectInvalidDevDir : undefined;
            resourceInputs["soPktsL3RedirectTableError"] = args ? args.soPktsL3RedirectTableError : undefined;
            resourceInputs["soPktsL3RedirectTableNoEntryFoun"] = args ? args.soPktsL3RedirectTableNoEntryFoun : undefined;
            resourceInputs["soPktsSlbNatReleaseFail"] = args ? args.soPktsSlbNatReleaseFail : undefined;
            resourceInputs["soPktsSlbNatReserveFail"] = args ? args.soPktsSlbNatReserveFail : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateState {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Destination MAC Address zero Drop
     */
    soPktsL2redirectDestMacZeroDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2redirect Intf is not UP
     */
    soPktsL2redirectInterfaceNotUp?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Redirect Table Error due to invalid redirect info
     */
    soPktsL2redirectInvalidRedirectInf?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt port not retrieved
     */
    soPktsL2redirectPortRetrievalError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt vlan not retrieved
     */
    soPktsL2redirectVlanRetrievalError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect RX multi-slot Destination MAC Error
     */
    soPktsL3RedirectChassisDestMacEr?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect encap error drop during transmission
     */
    soPktsL3RedirectEncapErrorDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 redirect encap Fragmentation error
     */
    soPktsL3RedirectFragmentationError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect inner mac zero drop during transmission
     */
    soPktsL3RedirectInnerMacZeroDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect Invalid Device direction during transmission
     */
    soPktsL3RedirectInvalidDevDir?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect Table error Drop
     */
    soPktsL3RedirectTableError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 redirect Table no redirect entry found error
     */
    soPktsL3RedirectTableNoEntryFoun?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total SLB NAT release failures
     */
    soPktsSlbNatReleaseFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total SLB NAT reserve failures
     */
    soPktsSlbNatReserveFail?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsRateArgs {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Destination MAC Address zero Drop
     */
    soPktsL2redirectDestMacZeroDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2redirect Intf is not UP
     */
    soPktsL2redirectInterfaceNotUp?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Redirect Table Error due to invalid redirect info
     */
    soPktsL2redirectInvalidRedirectInf?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt port not retrieved
     */
    soPktsL2redirectPortRetrievalError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L2 redirect pkt vlan not retrieved
     */
    soPktsL2redirectVlanRetrievalError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect RX multi-slot Destination MAC Error
     */
    soPktsL3RedirectChassisDestMacEr?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect encap error drop during transmission
     */
    soPktsL3RedirectEncapErrorDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 redirect encap Fragmentation error
     */
    soPktsL3RedirectFragmentationError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect inner mac zero drop during transmission
     */
    soPktsL3RedirectInnerMacZeroDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect Invalid Device direction during transmission
     */
    soPktsL3RedirectInvalidDevDir?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 Redirect Table error Drop
     */
    soPktsL3RedirectTableError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for L3 redirect Table no redirect entry found error
     */
    soPktsL3RedirectTableNoEntryFoun?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total SLB NAT release failures
     */
    soPktsSlbNatReleaseFail?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total SLB NAT reserve failures
     */
    soPktsSlbNatReserveFail?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
