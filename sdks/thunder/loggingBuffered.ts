// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoggingBuffered extends pulumi.CustomResource {
    /**
     * Get an existing LoggingBuffered resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingBufferedState, opts?: pulumi.CustomResourceOptions): LoggingBuffered {
        return new LoggingBuffered(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/loggingBuffered:LoggingBuffered';

    /**
     * Returns true if the given object is an instance of LoggingBuffered.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingBuffered {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingBuffered.__pulumiType;
    }

    /**
     * Logging buffer size (in items), default 30000
     */
    public readonly buffersize!: pulumi.Output<number | undefined>;
    /**
     * 'disable': Do not send log to buffer; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    public readonly levelname!: pulumi.Output<string | undefined>;
    /**
     * Logging buffer size (in items), default 3000
     */
    public readonly partitionBuffersize!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a LoggingBuffered resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LoggingBufferedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingBufferedArgs | LoggingBufferedState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingBufferedState | undefined;
            resourceInputs["buffersize"] = state ? state.buffersize : undefined;
            resourceInputs["levelname"] = state ? state.levelname : undefined;
            resourceInputs["partitionBuffersize"] = state ? state.partitionBuffersize : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as LoggingBufferedArgs | undefined;
            resourceInputs["buffersize"] = args ? args.buffersize : undefined;
            resourceInputs["levelname"] = args ? args.levelname : undefined;
            resourceInputs["partitionBuffersize"] = args ? args.partitionBuffersize : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingBuffered.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingBuffered resources.
 */
export interface LoggingBufferedState {
    /**
     * Logging buffer size (in items), default 30000
     */
    buffersize?: pulumi.Input<number>;
    /**
     * 'disable': Do not send log to buffer; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    levelname?: pulumi.Input<string>;
    /**
     * Logging buffer size (in items), default 3000
     */
    partitionBuffersize?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoggingBuffered resource.
 */
export interface LoggingBufferedArgs {
    /**
     * Logging buffer size (in items), default 30000
     */
    buffersize?: pulumi.Input<number>;
    /**
     * 'disable': Do not send log to buffer; 'emergency': System unusable log messages (severity=0); 'alert': Action must be
     * taken immediately (severity=1); 'critical': Critical conditions (severity=2); 'error': Error conditions (severity=3);
     * 'warning': Warning conditions (severity=4); 'notification': Normal but significant conditions (severity=5);
     * 'information': Informational messages (severity=6); 'debugging': Debug level messages (severity=7);
     */
    levelname?: pulumi.Input<string>;
    /**
     * Logging buffer size (in items), default 3000
     */
    partitionBuffersize?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
