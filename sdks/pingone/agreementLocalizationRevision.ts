// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AgreementLocalizationRevision extends pulumi.CustomResource {
    /**
     * Get an existing AgreementLocalizationRevision resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AgreementLocalizationRevisionState, opts?: pulumi.CustomResourceOptions): AgreementLocalizationRevision {
        return new AgreementLocalizationRevision(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/agreementLocalizationRevision:AgreementLocalizationRevision';

    /**
     * Returns true if the given object is an instance of AgreementLocalizationRevision.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AgreementLocalizationRevision {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AgreementLocalizationRevision.__pulumiType;
    }

    /**
     * The ID of the agreement to associate the agreement localization revision with. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    public readonly agreementId!: pulumi.Output<string>;
    /**
     * The ID of the agreement localization to associate the revision with. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly agreementLocalizationId!: pulumi.Output<string>;
    /**
     * The content type to apply to the revision text configured in the `text` parameter. Options are `text/html` and
     * `text/plain`, as defined by [rfc-6838](https://datatracker.ietf.org/doc/html/rfc6838#section-4.2.1) and [Media
     * Types/text](https://www.iana.org/assignments/media-types/media-types.xhtml#text).
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * The start date that the revision is presented to users. The effective date must be unique for each language agreement,
     * and the property value can be the present date or a future date only. Must be a valid RFC3339 date/time string. If left
     * undefined, will default to the current date and time (the revision will be effective immediately).
     */
    public readonly effectiveAt!: pulumi.Output<string>;
    /**
     * The ID of the environment to associate the agreement localization revision with. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * Specifies whether the revision is still valid in the context of all revisions for a language. This property is
     * calculated dynamically at read time, taking into consideration the agreement language, the language enabled property,
     * and the agreement enabled property. When a new revision is added, this attribute's property values for all other
     * previous revisions might be impacted. For example, if a new revision becomes effective and it forces reconsent, then all
     * older revisions are no longer valid.
     */
    public /*out*/ readonly notValidAfter!: pulumi.Output<string>;
    /**
     * Whether the user is required to provide a renewed consent to the language revision after it becomes effective.
     */
    public readonly requireReconsent!: pulumi.Output<boolean>;
    /**
     * The text or HTML for the revision that is presented to the user.
     */
    public /*out*/ readonly storedText!: pulumi.Output<string>;
    /**
     * Text or HTML for the revision. HTML support includes **tags** (italicize, bold, links, headers, paragraph, line breaks),
     * **link (a) tags** (allow href, style, target attributes), **block tags (p, b, h)** (allow style and align attributes).
     */
    public readonly text!: pulumi.Output<string>;

    /**
     * Create a AgreementLocalizationRevision resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgreementLocalizationRevisionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AgreementLocalizationRevisionArgs | AgreementLocalizationRevisionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AgreementLocalizationRevisionState | undefined;
            resourceInputs["agreementId"] = state ? state.agreementId : undefined;
            resourceInputs["agreementLocalizationId"] = state ? state.agreementLocalizationId : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["effectiveAt"] = state ? state.effectiveAt : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["notValidAfter"] = state ? state.notValidAfter : undefined;
            resourceInputs["requireReconsent"] = state ? state.requireReconsent : undefined;
            resourceInputs["storedText"] = state ? state.storedText : undefined;
            resourceInputs["text"] = state ? state.text : undefined;
        } else {
            const args = argsOrState as AgreementLocalizationRevisionArgs | undefined;
            if ((!args || args.agreementId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agreementId'");
            }
            if ((!args || args.agreementLocalizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agreementLocalizationId'");
            }
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.requireReconsent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requireReconsent'");
            }
            if ((!args || args.text === undefined) && !opts.urn) {
                throw new Error("Missing required property 'text'");
            }
            resourceInputs["agreementId"] = args ? args.agreementId : undefined;
            resourceInputs["agreementLocalizationId"] = args ? args.agreementLocalizationId : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["effectiveAt"] = args ? args.effectiveAt : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["requireReconsent"] = args ? args.requireReconsent : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["notValidAfter"] = undefined /*out*/;
            resourceInputs["storedText"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AgreementLocalizationRevision.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AgreementLocalizationRevision resources.
 */
export interface AgreementLocalizationRevisionState {
    /**
     * The ID of the agreement to associate the agreement localization revision with. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    agreementId?: pulumi.Input<string>;
    /**
     * The ID of the agreement localization to associate the revision with. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    agreementLocalizationId?: pulumi.Input<string>;
    /**
     * The content type to apply to the revision text configured in the `text` parameter. Options are `text/html` and
     * `text/plain`, as defined by [rfc-6838](https://datatracker.ietf.org/doc/html/rfc6838#section-4.2.1) and [Media
     * Types/text](https://www.iana.org/assignments/media-types/media-types.xhtml#text).
     */
    contentType?: pulumi.Input<string>;
    /**
     * The start date that the revision is presented to users. The effective date must be unique for each language agreement,
     * and the property value can be the present date or a future date only. Must be a valid RFC3339 date/time string. If left
     * undefined, will default to the current date and time (the revision will be effective immediately).
     */
    effectiveAt?: pulumi.Input<string>;
    /**
     * The ID of the environment to associate the agreement localization revision with. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Specifies whether the revision is still valid in the context of all revisions for a language. This property is
     * calculated dynamically at read time, taking into consideration the agreement language, the language enabled property,
     * and the agreement enabled property. When a new revision is added, this attribute's property values for all other
     * previous revisions might be impacted. For example, if a new revision becomes effective and it forces reconsent, then all
     * older revisions are no longer valid.
     */
    notValidAfter?: pulumi.Input<string>;
    /**
     * Whether the user is required to provide a renewed consent to the language revision after it becomes effective.
     */
    requireReconsent?: pulumi.Input<boolean>;
    /**
     * The text or HTML for the revision that is presented to the user.
     */
    storedText?: pulumi.Input<string>;
    /**
     * Text or HTML for the revision. HTML support includes **tags** (italicize, bold, links, headers, paragraph, line breaks),
     * **link (a) tags** (allow href, style, target attributes), **block tags (p, b, h)** (allow style and align attributes).
     */
    text?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AgreementLocalizationRevision resource.
 */
export interface AgreementLocalizationRevisionArgs {
    /**
     * The ID of the agreement to associate the agreement localization revision with. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    agreementId: pulumi.Input<string>;
    /**
     * The ID of the agreement localization to associate the revision with. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    agreementLocalizationId: pulumi.Input<string>;
    /**
     * The content type to apply to the revision text configured in the `text` parameter. Options are `text/html` and
     * `text/plain`, as defined by [rfc-6838](https://datatracker.ietf.org/doc/html/rfc6838#section-4.2.1) and [Media
     * Types/text](https://www.iana.org/assignments/media-types/media-types.xhtml#text).
     */
    contentType: pulumi.Input<string>;
    /**
     * The start date that the revision is presented to users. The effective date must be unique for each language agreement,
     * and the property value can be the present date or a future date only. Must be a valid RFC3339 date/time string. If left
     * undefined, will default to the current date and time (the revision will be effective immediately).
     */
    effectiveAt?: pulumi.Input<string>;
    /**
     * The ID of the environment to associate the agreement localization revision with. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Whether the user is required to provide a renewed consent to the language revision after it becomes effective.
     */
    requireReconsent: pulumi.Input<boolean>;
    /**
     * Text or HTML for the revision. HTML support includes **tags** (italicize, bold, links, headers, paragraph, line breaks),
     * **link (a) tags** (allow href, style, target attributes), **block tags (p, b, h)** (allow style and align attributes).
     */
    text: pulumi.Input<string>;
}
