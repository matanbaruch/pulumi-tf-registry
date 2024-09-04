// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for ADC Port Allocation Failed
     */
    public readonly adcPortAllocationFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Data Session User-Quota Exceeded
     */
    public readonly dataSesnUserQuotaExceeded!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
     */
    public readonly fullconeExtMemAllocFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
     */
    public readonly fullconeExtMemAllocInitFaulure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Full-cone Session Creation Failed
     */
    public readonly fullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Self-Hairpinning Drop
     */
    public readonly fullconeSelfHairpinningDrop!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    public readonly h323AlgAllocSinglePortFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
     */
    public readonly h323AlgCreateRtcpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
     */
    public readonly h323AlgCreateRtpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    public readonly h323AlgCreateSingleFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
     */
    public readonly haNatPoolBatchTypeMismatch!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Unusable
     */
    public readonly haNatPoolUnusable!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
     */
    public readonly mgcpAlgCreateRtcpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
     */
    public readonly mgcpAlgCreateRtpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
     */
    public readonly mgcpAlgPortPairAllocFromQuotaPar!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for NAT Pool Unusable
     */
    public readonly natPoolUnusable!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Port Overloading Inc Overflow
     */
    public readonly portOverloadingIncOverflow!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Port Overloading Out of Memory
     */
    public readonly portOverloadingOutOfMemory!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
     */
    public readonly sipAlgAllocRtpRtcpPortFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    public readonly sipAlgAllocSinglePortFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
     */
    public readonly sipAlgCreateRtcpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
     */
    public readonly sipAlgCreateRtpFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    public readonly sipAlgCreateSingleFullconeFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
     */
    public readonly sipAlgQuotaIncFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for User-Quota Creation Failed
     */
    public readonly userQuotaFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for User-Quota Marked Unusable
     */
    public readonly userQuotaUnusable!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for User-Quota Unusable Drop
     */
    public readonly userQuotaUnusableDrop!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncState | undefined;
            resourceInputs["adcPortAllocationFailed"] = state ? state.adcPortAllocationFailed : undefined;
            resourceInputs["dataSesnUserQuotaExceeded"] = state ? state.dataSesnUserQuotaExceeded : undefined;
            resourceInputs["fullconeExtMemAllocFailure"] = state ? state.fullconeExtMemAllocFailure : undefined;
            resourceInputs["fullconeExtMemAllocInitFaulure"] = state ? state.fullconeExtMemAllocInitFaulure : undefined;
            resourceInputs["fullconeFailure"] = state ? state.fullconeFailure : undefined;
            resourceInputs["fullconeSelfHairpinningDrop"] = state ? state.fullconeSelfHairpinningDrop : undefined;
            resourceInputs["h323AlgAllocSinglePortFailure"] = state ? state.h323AlgAllocSinglePortFailure : undefined;
            resourceInputs["h323AlgCreateRtcpFullconeFailure"] = state ? state.h323AlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["h323AlgCreateRtpFullconeFailure"] = state ? state.h323AlgCreateRtpFullconeFailure : undefined;
            resourceInputs["h323AlgCreateSingleFullconeFailure"] = state ? state.h323AlgCreateSingleFullconeFailure : undefined;
            resourceInputs["haNatPoolBatchTypeMismatch"] = state ? state.haNatPoolBatchTypeMismatch : undefined;
            resourceInputs["haNatPoolUnusable"] = state ? state.haNatPoolUnusable : undefined;
            resourceInputs["mgcpAlgCreateRtcpFullconeFailure"] = state ? state.mgcpAlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["mgcpAlgCreateRtpFullconeFailure"] = state ? state.mgcpAlgCreateRtpFullconeFailure : undefined;
            resourceInputs["mgcpAlgPortPairAllocFromQuotaPar"] = state ? state.mgcpAlgPortPairAllocFromQuotaPar : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natPoolUnusable"] = state ? state.natPoolUnusable : undefined;
            resourceInputs["portOverloadingIncOverflow"] = state ? state.portOverloadingIncOverflow : undefined;
            resourceInputs["portOverloadingOutOfMemory"] = state ? state.portOverloadingOutOfMemory : undefined;
            resourceInputs["sipAlgAllocRtpRtcpPortFailure"] = state ? state.sipAlgAllocRtpRtcpPortFailure : undefined;
            resourceInputs["sipAlgAllocSinglePortFailure"] = state ? state.sipAlgAllocSinglePortFailure : undefined;
            resourceInputs["sipAlgCreateRtcpFullconeFailure"] = state ? state.sipAlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["sipAlgCreateRtpFullconeFailure"] = state ? state.sipAlgCreateRtpFullconeFailure : undefined;
            resourceInputs["sipAlgCreateSingleFullconeFailure"] = state ? state.sipAlgCreateSingleFullconeFailure : undefined;
            resourceInputs["sipAlgQuotaIncFailure"] = state ? state.sipAlgQuotaIncFailure : undefined;
            resourceInputs["userQuotaFailure"] = state ? state.userQuotaFailure : undefined;
            resourceInputs["userQuotaUnusable"] = state ? state.userQuotaUnusable : undefined;
            resourceInputs["userQuotaUnusableDrop"] = state ? state.userQuotaUnusableDrop : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncArgs | undefined;
            resourceInputs["adcPortAllocationFailed"] = args ? args.adcPortAllocationFailed : undefined;
            resourceInputs["dataSesnUserQuotaExceeded"] = args ? args.dataSesnUserQuotaExceeded : undefined;
            resourceInputs["fullconeExtMemAllocFailure"] = args ? args.fullconeExtMemAllocFailure : undefined;
            resourceInputs["fullconeExtMemAllocInitFaulure"] = args ? args.fullconeExtMemAllocInitFaulure : undefined;
            resourceInputs["fullconeFailure"] = args ? args.fullconeFailure : undefined;
            resourceInputs["fullconeSelfHairpinningDrop"] = args ? args.fullconeSelfHairpinningDrop : undefined;
            resourceInputs["h323AlgAllocSinglePortFailure"] = args ? args.h323AlgAllocSinglePortFailure : undefined;
            resourceInputs["h323AlgCreateRtcpFullconeFailure"] = args ? args.h323AlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["h323AlgCreateRtpFullconeFailure"] = args ? args.h323AlgCreateRtpFullconeFailure : undefined;
            resourceInputs["h323AlgCreateSingleFullconeFailure"] = args ? args.h323AlgCreateSingleFullconeFailure : undefined;
            resourceInputs["haNatPoolBatchTypeMismatch"] = args ? args.haNatPoolBatchTypeMismatch : undefined;
            resourceInputs["haNatPoolUnusable"] = args ? args.haNatPoolUnusable : undefined;
            resourceInputs["mgcpAlgCreateRtcpFullconeFailure"] = args ? args.mgcpAlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["mgcpAlgCreateRtpFullconeFailure"] = args ? args.mgcpAlgCreateRtpFullconeFailure : undefined;
            resourceInputs["mgcpAlgPortPairAllocFromQuotaPar"] = args ? args.mgcpAlgPortPairAllocFromQuotaPar : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natPoolUnusable"] = args ? args.natPoolUnusable : undefined;
            resourceInputs["portOverloadingIncOverflow"] = args ? args.portOverloadingIncOverflow : undefined;
            resourceInputs["portOverloadingOutOfMemory"] = args ? args.portOverloadingOutOfMemory : undefined;
            resourceInputs["sipAlgAllocRtpRtcpPortFailure"] = args ? args.sipAlgAllocRtpRtcpPortFailure : undefined;
            resourceInputs["sipAlgAllocSinglePortFailure"] = args ? args.sipAlgAllocSinglePortFailure : undefined;
            resourceInputs["sipAlgCreateRtcpFullconeFailure"] = args ? args.sipAlgCreateRtcpFullconeFailure : undefined;
            resourceInputs["sipAlgCreateRtpFullconeFailure"] = args ? args.sipAlgCreateRtpFullconeFailure : undefined;
            resourceInputs["sipAlgCreateSingleFullconeFailure"] = args ? args.sipAlgCreateSingleFullconeFailure : undefined;
            resourceInputs["sipAlgQuotaIncFailure"] = args ? args.sipAlgQuotaIncFailure : undefined;
            resourceInputs["userQuotaFailure"] = args ? args.userQuotaFailure : undefined;
            resourceInputs["userQuotaUnusable"] = args ? args.userQuotaUnusable : undefined;
            resourceInputs["userQuotaUnusableDrop"] = args ? args.userQuotaUnusableDrop : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for ADC Port Allocation Failed
     */
    adcPortAllocationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Data Session User-Quota Exceeded
     */
    dataSesnUserQuotaExceeded?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
     */
    fullconeExtMemAllocFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
     */
    fullconeExtMemAllocInitFaulure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Full-cone Session Creation Failed
     */
    fullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Self-Hairpinning Drop
     */
    fullconeSelfHairpinningDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    h323AlgAllocSinglePortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
     */
    h323AlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
     */
    h323AlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    h323AlgCreateSingleFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
     */
    haNatPoolBatchTypeMismatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Unusable
     */
    haNatPoolUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
     */
    mgcpAlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
     */
    mgcpAlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
     */
    mgcpAlgPortPairAllocFromQuotaPar?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for NAT Pool Unusable
     */
    natPoolUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Port Overloading Inc Overflow
     */
    portOverloadingIncOverflow?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Port Overloading Out of Memory
     */
    portOverloadingOutOfMemory?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
     */
    sipAlgAllocRtpRtcpPortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    sipAlgAllocSinglePortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
     */
    sipAlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
     */
    sipAlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    sipAlgCreateSingleFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
     */
    sipAlgQuotaIncFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Creation Failed
     */
    userQuotaFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Marked Unusable
     */
    userQuotaUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Unusable Drop
     */
    userQuotaUnusableDrop?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for ADC Port Allocation Failed
     */
    adcPortAllocationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Data Session User-Quota Exceeded
     */
    dataSesnUserQuotaExceeded?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
     */
    fullconeExtMemAllocFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
     */
    fullconeExtMemAllocInitFaulure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Full-cone Session Creation Failed
     */
    fullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Self-Hairpinning Drop
     */
    fullconeSelfHairpinningDrop?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    h323AlgAllocSinglePortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
     */
    h323AlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
     */
    h323AlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    h323AlgCreateSingleFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
     */
    haNatPoolBatchTypeMismatch?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA NAT Pool Unusable
     */
    haNatPoolUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
     */
    mgcpAlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
     */
    mgcpAlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
     */
    mgcpAlgPortPairAllocFromQuotaPar?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for NAT Pool Unusable
     */
    natPoolUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Port Overloading Inc Overflow
     */
    portOverloadingIncOverflow?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Port Overloading Out of Memory
     */
    portOverloadingOutOfMemory?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
     */
    sipAlgAllocRtpRtcpPortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
     */
    sipAlgAllocSinglePortFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
     */
    sipAlgCreateRtcpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
     */
    sipAlgCreateRtpFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
     */
    sipAlgCreateSingleFullconeFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
     */
    sipAlgQuotaIncFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Creation Failed
     */
    userQuotaFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Marked Unusable
     */
    userQuotaUnusable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for User-Quota Unusable Drop
     */
    userQuotaUnusableDrop?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
