// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PasswordStorageScheme extends pulumi.CustomResource {
    /**
     * Get an existing PasswordStorageScheme resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PasswordStorageSchemeState, opts?: pulumi.CustomResourceOptions): PasswordStorageScheme {
        return new PasswordStorageScheme(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/passwordStorageScheme:PasswordStorageScheme';

    /**
     * Returns true if the given object is an instance of PasswordStorageScheme.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PasswordStorageScheme {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PasswordStorageScheme.__pulumiType;
    }

    /**
     * The external server with information to use when interacting with the AWS Secrets Manager service.
     */
    public readonly awsExternalServer!: pulumi.Output<string | undefined>;
    /**
     * The mechanism used to authenticate to the Azure service.
     */
    public readonly azureAuthenticationMethod!: pulumi.Output<string | undefined>;
    /**
     * Specifies the cost factor to use when encoding passwords with Bcrypt. A higher cost factor requires more processing to
     * generate a password, which makes attacks against the password more expensive.
     */
    public readonly bcryptCostFactor!: pulumi.Output<number>;
    /**
     * An external server definition with information needed to connect and authenticate to the Conjur instance containing user
     * passwords.
     */
    public readonly conjurExternalServer!: pulumi.Output<string | undefined>;
    /**
     * The default name of the field in JSON objects contained in the AWS Secrets Manager service that contains the password
     * for the target user.
     */
    public readonly defaultField!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of bytes to use
     * for the derived key. The value must be greater than or equal to 8 and less than or equal to 512. - `pbkdf2`: Specifies
     * the number of bytes to use for the derived key. The value must be greater than or equal to 8.
     */
    public readonly derivedKeyLengthBytes!: pulumi.Output<number>;
    /**
     * A description for this Password Storage Scheme
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies the digest algorithm that will be used when encoding passwords.
     */
    public readonly digestAlgorithm!: pulumi.Output<string>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `argon2d`, `crypt`, `argon2i`, `aes`, `argon2id`,
     * `vault`, `third-party`, `argon2`, `third-party-enhanced`, `pbkdf2`, `salted-sha384`, `aes-256`, `bcrypt`, `blowfish`,
     * `amazon-secrets-manager`, `azure-key-vault`, `conjur`, `salted-sha512`, `scrypt`]: Indicates whether the Password
     * Storage Scheme is enabled for use. - `base64`: Indicates whether the Base64 Password Storage Scheme is enabled for use.
     * - `salted-md5`: Indicates whether the Salted MD5 Password Storage Scheme is enabled for use. - `rc4`: Indicates whether
     * the RC4 Password Storage Scheme is enabled for use. - `triple-des`: Indicates whether the Triple DES Password Storage
     * Scheme is enabled for use. - `clear`: Indicates whether the Clear Password Storage Scheme is enabled for use. - `sha1`:
     * Indicates whether the SHA1 Password Storage Scheme is enabled for use. - `salted-sha1`: Indicates whether the Salted
     * SHA1 Password Storage Scheme is enabled for use. - `md5`: Indicates whether the MD5 Password Storage Scheme is enabled
     * for use.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The identifier for the encryption settings definition that should be used to derive the encryption key to use when
     * encrypting new passwords. If this is not provided, the server's preferred encryption settings definition will be used.
     */
    public readonly encryptionSettingsDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - `third-party`: The set of arguments used to customize the behavior for the Third
     * Party Password Storage Scheme. Each configuration property should be given in the form 'name=value'. -
     * `third-party-enhanced`: The set of arguments used to customize the behavior for the Third Party Enhanced Password
     * Storage Scheme. Each configuration property should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * When the `type` attribute is set to: - `third-party`: The fully-qualified name of the Java class providing the logic for
     * the Third Party Password Storage Scheme. - `third-party-enhanced`: The fully-qualified name of the Java class providing
     * the logic for the Third Party Enhanced Password Storage Scheme.
     */
    public readonly extensionClass!: pulumi.Output<string | undefined>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Azure service.
     */
    public readonly httpProxyExternalServer!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of rounds of
     * cryptographic processing required in the course of encoding each password. - `pbkdf2`: Specifies the number of
     * iterations to use when encoding passwords. The value must be greater than or equal to 1000.
     */
    public readonly iterationCount!: pulumi.Output<number>;
    /**
     * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
     */
    public readonly keyVaultUri!: pulumi.Output<string | undefined>;
    /**
     * Specifies the maximum allowed length, in bytes, for passwords encoded with this scheme, which can help mitigate denial
     * of service attacks from clients that attempt to bind with very long passwords.
     */
    public readonly maxPasswordLength!: pulumi.Output<number>;
    /**
     * The number of kilobytes of memory that must be used in the course of encoding each password.
     */
    public readonly memoryUsageKb!: pulumi.Output<number | undefined>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies the number of digest rounds to use for the SHA-2 encodings. This will not be used for the legacy or MD5-based
     * encodings.
     */
    public readonly numDigestRounds!: pulumi.Output<number>;
    /**
     * The number of concurrent threads that will be used in the course of encoding each password.
     */
    public readonly parallelismFactor!: pulumi.Output<number | undefined>;
    /**
     * Specifies the mechanism that should be used to encode clear-text passwords for use with this scheme.
     */
    public readonly passwordEncodingMechanism!: pulumi.Output<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.PasswordStorageSchemeRequiredAction[]>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `salted-md5`, `salted-sha384`, `salted-sha1`,
     * `salted-sha512`]: Specifies the number of bytes to use for the generated salt. - One of [`argon2d`, `argon2i`,
     * `argon2id`, `argon2`]: The number of bytes to use for the generated salt. - `pbkdf2`: Specifies the number of bytes to
     * use for the generated salt. The value must be greater than or equal to 8.
     */
    public readonly saltLengthBytes!: pulumi.Output<number>;
    /**
     * Specifies the block size for the digest that will be used in the course of encoding passwords. Increasing the block size
     * while keeping the CPU/memory cost factor constant will increase the amount of memory required to encode a password, but
     * it also increases the ratio of sequential memory access to random memory access (and sequential memory access is
     * generally faster than random memory access).
     */
    public readonly scryptBlockSize!: pulumi.Output<number>;
    /**
     * Specifies the exponent that should be used for the CPU/memory cost factor. The cost factor must be a power of two, so
     * the value of this property represents the power to which two is raised. The CPU/memory cost factor specifies the number
     * of iterations required for encoding the password, and also affects the amount of memory required during processing. A
     * higher cost factor requires more processing and more memory to generate a password, which makes attacks against the
     * password more expensive.
     */
    public readonly scryptCpuMemoryCostFactorExponent!: pulumi.Output<number>;
    /**
     * Specifies the number of times that scrypt has to perform the entire encoding process to produce the final result.
     */
    public readonly scryptParallelizationParameter!: pulumi.Output<number>;
    /**
     * The type of Password Storage Scheme resource. Options are ['salted-sha256', 'argon2d', 'crypt', 'argon2i', 'base64',
     * 'salted-md5', 'aes', 'argon2id', 'vault', 'third-party', 'argon2', 'third-party-enhanced', 'pbkdf2', 'rc4',
     * 'salted-sha384', 'triple-des', 'clear', 'aes-256', 'bcrypt', 'blowfish', 'sha1', 'amazon-secrets-manager',
     * 'azure-key-vault', 'conjur', 'salted-sha1', 'salted-sha512', 'scrypt', 'md5']
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * An external server definition with information needed to connect and authenticate to the Vault instance containing the
     * passphrase.
     */
    public readonly vaultExternalServer!: pulumi.Output<string | undefined>;

    /**
     * Create a PasswordStorageScheme resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PasswordStorageSchemeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PasswordStorageSchemeArgs | PasswordStorageSchemeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PasswordStorageSchemeState | undefined;
            resourceInputs["awsExternalServer"] = state ? state.awsExternalServer : undefined;
            resourceInputs["azureAuthenticationMethod"] = state ? state.azureAuthenticationMethod : undefined;
            resourceInputs["bcryptCostFactor"] = state ? state.bcryptCostFactor : undefined;
            resourceInputs["conjurExternalServer"] = state ? state.conjurExternalServer : undefined;
            resourceInputs["defaultField"] = state ? state.defaultField : undefined;
            resourceInputs["derivedKeyLengthBytes"] = state ? state.derivedKeyLengthBytes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["digestAlgorithm"] = state ? state.digestAlgorithm : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["encryptionSettingsDefinitionId"] = state ? state.encryptionSettingsDefinitionId : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["httpProxyExternalServer"] = state ? state.httpProxyExternalServer : undefined;
            resourceInputs["iterationCount"] = state ? state.iterationCount : undefined;
            resourceInputs["keyVaultUri"] = state ? state.keyVaultUri : undefined;
            resourceInputs["maxPasswordLength"] = state ? state.maxPasswordLength : undefined;
            resourceInputs["memoryUsageKb"] = state ? state.memoryUsageKb : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["numDigestRounds"] = state ? state.numDigestRounds : undefined;
            resourceInputs["parallelismFactor"] = state ? state.parallelismFactor : undefined;
            resourceInputs["passwordEncodingMechanism"] = state ? state.passwordEncodingMechanism : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["saltLengthBytes"] = state ? state.saltLengthBytes : undefined;
            resourceInputs["scryptBlockSize"] = state ? state.scryptBlockSize : undefined;
            resourceInputs["scryptCpuMemoryCostFactorExponent"] = state ? state.scryptCpuMemoryCostFactorExponent : undefined;
            resourceInputs["scryptParallelizationParameter"] = state ? state.scryptParallelizationParameter : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vaultExternalServer"] = state ? state.vaultExternalServer : undefined;
        } else {
            const args = argsOrState as PasswordStorageSchemeArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["awsExternalServer"] = args ? args.awsExternalServer : undefined;
            resourceInputs["azureAuthenticationMethod"] = args ? args.azureAuthenticationMethod : undefined;
            resourceInputs["bcryptCostFactor"] = args ? args.bcryptCostFactor : undefined;
            resourceInputs["conjurExternalServer"] = args ? args.conjurExternalServer : undefined;
            resourceInputs["defaultField"] = args ? args.defaultField : undefined;
            resourceInputs["derivedKeyLengthBytes"] = args ? args.derivedKeyLengthBytes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["digestAlgorithm"] = args ? args.digestAlgorithm : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["encryptionSettingsDefinitionId"] = args ? args.encryptionSettingsDefinitionId : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["httpProxyExternalServer"] = args ? args.httpProxyExternalServer : undefined;
            resourceInputs["iterationCount"] = args ? args.iterationCount : undefined;
            resourceInputs["keyVaultUri"] = args ? args.keyVaultUri : undefined;
            resourceInputs["maxPasswordLength"] = args ? args.maxPasswordLength : undefined;
            resourceInputs["memoryUsageKb"] = args ? args.memoryUsageKb : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["numDigestRounds"] = args ? args.numDigestRounds : undefined;
            resourceInputs["parallelismFactor"] = args ? args.parallelismFactor : undefined;
            resourceInputs["passwordEncodingMechanism"] = args ? args.passwordEncodingMechanism : undefined;
            resourceInputs["saltLengthBytes"] = args ? args.saltLengthBytes : undefined;
            resourceInputs["scryptBlockSize"] = args ? args.scryptBlockSize : undefined;
            resourceInputs["scryptCpuMemoryCostFactorExponent"] = args ? args.scryptCpuMemoryCostFactorExponent : undefined;
            resourceInputs["scryptParallelizationParameter"] = args ? args.scryptParallelizationParameter : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vaultExternalServer"] = args ? args.vaultExternalServer : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PasswordStorageScheme.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PasswordStorageScheme resources.
 */
