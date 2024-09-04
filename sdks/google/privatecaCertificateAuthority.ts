// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivatecaCertificateAuthority extends pulumi.CustomResource {
    /**
     * Get an existing PrivatecaCertificateAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivatecaCertificateAuthorityState, opts?: pulumi.CustomResourceOptions): PrivatecaCertificateAuthority {
        return new PrivatecaCertificateAuthority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/privatecaCertificateAuthority:PrivatecaCertificateAuthority';

    /**
     * Returns true if the given object is an instance of PrivatecaCertificateAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivatecaCertificateAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivatecaCertificateAuthority.__pulumiType;
    }

    /**
     * URLs for accessing content published by this CA, such as the CA certificate and CRLs.
     */
    public /*out*/ readonly accessUrls!: pulumi.Output<outputs.PrivatecaCertificateAuthorityAccessUrl[]>;
    /**
     * The user provided Resource ID for this Certificate Authority.
     */
    public readonly certificateAuthorityId!: pulumi.Output<string>;
    /**
     * The config used to create a self-signed X.509 certificate or CSR.
     */
    public readonly config!: pulumi.Output<outputs.PrivatecaCertificateAuthorityConfig>;
    /**
     * The time at which this CertificateAuthority was created. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly deletionProtection!: pulumi.Output<boolean | undefined>;
    /**
     * Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA. Possible values:
     * ENABLED, DISABLED, STAGED.
     */
    public readonly desiredState!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and
     * CRLs. This must be a bucket name, without any prefixes (such as 'gs://') or suffixes (such as '.googleapis.com'). For
     * example, to use a bucket named my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will
     * be created.
     */
    public readonly gcsBucket!: pulumi.Output<string | undefined>;
    /**
     * This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and
     * unexpired certs. Use with care. Defaults to 'false'.
     */
    public readonly ignoreActiveCertificatesOnDeletion!: pulumi.Output<boolean | undefined>;
    /**
     * Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed
     * CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
     */
    public readonly keySpec!: pulumi.Output<outputs.PrivatecaCertificateAuthorityKeySpec>;
    /**
     * Labels with user-defined metadata. An object containing a list of "key": value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and "notAfterTime" fields inside an X.509
     * certificate. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    public readonly lifetime!: pulumi.Output<string | undefined>;
    /**
     * Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations
     * list'.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name for this CertificateAuthority in the format projects/*&#47;locations/*&#47;certificateAuthorities/*.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with
     * a third party issuer.
     */
    public readonly pemCaCertificate!: pulumi.Output<string | undefined>;
    /**
     * This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such
     * that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the
     * current CertificateAuthority's certificate.
     */
    public /*out*/ readonly pemCaCertificates!: pulumi.Output<string[]>;
    /**
     * The name of the CaPool this Certificate Authority belongs to.
     */
    public readonly pool!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where
     * undeletion would have been allowed. If you proceed, there will be no way to recover this CA. Use with care. Defaults to
     * 'false'.
     */
    public readonly skipGracePeriod!: pulumi.Output<boolean | undefined>;
    /**
     * The State for this CertificateAuthority.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which
     * describes its issuers.
     */
    public readonly subordinateConfig!: pulumi.Output<outputs.PrivatecaCertificateAuthoritySubordinateConfig | undefined>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.PrivatecaCertificateAuthorityTimeouts | undefined>;
    /**
     * The Type of this CertificateAuthority. > **Note:** For 'SUBORDINATE' Certificate Authorities, they need to be activated
     * before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The time at which this CertificateAuthority was updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a PrivatecaCertificateAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivatecaCertificateAuthorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivatecaCertificateAuthorityArgs | PrivatecaCertificateAuthorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivatecaCertificateAuthorityState | undefined;
            resourceInputs["accessUrls"] = state ? state.accessUrls : undefined;
            resourceInputs["certificateAuthorityId"] = state ? state.certificateAuthorityId : undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["desiredState"] = state ? state.desiredState : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["gcsBucket"] = state ? state.gcsBucket : undefined;
            resourceInputs["ignoreActiveCertificatesOnDeletion"] = state ? state.ignoreActiveCertificatesOnDeletion : undefined;
            resourceInputs["keySpec"] = state ? state.keySpec : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["lifetime"] = state ? state.lifetime : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pemCaCertificate"] = state ? state.pemCaCertificate : undefined;
            resourceInputs["pemCaCertificates"] = state ? state.pemCaCertificates : undefined;
            resourceInputs["pool"] = state ? state.pool : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["skipGracePeriod"] = state ? state.skipGracePeriod : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["subordinateConfig"] = state ? state.subordinateConfig : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as PrivatecaCertificateAuthorityArgs | undefined;
            if ((!args || args.certificateAuthorityId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateAuthorityId'");
            }
            if ((!args || args.config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'config'");
            }
            if ((!args || args.keySpec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keySpec'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.pool === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pool'");
            }
            resourceInputs["certificateAuthorityId"] = args ? args.certificateAuthorityId : undefined;
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["desiredState"] = args ? args.desiredState : undefined;
            resourceInputs["gcsBucket"] = args ? args.gcsBucket : undefined;
            resourceInputs["ignoreActiveCertificatesOnDeletion"] = args ? args.ignoreActiveCertificatesOnDeletion : undefined;
            resourceInputs["keySpec"] = args ? args.keySpec : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["lifetime"] = args ? args.lifetime : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["pemCaCertificate"] = args ? args.pemCaCertificate : undefined;
            resourceInputs["pool"] = args ? args.pool : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["skipGracePeriod"] = args ? args.skipGracePeriod : undefined;
            resourceInputs["subordinateConfig"] = args ? args.subordinateConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["accessUrls"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pemCaCertificates"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivatecaCertificateAuthority.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivatecaCertificateAuthority resources.
 */
