// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallLocalinpolicy6 extends pulumi.CustomResource {
    /**
     * Get an existing FirewallLocalinpolicy6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallLocalinpolicy6State, opts?: pulumi.CustomResourceOptions): FirewallLocalinpolicy6 {
        return new FirewallLocalinpolicy6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallLocalinpolicy6:FirewallLocalinpolicy6';

    /**
     * Returns true if the given object is an instance of FirewallLocalinpolicy6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallLocalinpolicy6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallLocalinpolicy6.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly dstaddrNegate!: pulumi.Output<string>;
    public readonly dstaddrs!: pulumi.Output<outputs.FirewallLocalinpolicy6Dstaddr[]>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly internetService6Src!: pulumi.Output<string>;
    public readonly internetService6SrcCustomGroups!: pulumi.Output<outputs.FirewallLocalinpolicy6InternetService6SrcCustomGroup[] | undefined>;
    public readonly internetService6SrcCustoms!: pulumi.Output<outputs.FirewallLocalinpolicy6InternetService6SrcCustom[] | undefined>;
    public readonly internetService6SrcGroups!: pulumi.Output<outputs.FirewallLocalinpolicy6InternetService6SrcGroup[] | undefined>;
    public readonly internetService6SrcNames!: pulumi.Output<outputs.FirewallLocalinpolicy6InternetService6SrcName[] | undefined>;
    public readonly internetService6SrcNegate!: pulumi.Output<string>;
    public readonly intf!: pulumi.Output<string>;
    public readonly intfBlocks!: pulumi.Output<outputs.FirewallLocalinpolicy6IntfBlock[] | undefined>;
    public readonly policyid!: pulumi.Output<number>;
    public readonly schedule!: pulumi.Output<string>;
    public readonly serviceNegate!: pulumi.Output<string>;
    public readonly services!: pulumi.Output<outputs.FirewallLocalinpolicy6Service[]>;
    public readonly srcaddrNegate!: pulumi.Output<string>;
    public readonly srcaddrs!: pulumi.Output<outputs.FirewallLocalinpolicy6Srcaddr[]>;
    public readonly status!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;
    public readonly virtualPatch!: pulumi.Output<string>;

    /**
     * Create a FirewallLocalinpolicy6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallLocalinpolicy6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallLocalinpolicy6Args | FirewallLocalinpolicy6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallLocalinpolicy6State | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["dstaddrNegate"] = state ? state.dstaddrNegate : undefined;
            resourceInputs["dstaddrs"] = state ? state.dstaddrs : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["internetService6Src"] = state ? state.internetService6Src : undefined;
            resourceInputs["internetService6SrcCustomGroups"] = state ? state.internetService6SrcCustomGroups : undefined;
            resourceInputs["internetService6SrcCustoms"] = state ? state.internetService6SrcCustoms : undefined;
            resourceInputs["internetService6SrcGroups"] = state ? state.internetService6SrcGroups : undefined;
            resourceInputs["internetService6SrcNames"] = state ? state.internetService6SrcNames : undefined;
            resourceInputs["internetService6SrcNegate"] = state ? state.internetService6SrcNegate : undefined;
            resourceInputs["intf"] = state ? state.intf : undefined;
            resourceInputs["intfBlocks"] = state ? state.intfBlocks : undefined;
            resourceInputs["policyid"] = state ? state.policyid : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["serviceNegate"] = state ? state.serviceNegate : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["srcaddrNegate"] = state ? state.srcaddrNegate : undefined;
            resourceInputs["srcaddrs"] = state ? state.srcaddrs : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
            resourceInputs["virtualPatch"] = state ? state.virtualPatch : undefined;
        } else {
            const args = argsOrState as FirewallLocalinpolicy6Args | undefined;
            if ((!args || args.dstaddrs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstaddrs'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            if ((!args || args.services === undefined) && !opts.urn) {
                throw new Error("Missing required property 'services'");
            }
            if ((!args || args.srcaddrs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcaddrs'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["dstaddrNegate"] = args ? args.dstaddrNegate : undefined;
            resourceInputs["dstaddrs"] = args ? args.dstaddrs : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["internetService6Src"] = args ? args.internetService6Src : undefined;
            resourceInputs["internetService6SrcCustomGroups"] = args ? args.internetService6SrcCustomGroups : undefined;
            resourceInputs["internetService6SrcCustoms"] = args ? args.internetService6SrcCustoms : undefined;
            resourceInputs["internetService6SrcGroups"] = args ? args.internetService6SrcGroups : undefined;
            resourceInputs["internetService6SrcNames"] = args ? args.internetService6SrcNames : undefined;
            resourceInputs["internetService6SrcNegate"] = args ? args.internetService6SrcNegate : undefined;
            resourceInputs["intf"] = args ? args.intf : undefined;
            resourceInputs["intfBlocks"] = args ? args.intfBlocks : undefined;
            resourceInputs["policyid"] = args ? args.policyid : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["serviceNegate"] = args ? args.serviceNegate : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["srcaddrNegate"] = args ? args.srcaddrNegate : undefined;
            resourceInputs["srcaddrs"] = args ? args.srcaddrs : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
            resourceInputs["virtualPatch"] = args ? args.virtualPatch : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallLocalinpolicy6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallLocalinpolicy6 resources.
 */
export interface FirewallLocalinpolicy6State {
    action?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    dstaddrNegate?: pulumi.Input<string>;
    dstaddrs?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Dstaddr>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    internetService6Src?: pulumi.Input<string>;
    internetService6SrcCustomGroups?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcCustomGroup>[]>;
    internetService6SrcCustoms?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcCustom>[]>;
    internetService6SrcGroups?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcGroup>[]>;
    internetService6SrcNames?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcName>[]>;
    internetService6SrcNegate?: pulumi.Input<string>;
    intf?: pulumi.Input<string>;
    intfBlocks?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6IntfBlock>[]>;
    policyid?: pulumi.Input<number>;
    schedule?: pulumi.Input<string>;
    serviceNegate?: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Service>[]>;
    srcaddrNegate?: pulumi.Input<string>;
    srcaddrs?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Srcaddr>[]>;
    status?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    virtualPatch?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallLocalinpolicy6 resource.
 */
export interface FirewallLocalinpolicy6Args {
    action?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    dstaddrNegate?: pulumi.Input<string>;
    dstaddrs: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Dstaddr>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    internetService6Src?: pulumi.Input<string>;
    internetService6SrcCustomGroups?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcCustomGroup>[]>;
    internetService6SrcCustoms?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcCustom>[]>;
    internetService6SrcGroups?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcGroup>[]>;
    internetService6SrcNames?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6InternetService6SrcName>[]>;
    internetService6SrcNegate?: pulumi.Input<string>;
    intf?: pulumi.Input<string>;
    intfBlocks?: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6IntfBlock>[]>;
    policyid?: pulumi.Input<number>;
    schedule: pulumi.Input<string>;
    serviceNegate?: pulumi.Input<string>;
    services: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Service>[]>;
    srcaddrNegate?: pulumi.Input<string>;
    srcaddrs: pulumi.Input<pulumi.Input<inputs.FirewallLocalinpolicy6Srcaddr>[]>;
    status?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
    virtualPatch?: pulumi.Input<string>;
}
