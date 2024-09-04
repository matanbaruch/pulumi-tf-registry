// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProxyAgent extends pulumi.CustomResource {
    /**
     * Get an existing ProxyAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProxyAgentState, opts?: pulumi.CustomResourceOptions): ProxyAgent {
        return new ProxyAgent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fivetran:index/proxyAgent:ProxyAgent';

    /**
     * Returns true if the given object is an instance of ProxyAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProxyAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProxyAgent.__pulumiType;
    }

    /**
     * The actor who created the proxy agent.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Proxy agent name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    public readonly groupRegion!: pulumi.Output<string>;
    /**
     * The proxy server URI.
     */
    public /*out*/ readonly proxyServerUri!: pulumi.Output<string>;
    /**
     * The timestamp of the time the proxy agent was created in your account.
     */
    public /*out*/ readonly registredAt!: pulumi.Output<string>;
    /**
     * The salt.
     */
    public /*out*/ readonly salt!: pulumi.Output<string>;
    /**
     * The auth token.
     */
    public /*out*/ readonly token!: pulumi.Output<string>;

    /**
     * Create a ProxyAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProxyAgentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProxyAgentArgs | ProxyAgentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProxyAgentState | undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["groupRegion"] = state ? state.groupRegion : undefined;
            resourceInputs["proxyServerUri"] = state ? state.proxyServerUri : undefined;
            resourceInputs["registredAt"] = state ? state.registredAt : undefined;
            resourceInputs["salt"] = state ? state.salt : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
        } else {
            const args = argsOrState as ProxyAgentArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.groupRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupRegion'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["groupRegion"] = args ? args.groupRegion : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["proxyServerUri"] = undefined /*out*/;
            resourceInputs["registredAt"] = undefined /*out*/;
            resourceInputs["salt"] = undefined /*out*/;
            resourceInputs["token"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProxyAgent.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProxyAgent resources.
 */
export interface ProxyAgentState {
    /**
     * The actor who created the proxy agent.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Proxy agent name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    groupRegion?: pulumi.Input<string>;
    /**
     * The proxy server URI.
     */
    proxyServerUri?: pulumi.Input<string>;
    /**
     * The timestamp of the time the proxy agent was created in your account.
     */
    registredAt?: pulumi.Input<string>;
    /**
     * The salt.
     */
    salt?: pulumi.Input<string>;
    /**
     * The auth token.
     */
    token?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ProxyAgent resource.
 */
export interface ProxyAgentArgs {
    /**
     * Proxy agent name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Data processing location. This is where Fivetran will operate and run computation on data.
     */
    groupRegion: pulumi.Input<string>;
}
