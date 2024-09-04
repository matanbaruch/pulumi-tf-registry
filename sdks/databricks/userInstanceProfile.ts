// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserInstanceProfile extends pulumi.CustomResource {
    /**
     * Get an existing UserInstanceProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserInstanceProfileState, opts?: pulumi.CustomResourceOptions): UserInstanceProfile {
        return new UserInstanceProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/userInstanceProfile:UserInstanceProfile';

    /**
     * Returns true if the given object is an instance of UserInstanceProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserInstanceProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserInstanceProfile.__pulumiType;
    }

    public readonly instanceProfileId!: pulumi.Output<string>;
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a UserInstanceProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserInstanceProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserInstanceProfileArgs | UserInstanceProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserInstanceProfileState | undefined;
            resourceInputs["instanceProfileId"] = state ? state.instanceProfileId : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as UserInstanceProfileArgs | undefined;
            if ((!args || args.instanceProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceProfileId'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["instanceProfileId"] = args ? args.instanceProfileId : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserInstanceProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserInstanceProfile resources.
 */
export interface UserInstanceProfileState {
    instanceProfileId?: pulumi.Input<string>;
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserInstanceProfile resource.
 */
export interface UserInstanceProfileArgs {
    instanceProfileId: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
