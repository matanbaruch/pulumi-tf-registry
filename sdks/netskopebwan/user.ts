// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netskopebwan:index/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    public readonly createdBy!: pulumi.Output<outputs.UserCreatedBy | undefined>;
    public readonly dateCreated!: pulumi.Output<string>;
    public readonly dateModified!: pulumi.Output<string>;
    public readonly email!: pulumi.Output<string>;
    public readonly isDisabled!: pulumi.Output<boolean>;
    public readonly modifiedBy!: pulumi.Output<outputs.UserModifiedBy | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly roles!: pulumi.Output<string[]>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserState | undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["dateCreated"] = state ? state.dateCreated : undefined;
            resourceInputs["dateModified"] = state ? state.dateModified : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["isDisabled"] = state ? state.isDisabled : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["dateCreated"] = args ? args.dateCreated : undefined;
            resourceInputs["dateModified"] = args ? args.dateModified : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["isDisabled"] = args ? args.isDisabled : undefined;
            resourceInputs["modifiedBy"] = args ? args.modifiedBy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(User.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    createdBy?: pulumi.Input<inputs.UserCreatedBy>;
    dateCreated?: pulumi.Input<string>;
    dateModified?: pulumi.Input<string>;
    email?: pulumi.Input<string>;
    isDisabled?: pulumi.Input<boolean>;
    modifiedBy?: pulumi.Input<inputs.UserModifiedBy>;
    name?: pulumi.Input<string>;
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    createdBy?: pulumi.Input<inputs.UserCreatedBy>;
    dateCreated?: pulumi.Input<string>;
    dateModified?: pulumi.Input<string>;
    email?: pulumi.Input<string>;
    isDisabled?: pulumi.Input<boolean>;
    modifiedBy?: pulumi.Input<inputs.UserModifiedBy>;
    name?: pulumi.Input<string>;
    roles?: pulumi.Input<pulumi.Input<string>[]>;
}
