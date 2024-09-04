// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AutomemberaddCondition extends pulumi.CustomResource {
    /**
     * Get an existing AutomemberaddCondition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomemberaddConditionState, opts?: pulumi.CustomResourceOptions): AutomemberaddCondition {
        return new AutomemberaddCondition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'freeipa:index/automemberaddCondition:AutomemberaddCondition';

    /**
     * Returns true if the given object is an instance of AutomemberaddCondition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomemberaddCondition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomemberaddCondition.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly exclusiveregexes!: pulumi.Output<string[] | undefined>;
    public readonly inclusiveregexes!: pulumi.Output<string[] | undefined>;
    public readonly key!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AutomemberaddCondition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomemberaddConditionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutomemberaddConditionArgs | AutomemberaddConditionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutomemberaddConditionState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["exclusiveregexes"] = state ? state.exclusiveregexes : undefined;
            resourceInputs["inclusiveregexes"] = state ? state.inclusiveregexes : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AutomemberaddConditionArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["exclusiveregexes"] = args ? args.exclusiveregexes : undefined;
            resourceInputs["inclusiveregexes"] = args ? args.inclusiveregexes : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutomemberaddCondition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutomemberaddCondition resources.
 */
export interface AutomemberaddConditionState {
    description?: pulumi.Input<string>;
    exclusiveregexes?: pulumi.Input<pulumi.Input<string>[]>;
    inclusiveregexes?: pulumi.Input<pulumi.Input<string>[]>;
    key?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AutomemberaddCondition resource.
 */
export interface AutomemberaddConditionArgs {
    description?: pulumi.Input<string>;
    exclusiveregexes?: pulumi.Input<pulumi.Input<string>[]>;
    inclusiveregexes?: pulumi.Input<pulumi.Input<string>[]>;
    key: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
