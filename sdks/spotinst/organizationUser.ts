// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationUser extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationUserState, opts?: pulumi.CustomResourceOptions): OrganizationUser {
        return new OrganizationUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spotinst:index/organizationUser:OrganizationUser';

    /**
     * Returns true if the given object is an instance of OrganizationUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationUser.__pulumiType;
    }

    public readonly email!: pulumi.Output<string>;
    public readonly firstName!: pulumi.Output<string>;
    public readonly lastName!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public readonly policies!: pulumi.Output<outputs.OrganizationUserPolicy[] | undefined>;
    public readonly role!: pulumi.Output<string | undefined>;
    public readonly userGroupIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a OrganizationUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationUserArgs | OrganizationUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationUserState | undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["firstName"] = state ? state.firstName : undefined;
            resourceInputs["lastName"] = state ? state.lastName : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["userGroupIds"] = state ? state.userGroupIds : undefined;
        } else {
            const args = argsOrState as OrganizationUserArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.firstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firstName'");
            }
            if ((!args || args.lastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lastName'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["userGroupIds"] = args ? args.userGroupIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationUser resources.
 */
export interface OrganizationUserState {
    email?: pulumi.Input<string>;
    firstName?: pulumi.Input<string>;
    lastName?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    policies?: pulumi.Input<pulumi.Input<inputs.OrganizationUserPolicy>[]>;
    role?: pulumi.Input<string>;
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a OrganizationUser resource.
 */
export interface OrganizationUserArgs {
    email: pulumi.Input<string>;
    firstName: pulumi.Input<string>;
    lastName: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    policies?: pulumi.Input<pulumi.Input<inputs.OrganizationUserPolicy>[]>;
    role?: pulumi.Input<string>;
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}
