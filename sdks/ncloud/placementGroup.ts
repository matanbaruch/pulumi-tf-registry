// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PlacementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PlacementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlacementGroupState, opts?: pulumi.CustomResourceOptions): PlacementGroup {
        return new PlacementGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/placementGroup:PlacementGroup';

    /**
     * Returns true if the given object is an instance of PlacementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlacementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlacementGroup.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly placementGroupNo!: pulumi.Output<string>;
    public readonly placementGroupType!: pulumi.Output<string>;

    /**
     * Create a PlacementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PlacementGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlacementGroupArgs | PlacementGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlacementGroupState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["placementGroupNo"] = state ? state.placementGroupNo : undefined;
            resourceInputs["placementGroupType"] = state ? state.placementGroupType : undefined;
        } else {
            const args = argsOrState as PlacementGroupArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["placementGroupType"] = args ? args.placementGroupType : undefined;
            resourceInputs["placementGroupNo"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlacementGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlacementGroup resources.
 */
export interface PlacementGroupState {
    name?: pulumi.Input<string>;
    placementGroupNo?: pulumi.Input<string>;
    placementGroupType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlacementGroup resource.
 */
export interface PlacementGroupArgs {
    name?: pulumi.Input<string>;
    placementGroupType?: pulumi.Input<string>;
}
