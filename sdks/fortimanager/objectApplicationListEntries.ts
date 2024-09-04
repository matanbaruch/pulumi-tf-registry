// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectApplicationListEntries extends pulumi.CustomResource {
    /**
     * Get an existing ObjectApplicationListEntries resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectApplicationListEntriesState, opts?: pulumi.CustomResourceOptions): ObjectApplicationListEntries {
        return new ObjectApplicationListEntries(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectApplicationListEntries:ObjectApplicationListEntries';

    /**
     * Returns true if the given object is an instance of ObjectApplicationListEntries.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectApplicationListEntries {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectApplicationListEntries.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly applications!: pulumi.Output<number[]>;
    public readonly behaviors!: pulumi.Output<string[]>;
    public readonly category!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly exclusions!: pulumi.Output<number[]>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly list!: pulumi.Output<string>;
    public readonly log!: pulumi.Output<string>;
    public readonly logPacket!: pulumi.Output<string>;
    public readonly parameters!: pulumi.Output<outputs.ObjectApplicationListEntriesParameter[] | undefined>;
    public readonly perIpShaper!: pulumi.Output<string | undefined>;
    public readonly popularities!: pulumi.Output<string[]>;
    public readonly protocols!: pulumi.Output<string[]>;
    public readonly quarantine!: pulumi.Output<string>;
    public readonly quarantineExpiry!: pulumi.Output<string>;
    public readonly quarantineLog!: pulumi.Output<string>;
    public readonly rateCount!: pulumi.Output<number | undefined>;
    public readonly rateDuration!: pulumi.Output<number>;
    public readonly rateMode!: pulumi.Output<string>;
    public readonly rateTrack!: pulumi.Output<string>;
    public readonly risks!: pulumi.Output<number[]>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sessionTtl!: pulumi.Output<number | undefined>;
    public readonly shaper!: pulumi.Output<string | undefined>;
    public readonly shaperReverse!: pulumi.Output<string | undefined>;
    public readonly subCategories!: pulumi.Output<number[]>;
    public readonly technologies!: pulumi.Output<string[]>;
    public readonly vendors!: pulumi.Output<string[]>;

    /**
     * Create a ObjectApplicationListEntries resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectApplicationListEntriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectApplicationListEntriesArgs | ObjectApplicationListEntriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectApplicationListEntriesState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["behaviors"] = state ? state.behaviors : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["exclusions"] = state ? state.exclusions : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["list"] = state ? state.list : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["logPacket"] = state ? state.logPacket : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["perIpShaper"] = state ? state.perIpShaper : undefined;
            resourceInputs["popularities"] = state ? state.popularities : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
            resourceInputs["quarantine"] = state ? state.quarantine : undefined;
            resourceInputs["quarantineExpiry"] = state ? state.quarantineExpiry : undefined;
            resourceInputs["quarantineLog"] = state ? state.quarantineLog : undefined;
            resourceInputs["rateCount"] = state ? state.rateCount : undefined;
            resourceInputs["rateDuration"] = state ? state.rateDuration : undefined;
            resourceInputs["rateMode"] = state ? state.rateMode : undefined;
            resourceInputs["rateTrack"] = state ? state.rateTrack : undefined;
            resourceInputs["risks"] = state ? state.risks : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sessionTtl"] = state ? state.sessionTtl : undefined;
            resourceInputs["shaper"] = state ? state.shaper : undefined;
            resourceInputs["shaperReverse"] = state ? state.shaperReverse : undefined;
            resourceInputs["subCategories"] = state ? state.subCategories : undefined;
            resourceInputs["technologies"] = state ? state.technologies : undefined;
            resourceInputs["vendors"] = state ? state.vendors : undefined;
        } else {
            const args = argsOrState as ObjectApplicationListEntriesArgs | undefined;
            if ((!args || args.list === undefined) && !opts.urn) {
                throw new Error("Missing required property 'list'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["behaviors"] = args ? args.behaviors : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["exclusions"] = args ? args.exclusions : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["list"] = args ? args.list : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["logPacket"] = args ? args.logPacket : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["perIpShaper"] = args ? args.perIpShaper : undefined;
            resourceInputs["popularities"] = args ? args.popularities : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["quarantine"] = args ? args.quarantine : undefined;
            resourceInputs["quarantineExpiry"] = args ? args.quarantineExpiry : undefined;
            resourceInputs["quarantineLog"] = args ? args.quarantineLog : undefined;
            resourceInputs["rateCount"] = args ? args.rateCount : undefined;
            resourceInputs["rateDuration"] = args ? args.rateDuration : undefined;
            resourceInputs["rateMode"] = args ? args.rateMode : undefined;
            resourceInputs["rateTrack"] = args ? args.rateTrack : undefined;
            resourceInputs["risks"] = args ? args.risks : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sessionTtl"] = args ? args.sessionTtl : undefined;
            resourceInputs["shaper"] = args ? args.shaper : undefined;
            resourceInputs["shaperReverse"] = args ? args.shaperReverse : undefined;
            resourceInputs["subCategories"] = args ? args.subCategories : undefined;
            resourceInputs["technologies"] = args ? args.technologies : undefined;
            resourceInputs["vendors"] = args ? args.vendors : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectApplicationListEntries.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectApplicationListEntries resources.
 */
