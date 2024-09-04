// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkFirewallNetworkFirewallPolicyDecryptionRule extends pulumi.CustomResource {
    /**
     * Get an existing NetworkFirewallNetworkFirewallPolicyDecryptionRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkFirewallNetworkFirewallPolicyDecryptionRuleState, opts?: pulumi.CustomResourceOptions): NetworkFirewallNetworkFirewallPolicyDecryptionRule {
        return new NetworkFirewallNetworkFirewallPolicyDecryptionRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/networkFirewallNetworkFirewallPolicyDecryptionRule:NetworkFirewallNetworkFirewallPolicyDecryptionRule';

    /**
     * Returns true if the given object is an instance of NetworkFirewallNetworkFirewallPolicyDecryptionRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkFirewallNetworkFirewallPolicyDecryptionRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkFirewallNetworkFirewallPolicyDecryptionRule.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly condition!: pulumi.Output<outputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition>;
    public readonly decryptionProfile!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkFirewallPolicyId!: pulumi.Output<string>;
    public /*out*/ readonly parentResourceId!: pulumi.Output<string>;
    public readonly position!: pulumi.Output<outputs.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition | undefined>;
    public readonly priorityOrder!: pulumi.Output<string | undefined>;
    public readonly secret!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts | undefined>;

    /**
     * Create a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkFirewallNetworkFirewallPolicyDecryptionRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkFirewallNetworkFirewallPolicyDecryptionRuleArgs | NetworkFirewallNetworkFirewallPolicyDecryptionRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkFirewallNetworkFirewallPolicyDecryptionRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["decryptionProfile"] = state ? state.decryptionProfile : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkFirewallPolicyId"] = state ? state.networkFirewallPolicyId : undefined;
            resourceInputs["parentResourceId"] = state ? state.parentResourceId : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["priorityOrder"] = state ? state.priorityOrder : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkFirewallNetworkFirewallPolicyDecryptionRuleArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.condition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'condition'");
            }
            if ((!args || args.networkFirewallPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFirewallPolicyId'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["decryptionProfile"] = args ? args.decryptionProfile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkFirewallPolicyId"] = args ? args.networkFirewallPolicyId : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["priorityOrder"] = args ? args.priorityOrder : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["parentResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkFirewallNetworkFirewallPolicyDecryptionRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkFirewallNetworkFirewallPolicyDecryptionRule resources.
 */
export interface NetworkFirewallNetworkFirewallPolicyDecryptionRuleState {
    action?: pulumi.Input<string>;
    condition?: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition>;
    decryptionProfile?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkFirewallPolicyId?: pulumi.Input<string>;
    parentResourceId?: pulumi.Input<string>;
    position?: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition>;
    priorityOrder?: pulumi.Input<string>;
    secret?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource.
 */
export interface NetworkFirewallNetworkFirewallPolicyDecryptionRuleArgs {
    action: pulumi.Input<string>;
    condition: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition>;
    decryptionProfile?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkFirewallPolicyId: pulumi.Input<string>;
    position?: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition>;
    priorityOrder?: pulumi.Input<string>;
    secret?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts>;
}
