// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectRouterPrefixlistRule extends pulumi.CustomResource {
    /**
     * Get an existing ObjectRouterPrefixlistRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectRouterPrefixlistRuleState, opts?: pulumi.CustomResourceOptions): ObjectRouterPrefixlistRule {
        return new ObjectRouterPrefixlistRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectRouterPrefixlistRule:ObjectRouterPrefixlistRule';

    /**
     * Returns true if the given object is an instance of ObjectRouterPrefixlistRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectRouterPrefixlistRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectRouterPrefixlistRule.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly flags!: pulumi.Output<number | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly ge!: pulumi.Output<number | undefined>;
    public readonly le!: pulumi.Output<number | undefined>;
    public readonly prefixList!: pulumi.Output<string>;
    public readonly prefixes!: pulumi.Output<string[]>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectRouterPrefixlistRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectRouterPrefixlistRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectRouterPrefixlistRuleArgs | ObjectRouterPrefixlistRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectRouterPrefixlistRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["flags"] = state ? state.flags : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ge"] = state ? state.ge : undefined;
            resourceInputs["le"] = state ? state.le : undefined;
            resourceInputs["prefixList"] = state ? state.prefixList : undefined;
            resourceInputs["prefixes"] = state ? state.prefixes : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectRouterPrefixlistRuleArgs | undefined;
            if ((!args || args.prefixList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixList'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["flags"] = args ? args.flags : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ge"] = args ? args.ge : undefined;
            resourceInputs["le"] = args ? args.le : undefined;
            resourceInputs["prefixList"] = args ? args.prefixList : undefined;
            resourceInputs["prefixes"] = args ? args.prefixes : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectRouterPrefixlistRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectRouterPrefixlistRule resources.
 */
export interface ObjectRouterPrefixlistRuleState {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    flags?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    ge?: pulumi.Input<number>;
    le?: pulumi.Input<number>;
    prefixList?: pulumi.Input<string>;
    prefixes?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectRouterPrefixlistRule resource.
 */
export interface ObjectRouterPrefixlistRuleArgs {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    flags?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    ge?: pulumi.Input<number>;
    le?: pulumi.Input<number>;
    prefixList: pulumi.Input<string>;
    prefixes?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
}
