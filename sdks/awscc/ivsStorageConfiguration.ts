// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IvsStorageConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing IvsStorageConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IvsStorageConfigurationState, opts?: pulumi.CustomResourceOptions): IvsStorageConfiguration {
        return new IvsStorageConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ivsStorageConfiguration:IvsStorageConfiguration';

    /**
     * Returns true if the given object is an instance of IvsStorageConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IvsStorageConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IvsStorageConfiguration.__pulumiType;
    }

    /**
     * Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Storage Configuration Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A complex type that describes an S3 location where recorded videos will be stored.
     */
    public readonly s3!: pulumi.Output<outputs.IvsStorageConfigurationS3>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    public readonly tags!: pulumi.Output<outputs.IvsStorageConfigurationTag[]>;

    /**
     * Create a IvsStorageConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IvsStorageConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IvsStorageConfigurationArgs | IvsStorageConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IvsStorageConfigurationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["s3"] = state ? state.s3 : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as IvsStorageConfigurationArgs | undefined;
            if ((!args || args.s3 === undefined) && !opts.urn) {
                throw new Error("Missing required property 's3'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["s3"] = args ? args.s3 : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IvsStorageConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IvsStorageConfiguration resources.
 */
export interface IvsStorageConfigurationState {
    /**
     * Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier.
     */
    arn?: pulumi.Input<string>;
    /**
     * Storage Configuration Name.
     */
    name?: pulumi.Input<string>;
    /**
     * A complex type that describes an S3 location where recorded videos will be stored.
     */
    s3?: pulumi.Input<inputs.IvsStorageConfigurationS3>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IvsStorageConfigurationTag>[]>;
}

/**
 * The set of arguments for constructing a IvsStorageConfiguration resource.
 */
export interface IvsStorageConfigurationArgs {
    /**
     * Storage Configuration Name.
     */
    name?: pulumi.Input<string>;
    /**
     * A complex type that describes an S3 location where recorded videos will be stored.
     */
    s3: pulumi.Input<inputs.IvsStorageConfigurationS3>;
    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.IvsStorageConfigurationTag>[]>;
}
