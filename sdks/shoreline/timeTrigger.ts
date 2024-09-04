// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TimeTrigger extends pulumi.CustomResource {
    /**
     * Get an existing TimeTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeTriggerState, opts?: pulumi.CustomResourceOptions): TimeTrigger {
        return new TimeTrigger(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'shoreline:index/timeTrigger:TimeTrigger';

    /**
     * Returns true if the given object is an instance of TimeTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TimeTrigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TimeTrigger.__pulumiType;
    }

    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * When the trigger condition stops firing. (defaults to unset, e.g. no stop date). The accepted format is ISO8601, e.g.
     * '2029-02-17T08:08:01'.
     */
    public readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    public readonly fireQuery!: pulumi.Output<string>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * When the trigger condition starts firing (defaults to creation/update time of the trigger). The accepted format is
     * ISO8601, e.g. '2024-02-17T08:08:01'.
     */
    public readonly startDate!: pulumi.Output<string | undefined>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TimeTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeTriggerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TimeTriggerArgs | TimeTriggerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TimeTriggerState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["endDate"] = state ? state.endDate : undefined;
            resourceInputs["fireQuery"] = state ? state.fireQuery : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["startDate"] = state ? state.startDate : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as TimeTriggerArgs | undefined;
            if ((!args || args.fireQuery === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fireQuery'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["endDate"] = args ? args.endDate : undefined;
            resourceInputs["fireQuery"] = args ? args.fireQuery : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TimeTrigger.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TimeTrigger resources.
 */
export interface TimeTriggerState {
    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When the trigger condition stops firing. (defaults to unset, e.g. no stop date). The accepted format is ISO8601, e.g.
     * '2029-02-17T08:08:01'.
     */
    endDate?: pulumi.Input<string>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    fireQuery?: pulumi.Input<string>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * When the trigger condition starts firing (defaults to creation/update time of the trigger). The accepted format is
     * ISO8601, e.g. '2024-02-17T08:08:01'.
     */
    startDate?: pulumi.Input<string>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TimeTrigger resource.
 */
export interface TimeTriggerArgs {
    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When the trigger condition stops firing. (defaults to unset, e.g. no stop date). The accepted format is ISO8601, e.g.
     * '2029-02-17T08:08:01'.
     */
    endDate?: pulumi.Input<string>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    fireQuery: pulumi.Input<string>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * When the trigger condition starts firing (defaults to creation/update time of the trigger). The accepted format is
     * ISO8601, e.g. '2024-02-17T08:08:01'.
     */
    startDate?: pulumi.Input<string>;
}
