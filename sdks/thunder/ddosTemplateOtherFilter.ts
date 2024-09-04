// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosTemplateOtherFilter extends pulumi.CustomResource {
    /**
     * Get an existing DdosTemplateOtherFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosTemplateOtherFilterState, opts?: pulumi.CustomResourceOptions): DdosTemplateOtherFilter {
        return new DdosTemplateOtherFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosTemplateOtherFilter:DdosTemplateOtherFilter';

    /**
     * Returns true if the given object is an instance of DdosTemplateOtherFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosTemplateOtherFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosTemplateOtherFilter.__pulumiType;
    }

    /**
     * Filter Expression using Berkeley Packet Filter syntax
     */
    public readonly byteOffsetFilter!: pulumi.Output<string | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter
     * passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
     */
    public readonly otherFilterAction!: pulumi.Output<string | undefined>;
    /**
     * Regex Expression
     */
    public readonly otherFilterRegex!: pulumi.Output<string | undefined>;
    /**
     * Sequence number
     */
    public readonly otherFilterSeq!: pulumi.Output<number>;
    /**
     * action taken when it does not match
     */
    public readonly otherFilterUnmatched!: pulumi.Output<number | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosTemplateOtherFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosTemplateOtherFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosTemplateOtherFilterArgs | DdosTemplateOtherFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosTemplateOtherFilterState | undefined;
            resourceInputs["byteOffsetFilter"] = state ? state.byteOffsetFilter : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["otherFilterAction"] = state ? state.otherFilterAction : undefined;
            resourceInputs["otherFilterRegex"] = state ? state.otherFilterRegex : undefined;
            resourceInputs["otherFilterSeq"] = state ? state.otherFilterSeq : undefined;
            resourceInputs["otherFilterUnmatched"] = state ? state.otherFilterUnmatched : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosTemplateOtherFilterArgs | undefined;
            if ((!args || args.otherFilterSeq === undefined) && !opts.urn) {
                throw new Error("Missing required property 'otherFilterSeq'");
            }
            resourceInputs["byteOffsetFilter"] = args ? args.byteOffsetFilter : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["otherFilterAction"] = args ? args.otherFilterAction : undefined;
            resourceInputs["otherFilterRegex"] = args ? args.otherFilterRegex : undefined;
            resourceInputs["otherFilterSeq"] = args ? args.otherFilterSeq : undefined;
            resourceInputs["otherFilterUnmatched"] = args ? args.otherFilterUnmatched : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosTemplateOtherFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosTemplateOtherFilter resources.
 */
export interface DdosTemplateOtherFilterState {
    /**
     * Filter Expression using Berkeley Packet Filter syntax
     */
    byteOffsetFilter?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter
     * passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
     */
    otherFilterAction?: pulumi.Input<string>;
    /**
     * Regex Expression
     */
    otherFilterRegex?: pulumi.Input<string>;
    /**
     * Sequence number
     */
    otherFilterSeq?: pulumi.Input<number>;
    /**
     * action taken when it does not match
     */
    otherFilterUnmatched?: pulumi.Input<number>;
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
 * The set of arguments for constructing a DdosTemplateOtherFilter resource.
 */
export interface DdosTemplateOtherFilterArgs {
    /**
     * Filter Expression using Berkeley Packet Filter syntax
     */
    byteOffsetFilter?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter
     * passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
     */
    otherFilterAction?: pulumi.Input<string>;
    /**
     * Regex Expression
     */
    otherFilterRegex?: pulumi.Input<string>;
    /**
     * Sequence number
     */
    otherFilterSeq: pulumi.Input<number>;
    /**
     * action taken when it does not match
     */
    otherFilterUnmatched?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
