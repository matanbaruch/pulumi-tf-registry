// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebCategoryProxyServer extends pulumi.CustomResource {
    /**
     * Get an existing WebCategoryProxyServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebCategoryProxyServerState, opts?: pulumi.CustomResourceOptions): WebCategoryProxyServer {
        return new WebCategoryProxyServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/webCategoryProxyServer:WebCategoryProxyServer';

    /**
     * Returns true if the given object is an instance of WebCategoryProxyServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebCategoryProxyServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebCategoryProxyServer.__pulumiType;
    }

    /**
     * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
     */
    public readonly authType!: pulumi.Output<string | undefined>;
    /**
     * Realm for NTLM authentication
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * Proxy server HTTP port
     */
    public readonly httpPort!: pulumi.Output<number | undefined>;
    /**
     * Proxy server HTTPS port(HTTP port will be used if not configured)
     */
    public readonly httpsPort!: pulumi.Output<number | undefined>;
    /**
     * Password for proxy authentication
     */
    public readonly password!: pulumi.Output<number | undefined>;
    /**
     * Proxy server hostname or IP address
     */
    public readonly proxyHost!: pulumi.Output<string | undefined>;
    /**
     * password value
     */
    public readonly secretString!: pulumi.Output<string | undefined>;
    /**
     * Username for proxy authentication
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a WebCategoryProxyServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebCategoryProxyServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebCategoryProxyServerArgs | WebCategoryProxyServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebCategoryProxyServerState | undefined;
            resourceInputs["authType"] = state ? state.authType : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["httpPort"] = state ? state.httpPort : undefined;
            resourceInputs["httpsPort"] = state ? state.httpsPort : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["proxyHost"] = state ? state.proxyHost : undefined;
            resourceInputs["secretString"] = state ? state.secretString : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as WebCategoryProxyServerArgs | undefined;
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["httpPort"] = args ? args.httpPort : undefined;
            resourceInputs["httpsPort"] = args ? args.httpsPort : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["proxyHost"] = args ? args.proxyHost : undefined;
            resourceInputs["secretString"] = args ? args.secretString : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebCategoryProxyServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebCategoryProxyServer resources.
 */
export interface WebCategoryProxyServerState {
    /**
     * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
     */
    authType?: pulumi.Input<string>;
    /**
     * Realm for NTLM authentication
     */
    domain?: pulumi.Input<string>;
    /**
     * Proxy server HTTP port
     */
    httpPort?: pulumi.Input<number>;
    /**
     * Proxy server HTTPS port(HTTP port will be used if not configured)
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * Password for proxy authentication
     */
    password?: pulumi.Input<number>;
    /**
     * Proxy server hostname or IP address
     */
    proxyHost?: pulumi.Input<string>;
    /**
     * password value
     */
    secretString?: pulumi.Input<string>;
    /**
     * Username for proxy authentication
     */
    username?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebCategoryProxyServer resource.
 */
export interface WebCategoryProxyServerArgs {
    /**
     * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
     */
    authType?: pulumi.Input<string>;
    /**
     * Realm for NTLM authentication
     */
    domain?: pulumi.Input<string>;
    /**
     * Proxy server HTTP port
     */
    httpPort?: pulumi.Input<number>;
    /**
     * Proxy server HTTPS port(HTTP port will be used if not configured)
     */
    httpsPort?: pulumi.Input<number>;
    /**
     * Password for proxy authentication
     */
    password?: pulumi.Input<number>;
    /**
     * Proxy server hostname or IP address
     */
    proxyHost?: pulumi.Input<string>;
    /**
     * password value
     */
    secretString?: pulumi.Input<string>;
    /**
     * Username for proxy authentication
     */
    username?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
