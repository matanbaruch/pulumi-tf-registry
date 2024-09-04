// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceUsageConsumerQuotaOverride extends pulumi.CustomResource {
    /**
     * Get an existing ServiceUsageConsumerQuotaOverride resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceUsageConsumerQuotaOverrideState, opts?: pulumi.CustomResourceOptions): ServiceUsageConsumerQuotaOverride {
        return new ServiceUsageConsumerQuotaOverride(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/serviceUsageConsumerQuotaOverride:ServiceUsageConsumerQuotaOverride';

    /**
     * Returns true if the given object is an instance of ServiceUsageConsumerQuotaOverride.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceUsageConsumerQuotaOverride {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceUsageConsumerQuotaOverride.__pulumiType;
    }

    /**
     * If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
     */
    public readonly dimensions!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * If the new quota would decrease the existing quota by more than 10%, the request is rejected. If 'force' is 'true', that
     * safety check is ignored.
     */
    public readonly force!: pulumi.Output<boolean | undefined>;
    /**
     * The limit on the metric, e.g. '/project/region'. > Make sure that 'limit' is in a format that doesn't start with '1/' or
     * contain curly braces. E.g. use '/project/user' instead of '1/{project}/{user}'.
     */
    public readonly limit!: pulumi.Output<string>;
    /**
     * The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.
     */
    public readonly metric!: pulumi.Output<string>;
    /**
     * The server-generated name of the quota override.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
     */
    public readonly overrideValue!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The service that the metrics belong to, e.g. 'compute.googleapis.com'.
     */
    public readonly service!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceUsageConsumerQuotaOverrideTimeouts | undefined>;

    /**
     * Create a ServiceUsageConsumerQuotaOverride resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceUsageConsumerQuotaOverrideArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceUsageConsumerQuotaOverrideArgs | ServiceUsageConsumerQuotaOverrideState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceUsageConsumerQuotaOverrideState | undefined;
            resourceInputs["dimensions"] = state ? state.dimensions : undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["limit"] = state ? state.limit : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["overrideValue"] = state ? state.overrideValue : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServiceUsageConsumerQuotaOverrideArgs | undefined;
            if ((!args || args.limit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'limit'");
            }
            if ((!args || args.metric === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metric'");
            }
            if ((!args || args.overrideValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'overrideValue'");
            }
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            resourceInputs["dimensions"] = args ? args.dimensions : undefined;
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["limit"] = args ? args.limit : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["overrideValue"] = args ? args.overrideValue : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceUsageConsumerQuotaOverride.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceUsageConsumerQuotaOverride resources.
 */
export interface ServiceUsageConsumerQuotaOverrideState {
    /**
     * If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
     */
    dimensions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * If the new quota would decrease the existing quota by more than 10%, the request is rejected. If 'force' is 'true', that
     * safety check is ignored.
     */
    force?: pulumi.Input<boolean>;
    /**
     * The limit on the metric, e.g. '/project/region'. > Make sure that 'limit' is in a format that doesn't start with '1/' or
     * contain curly braces. E.g. use '/project/user' instead of '1/{project}/{user}'.
     */
    limit?: pulumi.Input<string>;
    /**
     * The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.
     */
    metric?: pulumi.Input<string>;
    /**
     * The server-generated name of the quota override.
     */
    name?: pulumi.Input<string>;
    /**
     * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
     */
    overrideValue?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The service that the metrics belong to, e.g. 'compute.googleapis.com'.
     */
    service?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceUsageConsumerQuotaOverrideTimeouts>;
}

/**
 * The set of arguments for constructing a ServiceUsageConsumerQuotaOverride resource.
 */
export interface ServiceUsageConsumerQuotaOverrideArgs {
    /**
     * If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
     */
    dimensions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * If the new quota would decrease the existing quota by more than 10%, the request is rejected. If 'force' is 'true', that
     * safety check is ignored.
     */
    force?: pulumi.Input<boolean>;
    /**
     * The limit on the metric, e.g. '/project/region'. > Make sure that 'limit' is in a format that doesn't start with '1/' or
     * contain curly braces. E.g. use '/project/user' instead of '1/{project}/{user}'.
     */
    limit: pulumi.Input<string>;
    /**
     * The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.
     */
    metric: pulumi.Input<string>;
    /**
     * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
     */
    overrideValue: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The service that the metrics belong to, e.g. 'compute.googleapis.com'.
     */
    service: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceUsageConsumerQuotaOverrideTimeouts>;
}
