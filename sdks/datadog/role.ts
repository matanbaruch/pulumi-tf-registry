// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Role extends pulumi.CustomResource {
    /**
     * Get an existing Role resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleState, opts?: pulumi.CustomResourceOptions): Role {
        return new Role(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/role:Role';

    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Role {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Role.__pulumiType;
    }

    /**
     * Name of the role.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set of objects containing the permission ID and the name of the permissions granted to this role.
     */
    public readonly permissions!: pulumi.Output<outputs.RolePermission[] | undefined>;
    /**
     * Number of users that have this role.
     */
    public /*out*/ readonly userCount!: pulumi.Output<number>;
    /**
     * If set to `false`, skip the validation call done during plan.
     */
    public readonly validate!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoleArgs | RoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoleState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["userCount"] = state ? state.userCount : undefined;
            resourceInputs["validate"] = state ? state.validate : undefined;
        } else {
            const args = argsOrState as RoleArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["validate"] = args ? args.validate : undefined;
            resourceInputs["userCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Role.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Role resources.
 */
export interface RoleState {
    /**
     * Name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Set of objects containing the permission ID and the name of the permissions granted to this role.
     */
    permissions?: pulumi.Input<pulumi.Input<inputs.RolePermission>[]>;
    /**
     * Number of users that have this role.
     */
    userCount?: pulumi.Input<number>;
    /**
     * If set to `false`, skip the validation call done during plan.
     */
    validate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * Name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * Set of objects containing the permission ID and the name of the permissions granted to this role.
     */
    permissions?: pulumi.Input<pulumi.Input<inputs.RolePermission>[]>;
    /**
     * If set to `false`, skip the validation call done during plan.
     */
    validate?: pulumi.Input<boolean>;
}
