// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplicationAnomalies extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationAnomalies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationAnomaliesState, opts?: pulumi.CustomResourceOptions): ApplicationAnomalies {
        return new ApplicationAnomalies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/applicationAnomalies:ApplicationAnomalies';

    /**
     * Returns true if the given object is an instance of ApplicationAnomalies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationAnomalies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationAnomalies.__pulumiType;
    }

    /**
     * Configuration of failure rate increase detection
     */
    public readonly failureRate!: pulumi.Output<outputs.ApplicationAnomaliesFailureRate | undefined>;
    /**
     * Configuration of response time degradation detection
     */
    public readonly responseTime!: pulumi.Output<outputs.ApplicationAnomaliesResponseTime | undefined>;
    /**
     * Configuration for anomalies regarding traffic
     */
    public readonly traffic!: pulumi.Output<outputs.ApplicationAnomaliesTraffic | undefined>;

    /**
     * Create a ApplicationAnomalies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApplicationAnomaliesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationAnomaliesArgs | ApplicationAnomaliesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationAnomaliesState | undefined;
            resourceInputs["failureRate"] = state ? state.failureRate : undefined;
            resourceInputs["responseTime"] = state ? state.responseTime : undefined;
            resourceInputs["traffic"] = state ? state.traffic : undefined;
        } else {
            const args = argsOrState as ApplicationAnomaliesArgs | undefined;
            resourceInputs["failureRate"] = args ? args.failureRate : undefined;
            resourceInputs["responseTime"] = args ? args.responseTime : undefined;
            resourceInputs["traffic"] = args ? args.traffic : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationAnomalies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationAnomalies resources.
 */
export interface ApplicationAnomaliesState {
    /**
     * Configuration of failure rate increase detection
     */
    failureRate?: pulumi.Input<inputs.ApplicationAnomaliesFailureRate>;
    /**
     * Configuration of response time degradation detection
     */
    responseTime?: pulumi.Input<inputs.ApplicationAnomaliesResponseTime>;
    /**
     * Configuration for anomalies regarding traffic
     */
    traffic?: pulumi.Input<inputs.ApplicationAnomaliesTraffic>;
}

/**
 * The set of arguments for constructing a ApplicationAnomalies resource.
 */
export interface ApplicationAnomaliesArgs {
    /**
     * Configuration of failure rate increase detection
     */
    failureRate?: pulumi.Input<inputs.ApplicationAnomaliesFailureRate>;
    /**
     * Configuration of response time degradation detection
     */
    responseTime?: pulumi.Input<inputs.ApplicationAnomaliesResponseTime>;
    /**
     * Configuration for anomalies regarding traffic
     */
    traffic?: pulumi.Input<inputs.ApplicationAnomaliesTraffic>;
}
