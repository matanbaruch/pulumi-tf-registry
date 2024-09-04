// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Member extends pulumi.CustomResource {
    /**
     * Get an existing Member resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MemberState, opts?: pulumi.CustomResourceOptions): Member {
        return new Member(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'buddy:index/member:Member';

    /**
     * Returns true if the given object is an instance of Member.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Member {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Member.__pulumiType;
    }

    /**
     * Is the member a workspace administrator
     */
    public readonly admin!: pulumi.Output<boolean>;
    /**
     * The permission's ID with which the member will be assigned to new projects
     */
    public readonly autoAssignPermissionSetId!: pulumi.Output<number | undefined>;
    /**
     * Defines whether or not to automatically assign member to new projects
     */
    public readonly autoAssignToNewProjects!: pulumi.Output<boolean>;
    /**
     * The member's avatar URL
     */
    public /*out*/ readonly avatarUrl!: pulumi.Output<string>;
    /**
     * The workspace's URL handle
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * The member's email
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The member's URL
     */
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    /**
     * The member's ID
     */
    public /*out*/ readonly memberId!: pulumi.Output<number>;
    /**
     * The member's name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Is the member the workspace owner
     */
    public /*out*/ readonly workspaceOwner!: pulumi.Output<boolean>;

    /**
     * Create a Member resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MemberArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MemberArgs | MemberState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MemberState | undefined;
            resourceInputs["admin"] = state ? state.admin : undefined;
            resourceInputs["autoAssignPermissionSetId"] = state ? state.autoAssignPermissionSetId : undefined;
            resourceInputs["autoAssignToNewProjects"] = state ? state.autoAssignToNewProjects : undefined;
            resourceInputs["avatarUrl"] = state ? state.avatarUrl : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["memberId"] = state ? state.memberId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["workspaceOwner"] = state ? state.workspaceOwner : undefined;
        } else {
            const args = argsOrState as MemberArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["admin"] = args ? args.admin : undefined;
            resourceInputs["autoAssignPermissionSetId"] = args ? args.autoAssignPermissionSetId : undefined;
            resourceInputs["autoAssignToNewProjects"] = args ? args.autoAssignToNewProjects : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["avatarUrl"] = undefined /*out*/;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["memberId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["workspaceOwner"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Member.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Member resources.
 */
export interface MemberState {
    /**
     * Is the member a workspace administrator
     */
    admin?: pulumi.Input<boolean>;
    /**
     * The permission's ID with which the member will be assigned to new projects
     */
    autoAssignPermissionSetId?: pulumi.Input<number>;
    /**
     * Defines whether or not to automatically assign member to new projects
     */
    autoAssignToNewProjects?: pulumi.Input<boolean>;
    /**
     * The member's avatar URL
     */
    avatarUrl?: pulumi.Input<string>;
    /**
     * The workspace's URL handle
     */
    domain?: pulumi.Input<string>;
    /**
     * The member's email
     */
    email?: pulumi.Input<string>;
    /**
     * The member's URL
     */
    htmlUrl?: pulumi.Input<string>;
    /**
     * The member's ID
     */
    memberId?: pulumi.Input<number>;
    /**
     * The member's name
     */
    name?: pulumi.Input<string>;
    /**
     * Is the member the workspace owner
     */
    workspaceOwner?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Member resource.
 */
export interface MemberArgs {
    /**
     * Is the member a workspace administrator
     */
    admin?: pulumi.Input<boolean>;
    /**
     * The permission's ID with which the member will be assigned to new projects
     */
    autoAssignPermissionSetId?: pulumi.Input<number>;
    /**
     * Defines whether or not to automatically assign member to new projects
     */
    autoAssignToNewProjects?: pulumi.Input<boolean>;
    /**
     * The workspace's URL handle
     */
    domain: pulumi.Input<string>;
    /**
     * The member's email
     */
    email: pulumi.Input<string>;
}
