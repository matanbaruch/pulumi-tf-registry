// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState, opts?: pulumi.CustomResourceOptions): Certificate {
        return new Certificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'octopusdeploy:index/certificate:Certificate';

    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Certificate.__pulumiType;
    }

    public readonly archived!: pulumi.Output<string>;
    /**
     * The encoded data of the certificate.
     */
    public readonly certificateData!: pulumi.Output<string>;
    /**
     * Specifies the archive file format used for storing cryptography objects in the certificate. Valid formats are `Der`,
     * `Pem`, `Pkcs12`, or `Unknown`.
     */
    public readonly certificateDataFormat!: pulumi.Output<string>;
    /**
     * A list of environment IDs associated with this resource.
     */
    public readonly environments!: pulumi.Output<string[]>;
    /**
     * Indicates if the certificate has a private key.
     */
    public readonly hasPrivateKey!: pulumi.Output<boolean>;
    /**
     * Indicates if the certificate has expired.
     */
    public readonly isExpired!: pulumi.Output<boolean>;
    public readonly issuerCommonName!: pulumi.Output<string>;
    public readonly issuerDistinguishedName!: pulumi.Output<string>;
    public readonly issuerOrganization!: pulumi.Output<string>;
    /**
     * The name of this resource.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly notAfter!: pulumi.Output<string>;
    public readonly notBefore!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string>;
    /**
     * The password associated with this resource.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly replacedBy!: pulumi.Output<string>;
    public readonly selfSigned!: pulumi.Output<boolean>;
    public readonly serialNumber!: pulumi.Output<string>;
    public readonly signatureAlgorithmName!: pulumi.Output<string>;
    public readonly spaceId!: pulumi.Output<string>;
    public readonly subjectAlternativeNames!: pulumi.Output<string[]>;
    public readonly subjectCommonName!: pulumi.Output<string>;
    public readonly subjectDistinguishedName!: pulumi.Output<string>;
    public readonly subjectOrganization!: pulumi.Output<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    public readonly tenantTags!: pulumi.Output<string[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    public readonly tenantedDeploymentParticipation!: pulumi.Output<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    public readonly tenants!: pulumi.Output<string[]>;
    public readonly thumbprint!: pulumi.Output<string>;
    public readonly version!: pulumi.Output<number>;

    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateArgs | CertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateState | undefined;
            resourceInputs["archived"] = state ? state.archived : undefined;
            resourceInputs["certificateData"] = state ? state.certificateData : undefined;
            resourceInputs["certificateDataFormat"] = state ? state.certificateDataFormat : undefined;
            resourceInputs["environments"] = state ? state.environments : undefined;
            resourceInputs["hasPrivateKey"] = state ? state.hasPrivateKey : undefined;
            resourceInputs["isExpired"] = state ? state.isExpired : undefined;
            resourceInputs["issuerCommonName"] = state ? state.issuerCommonName : undefined;
            resourceInputs["issuerDistinguishedName"] = state ? state.issuerDistinguishedName : undefined;
            resourceInputs["issuerOrganization"] = state ? state.issuerOrganization : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notAfter"] = state ? state.notAfter : undefined;
            resourceInputs["notBefore"] = state ? state.notBefore : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["replacedBy"] = state ? state.replacedBy : undefined;
            resourceInputs["selfSigned"] = state ? state.selfSigned : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["signatureAlgorithmName"] = state ? state.signatureAlgorithmName : undefined;
            resourceInputs["spaceId"] = state ? state.spaceId : undefined;
            resourceInputs["subjectAlternativeNames"] = state ? state.subjectAlternativeNames : undefined;
            resourceInputs["subjectCommonName"] = state ? state.subjectCommonName : undefined;
            resourceInputs["subjectDistinguishedName"] = state ? state.subjectDistinguishedName : undefined;
            resourceInputs["subjectOrganization"] = state ? state.subjectOrganization : undefined;
            resourceInputs["tenantTags"] = state ? state.tenantTags : undefined;
            resourceInputs["tenantedDeploymentParticipation"] = state ? state.tenantedDeploymentParticipation : undefined;
            resourceInputs["tenants"] = state ? state.tenants : undefined;
            resourceInputs["thumbprint"] = state ? state.thumbprint : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CertificateArgs | undefined;
            if ((!args || args.certificateData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateData'");
            }
            resourceInputs["archived"] = args ? args.archived : undefined;
            resourceInputs["certificateData"] = args?.certificateData ? pulumi.secret(args.certificateData) : undefined;
            resourceInputs["certificateDataFormat"] = args ? args.certificateDataFormat : undefined;
            resourceInputs["environments"] = args ? args.environments : undefined;
            resourceInputs["hasPrivateKey"] = args ? args.hasPrivateKey : undefined;
            resourceInputs["isExpired"] = args ? args.isExpired : undefined;
            resourceInputs["issuerCommonName"] = args ? args.issuerCommonName : undefined;
            resourceInputs["issuerDistinguishedName"] = args ? args.issuerDistinguishedName : undefined;
            resourceInputs["issuerOrganization"] = args ? args.issuerOrganization : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notAfter"] = args ? args.notAfter : undefined;
            resourceInputs["notBefore"] = args ? args.notBefore : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["replacedBy"] = args ? args.replacedBy : undefined;
            resourceInputs["selfSigned"] = args ? args.selfSigned : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["signatureAlgorithmName"] = args ? args.signatureAlgorithmName : undefined;
            resourceInputs["spaceId"] = args ? args.spaceId : undefined;
            resourceInputs["subjectAlternativeNames"] = args ? args.subjectAlternativeNames : undefined;
            resourceInputs["subjectCommonName"] = args ? args.subjectCommonName : undefined;
            resourceInputs["subjectDistinguishedName"] = args ? args.subjectDistinguishedName : undefined;
            resourceInputs["subjectOrganization"] = args ? args.subjectOrganization : undefined;
            resourceInputs["tenantTags"] = args ? args.tenantTags : undefined;
            resourceInputs["tenantedDeploymentParticipation"] = args ? args.tenantedDeploymentParticipation : undefined;
            resourceInputs["tenants"] = args ? args.tenants : undefined;
            resourceInputs["thumbprint"] = args ? args.thumbprint : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["certificateData", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Certificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    archived?: pulumi.Input<string>;
    /**
     * The encoded data of the certificate.
     */
    certificateData?: pulumi.Input<string>;
    /**
     * Specifies the archive file format used for storing cryptography objects in the certificate. Valid formats are `Der`,
     * `Pem`, `Pkcs12`, or `Unknown`.
     */
    certificateDataFormat?: pulumi.Input<string>;
    /**
     * A list of environment IDs associated with this resource.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates if the certificate has a private key.
     */
    hasPrivateKey?: pulumi.Input<boolean>;
    /**
     * Indicates if the certificate has expired.
     */
    isExpired?: pulumi.Input<boolean>;
    issuerCommonName?: pulumi.Input<string>;
    issuerDistinguishedName?: pulumi.Input<string>;
    issuerOrganization?: pulumi.Input<string>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    notAfter?: pulumi.Input<string>;
    notBefore?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    /**
     * The password associated with this resource.
     */
    password?: pulumi.Input<string>;
    replacedBy?: pulumi.Input<string>;
    selfSigned?: pulumi.Input<boolean>;
    serialNumber?: pulumi.Input<string>;
    signatureAlgorithmName?: pulumi.Input<string>;
    spaceId?: pulumi.Input<string>;
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    subjectCommonName?: pulumi.Input<string>;
    subjectDistinguishedName?: pulumi.Input<string>;
    subjectOrganization?: pulumi.Input<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    tenantTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    tenantedDeploymentParticipation?: pulumi.Input<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
    thumbprint?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    archived?: pulumi.Input<string>;
    /**
     * The encoded data of the certificate.
     */
    certificateData: pulumi.Input<string>;
    /**
     * Specifies the archive file format used for storing cryptography objects in the certificate. Valid formats are `Der`,
     * `Pem`, `Pkcs12`, or `Unknown`.
     */
    certificateDataFormat?: pulumi.Input<string>;
    /**
     * A list of environment IDs associated with this resource.
     */
    environments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates if the certificate has a private key.
     */
    hasPrivateKey?: pulumi.Input<boolean>;
    /**
     * Indicates if the certificate has expired.
     */
    isExpired?: pulumi.Input<boolean>;
    issuerCommonName?: pulumi.Input<string>;
    issuerDistinguishedName?: pulumi.Input<string>;
    issuerOrganization?: pulumi.Input<string>;
    /**
     * The name of this resource.
     */
    name?: pulumi.Input<string>;
    notAfter?: pulumi.Input<string>;
    notBefore?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    /**
     * The password associated with this resource.
     */
    password?: pulumi.Input<string>;
    replacedBy?: pulumi.Input<string>;
    selfSigned?: pulumi.Input<boolean>;
    serialNumber?: pulumi.Input<string>;
    signatureAlgorithmName?: pulumi.Input<string>;
    spaceId?: pulumi.Input<string>;
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    subjectCommonName?: pulumi.Input<string>;
    subjectDistinguishedName?: pulumi.Input<string>;
    subjectOrganization?: pulumi.Input<string>;
    /**
     * A list of tenant tags associated with this resource.
     */
    tenantTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or
     * `Tenanted`.
     */
    tenantedDeploymentParticipation?: pulumi.Input<string>;
    /**
     * A list of tenant IDs associated with this resource.
     */
    tenants?: pulumi.Input<pulumi.Input<string>[]>;
    thumbprint?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}
