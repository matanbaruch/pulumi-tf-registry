// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserIdentityGroup extends pulumi.CustomResource {
    /**
     * Get an existing UserIdentityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserIdentityGroupState, opts?: pulumi.CustomResourceOptions): UserIdentityGroup {
        return new UserIdentityGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ise:index/userIdentityGroup:UserIdentityGroup';

    /**
     * Returns true if the given object is an instance of UserIdentityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserIdentityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserIdentityGroup.__pulumiType;
    }

    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the user identity group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Parent user identity group, e.g. `NAC Group:NAC:IdentityGroups:User Identity Groups`
     */
    public readonly parent!: pulumi.Output<string | undefined>;

    /**
     * Create a UserIdentityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserIdentityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserIdentityGroupArgs | UserIdentityGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserIdentityGroupState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
        } else {
            const args = argsOrState as UserIdentityGroupArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserIdentityGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserIdentityGroup resources.
 */
export interface UserIdentityGroupState {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the user identity group
     */
    name?: pulumi.Input<string>;
    /**
     * Parent user identity group, e.g. `NAC Group:NAC:IdentityGroups:User Identity Groups`
     */
    parent?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserIdentityGroup resource.
 */
export interface UserIdentityGroupArgs {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the user identity group
     */
    name?: pulumi.Input<string>;
    /**
     * Parent user identity group, e.g. `NAC Group:NAC:IdentityGroups:User Identity Groups`
     */
    parent?: pulumi.Input<string>;
}
