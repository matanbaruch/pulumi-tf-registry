// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallVip64 extends pulumi.CustomResource {
    /**
     * Get an existing FirewallVip64 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallVip64State, opts?: pulumi.CustomResourceOptions): FirewallVip64 {
        return new FirewallVip64(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallVip64:FirewallVip64';

    /**
     * Returns true if the given object is an instance of FirewallVip64.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallVip64 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallVip64.__pulumiType;
    }

    public readonly arpReply!: pulumi.Output<string>;
    public readonly color!: pulumi.Output<number>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly extip!: pulumi.Output<string>;
    public readonly extport!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly ldbMethod!: pulumi.Output<string>;
    public readonly mappedip!: pulumi.Output<string>;
    public readonly mappedport!: pulumi.Output<string>;
    public readonly monitors!: pulumi.Output<outputs.FirewallVip64Monitor[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly portforward!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly realservers!: pulumi.Output<outputs.FirewallVip64Realserver[] | undefined>;
    public readonly serverType!: pulumi.Output<string>;
    public readonly srcFilters!: pulumi.Output<outputs.FirewallVip64SrcFilter[] | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallVip64 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallVip64Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallVip64Args | FirewallVip64State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallVip64State | undefined;
            resourceInputs["arpReply"] = state ? state.arpReply : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["extip"] = state ? state.extip : undefined;
            resourceInputs["extport"] = state ? state.extport : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["ldbMethod"] = state ? state.ldbMethod : undefined;
            resourceInputs["mappedip"] = state ? state.mappedip : undefined;
            resourceInputs["mappedport"] = state ? state.mappedport : undefined;
            resourceInputs["monitors"] = state ? state.monitors : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portforward"] = state ? state.portforward : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["realservers"] = state ? state.realservers : undefined;
            resourceInputs["serverType"] = state ? state.serverType : undefined;
            resourceInputs["srcFilters"] = state ? state.srcFilters : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallVip64Args | undefined;
            if ((!args || args.extip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extip'");
            }
            if ((!args || args.mappedip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappedip'");
            }
            resourceInputs["arpReply"] = args ? args.arpReply : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["extip"] = args ? args.extip : undefined;
            resourceInputs["extport"] = args ? args.extport : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["ldbMethod"] = args ? args.ldbMethod : undefined;
            resourceInputs["mappedip"] = args ? args.mappedip : undefined;
            resourceInputs["mappedport"] = args ? args.mappedport : undefined;
            resourceInputs["monitors"] = args ? args.monitors : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portforward"] = args ? args.portforward : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["realservers"] = args ? args.realservers : undefined;
            resourceInputs["serverType"] = args ? args.serverType : undefined;
            resourceInputs["srcFilters"] = args ? args.srcFilters : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallVip64.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallVip64 resources.
 */
export interface FirewallVip64State {
    arpReply?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    extip?: pulumi.Input<string>;
    extport?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    getAllTables?: pulumi.Input<string>;
    ldbMethod?: pulumi.Input<string>;
    mappedip?: pulumi.Input<string>;
    mappedport?: pulumi.Input<string>;
    monitors?: pulumi.Input<pulumi.Input<inputs.FirewallVip64Monitor>[]>;
    name?: pulumi.Input<string>;
    portforward?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    realservers?: pulumi.Input<pulumi.Input<inputs.FirewallVip64Realserver>[]>;
    serverType?: pulumi.Input<string>;
    srcFilters?: pulumi.Input<pulumi.Input<inputs.FirewallVip64SrcFilter>[]>;
    type?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallVip64 resource.
 */
export interface FirewallVip64Args {
    arpReply?: pulumi.Input<string>;
    color?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    extip: pulumi.Input<string>;
    extport?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    getAllTables?: pulumi.Input<string>;
    ldbMethod?: pulumi.Input<string>;
    mappedip: pulumi.Input<string>;
    mappedport?: pulumi.Input<string>;
    monitors?: pulumi.Input<pulumi.Input<inputs.FirewallVip64Monitor>[]>;
    name?: pulumi.Input<string>;
    portforward?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    realservers?: pulumi.Input<pulumi.Input<inputs.FirewallVip64Realserver>[]>;
    serverType?: pulumi.Input<string>;
    srcFilters?: pulumi.Input<pulumi.Input<inputs.FirewallVip64SrcFilter>[]>;
    type?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
