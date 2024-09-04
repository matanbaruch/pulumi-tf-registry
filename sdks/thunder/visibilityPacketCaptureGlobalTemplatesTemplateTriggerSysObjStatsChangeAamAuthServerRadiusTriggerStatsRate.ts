// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Accounting Failure
     */
    public readonly accountingFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Authentication Failure
     */
    public readonly authenFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Authorization Failure
     */
    public readonly authorizeFailure!: pulumi.Output<number | undefined>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Job Start Error
     */
    public readonly jobStartError!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Total Other Error
     */
    public readonly otherError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Polling Control Error
     */
    public readonly pollingControlError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    public readonly requestDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    public readonly responseError!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    public readonly responseFailure!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    public readonly responseTimeout!: pulumi.Output<number | undefined>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total Timeout
     */
    public readonly timeoutError!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateState | undefined;
            resourceInputs["accountingFailure"] = state ? state.accountingFailure : undefined;
            resourceInputs["authenFailure"] = state ? state.authenFailure : undefined;
            resourceInputs["authorizeFailure"] = state ? state.authorizeFailure : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["jobStartError"] = state ? state.jobStartError : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["otherError"] = state ? state.otherError : undefined;
            resourceInputs["pollingControlError"] = state ? state.pollingControlError : undefined;
            resourceInputs["requestDropped"] = state ? state.requestDropped : undefined;
            resourceInputs["responseError"] = state ? state.responseError : undefined;
            resourceInputs["responseFailure"] = state ? state.responseFailure : undefined;
            resourceInputs["responseTimeout"] = state ? state.responseTimeout : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["timeoutError"] = state ? state.timeoutError : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateArgs | undefined;
            resourceInputs["accountingFailure"] = args ? args.accountingFailure : undefined;
            resourceInputs["authenFailure"] = args ? args.authenFailure : undefined;
            resourceInputs["authorizeFailure"] = args ? args.authorizeFailure : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["jobStartError"] = args ? args.jobStartError : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["otherError"] = args ? args.otherError : undefined;
            resourceInputs["pollingControlError"] = args ? args.pollingControlError : undefined;
            resourceInputs["requestDropped"] = args ? args.requestDropped : undefined;
            resourceInputs["responseError"] = args ? args.responseError : undefined;
            resourceInputs["responseFailure"] = args ? args.responseFailure : undefined;
            resourceInputs["responseTimeout"] = args ? args.responseTimeout : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["timeoutError"] = args ? args.timeoutError : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateState {
    /**
     * Enable automatic packet-capture for Accounting Failure
     */
    accountingFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Authentication Failure
     */
    authenFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Authorization Failure
     */
    authorizeFailure?: pulumi.Input<number>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Job Start Error
     */
    jobStartError?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Total Other Error
     */
    otherError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Polling Control Error
     */
    pollingControlError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    requestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    responseError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    responseFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    responseTimeout?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout
     */
    timeoutError?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerRadiusTriggerStatsRateArgs {
    /**
     * Enable automatic packet-capture for Accounting Failure
     */
    accountingFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Authentication Failure
     */
    authenFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Authorization Failure
     */
    authorizeFailure?: pulumi.Input<number>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Job Start Error
     */
    jobStartError?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Total Other Error
     */
    otherError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Polling Control Error
     */
    pollingControlError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Dropped Request
     */
    requestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Error Response
     */
    responseError?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Failure Response
     */
    responseFailure?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout Response
     */
    responseTimeout?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total Timeout
     */
    timeoutError?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
