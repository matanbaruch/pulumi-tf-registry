// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultPrometheusMonitorAttributeMetric extends pulumi.CustomResource {
    /**
     * Get an existing DefaultPrometheusMonitorAttributeMetric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultPrometheusMonitorAttributeMetricState, opts?: pulumi.CustomResourceOptions): DefaultPrometheusMonitorAttributeMetric {
        return new DefaultPrometheusMonitorAttributeMetric(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultPrometheusMonitorAttributeMetric:DefaultPrometheusMonitorAttributeMetric';

    /**
     * Returns true if the given object is an instance of DefaultPrometheusMonitorAttributeMetric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultPrometheusMonitorAttributeMetric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultPrometheusMonitorAttributeMetric.__pulumiType;
    }

    /**
     * A filter that may be used to restrict the set of monitor entries for which the metric should be generated.
     */
    public readonly filter!: pulumi.Output<string>;
    /**
     * Name of the parent HTTP Servlet Extension
     */
    public readonly httpServletExtensionName!: pulumi.Output<string>;
    /**
     * A set of name-value pairs for labels that should be included in the published metric for the target attribute.
     */
    public readonly labelNameValuePairs!: pulumi.Output<string[]>;
    /**
     * A human-readable description that should be published as part of the metric definition.
     */
    public readonly metricDescription!: pulumi.Output<string>;
    /**
     * The name that will be used in the metric to be consumed by Prometheus.
     */
    public readonly metricName!: pulumi.Output<string>;
    /**
     * The metric type that should be used for the value of the specified monitor attribute.
     */
    public readonly metricType!: pulumi.Output<string>;
    /**
     * The name of the monitor attribute that contains the numeric value to be published.
     */
    public readonly monitorAttributeName!: pulumi.Output<string>;
    /**
     * The name of the object class for monitor entries that contain the monitor attribute.
     */
    public readonly monitorObjectClassName!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultPrometheusMonitorAttributeMetricRequiredAction[]>;
    /**
     * The type of Prometheus Monitor Attribute Metric resource. Options are ['prometheus-monitor-attribute-metric']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultPrometheusMonitorAttributeMetric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultPrometheusMonitorAttributeMetricArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultPrometheusMonitorAttributeMetricArgs | DefaultPrometheusMonitorAttributeMetricState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultPrometheusMonitorAttributeMetricState | undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["httpServletExtensionName"] = state ? state.httpServletExtensionName : undefined;
            resourceInputs["labelNameValuePairs"] = state ? state.labelNameValuePairs : undefined;
            resourceInputs["metricDescription"] = state ? state.metricDescription : undefined;
            resourceInputs["metricName"] = state ? state.metricName : undefined;
            resourceInputs["metricType"] = state ? state.metricType : undefined;
            resourceInputs["monitorAttributeName"] = state ? state.monitorAttributeName : undefined;
            resourceInputs["monitorObjectClassName"] = state ? state.monitorObjectClassName : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultPrometheusMonitorAttributeMetricArgs | undefined;
            if ((!args || args.httpServletExtensionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpServletExtensionName'");
            }
            if ((!args || args.metricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metricName'");
            }
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["httpServletExtensionName"] = args ? args.httpServletExtensionName : undefined;
            resourceInputs["labelNameValuePairs"] = args ? args.labelNameValuePairs : undefined;
            resourceInputs["metricDescription"] = args ? args.metricDescription : undefined;
            resourceInputs["metricName"] = args ? args.metricName : undefined;
            resourceInputs["metricType"] = args ? args.metricType : undefined;
            resourceInputs["monitorAttributeName"] = args ? args.monitorAttributeName : undefined;
            resourceInputs["monitorObjectClassName"] = args ? args.monitorObjectClassName : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultPrometheusMonitorAttributeMetric.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultPrometheusMonitorAttributeMetric resources.
 */
export interface DefaultPrometheusMonitorAttributeMetricState {
    /**
     * A filter that may be used to restrict the set of monitor entries for which the metric should be generated.
     */
    filter?: pulumi.Input<string>;
    /**
     * Name of the parent HTTP Servlet Extension
     */
    httpServletExtensionName?: pulumi.Input<string>;
    /**
     * A set of name-value pairs for labels that should be included in the published metric for the target attribute.
     */
    labelNameValuePairs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A human-readable description that should be published as part of the metric definition.
     */
    metricDescription?: pulumi.Input<string>;
    /**
     * The name that will be used in the metric to be consumed by Prometheus.
     */
    metricName?: pulumi.Input<string>;
    /**
     * The metric type that should be used for the value of the specified monitor attribute.
     */
    metricType?: pulumi.Input<string>;
    /**
     * The name of the monitor attribute that contains the numeric value to be published.
     */
    monitorAttributeName?: pulumi.Input<string>;
    /**
     * The name of the object class for monitor entries that contain the monitor attribute.
     */
    monitorObjectClassName?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultPrometheusMonitorAttributeMetricRequiredAction>[]>;
    /**
     * The type of Prometheus Monitor Attribute Metric resource. Options are ['prometheus-monitor-attribute-metric']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultPrometheusMonitorAttributeMetric resource.
 */
export interface DefaultPrometheusMonitorAttributeMetricArgs {
    /**
     * A filter that may be used to restrict the set of monitor entries for which the metric should be generated.
     */
    filter?: pulumi.Input<string>;
    /**
     * Name of the parent HTTP Servlet Extension
     */
    httpServletExtensionName: pulumi.Input<string>;
    /**
     * A set of name-value pairs for labels that should be included in the published metric for the target attribute.
     */
    labelNameValuePairs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A human-readable description that should be published as part of the metric definition.
     */
    metricDescription?: pulumi.Input<string>;
    /**
     * The name that will be used in the metric to be consumed by Prometheus.
     */
    metricName: pulumi.Input<string>;
    /**
     * The metric type that should be used for the value of the specified monitor attribute.
     */
    metricType?: pulumi.Input<string>;
    /**
     * The name of the monitor attribute that contains the numeric value to be published.
     */
    monitorAttributeName?: pulumi.Input<string>;
    /**
     * The name of the object class for monitor entries that contain the monitor attribute.
     */
    monitorObjectClassName?: pulumi.Input<string>;
}