export interface PasswordStorageSchemeState {
    /**
     * The external server with information to use when interacting with the AWS Secrets Manager service.
     */
    awsExternalServer?: pulumi.Input<string>;
    /**
     * The mechanism used to authenticate to the Azure service.
     */
    azureAuthenticationMethod?: pulumi.Input<string>;
    /**
     * Specifies the cost factor to use when encoding passwords with Bcrypt. A higher cost factor requires more processing to
     * generate a password, which makes attacks against the password more expensive.
     */
    bcryptCostFactor?: pulumi.Input<number>;
    /**
     * An external server definition with information needed to connect and authenticate to the Conjur instance containing user
     * passwords.
     */
    conjurExternalServer?: pulumi.Input<string>;
    /**
     * The default name of the field in JSON objects contained in the AWS Secrets Manager service that contains the password
     * for the target user.
     */
    defaultField?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of bytes to use
     * for the derived key. The value must be greater than or equal to 8 and less than or equal to 512. - `pbkdf2`: Specifies
     * the number of bytes to use for the derived key. The value must be greater than or equal to 8.
     */
    derivedKeyLengthBytes?: pulumi.Input<number>;
    /**
     * A description for this Password Storage Scheme
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the digest algorithm that will be used when encoding passwords.
     */
    digestAlgorithm?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `argon2d`, `crypt`, `argon2i`, `aes`, `argon2id`,
     * `vault`, `third-party`, `argon2`, `third-party-enhanced`, `pbkdf2`, `salted-sha384`, `aes-256`, `bcrypt`, `blowfish`,
     * `amazon-secrets-manager`, `azure-key-vault`, `conjur`, `salted-sha512`, `scrypt`]: Indicates whether the Password
     * Storage Scheme is enabled for use. - `base64`: Indicates whether the Base64 Password Storage Scheme is enabled for use.
     * - `salted-md5`: Indicates whether the Salted MD5 Password Storage Scheme is enabled for use. - `rc4`: Indicates whether
     * the RC4 Password Storage Scheme is enabled for use. - `triple-des`: Indicates whether the Triple DES Password Storage
     * Scheme is enabled for use. - `clear`: Indicates whether the Clear Password Storage Scheme is enabled for use. - `sha1`:
     * Indicates whether the SHA1 Password Storage Scheme is enabled for use. - `salted-sha1`: Indicates whether the Salted
     * SHA1 Password Storage Scheme is enabled for use. - `md5`: Indicates whether the MD5 Password Storage Scheme is enabled
     * for use.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The identifier for the encryption settings definition that should be used to derive the encryption key to use when
     * encrypting new passwords. If this is not provided, the server's preferred encryption settings definition will be used.
     */
    encryptionSettingsDefinitionId?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `third-party`: The set of arguments used to customize the behavior for the Third
     * Party Password Storage Scheme. Each configuration property should be given in the form 'name=value'. -
     * `third-party-enhanced`: The set of arguments used to customize the behavior for the Third Party Enhanced Password
     * Storage Scheme. Each configuration property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When the `type` attribute is set to: - `third-party`: The fully-qualified name of the Java class providing the logic for
     * the Third Party Password Storage Scheme. - `third-party-enhanced`: The fully-qualified name of the Java class providing
     * the logic for the Third Party Enhanced Password Storage Scheme.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Azure service.
     */
    httpProxyExternalServer?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of rounds of
     * cryptographic processing required in the course of encoding each password. - `pbkdf2`: Specifies the number of
     * iterations to use when encoding passwords. The value must be greater than or equal to 1000.
     */
    iterationCount?: pulumi.Input<number>;
    /**
     * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Specifies the maximum allowed length, in bytes, for passwords encoded with this scheme, which can help mitigate denial
     * of service attacks from clients that attempt to bind with very long passwords.
     */
    maxPasswordLength?: pulumi.Input<number>;
    /**
     * The number of kilobytes of memory that must be used in the course of encoding each password.
     */
    memoryUsageKb?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the number of digest rounds to use for the SHA-2 encodings. This will not be used for the legacy or MD5-based
     * encodings.
     */
    numDigestRounds?: pulumi.Input<number>;
    /**
     * The number of concurrent threads that will be used in the course of encoding each password.
     */
    parallelismFactor?: pulumi.Input<number>;
    /**
     * Specifies the mechanism that should be used to encode clear-text passwords for use with this scheme.
     */
    passwordEncodingMechanism?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.PasswordStorageSchemeRequiredAction>[]>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `salted-md5`, `salted-sha384`, `salted-sha1`,
     * `salted-sha512`]: Specifies the number of bytes to use for the generated salt. - One of [`argon2d`, `argon2i`,
     * `argon2id`, `argon2`]: The number of bytes to use for the generated salt. - `pbkdf2`: Specifies the number of bytes to
     * use for the generated salt. The value must be greater than or equal to 8.
     */
    saltLengthBytes?: pulumi.Input<number>;
    /**
     * Specifies the block size for the digest that will be used in the course of encoding passwords. Increasing the block size
     * while keeping the CPU/memory cost factor constant will increase the amount of memory required to encode a password, but
     * it also increases the ratio of sequential memory access to random memory access (and sequential memory access is
     * generally faster than random memory access).
     */
    scryptBlockSize?: pulumi.Input<number>;
    /**
     * Specifies the exponent that should be used for the CPU/memory cost factor. The cost factor must be a power of two, so
     * the value of this property represents the power to which two is raised. The CPU/memory cost factor specifies the number
     * of iterations required for encoding the password, and also affects the amount of memory required during processing. A
     * higher cost factor requires more processing and more memory to generate a password, which makes attacks against the
     * password more expensive.
     */
    scryptCpuMemoryCostFactorExponent?: pulumi.Input<number>;
    /**
     * Specifies the number of times that scrypt has to perform the entire encoding process to produce the final result.
     */
    scryptParallelizationParameter?: pulumi.Input<number>;
    /**
     * The type of Password Storage Scheme resource. Options are ['salted-sha256', 'argon2d', 'crypt', 'argon2i', 'base64',
     * 'salted-md5', 'aes', 'argon2id', 'vault', 'third-party', 'argon2', 'third-party-enhanced', 'pbkdf2', 'rc4',
     * 'salted-sha384', 'triple-des', 'clear', 'aes-256', 'bcrypt', 'blowfish', 'sha1', 'amazon-secrets-manager',
     * 'azure-key-vault', 'conjur', 'salted-sha1', 'salted-sha512', 'scrypt', 'md5']
     */
    type?: pulumi.Input<string>;
    /**
     * An external server definition with information needed to connect and authenticate to the Vault instance containing the
     * passphrase.
     */
    vaultExternalServer?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PasswordStorageScheme resource.
 */
