// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWebfilterProfileFtgdwfFilters extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWebfilterProfileFtgdwfFilters resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWebfilterProfileFtgdwfFiltersState, opts?: pulumi.CustomResourceOptions): ObjectWebfilterProfileFtgdwfFilters {
        return new ObjectWebfilterProfileFtgdwfFilters(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWebfilterProfileFtgdwfFilters:ObjectWebfilterProfileFtgdwfFilters';

    /**
     * Returns true if the given object is an instance of ObjectWebfilterProfileFtgdwfFilters.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWebfilterProfileFtgdwfFilters {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWebfilterProfileFtgdwfFilters.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly authUsrGrp!: pulumi.Output<string | undefined>;
    public readonly category!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly log!: pulumi.Output<string>;
    public readonly overrideReplacemsg!: pulumi.Output<string | undefined>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly warnDuration!: pulumi.Output<string | undefined>;
    public readonly warningDurationType!: pulumi.Output<string | undefined>;
    public readonly warningPrompt!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWebfilterProfileFtgdwfFilters resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWebfilterProfileFtgdwfFiltersArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWebfilterProfileFtgdwfFiltersArgs | ObjectWebfilterProfileFtgdwfFiltersState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWebfilterProfileFtgdwfFiltersState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["authUsrGrp"] = state ? state.authUsrGrp : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["log"] = state ? state.log : undefined;
            resourceInputs["overrideReplacemsg"] = state ? state.overrideReplacemsg : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["warnDuration"] = state ? state.warnDuration : undefined;
            resourceInputs["warningDurationType"] = state ? state.warningDurationType : undefined;
            resourceInputs["warningPrompt"] = state ? state.warningPrompt : undefined;
        } else {
            const args = argsOrState as ObjectWebfilterProfileFtgdwfFiltersArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["authUsrGrp"] = args ? args.authUsrGrp : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["log"] = args ? args.log : undefined;
            resourceInputs["overrideReplacemsg"] = args ? args.overrideReplacemsg : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["warnDuration"] = args ? args.warnDuration : undefined;
            resourceInputs["warningDurationType"] = args ? args.warningDurationType : undefined;
            resourceInputs["warningPrompt"] = args ? args.warningPrompt : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWebfilterProfileFtgdwfFilters.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWebfilterProfileFtgdwfFilters resources.
 */
export interface ObjectWebfilterProfileFtgdwfFiltersState {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    authUsrGrp?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    log?: pulumi.Input<string>;
    overrideReplacemsg?: pulumi.Input<string>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    warnDuration?: pulumi.Input<string>;
    warningDurationType?: pulumi.Input<string>;
    warningPrompt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWebfilterProfileFtgdwfFilters resource.
 */
export interface ObjectWebfilterProfileFtgdwfFiltersArgs {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    authUsrGrp?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    log?: pulumi.Input<string>;
    overrideReplacemsg?: pulumi.Input<string>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    warnDuration?: pulumi.Input<string>;
    warningDurationType?: pulumi.Input<string>;
    warningPrompt?: pulumi.Input<string>;
}
