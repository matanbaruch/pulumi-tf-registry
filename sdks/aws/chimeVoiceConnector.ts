// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ChimeVoiceConnector extends pulumi.CustomResource {
    /**
     * Get an existing ChimeVoiceConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChimeVoiceConnectorState, opts?: pulumi.CustomResourceOptions): ChimeVoiceConnector {
        return new ChimeVoiceConnector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/chimeVoiceConnector:ChimeVoiceConnector';

    /**
     * Returns true if the given object is an instance of ChimeVoiceConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ChimeVoiceConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ChimeVoiceConnector.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly awsRegion!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly outboundHostName!: pulumi.Output<string>;
    public readonly requireEncryption!: pulumi.Output<boolean>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a ChimeVoiceConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChimeVoiceConnectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ChimeVoiceConnectorArgs | ChimeVoiceConnectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ChimeVoiceConnectorState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["awsRegion"] = state ? state.awsRegion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundHostName"] = state ? state.outboundHostName : undefined;
            resourceInputs["requireEncryption"] = state ? state.requireEncryption : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ChimeVoiceConnectorArgs | undefined;
            if ((!args || args.requireEncryption === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requireEncryption'");
            }
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["requireEncryption"] = args ? args.requireEncryption : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["outboundHostName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ChimeVoiceConnector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ChimeVoiceConnector resources.
 */
export interface ChimeVoiceConnectorState {
    arn?: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    outboundHostName?: pulumi.Input<string>;
    requireEncryption?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ChimeVoiceConnector resource.
 */
export interface ChimeVoiceConnectorArgs {
    awsRegion?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    requireEncryption: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
