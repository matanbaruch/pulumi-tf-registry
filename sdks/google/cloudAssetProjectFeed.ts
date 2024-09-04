// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudAssetProjectFeed extends pulumi.CustomResource {
    /**
     * Get an existing CloudAssetProjectFeed resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudAssetProjectFeedState, opts?: pulumi.CustomResourceOptions): CloudAssetProjectFeed {
        return new CloudAssetProjectFeed(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/cloudAssetProjectFeed:CloudAssetProjectFeed';

    /**
     * Returns true if the given object is an instance of CloudAssetProjectFeed.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudAssetProjectFeed {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudAssetProjectFeed.__pulumiType;
    }

    /**
     * A list of the full names of the assets to receive updates. You must specify either or both of assetNames and assetTypes.
     * Only asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1. See
     * https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
     */
    public readonly assetNames!: pulumi.Output<string[] | undefined>;
    /**
     * A list of types of the assets to receive updates. You must specify either or both of assetNames and assetTypes. Only
     * asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * "compute.googleapis.com/Disk" See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
     * supported asset types.
     */
    public readonly assetTypes!: pulumi.Output<string[] | undefined>;
    /**
     * The project whose identity will be used when sending messages to the destination pubsub topic. It also specifies the
     * project for API enablement check, quota, and billing. If not specified, the resource's project will be used.
     */
    public readonly billingProject!: pulumi.Output<string | undefined>;
    /**
     * A condition which determines whether an asset update should be published. If specified, an asset will be returned only
     * when the expression evaluates to true. When set, expression field must be a valid CEL expression on a TemporalAsset with
     * name temporal_asset. Example: a Feed with expression "temporal_asset.deleted == true" will only publish Asset deletions.
     * Other fields of condition are optional.
     */
    public readonly condition!: pulumi.Output<outputs.CloudAssetProjectFeedCondition | undefined>;
    /**
     * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values:
     * ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
     */
    public readonly feedId!: pulumi.Output<string>;
    /**
     * Output configuration for asset feed destination.
     */
    public readonly feedOutputConfig!: pulumi.Output<outputs.CloudAssetProjectFeedFeedOutputConfig>;
    /**
     * The format will be projects/{projectNumber}/feeds/{client-assigned_feed_identifier}.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CloudAssetProjectFeedTimeouts | undefined>;

    /**
     * Create a CloudAssetProjectFeed resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudAssetProjectFeedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudAssetProjectFeedArgs | CloudAssetProjectFeedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudAssetProjectFeedState | undefined;
            resourceInputs["assetNames"] = state ? state.assetNames : undefined;
            resourceInputs["assetTypes"] = state ? state.assetTypes : undefined;
            resourceInputs["billingProject"] = state ? state.billingProject : undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["feedId"] = state ? state.feedId : undefined;
            resourceInputs["feedOutputConfig"] = state ? state.feedOutputConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CloudAssetProjectFeedArgs | undefined;
            if ((!args || args.feedId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'feedId'");
            }
            if ((!args || args.feedOutputConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'feedOutputConfig'");
            }
            resourceInputs["assetNames"] = args ? args.assetNames : undefined;
            resourceInputs["assetTypes"] = args ? args.assetTypes : undefined;
            resourceInputs["billingProject"] = args ? args.billingProject : undefined;
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["feedId"] = args ? args.feedId : undefined;
            resourceInputs["feedOutputConfig"] = args ? args.feedOutputConfig : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudAssetProjectFeed.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudAssetProjectFeed resources.
 */
export interface CloudAssetProjectFeedState {
    /**
     * A list of the full names of the assets to receive updates. You must specify either or both of assetNames and assetTypes.
     * Only asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1. See
     * https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
     */
    assetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of types of the assets to receive updates. You must specify either or both of assetNames and assetTypes. Only
     * asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * "compute.googleapis.com/Disk" See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
     * supported asset types.
     */
    assetTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The project whose identity will be used when sending messages to the destination pubsub topic. It also specifies the
     * project for API enablement check, quota, and billing. If not specified, the resource's project will be used.
     */
    billingProject?: pulumi.Input<string>;
    /**
     * A condition which determines whether an asset update should be published. If specified, an asset will be returned only
     * when the expression evaluates to true. When set, expression field must be a valid CEL expression on a TemporalAsset with
     * name temporal_asset. Example: a Feed with expression "temporal_asset.deleted == true" will only publish Asset deletions.
     * Other fields of condition are optional.
     */
    condition?: pulumi.Input<inputs.CloudAssetProjectFeedCondition>;
    /**
     * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values:
     * ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]
     */
    contentType?: pulumi.Input<string>;
    /**
     * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
     */
    feedId?: pulumi.Input<string>;
    /**
     * Output configuration for asset feed destination.
     */
    feedOutputConfig?: pulumi.Input<inputs.CloudAssetProjectFeedFeedOutputConfig>;
    /**
     * The format will be projects/{projectNumber}/feeds/{client-assigned_feed_identifier}.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudAssetProjectFeedTimeouts>;
}

/**
 * The set of arguments for constructing a CloudAssetProjectFeed resource.
 */
export interface CloudAssetProjectFeedArgs {
    /**
     * A list of the full names of the assets to receive updates. You must specify either or both of assetNames and assetTypes.
     * Only asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1. See
     * https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
     */
    assetNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of types of the assets to receive updates. You must specify either or both of assetNames and assetTypes. Only
     * asset updates matching specified assetNames and assetTypes are exported to the feed. For example:
     * "compute.googleapis.com/Disk" See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
     * supported asset types.
     */
    assetTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The project whose identity will be used when sending messages to the destination pubsub topic. It also specifies the
     * project for API enablement check, quota, and billing. If not specified, the resource's project will be used.
     */
    billingProject?: pulumi.Input<string>;
    /**
     * A condition which determines whether an asset update should be published. If specified, an asset will be returned only
     * when the expression evaluates to true. When set, expression field must be a valid CEL expression on a TemporalAsset with
     * name temporal_asset. Example: a Feed with expression "temporal_asset.deleted == true" will only publish Asset deletions.
     * Other fields of condition are optional.
     */
    condition?: pulumi.Input<inputs.CloudAssetProjectFeedCondition>;
    /**
     * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values:
     * ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]
     */
    contentType?: pulumi.Input<string>;
    /**
     * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
     */
    feedId: pulumi.Input<string>;
    /**
     * Output configuration for asset feed destination.
     */
    feedOutputConfig: pulumi.Input<inputs.CloudAssetProjectFeedFeedOutputConfig>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudAssetProjectFeedTimeouts>;
}
