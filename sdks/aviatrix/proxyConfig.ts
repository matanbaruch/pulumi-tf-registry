// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProxyConfig extends pulumi.CustomResource {
    /**
     * Get an existing ProxyConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProxyConfigState, opts?: pulumi.CustomResourceOptions): ProxyConfig {
        return new ProxyConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/proxyConfig:ProxyConfig';

    /**
     * Returns true if the given object is an instance of ProxyConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProxyConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProxyConfig.__pulumiType;
    }

    /**
     * http proxy URL.
     */
    public readonly httpProxy!: pulumi.Output<string>;
    /**
     * https proxy URL.
     */
    public readonly httpsProxy!: pulumi.Output<string>;
    /**
     * Server CA Certificate file.
     */
    public readonly proxyCaCertificate!: pulumi.Output<string | undefined>;

    /**
     * Create a ProxyConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProxyConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProxyConfigArgs | ProxyConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProxyConfigState | undefined;
            resourceInputs["httpProxy"] = state ? state.httpProxy : undefined;
            resourceInputs["httpsProxy"] = state ? state.httpsProxy : undefined;
            resourceInputs["proxyCaCertificate"] = state ? state.proxyCaCertificate : undefined;
        } else {
            const args = argsOrState as ProxyConfigArgs | undefined;
            if ((!args || args.httpProxy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpProxy'");
            }
            if ((!args || args.httpsProxy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpsProxy'");
            }
            resourceInputs["httpProxy"] = args ? args.httpProxy : undefined;
            resourceInputs["httpsProxy"] = args ? args.httpsProxy : undefined;
            resourceInputs["proxyCaCertificate"] = args ? args.proxyCaCertificate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProxyConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProxyConfig resources.
 */
export interface ProxyConfigState {
    /**
     * http proxy URL.
     */
    httpProxy?: pulumi.Input<string>;
    /**
     * https proxy URL.
     */
    httpsProxy?: pulumi.Input<string>;
    /**
     * Server CA Certificate file.
     */
    proxyCaCertificate?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProxyConfig resource.
 */
export interface ProxyConfigArgs {
    /**
     * http proxy URL.
     */
    httpProxy: pulumi.Input<string>;
    /**
     * https proxy URL.
     */
    httpsProxy: pulumi.Input<string>;
    /**
     * Server CA Certificate file.
     */
    proxyCaCertificate?: pulumi.Input<string>;
}
