// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Bgp extends pulumi.CustomResource {
    /**
     * Get an existing Bgp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpState, opts?: pulumi.CustomResourceOptions): Bgp {
        return new Bgp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxe:index/bgp:Bgp';

    /**
     * Returns true if the given object is an instance of Bgp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bgp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bgp.__pulumiType;
    }

    public readonly asn!: pulumi.Output<string>;
    /**
     * Activate ipv4-unicast for a peer by default
     */
    public readonly defaultIpv4Unicast!: pulumi.Output<boolean | undefined>;
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
     * Log neighbor up/down and reset reason
     */
    public readonly logNeighborChanges!: pulumi.Output<boolean | undefined>;
    /**
     * Loopback interface - Range: `0`-`2147483647`
     */
    public readonly routerIdLoopback!: pulumi.Output<number | undefined>;

    /**
     * Create a Bgp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpArgs | BgpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpState | undefined;
            resourceInputs["asn"] = state ? state.asn : undefined;
            resourceInputs["defaultIpv4Unicast"] = state ? state.defaultIpv4Unicast : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["logNeighborChanges"] = state ? state.logNeighborChanges : undefined;
            resourceInputs["routerIdLoopback"] = state ? state.routerIdLoopback : undefined;
        } else {
            const args = argsOrState as BgpArgs | undefined;
            if ((!args || args.asn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'asn'");
            }
            resourceInputs["asn"] = args ? args.asn : undefined;
            resourceInputs["defaultIpv4Unicast"] = args ? args.defaultIpv4Unicast : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["logNeighborChanges"] = args ? args.logNeighborChanges : undefined;
            resourceInputs["routerIdLoopback"] = args ? args.routerIdLoopback : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bgp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Bgp resources.
 */
export interface BgpState {
    asn?: pulumi.Input<string>;
    /**
     * Activate ipv4-unicast for a peer by default
     */
    defaultIpv4Unicast?: pulumi.Input<boolean>;
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
     * Log neighbor up/down and reset reason
     */
    logNeighborChanges?: pulumi.Input<boolean>;
    /**
     * Loopback interface - Range: `0`-`2147483647`
     */
    routerIdLoopback?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Bgp resource.
 */
export interface BgpArgs {
    asn: pulumi.Input<string>;
    /**
     * Activate ipv4-unicast for a peer by default
     */
    defaultIpv4Unicast?: pulumi.Input<boolean>;
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
     * Log neighbor up/down and reset reason
     */
    logNeighborChanges?: pulumi.Input<boolean>;
    /**
     * Loopback interface - Range: `0`-`2147483647`
     */
    routerIdLoopback?: pulumi.Input<number>;
}