export interface PrivatecaCertificateAuthorityState {
    /**
     * URLs for accessing content published by this CA, such as the CA certificate and CRLs.
     */
    accessUrls?: pulumi.Input<pulumi.Input<inputs.PrivatecaCertificateAuthorityAccessUrl>[]>;
    /**
     * The user provided Resource ID for this Certificate Authority.
     */
    certificateAuthorityId?: pulumi.Input<string>;
    /**
     * The config used to create a self-signed X.509 certificate or CSR.
     */
    config?: pulumi.Input<inputs.PrivatecaCertificateAuthorityConfig>;
    /**
     * The time at which this CertificateAuthority was created. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    /**
     * Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA. Possible values:
     * ENABLED, DISABLED, STAGED.
     */
    desiredState?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and
     * CRLs. This must be a bucket name, without any prefixes (such as 'gs://') or suffixes (such as '.googleapis.com'). For
     * example, to use a bucket named my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will
     * be created.
     */
    gcsBucket?: pulumi.Input<string>;
    /**
     * This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and
     * unexpired certs. Use with care. Defaults to 'false'.
     */
    ignoreActiveCertificatesOnDeletion?: pulumi.Input<boolean>;
    /**
     * Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed
     * CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
     */
    keySpec?: pulumi.Input<inputs.PrivatecaCertificateAuthorityKeySpec>;
    /**
     * Labels with user-defined metadata. An object containing a list of "key": value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and "notAfterTime" fields inside an X.509
     * certificate. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    lifetime?: pulumi.Input<string>;
    /**
     * Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations
     * list'.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name for this CertificateAuthority in the format projects/*&#47;locations/*&#47;certificateAuthorities/*.
     */
    name?: pulumi.Input<string>;
    /**
     * The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with
     * a third party issuer.
     */
    pemCaCertificate?: pulumi.Input<string>;
    /**
     * This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such
     * that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the
     * current CertificateAuthority's certificate.
     */
    pemCaCertificates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the CaPool this Certificate Authority belongs to.
     */
    pool?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where
     * undeletion would have been allowed. If you proceed, there will be no way to recover this CA. Use with care. Defaults to
     * 'false'.
     */
    skipGracePeriod?: pulumi.Input<boolean>;
    /**
     * The State for this CertificateAuthority.
     */
    state?: pulumi.Input<string>;
    /**
     * If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which
     * describes its issuers.
     */
    subordinateConfig?: pulumi.Input<inputs.PrivatecaCertificateAuthoritySubordinateConfig>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PrivatecaCertificateAuthorityTimeouts>;
    /**
     * The Type of this CertificateAuthority. > **Note:** For 'SUBORDINATE' Certificate Authorities, they need to be activated
     * before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]
     */
    type?: pulumi.Input<string>;
    /**
     * The time at which this CertificateAuthority was updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PrivatecaCertificateAuthority resource.
 */
export interface PrivatecaCertificateAuthorityArgs {
    /**
     * The user provided Resource ID for this Certificate Authority.
     */
    certificateAuthorityId: pulumi.Input<string>;
    /**
     * The config used to create a self-signed X.509 certificate or CSR.
     */
    config: pulumi.Input<inputs.PrivatecaCertificateAuthorityConfig>;
    deletionProtection?: pulumi.Input<boolean>;
    /**
     * Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA. Possible values:
     * ENABLED, DISABLED, STAGED.
     */
    desiredState?: pulumi.Input<string>;
    /**
     * The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and
     * CRLs. This must be a bucket name, without any prefixes (such as 'gs://') or suffixes (such as '.googleapis.com'). For
     * example, to use a bucket named my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will
     * be created.
     */
    gcsBucket?: pulumi.Input<string>;
    /**
     * This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and
     * unexpired certs. Use with care. Defaults to 'false'.
     */
    ignoreActiveCertificatesOnDeletion?: pulumi.Input<boolean>;
    /**
     * Used when issuing certificates for this CertificateAuthority. If this CertificateAuthority is a self-signed
     * CertificateAuthority, this key is also used to sign the self-signed CA certificate. Otherwise, it is used to sign a CSR.
     */
    keySpec: pulumi.Input<inputs.PrivatecaCertificateAuthorityKeySpec>;
    /**
     * Labels with user-defined metadata. An object containing a list of "key": value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and "notAfterTime" fields inside an X.509
     * certificate. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    lifetime?: pulumi.Input<string>;
    /**
     * Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations
     * list'.
     */
    location: pulumi.Input<string>;
    /**
     * The signed CA certificate issued from the subordinated CA's CSR. This is needed when activating the subordiante CA with
     * a third party issuer.
     */
    pemCaCertificate?: pulumi.Input<string>;
    /**
     * The name of the CaPool this Certificate Authority belongs to.
     */
    pool: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where
     * undeletion would have been allowed. If you proceed, there will be no way to recover this CA. Use with care. Defaults to
     * 'false'.
     */
    skipGracePeriod?: pulumi.Input<boolean>;
    /**
     * If this is a subordinate CertificateAuthority, this field will be set with the subordinate configuration, which
     * describes its issuers.
     */
    subordinateConfig?: pulumi.Input<inputs.PrivatecaCertificateAuthoritySubordinateConfig>;
    timeouts?: pulumi.Input<inputs.PrivatecaCertificateAuthorityTimeouts>;
    /**
     * The Type of this CertificateAuthority. > **Note:** For 'SUBORDINATE' Certificate Authorities, they need to be activated
     * before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]
     */
    type?: pulumi.Input<string>;
}
