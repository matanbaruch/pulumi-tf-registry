// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SpringCloudElasticApplicationPerformanceMonitoring extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudElasticApplicationPerformanceMonitoring resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudElasticApplicationPerformanceMonitoringState, opts?: pulumi.CustomResourceOptions): SpringCloudElasticApplicationPerformanceMonitoring {
        return new SpringCloudElasticApplicationPerformanceMonitoring(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/springCloudElasticApplicationPerformanceMonitoring:SpringCloudElasticApplicationPerformanceMonitoring';

    /**
     * Returns true if the given object is an instance of SpringCloudElasticApplicationPerformanceMonitoring.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SpringCloudElasticApplicationPerformanceMonitoring {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SpringCloudElasticApplicationPerformanceMonitoring.__pulumiType;
    }

    public readonly applicationPackages!: pulumi.Output<string[]>;
    public readonly globallyEnabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly serverUrl!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly springCloudServiceId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SpringCloudElasticApplicationPerformanceMonitoringTimeouts | undefined>;

    /**
     * Create a SpringCloudElasticApplicationPerformanceMonitoring resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudElasticApplicationPerformanceMonitoringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SpringCloudElasticApplicationPerformanceMonitoringArgs | SpringCloudElasticApplicationPerformanceMonitoringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SpringCloudElasticApplicationPerformanceMonitoringState | undefined;
            resourceInputs["applicationPackages"] = state ? state.applicationPackages : undefined;
            resourceInputs["globallyEnabled"] = state ? state.globallyEnabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["serverUrl"] = state ? state.serverUrl : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["springCloudServiceId"] = state ? state.springCloudServiceId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SpringCloudElasticApplicationPerformanceMonitoringArgs | undefined;
            if ((!args || args.applicationPackages === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationPackages'");
            }
            if ((!args || args.serverUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverUrl'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.springCloudServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'springCloudServiceId'");
            }
            resourceInputs["applicationPackages"] = args ? args.applicationPackages : undefined;
            resourceInputs["globallyEnabled"] = args ? args.globallyEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serverUrl"] = args ? args.serverUrl : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["springCloudServiceId"] = args ? args.springCloudServiceId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SpringCloudElasticApplicationPerformanceMonitoring.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SpringCloudElasticApplicationPerformanceMonitoring resources.
 */
export interface SpringCloudElasticApplicationPerformanceMonitoringState {
    applicationPackages?: pulumi.Input<pulumi.Input<string>[]>;
    globallyEnabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    serverUrl?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    springCloudServiceId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SpringCloudElasticApplicationPerformanceMonitoringTimeouts>;
}

/**
 * The set of arguments for constructing a SpringCloudElasticApplicationPerformanceMonitoring resource.
 */
export interface SpringCloudElasticApplicationPerformanceMonitoringArgs {
    applicationPackages: pulumi.Input<pulumi.Input<string>[]>;
    globallyEnabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    serverUrl: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    springCloudServiceId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SpringCloudElasticApplicationPerformanceMonitoringTimeouts>;
}
