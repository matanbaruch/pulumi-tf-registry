// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClsDataTransform extends pulumi.CustomResource {
    /**
     * Get an existing ClsDataTransform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClsDataTransformState, opts?: pulumi.CustomResourceOptions): ClsDataTransform {
        return new ClsDataTransform(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/clsDataTransform:ClsDataTransform';

    /**
     * Returns true if the given object is an instance of ClsDataTransform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClsDataTransform {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClsDataTransform.__pulumiType;
    }

    /**
     * Data transform des resources. If `func_type` is `1`, this parameter is required. If `func_type` is `2`, this parameter
     * does not need to be filled in.
     */
    public readonly dstResources!: pulumi.Output<outputs.ClsDataTransformDstResource[] | undefined>;
    /**
     * Task enable flag. `1`: enable, `2`: disable, Default is `1`.
     */
    public readonly enableFlag!: pulumi.Output<number | undefined>;
    /**
     * Data transform content. If `func_type` is `2`, must use `log_auto_output`.
     */
    public readonly etlContent!: pulumi.Output<string>;
    /**
     * Task type. `1`: Specify the theme; `2`: Dynamic creation.
     */
    public readonly funcType!: pulumi.Output<number>;
    /**
     * Task name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Source topic ID.
     */
    public readonly srcTopicId!: pulumi.Output<string>;
    /**
     * Task type. `1`: Use random data from the source log theme for processing preview; `2`: Use user-defined test data for
     * processing preview; `3`: Create real machining tasks.
     */
    public readonly taskType!: pulumi.Output<number>;

    /**
     * Create a ClsDataTransform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClsDataTransformArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClsDataTransformArgs | ClsDataTransformState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClsDataTransformState | undefined;
            resourceInputs["dstResources"] = state ? state.dstResources : undefined;
            resourceInputs["enableFlag"] = state ? state.enableFlag : undefined;
            resourceInputs["etlContent"] = state ? state.etlContent : undefined;
            resourceInputs["funcType"] = state ? state.funcType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["srcTopicId"] = state ? state.srcTopicId : undefined;
            resourceInputs["taskType"] = state ? state.taskType : undefined;
        } else {
            const args = argsOrState as ClsDataTransformArgs | undefined;
            if ((!args || args.etlContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'etlContent'");
            }
            if ((!args || args.funcType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'funcType'");
            }
            if ((!args || args.srcTopicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcTopicId'");
            }
            if ((!args || args.taskType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskType'");
            }
            resourceInputs["dstResources"] = args ? args.dstResources : undefined;
            resourceInputs["enableFlag"] = args ? args.enableFlag : undefined;
            resourceInputs["etlContent"] = args ? args.etlContent : undefined;
            resourceInputs["funcType"] = args ? args.funcType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["srcTopicId"] = args ? args.srcTopicId : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClsDataTransform.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClsDataTransform resources.
 */
export interface ClsDataTransformState {
    /**
     * Data transform des resources. If `func_type` is `1`, this parameter is required. If `func_type` is `2`, this parameter
     * does not need to be filled in.
     */
    dstResources?: pulumi.Input<pulumi.Input<inputs.ClsDataTransformDstResource>[]>;
    /**
     * Task enable flag. `1`: enable, `2`: disable, Default is `1`.
     */
    enableFlag?: pulumi.Input<number>;
    /**
     * Data transform content. If `func_type` is `2`, must use `log_auto_output`.
     */
    etlContent?: pulumi.Input<string>;
    /**
     * Task type. `1`: Specify the theme; `2`: Dynamic creation.
     */
    funcType?: pulumi.Input<number>;
    /**
     * Task name.
     */
    name?: pulumi.Input<string>;
    /**
     * Source topic ID.
     */
    srcTopicId?: pulumi.Input<string>;
    /**
     * Task type. `1`: Use random data from the source log theme for processing preview; `2`: Use user-defined test data for
     * processing preview; `3`: Create real machining tasks.
     */
    taskType?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ClsDataTransform resource.
 */
export interface ClsDataTransformArgs {
    /**
     * Data transform des resources. If `func_type` is `1`, this parameter is required. If `func_type` is `2`, this parameter
     * does not need to be filled in.
     */
    dstResources?: pulumi.Input<pulumi.Input<inputs.ClsDataTransformDstResource>[]>;
    /**
     * Task enable flag. `1`: enable, `2`: disable, Default is `1`.
     */
    enableFlag?: pulumi.Input<number>;
    /**
     * Data transform content. If `func_type` is `2`, must use `log_auto_output`.
     */
    etlContent: pulumi.Input<string>;
    /**
     * Task type. `1`: Specify the theme; `2`: Dynamic creation.
     */
    funcType: pulumi.Input<number>;
    /**
     * Task name.
     */
    name?: pulumi.Input<string>;
    /**
     * Source topic ID.
     */
    srcTopicId: pulumi.Input<string>;
    /**
     * Task type. `1`: Use random data from the source log theme for processing preview; `2`: Use user-defined test data for
     * processing preview; `3`: Create real machining tasks.
     */
    taskType: pulumi.Input<number>;
}
