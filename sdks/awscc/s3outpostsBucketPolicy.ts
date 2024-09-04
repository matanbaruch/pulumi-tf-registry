// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class S3outpostsBucketPolicy extends pulumi.CustomResource {
    /**
     * Get an existing S3outpostsBucketPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3outpostsBucketPolicyState, opts?: pulumi.CustomResourceOptions): S3outpostsBucketPolicy {
        return new S3outpostsBucketPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/s3outpostsBucketPolicy:S3outpostsBucketPolicy';

    /**
     * Returns true if the given object is an instance of S3outpostsBucketPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3outpostsBucketPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3outpostsBucketPolicy.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) of the specified bucket.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    public readonly policyDocument!: pulumi.Output<string>;

    /**
     * Create a S3outpostsBucketPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3outpostsBucketPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3outpostsBucketPolicyArgs | S3outpostsBucketPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3outpostsBucketPolicyState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
        } else {
            const args = argsOrState as S3outpostsBucketPolicyArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.policyDocument === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDocument'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3outpostsBucketPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3outpostsBucketPolicy resources.
 */
export interface S3outpostsBucketPolicyState {
    /**
     * The Amazon Resource Name (ARN) of the specified bucket.
     */
    bucket?: pulumi.Input<string>;
    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    policyDocument?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a S3outpostsBucketPolicy resource.
 */
export interface S3outpostsBucketPolicyArgs {
    /**
     * The Amazon Resource Name (ARN) of the specified bucket.
     */
    bucket: pulumi.Input<string>;
    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    policyDocument: pulumi.Input<string>;
}
