// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationFilter extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationFilterState, opts?: pulumi.CustomResourceOptions): ApplicationFilter {
        return new ApplicationFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scm:index/applicationFilter:ApplicationFilter';

    /**
     * Returns true if the given object is an instance of ApplicationFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationFilter.__pulumiType;
    }

    /**
     * The Categories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    public readonly categories!: pulumi.Output<string[] | undefined>;
    /**
     * The Device param.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly evasive!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly excessiveBandwidthUse!: pulumi.Output<boolean | undefined>;
    /**
     * The Excludes param. Individual elements in this list are subject to additional validation. String length must not exceed
     * 63 characters.
     */
    public readonly excludes!: pulumi.Output<string[] | undefined>;
    /**
     * The Folder param.
     */
    public readonly folder!: pulumi.Output<string | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly hasKnownVulnerabilities!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly isSaas!: pulumi.Output<boolean | undefined>;
    /**
     * Alphanumeric string [ 0-9a-zA-Z._-]. String length must not exceed 31 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * only True is a valid value.
     */
    public readonly newAppid!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly pervasive!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly proneToMisuse!: pulumi.Output<boolean | undefined>;
    /**
     * The Risks param. Individual elements in this list are subject to additional validation. Value must be between 1 and 5.
     */
    public readonly risks!: pulumi.Output<number[] | undefined>;
    /**
     * The SaasCertifications param. Individual elements in this list are subject to additional validation. String length must
     * not exceed 32 characters.
     */
    public readonly saasCertifications!: pulumi.Output<string[] | undefined>;
    /**
     * The SaasRisks param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 32 characters.
     */
    public readonly saasRisks!: pulumi.Output<string[] | undefined>;
    /**
     * The Snippet param.
     */
    public readonly snippet!: pulumi.Output<string | undefined>;
    /**
     * The Subcategories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    public readonly subcategories!: pulumi.Output<string[] | undefined>;
    /**
     * The Tagging param.
     */
    public readonly tagging!: pulumi.Output<outputs.ApplicationFilterTagging | undefined>;
    /**
     * The Technologies param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    public readonly technologies!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly tfid!: pulumi.Output<string>;
    /**
     * only True is a valid value.
     */
    public readonly transfersFiles!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly tunnelsOtherApps!: pulumi.Output<boolean | undefined>;
    /**
     * only True is a valid value.
     */
    public readonly usedByMalware!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ApplicationFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApplicationFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationFilterArgs | ApplicationFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationFilterState | undefined;
            resourceInputs["categories"] = state ? state.categories : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["evasive"] = state ? state.evasive : undefined;
            resourceInputs["excessiveBandwidthUse"] = state ? state.excessiveBandwidthUse : undefined;
            resourceInputs["excludes"] = state ? state.excludes : undefined;
            resourceInputs["folder"] = state ? state.folder : undefined;
            resourceInputs["hasKnownVulnerabilities"] = state ? state.hasKnownVulnerabilities : undefined;
            resourceInputs["isSaas"] = state ? state.isSaas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["newAppid"] = state ? state.newAppid : undefined;
            resourceInputs["pervasive"] = state ? state.pervasive : undefined;
            resourceInputs["proneToMisuse"] = state ? state.proneToMisuse : undefined;
            resourceInputs["risks"] = state ? state.risks : undefined;
            resourceInputs["saasCertifications"] = state ? state.saasCertifications : undefined;
            resourceInputs["saasRisks"] = state ? state.saasRisks : undefined;
            resourceInputs["snippet"] = state ? state.snippet : undefined;
            resourceInputs["subcategories"] = state ? state.subcategories : undefined;
            resourceInputs["tagging"] = state ? state.tagging : undefined;
            resourceInputs["technologies"] = state ? state.technologies : undefined;
            resourceInputs["tfid"] = state ? state.tfid : undefined;
            resourceInputs["transfersFiles"] = state ? state.transfersFiles : undefined;
            resourceInputs["tunnelsOtherApps"] = state ? state.tunnelsOtherApps : undefined;
            resourceInputs["usedByMalware"] = state ? state.usedByMalware : undefined;
        } else {
            const args = argsOrState as ApplicationFilterArgs | undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["evasive"] = args ? args.evasive : undefined;
            resourceInputs["excessiveBandwidthUse"] = args ? args.excessiveBandwidthUse : undefined;
            resourceInputs["excludes"] = args ? args.excludes : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["hasKnownVulnerabilities"] = args ? args.hasKnownVulnerabilities : undefined;
            resourceInputs["isSaas"] = args ? args.isSaas : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["newAppid"] = args ? args.newAppid : undefined;
            resourceInputs["pervasive"] = args ? args.pervasive : undefined;
            resourceInputs["proneToMisuse"] = args ? args.proneToMisuse : undefined;
            resourceInputs["risks"] = args ? args.risks : undefined;
            resourceInputs["saasCertifications"] = args ? args.saasCertifications : undefined;
            resourceInputs["saasRisks"] = args ? args.saasRisks : undefined;
            resourceInputs["snippet"] = args ? args.snippet : undefined;
            resourceInputs["subcategories"] = args ? args.subcategories : undefined;
            resourceInputs["tagging"] = args ? args.tagging : undefined;
            resourceInputs["technologies"] = args ? args.technologies : undefined;
            resourceInputs["transfersFiles"] = args ? args.transfersFiles : undefined;
            resourceInputs["tunnelsOtherApps"] = args ? args.tunnelsOtherApps : undefined;
            resourceInputs["usedByMalware"] = args ? args.usedByMalware : undefined;
            resourceInputs["tfid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationFilter resources.
 */
export interface ApplicationFilterState {
    /**
     * The Categories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Device param.
     */
    device?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    evasive?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    excessiveBandwidthUse?: pulumi.Input<boolean>;
    /**
     * The Excludes param. Individual elements in this list are subject to additional validation. String length must not exceed
     * 63 characters.
     */
    excludes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Folder param.
     */
    folder?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    hasKnownVulnerabilities?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    isSaas?: pulumi.Input<boolean>;
    /**
     * Alphanumeric string [ 0-9a-zA-Z._-]. String length must not exceed 31 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    newAppid?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    pervasive?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    proneToMisuse?: pulumi.Input<boolean>;
    /**
     * The Risks param. Individual elements in this list are subject to additional validation. Value must be between 1 and 5.
     */
    risks?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The SaasCertifications param. Individual elements in this list are subject to additional validation. String length must
     * not exceed 32 characters.
     */
    saasCertifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The SaasRisks param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 32 characters.
     */
    saasRisks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Snippet param.
     */
    snippet?: pulumi.Input<string>;
    /**
     * The Subcategories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    subcategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Tagging param.
     */
    tagging?: pulumi.Input<inputs.ApplicationFilterTagging>;
    /**
     * The Technologies param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    technologies?: pulumi.Input<pulumi.Input<string>[]>;
    tfid?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    transfersFiles?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    tunnelsOtherApps?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    usedByMalware?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ApplicationFilter resource.
 */
export interface ApplicationFilterArgs {
    /**
     * The Categories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Device param.
     */
    device?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    evasive?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    excessiveBandwidthUse?: pulumi.Input<boolean>;
    /**
     * The Excludes param. Individual elements in this list are subject to additional validation. String length must not exceed
     * 63 characters.
     */
    excludes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Folder param.
     */
    folder?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    hasKnownVulnerabilities?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    isSaas?: pulumi.Input<boolean>;
    /**
     * Alphanumeric string [ 0-9a-zA-Z._-]. String length must not exceed 31 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * only True is a valid value.
     */
    newAppid?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    pervasive?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    proneToMisuse?: pulumi.Input<boolean>;
    /**
     * The Risks param. Individual elements in this list are subject to additional validation. Value must be between 1 and 5.
     */
    risks?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The SaasCertifications param. Individual elements in this list are subject to additional validation. String length must
     * not exceed 32 characters.
     */
    saasCertifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The SaasRisks param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 32 characters.
     */
    saasRisks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Snippet param.
     */
    snippet?: pulumi.Input<string>;
    /**
     * The Subcategories param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    subcategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Tagging param.
     */
    tagging?: pulumi.Input<inputs.ApplicationFilterTagging>;
    /**
     * The Technologies param. Individual elements in this list are subject to additional validation. String length must not
     * exceed 128 characters.
     */
    technologies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * only True is a valid value.
     */
    transfersFiles?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    tunnelsOtherApps?: pulumi.Input<boolean>;
    /**
     * only True is a valid value.
     */
    usedByMalware?: pulumi.Input<boolean>;
}
