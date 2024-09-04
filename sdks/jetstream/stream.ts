// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Stream extends pulumi.CustomResource {
    /**
     * Get an existing Stream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamState, opts?: pulumi.CustomResourceOptions): Stream {
        return new Stream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'jetstream:index/stream:Stream';

    /**
     * Returns true if the given object is an instance of Stream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Stream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Stream.__pulumiType;
    }

    /**
     * If the Stream should support confirming receiving messages via acknowledgements
     */
    public readonly ack!: pulumi.Output<boolean | undefined>;
    /**
     * Allow higher performance, direct access to get individual messages via the $JS.DS.GET API
     */
    public readonly allowDirect!: pulumi.Output<boolean | undefined>;
    /**
     * Allows the use of the Nats-Rollup header to replace all contents of a stream, or subject in a stream, with a single new
     * message
     */
    public readonly allowRollupHdrs!: pulumi.Output<boolean | undefined>;
    /**
     * Optional compression algorithm used for the Stream
     */
    public readonly compression!: pulumi.Output<string | undefined>;
    /**
     * Restricts the ability to delete messages from a stream via the API. Cannot be changed once set to true
     */
    public readonly denyDelete!: pulumi.Output<boolean | undefined>;
    /**
     * Restricts the ability to purge messages from a stream via the API. Cannot be change once set to true
     */
    public readonly denyPurge!: pulumi.Output<boolean | undefined>;
    /**
     * Contains additional information about this stream
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * When a Stream reach it's limits either old messages are deleted or new ones are denied
     */
    public readonly discard!: pulumi.Output<string | undefined>;
    /**
     * When discard policy is new and the stream is one with max messages per subject set, this will apply the new behavior to
     * every subject. Essentially turning discard new from maximum number of subjects into maximum number of messages in a
     * subject
     */
    public readonly discardNewPerSubject!: pulumi.Output<boolean | undefined>;
    /**
     * The size of the duplicate tracking windows, duration specified in seconds
     */
    public readonly duplicateWindow!: pulumi.Output<number | undefined>;
    /**
     * The maximum oldest message that can be kept in the stream, duration specified in seconds
     */
    public readonly maxAge!: pulumi.Output<number | undefined>;
    /**
     * The maximum size of all messages that can be kept in the stream
     */
    public readonly maxBytes!: pulumi.Output<number | undefined>;
    /**
     * Number of consumers this stream allows
     */
    public readonly maxConsumers!: pulumi.Output<number | undefined>;
    /**
     * The maximum individual message size that the stream will accept
     */
    public readonly maxMsgSize!: pulumi.Output<number | undefined>;
    /**
     * The maximum amount of messages that can be kept in the stream
     */
    public readonly maxMsgs!: pulumi.Output<number | undefined>;
    /**
     * The maximum amount of messages that can be kept in the stream on a per-subject basis
     */
    public readonly maxMsgsPerSubject!: pulumi.Output<number | undefined>;
    /**
     * Free form metadata about the stream
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies a remote stream to mirror into this one
     */
    public readonly mirror!: pulumi.Output<outputs.StreamMirror | undefined>;
    /**
     * The name of the stream
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Place the stream in a specific cluster, influenced by placement_tags
     */
    public readonly placementCluster!: pulumi.Output<string | undefined>;
    /**
     * Place the stream only on servers with these tags
     */
    public readonly placementTags!: pulumi.Output<string[] | undefined>;
    /**
     * How many replicas of the data to keep in a clustered environment
     */
    public readonly replicas!: pulumi.Output<number | undefined>;
    /**
     * The destination to publish messages to
     */
    public readonly republishDestination!: pulumi.Output<string | undefined>;
    /**
     * Republish only message headers, no bodies
     */
    public readonly republishHeadersOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Republish messages to republish_destination
     */
    public readonly republishSource!: pulumi.Output<string | undefined>;
    /**
     * The retention policy to apply over and above max_msgs, max_bytes and max_age
     */
    public readonly retention!: pulumi.Output<string | undefined>;
    /**
     * Specifies a list of streams to source into this one
     */
    public readonly sources!: pulumi.Output<outputs.StreamSource[] | undefined>;
    /**
     * The storage engine to use to back the stream
     */
    public readonly storage!: pulumi.Output<string | undefined>;
    /**
     * Subject transform to apply to matching messages
     */
    public readonly subjectTransform!: pulumi.Output<outputs.StreamSubjectTransform | undefined>;
    /**
     * The list of subjects that will be consumed by the Stream, may be empty when sources and mirrors are present
     */
    public readonly subjects!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Stream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: StreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StreamArgs | StreamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StreamState | undefined;
            resourceInputs["ack"] = state ? state.ack : undefined;
            resourceInputs["allowDirect"] = state ? state.allowDirect : undefined;
            resourceInputs["allowRollupHdrs"] = state ? state.allowRollupHdrs : undefined;
            resourceInputs["compression"] = state ? state.compression : undefined;
            resourceInputs["denyDelete"] = state ? state.denyDelete : undefined;
            resourceInputs["denyPurge"] = state ? state.denyPurge : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["discard"] = state ? state.discard : undefined;
            resourceInputs["discardNewPerSubject"] = state ? state.discardNewPerSubject : undefined;
            resourceInputs["duplicateWindow"] = state ? state.duplicateWindow : undefined;
            resourceInputs["maxAge"] = state ? state.maxAge : undefined;
            resourceInputs["maxBytes"] = state ? state.maxBytes : undefined;
            resourceInputs["maxConsumers"] = state ? state.maxConsumers : undefined;
            resourceInputs["maxMsgSize"] = state ? state.maxMsgSize : undefined;
            resourceInputs["maxMsgs"] = state ? state.maxMsgs : undefined;
            resourceInputs["maxMsgsPerSubject"] = state ? state.maxMsgsPerSubject : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["mirror"] = state ? state.mirror : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["placementCluster"] = state ? state.placementCluster : undefined;
            resourceInputs["placementTags"] = state ? state.placementTags : undefined;
            resourceInputs["replicas"] = state ? state.replicas : undefined;
            resourceInputs["republishDestination"] = state ? state.republishDestination : undefined;
            resourceInputs["republishHeadersOnly"] = state ? state.republishHeadersOnly : undefined;
            resourceInputs["republishSource"] = state ? state.republishSource : undefined;
            resourceInputs["retention"] = state ? state.retention : undefined;
            resourceInputs["sources"] = state ? state.sources : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["subjectTransform"] = state ? state.subjectTransform : undefined;
            resourceInputs["subjects"] = state ? state.subjects : undefined;
        } else {
            const args = argsOrState as StreamArgs | undefined;
            resourceInputs["ack"] = args ? args.ack : undefined;
            resourceInputs["allowDirect"] = args ? args.allowDirect : undefined;
            resourceInputs["allowRollupHdrs"] = args ? args.allowRollupHdrs : undefined;
            resourceInputs["compression"] = args ? args.compression : undefined;
            resourceInputs["denyDelete"] = args ? args.denyDelete : undefined;
            resourceInputs["denyPurge"] = args ? args.denyPurge : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["discard"] = args ? args.discard : undefined;
            resourceInputs["discardNewPerSubject"] = args ? args.discardNewPerSubject : undefined;
            resourceInputs["duplicateWindow"] = args ? args.duplicateWindow : undefined;
            resourceInputs["maxAge"] = args ? args.maxAge : undefined;
            resourceInputs["maxBytes"] = args ? args.maxBytes : undefined;
            resourceInputs["maxConsumers"] = args ? args.maxConsumers : undefined;
            resourceInputs["maxMsgSize"] = args ? args.maxMsgSize : undefined;
            resourceInputs["maxMsgs"] = args ? args.maxMsgs : undefined;
            resourceInputs["maxMsgsPerSubject"] = args ? args.maxMsgsPerSubject : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mirror"] = args ? args.mirror : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["placementCluster"] = args ? args.placementCluster : undefined;
            resourceInputs["placementTags"] = args ? args.placementTags : undefined;
            resourceInputs["replicas"] = args ? args.replicas : undefined;
            resourceInputs["republishDestination"] = args ? args.republishDestination : undefined;
            resourceInputs["republishHeadersOnly"] = args ? args.republishHeadersOnly : undefined;
            resourceInputs["republishSource"] = args ? args.republishSource : undefined;
            resourceInputs["retention"] = args ? args.retention : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["subjectTransform"] = args ? args.subjectTransform : undefined;
            resourceInputs["subjects"] = args ? args.subjects : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Stream.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Stream resources.
 */
export interface StreamState {
    /**
     * If the Stream should support confirming receiving messages via acknowledgements
     */
    ack?: pulumi.Input<boolean>;
    /**
     * Allow higher performance, direct access to get individual messages via the $JS.DS.GET API
     */
    allowDirect?: pulumi.Input<boolean>;
    /**
     * Allows the use of the Nats-Rollup header to replace all contents of a stream, or subject in a stream, with a single new
     * message
     */
    allowRollupHdrs?: pulumi.Input<boolean>;
    /**
     * Optional compression algorithm used for the Stream
     */
    compression?: pulumi.Input<string>;
    /**
     * Restricts the ability to delete messages from a stream via the API. Cannot be changed once set to true
     */
    denyDelete?: pulumi.Input<boolean>;
    /**
     * Restricts the ability to purge messages from a stream via the API. Cannot be change once set to true
     */
    denyPurge?: pulumi.Input<boolean>;
    /**
     * Contains additional information about this stream
     */
    description?: pulumi.Input<string>;
    /**
     * When a Stream reach it's limits either old messages are deleted or new ones are denied
     */
    discard?: pulumi.Input<string>;
    /**
     * When discard policy is new and the stream is one with max messages per subject set, this will apply the new behavior to
     * every subject. Essentially turning discard new from maximum number of subjects into maximum number of messages in a
     * subject
     */
    discardNewPerSubject?: pulumi.Input<boolean>;
    /**
     * The size of the duplicate tracking windows, duration specified in seconds
     */
    duplicateWindow?: pulumi.Input<number>;
    /**
     * The maximum oldest message that can be kept in the stream, duration specified in seconds
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The maximum size of all messages that can be kept in the stream
     */
    maxBytes?: pulumi.Input<number>;
    /**
     * Number of consumers this stream allows
     */
    maxConsumers?: pulumi.Input<number>;
    /**
     * The maximum individual message size that the stream will accept
     */
    maxMsgSize?: pulumi.Input<number>;
    /**
     * The maximum amount of messages that can be kept in the stream
     */
    maxMsgs?: pulumi.Input<number>;
    /**
     * The maximum amount of messages that can be kept in the stream on a per-subject basis
     */
    maxMsgsPerSubject?: pulumi.Input<number>;
    /**
     * Free form metadata about the stream
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a remote stream to mirror into this one
     */
    mirror?: pulumi.Input<inputs.StreamMirror>;
    /**
     * The name of the stream
     */
    name?: pulumi.Input<string>;
    /**
     * Place the stream in a specific cluster, influenced by placement_tags
     */
    placementCluster?: pulumi.Input<string>;
    /**
     * Place the stream only on servers with these tags
     */
    placementTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * How many replicas of the data to keep in a clustered environment
     */
    replicas?: pulumi.Input<number>;
    /**
     * The destination to publish messages to
     */
    republishDestination?: pulumi.Input<string>;
    /**
     * Republish only message headers, no bodies
     */
    republishHeadersOnly?: pulumi.Input<boolean>;
    /**
     * Republish messages to republish_destination
     */
    republishSource?: pulumi.Input<string>;
    /**
     * The retention policy to apply over and above max_msgs, max_bytes and max_age
     */
    retention?: pulumi.Input<string>;
    /**
     * Specifies a list of streams to source into this one
     */
    sources?: pulumi.Input<pulumi.Input<inputs.StreamSource>[]>;
    /**
     * The storage engine to use to back the stream
     */
    storage?: pulumi.Input<string>;
    /**
     * Subject transform to apply to matching messages
     */
    subjectTransform?: pulumi.Input<inputs.StreamSubjectTransform>;
    /**
     * The list of subjects that will be consumed by the Stream, may be empty when sources and mirrors are present
     */
    subjects?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Stream resource.
 */
export interface StreamArgs {
    /**
     * If the Stream should support confirming receiving messages via acknowledgements
     */
    ack?: pulumi.Input<boolean>;
    /**
     * Allow higher performance, direct access to get individual messages via the $JS.DS.GET API
     */
    allowDirect?: pulumi.Input<boolean>;
    /**
     * Allows the use of the Nats-Rollup header to replace all contents of a stream, or subject in a stream, with a single new
     * message
     */
    allowRollupHdrs?: pulumi.Input<boolean>;
    /**
     * Optional compression algorithm used for the Stream
     */
    compression?: pulumi.Input<string>;
    /**
     * Restricts the ability to delete messages from a stream via the API. Cannot be changed once set to true
     */
    denyDelete?: pulumi.Input<boolean>;
    /**
     * Restricts the ability to purge messages from a stream via the API. Cannot be change once set to true
     */
    denyPurge?: pulumi.Input<boolean>;
    /**
     * Contains additional information about this stream
     */
    description?: pulumi.Input<string>;
    /**
     * When a Stream reach it's limits either old messages are deleted or new ones are denied
     */
    discard?: pulumi.Input<string>;
    /**
     * When discard policy is new and the stream is one with max messages per subject set, this will apply the new behavior to
     * every subject. Essentially turning discard new from maximum number of subjects into maximum number of messages in a
     * subject
     */
    discardNewPerSubject?: pulumi.Input<boolean>;
    /**
     * The size of the duplicate tracking windows, duration specified in seconds
     */
    duplicateWindow?: pulumi.Input<number>;
    /**
     * The maximum oldest message that can be kept in the stream, duration specified in seconds
     */
    maxAge?: pulumi.Input<number>;
    /**
     * The maximum size of all messages that can be kept in the stream
     */
    maxBytes?: pulumi.Input<number>;
    /**
     * Number of consumers this stream allows
     */
    maxConsumers?: pulumi.Input<number>;
    /**
     * The maximum individual message size that the stream will accept
     */
    maxMsgSize?: pulumi.Input<number>;
    /**
     * The maximum amount of messages that can be kept in the stream
     */
    maxMsgs?: pulumi.Input<number>;
    /**
     * The maximum amount of messages that can be kept in the stream on a per-subject basis
     */
    maxMsgsPerSubject?: pulumi.Input<number>;
    /**
     * Free form metadata about the stream
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies a remote stream to mirror into this one
     */
    mirror?: pulumi.Input<inputs.StreamMirror>;
    /**
     * The name of the stream
     */
    name?: pulumi.Input<string>;
    /**
     * Place the stream in a specific cluster, influenced by placement_tags
     */
    placementCluster?: pulumi.Input<string>;
    /**
     * Place the stream only on servers with these tags
     */
    placementTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * How many replicas of the data to keep in a clustered environment
     */
    replicas?: pulumi.Input<number>;
    /**
     * The destination to publish messages to
     */
    republishDestination?: pulumi.Input<string>;
    /**
     * Republish only message headers, no bodies
     */
    republishHeadersOnly?: pulumi.Input<boolean>;
    /**
     * Republish messages to republish_destination
     */
    republishSource?: pulumi.Input<string>;
    /**
     * The retention policy to apply over and above max_msgs, max_bytes and max_age
     */
    retention?: pulumi.Input<string>;
    /**
     * Specifies a list of streams to source into this one
     */
    sources?: pulumi.Input<pulumi.Input<inputs.StreamSource>[]>;
    /**
     * The storage engine to use to back the stream
     */
    storage?: pulumi.Input<string>;
    /**
     * Subject transform to apply to matching messages
     */
    subjectTransform?: pulumi.Input<inputs.StreamSubjectTransform>;
    /**
     * The list of subjects that will be consumed by the Stream, may be empty when sources and mirrors are present
     */
    subjects?: pulumi.Input<pulumi.Input<string>[]>;
}
