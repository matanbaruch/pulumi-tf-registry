// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamUser extends pulumi.CustomResource {
    /**
     * Get an existing IamUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamUserState, opts?: pulumi.CustomResourceOptions): IamUser {
        return new IamUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/iamUser:IamUser';

    /**
     * Returns true if the given object is an instance of IamUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamUser.__pulumiType;
    }

    /**
     * The ID of the account root user associated with the iam user.
     */
    public /*out*/ readonly accountRootUserId!: pulumi.Output<string>;
    /**
     * The date and time of the creation of the iam user
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Whether or not the iam user is editable
     */
    public /*out*/ readonly deletable!: pulumi.Output<boolean>;
    /**
     * The description of the iam user
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The date and time of last login of the iam user
     */
    public /*out*/ readonly lastLoginAt!: pulumi.Output<string>;
    /**
     * Whether or not the MFA is enabled
     */
    public /*out*/ readonly mfa!: pulumi.Output<boolean>;
    /**
     * ID of organization the resource is associated to.
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * The status of user invitation.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The type of the iam user
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The date and time of the last update of the iam user
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a IamUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamUserArgs | IamUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamUserState | undefined;
            resourceInputs["accountRootUserId"] = state ? state.accountRootUserId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["deletable"] = state ? state.deletable : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["lastLoginAt"] = state ? state.lastLoginAt : undefined;
            resourceInputs["mfa"] = state ? state.mfa : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as IamUserArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["accountRootUserId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["deletable"] = undefined /*out*/;
            resourceInputs["lastLoginAt"] = undefined /*out*/;
            resourceInputs["mfa"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamUser resources.
 */
export interface IamUserState {
    /**
     * The ID of the account root user associated with the iam user.
     */
    accountRootUserId?: pulumi.Input<string>;
    /**
     * The date and time of the creation of the iam user
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Whether or not the iam user is editable
     */
    deletable?: pulumi.Input<boolean>;
    /**
     * The description of the iam user
     */
    email?: pulumi.Input<string>;
    /**
     * The date and time of last login of the iam user
     */
    lastLoginAt?: pulumi.Input<string>;
    /**
     * Whether or not the MFA is enabled
     */
    mfa?: pulumi.Input<boolean>;
    /**
     * ID of organization the resource is associated to.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The status of user invitation.
     */
    status?: pulumi.Input<string>;
    /**
     * The type of the iam user
     */
    type?: pulumi.Input<string>;
    /**
     * The date and time of the last update of the iam user
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamUser resource.
 */
export interface IamUserArgs {
    /**
     * The description of the iam user
     */
    email: pulumi.Input<string>;
    /**
     * ID of organization the resource is associated to.
     */
    organizationId?: pulumi.Input<string>;
}
