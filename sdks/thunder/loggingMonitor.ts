// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoggingMonitor extends pulumi.CustomResource {
    /**
     * Get an existing LoggingMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingMonitorState, opts?: pulumi.CustomResourceOptions): LoggingMonitor {
        return new LoggingMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/loggingMonitor:LoggingMonitor';

    /**
     * Returns true if the given object is an instance of LoggingMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingMonitor.__pulumiType;
    }

    /**
     * 'disable': Do not send log to monitor; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    public readonly monitorLevelname!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a LoggingMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LoggingMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingMonitorArgs | LoggingMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingMonitorState | undefined;
            resourceInputs["monitorLevelname"] = state ? state.monitorLevelname : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as LoggingMonitorArgs | undefined;
            resourceInputs["monitorLevelname"] = args ? args.monitorLevelname : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingMonitor resources.
 */
export interface LoggingMonitorState {
    /**
     * 'disable': Do not send log to monitor; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    monitorLevelname?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoggingMonitor resource.
 */
export interface LoggingMonitorArgs {
    /**
     * 'disable': Do not send log to monitor; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    monitorLevelname?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
