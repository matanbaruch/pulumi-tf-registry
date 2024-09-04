// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KafkaconnectCustomPlugin extends pulumi.CustomResource {
    /**
     * Get an existing KafkaconnectCustomPlugin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KafkaconnectCustomPluginState, opts?: pulumi.CustomResourceOptions): KafkaconnectCustomPlugin {
        return new KafkaconnectCustomPlugin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/kafkaconnectCustomPlugin:KafkaconnectCustomPlugin';

    /**
     * Returns true if the given object is an instance of KafkaconnectCustomPlugin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KafkaconnectCustomPlugin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KafkaconnectCustomPlugin.__pulumiType;
    }

    /**
     * The type of the plugin file.
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the custom plugin to use.
     */
    public /*out*/ readonly customPluginArn!: pulumi.Output<string>;
    /**
     * A summary description of the custom plugin.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Details about the custom plugin file.
     */
    public /*out*/ readonly fileDescription!: pulumi.Output<outputs.KafkaconnectCustomPluginFileDescription>;
    /**
     * Information about the location of a custom plugin.
     */
    public readonly location!: pulumi.Output<outputs.KafkaconnectCustomPluginLocation>;
    /**
     * The name of the custom plugin.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The revision of the custom plugin.
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.KafkaconnectCustomPluginTag[]>;

    /**
     * Create a KafkaconnectCustomPlugin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaconnectCustomPluginArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KafkaconnectCustomPluginArgs | KafkaconnectCustomPluginState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KafkaconnectCustomPluginState | undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["customPluginArn"] = state ? state.customPluginArn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fileDescription"] = state ? state.fileDescription : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as KafkaconnectCustomPluginArgs | undefined;
            if ((!args || args.contentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentType'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["customPluginArn"] = undefined /*out*/;
            resourceInputs["fileDescription"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KafkaconnectCustomPlugin.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KafkaconnectCustomPlugin resources.
 */
export interface KafkaconnectCustomPluginState {
    /**
     * The type of the plugin file.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the custom plugin to use.
     */
    customPluginArn?: pulumi.Input<string>;
    /**
     * A summary description of the custom plugin.
     */
    description?: pulumi.Input<string>;
    /**
     * Details about the custom plugin file.
     */
    fileDescription?: pulumi.Input<inputs.KafkaconnectCustomPluginFileDescription>;
    /**
     * Information about the location of a custom plugin.
     */
    location?: pulumi.Input<inputs.KafkaconnectCustomPluginLocation>;
    /**
     * The name of the custom plugin.
     */
    name?: pulumi.Input<string>;
    /**
     * The revision of the custom plugin.
     */
    revision?: pulumi.Input<number>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.KafkaconnectCustomPluginTag>[]>;
}

/**
 * The set of arguments for constructing a KafkaconnectCustomPlugin resource.
 */
export interface KafkaconnectCustomPluginArgs {
    /**
     * The type of the plugin file.
     */
    contentType: pulumi.Input<string>;
    /**
     * A summary description of the custom plugin.
     */
    description?: pulumi.Input<string>;
    /**
     * Information about the location of a custom plugin.
     */
    location: pulumi.Input<inputs.KafkaconnectCustomPluginLocation>;
    /**
     * The name of the custom plugin.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.KafkaconnectCustomPluginTag>[]>;
}
