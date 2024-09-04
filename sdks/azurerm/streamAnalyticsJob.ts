// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StreamAnalyticsJob extends pulumi.CustomResource {
    /**
     * Get an existing StreamAnalyticsJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamAnalyticsJobState, opts?: pulumi.CustomResourceOptions): StreamAnalyticsJob {
        return new StreamAnalyticsJob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/streamAnalyticsJob:StreamAnalyticsJob';

    /**
     * Returns true if the given object is an instance of StreamAnalyticsJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamAnalyticsJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamAnalyticsJob.__pulumiType;
    }

    public readonly compatibilityLevel!: pulumi.Output<string>;
    public readonly contentStoragePolicy!: pulumi.Output<string | undefined>;
    public readonly dataLocale!: pulumi.Output<string | undefined>;
    public readonly eventsLateArrivalMaxDelayInSeconds!: pulumi.Output<number | undefined>;
    public readonly eventsOutOfOrderMaxDelayInSeconds!: pulumi.Output<number | undefined>;
    public readonly eventsOutOfOrderPolicy!: pulumi.Output<string | undefined>;
    public readonly identity!: pulumi.Output<outputs.StreamAnalyticsJobIdentity | undefined>;
    public /*out*/ readonly jobId!: pulumi.Output<string>;
    public readonly jobStorageAccounts!: pulumi.Output<outputs.StreamAnalyticsJobJobStorageAccount[] | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly outputErrorPolicy!: pulumi.Output<string | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly skuName!: pulumi.Output<string | undefined>;
    public readonly streamAnalyticsClusterId!: pulumi.Output<string | undefined>;
    public readonly streamingUnits!: pulumi.Output<number | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.StreamAnalyticsJobTimeouts | undefined>;
    public readonly transformationQuery!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a StreamAnalyticsJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamAnalyticsJobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StreamAnalyticsJobArgs | StreamAnalyticsJobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StreamAnalyticsJobState | undefined;
            resourceInputs["compatibilityLevel"] = state ? state.compatibilityLevel : undefined;
            resourceInputs["contentStoragePolicy"] = state ? state.contentStoragePolicy : undefined;
            resourceInputs["dataLocale"] = state ? state.dataLocale : undefined;
            resourceInputs["eventsLateArrivalMaxDelayInSeconds"] = state ? state.eventsLateArrivalMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderMaxDelayInSeconds"] = state ? state.eventsOutOfOrderMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderPolicy"] = state ? state.eventsOutOfOrderPolicy : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
            resourceInputs["jobStorageAccounts"] = state ? state.jobStorageAccounts : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outputErrorPolicy"] = state ? state.outputErrorPolicy : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["skuName"] = state ? state.skuName : undefined;
            resourceInputs["streamAnalyticsClusterId"] = state ? state.streamAnalyticsClusterId : undefined;
            resourceInputs["streamingUnits"] = state ? state.streamingUnits : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["transformationQuery"] = state ? state.transformationQuery : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as StreamAnalyticsJobArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.transformationQuery === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transformationQuery'");
            }
            resourceInputs["compatibilityLevel"] = args ? args.compatibilityLevel : undefined;
            resourceInputs["contentStoragePolicy"] = args ? args.contentStoragePolicy : undefined;
            resourceInputs["dataLocale"] = args ? args.dataLocale : undefined;
            resourceInputs["eventsLateArrivalMaxDelayInSeconds"] = args ? args.eventsLateArrivalMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderMaxDelayInSeconds"] = args ? args.eventsOutOfOrderMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderPolicy"] = args ? args.eventsOutOfOrderPolicy : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["jobStorageAccounts"] = args ? args.jobStorageAccounts : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outputErrorPolicy"] = args ? args.outputErrorPolicy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["streamAnalyticsClusterId"] = args ? args.streamAnalyticsClusterId : undefined;
            resourceInputs["streamingUnits"] = args ? args.streamingUnits : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["transformationQuery"] = args ? args.transformationQuery : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["jobId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StreamAnalyticsJob.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StreamAnalyticsJob resources.
 */
export interface StreamAnalyticsJobState {
    compatibilityLevel?: pulumi.Input<string>;
    contentStoragePolicy?: pulumi.Input<string>;
    dataLocale?: pulumi.Input<string>;
    eventsLateArrivalMaxDelayInSeconds?: pulumi.Input<number>;
    eventsOutOfOrderMaxDelayInSeconds?: pulumi.Input<number>;
    eventsOutOfOrderPolicy?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.StreamAnalyticsJobIdentity>;
    jobId?: pulumi.Input<string>;
    jobStorageAccounts?: pulumi.Input<pulumi.Input<inputs.StreamAnalyticsJobJobStorageAccount>[]>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    outputErrorPolicy?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    streamAnalyticsClusterId?: pulumi.Input<string>;
    streamingUnits?: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsJobTimeouts>;
    transformationQuery?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StreamAnalyticsJob resource.
 */
export interface StreamAnalyticsJobArgs {
    compatibilityLevel?: pulumi.Input<string>;
    contentStoragePolicy?: pulumi.Input<string>;
    dataLocale?: pulumi.Input<string>;
    eventsLateArrivalMaxDelayInSeconds?: pulumi.Input<number>;
    eventsOutOfOrderMaxDelayInSeconds?: pulumi.Input<number>;
    eventsOutOfOrderPolicy?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.StreamAnalyticsJobIdentity>;
    jobStorageAccounts?: pulumi.Input<pulumi.Input<inputs.StreamAnalyticsJobJobStorageAccount>[]>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    outputErrorPolicy?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    streamAnalyticsClusterId?: pulumi.Input<string>;
    streamingUnits?: pulumi.Input<number>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsJobTimeouts>;
    transformationQuery: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
