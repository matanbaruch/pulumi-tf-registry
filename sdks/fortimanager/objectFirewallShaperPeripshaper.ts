// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallShaperPeripshaper extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallShaperPeripshaper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallShaperPeripshaperState, opts?: pulumi.CustomResourceOptions): ObjectFirewallShaperPeripshaper {
        return new ObjectFirewallShaperPeripshaper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallShaperPeripshaper:ObjectFirewallShaperPeripshaper';

    /**
     * Returns true if the given object is an instance of ObjectFirewallShaperPeripshaper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallShaperPeripshaper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallShaperPeripshaper.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly bandwidthUnit!: pulumi.Output<string>;
    public readonly diffservForward!: pulumi.Output<string>;
    public readonly diffservReverse!: pulumi.Output<string>;
    public readonly diffservcodeForward!: pulumi.Output<string>;
    public readonly diffservcodeRev!: pulumi.Output<string | undefined>;
    public readonly maxBandwidth!: pulumi.Output<number | undefined>;
    public readonly maxConcurrentSession!: pulumi.Output<number | undefined>;
    public readonly maxConcurrentTcpSession!: pulumi.Output<number | undefined>;
    public readonly maxConcurrentUdpSession!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallShaperPeripshaper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallShaperPeripshaperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallShaperPeripshaperArgs | ObjectFirewallShaperPeripshaperState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallShaperPeripshaperState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["bandwidthUnit"] = state ? state.bandwidthUnit : undefined;
            resourceInputs["diffservForward"] = state ? state.diffservForward : undefined;
            resourceInputs["diffservReverse"] = state ? state.diffservReverse : undefined;
            resourceInputs["diffservcodeForward"] = state ? state.diffservcodeForward : undefined;
            resourceInputs["diffservcodeRev"] = state ? state.diffservcodeRev : undefined;
            resourceInputs["maxBandwidth"] = state ? state.maxBandwidth : undefined;
            resourceInputs["maxConcurrentSession"] = state ? state.maxConcurrentSession : undefined;
            resourceInputs["maxConcurrentTcpSession"] = state ? state.maxConcurrentTcpSession : undefined;
            resourceInputs["maxConcurrentUdpSession"] = state ? state.maxConcurrentUdpSession : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectFirewallShaperPeripshaperArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["bandwidthUnit"] = args ? args.bandwidthUnit : undefined;
            resourceInputs["diffservForward"] = args ? args.diffservForward : undefined;
            resourceInputs["diffservReverse"] = args ? args.diffservReverse : undefined;
            resourceInputs["diffservcodeForward"] = args ? args.diffservcodeForward : undefined;
            resourceInputs["diffservcodeRev"] = args ? args.diffservcodeRev : undefined;
            resourceInputs["maxBandwidth"] = args ? args.maxBandwidth : undefined;
            resourceInputs["maxConcurrentSession"] = args ? args.maxConcurrentSession : undefined;
            resourceInputs["maxConcurrentTcpSession"] = args ? args.maxConcurrentTcpSession : undefined;
            resourceInputs["maxConcurrentUdpSession"] = args ? args.maxConcurrentUdpSession : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallShaperPeripshaper.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallShaperPeripshaper resources.
 */
export interface ObjectFirewallShaperPeripshaperState {
    adom?: pulumi.Input<string>;
    bandwidthUnit?: pulumi.Input<string>;
    diffservForward?: pulumi.Input<string>;
    diffservReverse?: pulumi.Input<string>;
    diffservcodeForward?: pulumi.Input<string>;
    diffservcodeRev?: pulumi.Input<string>;
    maxBandwidth?: pulumi.Input<number>;
    maxConcurrentSession?: pulumi.Input<number>;
    maxConcurrentTcpSession?: pulumi.Input<number>;
    maxConcurrentUdpSession?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallShaperPeripshaper resource.
 */
export interface ObjectFirewallShaperPeripshaperArgs {
    adom?: pulumi.Input<string>;
    bandwidthUnit?: pulumi.Input<string>;
    diffservForward?: pulumi.Input<string>;
    diffservReverse?: pulumi.Input<string>;
    diffservcodeForward?: pulumi.Input<string>;
    diffservcodeRev?: pulumi.Input<string>;
    maxBandwidth?: pulumi.Input<number>;
    maxConcurrentSession?: pulumi.Input<number>;
    maxConcurrentTcpSession?: pulumi.Input<number>;
    maxConcurrentUdpSession?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
