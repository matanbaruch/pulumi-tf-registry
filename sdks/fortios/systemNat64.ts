// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemNat64 extends pulumi.CustomResource {
    /**
     * Get an existing SystemNat64 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNat64State, opts?: pulumi.CustomResourceOptions): SystemNat64 {
        return new SystemNat64(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemNat64:SystemNat64';

    /**
     * Returns true if the given object is an instance of SystemNat64.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemNat64 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemNat64.__pulumiType;
    }

    public readonly alwaysSynthesizeAaaaRecord!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly generateIpv6FragmentHeader!: pulumi.Output<string>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly nat46ForceIpv4PacketForwarding!: pulumi.Output<string>;
    public readonly nat64Prefix!: pulumi.Output<string>;
    public readonly secondaryPrefixStatus!: pulumi.Output<string>;
    public readonly secondaryPrefixes!: pulumi.Output<outputs.SystemNat64SecondaryPrefix[] | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SystemNat64 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemNat64Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemNat64Args | SystemNat64State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemNat64State | undefined;
            resourceInputs["alwaysSynthesizeAaaaRecord"] = state ? state.alwaysSynthesizeAaaaRecord : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["generateIpv6FragmentHeader"] = state ? state.generateIpv6FragmentHeader : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["nat46ForceIpv4PacketForwarding"] = state ? state.nat46ForceIpv4PacketForwarding : undefined;
            resourceInputs["nat64Prefix"] = state ? state.nat64Prefix : undefined;
            resourceInputs["secondaryPrefixStatus"] = state ? state.secondaryPrefixStatus : undefined;
            resourceInputs["secondaryPrefixes"] = state ? state.secondaryPrefixes : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SystemNat64Args | undefined;
            if ((!args || args.nat64Prefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nat64Prefix'");
            }
            resourceInputs["alwaysSynthesizeAaaaRecord"] = args ? args.alwaysSynthesizeAaaaRecord : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["generateIpv6FragmentHeader"] = args ? args.generateIpv6FragmentHeader : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["nat46ForceIpv4PacketForwarding"] = args ? args.nat46ForceIpv4PacketForwarding : undefined;
            resourceInputs["nat64Prefix"] = args ? args.nat64Prefix : undefined;
            resourceInputs["secondaryPrefixStatus"] = args ? args.secondaryPrefixStatus : undefined;
            resourceInputs["secondaryPrefixes"] = args ? args.secondaryPrefixes : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemNat64.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemNat64 resources.
 */
export interface SystemNat64State {
    alwaysSynthesizeAaaaRecord?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    generateIpv6FragmentHeader?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    nat46ForceIpv4PacketForwarding?: pulumi.Input<string>;
    nat64Prefix?: pulumi.Input<string>;
    secondaryPrefixStatus?: pulumi.Input<string>;
    secondaryPrefixes?: pulumi.Input<pulumi.Input<inputs.SystemNat64SecondaryPrefix>[]>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemNat64 resource.
 */
export interface SystemNat64Args {
    alwaysSynthesizeAaaaRecord?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    generateIpv6FragmentHeader?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    nat46ForceIpv4PacketForwarding?: pulumi.Input<string>;
    nat64Prefix: pulumi.Input<string>;
    secondaryPrefixStatus?: pulumi.Input<string>;
    secondaryPrefixes?: pulumi.Input<pulumi.Input<inputs.SystemNat64SecondaryPrefix>[]>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
