// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BigqueryAnalyticsHubDataExchange extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryAnalyticsHubDataExchange resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryAnalyticsHubDataExchangeState, opts?: pulumi.CustomResourceOptions): BigqueryAnalyticsHubDataExchange {
        return new BigqueryAnalyticsHubDataExchange(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/bigqueryAnalyticsHubDataExchange:BigqueryAnalyticsHubDataExchange';

    /**
     * Returns true if the given object is an instance of BigqueryAnalyticsHubDataExchange.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryAnalyticsHubDataExchange {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryAnalyticsHubDataExchange.__pulumiType;
    }

    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    public readonly dataExchangeId!: pulumi.Output<string>;
    /**
     * Description of the data exchange.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Documentation describing the data exchange.
     */
    public readonly documentation!: pulumi.Output<string | undefined>;
    /**
     * Base64 encoded image representing the data exchange.
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * Number of listings contained in the data exchange.
     */
    public /*out*/ readonly listingCount!: pulumi.Output<number>;
    /**
     * The name of the location this data exchange.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the data exchange, for example: "projects/myproject/locations/US/dataExchanges/123"
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Email or URL of the primary point of contact of the data exchange.
     */
    public readonly primaryContact!: pulumi.Output<string | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Configurable data sharing environment option for a data exchange. This field is required for data clean room exchanges.
     */
    public readonly sharingEnvironmentConfig!: pulumi.Output<outputs.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BigqueryAnalyticsHubDataExchangeTimeouts | undefined>;

    /**
     * Create a BigqueryAnalyticsHubDataExchange resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryAnalyticsHubDataExchangeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryAnalyticsHubDataExchangeArgs | BigqueryAnalyticsHubDataExchangeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryAnalyticsHubDataExchangeState | undefined;
            resourceInputs["dataExchangeId"] = state ? state.dataExchangeId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["documentation"] = state ? state.documentation : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["listingCount"] = state ? state.listingCount : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primaryContact"] = state ? state.primaryContact : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["sharingEnvironmentConfig"] = state ? state.sharingEnvironmentConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BigqueryAnalyticsHubDataExchangeArgs | undefined;
            if ((!args || args.dataExchangeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataExchangeId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["dataExchangeId"] = args ? args.dataExchangeId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["documentation"] = args ? args.documentation : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["primaryContact"] = args ? args.primaryContact : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["sharingEnvironmentConfig"] = args ? args.sharingEnvironmentConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["listingCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryAnalyticsHubDataExchange.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryAnalyticsHubDataExchange resources.
 */
export interface BigqueryAnalyticsHubDataExchangeState {
    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    dataExchangeId?: pulumi.Input<string>;
    /**
     * Description of the data exchange.
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Documentation describing the data exchange.
     */
    documentation?: pulumi.Input<string>;
    /**
     * Base64 encoded image representing the data exchange.
     */
    icon?: pulumi.Input<string>;
    /**
     * Number of listings contained in the data exchange.
     */
    listingCount?: pulumi.Input<number>;
    /**
     * The name of the location this data exchange.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the data exchange, for example: "projects/myproject/locations/US/dataExchanges/123"
     */
    name?: pulumi.Input<string>;
    /**
     * Email or URL of the primary point of contact of the data exchange.
     */
    primaryContact?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Configurable data sharing environment option for a data exchange. This field is required for data clean room exchanges.
     */
    sharingEnvironmentConfig?: pulumi.Input<inputs.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig>;
    timeouts?: pulumi.Input<inputs.BigqueryAnalyticsHubDataExchangeTimeouts>;
}

/**
 * The set of arguments for constructing a BigqueryAnalyticsHubDataExchange resource.
 */
export interface BigqueryAnalyticsHubDataExchangeArgs {
    /**
     * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use
     * characters that require URL-escaping, or characters outside of ASCII, spaces.
     */
    dataExchangeId: pulumi.Input<string>;
    /**
     * Description of the data exchange.
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9),
     * underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.
     */
    displayName: pulumi.Input<string>;
    /**
     * Documentation describing the data exchange.
     */
    documentation?: pulumi.Input<string>;
    /**
     * Base64 encoded image representing the data exchange.
     */
    icon?: pulumi.Input<string>;
    /**
     * The name of the location this data exchange.
     */
    location: pulumi.Input<string>;
    /**
     * Email or URL of the primary point of contact of the data exchange.
     */
    primaryContact?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Configurable data sharing environment option for a data exchange. This field is required for data clean room exchanges.
     */
    sharingEnvironmentConfig?: pulumi.Input<inputs.BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig>;
    timeouts?: pulumi.Input<inputs.BigqueryAnalyticsHubDataExchangeTimeouts>;
}
