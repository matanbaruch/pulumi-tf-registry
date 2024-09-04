// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing IpFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpFirewallRuleState, opts?: pulumi.CustomResourceOptions): IpFirewallRule {
        return new IpFirewallRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ovh:index/ipFirewallRule:IpFirewallRule';

    /**
     * Returns true if the given object is an instance of IpFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpFirewallRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpFirewallRule.__pulumiType;
    }

    /**
     * Possible values for action
     */
    public readonly action!: pulumi.Output<string>;
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Destination ip for your rule
     */
    public /*out*/ readonly destination!: pulumi.Output<string>;
    /**
     * Destination port for your rule. Only with TCP/UDP protocol
     */
    public readonly destinationPort!: pulumi.Output<number>;
    /**
     * Destination port range for your rule. Only with TCP/UDP protocol
     */
    public /*out*/ readonly destinationPortDesc!: pulumi.Output<string>;
    /**
     * Fragments option
     */
    public readonly fragments!: pulumi.Output<boolean>;
    /**
     * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
     */
    public readonly ip!: pulumi.Output<string>;
    /**
     * IPv4 address (e.g., 192.0.2.0)
     */
    public readonly ipOnFirewall!: pulumi.Output<string>;
    /**
     * Possible values for protocol
     */
    public readonly protocol!: pulumi.Output<string>;
    public /*out*/ readonly rule!: pulumi.Output<string>;
    /**
     * Possible values for action
     */
    public readonly sequence!: pulumi.Output<number>;
    /**
     * IPv4 CIDR notation (e.g., 192.0.2.0/24)
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * Source port for your rule. Only with TCP/UDP protocol
     */
    public readonly sourcePort!: pulumi.Output<number>;
    /**
     * Source port for your rule. Only with TCP/UDP protocol
     */
    public /*out*/ readonly sourcePortDesc!: pulumi.Output<string>;
    /**
     * Current state of your rule
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * TCP option on your rule
     */
    public readonly tcpOption!: pulumi.Output<string>;

    /**
     * Create a IpFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpFirewallRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpFirewallRuleArgs | IpFirewallRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpFirewallRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["destinationPort"] = state ? state.destinationPort : undefined;
            resourceInputs["destinationPortDesc"] = state ? state.destinationPortDesc : undefined;
            resourceInputs["fragments"] = state ? state.fragments : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["ipOnFirewall"] = state ? state.ipOnFirewall : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["rule"] = state ? state.rule : undefined;
            resourceInputs["sequence"] = state ? state.sequence : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourcePort"] = state ? state.sourcePort : undefined;
            resourceInputs["sourcePortDesc"] = state ? state.sourcePortDesc : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tcpOption"] = state ? state.tcpOption : undefined;
        } else {
            const args = argsOrState as IpFirewallRuleArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.ipOnFirewall === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipOnFirewall'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.sequence === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sequence'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["destinationPort"] = args ? args.destinationPort : undefined;
            resourceInputs["fragments"] = args ? args.fragments : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["ipOnFirewall"] = args ? args.ipOnFirewall : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["sequence"] = args ? args.sequence : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourcePort"] = args ? args.sourcePort : undefined;
            resourceInputs["tcpOption"] = args ? args.tcpOption : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["destinationPortDesc"] = undefined /*out*/;
            resourceInputs["rule"] = undefined /*out*/;
            resourceInputs["sourcePortDesc"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpFirewallRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpFirewallRule resources.
 */
export interface IpFirewallRuleState {
    /**
     * Possible values for action
     */
    action?: pulumi.Input<string>;
    creationDate?: pulumi.Input<string>;
    /**
     * Destination ip for your rule
     */
    destination?: pulumi.Input<string>;
    /**
     * Destination port for your rule. Only with TCP/UDP protocol
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * Destination port range for your rule. Only with TCP/UDP protocol
     */
    destinationPortDesc?: pulumi.Input<string>;
    /**
     * Fragments option
     */
    fragments?: pulumi.Input<boolean>;
    /**
     * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
     */
    ip?: pulumi.Input<string>;
    /**
     * IPv4 address (e.g., 192.0.2.0)
     */
    ipOnFirewall?: pulumi.Input<string>;
    /**
     * Possible values for protocol
     */
    protocol?: pulumi.Input<string>;
    rule?: pulumi.Input<string>;
    /**
     * Possible values for action
     */
    sequence?: pulumi.Input<number>;
    /**
     * IPv4 CIDR notation (e.g., 192.0.2.0/24)
     */
    source?: pulumi.Input<string>;
    /**
     * Source port for your rule. Only with TCP/UDP protocol
     */
    sourcePort?: pulumi.Input<number>;
    /**
     * Source port for your rule. Only with TCP/UDP protocol
     */
    sourcePortDesc?: pulumi.Input<string>;
    /**
     * Current state of your rule
     */
    state?: pulumi.Input<string>;
    /**
     * TCP option on your rule
     */
    tcpOption?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpFirewallRule resource.
 */
export interface IpFirewallRuleArgs {
    /**
     * Possible values for action
     */
    action: pulumi.Input<string>;
    /**
     * Destination port for your rule. Only with TCP/UDP protocol
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * Fragments option
     */
    fragments?: pulumi.Input<boolean>;
    /**
     * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
     */
    ip: pulumi.Input<string>;
    /**
     * IPv4 address (e.g., 192.0.2.0)
     */
    ipOnFirewall: pulumi.Input<string>;
    /**
     * Possible values for protocol
     */
    protocol: pulumi.Input<string>;
    /**
     * Possible values for action
     */
    sequence: pulumi.Input<number>;
    /**
     * IPv4 CIDR notation (e.g., 192.0.2.0/24)
     */
    source?: pulumi.Input<string>;
    /**
     * Source port for your rule. Only with TCP/UDP protocol
     */
    sourcePort?: pulumi.Input<number>;
    /**
     * TCP option on your rule
     */
    tcpOption?: pulumi.Input<string>;
}
