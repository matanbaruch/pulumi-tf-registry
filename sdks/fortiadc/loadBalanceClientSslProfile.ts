// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadBalanceClientSslProfile extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalanceClientSslProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalanceClientSslProfileState, opts?: pulumi.CustomResourceOptions): LoadBalanceClientSslProfile {
        return new LoadBalanceClientSslProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/loadBalanceClientSslProfile:LoadBalanceClientSslProfile';

    /**
     * Returns true if the given object is an instance of LoadBalanceClientSslProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalanceClientSslProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalanceClientSslProfile.__pulumiType;
    }

    public readonly backendCertificateVerify!: pulumi.Output<string>;
    public readonly backendCiphersTlsv13!: pulumi.Output<string>;
    public readonly backendCustomizedSslCiphers!: pulumi.Output<string>;
    public readonly backendCustomizedSslCiphersFlag!: pulumi.Output<string>;
    public readonly backendSslAllowedVersions!: pulumi.Output<string>;
    public readonly backendSslCiphers!: pulumi.Output<string>;
    public readonly backendSslOcspStaplingSupport!: pulumi.Output<string>;
    public readonly backendSslSniForward!: pulumi.Output<string>;
    public readonly clientCertificateVerify!: pulumi.Output<string>;
    public readonly clientCertificateVerifyMode!: pulumi.Output<string>;
    public readonly clientSniRequired!: pulumi.Output<string>;
    public readonly customizedSslCiphers!: pulumi.Output<string>;
    public readonly customizedSslCiphersFlag!: pulumi.Output<string>;
    public readonly forwardProxy!: pulumi.Output<string>;
    public readonly forwardProxyCertificateCaching!: pulumi.Output<string>;
    public readonly forwardProxyIntermediateCaGroup!: pulumi.Output<string>;
    public readonly forwardProxyLocalSigningCa!: pulumi.Output<string>;
    public readonly httpForwardClientCertificate!: pulumi.Output<string>;
    public readonly httpForwardClientCertificateHeader!: pulumi.Output<string>;
    public readonly localCertificateGroup!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly rejectOcspStaplingWithMissingNextupdate!: pulumi.Output<string>;
    public readonly rfc7919Comply!: pulumi.Output<string>;
    public readonly sslAllowedVersions!: pulumi.Output<string>;
    public readonly sslCiphers!: pulumi.Output<string>;
    public readonly sslCiphersTlsv13!: pulumi.Output<string>;
    public readonly sslDhParamSize!: pulumi.Output<string>;
    public readonly sslDynamicRecordSizing!: pulumi.Output<string>;
    public readonly sslRenegotiatePeriod!: pulumi.Output<string>;
    public readonly sslRenegotiateSize!: pulumi.Output<string>;
    public readonly sslRenegotiation!: pulumi.Output<string>;
    public readonly sslRenegotiationInterval!: pulumi.Output<string>;
    public readonly sslSecureRenegotiation!: pulumi.Output<string>;
    public readonly sslSessionCacheFlag!: pulumi.Output<string>;
    public readonly supportedGroups!: pulumi.Output<string>;
    public readonly useTlsTickets!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadBalanceClientSslProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalanceClientSslProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalanceClientSslProfileArgs | LoadBalanceClientSslProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalanceClientSslProfileState | undefined;
            resourceInputs["backendCertificateVerify"] = state ? state.backendCertificateVerify : undefined;
            resourceInputs["backendCiphersTlsv13"] = state ? state.backendCiphersTlsv13 : undefined;
            resourceInputs["backendCustomizedSslCiphers"] = state ? state.backendCustomizedSslCiphers : undefined;
            resourceInputs["backendCustomizedSslCiphersFlag"] = state ? state.backendCustomizedSslCiphersFlag : undefined;
            resourceInputs["backendSslAllowedVersions"] = state ? state.backendSslAllowedVersions : undefined;
            resourceInputs["backendSslCiphers"] = state ? state.backendSslCiphers : undefined;
            resourceInputs["backendSslOcspStaplingSupport"] = state ? state.backendSslOcspStaplingSupport : undefined;
            resourceInputs["backendSslSniForward"] = state ? state.backendSslSniForward : undefined;
            resourceInputs["clientCertificateVerify"] = state ? state.clientCertificateVerify : undefined;
            resourceInputs["clientCertificateVerifyMode"] = state ? state.clientCertificateVerifyMode : undefined;
            resourceInputs["clientSniRequired"] = state ? state.clientSniRequired : undefined;
            resourceInputs["customizedSslCiphers"] = state ? state.customizedSslCiphers : undefined;
            resourceInputs["customizedSslCiphersFlag"] = state ? state.customizedSslCiphersFlag : undefined;
            resourceInputs["forwardProxy"] = state ? state.forwardProxy : undefined;
            resourceInputs["forwardProxyCertificateCaching"] = state ? state.forwardProxyCertificateCaching : undefined;
            resourceInputs["forwardProxyIntermediateCaGroup"] = state ? state.forwardProxyIntermediateCaGroup : undefined;
            resourceInputs["forwardProxyLocalSigningCa"] = state ? state.forwardProxyLocalSigningCa : undefined;
            resourceInputs["httpForwardClientCertificate"] = state ? state.httpForwardClientCertificate : undefined;
            resourceInputs["httpForwardClientCertificateHeader"] = state ? state.httpForwardClientCertificateHeader : undefined;
            resourceInputs["localCertificateGroup"] = state ? state.localCertificateGroup : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["rejectOcspStaplingWithMissingNextupdate"] = state ? state.rejectOcspStaplingWithMissingNextupdate : undefined;
            resourceInputs["rfc7919Comply"] = state ? state.rfc7919Comply : undefined;
            resourceInputs["sslAllowedVersions"] = state ? state.sslAllowedVersions : undefined;
            resourceInputs["sslCiphers"] = state ? state.sslCiphers : undefined;
            resourceInputs["sslCiphersTlsv13"] = state ? state.sslCiphersTlsv13 : undefined;
            resourceInputs["sslDhParamSize"] = state ? state.sslDhParamSize : undefined;
            resourceInputs["sslDynamicRecordSizing"] = state ? state.sslDynamicRecordSizing : undefined;
            resourceInputs["sslRenegotiatePeriod"] = state ? state.sslRenegotiatePeriod : undefined;
            resourceInputs["sslRenegotiateSize"] = state ? state.sslRenegotiateSize : undefined;
            resourceInputs["sslRenegotiation"] = state ? state.sslRenegotiation : undefined;
            resourceInputs["sslRenegotiationInterval"] = state ? state.sslRenegotiationInterval : undefined;
            resourceInputs["sslSecureRenegotiation"] = state ? state.sslSecureRenegotiation : undefined;
            resourceInputs["sslSessionCacheFlag"] = state ? state.sslSessionCacheFlag : undefined;
            resourceInputs["supportedGroups"] = state ? state.supportedGroups : undefined;
            resourceInputs["useTlsTickets"] = state ? state.useTlsTickets : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as LoadBalanceClientSslProfileArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["backendCertificateVerify"] = args ? args.backendCertificateVerify : undefined;
            resourceInputs["backendCiphersTlsv13"] = args ? args.backendCiphersTlsv13 : undefined;
            resourceInputs["backendCustomizedSslCiphers"] = args ? args.backendCustomizedSslCiphers : undefined;
            resourceInputs["backendCustomizedSslCiphersFlag"] = args ? args.backendCustomizedSslCiphersFlag : undefined;
            resourceInputs["backendSslAllowedVersions"] = args ? args.backendSslAllowedVersions : undefined;
            resourceInputs["backendSslCiphers"] = args ? args.backendSslCiphers : undefined;
            resourceInputs["backendSslOcspStaplingSupport"] = args ? args.backendSslOcspStaplingSupport : undefined;
            resourceInputs["backendSslSniForward"] = args ? args.backendSslSniForward : undefined;
            resourceInputs["clientCertificateVerify"] = args ? args.clientCertificateVerify : undefined;
            resourceInputs["clientCertificateVerifyMode"] = args ? args.clientCertificateVerifyMode : undefined;
            resourceInputs["clientSniRequired"] = args ? args.clientSniRequired : undefined;
            resourceInputs["customizedSslCiphers"] = args ? args.customizedSslCiphers : undefined;
            resourceInputs["customizedSslCiphersFlag"] = args ? args.customizedSslCiphersFlag : undefined;
            resourceInputs["forwardProxy"] = args ? args.forwardProxy : undefined;
            resourceInputs["forwardProxyCertificateCaching"] = args ? args.forwardProxyCertificateCaching : undefined;
            resourceInputs["forwardProxyIntermediateCaGroup"] = args ? args.forwardProxyIntermediateCaGroup : undefined;
            resourceInputs["forwardProxyLocalSigningCa"] = args ? args.forwardProxyLocalSigningCa : undefined;
            resourceInputs["httpForwardClientCertificate"] = args ? args.httpForwardClientCertificate : undefined;
            resourceInputs["httpForwardClientCertificateHeader"] = args ? args.httpForwardClientCertificateHeader : undefined;
            resourceInputs["localCertificateGroup"] = args ? args.localCertificateGroup : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["rejectOcspStaplingWithMissingNextupdate"] = args ? args.rejectOcspStaplingWithMissingNextupdate : undefined;
            resourceInputs["rfc7919Comply"] = args ? args.rfc7919Comply : undefined;
            resourceInputs["sslAllowedVersions"] = args ? args.sslAllowedVersions : undefined;
            resourceInputs["sslCiphers"] = args ? args.sslCiphers : undefined;
            resourceInputs["sslCiphersTlsv13"] = args ? args.sslCiphersTlsv13 : undefined;
            resourceInputs["sslDhParamSize"] = args ? args.sslDhParamSize : undefined;
            resourceInputs["sslDynamicRecordSizing"] = args ? args.sslDynamicRecordSizing : undefined;
            resourceInputs["sslRenegotiatePeriod"] = args ? args.sslRenegotiatePeriod : undefined;
            resourceInputs["sslRenegotiateSize"] = args ? args.sslRenegotiateSize : undefined;
            resourceInputs["sslRenegotiation"] = args ? args.sslRenegotiation : undefined;
            resourceInputs["sslRenegotiationInterval"] = args ? args.sslRenegotiationInterval : undefined;
            resourceInputs["sslSecureRenegotiation"] = args ? args.sslSecureRenegotiation : undefined;
            resourceInputs["sslSessionCacheFlag"] = args ? args.sslSessionCacheFlag : undefined;
            resourceInputs["supportedGroups"] = args ? args.supportedGroups : undefined;
            resourceInputs["useTlsTickets"] = args ? args.useTlsTickets : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalanceClientSslProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalanceClientSslProfile resources.
 */
