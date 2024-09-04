// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Alert extends pulumi.CustomResource {
    /**
     * Get an existing Alert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertState, opts?: pulumi.CustomResourceOptions): Alert {
        return new Alert(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fastly:index/alert:Alert';

    /**
     * Returns true if the given object is an instance of Alert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Alert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Alert.__pulumiType;
    }

    /**
     * Additional text that is included in the alert notification.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * More filters depending on the source type.
     */
    public readonly dimensions!: pulumi.Output<outputs.AlertDimensions | undefined>;
    /**
     * Criteria on how to alert.
     */
    public readonly evaluationStrategy!: pulumi.Output<outputs.AlertEvaluationStrategy>;
    /**
     * List of integrations used to notify when alert fires.
     */
    public readonly integrationIds!: pulumi.Output<string[] | undefined>;
    /**
     * The metric name to alert on for a specific source:
     * [domains](https://developer.fastly.com/reference/api/metrics-stats/domain-inspector/historical),
     * [origins](https://developer.fastly.com/reference/api/metrics-stats/origin-inspector/historical), or
     * [stats](https://developer.fastly.com/reference/api/metrics-stats/historical-stats).
     */
    public readonly metric!: pulumi.Output<string>;
    /**
     * The name of the alert.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The service which the alert monitors. Optional when using `stats` as the `source`.
     */
    public readonly serviceId!: pulumi.Output<string | undefined>;
    /**
     * The source where the metric comes from. One of: `domains`, `origins`, `stats`.
     */
    public readonly source!: pulumi.Output<string>;

    /**
     * Create a Alert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertArgs | AlertState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dimensions"] = state ? state.dimensions : undefined;
            resourceInputs["evaluationStrategy"] = state ? state.evaluationStrategy : undefined;
            resourceInputs["integrationIds"] = state ? state.integrationIds : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
        } else {
            const args = argsOrState as AlertArgs | undefined;
            if ((!args || args.evaluationStrategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'evaluationStrategy'");
            }
            if ((!args || args.metric === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metric'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dimensions"] = args ? args.dimensions : undefined;
            resourceInputs["evaluationStrategy"] = args ? args.evaluationStrategy : undefined;
            resourceInputs["integrationIds"] = args ? args.integrationIds : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serviceId"] = args ? args.serviceId : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Alert.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Alert resources.
 */
export interface AlertState {
    /**
     * Additional text that is included in the alert notification.
     */
    description?: pulumi.Input<string>;
    /**
     * More filters depending on the source type.
     */
    dimensions?: pulumi.Input<inputs.AlertDimensions>;
    /**
     * Criteria on how to alert.
     */
    evaluationStrategy?: pulumi.Input<inputs.AlertEvaluationStrategy>;
    /**
     * List of integrations used to notify when alert fires.
     */
    integrationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The metric name to alert on for a specific source:
     * [domains](https://developer.fastly.com/reference/api/metrics-stats/domain-inspector/historical),
     * [origins](https://developer.fastly.com/reference/api/metrics-stats/origin-inspector/historical), or
     * [stats](https://developer.fastly.com/reference/api/metrics-stats/historical-stats).
     */
    metric?: pulumi.Input<string>;
    /**
     * The name of the alert.
     */
    name?: pulumi.Input<string>;
    /**
     * The service which the alert monitors. Optional when using `stats` as the `source`.
     */
    serviceId?: pulumi.Input<string>;
    /**
     * The source where the metric comes from. One of: `domains`, `origins`, `stats`.
     */
    source?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Alert resource.
 */
export interface AlertArgs {
    /**
     * Additional text that is included in the alert notification.
     */
    description?: pulumi.Input<string>;
    /**
     * More filters depending on the source type.
     */
    dimensions?: pulumi.Input<inputs.AlertDimensions>;
    /**
     * Criteria on how to alert.
     */
    evaluationStrategy: pulumi.Input<inputs.AlertEvaluationStrategy>;
    /**
     * List of integrations used to notify when alert fires.
     */
    integrationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The metric name to alert on for a specific source:
     * [domains](https://developer.fastly.com/reference/api/metrics-stats/domain-inspector/historical),
     * [origins](https://developer.fastly.com/reference/api/metrics-stats/origin-inspector/historical), or
     * [stats](https://developer.fastly.com/reference/api/metrics-stats/historical-stats).
     */
    metric: pulumi.Input<string>;
    /**
     * The name of the alert.
     */
    name?: pulumi.Input<string>;
    /**
     * The service which the alert monitors. Optional when using `stats` as the `source`.
     */
    serviceId?: pulumi.Input<string>;
    /**
     * The source where the metric comes from. One of: `domains`, `origins`, `stats`.
     */
    source: pulumi.Input<string>;
}
