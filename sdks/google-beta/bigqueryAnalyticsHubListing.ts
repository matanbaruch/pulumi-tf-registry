// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BigqueryAnalyticsHubListing extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryAnalyticsHubListing resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryAnalyticsHubListingState, opts?: pulumi.CustomResourceOptions): BigqueryAnalyticsHubListing {
        return new BigqueryAnalyticsHubListing(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/bigqueryAnalyticsHubListing:BigqueryAnalyticsHubListing';

    /**
     * Returns true if the given object is an instance of BigqueryAnalyticsHubListing.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryAnalyticsHubListing {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryAnalyticsHubListing.__pulumiType;
    }

    /**
     * Shared dataset i.e. BigQuery dataset source.
     */
    public readonly bigqueryDataset!: pulumi.Output<outputs.BigqueryAnalyticsHubListingBigqueryDataset>;
    /**
     * Categories of the listing. Up to two categories are allowed.
     */
    public readonly categories!: pulumi.Output<string[] | undefined>;
    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    public readonly dataExchangeId!: pulumi.Output<string>;
    /**
     * Details of the data provider who owns the source data.
     */
    public readonly dataProvider!: pulumi.Output<outputs.BigqueryAnalyticsHubListingDataProvider | undefined>;
    /**
     * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes
     * except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Documentation describing the listing.
     */
    public readonly documentation!: pulumi.Output<string | undefined>;
    /**
     * Base64 encoded image representing the listing.
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that
     * require URL-escaping, or characters outside of ASCII, spaces.
     */
    public readonly listingId!: pulumi.Output<string>;
    /**
     * The name of the location this data exchange listing.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the listing. e.g. "projects/myproject/locations/US/dataExchanges/123/listings/456"
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Email or URL of the primary point of contact of the listing.
     */
    public readonly primaryContact!: pulumi.Output<string | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Details of the publisher who owns the listing and who can share the source data.
     */
    public readonly publisher!: pulumi.Output<outputs.BigqueryAnalyticsHubListingPublisher | undefined>;
    /**
     * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
     */
    public readonly requestAccess!: pulumi.Output<string | undefined>;
    /**
     * If set, restricted export configuration will be propagated and enforced on the linked dataset.
     */
    public readonly restrictedExportConfig!: pulumi.Output<outputs.BigqueryAnalyticsHubListingRestrictedExportConfig | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BigqueryAnalyticsHubListingTimeouts | undefined>;

    /**
     * Create a BigqueryAnalyticsHubListing resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryAnalyticsHubListingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryAnalyticsHubListingArgs | BigqueryAnalyticsHubListingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryAnalyticsHubListingState | undefined;
            resourceInputs["bigqueryDataset"] = state ? state.bigqueryDataset : undefined;
            resourceInputs["categories"] = state ? state.categories : undefined;
            resourceInputs["dataExchangeId"] = state ? state.dataExchangeId : undefined;
            resourceInputs["dataProvider"] = state ? state.dataProvider : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["documentation"] = state ? state.documentation : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["listingId"] = state ? state.listingId : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primaryContact"] = state ? state.primaryContact : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["publisher"] = state ? state.publisher : undefined;
            resourceInputs["requestAccess"] = state ? state.requestAccess : undefined;
            resourceInputs["restrictedExportConfig"] = state ? state.restrictedExportConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BigqueryAnalyticsHubListingArgs | undefined;
            if ((!args || args.bigqueryDataset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bigqueryDataset'");
            }
            if ((!args || args.dataExchangeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataExchangeId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.listingId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listingId'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["bigqueryDataset"] = args ? args.bigqueryDataset : undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["dataExchangeId"] = args ? args.dataExchangeId : undefined;
            resourceInputs["dataProvider"] = args ? args.dataProvider : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["documentation"] = args ? args.documentation : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["listingId"] = args ? args.listingId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["primaryContact"] = args ? args.primaryContact : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["requestAccess"] = args ? args.requestAccess : undefined;
            resourceInputs["restrictedExportConfig"] = args ? args.restrictedExportConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryAnalyticsHubListing.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryAnalyticsHubListing resources.
 */
export interface BigqueryAnalyticsHubListingState {
    /**
     * Shared dataset i.e. BigQuery dataset source.
     */
    bigqueryDataset?: pulumi.Input<inputs.BigqueryAnalyticsHubListingBigqueryDataset>;
    /**
     * Categories of the listing. Up to two categories are allowed.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    dataExchangeId?: pulumi.Input<string>;
    /**
     * Details of the data provider who owns the source data.
     */
    dataProvider?: pulumi.Input<inputs.BigqueryAnalyticsHubListingDataProvider>;
    /**
     * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes
     * except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Documentation describing the listing.
     */
    documentation?: pulumi.Input<string>;
    /**
     * Base64 encoded image representing the listing.
     */
    icon?: pulumi.Input<string>;
    /**
     * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that
     * require URL-escaping, or characters outside of ASCII, spaces.
     */
    listingId?: pulumi.Input<string>;
    /**
     * The name of the location this data exchange listing.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the listing. e.g. "projects/myproject/locations/US/dataExchanges/123/listings/456"
     */
    name?: pulumi.Input<string>;
    /**
     * Email or URL of the primary point of contact of the listing.
     */
    primaryContact?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Details of the publisher who owns the listing and who can share the source data.
     */
    publisher?: pulumi.Input<inputs.BigqueryAnalyticsHubListingPublisher>;
    /**
     * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
     */
    requestAccess?: pulumi.Input<string>;
    /**
     * If set, restricted export configuration will be propagated and enforced on the linked dataset.
     */
    restrictedExportConfig?: pulumi.Input<inputs.BigqueryAnalyticsHubListingRestrictedExportConfig>;
    timeouts?: pulumi.Input<inputs.BigqueryAnalyticsHubListingTimeouts>;
}

/**
 * The set of arguments for constructing a BigqueryAnalyticsHubListing resource.
 */
export interface BigqueryAnalyticsHubListingArgs {
    /**
     * Shared dataset i.e. BigQuery dataset source.
     */
    bigqueryDataset: pulumi.Input<inputs.BigqueryAnalyticsHubListingBigqueryDataset>;
    /**
     * Categories of the listing. Up to two categories are allowed.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    dataExchangeId: pulumi.Input<string>;
    /**
     * Details of the data provider who owns the source data.
     */
    dataProvider?: pulumi.Input<inputs.BigqueryAnalyticsHubListingDataProvider>;
    /**
     * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes
     * except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
     */
    displayName: pulumi.Input<string>;
    /**
     * Documentation describing the listing.
     */
    documentation?: pulumi.Input<string>;
    /**
     * Base64 encoded image representing the listing.
     */
    icon?: pulumi.Input<string>;
    /**
     * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that
     * require URL-escaping, or characters outside of ASCII, spaces.
     */
    listingId: pulumi.Input<string>;
    /**
     * The name of the location this data exchange listing.
     */
    location: pulumi.Input<string>;
    /**
     * Email or URL of the primary point of contact of the listing.
     */
    primaryContact?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Details of the publisher who owns the listing and who can share the source data.
     */
    publisher?: pulumi.Input<inputs.BigqueryAnalyticsHubListingPublisher>;
    /**
     * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
     */
    requestAccess?: pulumi.Input<string>;
    /**
     * If set, restricted export configuration will be propagated and enforced on the linked dataset.
     */
    restrictedExportConfig?: pulumi.Input<inputs.BigqueryAnalyticsHubListingRestrictedExportConfig>;
    timeouts?: pulumi.Input<inputs.BigqueryAnalyticsHubListingTimeouts>;
}
