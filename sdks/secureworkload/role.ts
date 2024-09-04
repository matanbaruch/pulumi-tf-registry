// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
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
    public static readonly __pulumiType = 'secureworkload:index/role:Role';

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
     * The scope to which this role will be given access
     */
    public readonly accessAppScopeId!: pulumi.Output<string>;
    /**
     * The type of access to grant the role to the "access_app_scope_id" scope.\n Valid values are SCOPE_READ", "SCOPE_WRITE",
     * "EXECUTE", "ENFORCE", "SCOPE_OWNER", "DEVELOPER"
     */
    public readonly accessType!: pulumi.Output<string>;
    /**
     * The scope in which this role will be created
     */
    public readonly appScopeId!: pulumi.Output<string>;
    /**
     * The role's description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * (Optional) User-specified name for the role.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The users to which this role will be assigned
     */
    public readonly userIds!: pulumi.Output<string[]>;

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
            resourceInputs["accessAppScopeId"] = state ? state.accessAppScopeId : undefined;
            resourceInputs["accessType"] = state ? state.accessType : undefined;
            resourceInputs["appScopeId"] = state ? state.appScopeId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["userIds"] = state ? state.userIds : undefined;
        } else {
            const args = argsOrState as RoleArgs | undefined;
            if ((!args || args.accessAppScopeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessAppScopeId'");
            }
            if ((!args || args.accessType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessType'");
            }
            if ((!args || args.appScopeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appScopeId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["accessAppScopeId"] = args ? args.accessAppScopeId : undefined;
            resourceInputs["accessType"] = args ? args.accessType : undefined;
            resourceInputs["appScopeId"] = args ? args.appScopeId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["userIds"] = args ? args.userIds : undefined;
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
     * The scope to which this role will be given access
     */
    accessAppScopeId?: pulumi.Input<string>;
    /**
     * The type of access to grant the role to the "access_app_scope_id" scope.\n Valid values are SCOPE_READ", "SCOPE_WRITE",
     * "EXECUTE", "ENFORCE", "SCOPE_OWNER", "DEVELOPER"
     */
    accessType?: pulumi.Input<string>;
    /**
     * The scope in which this role will be created
     */
    appScopeId?: pulumi.Input<string>;
    /**
     * The role's description
     */
    description?: pulumi.Input<string>;
    /**
     * (Optional) User-specified name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * The users to which this role will be assigned
     */
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * The scope to which this role will be given access
     */
    accessAppScopeId: pulumi.Input<string>;
    /**
     * The type of access to grant the role to the "access_app_scope_id" scope.\n Valid values are SCOPE_READ", "SCOPE_WRITE",
     * "EXECUTE", "ENFORCE", "SCOPE_OWNER", "DEVELOPER"
     */
    accessType: pulumi.Input<string>;
    /**
     * The scope in which this role will be created
     */
    appScopeId: pulumi.Input<string>;
    /**
     * The role's description
     */
    description: pulumi.Input<string>;
    /**
     * (Optional) User-specified name for the role.
     */
    name?: pulumi.Input<string>;
    /**
     * The users to which this role will be assigned
     */
    userIds?: pulumi.Input<pulumi.Input<string>[]>;
}
