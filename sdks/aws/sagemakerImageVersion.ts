// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SagemakerImageVersion extends pulumi.CustomResource {
    /**
     * Get an existing SagemakerImageVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagemakerImageVersionState, opts?: pulumi.CustomResourceOptions): SagemakerImageVersion {
        return new SagemakerImageVersion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sagemakerImageVersion:SagemakerImageVersion';

    /**
     * Returns true if the given object is an instance of SagemakerImageVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagemakerImageVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagemakerImageVersion.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly baseImage!: pulumi.Output<string>;
    public /*out*/ readonly containerImage!: pulumi.Output<string>;
    public /*out*/ readonly imageArn!: pulumi.Output<string>;
    public readonly imageName!: pulumi.Output<string>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a SagemakerImageVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagemakerImageVersionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagemakerImageVersionArgs | SagemakerImageVersionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagemakerImageVersionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["baseImage"] = state ? state.baseImage : undefined;
            resourceInputs["containerImage"] = state ? state.containerImage : undefined;
            resourceInputs["imageArn"] = state ? state.imageArn : undefined;
            resourceInputs["imageName"] = state ? state.imageName : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SagemakerImageVersionArgs | undefined;
            if ((!args || args.baseImage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseImage'");
            }
            if ((!args || args.imageName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageName'");
            }
            resourceInputs["baseImage"] = args ? args.baseImage : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["containerImage"] = undefined /*out*/;
            resourceInputs["imageArn"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagemakerImageVersion.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagemakerImageVersion resources.
 */
export interface SagemakerImageVersionState {
    arn?: pulumi.Input<string>;
    baseImage?: pulumi.Input<string>;
    containerImage?: pulumi.Input<string>;
    imageArn?: pulumi.Input<string>;
    imageName?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SagemakerImageVersion resource.
 */
export interface SagemakerImageVersionArgs {
    baseImage: pulumi.Input<string>;
    imageName: pulumi.Input<string>;
}
