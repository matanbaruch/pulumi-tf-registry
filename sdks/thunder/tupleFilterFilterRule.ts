// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TupleFilterFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing TupleFilterFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TupleFilterFilterRuleState, opts?: pulumi.CustomResourceOptions): TupleFilterFilterRule {
        return new TupleFilterFilterRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/tupleFilterFilterRule:TupleFilterFilterRule';

    /**
     * Returns true if the given object is an instance of TupleFilterFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TupleFilterFilterRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TupleFilterFilterRule.__pulumiType;
    }

    /**
     * Destination IPv4 address with prefix
     */
    public readonly dstAddr!: pulumi.Output<string | undefined>;
    /**
     * Destination port
     */
    public readonly dstPort!: pulumi.Output<number | undefined>;
    /**
     * Destination IPv6 address with prefix
     */
    public readonly dstV6Addr!: pulumi.Output<string | undefined>;
    /**
     * Destination port
     */
    public readonly dstV6Port!: pulumi.Output<number | undefined>;
    /**
     * filter rule id
     */
    public readonly id1!: pulumi.Output<number>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Source IPv4 address with prefix
     */
    public readonly srcAddr!: pulumi.Output<string | undefined>;
    /**
     * Source port
     */
    public readonly srcPort!: pulumi.Output<number | undefined>;
    /**
     * Source IPv6 address with prefix
     */
    public readonly srcV6Addr!: pulumi.Output<string | undefined>;
    /**
     * Source port
     */
    public readonly srcV6Port!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a TupleFilterFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TupleFilterFilterRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TupleFilterFilterRuleArgs | TupleFilterFilterRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TupleFilterFilterRuleState | undefined;
            resourceInputs["dstAddr"] = state ? state.dstAddr : undefined;
            resourceInputs["dstPort"] = state ? state.dstPort : undefined;
            resourceInputs["dstV6Addr"] = state ? state.dstV6Addr : undefined;
            resourceInputs["dstV6Port"] = state ? state.dstV6Port : undefined;
            resourceInputs["id1"] = state ? state.id1 : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["srcAddr"] = state ? state.srcAddr : undefined;
            resourceInputs["srcPort"] = state ? state.srcPort : undefined;
            resourceInputs["srcV6Addr"] = state ? state.srcV6Addr : undefined;
            resourceInputs["srcV6Port"] = state ? state.srcV6Port : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as TupleFilterFilterRuleArgs | undefined;
            if ((!args || args.id1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'id1'");
            }
            resourceInputs["dstAddr"] = args ? args.dstAddr : undefined;
            resourceInputs["dstPort"] = args ? args.dstPort : undefined;
            resourceInputs["dstV6Addr"] = args ? args.dstV6Addr : undefined;
            resourceInputs["dstV6Port"] = args ? args.dstV6Port : undefined;
            resourceInputs["id1"] = args ? args.id1 : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["srcAddr"] = args ? args.srcAddr : undefined;
            resourceInputs["srcPort"] = args ? args.srcPort : undefined;
            resourceInputs["srcV6Addr"] = args ? args.srcV6Addr : undefined;
            resourceInputs["srcV6Port"] = args ? args.srcV6Port : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TupleFilterFilterRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TupleFilterFilterRule resources.
 */
export interface TupleFilterFilterRuleState {
    /**
     * Destination IPv4 address with prefix
     */
    dstAddr?: pulumi.Input<string>;
    /**
     * Destination port
     */
    dstPort?: pulumi.Input<number>;
    /**
     * Destination IPv6 address with prefix
     */
    dstV6Addr?: pulumi.Input<string>;
    /**
     * Destination port
     */
    dstV6Port?: pulumi.Input<number>;
    /**
     * filter rule id
     */
    id1?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Source IPv4 address with prefix
     */
    srcAddr?: pulumi.Input<string>;
    /**
     * Source port
     */
    srcPort?: pulumi.Input<number>;
    /**
     * Source IPv6 address with prefix
     */
    srcV6Addr?: pulumi.Input<string>;
    /**
     * Source port
     */
    srcV6Port?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TupleFilterFilterRule resource.
 */
export interface TupleFilterFilterRuleArgs {
    /**
     * Destination IPv4 address with prefix
     */
    dstAddr?: pulumi.Input<string>;
    /**
     * Destination port
     */
    dstPort?: pulumi.Input<number>;
    /**
     * Destination IPv6 address with prefix
     */
    dstV6Addr?: pulumi.Input<string>;
    /**
     * Destination port
     */
    dstV6Port?: pulumi.Input<number>;
    /**
     * filter rule id
     */
    id1: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Source IPv4 address with prefix
     */
    srcAddr?: pulumi.Input<string>;
    /**
     * Source port
     */
    srcPort?: pulumi.Input<number>;
    /**
     * Source IPv6 address with prefix
     */
    srcV6Addr?: pulumi.Input<string>;
    /**
     * Source port
     */
    srcV6Port?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
