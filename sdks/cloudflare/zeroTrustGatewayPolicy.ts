// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ZeroTrustGatewayPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ZeroTrustGatewayPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZeroTrustGatewayPolicyState, opts?: pulumi.CustomResourceOptions): ZeroTrustGatewayPolicy {
        return new ZeroTrustGatewayPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/zeroTrustGatewayPolicy:ZeroTrustGatewayPolicy';

    /**
     * Returns true if the given object is an instance of ZeroTrustGatewayPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZeroTrustGatewayPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZeroTrustGatewayPolicy.__pulumiType;
    }

    /**
     * The account identifier to target for the resource.
     */
    public readonly accountId!: pulumi.Output<string>;
    /**
     * The action executed by matched teams rule. Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`,
     * `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * The description of the teams rule.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The wirefilter expression to be used for device_posture check matching.
     */
    public readonly devicePosture!: pulumi.Output<string | undefined>;
    /**
     * Indicator of rule enablement.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The protocol or layer to evaluate the traffic and identity expressions.
     */
    public readonly filters!: pulumi.Output<string[] | undefined>;
    /**
     * The wirefilter expression to be used for identity matching.
     */
    public readonly identity!: pulumi.Output<string | undefined>;
    /**
     * The name of the teams rule.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The evaluation precedence of the teams rule.
     */
    public readonly precedence!: pulumi.Output<number>;
    /**
     * Additional rule settings.
     */
    public readonly ruleSettings!: pulumi.Output<outputs.ZeroTrustGatewayPolicyRuleSettings | undefined>;
    /**
     * The wirefilter expression to be used for traffic matching.
     */
    public readonly traffic!: pulumi.Output<string | undefined>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a ZeroTrustGatewayPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZeroTrustGatewayPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZeroTrustGatewayPolicyArgs | ZeroTrustGatewayPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZeroTrustGatewayPolicyState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["devicePosture"] = state ? state.devicePosture : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["precedence"] = state ? state.precedence : undefined;
            resourceInputs["ruleSettings"] = state ? state.ruleSettings : undefined;
            resourceInputs["traffic"] = state ? state.traffic : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ZeroTrustGatewayPolicyArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.precedence === undefined) && !opts.urn) {
                throw new Error("Missing required property 'precedence'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["devicePosture"] = args ? args.devicePosture : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["precedence"] = args ? args.precedence : undefined;
            resourceInputs["ruleSettings"] = args ? args.ruleSettings : undefined;
            resourceInputs["traffic"] = args ? args.traffic : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZeroTrustGatewayPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZeroTrustGatewayPolicy resources.
 */
export interface ZeroTrustGatewayPolicyState {
    /**
     * The account identifier to target for the resource.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The action executed by matched teams rule. Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`,
     * `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.
     */
    action?: pulumi.Input<string>;
    /**
     * The description of the teams rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The wirefilter expression to be used for device_posture check matching.
     */
    devicePosture?: pulumi.Input<string>;
    /**
     * Indicator of rule enablement.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The protocol or layer to evaluate the traffic and identity expressions.
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wirefilter expression to be used for identity matching.
     */
    identity?: pulumi.Input<string>;
    /**
     * The name of the teams rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The evaluation precedence of the teams rule.
     */
    precedence?: pulumi.Input<number>;
    /**
     * Additional rule settings.
     */
    ruleSettings?: pulumi.Input<inputs.ZeroTrustGatewayPolicyRuleSettings>;
    /**
     * The wirefilter expression to be used for traffic matching.
     */
    traffic?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ZeroTrustGatewayPolicy resource.
 */
export interface ZeroTrustGatewayPolicyArgs {
    /**
     * The account identifier to target for the resource.
     */
    accountId: pulumi.Input<string>;
    /**
     * The action executed by matched teams rule. Available values: `allow`, `block`, `safesearch`, `ytrestricted`, `on`,
     * `off`, `scan`, `noscan`, `isolate`, `noisolate`, `override`, `l4_override`, `egress`, `audit_ssh`, `resolve`.
     */
    action: pulumi.Input<string>;
    /**
     * The description of the teams rule.
     */
    description: pulumi.Input<string>;
    /**
     * The wirefilter expression to be used for device_posture check matching.
     */
    devicePosture?: pulumi.Input<string>;
    /**
     * Indicator of rule enablement.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The protocol or layer to evaluate the traffic and identity expressions.
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The wirefilter expression to be used for identity matching.
     */
    identity?: pulumi.Input<string>;
    /**
     * The name of the teams rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The evaluation precedence of the teams rule.
     */
    precedence: pulumi.Input<number>;
    /**
     * Additional rule settings.
     */
    ruleSettings?: pulumi.Input<inputs.ZeroTrustGatewayPolicyRuleSettings>;
    /**
     * The wirefilter expression to be used for traffic matching.
     */
    traffic?: pulumi.Input<string>;
}
