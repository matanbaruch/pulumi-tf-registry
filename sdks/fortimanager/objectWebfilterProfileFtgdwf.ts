// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectWebfilterProfileFtgdwf extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWebfilterProfileFtgdwf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWebfilterProfileFtgdwfState, opts?: pulumi.CustomResourceOptions): ObjectWebfilterProfileFtgdwf {
        return new ObjectWebfilterProfileFtgdwf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWebfilterProfileFtgdwf:ObjectWebfilterProfileFtgdwf';

    /**
     * Returns true if the given object is an instance of ObjectWebfilterProfileFtgdwf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWebfilterProfileFtgdwf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWebfilterProfileFtgdwf.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly exemptQuotas!: pulumi.Output<string[]>;
    public readonly filters!: pulumi.Output<outputs.ObjectWebfilterProfileFtgdwfFilter[] | undefined>;
    public readonly maxQuotaTimeout!: pulumi.Output<number>;
    public readonly options!: pulumi.Output<string[]>;
    public readonly ovrds!: pulumi.Output<string[]>;
    public readonly profile!: pulumi.Output<string>;
    public readonly quotas!: pulumi.Output<outputs.ObjectWebfilterProfileFtgdwfQuota[] | undefined>;
    public readonly rateCrlUrls!: pulumi.Output<string>;
    public readonly rateCssUrls!: pulumi.Output<string>;
    public readonly rateImageUrls!: pulumi.Output<string>;
    public readonly rateJavascriptUrls!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWebfilterProfileFtgdwf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWebfilterProfileFtgdwfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWebfilterProfileFtgdwfArgs | ObjectWebfilterProfileFtgdwfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWebfilterProfileFtgdwfState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["exemptQuotas"] = state ? state.exemptQuotas : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["maxQuotaTimeout"] = state ? state.maxQuotaTimeout : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["ovrds"] = state ? state.ovrds : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["quotas"] = state ? state.quotas : undefined;
            resourceInputs["rateCrlUrls"] = state ? state.rateCrlUrls : undefined;
            resourceInputs["rateCssUrls"] = state ? state.rateCssUrls : undefined;
            resourceInputs["rateImageUrls"] = state ? state.rateImageUrls : undefined;
            resourceInputs["rateJavascriptUrls"] = state ? state.rateJavascriptUrls : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectWebfilterProfileFtgdwfArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["exemptQuotas"] = args ? args.exemptQuotas : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["maxQuotaTimeout"] = args ? args.maxQuotaTimeout : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["ovrds"] = args ? args.ovrds : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["quotas"] = args ? args.quotas : undefined;
            resourceInputs["rateCrlUrls"] = args ? args.rateCrlUrls : undefined;
            resourceInputs["rateCssUrls"] = args ? args.rateCssUrls : undefined;
            resourceInputs["rateImageUrls"] = args ? args.rateImageUrls : undefined;
            resourceInputs["rateJavascriptUrls"] = args ? args.rateJavascriptUrls : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWebfilterProfileFtgdwf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWebfilterProfileFtgdwf resources.
 */
export interface ObjectWebfilterProfileFtgdwfState {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exemptQuotas?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.ObjectWebfilterProfileFtgdwfFilter>[]>;
    maxQuotaTimeout?: pulumi.Input<number>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    ovrds?: pulumi.Input<pulumi.Input<string>[]>;
    profile?: pulumi.Input<string>;
    quotas?: pulumi.Input<pulumi.Input<inputs.ObjectWebfilterProfileFtgdwfQuota>[]>;
    rateCrlUrls?: pulumi.Input<string>;
    rateCssUrls?: pulumi.Input<string>;
    rateImageUrls?: pulumi.Input<string>;
    rateJavascriptUrls?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWebfilterProfileFtgdwf resource.
 */
export interface ObjectWebfilterProfileFtgdwfArgs {
    adom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exemptQuotas?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.ObjectWebfilterProfileFtgdwfFilter>[]>;
    maxQuotaTimeout?: pulumi.Input<number>;
    options?: pulumi.Input<pulumi.Input<string>[]>;
    ovrds?: pulumi.Input<pulumi.Input<string>[]>;
    profile: pulumi.Input<string>;
    quotas?: pulumi.Input<pulumi.Input<inputs.ObjectWebfilterProfileFtgdwfQuota>[]>;
    rateCrlUrls?: pulumi.Input<string>;
    rateCssUrls?: pulumi.Input<string>;
    rateImageUrls?: pulumi.Input<string>;
    rateJavascriptUrls?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
}