export interface PasswordStorageSchemeArgs {
    /**
     * The external server with information to use when interacting with the AWS Secrets Manager service.
     */
    awsExternalServer?: pulumi.Input<string>;
    /**
     * The mechanism used to authenticate to the Azure service.
     */
    azureAuthenticationMethod?: pulumi.Input<string>;
    /**
     * Specifies the cost factor to use when encoding passwords with Bcrypt. A higher cost factor requires more processing to
     * generate a password, which makes attacks against the password more expensive.
     */
    bcryptCostFactor?: pulumi.Input<number>;
    /**
     * An external server definition with information needed to connect and authenticate to the Conjur instance containing user
     * passwords.
     */
    conjurExternalServer?: pulumi.Input<string>;
    /**
     * The default name of the field in JSON objects contained in the AWS Secrets Manager service that contains the password
     * for the target user.
     */
    defaultField?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of bytes to use
     * for the derived key. The value must be greater than or equal to 8 and less than or equal to 512. - `pbkdf2`: Specifies
     * the number of bytes to use for the derived key. The value must be greater than or equal to 8.
     */
    derivedKeyLengthBytes?: pulumi.Input<number>;
    /**
     * A description for this Password Storage Scheme
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the digest algorithm that will be used when encoding passwords.
     */
    digestAlgorithm?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `argon2d`, `crypt`, `argon2i`, `aes`, `argon2id`,
     * `vault`, `third-party`, `argon2`, `third-party-enhanced`, `pbkdf2`, `salted-sha384`, `aes-256`, `bcrypt`, `blowfish`,
     * `amazon-secrets-manager`, `azure-key-vault`, `conjur`, `salted-sha512`, `scrypt`]: Indicates whether the Password
     * Storage Scheme is enabled for use. - `base64`: Indicates whether the Base64 Password Storage Scheme is enabled for use.
     * - `salted-md5`: Indicates whether the Salted MD5 Password Storage Scheme is enabled for use. - `rc4`: Indicates whether
     * the RC4 Password Storage Scheme is enabled for use. - `triple-des`: Indicates whether the Triple DES Password Storage
     * Scheme is enabled for use. - `clear`: Indicates whether the Clear Password Storage Scheme is enabled for use. - `sha1`:
     * Indicates whether the SHA1 Password Storage Scheme is enabled for use. - `salted-sha1`: Indicates whether the Salted
     * SHA1 Password Storage Scheme is enabled for use. - `md5`: Indicates whether the MD5 Password Storage Scheme is enabled
     * for use.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The identifier for the encryption settings definition that should be used to derive the encryption key to use when
     * encrypting new passwords. If this is not provided, the server's preferred encryption settings definition will be used.
     */
    encryptionSettingsDefinitionId?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `third-party`: The set of arguments used to customize the behavior for the Third
     * Party Password Storage Scheme. Each configuration property should be given in the form 'name=value'. -
     * `third-party-enhanced`: The set of arguments used to customize the behavior for the Third Party Enhanced Password
     * Storage Scheme. Each configuration property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When the `type` attribute is set to: - `third-party`: The fully-qualified name of the Java class providing the logic for
     * the Third Party Password Storage Scheme. - `third-party-enhanced`: The fully-qualified name of the Java class providing
     * the logic for the Third Party Enhanced Password Storage Scheme.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.0+. A reference to an HTTP proxy server that should be used for
     * requests sent to the Azure service.
     */
    httpProxyExternalServer?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`argon2d`, `argon2i`, `argon2id`, `argon2`]: The number of rounds of
     * cryptographic processing required in the course of encoding each password. - `pbkdf2`: Specifies the number of
     * iterations to use when encoding passwords. The value must be greater than or equal to 1000.
     */
    iterationCount?: pulumi.Input<number>;
    /**
     * The URI that identifies the Azure Key Vault from which the secret is to be retrieved.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Specifies the maximum allowed length, in bytes, for passwords encoded with this scheme, which can help mitigate denial
     * of service attacks from clients that attempt to bind with very long passwords.
     */
    maxPasswordLength?: pulumi.Input<number>;
    /**
     * The number of kilobytes of memory that must be used in the course of encoding each password.
     */
    memoryUsageKb?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the number of digest rounds to use for the SHA-2 encodings. This will not be used for the legacy or MD5-based
     * encodings.
     */
    numDigestRounds?: pulumi.Input<number>;
    /**
     * The number of concurrent threads that will be used in the course of encoding each password.
     */
    parallelismFactor?: pulumi.Input<number>;
    /**
     * Specifies the mechanism that should be used to encode clear-text passwords for use with this scheme.
     */
    passwordEncodingMechanism?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`salted-sha256`, `salted-md5`, `salted-sha384`, `salted-sha1`,
     * `salted-sha512`]: Specifies the number of bytes to use for the generated salt. - One of [`argon2d`, `argon2i`,
     * `argon2id`, `argon2`]: The number of bytes to use for the generated salt. - `pbkdf2`: Specifies the number of bytes to
     * use for the generated salt. The value must be greater than or equal to 8.
     */
    saltLengthBytes?: pulumi.Input<number>;
    /**
     * Specifies the block size for the digest that will be used in the course of encoding passwords. Increasing the block size
     * while keeping the CPU/memory cost factor constant will increase the amount of memory required to encode a password, but
     * it also increases the ratio of sequential memory access to random memory access (and sequential memory access is
     * generally faster than random memory access).
     */
    scryptBlockSize?: pulumi.Input<number>;
    /**
     * Specifies the exponent that should be used for the CPU/memory cost factor. The cost factor must be a power of two, so
     * the value of this property represents the power to which two is raised. The CPU/memory cost factor specifies the number
     * of iterations required for encoding the password, and also affects the amount of memory required during processing. A
     * higher cost factor requires more processing and more memory to generate a password, which makes attacks against the
     * password more expensive.
     */
    scryptCpuMemoryCostFactorExponent?: pulumi.Input<number>;
    /**
     * Specifies the number of times that scrypt has to perform the entire encoding process to produce the final result.
     */
    scryptParallelizationParameter?: pulumi.Input<number>;
    /**
     * The type of Password Storage Scheme resource. Options are ['salted-sha256', 'argon2d', 'crypt', 'argon2i', 'base64',
     * 'salted-md5', 'aes', 'argon2id', 'vault', 'third-party', 'argon2', 'third-party-enhanced', 'pbkdf2', 'rc4',
     * 'salted-sha384', 'triple-des', 'clear', 'aes-256', 'bcrypt', 'blowfish', 'sha1', 'amazon-secrets-manager',
     * 'azure-key-vault', 'conjur', 'salted-sha1', 'salted-sha512', 'scrypt', 'md5']
     */
    type: pulumi.Input<string>;
    /**
     * An external server definition with information needed to connect and authenticate to the Vault instance containing the
     * passphrase.
     */
    vaultExternalServer?: pulumi.Input<string>;
}
