// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatastreamStream extends pulumi.CustomResource {
    /**
     * Get an existing DatastreamStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatastreamStreamState, opts?: pulumi.CustomResourceOptions): DatastreamStream {
        return new DatastreamStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/datastreamStream:DatastreamStream';

    /**
     * Returns true if the given object is an instance of DatastreamStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatastreamStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatastreamStream.__pulumiType;
    }

    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    public readonly backfillAll!: pulumi.Output<outputs.DatastreamStreamBackfillAll | undefined>;
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    public readonly backfillNone!: pulumi.Output<outputs.DatastreamStreamBackfillNone | undefined>;
    /**
     * Create the stream without validating it.
     */
    public readonly createWithoutValidation!: pulumi.Output<boolean | undefined>;
    /**
     * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be
     * encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    public readonly customerManagedEncryptionKey!: pulumi.Output<string | undefined>;
    /**
     * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
     */
    public readonly desiredState!: pulumi.Output<string | undefined>;
    /**
     * Destination connection profile configuration.
     */
    public readonly destinationConfig!: pulumi.Output<outputs.DatastreamStreamDestinationConfig>;
    /**
     * Display name.
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Labels. **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please
     * refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the location this stream is located in.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The stream's name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Source connection profile configuration.
     */
    public readonly sourceConfig!: pulumi.Output<outputs.DatastreamStreamSourceConfig>;
    /**
     * The state of the stream.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The stream identifier.
     */
    public readonly streamId!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.DatastreamStreamTimeouts | undefined>;

    /**
     * Create a DatastreamStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatastreamStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatastreamStreamArgs | DatastreamStreamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatastreamStreamState | undefined;
            resourceInputs["backfillAll"] = state ? state.backfillAll : undefined;
            resourceInputs["backfillNone"] = state ? state.backfillNone : undefined;
            resourceInputs["createWithoutValidation"] = state ? state.createWithoutValidation : undefined;
            resourceInputs["customerManagedEncryptionKey"] = state ? state.customerManagedEncryptionKey : undefined;
            resourceInputs["desiredState"] = state ? state.desiredState : undefined;
            resourceInputs["destinationConfig"] = state ? state.destinationConfig : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["sourceConfig"] = state ? state.sourceConfig : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["streamId"] = state ? state.streamId : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatastreamStreamArgs | undefined;
            if ((!args || args.destinationConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationConfig'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.sourceConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceConfig'");
            }
            if ((!args || args.streamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamId'");
            }
            resourceInputs["backfillAll"] = args ? args.backfillAll : undefined;
            resourceInputs["backfillNone"] = args ? args.backfillNone : undefined;
            resourceInputs["createWithoutValidation"] = args ? args.createWithoutValidation : undefined;
            resourceInputs["customerManagedEncryptionKey"] = args ? args.customerManagedEncryptionKey : undefined;
            resourceInputs["desiredState"] = args ? args.desiredState : undefined;
            resourceInputs["destinationConfig"] = args ? args.destinationConfig : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["sourceConfig"] = args ? args.sourceConfig : undefined;
            resourceInputs["streamId"] = args ? args.streamId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatastreamStream.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatastreamStream resources.
 */
export interface DatastreamStreamState {
    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    backfillAll?: pulumi.Input<inputs.DatastreamStreamBackfillAll>;
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    backfillNone?: pulumi.Input<inputs.DatastreamStreamBackfillNone>;
    /**
     * Create the stream without validating it.
     */
    createWithoutValidation?: pulumi.Input<boolean>;
    /**
     * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be
     * encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    customerManagedEncryptionKey?: pulumi.Input<string>;
    /**
     * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
     */
    desiredState?: pulumi.Input<string>;
    /**
     * Destination connection profile configuration.
     */
    destinationConfig?: pulumi.Input<inputs.DatastreamStreamDestinationConfig>;
    /**
     * Display name.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Labels. **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please
     * refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the location this stream is located in.
     */
    location?: pulumi.Input<string>;
    /**
     * The stream's name.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Source connection profile configuration.
     */
    sourceConfig?: pulumi.Input<inputs.DatastreamStreamSourceConfig>;
    /**
     * The state of the stream.
     */
    state?: pulumi.Input<string>;
    /**
     * The stream identifier.
     */
    streamId?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DatastreamStreamTimeouts>;
}

/**
 * The set of arguments for constructing a DatastreamStream resource.
 */
export interface DatastreamStreamArgs {
    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    backfillAll?: pulumi.Input<inputs.DatastreamStreamBackfillAll>;
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    backfillNone?: pulumi.Input<inputs.DatastreamStreamBackfillNone>;
    /**
     * Create the stream without validating it.
     */
    createWithoutValidation?: pulumi.Input<boolean>;
    /**
     * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be
     * encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    customerManagedEncryptionKey?: pulumi.Input<string>;
    /**
     * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
     */
    desiredState?: pulumi.Input<string>;
    /**
     * Destination connection profile configuration.
     */
    destinationConfig: pulumi.Input<inputs.DatastreamStreamDestinationConfig>;
    /**
     * Display name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Labels. **Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please
     * refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the location this stream is located in.
     */
    location: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Source connection profile configuration.
     */
    sourceConfig: pulumi.Input<inputs.DatastreamStreamSourceConfig>;
    /**
     * The stream identifier.
     */
    streamId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatastreamStreamTimeouts>;
}
