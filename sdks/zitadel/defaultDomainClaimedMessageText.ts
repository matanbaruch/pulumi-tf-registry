// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DefaultDomainClaimedMessageText extends pulumi.CustomResource {
    /**
     * Get an existing DefaultDomainClaimedMessageText resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultDomainClaimedMessageTextState, opts?: pulumi.CustomResourceOptions): DefaultDomainClaimedMessageText {
        return new DefaultDomainClaimedMessageText(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zitadel:index/defaultDomainClaimedMessageText:DefaultDomainClaimedMessageText';

    /**
     * Returns true if the given object is an instance of DefaultDomainClaimedMessageText.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultDomainClaimedMessageText {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultDomainClaimedMessageText.__pulumiType;
    }

    public readonly buttonText!: pulumi.Output<string | undefined>;
    public readonly footerText!: pulumi.Output<string | undefined>;
    public readonly greeting!: pulumi.Output<string | undefined>;
    public readonly language!: pulumi.Output<string>;
    public readonly preHeader!: pulumi.Output<string | undefined>;
    public readonly subject!: pulumi.Output<string | undefined>;
    public readonly text!: pulumi.Output<string | undefined>;
    public readonly title!: pulumi.Output<string | undefined>;

    /**
     * Create a DefaultDomainClaimedMessageText resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultDomainClaimedMessageTextArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultDomainClaimedMessageTextArgs | DefaultDomainClaimedMessageTextState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultDomainClaimedMessageTextState | undefined;
            resourceInputs["buttonText"] = state ? state.buttonText : undefined;
            resourceInputs["footerText"] = state ? state.footerText : undefined;
            resourceInputs["greeting"] = state ? state.greeting : undefined;
            resourceInputs["language"] = state ? state.language : undefined;
            resourceInputs["preHeader"] = state ? state.preHeader : undefined;
            resourceInputs["subject"] = state ? state.subject : undefined;
            resourceInputs["text"] = state ? state.text : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as DefaultDomainClaimedMessageTextArgs | undefined;
            if ((!args || args.language === undefined) && !opts.urn) {
                throw new Error("Missing required property 'language'");
            }
            resourceInputs["buttonText"] = args ? args.buttonText : undefined;
            resourceInputs["footerText"] = args ? args.footerText : undefined;
            resourceInputs["greeting"] = args ? args.greeting : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["preHeader"] = args ? args.preHeader : undefined;
            resourceInputs["subject"] = args ? args.subject : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultDomainClaimedMessageText.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultDomainClaimedMessageText resources.
 */
export interface DefaultDomainClaimedMessageTextState {
    buttonText?: pulumi.Input<string>;
    footerText?: pulumi.Input<string>;
    greeting?: pulumi.Input<string>;
    language?: pulumi.Input<string>;
    preHeader?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    text?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultDomainClaimedMessageText resource.
 */
export interface DefaultDomainClaimedMessageTextArgs {
    buttonText?: pulumi.Input<string>;
    footerText?: pulumi.Input<string>;
    greeting?: pulumi.Input<string>;
    language: pulumi.Input<string>;
    preHeader?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    text?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
