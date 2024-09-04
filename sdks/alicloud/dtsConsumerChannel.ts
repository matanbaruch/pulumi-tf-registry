// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DtsConsumerChannel extends pulumi.CustomResource {
    /**
     * Get an existing DtsConsumerChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DtsConsumerChannelState, opts?: pulumi.CustomResourceOptions): DtsConsumerChannel {
        return new DtsConsumerChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/dtsConsumerChannel:DtsConsumerChannel';

    /**
     * Returns true if the given object is an instance of DtsConsumerChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DtsConsumerChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DtsConsumerChannel.__pulumiType;
    }

    public /*out*/ readonly consumerGroupId!: pulumi.Output<string>;
    public readonly consumerGroupName!: pulumi.Output<string>;
    public readonly consumerGroupPassword!: pulumi.Output<string>;
    public readonly consumerGroupUserName!: pulumi.Output<string>;
    public readonly dtsInstanceId!: pulumi.Output<string>;

    /**
     * Create a DtsConsumerChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DtsConsumerChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DtsConsumerChannelArgs | DtsConsumerChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DtsConsumerChannelState | undefined;
            resourceInputs["consumerGroupId"] = state ? state.consumerGroupId : undefined;
            resourceInputs["consumerGroupName"] = state ? state.consumerGroupName : undefined;
            resourceInputs["consumerGroupPassword"] = state ? state.consumerGroupPassword : undefined;
            resourceInputs["consumerGroupUserName"] = state ? state.consumerGroupUserName : undefined;
            resourceInputs["dtsInstanceId"] = state ? state.dtsInstanceId : undefined;
        } else {
            const args = argsOrState as DtsConsumerChannelArgs | undefined;
            if ((!args || args.consumerGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroupName'");
            }
            if ((!args || args.consumerGroupPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroupPassword'");
            }
            if ((!args || args.consumerGroupUserName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerGroupUserName'");
            }
            if ((!args || args.dtsInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dtsInstanceId'");
            }
            resourceInputs["consumerGroupName"] = args ? args.consumerGroupName : undefined;
            resourceInputs["consumerGroupPassword"] = args ? args.consumerGroupPassword : undefined;
            resourceInputs["consumerGroupUserName"] = args ? args.consumerGroupUserName : undefined;
            resourceInputs["dtsInstanceId"] = args ? args.dtsInstanceId : undefined;
            resourceInputs["consumerGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DtsConsumerChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DtsConsumerChannel resources.
 */
export interface DtsConsumerChannelState {
    consumerGroupId?: pulumi.Input<string>;
    consumerGroupName?: pulumi.Input<string>;
    consumerGroupPassword?: pulumi.Input<string>;
    consumerGroupUserName?: pulumi.Input<string>;
    dtsInstanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DtsConsumerChannel resource.
 */
export interface DtsConsumerChannelArgs {
    consumerGroupName: pulumi.Input<string>;
    consumerGroupPassword: pulumi.Input<string>;
    consumerGroupUserName: pulumi.Input<string>;
    dtsInstanceId: pulumi.Input<string>;
}
