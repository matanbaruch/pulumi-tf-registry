// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosZoneTemplateIcmpV6Filter extends pulumi.CustomResource {
    /**
     * Get an existing DdosZoneTemplateIcmpV6Filter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosZoneTemplateIcmpV6FilterState, opts?: pulumi.CustomResourceOptions): DdosZoneTemplateIcmpV6Filter {
        return new DdosZoneTemplateIcmpV6Filter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosZoneTemplateIcmpV6Filter:DdosZoneTemplateIcmpV6Filter';

    /**
     * Returns true if the given object is an instance of DdosZoneTemplateIcmpV6Filter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosZoneTemplateIcmpV6Filter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosZoneTemplateIcmpV6Filter.__pulumiType;
    }

    /**
     * filter using Berkeley packet filter syntax
     */
    public readonly byteOffsetFilter!: pulumi.Output<string | undefined>;
    /**
     * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src;
     */
    public readonly icmpFilterAction!: pulumi.Output<string | undefined>;
    /**
     * list to take
     */
    public readonly icmpFilterActionListName!: pulumi.Output<string | undefined>;
    /**
     * Inverse the result of matching
     */
    public readonly icmpFilterInverseMatch!: pulumi.Output<number | undefined>;
    public readonly icmpFilterName!: pulumi.Output<string>;
    /**
     * Regex Expression
     */
    public readonly icmpFilterRegex!: pulumi.Output<string | undefined>;
    /**
     * sequence number
     */
    public readonly icmpFilterSeq!: pulumi.Output<number | undefined>;
    /**
     * IcmpTmplName
     */
    public readonly icmpTmplName!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosZoneTemplateIcmpV6Filter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosZoneTemplateIcmpV6FilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosZoneTemplateIcmpV6FilterArgs | DdosZoneTemplateIcmpV6FilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosZoneTemplateIcmpV6FilterState | undefined;
            resourceInputs["byteOffsetFilter"] = state ? state.byteOffsetFilter : undefined;
            resourceInputs["icmpFilterAction"] = state ? state.icmpFilterAction : undefined;
            resourceInputs["icmpFilterActionListName"] = state ? state.icmpFilterActionListName : undefined;
            resourceInputs["icmpFilterInverseMatch"] = state ? state.icmpFilterInverseMatch : undefined;
            resourceInputs["icmpFilterName"] = state ? state.icmpFilterName : undefined;
            resourceInputs["icmpFilterRegex"] = state ? state.icmpFilterRegex : undefined;
            resourceInputs["icmpFilterSeq"] = state ? state.icmpFilterSeq : undefined;
            resourceInputs["icmpTmplName"] = state ? state.icmpTmplName : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosZoneTemplateIcmpV6FilterArgs | undefined;
            if ((!args || args.icmpFilterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'icmpFilterName'");
            }
            if ((!args || args.icmpTmplName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'icmpTmplName'");
            }
            resourceInputs["byteOffsetFilter"] = args ? args.byteOffsetFilter : undefined;
            resourceInputs["icmpFilterAction"] = args ? args.icmpFilterAction : undefined;
            resourceInputs["icmpFilterActionListName"] = args ? args.icmpFilterActionListName : undefined;
            resourceInputs["icmpFilterInverseMatch"] = args ? args.icmpFilterInverseMatch : undefined;
            resourceInputs["icmpFilterName"] = args ? args.icmpFilterName : undefined;
            resourceInputs["icmpFilterRegex"] = args ? args.icmpFilterRegex : undefined;
            resourceInputs["icmpFilterSeq"] = args ? args.icmpFilterSeq : undefined;
            resourceInputs["icmpTmplName"] = args ? args.icmpTmplName : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosZoneTemplateIcmpV6Filter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosZoneTemplateIcmpV6Filter resources.
 */
export interface DdosZoneTemplateIcmpV6FilterState {
    /**
     * filter using Berkeley packet filter syntax
     */
    byteOffsetFilter?: pulumi.Input<string>;
    /**
     * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src;
     */
    icmpFilterAction?: pulumi.Input<string>;
    /**
     * list to take
     */
    icmpFilterActionListName?: pulumi.Input<string>;
    /**
     * Inverse the result of matching
     */
    icmpFilterInverseMatch?: pulumi.Input<number>;
    icmpFilterName?: pulumi.Input<string>;
    /**
     * Regex Expression
     */
    icmpFilterRegex?: pulumi.Input<string>;
    /**
     * sequence number
     */
    icmpFilterSeq?: pulumi.Input<number>;
    /**
     * IcmpTmplName
     */
    icmpTmplName?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosZoneTemplateIcmpV6Filter resource.
 */
export interface DdosZoneTemplateIcmpV6FilterArgs {
    /**
     * filter using Berkeley packet filter syntax
     */
    byteOffsetFilter?: pulumi.Input<string>;
    /**
     * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src;
     */
    icmpFilterAction?: pulumi.Input<string>;
    /**
     * list to take
     */
    icmpFilterActionListName?: pulumi.Input<string>;
    /**
     * Inverse the result of matching
     */
    icmpFilterInverseMatch?: pulumi.Input<number>;
    icmpFilterName: pulumi.Input<string>;
    /**
     * Regex Expression
     */
    icmpFilterRegex?: pulumi.Input<string>;
    /**
     * sequence number
     */
    icmpFilterSeq?: pulumi.Input<number>;
    /**
     * IcmpTmplName
     */
    icmpTmplName: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
