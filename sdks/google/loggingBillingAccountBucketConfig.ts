// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LoggingBillingAccountBucketConfig extends pulumi.CustomResource {
    /**
     * Get an existing LoggingBillingAccountBucketConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingBillingAccountBucketConfigState, opts?: pulumi.CustomResourceOptions): LoggingBillingAccountBucketConfig {
        return new LoggingBillingAccountBucketConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/loggingBillingAccountBucketConfig:LoggingBillingAccountBucketConfig';

    /**
     * Returns true if the given object is an instance of LoggingBillingAccountBucketConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingBillingAccountBucketConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingBillingAccountBucketConfig.__pulumiType;
    }

    /**
     * The parent resource that contains the logging bucket.
     */
    public readonly billingAccount!: pulumi.Output<string>;
    /**
     * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
     */
    public readonly bucketId!: pulumi.Output<string>;
    /**
     * The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
     * key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
     * updating the log bucket. Changing the KMS key is allowed.
     */
    public readonly cmekSettings!: pulumi.Output<outputs.LoggingBillingAccountBucketConfigCmekSettings | undefined>;
    /**
     * An optional description for this bucket.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A list of indexed fields and related configuration data.
     */
    public readonly indexConfigs!: pulumi.Output<outputs.LoggingBillingAccountBucketConfigIndexConfig[] | undefined>;
    /**
     * The bucket's lifecycle such as active or deleted.
     */
    public /*out*/ readonly lifecycleState!: pulumi.Output<string>;
    /**
     * The location of the bucket.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the bucket
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum
     * retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be
     * used.
     */
    public readonly retentionDays!: pulumi.Output<number | undefined>;

    /**
     * Create a LoggingBillingAccountBucketConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggingBillingAccountBucketConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingBillingAccountBucketConfigArgs | LoggingBillingAccountBucketConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingBillingAccountBucketConfigState | undefined;
            resourceInputs["billingAccount"] = state ? state.billingAccount : undefined;
            resourceInputs["bucketId"] = state ? state.bucketId : undefined;
            resourceInputs["cmekSettings"] = state ? state.cmekSettings : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["indexConfigs"] = state ? state.indexConfigs : undefined;
            resourceInputs["lifecycleState"] = state ? state.lifecycleState : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["retentionDays"] = state ? state.retentionDays : undefined;
        } else {
            const args = argsOrState as LoggingBillingAccountBucketConfigArgs | undefined;
            if ((!args || args.billingAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccount'");
            }
            if ((!args || args.bucketId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucketId'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["billingAccount"] = args ? args.billingAccount : undefined;
            resourceInputs["bucketId"] = args ? args.bucketId : undefined;
            resourceInputs["cmekSettings"] = args ? args.cmekSettings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["indexConfigs"] = args ? args.indexConfigs : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["lifecycleState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingBillingAccountBucketConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingBillingAccountBucketConfig resources.
 */
export interface LoggingBillingAccountBucketConfigState {
    /**
     * The parent resource that contains the logging bucket.
     */
    billingAccount?: pulumi.Input<string>;
    /**
     * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
     */
    bucketId?: pulumi.Input<string>;
    /**
     * The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
     * key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
     * updating the log bucket. Changing the KMS key is allowed.
     */
    cmekSettings?: pulumi.Input<inputs.LoggingBillingAccountBucketConfigCmekSettings>;
    /**
     * An optional description for this bucket.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of indexed fields and related configuration data.
     */
    indexConfigs?: pulumi.Input<pulumi.Input<inputs.LoggingBillingAccountBucketConfigIndexConfig>[]>;
    /**
     * The bucket's lifecycle such as active or deleted.
     */
    lifecycleState?: pulumi.Input<string>;
    /**
     * The location of the bucket.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the bucket
     */
    name?: pulumi.Input<string>;
    /**
     * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum
     * retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be
     * used.
     */
    retentionDays?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a LoggingBillingAccountBucketConfig resource.
 */
export interface LoggingBillingAccountBucketConfigArgs {
    /**
     * The parent resource that contains the logging bucket.
     */
    billingAccount: pulumi.Input<string>;
    /**
     * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
     */
    bucketId: pulumi.Input<string>;
    /**
     * The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
     * key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
     * updating the log bucket. Changing the KMS key is allowed.
     */
    cmekSettings?: pulumi.Input<inputs.LoggingBillingAccountBucketConfigCmekSettings>;
    /**
     * An optional description for this bucket.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of indexed fields and related configuration data.
     */
    indexConfigs?: pulumi.Input<pulumi.Input<inputs.LoggingBillingAccountBucketConfigIndexConfig>[]>;
    /**
     * The location of the bucket.
     */
    location: pulumi.Input<string>;
    /**
     * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum
     * retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be
     * used.
     */
    retentionDays?: pulumi.Input<number>;
}
