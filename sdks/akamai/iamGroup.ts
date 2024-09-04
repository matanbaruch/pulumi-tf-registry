// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamGroup extends pulumi.CustomResource {
    /**
     * Get an existing IamGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamGroupState, opts?: pulumi.CustomResourceOptions): IamGroup {
        return new IamGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/iamGroup:IamGroup';

    /**
     * Returns true if the given object is an instance of IamGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamGroup.__pulumiType;
    }

    /**
     * Human readable name for a group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique identifier for the parent group
     */
    public readonly parentGroupId!: pulumi.Output<number>;
    /**
     * Subgroups IDs
     */
    public /*out*/ readonly subGroups!: pulumi.Output<number[]>;

    /**
     * Create a IamGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamGroupArgs | IamGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamGroupState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentGroupId"] = state ? state.parentGroupId : undefined;
            resourceInputs["subGroups"] = state ? state.subGroups : undefined;
        } else {
            const args = argsOrState as IamGroupArgs | undefined;
            if ((!args || args.parentGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentGroupId'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentGroupId"] = args ? args.parentGroupId : undefined;
            resourceInputs["subGroups"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamGroup resources.
 */
export interface IamGroupState {
    /**
     * Human readable name for a group
     */
    name?: pulumi.Input<string>;
    /**
     * Unique identifier for the parent group
     */
    parentGroupId?: pulumi.Input<number>;
    /**
     * Subgroups IDs
     */
    subGroups?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a IamGroup resource.
 */
export interface IamGroupArgs {
    /**
     * Human readable name for a group
     */
    name?: pulumi.Input<string>;
    /**
     * Unique identifier for the parent group
     */
    parentGroupId: pulumi.Input<number>;
}
