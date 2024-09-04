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
    public static readonly __pulumiType = 'commvault:index/role:Role';

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
     * Used to determine if the role is enabled or disabled. If not provided, role will be enabled by default.
     */
    public readonly enabled!: pulumi.Output<string>;
    /**
     * Name of the new role
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Used to provide the list of permissions associated with the role.
     */
    public readonly permissionlists!: pulumi.Output<outputs.RolePermissionlist[]>;
    /**
     * Used to update the security association for the role
     */
    public readonly securities!: pulumi.Output<outputs.RoleSecurity[] | undefined>;
    /**
     * Determines if the role is visible to everyone. if not provided, it will be set to false by default.
     */
    public readonly visibletoall!: pulumi.Output<string>;

    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoleArgs | RoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoleState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permissionlists"] = state ? state.permissionlists : undefined;
            resourceInputs["securities"] = state ? state.securities : undefined;
            resourceInputs["visibletoall"] = state ? state.visibletoall : undefined;
        } else {
            const args = argsOrState as RoleArgs | undefined;
            if ((!args || args.permissionlists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissionlists'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permissionlists"] = args ? args.permissionlists : undefined;
            resourceInputs["securities"] = args ? args.securities : undefined;
            resourceInputs["visibletoall"] = args ? args.visibletoall : undefined;
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
     * Used to determine if the role is enabled or disabled. If not provided, role will be enabled by default.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Name of the new role
     */
    name?: pulumi.Input<string>;
    /**
     * Used to provide the list of permissions associated with the role.
     */
    permissionlists?: pulumi.Input<pulumi.Input<inputs.RolePermissionlist>[]>;
    /**
     * Used to update the security association for the role
     */
    securities?: pulumi.Input<pulumi.Input<inputs.RoleSecurity>[]>;
    /**
     * Determines if the role is visible to everyone. if not provided, it will be set to false by default.
     */
    visibletoall?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * Used to determine if the role is enabled or disabled. If not provided, role will be enabled by default.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Name of the new role
     */
    name?: pulumi.Input<string>;
    /**
     * Used to provide the list of permissions associated with the role.
     */
    permissionlists: pulumi.Input<pulumi.Input<inputs.RolePermissionlist>[]>;
    /**
     * Used to update the security association for the role
     */
    securities?: pulumi.Input<pulumi.Input<inputs.RoleSecurity>[]>;
    /**
     * Determines if the role is visible to everyone. if not provided, it will be set to false by default.
     */
    visibletoall?: pulumi.Input<string>;
}
