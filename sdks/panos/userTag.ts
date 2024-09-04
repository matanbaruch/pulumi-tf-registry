// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserTag extends pulumi.CustomResource {
    /**
     * Get an existing UserTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserTagState, opts?: pulumi.CustomResourceOptions): UserTag {
        return new UserTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/userTag:UserTag';

    /**
     * Returns true if the given object is an instance of UserTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserTag.__pulumiType;
    }

    /**
     * Tags
     */
    public readonly tags!: pulumi.Output<string[]>;
    /**
     * IP address to tag
     */
    public readonly user!: pulumi.Output<string>;
    /**
     * The vsys this object belongs in.
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a UserTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserTagArgs | UserTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserTagState | undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as UserTagArgs | undefined;
            if ((!args || args.tags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tags'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserTag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserTag resources.
 */
export interface UserTagState {
    /**
     * Tags
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to tag
     */
    user?: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserTag resource.
 */
export interface UserTagArgs {
    /**
     * Tags
     */
    tags: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to tag
     */
    user: pulumi.Input<string>;
    /**
     * The vsys this object belongs in.
     */
    vsys?: pulumi.Input<string>;
}
