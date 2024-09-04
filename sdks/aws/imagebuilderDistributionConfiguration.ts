// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ImagebuilderDistributionConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ImagebuilderDistributionConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImagebuilderDistributionConfigurationState, opts?: pulumi.CustomResourceOptions): ImagebuilderDistributionConfiguration {
        return new ImagebuilderDistributionConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/imagebuilderDistributionConfiguration:ImagebuilderDistributionConfiguration';

    /**
     * Returns true if the given object is an instance of ImagebuilderDistributionConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImagebuilderDistributionConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImagebuilderDistributionConfiguration.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly dateCreated!: pulumi.Output<string>;
    public /*out*/ readonly dateUpdated!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly distributions!: pulumi.Output<outputs.ImagebuilderDistributionConfigurationDistribution[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a ImagebuilderDistributionConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImagebuilderDistributionConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImagebuilderDistributionConfigurationArgs | ImagebuilderDistributionConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImagebuilderDistributionConfigurationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["dateCreated"] = state ? state.dateCreated : undefined;
            resourceInputs["dateUpdated"] = state ? state.dateUpdated : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["distributions"] = state ? state.distributions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ImagebuilderDistributionConfigurationArgs | undefined;
            if ((!args || args.distributions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'distributions'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["distributions"] = args ? args.distributions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["dateCreated"] = undefined /*out*/;
            resourceInputs["dateUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ImagebuilderDistributionConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ImagebuilderDistributionConfiguration resources.
 */
export interface ImagebuilderDistributionConfigurationState {
    arn?: pulumi.Input<string>;
    dateCreated?: pulumi.Input<string>;
    dateUpdated?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    distributions?: pulumi.Input<pulumi.Input<inputs.ImagebuilderDistributionConfigurationDistribution>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ImagebuilderDistributionConfiguration resource.
 */
export interface ImagebuilderDistributionConfigurationArgs {
    description?: pulumi.Input<string>;
    distributions: pulumi.Input<pulumi.Input<inputs.ImagebuilderDistributionConfigurationDistribution>[]>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
