// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallSslserver extends pulumi.CustomResource {
    /**
     * Get an existing FirewallSslserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallSslserverState, opts?: pulumi.CustomResourceOptions): FirewallSslserver {
        return new FirewallSslserver(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallSslserver:FirewallSslserver';

    /**
     * Returns true if the given object is an instance of FirewallSslserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallSslserver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallSslserver.__pulumiType;
    }

    public readonly addHeaderXForwardedProto!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly mappedPort!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly sslAlgorithm!: pulumi.Output<string>;
    public readonly sslCert!: pulumi.Output<string>;
    public readonly sslClientRenegotiation!: pulumi.Output<string>;
    public readonly sslDhBits!: pulumi.Output<string>;
    public readonly sslMaxVersion!: pulumi.Output<string>;
    public readonly sslMinVersion!: pulumi.Output<string>;
    public readonly sslMode!: pulumi.Output<string>;
    public readonly sslSendEmptyFrags!: pulumi.Output<string>;
    public readonly urlRewrite!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallSslserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallSslserverArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallSslserverArgs | FirewallSslserverState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallSslserverState | undefined;
            resourceInputs["addHeaderXForwardedProto"] = state ? state.addHeaderXForwardedProto : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["mappedPort"] = state ? state.mappedPort : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["sslAlgorithm"] = state ? state.sslAlgorithm : undefined;
            resourceInputs["sslCert"] = state ? state.sslCert : undefined;
            resourceInputs["sslClientRenegotiation"] = state ? state.sslClientRenegotiation : undefined;
            resourceInputs["sslDhBits"] = state ? state.sslDhBits : undefined;
            resourceInputs["sslMaxVersion"] = state ? state.sslMaxVersion : undefined;
            resourceInputs["sslMinVersion"] = state ? state.sslMinVersion : undefined;
            resourceInputs["sslMode"] = state ? state.sslMode : undefined;
            resourceInputs["sslSendEmptyFrags"] = state ? state.sslSendEmptyFrags : undefined;
            resourceInputs["urlRewrite"] = state ? state.urlRewrite : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallSslserverArgs | undefined;
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.sslCert === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sslCert'");
            }
            resourceInputs["addHeaderXForwardedProto"] = args ? args.addHeaderXForwardedProto : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["mappedPort"] = args ? args.mappedPort : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["sslAlgorithm"] = args ? args.sslAlgorithm : undefined;
            resourceInputs["sslCert"] = args ? args.sslCert : undefined;
            resourceInputs["sslClientRenegotiation"] = args ? args.sslClientRenegotiation : undefined;
            resourceInputs["sslDhBits"] = args ? args.sslDhBits : undefined;
            resourceInputs["sslMaxVersion"] = args ? args.sslMaxVersion : undefined;
            resourceInputs["sslMinVersion"] = args ? args.sslMinVersion : undefined;
            resourceInputs["sslMode"] = args ? args.sslMode : undefined;
            resourceInputs["sslSendEmptyFrags"] = args ? args.sslSendEmptyFrags : undefined;
            resourceInputs["urlRewrite"] = args ? args.urlRewrite : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallSslserver.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallSslserver resources.
 */
export interface FirewallSslserverState {
    addHeaderXForwardedProto?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    mappedPort?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    sslAlgorithm?: pulumi.Input<string>;
    sslCert?: pulumi.Input<string>;
    sslClientRenegotiation?: pulumi.Input<string>;
    sslDhBits?: pulumi.Input<string>;
    sslMaxVersion?: pulumi.Input<string>;
    sslMinVersion?: pulumi.Input<string>;
    sslMode?: pulumi.Input<string>;
    sslSendEmptyFrags?: pulumi.Input<string>;
    urlRewrite?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallSslserver resource.
 */
export interface FirewallSslserverArgs {
    addHeaderXForwardedProto?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    mappedPort?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    port: pulumi.Input<number>;
    sslAlgorithm?: pulumi.Input<string>;
    sslCert: pulumi.Input<string>;
    sslClientRenegotiation?: pulumi.Input<string>;
    sslDhBits?: pulumi.Input<string>;
    sslMaxVersion?: pulumi.Input<string>;
    sslMinVersion?: pulumi.Input<string>;
    sslMode?: pulumi.Input<string>;
    sslSendEmptyFrags?: pulumi.Input<string>;
    urlRewrite?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
