// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class S3BucketAccelerateConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing S3BucketAccelerateConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3BucketAccelerateConfigurationState, opts?: pulumi.CustomResourceOptions): S3BucketAccelerateConfiguration {
        return new S3BucketAccelerateConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/s3BucketAccelerateConfiguration:S3BucketAccelerateConfiguration';

    /**
     * Returns true if the given object is an instance of S3BucketAccelerateConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3BucketAccelerateConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3BucketAccelerateConfiguration.__pulumiType;
    }

    public readonly bucket!: pulumi.Output<string>;
    public readonly expectedBucketOwner!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a S3BucketAccelerateConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3BucketAccelerateConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3BucketAccelerateConfigurationArgs | S3BucketAccelerateConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3BucketAccelerateConfigurationState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["expectedBucketOwner"] = state ? state.expectedBucketOwner : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as S3BucketAccelerateConfigurationArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["expectedBucketOwner"] = args ? args.expectedBucketOwner : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3BucketAccelerateConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3BucketAccelerateConfiguration resources.
 */
export interface S3BucketAccelerateConfigurationState {
    bucket?: pulumi.Input<string>;
    expectedBucketOwner?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a S3BucketAccelerateConfiguration resource.
 */
export interface S3BucketAccelerateConfigurationArgs {
    bucket: pulumi.Input<string>;
    expectedBucketOwner?: pulumi.Input<string>;
    status: pulumi.Input<string>;
}
