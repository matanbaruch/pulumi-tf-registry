// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3BucketNotification extends pulumi.CustomResource {
    /**
     * Get an existing S3BucketNotification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3BucketNotificationState, opts?: pulumi.CustomResourceOptions): S3BucketNotification {
        return new S3BucketNotification(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/s3BucketNotification:S3BucketNotification';

    /**
     * Returns true if the given object is an instance of S3BucketNotification.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3BucketNotification {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3BucketNotification.__pulumiType;
    }

    public readonly bucket!: pulumi.Output<string>;
    public readonly eventbridge!: pulumi.Output<boolean | undefined>;
    public readonly lambdaFunctions!: pulumi.Output<outputs.S3BucketNotificationLambdaFunction[] | undefined>;
    public readonly queues!: pulumi.Output<outputs.S3BucketNotificationQueue[] | undefined>;
    public readonly topics!: pulumi.Output<outputs.S3BucketNotificationTopic[] | undefined>;

    /**
     * Create a S3BucketNotification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3BucketNotificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3BucketNotificationArgs | S3BucketNotificationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3BucketNotificationState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["eventbridge"] = state ? state.eventbridge : undefined;
            resourceInputs["lambdaFunctions"] = state ? state.lambdaFunctions : undefined;
            resourceInputs["queues"] = state ? state.queues : undefined;
            resourceInputs["topics"] = state ? state.topics : undefined;
        } else {
            const args = argsOrState as S3BucketNotificationArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["eventbridge"] = args ? args.eventbridge : undefined;
            resourceInputs["lambdaFunctions"] = args ? args.lambdaFunctions : undefined;
            resourceInputs["queues"] = args ? args.queues : undefined;
            resourceInputs["topics"] = args ? args.topics : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3BucketNotification.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3BucketNotification resources.
 */
export interface S3BucketNotificationState {
    bucket?: pulumi.Input<string>;
    eventbridge?: pulumi.Input<boolean>;
    lambdaFunctions?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationLambdaFunction>[]>;
    queues?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationQueue>[]>;
    topics?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationTopic>[]>;
}

/**
 * The set of arguments for constructing a S3BucketNotification resource.
 */
export interface S3BucketNotificationArgs {
    bucket: pulumi.Input<string>;
    eventbridge?: pulumi.Input<boolean>;
    lambdaFunctions?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationLambdaFunction>[]>;
    queues?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationQueue>[]>;
    topics?: pulumi.Input<pulumi.Input<inputs.S3BucketNotificationTopic>[]>;
}
