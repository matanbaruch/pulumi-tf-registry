// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediapackageAsset extends pulumi.CustomResource {
    /**
     * Get an existing MediapackageAsset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediapackageAssetState, opts?: pulumi.CustomResourceOptions): MediapackageAsset {
        return new MediapackageAsset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/mediapackageAsset:MediapackageAsset';

    /**
     * Returns true if the given object is an instance of MediapackageAsset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediapackageAsset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediapackageAsset.__pulumiType;
    }

    /**
     * The ARN of the Asset.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The unique identifier for the Asset.
     */
    public readonly assetId!: pulumi.Output<string>;
    /**
     * The time the Asset was initially submitted for Ingest.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The list of egress endpoints available for the Asset.
     */
    public readonly egressEndpoints!: pulumi.Output<outputs.MediapackageAssetEgressEndpoint[]>;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    public readonly packagingGroupId!: pulumi.Output<string>;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * ARN of the source object in S3.
     */
    public readonly sourceArn!: pulumi.Output<string>;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    public readonly sourceRoleArn!: pulumi.Output<string>;
    /**
     * A collection of tags associated with a resource
     */
    public readonly tags!: pulumi.Output<outputs.MediapackageAssetTag[]>;

    /**
     * Create a MediapackageAsset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediapackageAssetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediapackageAssetArgs | MediapackageAssetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediapackageAssetState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["assetId"] = state ? state.assetId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["egressEndpoints"] = state ? state.egressEndpoints : undefined;
            resourceInputs["packagingGroupId"] = state ? state.packagingGroupId : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["sourceArn"] = state ? state.sourceArn : undefined;
            resourceInputs["sourceRoleArn"] = state ? state.sourceRoleArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as MediapackageAssetArgs | undefined;
            if ((!args || args.assetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetId'");
            }
            if ((!args || args.packagingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packagingGroupId'");
            }
            if ((!args || args.sourceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceArn'");
            }
            if ((!args || args.sourceRoleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceRoleArn'");
            }
            resourceInputs["assetId"] = args ? args.assetId : undefined;
            resourceInputs["egressEndpoints"] = args ? args.egressEndpoints : undefined;
            resourceInputs["packagingGroupId"] = args ? args.packagingGroupId : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["sourceArn"] = args ? args.sourceArn : undefined;
            resourceInputs["sourceRoleArn"] = args ? args.sourceRoleArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediapackageAsset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediapackageAsset resources.
 */
export interface MediapackageAssetState {
    /**
     * The ARN of the Asset.
     */
    arn?: pulumi.Input<string>;
    /**
     * The unique identifier for the Asset.
     */
    assetId?: pulumi.Input<string>;
    /**
     * The time the Asset was initially submitted for Ingest.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The list of egress endpoints available for the Asset.
     */
    egressEndpoints?: pulumi.Input<pulumi.Input<inputs.MediapackageAssetEgressEndpoint>[]>;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    packagingGroupId?: pulumi.Input<string>;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * ARN of the source object in S3.
     */
    sourceArn?: pulumi.Input<string>;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    sourceRoleArn?: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackageAssetTag>[]>;
}

/**
 * The set of arguments for constructing a MediapackageAsset resource.
 */
export interface MediapackageAssetArgs {
    /**
     * The unique identifier for the Asset.
     */
    assetId: pulumi.Input<string>;
    /**
     * The list of egress endpoints available for the Asset.
     */
    egressEndpoints?: pulumi.Input<pulumi.Input<inputs.MediapackageAssetEgressEndpoint>[]>;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    packagingGroupId: pulumi.Input<string>;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * ARN of the source object in S3.
     */
    sourceArn: pulumi.Input<string>;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    sourceRoleArn: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackageAssetTag>[]>;
}
