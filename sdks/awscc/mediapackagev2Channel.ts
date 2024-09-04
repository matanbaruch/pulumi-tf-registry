// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Mediapackagev2Channel extends pulumi.CustomResource {
    /**
     * Get an existing Mediapackagev2Channel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Mediapackagev2ChannelState, opts?: pulumi.CustomResourceOptions): Mediapackagev2Channel {
        return new Mediapackagev2Channel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/mediapackagev2Channel:Mediapackagev2Channel';

    /**
     * Returns true if the given object is an instance of Mediapackagev2Channel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Mediapackagev2Channel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Mediapackagev2Channel.__pulumiType;
    }

    /**
     * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly channelGroupName!: pulumi.Output<string>;
    public readonly channelName!: pulumi.Output<string>;
    /**
     * <p>The date and time the channel was created.</p>
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * <p>Enter any descriptive text that helps you to identify the channel.</p>
     */
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly ingestEndpointUrls!: pulumi.Output<string[]>;
    /**
     * <p>The list of ingest endpoints.</p>
     */
    public /*out*/ readonly ingestEndpoints!: pulumi.Output<outputs.Mediapackagev2ChannelIngestEndpoint[]>;
    public readonly inputType!: pulumi.Output<string>;
    /**
     * <p>The date and time the channel was modified.</p>
     */
    public /*out*/ readonly modifiedAt!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.Mediapackagev2ChannelTag[]>;

    /**
     * Create a Mediapackagev2Channel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Mediapackagev2ChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Mediapackagev2ChannelArgs | Mediapackagev2ChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Mediapackagev2ChannelState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["channelGroupName"] = state ? state.channelGroupName : undefined;
            resourceInputs["channelName"] = state ? state.channelName : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ingestEndpointUrls"] = state ? state.ingestEndpointUrls : undefined;
            resourceInputs["ingestEndpoints"] = state ? state.ingestEndpoints : undefined;
            resourceInputs["inputType"] = state ? state.inputType : undefined;
            resourceInputs["modifiedAt"] = state ? state.modifiedAt : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as Mediapackagev2ChannelArgs | undefined;
            if ((!args || args.channelGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelGroupName'");
            }
            if ((!args || args.channelName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelName'");
            }
            resourceInputs["channelGroupName"] = args ? args.channelGroupName : undefined;
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["inputType"] = args ? args.inputType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["ingestEndpointUrls"] = undefined /*out*/;
            resourceInputs["ingestEndpoints"] = undefined /*out*/;
            resourceInputs["modifiedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Mediapackagev2Channel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Mediapackagev2Channel resources.
 */
export interface Mediapackagev2ChannelState {
    /**
     * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
     */
    arn?: pulumi.Input<string>;
    channelGroupName?: pulumi.Input<string>;
    channelName?: pulumi.Input<string>;
    /**
     * <p>The date and time the channel was created.</p>
     */
    createdAt?: pulumi.Input<string>;
    /**
     * <p>Enter any descriptive text that helps you to identify the channel.</p>
     */
    description?: pulumi.Input<string>;
    ingestEndpointUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * <p>The list of ingest endpoints.</p>
     */
    ingestEndpoints?: pulumi.Input<pulumi.Input<inputs.Mediapackagev2ChannelIngestEndpoint>[]>;
    inputType?: pulumi.Input<string>;
    /**
     * <p>The date and time the channel was modified.</p>
     */
    modifiedAt?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.Mediapackagev2ChannelTag>[]>;
}

/**
 * The set of arguments for constructing a Mediapackagev2Channel resource.
 */
export interface Mediapackagev2ChannelArgs {
    channelGroupName: pulumi.Input<string>;
    channelName: pulumi.Input<string>;
    /**
     * <p>Enter any descriptive text that helps you to identify the channel.</p>
     */
    description?: pulumi.Input<string>;
    inputType?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.Mediapackagev2ChannelTag>[]>;
}
