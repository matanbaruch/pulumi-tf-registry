// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeNetworkFirewallPolicyAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ComputeNetworkFirewallPolicyAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeNetworkFirewallPolicyAssociationState, opts?: pulumi.CustomResourceOptions): ComputeNetworkFirewallPolicyAssociation {
        return new ComputeNetworkFirewallPolicyAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeNetworkFirewallPolicyAssociation:ComputeNetworkFirewallPolicyAssociation';

    /**
     * Returns true if the given object is an instance of ComputeNetworkFirewallPolicyAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeNetworkFirewallPolicyAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeNetworkFirewallPolicyAssociation.__pulumiType;
    }

    /**
     * The target that the firewall policy is attached to.
     */
    public readonly attachmentTarget!: pulumi.Output<string>;
    /**
     * The firewall policy ID of the association.
     */
    public readonly firewallPolicy!: pulumi.Output<string>;
    /**
     * The name for an association.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The project for the resource
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The short name of the firewall policy of the association.
     */
    public /*out*/ readonly shortName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeNetworkFirewallPolicyAssociationTimeouts | undefined>;

    /**
     * Create a ComputeNetworkFirewallPolicyAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeNetworkFirewallPolicyAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeNetworkFirewallPolicyAssociationArgs | ComputeNetworkFirewallPolicyAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeNetworkFirewallPolicyAssociationState | undefined;
            resourceInputs["attachmentTarget"] = state ? state.attachmentTarget : undefined;
            resourceInputs["firewallPolicy"] = state ? state.firewallPolicy : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["shortName"] = state ? state.shortName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeNetworkFirewallPolicyAssociationArgs | undefined;
            if ((!args || args.attachmentTarget === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attachmentTarget'");
            }
            if ((!args || args.firewallPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firewallPolicy'");
            }
            resourceInputs["attachmentTarget"] = args ? args.attachmentTarget : undefined;
            resourceInputs["firewallPolicy"] = args ? args.firewallPolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["shortName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeNetworkFirewallPolicyAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeNetworkFirewallPolicyAssociation resources.
 */
export interface ComputeNetworkFirewallPolicyAssociationState {
    /**
     * The target that the firewall policy is attached to.
     */
    attachmentTarget?: pulumi.Input<string>;
    /**
     * The firewall policy ID of the association.
     */
    firewallPolicy?: pulumi.Input<string>;
    /**
     * The name for an association.
     */
    name?: pulumi.Input<string>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * The short name of the firewall policy of the association.
     */
    shortName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeNetworkFirewallPolicyAssociationTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeNetworkFirewallPolicyAssociation resource.
 */
export interface ComputeNetworkFirewallPolicyAssociationArgs {
    /**
     * The target that the firewall policy is attached to.
     */
    attachmentTarget: pulumi.Input<string>;
    /**
     * The firewall policy ID of the association.
     */
    firewallPolicy: pulumi.Input<string>;
    /**
     * The name for an association.
     */
    name?: pulumi.Input<string>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeNetworkFirewallPolicyAssociationTimeouts>;
}
