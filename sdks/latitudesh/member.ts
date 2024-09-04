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
    public static readonly __pulumiType = 'latitudesh:index/member:Member';

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
     * The member email
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The member first name
     */
    public readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * The member last name
     */
    public readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * The member mfa status
     */
    public /*out*/ readonly mfaEnabled!: pulumi.Output<string>;
    /**
     * The member role
     */
    public readonly role!: pulumi.Output<string>;

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
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["firstName"] = state ? state.firstName : undefined;
            resourceInputs["lastName"] = state ? state.lastName : undefined;
            resourceInputs["mfaEnabled"] = state ? state.mfaEnabled : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as MemberArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["mfaEnabled"] = undefined /*out*/;
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
     * The member email
     */
    email?: pulumi.Input<string>;
    /**
     * The member first name
     */
    firstName?: pulumi.Input<string>;
    /**
     * The member last name
     */
    lastName?: pulumi.Input<string>;
    /**
     * The member mfa status
     */
    mfaEnabled?: pulumi.Input<string>;
    /**
     * The member role
     */
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Member resource.
 */
export interface MemberArgs {
    /**
     * The member email
     */
    email: pulumi.Input<string>;
    /**
     * The member first name
     */
    firstName?: pulumi.Input<string>;
    /**
     * The member last name
     */
    lastName?: pulumi.Input<string>;
    /**
     * The member role
     */
    role: pulumi.Input<string>;
}
