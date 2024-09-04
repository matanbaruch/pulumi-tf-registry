// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WebAppAnomalies extends pulumi.CustomResource {
    /**
     * Get an existing WebAppAnomalies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebAppAnomaliesState, opts?: pulumi.CustomResourceOptions): WebAppAnomalies {
        return new WebAppAnomalies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/webAppAnomalies:WebAppAnomalies';

    /**
     * Returns true if the given object is an instance of WebAppAnomalies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppAnomalies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppAnomalies.__pulumiType;
    }

    /**
     * Error rate
     */
    public readonly errorRate!: pulumi.Output<outputs.WebAppAnomaliesErrorRate>;
    /**
     * Response time
     */
    public readonly responseTime!: pulumi.Output<outputs.WebAppAnomaliesResponseTime>;
    /**
     * The scope of this setting (APPLICATION_METHOD, APPLICATION). Omit this property if you want to cover the whole
     * environment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Detect traffic drops
     */
    public readonly trafficDrops!: pulumi.Output<outputs.WebAppAnomaliesTrafficDrops>;
    /**
     * Detect traffic spikes
     */
    public readonly trafficSpikes!: pulumi.Output<outputs.WebAppAnomaliesTrafficSpikes>;

    /**
     * Create a WebAppAnomalies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppAnomaliesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebAppAnomaliesArgs | WebAppAnomaliesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebAppAnomaliesState | undefined;
            resourceInputs["errorRate"] = state ? state.errorRate : undefined;
            resourceInputs["responseTime"] = state ? state.responseTime : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["trafficDrops"] = state ? state.trafficDrops : undefined;
            resourceInputs["trafficSpikes"] = state ? state.trafficSpikes : undefined;
        } else {
            const args = argsOrState as WebAppAnomaliesArgs | undefined;
            if ((!args || args.errorRate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'errorRate'");
            }
            if ((!args || args.responseTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'responseTime'");
            }
            if ((!args || args.trafficDrops === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficDrops'");
            }
            if ((!args || args.trafficSpikes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trafficSpikes'");
            }
            resourceInputs["errorRate"] = args ? args.errorRate : undefined;
            resourceInputs["responseTime"] = args ? args.responseTime : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["trafficDrops"] = args ? args.trafficDrops : undefined;
            resourceInputs["trafficSpikes"] = args ? args.trafficSpikes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebAppAnomalies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebAppAnomalies resources.
 */
export interface WebAppAnomaliesState {
    /**
     * Error rate
     */
    errorRate?: pulumi.Input<inputs.WebAppAnomaliesErrorRate>;
    /**
     * Response time
     */
    responseTime?: pulumi.Input<inputs.WebAppAnomaliesResponseTime>;
    /**
     * The scope of this setting (APPLICATION_METHOD, APPLICATION). Omit this property if you want to cover the whole
     * environment.
     */
    scope?: pulumi.Input<string>;
    /**
     * Detect traffic drops
     */
    trafficDrops?: pulumi.Input<inputs.WebAppAnomaliesTrafficDrops>;
    /**
     * Detect traffic spikes
     */
    trafficSpikes?: pulumi.Input<inputs.WebAppAnomaliesTrafficSpikes>;
}

/**
 * The set of arguments for constructing a WebAppAnomalies resource.
 */
export interface WebAppAnomaliesArgs {
    /**
     * Error rate
     */
    errorRate: pulumi.Input<inputs.WebAppAnomaliesErrorRate>;
    /**
     * Response time
     */
    responseTime: pulumi.Input<inputs.WebAppAnomaliesResponseTime>;
    /**
     * The scope of this setting (APPLICATION_METHOD, APPLICATION). Omit this property if you want to cover the whole
     * environment.
     */
    scope?: pulumi.Input<string>;
    /**
     * Detect traffic drops
     */
    trafficDrops: pulumi.Input<inputs.WebAppAnomaliesTrafficDrops>;
    /**
     * Detect traffic spikes
     */
    trafficSpikes: pulumi.Input<inputs.WebAppAnomaliesTrafficSpikes>;
}
