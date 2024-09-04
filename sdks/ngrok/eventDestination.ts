// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EventDestination extends pulumi.CustomResource {
    /**
     * Get an existing EventDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventDestinationState, opts?: pulumi.CustomResourceOptions): EventDestination {
        return new EventDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ngrok:index/eventDestination:EventDestination';

    /**
     * Returns true if the given object is an instance of EventDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventDestination.__pulumiType;
    }

    /**
     * Human-readable description of the Event Destination. Optional, max 255 bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The output format you would like to serialize events into when sending to their target. Currently the only accepted
     * value is `JSON`.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes.
     */
    public readonly metadata!: pulumi.Output<string | undefined>;
    /**
     * An object that encapsulates where and how to send your events. An event destination must contain exactly one of the
     * following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`.
     */
    public readonly targets!: pulumi.Output<outputs.EventDestinationTarget[] | undefined>;
    public readonly verifyWithTestEvent!: pulumi.Output<boolean | undefined>;

    /**
     * Create a EventDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EventDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventDestinationArgs | EventDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventDestinationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["verifyWithTestEvent"] = state ? state.verifyWithTestEvent : undefined;
        } else {
            const args = argsOrState as EventDestinationArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["verifyWithTestEvent"] = args ? args.verifyWithTestEvent : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EventDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EventDestination resources.
 */
export interface EventDestinationState {
    /**
     * Human-readable description of the Event Destination. Optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * The output format you would like to serialize events into when sending to their target. Currently the only accepted
     * value is `JSON`.
     */
    format?: pulumi.Input<string>;
    /**
     * Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
    /**
     * An object that encapsulates where and how to send your events. An event destination must contain exactly one of the
     * following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.EventDestinationTarget>[]>;
    verifyWithTestEvent?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EventDestination resource.
 */
export interface EventDestinationArgs {
    /**
     * Human-readable description of the Event Destination. Optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * The output format you would like to serialize events into when sending to their target. Currently the only accepted
     * value is `JSON`.
     */
    format?: pulumi.Input<string>;
    /**
     * Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
    /**
     * An object that encapsulates where and how to send your events. An event destination must contain exactly one of the
     * following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.EventDestinationTarget>[]>;
    verifyWithTestEvent?: pulumi.Input<boolean>;
}
