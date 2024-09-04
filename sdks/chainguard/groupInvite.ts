// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GroupInvite extends pulumi.CustomResource {
    /**
     * Get an existing GroupInvite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupInviteState, opts?: pulumi.CustomResourceOptions): GroupInvite {
        return new GroupInvite(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'chainguard:index/groupInvite:GroupInvite';

    /**
     * Returns true if the given object is an instance of GroupInvite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupInvite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupInvite.__pulumiType;
    }

    /**
     * A time-bounded token that may be used at registration to obtain access to a prespecified group with a prespecified role.
     */
    public /*out*/ readonly code!: pulumi.Output<string>;
    /**
     * The email address of the identity that is allowed to accept this invite code.
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * The RFC3339 encoded date and time at which this invitation will no longer be valid.
     */
    public readonly expiration!: pulumi.Output<string>;
    /**
     * The Group to which this invite code grants access.
     */
    public readonly group!: pulumi.Output<string>;
    /**
     * The role that this invite code grants.
     */
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a GroupInvite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupInviteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupInviteArgs | GroupInviteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupInviteState | undefined;
            resourceInputs["code"] = state ? state.code : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["expiration"] = state ? state.expiration : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as GroupInviteArgs | undefined;
            if ((!args || args.expiration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expiration'");
            }
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["expiration"] = args ? args.expiration : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["code"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["code"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(GroupInvite.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroupInvite resources.
 */
export interface GroupInviteState {
    /**
     * A time-bounded token that may be used at registration to obtain access to a prespecified group with a prespecified role.
     */
    code?: pulumi.Input<string>;
    /**
     * The email address of the identity that is allowed to accept this invite code.
     */
    email?: pulumi.Input<string>;
    /**
     * The RFC3339 encoded date and time at which this invitation will no longer be valid.
     */
    expiration?: pulumi.Input<string>;
    /**
     * The Group to which this invite code grants access.
     */
    group?: pulumi.Input<string>;
    /**
     * The role that this invite code grants.
     */
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroupInvite resource.
 */
export interface GroupInviteArgs {
    /**
     * The email address of the identity that is allowed to accept this invite code.
     */
    email?: pulumi.Input<string>;
    /**
     * The RFC3339 encoded date and time at which this invitation will no longer be valid.
     */
    expiration: pulumi.Input<string>;
    /**
     * The Group to which this invite code grants access.
     */
    group: pulumi.Input<string>;
    /**
     * The role that this invite code grants.
     */
    role: pulumi.Input<string>;
}
