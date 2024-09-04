// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WafSizeConstraintSet extends pulumi.CustomResource {
    /**
     * Get an existing WafSizeConstraintSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WafSizeConstraintSetState, opts?: pulumi.CustomResourceOptions): WafSizeConstraintSet {
        return new WafSizeConstraintSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/wafSizeConstraintSet:WafSizeConstraintSet';

    /**
     * Returns true if the given object is an instance of WafSizeConstraintSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WafSizeConstraintSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WafSizeConstraintSet.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly sizeConstraints!: pulumi.Output<outputs.WafSizeConstraintSetSizeConstraint[] | undefined>;

    /**
     * Create a WafSizeConstraintSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WafSizeConstraintSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WafSizeConstraintSetArgs | WafSizeConstraintSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WafSizeConstraintSetState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sizeConstraints"] = state ? state.sizeConstraints : undefined;
        } else {
            const args = argsOrState as WafSizeConstraintSetArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sizeConstraints"] = args ? args.sizeConstraints : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WafSizeConstraintSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WafSizeConstraintSet resources.
 */
export interface WafSizeConstraintSetState {
    arn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sizeConstraints?: pulumi.Input<pulumi.Input<inputs.WafSizeConstraintSetSizeConstraint>[]>;
}

/**
 * The set of arguments for constructing a WafSizeConstraintSet resource.
 */
export interface WafSizeConstraintSetArgs {
    name?: pulumi.Input<string>;
    sizeConstraints?: pulumi.Input<pulumi.Input<inputs.WafSizeConstraintSetSizeConstraint>[]>;
}
