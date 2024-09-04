// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirebaseStorageBucket extends pulumi.CustomResource {
    /**
     * Get an existing FirebaseStorageBucket resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirebaseStorageBucketState, opts?: pulumi.CustomResourceOptions): FirebaseStorageBucket {
        return new FirebaseStorageBucket(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/firebaseStorageBucket:FirebaseStorageBucket';

    /**
     * Returns true if the given object is an instance of FirebaseStorageBucket.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirebaseStorageBucket {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirebaseStorageBucket.__pulumiType;
    }

    /**
     * Required. Immutable. The ID of the underlying Google Cloud Storage bucket
     */
    public readonly bucketId!: pulumi.Output<string | undefined>;
    /**
     * Resource name of the bucket in the format projects/PROJECT_IDENTIFIER/buckets/BUCKET_ID
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FirebaseStorageBucketTimeouts | undefined>;

    /**
     * Create a FirebaseStorageBucket resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirebaseStorageBucketArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirebaseStorageBucketArgs | FirebaseStorageBucketState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirebaseStorageBucketState | undefined;
            resourceInputs["bucketId"] = state ? state.bucketId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FirebaseStorageBucketArgs | undefined;
            resourceInputs["bucketId"] = args ? args.bucketId : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirebaseStorageBucket.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirebaseStorageBucket resources.
 */
export interface FirebaseStorageBucketState {
    /**
     * Required. Immutable. The ID of the underlying Google Cloud Storage bucket
     */
    bucketId?: pulumi.Input<string>;
    /**
     * Resource name of the bucket in the format projects/PROJECT_IDENTIFIER/buckets/BUCKET_ID
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseStorageBucketTimeouts>;
}

/**
 * The set of arguments for constructing a FirebaseStorageBucket resource.
 */
export interface FirebaseStorageBucketArgs {
    /**
     * Required. Immutable. The ID of the underlying Google Cloud Storage bucket
     */
    bucketId?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirebaseStorageBucketTimeouts>;
}
