// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SegmentRoutingTe extends pulumi.CustomResource {
    /**
     * Get an existing SegmentRoutingTe resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SegmentRoutingTeState, opts?: pulumi.CustomResourceOptions): SegmentRoutingTe {
        return new SegmentRoutingTe(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/segmentRoutingTe:SegmentRoutingTe';

    /**
     * Returns true if the given object is an instance of SegmentRoutingTe.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SegmentRoutingTe {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SegmentRoutingTe.__pulumiType;
    }

    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Enable logging for pcep peer status
     */
    public readonly loggingPcepPeerStatus!: pulumi.Output<boolean | undefined>;
    /**
     * Enable logging for policy status
     */
    public readonly loggingPolicyStatus!: pulumi.Output<boolean | undefined>;
    /**
     * On-demand color configuration
     */
    public readonly onDemandColors!: pulumi.Output<outputs.SegmentRoutingTeOnDemandColor[] | undefined>;
    /**
     * Amount of time after which the peer can declare this session down, if no PCEP message has been received - Range:
     * `1`-`255`
     */
    public readonly pccDeadTimer!: pulumi.Output<number | undefined>;
    /**
     * Maximum time delegated SR-TE policies can remain up without an active connection to a PCE - Range: `0`-`1576800000`
     */
    public readonly pccDelegationTimeout!: pulumi.Output<number | undefined>;
    /**
     * Amount of time that PCE initiated policy remains delegated to a peer that has gone down - Range: `0`-`180`
     */
    public readonly pccInitiatedOrphan!: pulumi.Output<number | undefined>;
    /**
     * Amount of time that PCE initiated policy can exist as an orphan before it is cleaned up - Range: `0`-`86400`
     */
    public readonly pccInitiatedState!: pulumi.Output<number | undefined>;
    /**
     * Report all local SR policies to connected PCEP peers
     */
    public readonly pccReportAll!: pulumi.Output<boolean | undefined>;
    /**
     * Local source IP address to use on PCEP sessions
     */
    public readonly pccSourceAddress!: pulumi.Output<string | undefined>;
    /**
     * PCE peer
     */
    public readonly pcePeers!: pulumi.Output<outputs.SegmentRoutingTePcePeer[] | undefined>;
    /**
     * Policy configuration
     */
    public readonly policies!: pulumi.Output<outputs.SegmentRoutingTePolicy[] | undefined>;

    /**
     * Create a SegmentRoutingTe resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SegmentRoutingTeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SegmentRoutingTeArgs | SegmentRoutingTeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SegmentRoutingTeState | undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["loggingPcepPeerStatus"] = state ? state.loggingPcepPeerStatus : undefined;
            resourceInputs["loggingPolicyStatus"] = state ? state.loggingPolicyStatus : undefined;
            resourceInputs["onDemandColors"] = state ? state.onDemandColors : undefined;
            resourceInputs["pccDeadTimer"] = state ? state.pccDeadTimer : undefined;
            resourceInputs["pccDelegationTimeout"] = state ? state.pccDelegationTimeout : undefined;
            resourceInputs["pccInitiatedOrphan"] = state ? state.pccInitiatedOrphan : undefined;
            resourceInputs["pccInitiatedState"] = state ? state.pccInitiatedState : undefined;
            resourceInputs["pccReportAll"] = state ? state.pccReportAll : undefined;
            resourceInputs["pccSourceAddress"] = state ? state.pccSourceAddress : undefined;
            resourceInputs["pcePeers"] = state ? state.pcePeers : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
        } else {
            const args = argsOrState as SegmentRoutingTeArgs | undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["loggingPcepPeerStatus"] = args ? args.loggingPcepPeerStatus : undefined;
            resourceInputs["loggingPolicyStatus"] = args ? args.loggingPolicyStatus : undefined;
            resourceInputs["onDemandColors"] = args ? args.onDemandColors : undefined;
            resourceInputs["pccDeadTimer"] = args ? args.pccDeadTimer : undefined;
            resourceInputs["pccDelegationTimeout"] = args ? args.pccDelegationTimeout : undefined;
            resourceInputs["pccInitiatedOrphan"] = args ? args.pccInitiatedOrphan : undefined;
            resourceInputs["pccInitiatedState"] = args ? args.pccInitiatedState : undefined;
            resourceInputs["pccReportAll"] = args ? args.pccReportAll : undefined;
            resourceInputs["pccSourceAddress"] = args ? args.pccSourceAddress : undefined;
            resourceInputs["pcePeers"] = args ? args.pcePeers : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SegmentRoutingTe.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SegmentRoutingTe resources.
 */
