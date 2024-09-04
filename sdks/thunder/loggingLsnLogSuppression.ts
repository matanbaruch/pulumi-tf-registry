// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoggingLsnLogSuppression extends pulumi.CustomResource {
    /**
     * Get an existing LoggingLsnLogSuppression resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingLsnLogSuppressionState, opts?: pulumi.CustomResourceOptions): LoggingLsnLogSuppression {
        return new LoggingLsnLogSuppression(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/loggingLsnLogSuppression:LoggingLsnLogSuppression';

    /**
     * Returns true if the given object is an instance of LoggingLsnLogSuppression.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingLsnLogSuppression {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingLsnLogSuppression.__pulumiType;
    }

    /**
     * Configure log suppression count (default: 100)
     */
    public readonly count1!: pulumi.Output<number | undefined>;
    /**
     * Log generation timeout(default: 30 seconds)
     */
    public readonly time!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a LoggingLsnLogSuppression resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LoggingLsnLogSuppressionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingLsnLogSuppressionArgs | LoggingLsnLogSuppressionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingLsnLogSuppressionState | undefined;
            resourceInputs["count1"] = state ? state.count1 : undefined;
            resourceInputs["time"] = state ? state.time : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as LoggingLsnLogSuppressionArgs | undefined;
            resourceInputs["count1"] = args ? args.count1 : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingLsnLogSuppression.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingLsnLogSuppression resources.
 */
export interface LoggingLsnLogSuppressionState {
    /**
     * Configure log suppression count (default: 100)
     */
    count1?: pulumi.Input<number>;
    /**
     * Log generation timeout(default: 30 seconds)
     */
    time?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoggingLsnLogSuppression resource.
 */
export interface LoggingLsnLogSuppressionArgs {
    /**
     * Configure log suppression count (default: 100)
     */
    count1?: pulumi.Input<number>;
    /**
     * Log generation timeout(default: 30 seconds)
     */
    time?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
