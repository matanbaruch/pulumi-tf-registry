// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IvsChannel extends pulumi.CustomResource {
    /**
     * Get an existing IvsChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IvsChannelState, opts?: pulumi.CustomResourceOptions): IvsChannel {
        return new IvsChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ivsChannel:IvsChannel';

    /**
     * Returns true if the given object is an instance of IvsChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IvsChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IvsChannel.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly authorized!: pulumi.Output<boolean>;
    public /*out*/ readonly ingestEndpoint!: pulumi.Output<string>;
    public readonly latencyMode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly playbackUrl!: pulumi.Output<string>;
    public readonly recordingConfigurationArn!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.IvsChannelTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a IvsChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IvsChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IvsChannelArgs | IvsChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IvsChannelState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["authorized"] = state ? state.authorized : undefined;
            resourceInputs["ingestEndpoint"] = state ? state.ingestEndpoint : undefined;
            resourceInputs["latencyMode"] = state ? state.latencyMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["playbackUrl"] = state ? state.playbackUrl : undefined;
            resourceInputs["recordingConfigurationArn"] = state ? state.recordingConfigurationArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as IvsChannelArgs | undefined;
            resourceInputs["authorized"] = args ? args.authorized : undefined;
            resourceInputs["latencyMode"] = args ? args.latencyMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recordingConfigurationArn"] = args ? args.recordingConfigurationArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["ingestEndpoint"] = undefined /*out*/;
            resourceInputs["playbackUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IvsChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IvsChannel resources.
 */
export interface IvsChannelState {
    arn?: pulumi.Input<string>;
    authorized?: pulumi.Input<boolean>;
    ingestEndpoint?: pulumi.Input<string>;
    latencyMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    playbackUrl?: pulumi.Input<string>;
    recordingConfigurationArn?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IvsChannelTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IvsChannel resource.
 */
export interface IvsChannelArgs {
    authorized?: pulumi.Input<boolean>;
    latencyMode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    recordingConfigurationArn?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.IvsChannelTimeouts>;
    type?: pulumi.Input<string>;
}
