// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PkiSecretBackendRole extends pulumi.CustomResource {
    /**
     * Get an existing PkiSecretBackendRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PkiSecretBackendRoleState, opts?: pulumi.CustomResourceOptions): PkiSecretBackendRole {
        return new PkiSecretBackendRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/pkiSecretBackendRole:PkiSecretBackendRole';

    /**
     * Returns true if the given object is an instance of PkiSecretBackendRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PkiSecretBackendRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PkiSecretBackendRole.__pulumiType;
    }

    /**
     * Flag to allow any name
     */
    public readonly allowAnyName!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow certificates matching the actual domain.
     */
    public readonly allowBareDomains!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow names containing glob patterns.
     */
    public readonly allowGlobDomains!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow IP SANs
     */
    public readonly allowIpSans!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow certificates for localhost.
     */
    public readonly allowLocalhost!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow certificates matching subdomains.
     */
    public readonly allowSubdomains!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow wildcard certificates
     */
    public readonly allowWildcardCertificates!: pulumi.Output<boolean | undefined>;
    /**
     * The domains of the role.
     */
    public readonly allowedDomains!: pulumi.Output<string[] | undefined>;
    /**
     * Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    public readonly allowedDomainsTemplate!: pulumi.Output<boolean | undefined>;
    /**
     * Defines allowed custom SANs
     */
    public readonly allowedOtherSans!: pulumi.Output<string[] | undefined>;
    /**
     * Defines allowed Subject serial numbers.
     */
    public readonly allowedSerialNumbers!: pulumi.Output<string[] | undefined>;
    /**
     * Defines allowed URI SANs
     */
    public readonly allowedUriSans!: pulumi.Output<string[] | undefined>;
    /**
     * Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    public readonly allowedUriSansTemplate!: pulumi.Output<boolean>;
    /**
     * The allowed User ID's.
     */
    public readonly allowedUserIds!: pulumi.Output<string[] | undefined>;
    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Flag to mark basic constraints valid when issuing non-CA certificates.
     */
    public readonly basicConstraintsValidForNonCa!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to specify certificates for client use.
     */
    public readonly clientFlag!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to specify certificates for code signing use.
     */
    public readonly codeSigningFlag!: pulumi.Output<boolean | undefined>;
    /**
     * The country of generated certificates.
     */
    public readonly countries!: pulumi.Output<string[] | undefined>;
    /**
     * Flag to specify certificates for email protection use.
     */
    public readonly emailProtectionFlag!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to allow only valid host names
     */
    public readonly enforceHostnames!: pulumi.Output<boolean | undefined>;
    /**
     * A list of extended key usage OIDs.
     */
    public readonly extKeyUsageOids!: pulumi.Output<string[] | undefined>;
    /**
     * Specify the allowed extended key usage constraint on issued certificates.
     */
    public readonly extKeyUsages!: pulumi.Output<string[] | undefined>;
    /**
     * Flag to generate leases with certificates.
     */
    public readonly generateLease!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the default issuer of this request.
     */
    public readonly issuerRef!: pulumi.Output<string>;
    /**
     * The number of bits of generated keys.
     */
    public readonly keyBits!: pulumi.Output<number | undefined>;
    /**
     * The generated key type.
     */
    public readonly keyType!: pulumi.Output<string | undefined>;
    /**
     * Specify the allowed key usage constraint on issued certificates.
     */
    public readonly keyUsages!: pulumi.Output<string[]>;
    /**
     * The locality of generated certificates.
     */
    public readonly localities!: pulumi.Output<string[] | undefined>;
    /**
     * The maximum TTL.
     */
    public readonly maxTtl!: pulumi.Output<string>;
    /**
     * Unique name for the role.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Flag to not store certificates in the storage backend.
     */
    public readonly noStore!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the duration by which to backdate the NotBefore property.
     */
    public readonly notBeforeDuration!: pulumi.Output<string>;
    /**
     * The organization of generated certificates.
     */
    public readonly organizations!: pulumi.Output<string[] | undefined>;
    /**
     * The organization unit of generated certificates.
     */
    public readonly ous!: pulumi.Output<string[] | undefined>;
    /**
     * Policy identifier block; can only be used with Vault 1.11+
     */
    public readonly policyIdentifier!: pulumi.Output<outputs.PkiSecretBackendRolePolicyIdentifier[] | undefined>;
    /**
     * Specify the list of allowed policies OIDs.
     */
    public readonly policyIdentifiers!: pulumi.Output<string[] | undefined>;
    /**
     * The postal code of generated certificates.
     */
    public readonly postalCodes!: pulumi.Output<string[] | undefined>;
    /**
     * The province of generated certificates.
     */
    public readonly provinces!: pulumi.Output<string[] | undefined>;
    /**
     * Flag to force CN usage.
     */
    public readonly requireCn!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to specify certificates for server use.
     */
    public readonly serverFlag!: pulumi.Output<boolean | undefined>;
    /**
     * The street address of generated certificates.
     */
    public readonly streetAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * The TTL.
     */
    public readonly ttl!: pulumi.Output<string>;
    /**
     * Flag to use the CN in the CSR.
     */
    public readonly useCsrCommonName!: pulumi.Output<boolean | undefined>;
    /**
     * Flag to use the SANs in the CSR.
     */
    public readonly useCsrSans!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PkiSecretBackendRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PkiSecretBackendRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PkiSecretBackendRoleArgs | PkiSecretBackendRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PkiSecretBackendRoleState | undefined;
            resourceInputs["allowAnyName"] = state ? state.allowAnyName : undefined;
            resourceInputs["allowBareDomains"] = state ? state.allowBareDomains : undefined;
            resourceInputs["allowGlobDomains"] = state ? state.allowGlobDomains : undefined;
            resourceInputs["allowIpSans"] = state ? state.allowIpSans : undefined;
            resourceInputs["allowLocalhost"] = state ? state.allowLocalhost : undefined;
            resourceInputs["allowSubdomains"] = state ? state.allowSubdomains : undefined;
            resourceInputs["allowWildcardCertificates"] = state ? state.allowWildcardCertificates : undefined;
            resourceInputs["allowedDomains"] = state ? state.allowedDomains : undefined;
            resourceInputs["allowedDomainsTemplate"] = state ? state.allowedDomainsTemplate : undefined;
            resourceInputs["allowedOtherSans"] = state ? state.allowedOtherSans : undefined;
            resourceInputs["allowedSerialNumbers"] = state ? state.allowedSerialNumbers : undefined;
            resourceInputs["allowedUriSans"] = state ? state.allowedUriSans : undefined;
            resourceInputs["allowedUriSansTemplate"] = state ? state.allowedUriSansTemplate : undefined;
            resourceInputs["allowedUserIds"] = state ? state.allowedUserIds : undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["basicConstraintsValidForNonCa"] = state ? state.basicConstraintsValidForNonCa : undefined;
            resourceInputs["clientFlag"] = state ? state.clientFlag : undefined;
            resourceInputs["codeSigningFlag"] = state ? state.codeSigningFlag : undefined;
            resourceInputs["countries"] = state ? state.countries : undefined;
            resourceInputs["emailProtectionFlag"] = state ? state.emailProtectionFlag : undefined;
            resourceInputs["enforceHostnames"] = state ? state.enforceHostnames : undefined;
            resourceInputs["extKeyUsageOids"] = state ? state.extKeyUsageOids : undefined;
            resourceInputs["extKeyUsages"] = state ? state.extKeyUsages : undefined;
            resourceInputs["generateLease"] = state ? state.generateLease : undefined;
            resourceInputs["issuerRef"] = state ? state.issuerRef : undefined;
            resourceInputs["keyBits"] = state ? state.keyBits : undefined;
            resourceInputs["keyType"] = state ? state.keyType : undefined;
            resourceInputs["keyUsages"] = state ? state.keyUsages : undefined;
            resourceInputs["localities"] = state ? state.localities : undefined;
            resourceInputs["maxTtl"] = state ? state.maxTtl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["noStore"] = state ? state.noStore : undefined;
            resourceInputs["notBeforeDuration"] = state ? state.notBeforeDuration : undefined;
            resourceInputs["organizations"] = state ? state.organizations : undefined;
            resourceInputs["ous"] = state ? state.ous : undefined;
            resourceInputs["policyIdentifier"] = state ? state.policyIdentifier : undefined;
            resourceInputs["policyIdentifiers"] = state ? state.policyIdentifiers : undefined;
            resourceInputs["postalCodes"] = state ? state.postalCodes : undefined;
            resourceInputs["provinces"] = state ? state.provinces : undefined;
            resourceInputs["requireCn"] = state ? state.requireCn : undefined;
            resourceInputs["serverFlag"] = state ? state.serverFlag : undefined;
            resourceInputs["streetAddresses"] = state ? state.streetAddresses : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["useCsrCommonName"] = state ? state.useCsrCommonName : undefined;
            resourceInputs["useCsrSans"] = state ? state.useCsrSans : undefined;
        } else {
            const args = argsOrState as PkiSecretBackendRoleArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            resourceInputs["allowAnyName"] = args ? args.allowAnyName : undefined;
            resourceInputs["allowBareDomains"] = args ? args.allowBareDomains : undefined;
            resourceInputs["allowGlobDomains"] = args ? args.allowGlobDomains : undefined;
            resourceInputs["allowIpSans"] = args ? args.allowIpSans : undefined;
            resourceInputs["allowLocalhost"] = args ? args.allowLocalhost : undefined;
            resourceInputs["allowSubdomains"] = args ? args.allowSubdomains : undefined;
            resourceInputs["allowWildcardCertificates"] = args ? args.allowWildcardCertificates : undefined;
            resourceInputs["allowedDomains"] = args ? args.allowedDomains : undefined;
            resourceInputs["allowedDomainsTemplate"] = args ? args.allowedDomainsTemplate : undefined;
            resourceInputs["allowedOtherSans"] = args ? args.allowedOtherSans : undefined;
            resourceInputs["allowedSerialNumbers"] = args ? args.allowedSerialNumbers : undefined;
            resourceInputs["allowedUriSans"] = args ? args.allowedUriSans : undefined;
            resourceInputs["allowedUriSansTemplate"] = args ? args.allowedUriSansTemplate : undefined;
            resourceInputs["allowedUserIds"] = args ? args.allowedUserIds : undefined;
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["basicConstraintsValidForNonCa"] = args ? args.basicConstraintsValidForNonCa : undefined;
            resourceInputs["clientFlag"] = args ? args.clientFlag : undefined;
            resourceInputs["codeSigningFlag"] = args ? args.codeSigningFlag : undefined;
            resourceInputs["countries"] = args ? args.countries : undefined;
            resourceInputs["emailProtectionFlag"] = args ? args.emailProtectionFlag : undefined;
            resourceInputs["enforceHostnames"] = args ? args.enforceHostnames : undefined;
            resourceInputs["extKeyUsageOids"] = args ? args.extKeyUsageOids : undefined;
            resourceInputs["extKeyUsages"] = args ? args.extKeyUsages : undefined;
            resourceInputs["generateLease"] = args ? args.generateLease : undefined;
            resourceInputs["issuerRef"] = args ? args.issuerRef : undefined;
            resourceInputs["keyBits"] = args ? args.keyBits : undefined;
            resourceInputs["keyType"] = args ? args.keyType : undefined;
            resourceInputs["keyUsages"] = args ? args.keyUsages : undefined;
            resourceInputs["localities"] = args ? args.localities : undefined;
            resourceInputs["maxTtl"] = args ? args.maxTtl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["noStore"] = args ? args.noStore : undefined;
            resourceInputs["notBeforeDuration"] = args ? args.notBeforeDuration : undefined;
            resourceInputs["organizations"] = args ? args.organizations : undefined;
            resourceInputs["ous"] = args ? args.ous : undefined;
            resourceInputs["policyIdentifier"] = args ? args.policyIdentifier : undefined;
            resourceInputs["policyIdentifiers"] = args ? args.policyIdentifiers : undefined;
            resourceInputs["postalCodes"] = args ? args.postalCodes : undefined;
            resourceInputs["provinces"] = args ? args.provinces : undefined;
            resourceInputs["requireCn"] = args ? args.requireCn : undefined;
            resourceInputs["serverFlag"] = args ? args.serverFlag : undefined;
            resourceInputs["streetAddresses"] = args ? args.streetAddresses : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["useCsrCommonName"] = args ? args.useCsrCommonName : undefined;
            resourceInputs["useCsrSans"] = args ? args.useCsrSans : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PkiSecretBackendRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PkiSecretBackendRole resources.
 */
export interface PkiSecretBackendRoleState {
    /**
     * Flag to allow any name
     */
    allowAnyName?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates matching the actual domain.
     */
    allowBareDomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow names containing glob patterns.
     */
    allowGlobDomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow IP SANs
     */
    allowIpSans?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates for localhost.
     */
    allowLocalhost?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates matching subdomains.
     */
    allowSubdomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow wildcard certificates
     */
    allowWildcardCertificates?: pulumi.Input<boolean>;
    /**
     * The domains of the role.
     */
    allowedDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    allowedDomainsTemplate?: pulumi.Input<boolean>;
    /**
     * Defines allowed custom SANs
     */
    allowedOtherSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines allowed Subject serial numbers.
     */
    allowedSerialNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines allowed URI SANs
     */
    allowedUriSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    allowedUriSansTemplate?: pulumi.Input<boolean>;
    /**
     * The allowed User ID's.
     */
    allowedUserIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    backend?: pulumi.Input<string>;
    /**
     * Flag to mark basic constraints valid when issuing non-CA certificates.
     */
    basicConstraintsValidForNonCa?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for client use.
     */
    clientFlag?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for code signing use.
     */
    codeSigningFlag?: pulumi.Input<boolean>;
    /**
     * The country of generated certificates.
     */
    countries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to specify certificates for email protection use.
     */
    emailProtectionFlag?: pulumi.Input<boolean>;
    /**
     * Flag to allow only valid host names
     */
    enforceHostnames?: pulumi.Input<boolean>;
    /**
     * A list of extended key usage OIDs.
     */
    extKeyUsageOids?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify the allowed extended key usage constraint on issued certificates.
     */
    extKeyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to generate leases with certificates.
     */
    generateLease?: pulumi.Input<boolean>;
    /**
     * Specifies the default issuer of this request.
     */
    issuerRef?: pulumi.Input<string>;
    /**
     * The number of bits of generated keys.
     */
    keyBits?: pulumi.Input<number>;
    /**
     * The generated key type.
     */
    keyType?: pulumi.Input<string>;
    /**
     * Specify the allowed key usage constraint on issued certificates.
     */
    keyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The locality of generated certificates.
     */
    localities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum TTL.
     */
    maxTtl?: pulumi.Input<string>;
    /**
     * Unique name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Flag to not store certificates in the storage backend.
     */
    noStore?: pulumi.Input<boolean>;
    /**
     * Specifies the duration by which to backdate the NotBefore property.
     */
    notBeforeDuration?: pulumi.Input<string>;
    /**
     * The organization of generated certificates.
     */
    organizations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The organization unit of generated certificates.
     */
    ous?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Policy identifier block; can only be used with Vault 1.11+
     */
    policyIdentifier?: pulumi.Input<pulumi.Input<inputs.PkiSecretBackendRolePolicyIdentifier>[]>;
    /**
     * Specify the list of allowed policies OIDs.
     */
    policyIdentifiers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The postal code of generated certificates.
     */
    postalCodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The province of generated certificates.
     */
    provinces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to force CN usage.
     */
    requireCn?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for server use.
     */
    serverFlag?: pulumi.Input<boolean>;
    /**
     * The street address of generated certificates.
     */
    streetAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The TTL.
     */
    ttl?: pulumi.Input<string>;
    /**
     * Flag to use the CN in the CSR.
     */
    useCsrCommonName?: pulumi.Input<boolean>;
    /**
     * Flag to use the SANs in the CSR.
     */
    useCsrSans?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a PkiSecretBackendRole resource.
 */
export interface PkiSecretBackendRoleArgs {
    /**
     * Flag to allow any name
     */
    allowAnyName?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates matching the actual domain.
     */
    allowBareDomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow names containing glob patterns.
     */
    allowGlobDomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow IP SANs
     */
    allowIpSans?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates for localhost.
     */
    allowLocalhost?: pulumi.Input<boolean>;
    /**
     * Flag to allow certificates matching subdomains.
     */
    allowSubdomains?: pulumi.Input<boolean>;
    /**
     * Flag to allow wildcard certificates
     */
    allowWildcardCertificates?: pulumi.Input<boolean>;
    /**
     * The domains of the role.
     */
    allowedDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    allowedDomainsTemplate?: pulumi.Input<boolean>;
    /**
     * Defines allowed custom SANs
     */
    allowedOtherSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines allowed Subject serial numbers.
     */
    allowedSerialNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines allowed URI SANs
     */
    allowedUriSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount
     * accessor>.name}})
     */
    allowedUriSansTemplate?: pulumi.Input<boolean>;
    /**
     * The allowed User ID's.
     */
    allowedUserIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The path of the PKI secret backend the resource belongs to.
     */
    backend: pulumi.Input<string>;
    /**
     * Flag to mark basic constraints valid when issuing non-CA certificates.
     */
    basicConstraintsValidForNonCa?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for client use.
     */
    clientFlag?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for code signing use.
     */
    codeSigningFlag?: pulumi.Input<boolean>;
    /**
     * The country of generated certificates.
     */
    countries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to specify certificates for email protection use.
     */
    emailProtectionFlag?: pulumi.Input<boolean>;
    /**
     * Flag to allow only valid host names
     */
    enforceHostnames?: pulumi.Input<boolean>;
    /**
     * A list of extended key usage OIDs.
     */
    extKeyUsageOids?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify the allowed extended key usage constraint on issued certificates.
     */
    extKeyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to generate leases with certificates.
     */
    generateLease?: pulumi.Input<boolean>;
    /**
     * Specifies the default issuer of this request.
     */
    issuerRef?: pulumi.Input<string>;
    /**
     * The number of bits of generated keys.
     */
    keyBits?: pulumi.Input<number>;
    /**
     * The generated key type.
     */
    keyType?: pulumi.Input<string>;
    /**
     * Specify the allowed key usage constraint on issued certificates.
     */
    keyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The locality of generated certificates.
     */
    localities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum TTL.
     */
    maxTtl?: pulumi.Input<string>;
    /**
     * Unique name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Flag to not store certificates in the storage backend.
     */
    noStore?: pulumi.Input<boolean>;
    /**
     * Specifies the duration by which to backdate the NotBefore property.
     */
    notBeforeDuration?: pulumi.Input<string>;
    /**
     * The organization of generated certificates.
     */
    organizations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The organization unit of generated certificates.
     */
    ous?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Policy identifier block; can only be used with Vault 1.11+
     */
    policyIdentifier?: pulumi.Input<pulumi.Input<inputs.PkiSecretBackendRolePolicyIdentifier>[]>;
    /**
     * Specify the list of allowed policies OIDs.
     */
    policyIdentifiers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The postal code of generated certificates.
     */
    postalCodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The province of generated certificates.
     */
    provinces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag to force CN usage.
     */
    requireCn?: pulumi.Input<boolean>;
    /**
     * Flag to specify certificates for server use.
     */
    serverFlag?: pulumi.Input<boolean>;
    /**
     * The street address of generated certificates.
     */
    streetAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The TTL.
     */
    ttl?: pulumi.Input<string>;
    /**
     * Flag to use the CN in the CSR.
     */
    useCsrCommonName?: pulumi.Input<boolean>;
    /**
     * Flag to use the SANs in the CSR.
     */
    useCsrSans?: pulumi.Input<boolean>;
}
