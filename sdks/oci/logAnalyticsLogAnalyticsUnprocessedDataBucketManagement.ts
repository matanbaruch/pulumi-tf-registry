// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement extends pulumi.CustomResource {
    /**
     * Get an existing LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementState, opts?: pulumi.CustomResourceOptions): LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement {
        return new LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/logAnalyticsLogAnalyticsUnprocessedDataBucketManagement:LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement';

    /**
     * Returns true if the given object is an instance of LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.__pulumiType;
    }

    public readonly bucket!: pulumi.Output<string>;
    public readonly isEnabled!: pulumi.Output<boolean>;
    public readonly namespace!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts | undefined>;

    /**
     * Create a LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementArgs | LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["isEnabled"] = state ? state.isEnabled : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resources.
 */
export interface LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementState {
    bucket?: pulumi.Input<string>;
    isEnabled?: pulumi.Input<boolean>;
    namespace?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts>;
}

/**
 * The set of arguments for constructing a LogAnalyticsLogAnalyticsUnprocessedDataBucketManagement resource.
 */
export interface LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementArgs {
    bucket: pulumi.Input<string>;
    isEnabled?: pulumi.Input<boolean>;
    namespace: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogAnalyticsLogAnalyticsUnprocessedDataBucketManagementTimeouts>;
}