export interface SegmentRoutingTeState {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Enable logging for pcep peer status
     */
    loggingPcepPeerStatus?: pulumi.Input<boolean>;
    /**
     * Enable logging for policy status
     */
    loggingPolicyStatus?: pulumi.Input<boolean>;
    /**
     * On-demand color configuration
     */
    onDemandColors?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTeOnDemandColor>[]>;
    /**
     * Amount of time after which the peer can declare this session down, if no PCEP message has been received - Range:
     * `1`-`255`
     */
    pccDeadTimer?: pulumi.Input<number>;
    /**
     * Maximum time delegated SR-TE policies can remain up without an active connection to a PCE - Range: `0`-`1576800000`
     */
    pccDelegationTimeout?: pulumi.Input<number>;
    /**
     * Amount of time that PCE initiated policy remains delegated to a peer that has gone down - Range: `0`-`180`
     */
    pccInitiatedOrphan?: pulumi.Input<number>;
    /**
     * Amount of time that PCE initiated policy can exist as an orphan before it is cleaned up - Range: `0`-`86400`
     */
    pccInitiatedState?: pulumi.Input<number>;
    /**
     * Report all local SR policies to connected PCEP peers
     */
    pccReportAll?: pulumi.Input<boolean>;
    /**
     * Local source IP address to use on PCEP sessions
     */
    pccSourceAddress?: pulumi.Input<string>;
    /**
     * PCE peer
     */
    pcePeers?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTePcePeer>[]>;
    /**
     * Policy configuration
     */
    policies?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTePolicy>[]>;
}

/**
 * The set of arguments for constructing a SegmentRoutingTe resource.
 */
export interface SegmentRoutingTeArgs {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Enable logging for pcep peer status
     */
    loggingPcepPeerStatus?: pulumi.Input<boolean>;
    /**
     * Enable logging for policy status
     */
    loggingPolicyStatus?: pulumi.Input<boolean>;
    /**
     * On-demand color configuration
     */
    onDemandColors?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTeOnDemandColor>[]>;
    /**
     * Amount of time after which the peer can declare this session down, if no PCEP message has been received - Range:
     * `1`-`255`
     */
    pccDeadTimer?: pulumi.Input<number>;
    /**
     * Maximum time delegated SR-TE policies can remain up without an active connection to a PCE - Range: `0`-`1576800000`
     */
    pccDelegationTimeout?: pulumi.Input<number>;
    /**
     * Amount of time that PCE initiated policy remains delegated to a peer that has gone down - Range: `0`-`180`
     */
    pccInitiatedOrphan?: pulumi.Input<number>;
    /**
     * Amount of time that PCE initiated policy can exist as an orphan before it is cleaned up - Range: `0`-`86400`
     */
    pccInitiatedState?: pulumi.Input<number>;
    /**
     * Report all local SR policies to connected PCEP peers
     */
    pccReportAll?: pulumi.Input<boolean>;
    /**
     * Local source IP address to use on PCEP sessions
     */
    pccSourceAddress?: pulumi.Input<string>;
    /**
     * PCE peer
     */
    pcePeers?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTePcePeer>[]>;
    /**
     * Policy configuration
     */
    policies?: pulumi.Input<pulumi.Input<inputs.SegmentRoutingTePolicy>[]>;
}
