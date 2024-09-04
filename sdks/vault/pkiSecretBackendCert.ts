// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PkiSecretBackendCert extends pulumi.CustomResource {
    /**
     * Get an existing PkiSecretBackendCert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PkiSecretBackendCertState, opts?: pulumi.CustomResourceOptions): PkiSecretBackendCert {
        return new PkiSecretBackendCert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/pkiSecretBackendCert:PkiSecretBackendCert';

    /**
     * Returns true if the given object is an instance of PkiSecretBackendCert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PkiSecretBackendCert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PkiSecretBackendCert.__pulumiType;
    }

    /**
     * List of alternative names.
     */
    public readonly altNames!: pulumi.Output<string[] | undefined>;
    /**
     * If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining
     */
    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    /**
     * The PKI secret backend the resource belongs to.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * The CA chain.
     */
    public /*out*/ readonly caChain!: pulumi.Output<string>;
    /**
     * The certicate.
     */
    public /*out*/ readonly certificate!: pulumi.Output<string>;
    /**
     * CN of the certificate to create.
     */
    public readonly commonName!: pulumi.Output<string>;
    /**
     * Flag to exclude CN from SANs.
     */
    public readonly excludeCnFromSans!: pulumi.Output<boolean | undefined>;
    /**
     * The certificate expiration as a Unix-style timestamp.
     */
    public /*out*/ readonly expiration!: pulumi.Output<number>;
    /**
     * The format of data.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * List of alternative IPs.
     */
    public readonly ipSans!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the default issuer of this request.
     */
    public readonly issuerRef!: pulumi.Output<string | undefined>;
    /**
     * The issuing CA.
     */
    public /*out*/ readonly issuingCa!: pulumi.Output<string>;
    /**
     * Generate a new certificate when the expiration is within this number of seconds
     */
    public readonly minSecondsRemaining!: pulumi.Output<number | undefined>;
    /**
     * Name of the role to create the certificate against.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * List of other SANs.
     */
    public readonly otherSans!: pulumi.Output<string[] | undefined>;
    /**
     * The private key.
     */
    public /*out*/ readonly privateKey!: pulumi.Output<string>;
    /**
     * The private key format.
     */
    public readonly privateKeyFormat!: pulumi.Output<string | undefined>;
    /**
     * The private key type.
     */
    public /*out*/ readonly privateKeyType!: pulumi.Output<string>;
    /**
     * Initially false, and then set to true during refresh once the expiration is less than min_seconds_remaining in the
     * future.
     */
    public /*out*/ readonly renewPending!: pulumi.Output<boolean>;
    /**
     * Revoke the certificate upon resource destruction.
     */
    public readonly revoke!: pulumi.Output<boolean | undefined>;
    /**
     * The serial number.
     */
    public /*out*/ readonly serialNumber!: pulumi.Output<string>;
    /**
     * Time to live.
     */
    public readonly ttl!: pulumi.Output<string | undefined>;
    /**
     * List of alternative URIs.
     */
    public readonly uriSans!: pulumi.Output<string[] | undefined>;
    /**
     * List of Subject User IDs.
     */
    public readonly userIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PkiSecretBackendCert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PkiSecretBackendCertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PkiSecretBackendCertArgs | PkiSecretBackendCertState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PkiSecretBackendCertState | undefined;
            resourceInputs["altNames"] = state ? state.altNames : undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["caChain"] = state ? state.caChain : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["commonName"] = state ? state.commonName : undefined;
            resourceInputs["excludeCnFromSans"] = state ? state.excludeCnFromSans : undefined;
            resourceInputs["expiration"] = state ? state.expiration : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["ipSans"] = state ? state.ipSans : undefined;
            resourceInputs["issuerRef"] = state ? state.issuerRef : undefined;
            resourceInputs["issuingCa"] = state ? state.issuingCa : undefined;
            resourceInputs["minSecondsRemaining"] = state ? state.minSecondsRemaining : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["otherSans"] = state ? state.otherSans : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["privateKeyFormat"] = state ? state.privateKeyFormat : undefined;
            resourceInputs["privateKeyType"] = state ? state.privateKeyType : undefined;
            resourceInputs["renewPending"] = state ? state.renewPending : undefined;
            resourceInputs["revoke"] = state ? state.revoke : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["uriSans"] = state ? state.uriSans : undefined;
            resourceInputs["userIds"] = state ? state.userIds : undefined;
        } else {
            const args = argsOrState as PkiSecretBackendCertArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            if ((!args || args.commonName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'commonName'");
            }
            resourceInputs["altNames"] = args ? args.altNames : undefined;
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["commonName"] = args ? args.commonName : undefined;
            resourceInputs["excludeCnFromSans"] = args ? args.excludeCnFromSans : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["ipSans"] = args ? args.ipSans : undefined;
            resourceInputs["issuerRef"] = args ? args.issuerRef : undefined;
            resourceInputs["minSecondsRemaining"] = args ? args.minSecondsRemaining : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["otherSans"] = args ? args.otherSans : undefined;
            resourceInputs["privateKeyFormat"] = args ? args.privateKeyFormat : undefined;
            resourceInputs["revoke"] = args ? args.revoke : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["uriSans"] = args ? args.uriSans : undefined;
            resourceInputs["userIds"] = args ? args.userIds : undefined;
            resourceInputs["caChain"] = undefined /*out*/;
            resourceInputs["certificate"] = undefined /*out*/;
            resourceInputs["expiration"] = undefined /*out*/;
            resourceInputs["issuingCa"] = undefined /*out*/;
            resourceInputs["privateKey"] = undefined /*out*/;
            resourceInputs["privateKeyType"] = undefined /*out*/;
            resourceInputs["renewPending"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["privateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(PkiSecretBackendCert.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PkiSecretBackendCert resources.
 */
export interface PkiSecretBackendCertState {
    /**
     * List of alternative names.
     */
    altNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * The PKI secret backend the resource belongs to.
     */
    backend?: pulumi.Input<string>;
    /**
     * The CA chain.
     */
    caChain?: pulumi.Input<string>;
    /**
     * The certicate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * CN of the certificate to create.
     */
    commonName?: pulumi.Input<string>;
    /**
     * Flag to exclude CN from SANs.
     */
    excludeCnFromSans?: pulumi.Input<boolean>;
    /**
     * The certificate expiration as a Unix-style timestamp.
     */
    expiration?: pulumi.Input<number>;
    /**
     * The format of data.
     */
    format?: pulumi.Input<string>;
    /**
     * List of alternative IPs.
     */
    ipSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the default issuer of this request.
     */
    issuerRef?: pulumi.Input<string>;
    /**
     * The issuing CA.
     */
    issuingCa?: pulumi.Input<string>;
    /**
     * Generate a new certificate when the expiration is within this number of seconds
     */
    minSecondsRemaining?: pulumi.Input<number>;
    /**
     * Name of the role to create the certificate against.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * List of other SANs.
     */
    otherSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The private key.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * The private key format.
     */
    privateKeyFormat?: pulumi.Input<string>;
    /**
     * The private key type.
     */
    privateKeyType?: pulumi.Input<string>;
    /**
     * Initially false, and then set to true during refresh once the expiration is less than min_seconds_remaining in the
     * future.
     */
    renewPending?: pulumi.Input<boolean>;
    /**
     * Revoke the certificate upon resource destruction.
     */
    revoke?: pulumi.Input<boolean>;
    /**
     * The serial number.
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Time to live.
     */
    ttl?: pulumi.Input<string>;
    /**
     * List of alternative URIs.
     */
    uriSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Subject User IDs.
     */
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a PkiSecretBackendCert resource.
 */
export interface PkiSecretBackendCertArgs {
    /**
     * List of alternative names.
     */
    altNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * The PKI secret backend the resource belongs to.
     */
    backend: pulumi.Input<string>;
    /**
     * CN of the certificate to create.
     */
    commonName: pulumi.Input<string>;
    /**
     * Flag to exclude CN from SANs.
     */
    excludeCnFromSans?: pulumi.Input<boolean>;
    /**
     * The format of data.
     */
    format?: pulumi.Input<string>;
    /**
     * List of alternative IPs.
     */
    ipSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the default issuer of this request.
     */
    issuerRef?: pulumi.Input<string>;
    /**
     * Generate a new certificate when the expiration is within this number of seconds
     */
    minSecondsRemaining?: pulumi.Input<number>;
    /**
     * Name of the role to create the certificate against.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * List of other SANs.
     */
    otherSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The private key format.
     */
    privateKeyFormat?: pulumi.Input<string>;
    /**
     * Revoke the certificate upon resource destruction.
     */
    revoke?: pulumi.Input<boolean>;
    /**
     * Time to live.
     */
    ttl?: pulumi.Input<string>;
    /**
     * List of alternative URIs.
     */
    uriSans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Subject User IDs.
     */
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
}
