// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NatgatewayRule extends pulumi.CustomResource {
    /**
     * Get an existing NatgatewayRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatgatewayRuleState, opts?: pulumi.CustomResourceOptions): NatgatewayRule {
        return new NatgatewayRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/natgatewayRule:NatgatewayRule';

    /**
     * Returns true if the given object is an instance of NatgatewayRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatgatewayRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatgatewayRule.__pulumiType;
    }

    public readonly datacenterId!: pulumi.Output<string>;
    /**
     * Name of the NAT gateway rule
     */
    public readonly name!: pulumi.Output<string>;
    public readonly natgatewayId!: pulumi.Output<string>;
    /**
     * Protocol of the NAT gateway rule. Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be
     * set.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Public IP address of the NAT gateway rule. Specifies the address used for masking outgoing packets source address field.
     * Should be one of the customer reserved IP address already configured on the NAT gateway resource
     */
    public readonly publicIp!: pulumi.Output<string>;
    /**
     * Source subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to based
     * on the packets source IP address.
     */
    public readonly sourceSubnet!: pulumi.Output<string>;
    /**
     * Target port range of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to
     * based on destination port. If none is provided, rule will match any port
     */
    public readonly targetPortRange!: pulumi.Output<outputs.NatgatewayRuleTargetPortRange | undefined>;
    /**
     * Target or destination subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule
     * applies to based on the packets destination IP address. If none is provided, rule will match any address.
     */
    public readonly targetSubnet!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NatgatewayRuleTimeouts | undefined>;
    /**
     * Type of the NAT gateway rule.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a NatgatewayRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatgatewayRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NatgatewayRuleArgs | NatgatewayRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NatgatewayRuleState | undefined;
            resourceInputs["datacenterId"] = state ? state.datacenterId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natgatewayId"] = state ? state.natgatewayId : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["publicIp"] = state ? state.publicIp : undefined;
            resourceInputs["sourceSubnet"] = state ? state.sourceSubnet : undefined;
            resourceInputs["targetPortRange"] = state ? state.targetPortRange : undefined;
            resourceInputs["targetSubnet"] = state ? state.targetSubnet : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as NatgatewayRuleArgs | undefined;
            if ((!args || args.datacenterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datacenterId'");
            }
            if ((!args || args.natgatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natgatewayId'");
            }
            if ((!args || args.publicIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIp'");
            }
            if ((!args || args.sourceSubnet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceSubnet'");
            }
            resourceInputs["datacenterId"] = args ? args.datacenterId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natgatewayId"] = args ? args.natgatewayId : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["publicIp"] = args ? args.publicIp : undefined;
            resourceInputs["sourceSubnet"] = args ? args.sourceSubnet : undefined;
            resourceInputs["targetPortRange"] = args ? args.targetPortRange : undefined;
            resourceInputs["targetSubnet"] = args ? args.targetSubnet : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NatgatewayRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NatgatewayRule resources.
 */
export interface NatgatewayRuleState {
    datacenterId?: pulumi.Input<string>;
    /**
     * Name of the NAT gateway rule
     */
    name?: pulumi.Input<string>;
    natgatewayId?: pulumi.Input<string>;
    /**
     * Protocol of the NAT gateway rule. Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be
     * set.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Public IP address of the NAT gateway rule. Specifies the address used for masking outgoing packets source address field.
     * Should be one of the customer reserved IP address already configured on the NAT gateway resource
     */
    publicIp?: pulumi.Input<string>;
    /**
     * Source subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to based
     * on the packets source IP address.
     */
    sourceSubnet?: pulumi.Input<string>;
    /**
     * Target port range of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to
     * based on destination port. If none is provided, rule will match any port
     */
    targetPortRange?: pulumi.Input<inputs.NatgatewayRuleTargetPortRange>;
    /**
     * Target or destination subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule
     * applies to based on the packets destination IP address. If none is provided, rule will match any address.
     */
    targetSubnet?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NatgatewayRuleTimeouts>;
    /**
     * Type of the NAT gateway rule.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NatgatewayRule resource.
 */
export interface NatgatewayRuleArgs {
    datacenterId: pulumi.Input<string>;
    /**
     * Name of the NAT gateway rule
     */
    name?: pulumi.Input<string>;
    natgatewayId: pulumi.Input<string>;
    /**
     * Protocol of the NAT gateway rule. Defaults to ALL. If protocol is 'ICMP' then targetPortRange start and end cannot be
     * set.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Public IP address of the NAT gateway rule. Specifies the address used for masking outgoing packets source address field.
     * Should be one of the customer reserved IP address already configured on the NAT gateway resource
     */
    publicIp: pulumi.Input<string>;
    /**
     * Source subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to based
     * on the packets source IP address.
     */
    sourceSubnet: pulumi.Input<string>;
    /**
     * Target port range of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule applies to
     * based on destination port. If none is provided, rule will match any port
     */
    targetPortRange?: pulumi.Input<inputs.NatgatewayRuleTargetPortRange>;
    /**
     * Target or destination subnet of the NAT gateway rule. For SNAT rules it specifies which packets this translation rule
     * applies to based on the packets destination IP address. If none is provided, rule will match any address.
     */
    targetSubnet?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NatgatewayRuleTimeouts>;
    /**
     * Type of the NAT gateway rule.
     */
    type?: pulumi.Input<string>;
}
