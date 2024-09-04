// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TemplateSms extends pulumi.CustomResource {
    /**
     * Get an existing TemplateSms resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateSmsState, opts?: pulumi.CustomResourceOptions): TemplateSms {
        return new TemplateSms(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'okta:index/templateSms:TemplateSms';

    /**
     * Returns true if the given object is an instance of TemplateSms.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateSms {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateSms.__pulumiType;
    }

    /**
     * SMS default template
     */
    public readonly template!: pulumi.Output<string>;
    /**
     * Set of translations for a particular template.
     */
    public readonly translations!: pulumi.Output<outputs.TemplateSmsTranslation[] | undefined>;
    /**
     * SMS template type
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a TemplateSms resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateSmsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateSmsArgs | TemplateSmsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateSmsState | undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["translations"] = state ? state.translations : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as TemplateSmsArgs | undefined;
            if ((!args || args.template === undefined) && !opts.urn) {
                throw new Error("Missing required property 'template'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["translations"] = args ? args.translations : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TemplateSms.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TemplateSms resources.
 */
export interface TemplateSmsState {
    /**
     * SMS default template
     */
    template?: pulumi.Input<string>;
    /**
     * Set of translations for a particular template.
     */
    translations?: pulumi.Input<pulumi.Input<inputs.TemplateSmsTranslation>[]>;
    /**
     * SMS template type
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TemplateSms resource.
 */
export interface TemplateSmsArgs {
    /**
     * SMS default template
     */
    template: pulumi.Input<string>;
    /**
     * Set of translations for a particular template.
     */
    translations?: pulumi.Input<pulumi.Input<inputs.TemplateSmsTranslation>[]>;
    /**
     * SMS template type
     */
    type: pulumi.Input<string>;
}
