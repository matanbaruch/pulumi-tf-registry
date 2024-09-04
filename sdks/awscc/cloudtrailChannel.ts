// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudtrailChannel extends pulumi.CustomResource {
    /**
     * Get an existing CloudtrailChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudtrailChannelState, opts?: pulumi.CustomResourceOptions): CloudtrailChannel {
        return new CloudtrailChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cloudtrailChannel:CloudtrailChannel';

    /**
     * Returns true if the given object is an instance of CloudtrailChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudtrailChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudtrailChannel.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) of a channel.
     */
    public /*out*/ readonly channelArn!: pulumi.Output<string>;
    /**
     * One or more resources to which events arriving through a channel are logged and stored.
     */
    public readonly destinations!: pulumi.Output<outputs.CloudtrailChannelDestination[]>;
    /**
     * The name of the channel.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ARN of an on-premises storage solution or application, or a partner event source.
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.CloudtrailChannelTag[]>;

    /**
     * Create a CloudtrailChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudtrailChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudtrailChannelArgs | CloudtrailChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudtrailChannelState | undefined;
            resourceInputs["channelArn"] = state ? state.channelArn : undefined;
            resourceInputs["destinations"] = state ? state.destinations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as CloudtrailChannelArgs | undefined;
            resourceInputs["destinations"] = args ? args.destinations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["channelArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudtrailChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudtrailChannel resources.
 */
export interface CloudtrailChannelState {
    /**
     * The Amazon Resource Name (ARN) of a channel.
     */
    channelArn?: pulumi.Input<string>;
    /**
     * One or more resources to which events arriving through a channel are logged and stored.
     */
    destinations?: pulumi.Input<pulumi.Input<inputs.CloudtrailChannelDestination>[]>;
    /**
     * The name of the channel.
     */
    name?: pulumi.Input<string>;
    /**
     * The ARN of an on-premises storage solution or application, or a partner event source.
     */
    source?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CloudtrailChannelTag>[]>;
}

/**
 * The set of arguments for constructing a CloudtrailChannel resource.
 */
export interface CloudtrailChannelArgs {
    /**
     * One or more resources to which events arriving through a channel are logged and stored.
     */
    destinations?: pulumi.Input<pulumi.Input<inputs.CloudtrailChannelDestination>[]>;
    /**
     * The name of the channel.
     */
    name?: pulumi.Input<string>;
    /**
     * The ARN of an on-premises storage solution or application, or a partner event source.
     */
    source?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CloudtrailChannelTag>[]>;
}
