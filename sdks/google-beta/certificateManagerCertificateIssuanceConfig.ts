// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CertificateManagerCertificateIssuanceConfig extends pulumi.CustomResource {
    /**
     * Get an existing CertificateManagerCertificateIssuanceConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateManagerCertificateIssuanceConfigState, opts?: pulumi.CustomResourceOptions): CertificateManagerCertificateIssuanceConfig {
        return new CertificateManagerCertificateIssuanceConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/certificateManagerCertificateIssuanceConfig:CertificateManagerCertificateIssuanceConfig';

    /**
     * Returns true if the given object is an instance of CertificateManagerCertificateIssuanceConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateManagerCertificateIssuanceConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateManagerCertificateIssuanceConfig.__pulumiType;
    }

    /**
     * The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
     */
    public readonly certificateAuthorityConfig!: pulumi.Output<outputs.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig>;
    /**
     * The creation timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds with up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * One or more paragraphs of text description of a CertificateIssuanceConfig.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]
     */
    public readonly keyAlgorithm!: pulumi.Output<string>;
    /**
     * 'Set of label tags associated with the CertificateIssuanceConfig resource. An object containing a list of "key": value
     * pairs. Example: { "name": "wrench", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'. Example:
     * "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
     */
    public readonly lifetime!: pulumi.Output<string>;
    /**
     * The Certificate Manager location. If not specified, "global" is used.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be
     * a number between 1-99, inclusive. You must set the rotation window percentage in relation to the certificate lifetime so
     * that certificate renewal occurs at least 7 days after the certificate has been issued and at least 7 days before it
     * expires.
     */
    public readonly rotationWindowPercentage!: pulumi.Output<number>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.CertificateManagerCertificateIssuanceConfigTimeouts | undefined>;
    /**
     * The last update timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds with up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a CertificateManagerCertificateIssuanceConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateManagerCertificateIssuanceConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateManagerCertificateIssuanceConfigArgs | CertificateManagerCertificateIssuanceConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateManagerCertificateIssuanceConfigState | undefined;
            resourceInputs["certificateAuthorityConfig"] = state ? state.certificateAuthorityConfig : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["keyAlgorithm"] = state ? state.keyAlgorithm : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["lifetime"] = state ? state.lifetime : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["rotationWindowPercentage"] = state ? state.rotationWindowPercentage : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as CertificateManagerCertificateIssuanceConfigArgs | undefined;
            if ((!args || args.certificateAuthorityConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateAuthorityConfig'");
            }
            if ((!args || args.keyAlgorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyAlgorithm'");
            }
            if ((!args || args.lifetime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lifetime'");
            }
            if ((!args || args.rotationWindowPercentage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rotationWindowPercentage'");
            }
            resourceInputs["certificateAuthorityConfig"] = args ? args.certificateAuthorityConfig : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["keyAlgorithm"] = args ? args.keyAlgorithm : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["lifetime"] = args ? args.lifetime : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["rotationWindowPercentage"] = args ? args.rotationWindowPercentage : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CertificateManagerCertificateIssuanceConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CertificateManagerCertificateIssuanceConfig resources.
 */
export interface CertificateManagerCertificateIssuanceConfigState {
    /**
     * The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
     */
    certificateAuthorityConfig?: pulumi.Input<inputs.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig>;
    /**
     * The creation timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds with up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * One or more paragraphs of text description of a CertificateIssuanceConfig.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]
     */
    keyAlgorithm?: pulumi.Input<string>;
    /**
     * 'Set of label tags associated with the CertificateIssuanceConfig resource. An object containing a list of "key": value
     * pairs. Example: { "name": "wrench", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'. Example:
     * "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
     */
    lifetime?: pulumi.Input<string>;
    /**
     * The Certificate Manager location. If not specified, "global" is used.
     */
    location?: pulumi.Input<string>;
    /**
     * A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be
     * a number between 1-99, inclusive. You must set the rotation window percentage in relation to the certificate lifetime so
     * that certificate renewal occurs at least 7 days after the certificate has been issued and at least 7 days before it
     * expires.
     */
    rotationWindowPercentage?: pulumi.Input<number>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CertificateManagerCertificateIssuanceConfigTimeouts>;
    /**
     * The last update timestamp of a CertificateIssuanceConfig. Timestamp is in RFC3339 UTC "Zulu" format, accurate to
     * nanoseconds with up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CertificateManagerCertificateIssuanceConfig resource.
 */
export interface CertificateManagerCertificateIssuanceConfigArgs {
    /**
     * The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.
     */
    certificateAuthorityConfig: pulumi.Input<inputs.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig>;
    /**
     * One or more paragraphs of text description of a CertificateIssuanceConfig.
     */
    description?: pulumi.Input<string>;
    /**
     * Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]
     */
    keyAlgorithm: pulumi.Input<string>;
    /**
     * 'Set of label tags associated with the CertificateIssuanceConfig resource. An object containing a list of "key": value
     * pairs. Example: { "name": "wrench", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'. Example:
     * "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
     */
    lifetime: pulumi.Input<string>;
    /**
     * The Certificate Manager location. If not specified, "global" is used.
     */
    location?: pulumi.Input<string>;
    /**
     * A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be
     * a number between 1-99, inclusive. You must set the rotation window percentage in relation to the certificate lifetime so
     * that certificate renewal occurs at least 7 days after the certificate has been issued and at least 7 days before it
     * expires.
     */
    rotationWindowPercentage: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.CertificateManagerCertificateIssuanceConfigTimeouts>;
}
