// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BgpNeighbor extends pulumi.CustomResource {
    /**
     * Get an existing BgpNeighbor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpNeighborState, opts?: pulumi.CustomResourceOptions): BgpNeighbor {
        return new BgpNeighbor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxe:index/bgpNeighbor:BgpNeighbor';

    /**
     * Returns true if the given object is an instance of BgpNeighbor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpNeighbor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpNeighbor.__pulumiType;
    }

    public readonly asn!: pulumi.Output<string>;
    public readonly clusterId!: pulumi.Output<string | undefined>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * Neighbor specific description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * one-hop away EBGP peer using loopback address
     */
    public readonly disableConnectedCheck!: pulumi.Output<boolean | undefined>;
    /**
     * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
     */
    public readonly ebgpMultihop!: pulumi.Output<boolean | undefined>;
    /**
     * - Range: `2`-`255`
     */
    public readonly ebgpMultihopMaxHop!: pulumi.Output<number | undefined>;
    /**
     * Use BFD to detect failure
     */
    public readonly fallOverBfd!: pulumi.Output<boolean | undefined>;
    /**
     * Retrieve control plane dependent failure info from BFD for BGP GR/NSR operation
     */
    public readonly fallOverBfdCheckControlPlaneFailure!: pulumi.Output<boolean | undefined>;
    /**
     * Force BFD multi-hop to detect failure
     */
    public readonly fallOverBfdMultiHop!: pulumi.Output<boolean | undefined>;
    /**
     * Force BFD single-hop to detect failure
     */
    public readonly fallOverBfdSingleHop!: pulumi.Output<boolean | undefined>;
    /**
     * Enable BFD strict-mode
     */
    public readonly fallOverBfdStrictMode!: pulumi.Output<boolean | undefined>;
    public readonly fallOverDefaultEnable!: pulumi.Output<boolean | undefined>;
    public readonly fallOverDefaultRouteMap!: pulumi.Output<string | undefined>;
    public readonly fallOverMaximumMetricRouteMap!: pulumi.Output<string | undefined>;
    public readonly ip!: pulumi.Output<string>;
    public readonly localAs!: pulumi.Output<string | undefined>;
    /**
     * Accept either real AS or local AS from the ebgp peer
     */
    public readonly localAsDualAs!: pulumi.Output<boolean | undefined>;
    /**
     * Do not prepend local-as to updates from ebgp peers
     */
    public readonly localAsNoPrepend!: pulumi.Output<boolean | undefined>;
    /**
     * Replace real AS with local AS in the EBGP updates
     */
    public readonly localAsReplaceAs!: pulumi.Output<boolean | undefined>;
    /**
     * Log neighbor up/down and reset reason
     */
    public readonly logNeighborChanges!: pulumi.Output<boolean | undefined>;
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Encryption type (0 to disable encryption, 7 for proprietary) - Range: `0`-`7`
     */
    public readonly passwordType!: pulumi.Output<number | undefined>;
    /**
     * Specify a BGP peer-group remote-as
     */
    public readonly remoteAs!: pulumi.Output<string | undefined>;
    /**
     * Administratively shut down this neighbor
     */
    public readonly shutdown!: pulumi.Output<boolean | undefined>;
    /**
     * - Range: `0`-`65535`
     */
    public readonly timersHoldtime!: pulumi.Output<number | undefined>;
    /**
     * - Range: `0`-`65535`
     */
    public readonly timersKeepaliveInterval!: pulumi.Output<number | undefined>;
    /**
     * - Range: `0`-`65535`
     */
    public readonly timersMinimumNeighborHold!: pulumi.Output<number | undefined>;
    /**
     * IP hops - Range: `1`-`254`
     */
    public readonly ttlSecurityHops!: pulumi.Output<number | undefined>;
    /**
     * Loopback interface
     */
    public readonly updateSourceLoopback!: pulumi.Output<string | undefined>;
    /**
     * Set the BGP version to match a neighbor - Range: `4`-`4`
     */
    public readonly version!: pulumi.Output<number | undefined>;

    /**
     * Create a BgpNeighbor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpNeighborArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpNeighborArgs | BgpNeighborState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpNeighborState | undefined;
            resourceInputs["asn"] = state ? state.asn : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["disableConnectedCheck"] = state ? state.disableConnectedCheck : undefined;
            resourceInputs["ebgpMultihop"] = state ? state.ebgpMultihop : undefined;
            resourceInputs["ebgpMultihopMaxHop"] = state ? state.ebgpMultihopMaxHop : undefined;
            resourceInputs["fallOverBfd"] = state ? state.fallOverBfd : undefined;
            resourceInputs["fallOverBfdCheckControlPlaneFailure"] = state ? state.fallOverBfdCheckControlPlaneFailure : undefined;
            resourceInputs["fallOverBfdMultiHop"] = state ? state.fallOverBfdMultiHop : undefined;
            resourceInputs["fallOverBfdSingleHop"] = state ? state.fallOverBfdSingleHop : undefined;
            resourceInputs["fallOverBfdStrictMode"] = state ? state.fallOverBfdStrictMode : undefined;
            resourceInputs["fallOverDefaultEnable"] = state ? state.fallOverDefaultEnable : undefined;
            resourceInputs["fallOverDefaultRouteMap"] = state ? state.fallOverDefaultRouteMap : undefined;
            resourceInputs["fallOverMaximumMetricRouteMap"] = state ? state.fallOverMaximumMetricRouteMap : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["localAs"] = state ? state.localAs : undefined;
            resourceInputs["localAsDualAs"] = state ? state.localAsDualAs : undefined;
            resourceInputs["localAsNoPrepend"] = state ? state.localAsNoPrepend : undefined;
            resourceInputs["localAsReplaceAs"] = state ? state.localAsReplaceAs : undefined;
            resourceInputs["logNeighborChanges"] = state ? state.logNeighborChanges : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordType"] = state ? state.passwordType : undefined;
            resourceInputs["remoteAs"] = state ? state.remoteAs : undefined;
            resourceInputs["shutdown"] = state ? state.shutdown : undefined;
            resourceInputs["timersHoldtime"] = state ? state.timersHoldtime : undefined;
            resourceInputs["timersKeepaliveInterval"] = state ? state.timersKeepaliveInterval : undefined;
            resourceInputs["timersMinimumNeighborHold"] = state ? state.timersMinimumNeighborHold : undefined;
            resourceInputs["ttlSecurityHops"] = state ? state.ttlSecurityHops : undefined;
            resourceInputs["updateSourceLoopback"] = state ? state.updateSourceLoopback : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as BgpNeighborArgs | undefined;
            if ((!args || args.asn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'asn'");
            }
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            resourceInputs["asn"] = args ? args.asn : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["disableConnectedCheck"] = args ? args.disableConnectedCheck : undefined;
            resourceInputs["ebgpMultihop"] = args ? args.ebgpMultihop : undefined;
            resourceInputs["ebgpMultihopMaxHop"] = args ? args.ebgpMultihopMaxHop : undefined;
            resourceInputs["fallOverBfd"] = args ? args.fallOverBfd : undefined;
            resourceInputs["fallOverBfdCheckControlPlaneFailure"] = args ? args.fallOverBfdCheckControlPlaneFailure : undefined;
            resourceInputs["fallOverBfdMultiHop"] = args ? args.fallOverBfdMultiHop : undefined;
            resourceInputs["fallOverBfdSingleHop"] = args ? args.fallOverBfdSingleHop : undefined;
            resourceInputs["fallOverBfdStrictMode"] = args ? args.fallOverBfdStrictMode : undefined;
            resourceInputs["fallOverDefaultEnable"] = args ? args.fallOverDefaultEnable : undefined;
            resourceInputs["fallOverDefaultRouteMap"] = args ? args.fallOverDefaultRouteMap : undefined;
            resourceInputs["fallOverMaximumMetricRouteMap"] = args ? args.fallOverMaximumMetricRouteMap : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["localAs"] = args ? args.localAs : undefined;
            resourceInputs["localAsDualAs"] = args ? args.localAsDualAs : undefined;
            resourceInputs["localAsNoPrepend"] = args ? args.localAsNoPrepend : undefined;
            resourceInputs["localAsReplaceAs"] = args ? args.localAsReplaceAs : undefined;
            resourceInputs["logNeighborChanges"] = args ? args.logNeighborChanges : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["passwordType"] = args ? args.passwordType : undefined;
            resourceInputs["remoteAs"] = args ? args.remoteAs : undefined;
            resourceInputs["shutdown"] = args ? args.shutdown : undefined;
            resourceInputs["timersHoldtime"] = args ? args.timersHoldtime : undefined;
            resourceInputs["timersKeepaliveInterval"] = args ? args.timersKeepaliveInterval : undefined;
            resourceInputs["timersMinimumNeighborHold"] = args ? args.timersMinimumNeighborHold : undefined;
            resourceInputs["ttlSecurityHops"] = args ? args.ttlSecurityHops : undefined;
            resourceInputs["updateSourceLoopback"] = args ? args.updateSourceLoopback : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BgpNeighbor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BgpNeighbor resources.
 */
