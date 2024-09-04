// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyNatRule extends pulumi.CustomResource {
    /**
     * Get an existing PolicyNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyNatRuleState, opts?: pulumi.CustomResourceOptions): PolicyNatRule {
        return new PolicyNatRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyNatRule:PolicyNatRule';

    /**
     * Returns true if the given object is an instance of PolicyNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyNatRule.__pulumiType;
    }

    /**
     * The action for the NAT Rule
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * Resource context
     */
    public readonly context!: pulumi.Output<outputs.PolicyNatRuleContext | undefined>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The destination network(s) for the NAT Rule
     */
    public readonly destinationNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Enable/disable the rule
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Firewall match flag
     */
    public readonly firewallMatch!: pulumi.Output<string | undefined>;
    /**
     * The NSX-T Policy path to the Tier0 or Tier1 Gateway for this resource
     */
    public readonly gatewayPath!: pulumi.Output<string>;
    /**
     * Enable/disable the logging of rule
     */
    public readonly logging!: pulumi.Output<boolean | undefined>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * Policy based vpn mode match flag. DNAT and NO_DNAT only
     */
    public readonly policyBasedVpnMode!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * The sequence_number decides the rule_priority of a NAT rule. Valid range [0-2147483647]
     */
    public readonly rulePriority!: pulumi.Output<number | undefined>;
    /**
     * Policy paths to interfaces or labels where the NAT Rule is enforced
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Policy path of Service on which the NAT rule will be applied
     */
    public readonly service!: pulumi.Output<string | undefined>;
    /**
     * The source network(s) for the NAT Rule
     */
    public readonly sourceNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyNatRuleTag[] | undefined>;
    /**
     * The translated network(s) for the NAT Rule
     */
    public readonly translatedNetworks!: pulumi.Output<string[] | undefined>;
    /**
     * Port number or port range. DNAT only
     */
    public readonly translatedPorts!: pulumi.Output<string | undefined>;

    /**
     * Create a PolicyNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyNatRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyNatRuleArgs | PolicyNatRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyNatRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationNetworks"] = state ? state.destinationNetworks : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["firewallMatch"] = state ? state.firewallMatch : undefined;
            resourceInputs["gatewayPath"] = state ? state.gatewayPath : undefined;
            resourceInputs["logging"] = state ? state.logging : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["policyBasedVpnMode"] = state ? state.policyBasedVpnMode : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["rulePriority"] = state ? state.rulePriority : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["sourceNetworks"] = state ? state.sourceNetworks : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["translatedNetworks"] = state ? state.translatedNetworks : undefined;
            resourceInputs["translatedPorts"] = state ? state.translatedPorts : undefined;
        } else {
            const args = argsOrState as PolicyNatRuleArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.gatewayPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayPath'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationNetworks"] = args ? args.destinationNetworks : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["firewallMatch"] = args ? args.firewallMatch : undefined;
            resourceInputs["gatewayPath"] = args ? args.gatewayPath : undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["policyBasedVpnMode"] = args ? args.policyBasedVpnMode : undefined;
            resourceInputs["rulePriority"] = args ? args.rulePriority : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["sourceNetworks"] = args ? args.sourceNetworks : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["translatedNetworks"] = args ? args.translatedNetworks : undefined;
            resourceInputs["translatedPorts"] = args ? args.translatedPorts : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyNatRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyNatRule resources.
 */
export interface PolicyNatRuleState {
    /**
     * The action for the NAT Rule
     */
    action?: pulumi.Input<string>;
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyNatRuleContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The destination network(s) for the NAT Rule
     */
    destinationNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * Enable/disable the rule
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Firewall match flag
     */
    firewallMatch?: pulumi.Input<string>;
    /**
     * The NSX-T Policy path to the Tier0 or Tier1 Gateway for this resource
     */
    gatewayPath?: pulumi.Input<string>;
    /**
     * Enable/disable the logging of rule
     */
    logging?: pulumi.Input<boolean>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    /**
     * Policy based vpn mode match flag. DNAT and NO_DNAT only
     */
    policyBasedVpnMode?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * The sequence_number decides the rule_priority of a NAT rule. Valid range [0-2147483647]
     */
    rulePriority?: pulumi.Input<number>;
    /**
     * Policy paths to interfaces or labels where the NAT Rule is enforced
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Policy path of Service on which the NAT rule will be applied
     */
    service?: pulumi.Input<string>;
    /**
     * The source network(s) for the NAT Rule
     */
    sourceNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyNatRuleTag>[]>;
    /**
     * The translated network(s) for the NAT Rule
     */
    translatedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Port number or port range. DNAT only
     */
    translatedPorts?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyNatRule resource.
 */
export interface PolicyNatRuleArgs {
    /**
     * The action for the NAT Rule
     */
    action: pulumi.Input<string>;
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyNatRuleContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The destination network(s) for the NAT Rule
     */
    destinationNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * Enable/disable the rule
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Firewall match flag
     */
    firewallMatch?: pulumi.Input<string>;
    /**
     * The NSX-T Policy path to the Tier0 or Tier1 Gateway for this resource
     */
    gatewayPath: pulumi.Input<string>;
    /**
     * Enable/disable the logging of rule
     */
    logging?: pulumi.Input<boolean>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy based vpn mode match flag. DNAT and NO_DNAT only
     */
    policyBasedVpnMode?: pulumi.Input<string>;
    /**
     * The sequence_number decides the rule_priority of a NAT rule. Valid range [0-2147483647]
     */
    rulePriority?: pulumi.Input<number>;
    /**
     * Policy paths to interfaces or labels where the NAT Rule is enforced
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Policy path of Service on which the NAT rule will be applied
     */
    service?: pulumi.Input<string>;
    /**
     * The source network(s) for the NAT Rule
     */
    sourceNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyNatRuleTag>[]>;
    /**
     * The translated network(s) for the NAT Rule
     */
    translatedNetworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Port number or port range. DNAT only
     */
    translatedPorts?: pulumi.Input<string>;
}
