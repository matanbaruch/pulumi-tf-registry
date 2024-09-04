// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeyPairSslServerImport extends pulumi.CustomResource {
    /**
     * Get an existing KeyPairSslServerImport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyPairSslServerImportState, opts?: pulumi.CustomResourceOptions): KeyPairSslServerImport {
        return new KeyPairSslServerImport(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/keyPairSslServerImport:KeyPairSslServerImport';

    /**
     * Returns true if the given object is an instance of KeyPairSslServerImport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyPairSslServerImport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyPairSslServerImport.__pulumiType;
    }

    /**
     * Cryptographic Provider. This is only applicable if Hybrid HSM mode is true. (LOCAL, HSM)
     */
    public readonly cryptoProvider!: pulumi.Output<string | undefined>;
    /**
     * The end date up until which the item is valid, in ISO 8601 format (UTC)
     */
    public /*out*/ readonly expires!: pulumi.Output<string>;
    /**
     * Base-64 encoded PKCS12 or PEM file data. In the case of PEM, the raw (non-base-64) data is also accepted. In BCFIPS
     * mode, only PEM with PBES2 and AES or Triple DES encryption is accepted and 128-bit salt is required.
     */
    public readonly fileData!: pulumi.Output<string>;
    /**
     * Key pair file format. If specified, this field will control what file format is expected, otherwise the format will be
     * auto-detected. In BCFIPS mode, only PEM is supported. (PKCS12, PEM)
     */
    public readonly format!: pulumi.Output<string>;
    /**
     * The persistent, unique ID for the certificate. It can be any combination of [a-z0-9._-]. This property is
     * system-assigned if not specified.
     */
    public readonly importId!: pulumi.Output<string>;
    /**
     * The issuer's distinguished name
     */
    public /*out*/ readonly issuerDn!: pulumi.Output<string>;
    /**
     * The public key algorithm
     */
    public /*out*/ readonly keyAlgorithm!: pulumi.Output<string>;
    /**
     * The public key size
     */
    public /*out*/ readonly keySize!: pulumi.Output<number>;
    /**
     * Password for the file. In BCFIPS mode, the password must be at least 14 characters.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The local identity profile data store configuration.
     */
    public /*out*/ readonly rotationSettings!: pulumi.Output<outputs.KeyPairSslServerImportRotationSettings>;
    /**
     * The serial number assigned by the CA
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * SHA-1 fingerprint in Hex encoding
     */
    public /*out*/ readonly sha1Fingerprint!: pulumi.Output<string>;
    /**
     * SHA-256 fingerprint in Hex encoding
     */
    public /*out*/ readonly sha256Fingerprint!: pulumi.Output<string>;
    /**
     * The signature algorithm
     */
    public /*out*/ readonly signatureAlgorithm!: pulumi.Output<string>;
    /**
     * Status of the item.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The subject alternative names (SAN)
     */
    public /*out*/ readonly subjectAlternativeNames!: pulumi.Output<string[]>;
    /**
     * The subject's distinguished name
     */
    public /*out*/ readonly subjectDn!: pulumi.Output<string>;
    /**
     * The start date from which the item is valid, in ISO 8601 format (UTC)
     */
    public /*out*/ readonly validFrom!: pulumi.Output<string>;
    /**
     * The X.509 version to which the item conforms
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a KeyPairSslServerImport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyPairSslServerImportArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyPairSslServerImportArgs | KeyPairSslServerImportState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyPairSslServerImportState | undefined;
            resourceInputs["cryptoProvider"] = state ? state.cryptoProvider : undefined;
            resourceInputs["expires"] = state ? state.expires : undefined;
            resourceInputs["fileData"] = state ? state.fileData : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["importId"] = state ? state.importId : undefined;
            resourceInputs["issuerDn"] = state ? state.issuerDn : undefined;
            resourceInputs["keyAlgorithm"] = state ? state.keyAlgorithm : undefined;
            resourceInputs["keySize"] = state ? state.keySize : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["rotationSettings"] = state ? state.rotationSettings : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["sha1Fingerprint"] = state ? state.sha1Fingerprint : undefined;
            resourceInputs["sha256Fingerprint"] = state ? state.sha256Fingerprint : undefined;
            resourceInputs["signatureAlgorithm"] = state ? state.signatureAlgorithm : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subjectAlternativeNames"] = state ? state.subjectAlternativeNames : undefined;
            resourceInputs["subjectDn"] = state ? state.subjectDn : undefined;
            resourceInputs["validFrom"] = state ? state.validFrom : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as KeyPairSslServerImportArgs | undefined;
            if ((!args || args.fileData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileData'");
            }
            if ((!args || args.format === undefined) && !opts.urn) {
                throw new Error("Missing required property 'format'");
            }
            if ((!args || args.importId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'importId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["cryptoProvider"] = args ? args.cryptoProvider : undefined;
            resourceInputs["fileData"] = args ? args.fileData : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["importId"] = args ? args.importId : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["expires"] = undefined /*out*/;
            resourceInputs["issuerDn"] = undefined /*out*/;
            resourceInputs["keyAlgorithm"] = undefined /*out*/;
            resourceInputs["keySize"] = undefined /*out*/;
            resourceInputs["rotationSettings"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["sha1Fingerprint"] = undefined /*out*/;
            resourceInputs["sha256Fingerprint"] = undefined /*out*/;
            resourceInputs["signatureAlgorithm"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subjectAlternativeNames"] = undefined /*out*/;
            resourceInputs["subjectDn"] = undefined /*out*/;
            resourceInputs["validFrom"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KeyPairSslServerImport.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyPairSslServerImport resources.
 */
export interface KeyPairSslServerImportState {
    /**
     * Cryptographic Provider. This is only applicable if Hybrid HSM mode is true. (LOCAL, HSM)
     */
    cryptoProvider?: pulumi.Input<string>;
    /**
     * The end date up until which the item is valid, in ISO 8601 format (UTC)
     */
    expires?: pulumi.Input<string>;
    /**
     * Base-64 encoded PKCS12 or PEM file data. In the case of PEM, the raw (non-base-64) data is also accepted. In BCFIPS
     * mode, only PEM with PBES2 and AES or Triple DES encryption is accepted and 128-bit salt is required.
     */
    fileData?: pulumi.Input<string>;
    /**
     * Key pair file format. If specified, this field will control what file format is expected, otherwise the format will be
     * auto-detected. In BCFIPS mode, only PEM is supported. (PKCS12, PEM)
     */
    format?: pulumi.Input<string>;
    /**
     * The persistent, unique ID for the certificate. It can be any combination of [a-z0-9._-]. This property is
     * system-assigned if not specified.
     */
    importId?: pulumi.Input<string>;
    /**
     * The issuer's distinguished name
     */
    issuerDn?: pulumi.Input<string>;
    /**
     * The public key algorithm
     */
    keyAlgorithm?: pulumi.Input<string>;
    /**
     * The public key size
     */
    keySize?: pulumi.Input<number>;
    /**
     * Password for the file. In BCFIPS mode, the password must be at least 14 characters.
     */
    password?: pulumi.Input<string>;
    /**
     * The local identity profile data store configuration.
     */
    rotationSettings?: pulumi.Input<inputs.KeyPairSslServerImportRotationSettings>;
    /**
     * The serial number assigned by the CA
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * SHA-1 fingerprint in Hex encoding
     */
    sha1Fingerprint?: pulumi.Input<string>;
    /**
     * SHA-256 fingerprint in Hex encoding
     */
    sha256Fingerprint?: pulumi.Input<string>;
    /**
     * The signature algorithm
     */
    signatureAlgorithm?: pulumi.Input<string>;
    /**
     * Status of the item.
     */
    status?: pulumi.Input<string>;
    /**
     * The subject alternative names (SAN)
     */
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The subject's distinguished name
     */
    subjectDn?: pulumi.Input<string>;
    /**
     * The start date from which the item is valid, in ISO 8601 format (UTC)
     */
    validFrom?: pulumi.Input<string>;
    /**
     * The X.509 version to which the item conforms
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a KeyPairSslServerImport resource.
 */
export interface KeyPairSslServerImportArgs {
    /**
     * Cryptographic Provider. This is only applicable if Hybrid HSM mode is true. (LOCAL, HSM)
     */
    cryptoProvider?: pulumi.Input<string>;
    /**
     * Base-64 encoded PKCS12 or PEM file data. In the case of PEM, the raw (non-base-64) data is also accepted. In BCFIPS
     * mode, only PEM with PBES2 and AES or Triple DES encryption is accepted and 128-bit salt is required.
     */
    fileData: pulumi.Input<string>;
    /**
     * Key pair file format. If specified, this field will control what file format is expected, otherwise the format will be
     * auto-detected. In BCFIPS mode, only PEM is supported. (PKCS12, PEM)
     */
    format: pulumi.Input<string>;
    /**
     * The persistent, unique ID for the certificate. It can be any combination of [a-z0-9._-]. This property is
     * system-assigned if not specified.
     */
    importId: pulumi.Input<string>;
    /**
     * Password for the file. In BCFIPS mode, the password must be at least 14 characters.
     */
    password: pulumi.Input<string>;
}
