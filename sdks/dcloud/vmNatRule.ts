// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VmNatRule extends pulumi.CustomResource {
    /**
     * Get an existing VmNatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VmNatRuleState, opts?: pulumi.CustomResourceOptions): VmNatRule {
        return new VmNatRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dcloud:index/vmNatRule:VmNatRule';

    /**
     * Returns true if the given object is an instance of VmNatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmNatRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmNatRule.__pulumiType;
    }

    public readonly eastWest!: pulumi.Output<boolean>;
    public readonly nicUid!: pulumi.Output<string>;
    /**
     * The scope of the NAT rule, PUBLIC (default) or INTERNAL
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    public /*out*/ readonly targetIpAddress!: pulumi.Output<string>;
    public /*out*/ readonly targetName!: pulumi.Output<string>;
    public readonly topologyUid!: pulumi.Output<string>;
    public /*out*/ readonly uid!: pulumi.Output<string>;

    /**
     * Create a VmNatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmNatRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VmNatRuleArgs | VmNatRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VmNatRuleState | undefined;
            resourceInputs["eastWest"] = state ? state.eastWest : undefined;
            resourceInputs["nicUid"] = state ? state.nicUid : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["targetIpAddress"] = state ? state.targetIpAddress : undefined;
            resourceInputs["targetName"] = state ? state.targetName : undefined;
            resourceInputs["topologyUid"] = state ? state.topologyUid : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as VmNatRuleArgs | undefined;
            if ((!args || args.eastWest === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eastWest'");
            }
            if ((!args || args.nicUid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nicUid'");
            }
            if ((!args || args.topologyUid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topologyUid'");
            }
            resourceInputs["eastWest"] = args ? args.eastWest : undefined;
            resourceInputs["nicUid"] = args ? args.nicUid : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["topologyUid"] = args ? args.topologyUid : undefined;
            resourceInputs["targetIpAddress"] = undefined /*out*/;
            resourceInputs["targetName"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VmNatRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VmNatRule resources.
 */
export interface VmNatRuleState {
    eastWest?: pulumi.Input<boolean>;
    nicUid?: pulumi.Input<string>;
    /**
     * The scope of the NAT rule, PUBLIC (default) or INTERNAL
     */
    scope?: pulumi.Input<string>;
    targetIpAddress?: pulumi.Input<string>;
    targetName?: pulumi.Input<string>;
    topologyUid?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VmNatRule resource.
 */
export interface VmNatRuleArgs {
    eastWest: pulumi.Input<boolean>;
    nicUid: pulumi.Input<string>;
    /**
     * The scope of the NAT rule, PUBLIC (default) or INTERNAL
     */
    scope?: pulumi.Input<string>;
    topologyUid: pulumi.Input<string>;
}
