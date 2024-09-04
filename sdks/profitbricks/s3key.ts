// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3Key extends pulumi.CustomResource {
    /**
     * Get an existing S3Key resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3KeyState, opts?: pulumi.CustomResourceOptions): S3Key {
        return new S3Key(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'profitbricks:index/s3Key:S3Key';

    /**
     * Returns true if the given object is an instance of S3Key.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3Key {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3Key.__pulumiType;
    }

    /**
     * Whether this key should be active or not.
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
    /**
     * The S3 Secret key.
     */
    public /*out*/ readonly secretKey!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.S3KeyTimeouts | undefined>;
    /**
     * The ID of the user that owns the key.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a S3Key resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3KeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3KeyArgs | S3KeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3KeyState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["secretKey"] = state ? state.secretKey : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as S3KeyArgs | undefined;
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["secretKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3Key.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3Key resources.
 */
export interface S3KeyState {
    /**
     * Whether this key should be active or not.
     */
    active?: pulumi.Input<boolean>;
    /**
     * The S3 Secret key.
     */
    secretKey?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.S3KeyTimeouts>;
    /**
     * The ID of the user that owns the key.
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a S3Key resource.
 */
export interface S3KeyArgs {
    /**
     * Whether this key should be active or not.
     */
    active?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.S3KeyTimeouts>;
    /**
     * The ID of the user that owns the key.
     */
    userId: pulumi.Input<string>;
}
