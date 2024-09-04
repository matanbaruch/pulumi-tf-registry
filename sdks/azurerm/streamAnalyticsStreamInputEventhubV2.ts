// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StreamAnalyticsStreamInputEventhubV2 extends pulumi.CustomResource {
    /**
     * Get an existing StreamAnalyticsStreamInputEventhubV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamAnalyticsStreamInputEventhubV2State, opts?: pulumi.CustomResourceOptions): StreamAnalyticsStreamInputEventhubV2 {
        return new StreamAnalyticsStreamInputEventhubV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/streamAnalyticsStreamInputEventhubV2:StreamAnalyticsStreamInputEventhubV2';

    /**
     * Returns true if the given object is an instance of StreamAnalyticsStreamInputEventhubV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamAnalyticsStreamInputEventhubV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamAnalyticsStreamInputEventhubV2.__pulumiType;
    }

    public readonly authenticationMode!: pulumi.Output<string | undefined>;
    public readonly eventhubConsumerGroupName!: pulumi.Output<string | undefined>;
    public readonly eventhubName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly partitionKey!: pulumi.Output<string | undefined>;
    public readonly serialization!: pulumi.Output<outputs.StreamAnalyticsStreamInputEventhubV2Serialization>;
    public readonly servicebusNamespace!: pulumi.Output<string>;
    public readonly sharedAccessPolicyKey!: pulumi.Output<string | undefined>;
    public readonly sharedAccessPolicyName!: pulumi.Output<string | undefined>;
    public readonly streamAnalyticsJobId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.StreamAnalyticsStreamInputEventhubV2Timeouts | undefined>;

    /**
     * Create a StreamAnalyticsStreamInputEventhubV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamAnalyticsStreamInputEventhubV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StreamAnalyticsStreamInputEventhubV2Args | StreamAnalyticsStreamInputEventhubV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StreamAnalyticsStreamInputEventhubV2State | undefined;
            resourceInputs["authenticationMode"] = state ? state.authenticationMode : undefined;
            resourceInputs["eventhubConsumerGroupName"] = state ? state.eventhubConsumerGroupName : undefined;
            resourceInputs["eventhubName"] = state ? state.eventhubName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["partitionKey"] = state ? state.partitionKey : undefined;
            resourceInputs["serialization"] = state ? state.serialization : undefined;
            resourceInputs["servicebusNamespace"] = state ? state.servicebusNamespace : undefined;
            resourceInputs["sharedAccessPolicyKey"] = state ? state.sharedAccessPolicyKey : undefined;
            resourceInputs["sharedAccessPolicyName"] = state ? state.sharedAccessPolicyName : undefined;
            resourceInputs["streamAnalyticsJobId"] = state ? state.streamAnalyticsJobId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as StreamAnalyticsStreamInputEventhubV2Args | undefined;
            if ((!args || args.eventhubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventhubName'");
            }
            if ((!args || args.serialization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialization'");
            }
            if ((!args || args.servicebusNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'servicebusNamespace'");
            }
            if ((!args || args.streamAnalyticsJobId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamAnalyticsJobId'");
            }
            resourceInputs["authenticationMode"] = args ? args.authenticationMode : undefined;
            resourceInputs["eventhubConsumerGroupName"] = args ? args.eventhubConsumerGroupName : undefined;
            resourceInputs["eventhubName"] = args ? args.eventhubName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["partitionKey"] = args ? args.partitionKey : undefined;
            resourceInputs["serialization"] = args ? args.serialization : undefined;
            resourceInputs["servicebusNamespace"] = args ? args.servicebusNamespace : undefined;
            resourceInputs["sharedAccessPolicyKey"] = args?.sharedAccessPolicyKey ? pulumi.secret(args.sharedAccessPolicyKey) : undefined;
            resourceInputs["sharedAccessPolicyName"] = args ? args.sharedAccessPolicyName : undefined;
            resourceInputs["streamAnalyticsJobId"] = args ? args.streamAnalyticsJobId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["sharedAccessPolicyKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(StreamAnalyticsStreamInputEventhubV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StreamAnalyticsStreamInputEventhubV2 resources.
 */
export interface StreamAnalyticsStreamInputEventhubV2State {
    authenticationMode?: pulumi.Input<string>;
    eventhubConsumerGroupName?: pulumi.Input<string>;
    eventhubName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partitionKey?: pulumi.Input<string>;
    serialization?: pulumi.Input<inputs.StreamAnalyticsStreamInputEventhubV2Serialization>;
    servicebusNamespace?: pulumi.Input<string>;
    sharedAccessPolicyKey?: pulumi.Input<string>;
    sharedAccessPolicyName?: pulumi.Input<string>;
    streamAnalyticsJobId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsStreamInputEventhubV2Timeouts>;
}

/**
 * The set of arguments for constructing a StreamAnalyticsStreamInputEventhubV2 resource.
 */
export interface StreamAnalyticsStreamInputEventhubV2Args {
    authenticationMode?: pulumi.Input<string>;
    eventhubConsumerGroupName?: pulumi.Input<string>;
    eventhubName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partitionKey?: pulumi.Input<string>;
    serialization: pulumi.Input<inputs.StreamAnalyticsStreamInputEventhubV2Serialization>;
    servicebusNamespace: pulumi.Input<string>;
    sharedAccessPolicyKey?: pulumi.Input<string>;
    sharedAccessPolicyName?: pulumi.Input<string>;
    streamAnalyticsJobId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsStreamInputEventhubV2Timeouts>;
}
