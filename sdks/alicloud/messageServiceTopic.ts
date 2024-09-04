// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MessageServiceTopic extends pulumi.CustomResource {
    /**
     * Get an existing MessageServiceTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MessageServiceTopicState, opts?: pulumi.CustomResourceOptions): MessageServiceTopic {
        return new MessageServiceTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/messageServiceTopic:MessageServiceTopic';

    /**
     * Returns true if the given object is an instance of MessageServiceTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MessageServiceTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MessageServiceTopic.__pulumiType;
    }

    public readonly loggingEnabled!: pulumi.Output<boolean | undefined>;
    public readonly maxMessageSize!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.MessageServiceTopicTimeouts | undefined>;
    public readonly topicName!: pulumi.Output<string>;

    /**
     * Create a MessageServiceTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MessageServiceTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MessageServiceTopicArgs | MessageServiceTopicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MessageServiceTopicState | undefined;
            resourceInputs["loggingEnabled"] = state ? state.loggingEnabled : undefined;
            resourceInputs["maxMessageSize"] = state ? state.maxMessageSize : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["topicName"] = state ? state.topicName : undefined;
        } else {
            const args = argsOrState as MessageServiceTopicArgs | undefined;
            if ((!args || args.topicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["loggingEnabled"] = args ? args.loggingEnabled : undefined;
            resourceInputs["maxMessageSize"] = args ? args.maxMessageSize : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MessageServiceTopic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MessageServiceTopic resources.
 */
export interface MessageServiceTopicState {
    loggingEnabled?: pulumi.Input<boolean>;
    maxMessageSize?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.MessageServiceTopicTimeouts>;
    topicName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MessageServiceTopic resource.
 */
export interface MessageServiceTopicArgs {
    loggingEnabled?: pulumi.Input<boolean>;
    maxMessageSize?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.MessageServiceTopicTimeouts>;
    topicName: pulumi.Input<string>;
}
