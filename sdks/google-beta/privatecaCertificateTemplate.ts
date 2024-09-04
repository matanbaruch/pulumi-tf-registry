// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivatecaCertificateTemplate extends pulumi.CustomResource {
    /**
     * Get an existing PrivatecaCertificateTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivatecaCertificateTemplateState, opts?: pulumi.CustomResourceOptions): PrivatecaCertificateTemplate {
        return new PrivatecaCertificateTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/privatecaCertificateTemplate:PrivatecaCertificateTemplate';

    /**
     * Returns true if the given object is an instance of PrivatecaCertificateTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivatecaCertificateTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivatecaCertificateTemplate.__pulumiType;
    }

    /**
     * Output only. The time at which this CertificateTemplate was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is
     * omitted, then this template will not add restrictions on a certificate's identity.
     */
    public readonly identityConstraints!: pulumi.Output<outputs.PrivatecaCertificateTemplateIdentityConstraints | undefined>;
    /**
     * Optional. Labels with user-defined metadata. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Optional. The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's
     * IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued.
     * Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective
     * lifetime will be explicitly truncated to match it.
     */
    public readonly maximumLifetime!: pulumi.Output<string | undefined>;
    /**
     * The resource name for this CertificateTemplate in the format 'projects/*&#47;locations/*&#47;certificateTemplates/*'.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate.
     * If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be
     * dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance
     * request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions.
     * These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
     */
    public readonly passthroughExtensions!: pulumi.Output<outputs.PrivatecaCertificateTemplatePassthroughExtensions | undefined>;
    /**
     * Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the
     * certificate request includes conflicting values for the same properties, they will be overwritten by the values defined
     * here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the
     * certificate issuance request will fail.
     */
    public readonly predefinedValues!: pulumi.Output<outputs.PrivatecaCertificateTemplatePredefinedValues | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.PrivatecaCertificateTemplateTimeouts | undefined>;
    /**
     * Output only. The time at which this CertificateTemplate was updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a PrivatecaCertificateTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivatecaCertificateTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivatecaCertificateTemplateArgs | PrivatecaCertificateTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivatecaCertificateTemplateState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["identityConstraints"] = state ? state.identityConstraints : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["maximumLifetime"] = state ? state.maximumLifetime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passthroughExtensions"] = state ? state.passthroughExtensions : undefined;
            resourceInputs["predefinedValues"] = state ? state.predefinedValues : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as PrivatecaCertificateTemplateArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["identityConstraints"] = args ? args.identityConstraints : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maximumLifetime"] = args ? args.maximumLifetime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passthroughExtensions"] = args ? args.passthroughExtensions : undefined;
            resourceInputs["predefinedValues"] = args ? args.predefinedValues : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivatecaCertificateTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivatecaCertificateTemplate resources.
 */
export interface PrivatecaCertificateTemplateState {
    /**
     * Output only. The time at which this CertificateTemplate was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is
     * omitted, then this template will not add restrictions on a certificate's identity.
     */
    identityConstraints?: pulumi.Input<inputs.PrivatecaCertificateTemplateIdentityConstraints>;
    /**
     * Optional. Labels with user-defined metadata. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Optional. The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's
     * IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued.
     * Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective
     * lifetime will be explicitly truncated to match it.
     */
    maximumLifetime?: pulumi.Input<string>;
    /**
     * The resource name for this CertificateTemplate in the format 'projects/*&#47;locations/*&#47;certificateTemplates/*'.
     */
    name?: pulumi.Input<string>;
    /**
     * Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate.
     * If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be
     * dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance
     * request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions.
     * These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
     */
    passthroughExtensions?: pulumi.Input<inputs.PrivatecaCertificateTemplatePassthroughExtensions>;
    /**
     * Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the
     * certificate request includes conflicting values for the same properties, they will be overwritten by the values defined
     * here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the
     * certificate issuance request will fail.
     */
    predefinedValues?: pulumi.Input<inputs.PrivatecaCertificateTemplatePredefinedValues>;
    project?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivatecaCertificateTemplateTimeouts>;
    /**
     * Output only. The time at which this CertificateTemplate was updated.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivatecaCertificateTemplate resource.
 */
export interface PrivatecaCertificateTemplateArgs {
    /**
     * Optional. A human-readable description of scenarios this template is intended for.
     */
    description?: pulumi.Input<string>;
    /**
     * Optional. Describes constraints on identities that may be appear in Certificates issued using this template. If this is
     * omitted, then this template will not add restrictions on a certificate's identity.
     */
    identityConstraints?: pulumi.Input<inputs.PrivatecaCertificateTemplateIdentityConstraints>;
    /**
     * Optional. Labels with user-defined metadata. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * Optional. The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's
     * IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued.
     * Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective
     * lifetime will be explicitly truncated to match it.
     */
    maximumLifetime?: pulumi.Input<string>;
    /**
     * The resource name for this CertificateTemplate in the format 'projects/*&#47;locations/*&#47;certificateTemplates/*'.
     */
    name?: pulumi.Input<string>;
    /**
     * Optional. Describes the set of X.509 extensions that may appear in a Certificate issued using this CertificateTemplate.
     * If a certificate request sets extensions that don't appear in the passthrough_extensions, those extensions will be
     * dropped. If the issuing CaPool's IssuancePolicy defines baseline_values that don't appear here, the certificate issuance
     * request will fail. If this is omitted, then this template will not add restrictions on a certificate's X.509 extensions.
     * These constraints do not apply to X.509 extensions set in this CertificateTemplate's predefined_values.
     */
    passthroughExtensions?: pulumi.Input<inputs.PrivatecaCertificateTemplatePassthroughExtensions>;
    /**
     * Optional. A set of X.509 values that will be applied to all issued certificates that use this template. If the
     * certificate request includes conflicting values for the same properties, they will be overwritten by the values defined
     * here. If the issuing CaPool's IssuancePolicy defines conflicting baseline_values for the same properties, the
     * certificate issuance request will fail.
     */
    predefinedValues?: pulumi.Input<inputs.PrivatecaCertificateTemplatePredefinedValues>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PrivatecaCertificateTemplateTimeouts>;
}
