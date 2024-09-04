// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Proxy extends pulumi.CustomResource {
    /**
     * Get an existing Proxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProxyState, opts?: pulumi.CustomResourceOptions): Proxy {
        return new Proxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/proxy:Proxy';

    /**
     * Returns true if the given object is an instance of Proxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Proxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Proxy.__pulumiType;
    }

    /**
     * The password to use with basic authentication. This attribute is absent from a GET and not updated when absent in a PUT,
     * subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    public readonly authenticationBasicPassword!: pulumi.Output<string | undefined>;
    /**
     * The username to use with basic authentication. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    public readonly authenticationBasicUsername!: pulumi.Output<string | undefined>;
    /**
     * The authentication scheme used to connect to the proxy. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none" - No authentication.
     * "basic" - Username/password authentication. </pre>
     */
    public readonly authenticationScheme!: pulumi.Output<string | undefined>;
    /**
     * Enable or disable the proxy. When disabled, no connections are initiated to this particular proxy. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The IP address or host name of the proxy. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `""`.
     */
    public readonly host!: pulumi.Output<string | undefined>;
    /**
     * The port to connect to on the proxy host. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `0`.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The name of the proxy.
     */
    public readonly proxyName!: pulumi.Output<string>;
    /**
     * The type of proxy. Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"direct"`. The allowed values and their meaning are: <pre> "direct" - Direct connection (no proxy). "http" - HTTP
     * proxy. </pre>
     */
    public readonly proxyType!: pulumi.Output<string | undefined>;

    /**
     * Create a Proxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProxyArgs | ProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProxyState | undefined;
            resourceInputs["authenticationBasicPassword"] = state ? state.authenticationBasicPassword : undefined;
            resourceInputs["authenticationBasicUsername"] = state ? state.authenticationBasicUsername : undefined;
            resourceInputs["authenticationScheme"] = state ? state.authenticationScheme : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["proxyName"] = state ? state.proxyName : undefined;
            resourceInputs["proxyType"] = state ? state.proxyType : undefined;
        } else {
            const args = argsOrState as ProxyArgs | undefined;
            if ((!args || args.proxyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'proxyName'");
            }
            resourceInputs["authenticationBasicPassword"] = args?.authenticationBasicPassword ? pulumi.secret(args.authenticationBasicPassword) : undefined;
            resourceInputs["authenticationBasicUsername"] = args ? args.authenticationBasicUsername : undefined;
            resourceInputs["authenticationScheme"] = args ? args.authenticationScheme : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["proxyName"] = args ? args.proxyName : undefined;
            resourceInputs["proxyType"] = args ? args.proxyType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authenticationBasicPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Proxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Proxy resources.
 */
export interface ProxyState {
    /**
     * The password to use with basic authentication. This attribute is absent from a GET and not updated when absent in a PUT,
     * subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    authenticationBasicPassword?: pulumi.Input<string>;
    /**
     * The username to use with basic authentication. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    authenticationBasicUsername?: pulumi.Input<string>;
    /**
     * The authentication scheme used to connect to the proxy. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none" - No authentication.
     * "basic" - Username/password authentication. </pre>
     */
    authenticationScheme?: pulumi.Input<string>;
    /**
     * Enable or disable the proxy. When disabled, no connections are initiated to this particular proxy. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The IP address or host name of the proxy. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `""`.
     */
    host?: pulumi.Input<string>;
    /**
     * The port to connect to on the proxy host. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `0`.
     */
    port?: pulumi.Input<number>;
    /**
     * The name of the proxy.
     */
    proxyName?: pulumi.Input<string>;
    /**
     * The type of proxy. Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"direct"`. The allowed values and their meaning are: <pre> "direct" - Direct connection (no proxy). "http" - HTTP
     * proxy. </pre>
     */
    proxyType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Proxy resource.
 */
export interface ProxyArgs {
    /**
     * The password to use with basic authentication. This attribute is absent from a GET and not updated when absent in a PUT,
     * subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `""`.
     */
    authenticationBasicPassword?: pulumi.Input<string>;
    /**
     * The username to use with basic authentication. Changes to this attribute are synchronized to HA mates via config-sync.
     * The default value is `""`.
     */
    authenticationBasicUsername?: pulumi.Input<string>;
    /**
     * The authentication scheme used to connect to the proxy. Changes to this attribute are synchronized to HA mates via
     * config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none" - No authentication.
     * "basic" - Username/password authentication. </pre>
     */
    authenticationScheme?: pulumi.Input<string>;
    /**
     * Enable or disable the proxy. When disabled, no connections are initiated to this particular proxy. Changes to this
     * attribute are synchronized to HA mates via config-sync. The default value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The IP address or host name of the proxy. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `""`.
     */
    host?: pulumi.Input<string>;
    /**
     * The port to connect to on the proxy host. Changes to this attribute are synchronized to HA mates via config-sync. The
     * default value is `0`.
     */
    port?: pulumi.Input<number>;
    /**
     * The name of the proxy.
     */
    proxyName: pulumi.Input<string>;
    /**
     * The type of proxy. Changes to this attribute are synchronized to HA mates via config-sync. The default value is
     * `"direct"`. The allowed values and their meaning are: <pre> "direct" - Direct connection (no proxy). "http" - HTTP
     * proxy. </pre>
     */
    proxyType?: pulumi.Input<string>;
}
