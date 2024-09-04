// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IoteventsInput extends pulumi.CustomResource {
    /**
     * Get an existing IoteventsInput resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IoteventsInputState, opts?: pulumi.CustomResourceOptions): IoteventsInput {
        return new IoteventsInput(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ioteventsInput:IoteventsInput';

    /**
     * Returns true if the given object is an instance of IoteventsInput.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IoteventsInput {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IoteventsInput.__pulumiType;
    }

    /**
     * The definition of the input.
     */
    public readonly inputDefinition!: pulumi.Output<outputs.IoteventsInputInputDefinition>;
    /**
     * A brief description of the input.
     */
    public readonly inputDescription!: pulumi.Output<string>;
    /**
     * The name of the input.
     */
    public readonly inputName!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource. For more information, see
     * [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
    public readonly tags!: pulumi.Output<outputs.IoteventsInputTag[]>;

    /**
     * Create a IoteventsInput resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoteventsInputArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IoteventsInputArgs | IoteventsInputState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IoteventsInputState | undefined;
            resourceInputs["inputDefinition"] = state ? state.inputDefinition : undefined;
            resourceInputs["inputDescription"] = state ? state.inputDescription : undefined;
            resourceInputs["inputName"] = state ? state.inputName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IoteventsInputArgs | undefined;
            if ((!args || args.inputDefinition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inputDefinition'");
            }
            resourceInputs["inputDefinition"] = args ? args.inputDefinition : undefined;
            resourceInputs["inputDescription"] = args ? args.inputDescription : undefined;
            resourceInputs["inputName"] = args ? args.inputName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IoteventsInput.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IoteventsInput resources.
 */
export interface IoteventsInputState {
    /**
     * The definition of the input.
     */
    inputDefinition?: pulumi.Input<inputs.IoteventsInputInputDefinition>;
    /**
     * A brief description of the input.
     */
    inputDescription?: pulumi.Input<string>;
    /**
     * The name of the input.
     */
    inputName?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource. For more information, see
     * [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IoteventsInputTag>[]>;
}

/**
 * The set of arguments for constructing a IoteventsInput resource.
 */
export interface IoteventsInputArgs {
    /**
     * The definition of the input.
     */
    inputDefinition: pulumi.Input<inputs.IoteventsInputInputDefinition>;
    /**
     * A brief description of the input.
     */
    inputDescription?: pulumi.Input<string>;
    /**
     * The name of the input.
     */
    inputName?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource. For more information, see
     * [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IoteventsInputTag>[]>;
}
