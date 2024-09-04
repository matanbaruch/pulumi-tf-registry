// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallSslsshprofileFtps extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallSslsshprofileFtps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallSslsshprofileFtpsState, opts?: pulumi.CustomResourceOptions): ObjectFirewallSslsshprofileFtps {
        return new ObjectFirewallSslsshprofileFtps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallSslsshprofileFtps:ObjectFirewallSslsshprofileFtps';

    /**
     * Returns true if the given object is an instance of ObjectFirewallSslsshprofileFtps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallSslsshprofileFtps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallSslsshprofileFtps.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly allowInvalidServerCert!: pulumi.Output<string | undefined>;
    public readonly certValidationFailure!: pulumi.Output<string>;
    public readonly certValidationTimeout!: pulumi.Output<string>;
    public readonly clientCertRequest!: pulumi.Output<string | undefined>;
    public readonly clientCertificate!: pulumi.Output<string>;
    public readonly expiredServerCert!: pulumi.Output<string>;
    public readonly invalidServerCert!: pulumi.Output<string | undefined>;
    public readonly minAllowedSslVersion!: pulumi.Output<string>;
    public readonly ports!: pulumi.Output<number[]>;
    public readonly revokedServerCert!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly sniServerCertCheck!: pulumi.Output<string>;
    public readonly sslSshProfile!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly unsupportedSsl!: pulumi.Output<string | undefined>;
    public readonly unsupportedSslCipher!: pulumi.Output<string>;
    public readonly unsupportedSslNegotiation!: pulumi.Output<string>;
    public readonly unsupportedSslVersion!: pulumi.Output<string>;
    public readonly untrustedCert!: pulumi.Output<string | undefined>;
    public readonly untrustedServerCert!: pulumi.Output<string>;

    /**
     * Create a ObjectFirewallSslsshprofileFtps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallSslsshprofileFtpsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallSslsshprofileFtpsArgs | ObjectFirewallSslsshprofileFtpsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallSslsshprofileFtpsState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["allowInvalidServerCert"] = state ? state.allowInvalidServerCert : undefined;
            resourceInputs["certValidationFailure"] = state ? state.certValidationFailure : undefined;
            resourceInputs["certValidationTimeout"] = state ? state.certValidationTimeout : undefined;
            resourceInputs["clientCertRequest"] = state ? state.clientCertRequest : undefined;
            resourceInputs["clientCertificate"] = state ? state.clientCertificate : undefined;
            resourceInputs["expiredServerCert"] = state ? state.expiredServerCert : undefined;
            resourceInputs["invalidServerCert"] = state ? state.invalidServerCert : undefined;
            resourceInputs["minAllowedSslVersion"] = state ? state.minAllowedSslVersion : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["revokedServerCert"] = state ? state.revokedServerCert : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["sniServerCertCheck"] = state ? state.sniServerCertCheck : undefined;
            resourceInputs["sslSshProfile"] = state ? state.sslSshProfile : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["unsupportedSsl"] = state ? state.unsupportedSsl : undefined;
            resourceInputs["unsupportedSslCipher"] = state ? state.unsupportedSslCipher : undefined;
            resourceInputs["unsupportedSslNegotiation"] = state ? state.unsupportedSslNegotiation : undefined;
            resourceInputs["unsupportedSslVersion"] = state ? state.unsupportedSslVersion : undefined;
            resourceInputs["untrustedCert"] = state ? state.untrustedCert : undefined;
            resourceInputs["untrustedServerCert"] = state ? state.untrustedServerCert : undefined;
        } else {
            const args = argsOrState as ObjectFirewallSslsshprofileFtpsArgs | undefined;
            if ((!args || args.sslSshProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sslSshProfile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["allowInvalidServerCert"] = args ? args.allowInvalidServerCert : undefined;
            resourceInputs["certValidationFailure"] = args ? args.certValidationFailure : undefined;
            resourceInputs["certValidationTimeout"] = args ? args.certValidationTimeout : undefined;
            resourceInputs["clientCertRequest"] = args ? args.clientCertRequest : undefined;
            resourceInputs["clientCertificate"] = args ? args.clientCertificate : undefined;
            resourceInputs["expiredServerCert"] = args ? args.expiredServerCert : undefined;
            resourceInputs["invalidServerCert"] = args ? args.invalidServerCert : undefined;
            resourceInputs["minAllowedSslVersion"] = args ? args.minAllowedSslVersion : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["revokedServerCert"] = args ? args.revokedServerCert : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["sniServerCertCheck"] = args ? args.sniServerCertCheck : undefined;
            resourceInputs["sslSshProfile"] = args ? args.sslSshProfile : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["unsupportedSsl"] = args ? args.unsupportedSsl : undefined;
            resourceInputs["unsupportedSslCipher"] = args ? args.unsupportedSslCipher : undefined;
            resourceInputs["unsupportedSslNegotiation"] = args ? args.unsupportedSslNegotiation : undefined;
            resourceInputs["unsupportedSslVersion"] = args ? args.unsupportedSslVersion : undefined;
            resourceInputs["untrustedCert"] = args ? args.untrustedCert : undefined;
            resourceInputs["untrustedServerCert"] = args ? args.untrustedServerCert : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallSslsshprofileFtps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallSslsshprofileFtps resources.
 */
export interface ObjectFirewallSslsshprofileFtpsState {
    adom?: pulumi.Input<string>;
    allowInvalidServerCert?: pulumi.Input<string>;
    certValidationFailure?: pulumi.Input<string>;
    certValidationTimeout?: pulumi.Input<string>;
    clientCertRequest?: pulumi.Input<string>;
    clientCertificate?: pulumi.Input<string>;
    expiredServerCert?: pulumi.Input<string>;
    invalidServerCert?: pulumi.Input<string>;
    minAllowedSslVersion?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    revokedServerCert?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sniServerCertCheck?: pulumi.Input<string>;
    sslSshProfile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    unsupportedSsl?: pulumi.Input<string>;
    unsupportedSslCipher?: pulumi.Input<string>;
    unsupportedSslNegotiation?: pulumi.Input<string>;
    unsupportedSslVersion?: pulumi.Input<string>;
    untrustedCert?: pulumi.Input<string>;
    untrustedServerCert?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallSslsshprofileFtps resource.
 */
export interface ObjectFirewallSslsshprofileFtpsArgs {
    adom?: pulumi.Input<string>;
    allowInvalidServerCert?: pulumi.Input<string>;
    certValidationFailure?: pulumi.Input<string>;
    certValidationTimeout?: pulumi.Input<string>;
    clientCertRequest?: pulumi.Input<string>;
    clientCertificate?: pulumi.Input<string>;
    expiredServerCert?: pulumi.Input<string>;
    invalidServerCert?: pulumi.Input<string>;
    minAllowedSslVersion?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    revokedServerCert?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    sniServerCertCheck?: pulumi.Input<string>;
    sslSshProfile: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    unsupportedSsl?: pulumi.Input<string>;
    unsupportedSslCipher?: pulumi.Input<string>;
    unsupportedSslNegotiation?: pulumi.Input<string>;
    unsupportedSslVersion?: pulumi.Input<string>;
    untrustedCert?: pulumi.Input<string>;
    untrustedServerCert?: pulumi.Input<string>;
}
