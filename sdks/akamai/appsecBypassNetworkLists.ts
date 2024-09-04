// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AppsecBypassNetworkLists extends pulumi.CustomResource {
    /**
     * Get an existing AppsecBypassNetworkLists resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsecBypassNetworkListsState, opts?: pulumi.CustomResourceOptions): AppsecBypassNetworkLists {
        return new AppsecBypassNetworkLists(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/appsecBypassNetworkLists:AppsecBypassNetworkLists';

    /**
     * Returns true if the given object is an instance of AppsecBypassNetworkLists.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppsecBypassNetworkLists {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppsecBypassNetworkLists.__pulumiType;
    }

    /**
     * List of network list IDs that compose the bypass list
     */
    public readonly bypassNetworkLists!: pulumi.Output<string[]>;
    /**
     * Unique identifier of the security configuration
     */
    public readonly configId!: pulumi.Output<number>;
    /**
     * The unique identifier of the security policy governing the bypass network lists
     */
    public readonly securityPolicyId!: pulumi.Output<string>;

    /**
     * Create a AppsecBypassNetworkLists resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsecBypassNetworkListsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsecBypassNetworkListsArgs | AppsecBypassNetworkListsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsecBypassNetworkListsState | undefined;
            resourceInputs["bypassNetworkLists"] = state ? state.bypassNetworkLists : undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["securityPolicyId"] = state ? state.securityPolicyId : undefined;
        } else {
            const args = argsOrState as AppsecBypassNetworkListsArgs | undefined;
            if ((!args || args.bypassNetworkLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bypassNetworkLists'");
            }
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.securityPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityPolicyId'");
            }
            resourceInputs["bypassNetworkLists"] = args ? args.bypassNetworkLists : undefined;
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["securityPolicyId"] = args ? args.securityPolicyId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppsecBypassNetworkLists.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppsecBypassNetworkLists resources.
 */
export interface AppsecBypassNetworkListsState {
    /**
     * List of network list IDs that compose the bypass list
     */
    bypassNetworkLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier of the security configuration
     */
    configId?: pulumi.Input<number>;
    /**
     * The unique identifier of the security policy governing the bypass network lists
     */
    securityPolicyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppsecBypassNetworkLists resource.
 */
export interface AppsecBypassNetworkListsArgs {
    /**
     * List of network list IDs that compose the bypass list
     */
    bypassNetworkLists: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique identifier of the security configuration
     */
    configId: pulumi.Input<number>;
    /**
     * The unique identifier of the security policy governing the bypass network lists
     */
    securityPolicyId: pulumi.Input<string>;
}
