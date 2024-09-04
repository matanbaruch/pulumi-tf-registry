// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KeyManagerProvider extends pulumi.CustomResource {
    /**
     * Get an existing KeyManagerProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyManagerProviderState, opts?: pulumi.CustomResourceOptions): KeyManagerProvider {
        return new KeyManagerProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/keyManagerProvider:KeyManagerProvider';

    /**
     * Returns true if the given object is an instance of KeyManagerProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KeyManagerProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KeyManagerProvider.__pulumiType;
    }

    /**
     * A description for this Key Manager Provider
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the Key Manager Provider is enabled for use.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Key Manager Provider. Each configuration
     * property should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Key Manager Provider.
     */
    public readonly extensionClass!: pulumi.Output<string | undefined>;
    /**
     * Specifies the path to the file that contains the private key information. This may be an absolute path, or a path that
     * is relative to the Directory Server instance root.
     */
    public readonly keyStoreFile!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the PIN needed to access the File Based Key Manager
     * Provider. - `pkcs11`: Specifies the PIN needed to access the PKCS11 Key Manager Provider.
     */
    public readonly keyStorePin!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the path to the text file whose only contents should be a
     * single line containing the clear-text PIN needed to access the File Based Key Manager Provider. - `pkcs11`: Specifies
     * the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the
     * PKCS11 Key Manager Provider.
     */
    public readonly keyStorePinFile!: pulumi.Output<string | undefined>;
    /**
     * When the `type` attribute is set to: - `file-based`: The passphrase provider to use to obtain the clear-text PIN needed
     * to access the File Based Key Manager Provider. - `pkcs11`: The passphrase provider to use to obtain the clear-text PIN
     * needed to access the PKCS11 Key Manager Provider.
     */
    public readonly keyStorePinPassphraseProvider!: pulumi.Output<string | undefined>;
    /**
     * Specifies the format for the data in the key store file.
     */
    public readonly keyStoreType!: pulumi.Output<string | undefined>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * The key store type to use when obtaining an instance of a key store for interacting with a PKCS #11 token.
     */
    public readonly pkcs11KeyStoreType!: pulumi.Output<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.1+. The maximum length of time that data retrieved from PKCS #11 tokens
     * may be cached for reuse. Caching might be necessary if there is noticable latency when accessing the token, for example
     * if the token uses a remote key store. A value of zero milliseconds indicates that no caching should be performed.
     */
    public readonly pkcs11MaxCacheDuration!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the Java security provider class that implements support for interacting with PKCS #11
     * tokens.
     */
    public readonly pkcs11ProviderClass!: pulumi.Output<string | undefined>;
    /**
     * The path to the file to use to configure the security provider that implements support for interacting with PKCS #11
     * tokens.
     */
    public readonly pkcs11ProviderConfigurationFile!: pulumi.Output<string | undefined>;
    /**
     * Specifies the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is
     * specified the PIN defaults to the key store PIN.
     */
    public readonly privateKeyPin!: pulumi.Output<string | undefined>;
    /**
     * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to
     * access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key
     * store PIN.
     */
    public readonly privateKeyPinFile!: pulumi.Output<string | undefined>;
    /**
     * The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Key Manager Provider private
     * key. If no private key PIN is specified the PIN defaults to the key store PIN.
     */
    public readonly privateKeyPinPassphraseProvider!: pulumi.Output<string | undefined>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.KeyManagerProviderRequiredAction[]>;
    /**
     * The type of Key Manager Provider resource. Options are ['file-based', 'custom', 'pkcs11', 'third-party']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a KeyManagerProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyManagerProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyManagerProviderArgs | KeyManagerProviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KeyManagerProviderState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["keyStoreFile"] = state ? state.keyStoreFile : undefined;
            resourceInputs["keyStorePin"] = state ? state.keyStorePin : undefined;
            resourceInputs["keyStorePinFile"] = state ? state.keyStorePinFile : undefined;
            resourceInputs["keyStorePinPassphraseProvider"] = state ? state.keyStorePinPassphraseProvider : undefined;
            resourceInputs["keyStoreType"] = state ? state.keyStoreType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["pkcs11KeyStoreType"] = state ? state.pkcs11KeyStoreType : undefined;
            resourceInputs["pkcs11MaxCacheDuration"] = state ? state.pkcs11MaxCacheDuration : undefined;
            resourceInputs["pkcs11ProviderClass"] = state ? state.pkcs11ProviderClass : undefined;
            resourceInputs["pkcs11ProviderConfigurationFile"] = state ? state.pkcs11ProviderConfigurationFile : undefined;
            resourceInputs["privateKeyPin"] = state ? state.privateKeyPin : undefined;
            resourceInputs["privateKeyPinFile"] = state ? state.privateKeyPinFile : undefined;
            resourceInputs["privateKeyPinPassphraseProvider"] = state ? state.privateKeyPinPassphraseProvider : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as KeyManagerProviderArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["keyStoreFile"] = args ? args.keyStoreFile : undefined;
            resourceInputs["keyStorePin"] = args?.keyStorePin ? pulumi.secret(args.keyStorePin) : undefined;
            resourceInputs["keyStorePinFile"] = args ? args.keyStorePinFile : undefined;
            resourceInputs["keyStorePinPassphraseProvider"] = args ? args.keyStorePinPassphraseProvider : undefined;
            resourceInputs["keyStoreType"] = args ? args.keyStoreType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pkcs11KeyStoreType"] = args ? args.pkcs11KeyStoreType : undefined;
            resourceInputs["pkcs11MaxCacheDuration"] = args ? args.pkcs11MaxCacheDuration : undefined;
            resourceInputs["pkcs11ProviderClass"] = args ? args.pkcs11ProviderClass : undefined;
            resourceInputs["pkcs11ProviderConfigurationFile"] = args ? args.pkcs11ProviderConfigurationFile : undefined;
            resourceInputs["privateKeyPin"] = args?.privateKeyPin ? pulumi.secret(args.privateKeyPin) : undefined;
            resourceInputs["privateKeyPinFile"] = args ? args.privateKeyPinFile : undefined;
            resourceInputs["privateKeyPinPassphraseProvider"] = args ? args.privateKeyPinPassphraseProvider : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["keyStorePin", "privateKeyPin"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KeyManagerProvider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KeyManagerProvider resources.
 */
