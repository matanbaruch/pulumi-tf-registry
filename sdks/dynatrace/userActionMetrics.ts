// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UserActionMetrics extends pulumi.CustomResource {
    /**
     * Get an existing UserActionMetrics resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserActionMetricsState, opts?: pulumi.CustomResourceOptions): UserActionMetrics {
        return new UserActionMetrics(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/userActionMetrics:UserActionMetrics';

    /**
     * Returns true if the given object is an instance of UserActionMetrics.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserActionMetrics {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserActionMetrics.__pulumiType;
    }

    /**
     * Defines the fields that are used as dimensions. A dimension is a collection of reference information about a metric data
     * point that is of interest to your business. Dimensions are parameters like "application", "type", "name". For example,
     * using "type" as a dimension allows you to split chart data based on the user action type.
     */
    public readonly dimensions!: pulumi.Output<string[] | undefined>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Defines the filters for the user action. Filters apply at the moment of extracting the data and only sessions that
     * satisfy the filtering criteria will be used to extract the custom metrics. You will not be able to modify these filters
     * in the metric data explorer. For example, using "type equals Xhr" will give you only data from xhr actions, while
     * forcing the rest of user actions of different types to be ignored.
     */
    public readonly filters!: pulumi.Output<outputs.UserActionMetricsFilters | undefined>;
    /**
     * Metric key
     */
    public readonly metricKey!: pulumi.Output<string>;
    /**
     * Defines the type of value to be extracted from the user action. When using **user action counter**, the number of user
     * actions is counted (similar to count(*) when using USQL). When using **user action field value**, the value of a user
     * action field is extracted.
     */
    public readonly value!: pulumi.Output<outputs.UserActionMetricsValue>;

    /**
     * Create a UserActionMetrics resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserActionMetricsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserActionMetricsArgs | UserActionMetricsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserActionMetricsState | undefined;
            resourceInputs["dimensions"] = state ? state.dimensions : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["metricKey"] = state ? state.metricKey : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as UserActionMetricsArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.metricKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metricKey'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["dimensions"] = args ? args.dimensions : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["metricKey"] = args ? args.metricKey : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserActionMetrics.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserActionMetrics resources.
 */
export interface UserActionMetricsState {
    /**
     * Defines the fields that are used as dimensions. A dimension is a collection of reference information about a metric data
     * point that is of interest to your business. Dimensions are parameters like "application", "type", "name". For example,
     * using "type" as a dimension allows you to split chart data based on the user action type.
     */
    dimensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Defines the filters for the user action. Filters apply at the moment of extracting the data and only sessions that
     * satisfy the filtering criteria will be used to extract the custom metrics. You will not be able to modify these filters
     * in the metric data explorer. For example, using "type equals Xhr" will give you only data from xhr actions, while
     * forcing the rest of user actions of different types to be ignored.
     */
    filters?: pulumi.Input<inputs.UserActionMetricsFilters>;
    /**
     * Metric key
     */
    metricKey?: pulumi.Input<string>;
    /**
     * Defines the type of value to be extracted from the user action. When using **user action counter**, the number of user
     * actions is counted (similar to count(*) when using USQL). When using **user action field value**, the value of a user
     * action field is extracted.
     */
    value?: pulumi.Input<inputs.UserActionMetricsValue>;
}

/**
 * The set of arguments for constructing a UserActionMetrics resource.
 */
export interface UserActionMetricsArgs {
    /**
     * Defines the fields that are used as dimensions. A dimension is a collection of reference information about a metric data
     * point that is of interest to your business. Dimensions are parameters like "application", "type", "name". For example,
     * using "type" as a dimension allows you to split chart data based on the user action type.
     */
    dimensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Defines the filters for the user action. Filters apply at the moment of extracting the data and only sessions that
     * satisfy the filtering criteria will be used to extract the custom metrics. You will not be able to modify these filters
     * in the metric data explorer. For example, using "type equals Xhr" will give you only data from xhr actions, while
     * forcing the rest of user actions of different types to be ignored.
     */
    filters?: pulumi.Input<inputs.UserActionMetricsFilters>;
    /**
     * Metric key
     */
    metricKey: pulumi.Input<string>;
    /**
     * Defines the type of value to be extracted from the user action. When using **user action counter**, the number of user
     * actions is counted (similar to count(*) when using USQL). When using **user action field value**, the value of a user
     * action field is extracted.
     */
    value: pulumi.Input<inputs.UserActionMetricsValue>;
}
