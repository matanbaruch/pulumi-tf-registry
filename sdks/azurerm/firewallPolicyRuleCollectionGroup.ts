// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallPolicyRuleCollectionGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleCollectionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallPolicyRuleCollectionGroupState, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleCollectionGroup {
        return new FirewallPolicyRuleCollectionGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/firewallPolicyRuleCollectionGroup:FirewallPolicyRuleCollectionGroup';

    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleCollectionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallPolicyRuleCollectionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallPolicyRuleCollectionGroup.__pulumiType;
    }

    public readonly applicationRuleCollections!: pulumi.Output<outputs.FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | undefined>;
    public readonly firewallPolicyId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly natRuleCollections!: pulumi.Output<outputs.FirewallPolicyRuleCollectionGroupNatRuleCollection[] | undefined>;
    public readonly networkRuleCollections!: pulumi.Output<outputs.FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | undefined>;
    public readonly priority!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.FirewallPolicyRuleCollectionGroupTimeouts | undefined>;

    /**
     * Create a FirewallPolicyRuleCollectionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallPolicyRuleCollectionGroupArgs | FirewallPolicyRuleCollectionGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallPolicyRuleCollectionGroupState | undefined;
            resourceInputs["applicationRuleCollections"] = state ? state.applicationRuleCollections : undefined;
            resourceInputs["firewallPolicyId"] = state ? state.firewallPolicyId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natRuleCollections"] = state ? state.natRuleCollections : undefined;
            resourceInputs["networkRuleCollections"] = state ? state.networkRuleCollections : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirewallPolicyRuleCollectionGroupArgs | undefined;
            if ((!args || args.firewallPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicyId'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            resourceInputs["applicationRuleCollections"] = args ? args.applicationRuleCollections : undefined;
            resourceInputs["firewallPolicyId"] = args ? args.firewallPolicyId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natRuleCollections"] = args ? args.natRuleCollections : undefined;
            resourceInputs["networkRuleCollections"] = args ? args.networkRuleCollections : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallPolicyRuleCollectionGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallPolicyRuleCollectionGroup resources.
 */
export interface FirewallPolicyRuleCollectionGroupState {
    applicationRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupApplicationRuleCollection>[]>;
    firewallPolicyId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    natRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupNatRuleCollection>[]>;
    networkRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupNetworkRuleCollection>[]>;
    priority?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupTimeouts>;
}

/**
 * The set of arguments for constructing a FirewallPolicyRuleCollectionGroup resource.
 */
export interface FirewallPolicyRuleCollectionGroupArgs {
    applicationRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupApplicationRuleCollection>[]>;
    firewallPolicyId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    natRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupNatRuleCollection>[]>;
    networkRuleCollections?: pulumi.Input<pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupNetworkRuleCollection>[]>;
    priority: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.FirewallPolicyRuleCollectionGroupTimeouts>;
}