export interface KeyManagerProviderState {
    /**
     * A description for this Key Manager Provider
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Key Manager Provider is enabled for use.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Key Manager Provider. Each configuration
     * property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Key Manager Provider.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Specifies the path to the file that contains the private key information. This may be an absolute path, or a path that
     * is relative to the Directory Server instance root.
     */
    keyStoreFile?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the PIN needed to access the File Based Key Manager
     * Provider. - `pkcs11`: Specifies the PIN needed to access the PKCS11 Key Manager Provider.
     */
    keyStorePin?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the path to the text file whose only contents should be a
     * single line containing the clear-text PIN needed to access the File Based Key Manager Provider. - `pkcs11`: Specifies
     * the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the
     * PKCS11 Key Manager Provider.
     */
    keyStorePinFile?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: The passphrase provider to use to obtain the clear-text PIN needed
     * to access the File Based Key Manager Provider. - `pkcs11`: The passphrase provider to use to obtain the clear-text PIN
     * needed to access the PKCS11 Key Manager Provider.
     */
    keyStorePinPassphraseProvider?: pulumi.Input<string>;
    /**
     * Specifies the format for the data in the key store file.
     */
    keyStoreType?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The key store type to use when obtaining an instance of a key store for interacting with a PKCS #11 token.
     */
    pkcs11KeyStoreType?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.1+. The maximum length of time that data retrieved from PKCS #11 tokens
     * may be cached for reuse. Caching might be necessary if there is noticable latency when accessing the token, for example
     * if the token uses a remote key store. A value of zero milliseconds indicates that no caching should be performed.
     */
    pkcs11MaxCacheDuration?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the Java security provider class that implements support for interacting with PKCS #11
     * tokens.
     */
    pkcs11ProviderClass?: pulumi.Input<string>;
    /**
     * The path to the file to use to configure the security provider that implements support for interacting with PKCS #11
     * tokens.
     */
    pkcs11ProviderConfigurationFile?: pulumi.Input<string>;
    /**
     * Specifies the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is
     * specified the PIN defaults to the key store PIN.
     */
    privateKeyPin?: pulumi.Input<string>;
    /**
     * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to
     * access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key
     * store PIN.
     */
    privateKeyPinFile?: pulumi.Input<string>;
    /**
     * The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Key Manager Provider private
     * key. If no private key PIN is specified the PIN defaults to the key store PIN.
     */
    privateKeyPinPassphraseProvider?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.KeyManagerProviderRequiredAction>[]>;
    /**
     * The type of Key Manager Provider resource. Options are ['file-based', 'custom', 'pkcs11', 'third-party']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyManagerProvider resource.
 */
export interface KeyManagerProviderArgs {
    /**
     * A description for this Key Manager Provider
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Key Manager Provider is enabled for use.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Key Manager Provider. Each configuration
     * property should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Key Manager Provider.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Specifies the path to the file that contains the private key information. This may be an absolute path, or a path that
     * is relative to the Directory Server instance root.
     */
    keyStoreFile?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the PIN needed to access the File Based Key Manager
     * Provider. - `pkcs11`: Specifies the PIN needed to access the PKCS11 Key Manager Provider.
     */
    keyStorePin?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: Specifies the path to the text file whose only contents should be a
     * single line containing the clear-text PIN needed to access the File Based Key Manager Provider. - `pkcs11`: Specifies
     * the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the
     * PKCS11 Key Manager Provider.
     */
    keyStorePinFile?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - `file-based`: The passphrase provider to use to obtain the clear-text PIN needed
     * to access the File Based Key Manager Provider. - `pkcs11`: The passphrase provider to use to obtain the clear-text PIN
     * needed to access the PKCS11 Key Manager Provider.
     */
    keyStorePinPassphraseProvider?: pulumi.Input<string>;
    /**
     * Specifies the format for the data in the key store file.
     */
    keyStoreType?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * The key store type to use when obtaining an instance of a key store for interacting with a PKCS #11 token.
     */
    pkcs11KeyStoreType?: pulumi.Input<string>;
    /**
     * Supported in PingDirectory product version 9.2.0.1+. The maximum length of time that data retrieved from PKCS #11 tokens
     * may be cached for reuse. Caching might be necessary if there is noticable latency when accessing the token, for example
     * if the token uses a remote key store. A value of zero milliseconds indicates that no caching should be performed.
     */
    pkcs11MaxCacheDuration?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the Java security provider class that implements support for interacting with PKCS #11
     * tokens.
     */
    pkcs11ProviderClass?: pulumi.Input<string>;
    /**
     * The path to the file to use to configure the security provider that implements support for interacting with PKCS #11
     * tokens.
     */
    pkcs11ProviderConfigurationFile?: pulumi.Input<string>;
    /**
     * Specifies the clear-text PIN needed to access the File Based Key Manager Provider private key. If no private key PIN is
     * specified the PIN defaults to the key store PIN.
     */
    privateKeyPin?: pulumi.Input<string>;
    /**
     * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to
     * access the File Based Key Manager Provider private key. If no private key PIN is specified the PIN defaults to the key
     * store PIN.
     */
    privateKeyPinFile?: pulumi.Input<string>;
    /**
     * The passphrase provider to use to obtain the clear-text PIN needed to access the File Based Key Manager Provider private
     * key. If no private key PIN is specified the PIN defaults to the key store PIN.
     */
    privateKeyPinPassphraseProvider?: pulumi.Input<string>;
    /**
     * The type of Key Manager Provider resource. Options are ['file-based', 'custom', 'pkcs11', 'third-party']
     */
    type: pulumi.Input<string>;
}