export interface LoadBalanceClientSslProfileState {
    backendCertificateVerify?: pulumi.Input<string>;
    backendCiphersTlsv13?: pulumi.Input<string>;
    backendCustomizedSslCiphers?: pulumi.Input<string>;
    backendCustomizedSslCiphersFlag?: pulumi.Input<string>;
    backendSslAllowedVersions?: pulumi.Input<string>;
    backendSslCiphers?: pulumi.Input<string>;
    backendSslOcspStaplingSupport?: pulumi.Input<string>;
    backendSslSniForward?: pulumi.Input<string>;
    clientCertificateVerify?: pulumi.Input<string>;
    clientCertificateVerifyMode?: pulumi.Input<string>;
    clientSniRequired?: pulumi.Input<string>;
    customizedSslCiphers?: pulumi.Input<string>;
    customizedSslCiphersFlag?: pulumi.Input<string>;
    forwardProxy?: pulumi.Input<string>;
    forwardProxyCertificateCaching?: pulumi.Input<string>;
    forwardProxyIntermediateCaGroup?: pulumi.Input<string>;
    forwardProxyLocalSigningCa?: pulumi.Input<string>;
    httpForwardClientCertificate?: pulumi.Input<string>;
    httpForwardClientCertificateHeader?: pulumi.Input<string>;
    localCertificateGroup?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    rejectOcspStaplingWithMissingNextupdate?: pulumi.Input<string>;
    rfc7919Comply?: pulumi.Input<string>;
    sslAllowedVersions?: pulumi.Input<string>;
    sslCiphers?: pulumi.Input<string>;
    sslCiphersTlsv13?: pulumi.Input<string>;
    sslDhParamSize?: pulumi.Input<string>;
    sslDynamicRecordSizing?: pulumi.Input<string>;
    sslRenegotiatePeriod?: pulumi.Input<string>;
    sslRenegotiateSize?: pulumi.Input<string>;
    sslRenegotiation?: pulumi.Input<string>;
    sslRenegotiationInterval?: pulumi.Input<string>;
    sslSecureRenegotiation?: pulumi.Input<string>;
    sslSessionCacheFlag?: pulumi.Input<string>;
    supportedGroups?: pulumi.Input<string>;
    useTlsTickets?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalanceClientSslProfile resource.
 */
export interface LoadBalanceClientSslProfileArgs {
    backendCertificateVerify?: pulumi.Input<string>;
    backendCiphersTlsv13?: pulumi.Input<string>;
    backendCustomizedSslCiphers?: pulumi.Input<string>;
    backendCustomizedSslCiphersFlag?: pulumi.Input<string>;
    backendSslAllowedVersions?: pulumi.Input<string>;
    backendSslCiphers?: pulumi.Input<string>;
    backendSslOcspStaplingSupport?: pulumi.Input<string>;
    backendSslSniForward?: pulumi.Input<string>;
    clientCertificateVerify?: pulumi.Input<string>;
    clientCertificateVerifyMode?: pulumi.Input<string>;
    clientSniRequired?: pulumi.Input<string>;
    customizedSslCiphers?: pulumi.Input<string>;
    customizedSslCiphersFlag?: pulumi.Input<string>;
    forwardProxy?: pulumi.Input<string>;
    forwardProxyCertificateCaching?: pulumi.Input<string>;
    forwardProxyIntermediateCaGroup?: pulumi.Input<string>;
    forwardProxyLocalSigningCa?: pulumi.Input<string>;
    httpForwardClientCertificate?: pulumi.Input<string>;
    httpForwardClientCertificateHeader?: pulumi.Input<string>;
    localCertificateGroup?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    rejectOcspStaplingWithMissingNextupdate?: pulumi.Input<string>;
    rfc7919Comply?: pulumi.Input<string>;
    sslAllowedVersions?: pulumi.Input<string>;
    sslCiphers?: pulumi.Input<string>;
    sslCiphersTlsv13?: pulumi.Input<string>;
    sslDhParamSize?: pulumi.Input<string>;
    sslDynamicRecordSizing?: pulumi.Input<string>;
    sslRenegotiatePeriod?: pulumi.Input<string>;
    sslRenegotiateSize?: pulumi.Input<string>;
    sslRenegotiation?: pulumi.Input<string>;
    sslRenegotiationInterval?: pulumi.Input<string>;
    sslSecureRenegotiation?: pulumi.Input<string>;
    sslSessionCacheFlag?: pulumi.Input<string>;
    supportedGroups?: pulumi.Input<string>;
    useTlsTickets?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
