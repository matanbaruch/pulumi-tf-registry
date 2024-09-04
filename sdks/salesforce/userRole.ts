// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserRole extends pulumi.CustomResource {
    /**
     * Get an existing UserRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserRoleState, opts?: pulumi.CustomResourceOptions): UserRole {
        return new UserRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'salesforce:index/userRole:UserRole';

    /**
     * Returns true if the given object is an instance of UserRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserRole.__pulumiType;
    }

    /**
     * The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must
     * be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two
     * consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this
     * field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s
     * organization. Corresponds to Role Name in the user interface.
     */
    public readonly developerName!: pulumi.Output<string>;
    /**
     * Name of the role. Corresponds to Label on the user interface.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the parent role.
     */
    public readonly parentRoleId!: pulumi.Output<string | undefined>;

    /**
     * Create a UserRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserRoleArgs | UserRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserRoleState | undefined;
            resourceInputs["developerName"] = state ? state.developerName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentRoleId"] = state ? state.parentRoleId : undefined;
        } else {
            const args = argsOrState as UserRoleArgs | undefined;
            if ((!args || args.developerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'developerName'");
            }
            resourceInputs["developerName"] = args ? args.developerName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentRoleId"] = args ? args.parentRoleId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserRole resources.
 */
export interface UserRoleState {
    /**
     * The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must
     * be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two
     * consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this
     * field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s
     * organization. Corresponds to Role Name in the user interface.
     */
    developerName?: pulumi.Input<string>;
    /**
     * Name of the role. Corresponds to Label on the user interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the parent role.
     */
    parentRoleId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserRole resource.
 */
export interface UserRoleArgs {
    /**
     * The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must
     * be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two
     * consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this
     * field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s
     * organization. Corresponds to Role Name in the user interface.
     */
    developerName: pulumi.Input<string>;
    /**
     * Name of the role. Corresponds to Label on the user interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the parent role.
     */
    parentRoleId?: pulumi.Input<string>;
}
