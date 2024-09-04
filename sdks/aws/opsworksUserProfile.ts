// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OpsworksUserProfile extends pulumi.CustomResource {
    /**
     * Get an existing OpsworksUserProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpsworksUserProfileState, opts?: pulumi.CustomResourceOptions): OpsworksUserProfile {
        return new OpsworksUserProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/opsworksUserProfile:OpsworksUserProfile';

    /**
     * Returns true if the given object is an instance of OpsworksUserProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpsworksUserProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpsworksUserProfile.__pulumiType;
    }

    public readonly allowSelfManagement!: pulumi.Output<boolean | undefined>;
    public readonly sshPublicKey!: pulumi.Output<string | undefined>;
    public readonly sshUsername!: pulumi.Output<string>;
    public readonly userArn!: pulumi.Output<string>;

    /**
     * Create a OpsworksUserProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpsworksUserProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OpsworksUserProfileArgs | OpsworksUserProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OpsworksUserProfileState | undefined;
            resourceInputs["allowSelfManagement"] = state ? state.allowSelfManagement : undefined;
            resourceInputs["sshPublicKey"] = state ? state.sshPublicKey : undefined;
            resourceInputs["sshUsername"] = state ? state.sshUsername : undefined;
            resourceInputs["userArn"] = state ? state.userArn : undefined;
        } else {
            const args = argsOrState as OpsworksUserProfileArgs | undefined;
            if ((!args || args.sshUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sshUsername'");
            }
            if ((!args || args.userArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userArn'");
            }
            resourceInputs["allowSelfManagement"] = args ? args.allowSelfManagement : undefined;
            resourceInputs["sshPublicKey"] = args ? args.sshPublicKey : undefined;
            resourceInputs["sshUsername"] = args ? args.sshUsername : undefined;
            resourceInputs["userArn"] = args ? args.userArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OpsworksUserProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OpsworksUserProfile resources.
 */
export interface OpsworksUserProfileState {
    allowSelfManagement?: pulumi.Input<boolean>;
    sshPublicKey?: pulumi.Input<string>;
    sshUsername?: pulumi.Input<string>;
    userArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OpsworksUserProfile resource.
 */
export interface OpsworksUserProfileArgs {
    allowSelfManagement?: pulumi.Input<boolean>;
    sshPublicKey?: pulumi.Input<string>;
    sshUsername: pulumi.Input<string>;
    userArn: pulumi.Input<string>;
}
