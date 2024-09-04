// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VerifyEmailMessageText extends pulumi.CustomResource {
    /**
     * Get an existing VerifyEmailMessageText resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VerifyEmailMessageTextState, opts?: pulumi.CustomResourceOptions): VerifyEmailMessageText {
        return new VerifyEmailMessageText(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zitadel:index/verifyEmailMessageText:VerifyEmailMessageText';

    /**
     * Returns true if the given object is an instance of VerifyEmailMessageText.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VerifyEmailMessageText {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VerifyEmailMessageText.__pulumiType;
    }

    public readonly buttonText!: pulumi.Output<string | undefined>;
    public readonly footerText!: pulumi.Output<string | undefined>;
    public readonly greeting!: pulumi.Output<string | undefined>;
    public readonly language!: pulumi.Output<string>;
    public readonly orgId!: pulumi.Output<string>;
    public readonly preHeader!: pulumi.Output<string | undefined>;
    public readonly subject!: pulumi.Output<string | undefined>;
    public readonly text!: pulumi.Output<string | undefined>;
    public readonly title!: pulumi.Output<string | undefined>;

    /**
     * Create a VerifyEmailMessageText resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VerifyEmailMessageTextArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VerifyEmailMessageTextArgs | VerifyEmailMessageTextState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VerifyEmailMessageTextState | undefined;
            resourceInputs["buttonText"] = state ? state.buttonText : undefined;
            resourceInputs["footerText"] = state ? state.footerText : undefined;
            resourceInputs["greeting"] = state ? state.greeting : undefined;
            resourceInputs["language"] = state ? state.language : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["preHeader"] = state ? state.preHeader : undefined;
            resourceInputs["subject"] = state ? state.subject : undefined;
            resourceInputs["text"] = state ? state.text : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as VerifyEmailMessageTextArgs | undefined;
            if ((!args || args.language === undefined) && !opts.urn) {
                throw new Error("Missing required property 'language'");
            }
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            resourceInputs["buttonText"] = args ? args.buttonText : undefined;
            resourceInputs["footerText"] = args ? args.footerText : undefined;
            resourceInputs["greeting"] = args ? args.greeting : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["preHeader"] = args ? args.preHeader : undefined;
            resourceInputs["subject"] = args ? args.subject : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VerifyEmailMessageText.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VerifyEmailMessageText resources.
 */
export interface VerifyEmailMessageTextState {
    buttonText?: pulumi.Input<string>;
    footerText?: pulumi.Input<string>;
    greeting?: pulumi.Input<string>;
    language?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    preHeader?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    text?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VerifyEmailMessageText resource.
 */
export interface VerifyEmailMessageTextArgs {
    buttonText?: pulumi.Input<string>;
    footerText?: pulumi.Input<string>;
    greeting?: pulumi.Input<string>;
    language: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
    preHeader?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    text?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