export interface ObjectApplicationListEntriesState {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    applications?: pulumi.Input<pulumi.Input<number>[]>;
    behaviors?: pulumi.Input<pulumi.Input<string>[]>;
    category?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exclusions?: pulumi.Input<pulumi.Input<number>[]>;
    fosid?: pulumi.Input<number>;
    list?: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    logPacket?: pulumi.Input<string>;
    parameters?: pulumi.Input<pulumi.Input<inputs.ObjectApplicationListEntriesParameter>[]>;
    perIpShaper?: pulumi.Input<string>;
    popularities?: pulumi.Input<pulumi.Input<string>[]>;
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    quarantine?: pulumi.Input<string>;
    quarantineExpiry?: pulumi.Input<string>;
    quarantineLog?: pulumi.Input<string>;
    rateCount?: pulumi.Input<number>;
    rateDuration?: pulumi.Input<number>;
    rateMode?: pulumi.Input<string>;
    rateTrack?: pulumi.Input<string>;
    risks?: pulumi.Input<pulumi.Input<number>[]>;
    scopetype?: pulumi.Input<string>;
    sessionTtl?: pulumi.Input<number>;
    shaper?: pulumi.Input<string>;
    shaperReverse?: pulumi.Input<string>;
    subCategories?: pulumi.Input<pulumi.Input<number>[]>;
    technologies?: pulumi.Input<pulumi.Input<string>[]>;
    vendors?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectApplicationListEntries resource.
 */
export interface ObjectApplicationListEntriesArgs {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    applications?: pulumi.Input<pulumi.Input<number>[]>;
    behaviors?: pulumi.Input<pulumi.Input<string>[]>;
    category?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exclusions?: pulumi.Input<pulumi.Input<number>[]>;
    fosid?: pulumi.Input<number>;
    list: pulumi.Input<string>;
    log?: pulumi.Input<string>;
    logPacket?: pulumi.Input<string>;
    parameters?: pulumi.Input<pulumi.Input<inputs.ObjectApplicationListEntriesParameter>[]>;
    perIpShaper?: pulumi.Input<string>;
    popularities?: pulumi.Input<pulumi.Input<string>[]>;
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    quarantine?: pulumi.Input<string>;
    quarantineExpiry?: pulumi.Input<string>;
    quarantineLog?: pulumi.Input<string>;
    rateCount?: pulumi.Input<number>;
    rateDuration?: pulumi.Input<number>;
    rateMode?: pulumi.Input<string>;
    rateTrack?: pulumi.Input<string>;
    risks?: pulumi.Input<pulumi.Input<number>[]>;
    scopetype?: pulumi.Input<string>;
    sessionTtl?: pulumi.Input<number>;
    shaper?: pulumi.Input<string>;
    shaperReverse?: pulumi.Input<string>;
    subCategories?: pulumi.Input<pulumi.Input<number>[]>;
    technologies?: pulumi.Input<pulumi.Input<string>[]>;
    vendors?: pulumi.Input<pulumi.Input<string>[]>;
}
