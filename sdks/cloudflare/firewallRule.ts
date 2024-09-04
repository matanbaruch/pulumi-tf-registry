// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallRuleState, opts?: pulumi.CustomResourceOptions): FirewallRule {
        return new FirewallRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/firewallRule:FirewallRule';

    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallRule.__pulumiType;
    }

    /**
     * The action to apply to a matched request. Available values: `block`, `challenge`, `allow`, `js_challenge`,
     * `managed_challenge`, `log`, `bypass`.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * A description of the rule to help identify it.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The identifier of the Filter to use for determining if the Firewall Rule should be triggered.
     */
    public readonly filterId!: pulumi.Output<string>;
    /**
     * Whether this filter based firewall rule is currently paused.
     */
    public readonly paused!: pulumi.Output<boolean | undefined>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided,
     * any rules with a priority will be sequenced before those without.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * List of products to bypass for a request when the bypass action is used. Available values: `zoneLockdown`, `uaBlock`,
     * `bic`, `hot`, `securityLevel`, `rateLimit`, `waf`.
     */
    public readonly products!: pulumi.Output<string[] | undefined>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallRuleArgs | FirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["filterId"] = state ? state.filterId : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["products"] = state ? state.products : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as FirewallRuleArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.filterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterId'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["filterId"] = args ? args.filterId : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["products"] = args ? args.products : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallRule resources.
 */
export interface FirewallRuleState {
    /**
     * The action to apply to a matched request. Available values: `block`, `challenge`, `allow`, `js_challenge`,
     * `managed_challenge`, `log`, `bypass`.
     */
    action?: pulumi.Input<string>;
    /**
     * A description of the rule to help identify it.
     */
    description?: pulumi.Input<string>;
    /**
     * The identifier of the Filter to use for determining if the Firewall Rule should be triggered.
     */
    filterId?: pulumi.Input<string>;
    /**
     * Whether this filter based firewall rule is currently paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided,
     * any rules with a priority will be sequenced before those without.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of products to bypass for a request when the bypass action is used. Available values: `zoneLockdown`, `uaBlock`,
     * `bic`, `hot`, `securityLevel`, `rateLimit`, `waf`.
     */
    products?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The action to apply to a matched request. Available values: `block`, `challenge`, `allow`, `js_challenge`,
     * `managed_challenge`, `log`, `bypass`.
     */
    action: pulumi.Input<string>;
    /**
     * A description of the rule to help identify it.
     */
    description?: pulumi.Input<string>;
    /**
     * The identifier of the Filter to use for determining if the Firewall Rule should be triggered.
     */
    filterId: pulumi.Input<string>;
    /**
     * Whether this filter based firewall rule is currently paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided,
     * any rules with a priority will be sequenced before those without.
     */
    priority?: pulumi.Input<number>;
    /**
     * List of products to bypass for a request when the bypass action is used. Available values: `zoneLockdown`, `uaBlock`,
     * `bic`, `hot`, `securityLevel`, `rateLimit`, `waf`.
     */
    products?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId: pulumi.Input<string>;
}
