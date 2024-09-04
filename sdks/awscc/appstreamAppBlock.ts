// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppstreamAppBlock extends pulumi.CustomResource {
    /**
     * Get an existing AppstreamAppBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppstreamAppBlockState, opts?: pulumi.CustomResourceOptions): AppstreamAppBlock {
        return new AppstreamAppBlock(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/appstreamAppBlock:AppstreamAppBlock';

    /**
     * Returns true if the given object is an instance of AppstreamAppBlock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppstreamAppBlock {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppstreamAppBlock.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly packagingType!: pulumi.Output<string>;
    public readonly postSetupScriptDetails!: pulumi.Output<outputs.AppstreamAppBlockPostSetupScriptDetails>;
    public readonly setupScriptDetails!: pulumi.Output<outputs.AppstreamAppBlockSetupScriptDetails>;
    public readonly sourceS3Location!: pulumi.Output<outputs.AppstreamAppBlockSourceS3Location>;
    public readonly tags!: pulumi.Output<outputs.AppstreamAppBlockTag[]>;

    /**
     * Create a AppstreamAppBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppstreamAppBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppstreamAppBlockArgs | AppstreamAppBlockState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppstreamAppBlockState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["packagingType"] = state ? state.packagingType : undefined;
            resourceInputs["postSetupScriptDetails"] = state ? state.postSetupScriptDetails : undefined;
            resourceInputs["setupScriptDetails"] = state ? state.setupScriptDetails : undefined;
            resourceInputs["sourceS3Location"] = state ? state.sourceS3Location : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as AppstreamAppBlockArgs | undefined;
            if ((!args || args.sourceS3Location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceS3Location'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["packagingType"] = args ? args.packagingType : undefined;
            resourceInputs["postSetupScriptDetails"] = args ? args.postSetupScriptDetails : undefined;
            resourceInputs["setupScriptDetails"] = args ? args.setupScriptDetails : undefined;
            resourceInputs["sourceS3Location"] = args ? args.sourceS3Location : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppstreamAppBlock.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppstreamAppBlock resources.
 */
export interface AppstreamAppBlockState {
    arn?: pulumi.Input<string>;
    createdTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packagingType?: pulumi.Input<string>;
    postSetupScriptDetails?: pulumi.Input<inputs.AppstreamAppBlockPostSetupScriptDetails>;
    setupScriptDetails?: pulumi.Input<inputs.AppstreamAppBlockSetupScriptDetails>;
    sourceS3Location?: pulumi.Input<inputs.AppstreamAppBlockSourceS3Location>;
    tags?: pulumi.Input<pulumi.Input<inputs.AppstreamAppBlockTag>[]>;
}

/**
 * The set of arguments for constructing a AppstreamAppBlock resource.
 */
export interface AppstreamAppBlockArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    packagingType?: pulumi.Input<string>;
    postSetupScriptDetails?: pulumi.Input<inputs.AppstreamAppBlockPostSetupScriptDetails>;
    setupScriptDetails?: pulumi.Input<inputs.AppstreamAppBlockSetupScriptDetails>;
    sourceS3Location: pulumi.Input<inputs.AppstreamAppBlockSourceS3Location>;
    tags?: pulumi.Input<pulumi.Input<inputs.AppstreamAppBlockTag>[]>;
}
