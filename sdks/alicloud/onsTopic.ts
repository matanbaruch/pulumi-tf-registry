// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OnsTopic extends pulumi.CustomResource {
    /**
     * Get an existing OnsTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OnsTopicState, opts?: pulumi.CustomResourceOptions): OnsTopic {
        return new OnsTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/onsTopic:OnsTopic';

    /**
     * Returns true if the given object is an instance of OnsTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OnsTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OnsTopic.__pulumiType;
    }

    public readonly instanceId!: pulumi.Output<string>;
    public readonly messageType!: pulumi.Output<number>;
    /**
     * @deprecated Deprecated
     */
    public readonly perm!: pulumi.Output<number>;
    public readonly remark!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.OnsTopicTimeouts | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly topic!: pulumi.Output<string>;
    public readonly topicName!: pulumi.Output<string>;

    /**
     * Create a OnsTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OnsTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OnsTopicArgs | OnsTopicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OnsTopicState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["messageType"] = state ? state.messageType : undefined;
            resourceInputs["perm"] = state ? state.perm : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["topic"] = state ? state.topic : undefined;
            resourceInputs["topicName"] = state ? state.topicName : undefined;
        } else {
            const args = argsOrState as OnsTopicArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.messageType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'messageType'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["messageType"] = args ? args.messageType : undefined;
            resourceInputs["perm"] = args ? args.perm : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["topic"] = args ? args.topic : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OnsTopic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OnsTopic resources.
 */
export interface OnsTopicState {
    instanceId?: pulumi.Input<string>;
    messageType?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    perm?: pulumi.Input<number>;
    remark?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.OnsTopicTimeouts>;
    /**
     * @deprecated Deprecated
     */
    topic?: pulumi.Input<string>;
    topicName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OnsTopic resource.
 */
export interface OnsTopicArgs {
    instanceId: pulumi.Input<string>;
    messageType: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    perm?: pulumi.Input<number>;
    remark?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.OnsTopicTimeouts>;
    /**
     * @deprecated Deprecated
     */
    topic?: pulumi.Input<string>;
    topicName?: pulumi.Input<string>;
}