export interface BgpNeighborState {
    asn?: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * Neighbor specific description
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * one-hop away EBGP peer using loopback address
     */
    disableConnectedCheck?: pulumi.Input<boolean>;
    /**
     * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
     */
    ebgpMultihop?: pulumi.Input<boolean>;
    /**
     * - Range: `2`-`255`
     */
    ebgpMultihopMaxHop?: pulumi.Input<number>;
    /**
     * Use BFD to detect failure
     */
    fallOverBfd?: pulumi.Input<boolean>;
    /**
     * Retrieve control plane dependent failure info from BFD for BGP GR/NSR operation
     */
    fallOverBfdCheckControlPlaneFailure?: pulumi.Input<boolean>;
    /**
     * Force BFD multi-hop to detect failure
     */
    fallOverBfdMultiHop?: pulumi.Input<boolean>;
    /**
     * Force BFD single-hop to detect failure
     */
    fallOverBfdSingleHop?: pulumi.Input<boolean>;
    /**
     * Enable BFD strict-mode
     */
    fallOverBfdStrictMode?: pulumi.Input<boolean>;
    fallOverDefaultEnable?: pulumi.Input<boolean>;
    fallOverDefaultRouteMap?: pulumi.Input<string>;
    fallOverMaximumMetricRouteMap?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    localAs?: pulumi.Input<string>;
    /**
     * Accept either real AS or local AS from the ebgp peer
     */
    localAsDualAs?: pulumi.Input<boolean>;
    /**
     * Do not prepend local-as to updates from ebgp peers
     */
    localAsNoPrepend?: pulumi.Input<boolean>;
    /**
     * Replace real AS with local AS in the EBGP updates
     */
    localAsReplaceAs?: pulumi.Input<boolean>;
    /**
     * Log neighbor up/down and reset reason
     */
    logNeighborChanges?: pulumi.Input<boolean>;
    password?: pulumi.Input<string>;
    /**
     * Encryption type (0 to disable encryption, 7 for proprietary) - Range: `0`-`7`
     */
    passwordType?: pulumi.Input<number>;
    /**
     * Specify a BGP peer-group remote-as
     */
    remoteAs?: pulumi.Input<string>;
    /**
     * Administratively shut down this neighbor
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * - Range: `0`-`65535`
     */
    timersHoldtime?: pulumi.Input<number>;
    /**
     * - Range: `0`-`65535`
     */
    timersKeepaliveInterval?: pulumi.Input<number>;
    /**
     * - Range: `0`-`65535`
     */
    timersMinimumNeighborHold?: pulumi.Input<number>;
    /**
     * IP hops - Range: `1`-`254`
     */
    ttlSecurityHops?: pulumi.Input<number>;
    /**
     * Loopback interface
     */
    updateSourceLoopback?: pulumi.Input<string>;
    /**
     * Set the BGP version to match a neighbor - Range: `4`-`4`
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a BgpNeighbor resource.
 */
export interface BgpNeighborArgs {
    asn: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * Neighbor specific description
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * one-hop away EBGP peer using loopback address
     */
    disableConnectedCheck?: pulumi.Input<boolean>;
    /**
     * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
     */
    ebgpMultihop?: pulumi.Input<boolean>;
    /**
     * - Range: `2`-`255`
     */
    ebgpMultihopMaxHop?: pulumi.Input<number>;
    /**
     * Use BFD to detect failure
     */
    fallOverBfd?: pulumi.Input<boolean>;
    /**
     * Retrieve control plane dependent failure info from BFD for BGP GR/NSR operation
     */
    fallOverBfdCheckControlPlaneFailure?: pulumi.Input<boolean>;
    /**
     * Force BFD multi-hop to detect failure
     */
    fallOverBfdMultiHop?: pulumi.Input<boolean>;
    /**
     * Force BFD single-hop to detect failure
     */
    fallOverBfdSingleHop?: pulumi.Input<boolean>;
    /**
     * Enable BFD strict-mode
     */
    fallOverBfdStrictMode?: pulumi.Input<boolean>;
    fallOverDefaultEnable?: pulumi.Input<boolean>;
    fallOverDefaultRouteMap?: pulumi.Input<string>;
    fallOverMaximumMetricRouteMap?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    localAs?: pulumi.Input<string>;
    /**
     * Accept either real AS or local AS from the ebgp peer
     */
    localAsDualAs?: pulumi.Input<boolean>;
    /**
     * Do not prepend local-as to updates from ebgp peers
     */
    localAsNoPrepend?: pulumi.Input<boolean>;
    /**
     * Replace real AS with local AS in the EBGP updates
     */
    localAsReplaceAs?: pulumi.Input<boolean>;
    /**
     * Log neighbor up/down and reset reason
     */
    logNeighborChanges?: pulumi.Input<boolean>;
    password?: pulumi.Input<string>;
    /**
     * Encryption type (0 to disable encryption, 7 for proprietary) - Range: `0`-`7`
     */
    passwordType?: pulumi.Input<number>;
    /**
     * Specify a BGP peer-group remote-as
     */
    remoteAs?: pulumi.Input<string>;
    /**
     * Administratively shut down this neighbor
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * - Range: `0`-`65535`
     */
    timersHoldtime?: pulumi.Input<number>;
    /**
     * - Range: `0`-`65535`
     */
    timersKeepaliveInterval?: pulumi.Input<number>;
    /**
     * - Range: `0`-`65535`
     */
    timersMinimumNeighborHold?: pulumi.Input<number>;
    /**
     * IP hops - Range: `1`-`254`
     */
    ttlSecurityHops?: pulumi.Input<number>;
    /**
     * Loopback interface
     */
    updateSourceLoopback?: pulumi.Input<string>;
    /**
     * Set the BGP version to match a neighbor - Range: `4`-`4`
     */
    version?: pulumi.Input<number>;
}
