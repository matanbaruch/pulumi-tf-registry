// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbHttpResponseRewriteRule extends pulumi.CustomResource {
    /**
     * Get an existing LbHttpResponseRewriteRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbHttpResponseRewriteRuleState, opts?: pulumi.CustomResourceOptions): LbHttpResponseRewriteRule {
        return new LbHttpResponseRewriteRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/lbHttpResponseRewriteRule:LbHttpResponseRewriteRule';

    /**
     * Returns true if the given object is an instance of LbHttpResponseRewriteRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbHttpResponseRewriteRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbHttpResponseRewriteRule.__pulumiType;
    }

    /**
     * Rule condition based on http header
     */
    public readonly cookieConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleCookieCondition[] | undefined>;
    /**
     * Description of this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Header to replace original header in outgoing message
     */
    public readonly headerRewriteAction!: pulumi.Output<outputs.LbHttpResponseRewriteRuleHeaderRewriteAction>;
    /**
     * Rule condition based on IP settings of the message
     */
    public readonly ipConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleIpCondition[] | undefined>;
    /**
     * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
     */
    public readonly matchStrategy!: pulumi.Output<string | undefined>;
    /**
     * Rule condition based on http request method
     */
    public readonly methodConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleMethodCondition[] | undefined>;
    /**
     * Rule condition based on http header
     */
    public readonly requestHeaderConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleRequestHeaderCondition[] | undefined>;
    /**
     * Rule condition based on http header
     */
    public readonly responseHeaderConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleResponseHeaderCondition[] | undefined>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.LbHttpResponseRewriteRuleTag[] | undefined>;
    /**
     * Rule condition based on TCP settings of the message
     */
    public readonly tcpConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleTcpCondition[] | undefined>;
    /**
     * Rule condition based on http request URI arguments (query string)
     */
    public readonly uriArgumentsConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleUriArgumentsCondition[] | undefined>;
    /**
     * Rule condition based on http request URI
     */
    public readonly uriConditions!: pulumi.Output<outputs.LbHttpResponseRewriteRuleUriCondition[] | undefined>;
    /**
     * Rule condition based on http request version
     */
    public readonly versionCondition!: pulumi.Output<outputs.LbHttpResponseRewriteRuleVersionCondition | undefined>;

    /**
     * Create a LbHttpResponseRewriteRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbHttpResponseRewriteRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbHttpResponseRewriteRuleArgs | LbHttpResponseRewriteRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbHttpResponseRewriteRuleState | undefined;
            resourceInputs["cookieConditions"] = state ? state.cookieConditions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["headerRewriteAction"] = state ? state.headerRewriteAction : undefined;
            resourceInputs["ipConditions"] = state ? state.ipConditions : undefined;
            resourceInputs["matchStrategy"] = state ? state.matchStrategy : undefined;
            resourceInputs["methodConditions"] = state ? state.methodConditions : undefined;
            resourceInputs["requestHeaderConditions"] = state ? state.requestHeaderConditions : undefined;
            resourceInputs["responseHeaderConditions"] = state ? state.responseHeaderConditions : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tcpConditions"] = state ? state.tcpConditions : undefined;
            resourceInputs["uriArgumentsConditions"] = state ? state.uriArgumentsConditions : undefined;
            resourceInputs["uriConditions"] = state ? state.uriConditions : undefined;
            resourceInputs["versionCondition"] = state ? state.versionCondition : undefined;
        } else {
            const args = argsOrState as LbHttpResponseRewriteRuleArgs | undefined;
            if ((!args || args.headerRewriteAction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'headerRewriteAction'");
            }
            resourceInputs["cookieConditions"] = args ? args.cookieConditions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["headerRewriteAction"] = args ? args.headerRewriteAction : undefined;
            resourceInputs["ipConditions"] = args ? args.ipConditions : undefined;
            resourceInputs["matchStrategy"] = args ? args.matchStrategy : undefined;
            resourceInputs["methodConditions"] = args ? args.methodConditions : undefined;
            resourceInputs["requestHeaderConditions"] = args ? args.requestHeaderConditions : undefined;
            resourceInputs["responseHeaderConditions"] = args ? args.responseHeaderConditions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tcpConditions"] = args ? args.tcpConditions : undefined;
            resourceInputs["uriArgumentsConditions"] = args ? args.uriArgumentsConditions : undefined;
            resourceInputs["uriConditions"] = args ? args.uriConditions : undefined;
            resourceInputs["versionCondition"] = args ? args.versionCondition : undefined;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbHttpResponseRewriteRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbHttpResponseRewriteRule resources.
 */
export interface LbHttpResponseRewriteRuleState {
    /**
     * Rule condition based on http header
     */
    cookieConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleCookieCondition>[]>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Header to replace original header in outgoing message
     */
    headerRewriteAction?: pulumi.Input<inputs.LbHttpResponseRewriteRuleHeaderRewriteAction>;
    /**
     * Rule condition based on IP settings of the message
     */
    ipConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleIpCondition>[]>;
    /**
     * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
     */
    matchStrategy?: pulumi.Input<string>;
    /**
     * Rule condition based on http request method
     */
    methodConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleMethodCondition>[]>;
    /**
     * Rule condition based on http header
     */
    requestHeaderConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleRequestHeaderCondition>[]>;
    /**
     * Rule condition based on http header
     */
    responseHeaderConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleResponseHeaderCondition>[]>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleTag>[]>;
    /**
     * Rule condition based on TCP settings of the message
     */
    tcpConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleTcpCondition>[]>;
    /**
     * Rule condition based on http request URI arguments (query string)
     */
    uriArgumentsConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleUriArgumentsCondition>[]>;
    /**
     * Rule condition based on http request URI
     */
    uriConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleUriCondition>[]>;
    /**
     * Rule condition based on http request version
     */
    versionCondition?: pulumi.Input<inputs.LbHttpResponseRewriteRuleVersionCondition>;
}

/**
 * The set of arguments for constructing a LbHttpResponseRewriteRule resource.
 */
export interface LbHttpResponseRewriteRuleArgs {
    /**
     * Rule condition based on http header
     */
    cookieConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleCookieCondition>[]>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Header to replace original header in outgoing message
     */
    headerRewriteAction: pulumi.Input<inputs.LbHttpResponseRewriteRuleHeaderRewriteAction>;
    /**
     * Rule condition based on IP settings of the message
     */
    ipConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleIpCondition>[]>;
    /**
     * Strategy when multiple match conditions are specified in one rule (ANY vs ALL)
     */
    matchStrategy?: pulumi.Input<string>;
    /**
     * Rule condition based on http request method
     */
    methodConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleMethodCondition>[]>;
    /**
     * Rule condition based on http header
     */
    requestHeaderConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleRequestHeaderCondition>[]>;
    /**
     * Rule condition based on http header
     */
    responseHeaderConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleResponseHeaderCondition>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleTag>[]>;
    /**
     * Rule condition based on TCP settings of the message
     */
    tcpConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleTcpCondition>[]>;
    /**
     * Rule condition based on http request URI arguments (query string)
     */
    uriArgumentsConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleUriArgumentsCondition>[]>;
    /**
     * Rule condition based on http request URI
     */
    uriConditions?: pulumi.Input<pulumi.Input<inputs.LbHttpResponseRewriteRuleUriCondition>[]>;
    /**
     * Rule condition based on http request version
     */
    versionCondition?: pulumi.Input<inputs.LbHttpResponseRewriteRuleVersionCondition>;
}
