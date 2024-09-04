// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MpsProcessMediaOperation extends pulumi.CustomResource {
    /**
     * Get an existing MpsProcessMediaOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MpsProcessMediaOperationState, opts?: pulumi.CustomResourceOptions): MpsProcessMediaOperation {
        return new MpsProcessMediaOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mpsProcessMediaOperation:MpsProcessMediaOperation';

    /**
     * Returns true if the given object is an instance of MpsProcessMediaOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MpsProcessMediaOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MpsProcessMediaOperation.__pulumiType;
    }

    /**
     * Video content analysis task parameter.
     */
    public readonly aiAnalysisTask!: pulumi.Output<outputs.MpsProcessMediaOperationAiAnalysisTask | undefined>;
    /**
     * Type parameter of a video content audit task.
     */
    public readonly aiContentReviewTask!: pulumi.Output<outputs.MpsProcessMediaOperationAiContentReviewTask | undefined>;
    /**
     * The parameters of a quality control task.
     */
    public readonly aiQualityControlTask!: pulumi.Output<outputs.MpsProcessMediaOperationAiQualityControlTask | undefined>;
    /**
     * Type parameter of a video content recognition task.
     */
    public readonly aiRecognitionTask!: pulumi.Output<outputs.MpsProcessMediaOperationAiRecognitionTask | undefined>;
    /**
     * The information of the file to process.
     */
    public readonly inputInfo!: pulumi.Output<outputs.MpsProcessMediaOperationInputInfo>;
    /**
     * The media processing parameters to use.
     */
    public readonly mediaProcessTask!: pulumi.Output<outputs.MpsProcessMediaOperationMediaProcessTask | undefined>;
    /**
     * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.If
     * you do not specify this parameter, the file will be saved to the directory specified in `InputInfo`.
     */
    public readonly outputDir!: pulumi.Output<string | undefined>;
    /**
     * The storage location of the media processing output file. If this parameter is left empty, the storage location in
     * `InputInfo` will be inherited.
     */
    public readonly outputStorage!: pulumi.Output<outputs.MpsProcessMediaOperationOutputStorage | undefined>;
    /**
     * The scheme ID.Note 1: About `OutputStorage` and `OutputDir`If an output storage and directory are specified for a
     * subtask of the scheme, those output settings will be applied.If an output storage and directory are not specified for
     * the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.Note 2: If
     * `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the
     * scheme.Note 3: The trigger configured for a scheme is for automatically starting a scheme. It stops working when you
     * manually call this API to start a scheme.
     */
    public readonly scheduleId!: pulumi.Output<number | undefined>;
    /**
     * The source context which is used to pass through the user request information. The task flow status change callback will
     * return the value of this field. It can contain up to 1,000 characters.
     */
    public readonly sessionContext!: pulumi.Output<string | undefined>;
    /**
     * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will
     * return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered,
     * no deduplication will be performed.
     */
    public readonly sessionId!: pulumi.Output<string | undefined>;
    /**
     * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
     */
    public readonly taskNotifyConfig!: pulumi.Output<outputs.MpsProcessMediaOperationTaskNotifyConfig | undefined>;
    /**
     * The task type. `Online` (default): A task that is executed immediately. `Offline`: A task that is executed when the
     * system is idle (within three days by default).
     */
    public readonly taskType!: pulumi.Output<string | undefined>;
    /**
     * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left
     * empty, 0 will be used.
     */
    public readonly tasksPriority!: pulumi.Output<number | undefined>;

    /**
     * Create a MpsProcessMediaOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MpsProcessMediaOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MpsProcessMediaOperationArgs | MpsProcessMediaOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MpsProcessMediaOperationState | undefined;
            resourceInputs["aiAnalysisTask"] = state ? state.aiAnalysisTask : undefined;
            resourceInputs["aiContentReviewTask"] = state ? state.aiContentReviewTask : undefined;
            resourceInputs["aiQualityControlTask"] = state ? state.aiQualityControlTask : undefined;
            resourceInputs["aiRecognitionTask"] = state ? state.aiRecognitionTask : undefined;
            resourceInputs["inputInfo"] = state ? state.inputInfo : undefined;
            resourceInputs["mediaProcessTask"] = state ? state.mediaProcessTask : undefined;
            resourceInputs["outputDir"] = state ? state.outputDir : undefined;
            resourceInputs["outputStorage"] = state ? state.outputStorage : undefined;
            resourceInputs["scheduleId"] = state ? state.scheduleId : undefined;
            resourceInputs["sessionContext"] = state ? state.sessionContext : undefined;
            resourceInputs["sessionId"] = state ? state.sessionId : undefined;
            resourceInputs["taskNotifyConfig"] = state ? state.taskNotifyConfig : undefined;
            resourceInputs["taskType"] = state ? state.taskType : undefined;
            resourceInputs["tasksPriority"] = state ? state.tasksPriority : undefined;
        } else {
            const args = argsOrState as MpsProcessMediaOperationArgs | undefined;
            if ((!args || args.inputInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inputInfo'");
            }
            resourceInputs["aiAnalysisTask"] = args ? args.aiAnalysisTask : undefined;
            resourceInputs["aiContentReviewTask"] = args ? args.aiContentReviewTask : undefined;
            resourceInputs["aiQualityControlTask"] = args ? args.aiQualityControlTask : undefined;
            resourceInputs["aiRecognitionTask"] = args ? args.aiRecognitionTask : undefined;
            resourceInputs["inputInfo"] = args ? args.inputInfo : undefined;
            resourceInputs["mediaProcessTask"] = args ? args.mediaProcessTask : undefined;
            resourceInputs["outputDir"] = args ? args.outputDir : undefined;
            resourceInputs["outputStorage"] = args ? args.outputStorage : undefined;
            resourceInputs["scheduleId"] = args ? args.scheduleId : undefined;
            resourceInputs["sessionContext"] = args ? args.sessionContext : undefined;
            resourceInputs["sessionId"] = args ? args.sessionId : undefined;
            resourceInputs["taskNotifyConfig"] = args ? args.taskNotifyConfig : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
            resourceInputs["tasksPriority"] = args ? args.tasksPriority : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MpsProcessMediaOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MpsProcessMediaOperation resources.
 */
export interface MpsProcessMediaOperationState {
    /**
     * Video content analysis task parameter.
     */
    aiAnalysisTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiAnalysisTask>;
    /**
     * Type parameter of a video content audit task.
     */
    aiContentReviewTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiContentReviewTask>;
    /**
     * The parameters of a quality control task.
     */
    aiQualityControlTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiQualityControlTask>;
    /**
     * Type parameter of a video content recognition task.
     */
    aiRecognitionTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiRecognitionTask>;
    /**
     * The information of the file to process.
     */
    inputInfo?: pulumi.Input<inputs.MpsProcessMediaOperationInputInfo>;
    /**
     * The media processing parameters to use.
     */
    mediaProcessTask?: pulumi.Input<inputs.MpsProcessMediaOperationMediaProcessTask>;
    /**
     * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.If
     * you do not specify this parameter, the file will be saved to the directory specified in `InputInfo`.
     */
    outputDir?: pulumi.Input<string>;
    /**
     * The storage location of the media processing output file. If this parameter is left empty, the storage location in
     * `InputInfo` will be inherited.
     */
    outputStorage?: pulumi.Input<inputs.MpsProcessMediaOperationOutputStorage>;
    /**
     * The scheme ID.Note 1: About `OutputStorage` and `OutputDir`If an output storage and directory are specified for a
     * subtask of the scheme, those output settings will be applied.If an output storage and directory are not specified for
     * the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.Note 2: If
     * `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the
     * scheme.Note 3: The trigger configured for a scheme is for automatically starting a scheme. It stops working when you
     * manually call this API to start a scheme.
     */
    scheduleId?: pulumi.Input<number>;
    /**
     * The source context which is used to pass through the user request information. The task flow status change callback will
     * return the value of this field. It can contain up to 1,000 characters.
     */
    sessionContext?: pulumi.Input<string>;
    /**
     * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will
     * return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered,
     * no deduplication will be performed.
     */
    sessionId?: pulumi.Input<string>;
    /**
     * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
     */
    taskNotifyConfig?: pulumi.Input<inputs.MpsProcessMediaOperationTaskNotifyConfig>;
    /**
     * The task type. `Online` (default): A task that is executed immediately. `Offline`: A task that is executed when the
     * system is idle (within three days by default).
     */
    taskType?: pulumi.Input<string>;
    /**
     * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left
     * empty, 0 will be used.
     */
    tasksPriority?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MpsProcessMediaOperation resource.
 */
export interface MpsProcessMediaOperationArgs {
    /**
     * Video content analysis task parameter.
     */
    aiAnalysisTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiAnalysisTask>;
    /**
     * Type parameter of a video content audit task.
     */
    aiContentReviewTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiContentReviewTask>;
    /**
     * The parameters of a quality control task.
     */
    aiQualityControlTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiQualityControlTask>;
    /**
     * Type parameter of a video content recognition task.
     */
    aiRecognitionTask?: pulumi.Input<inputs.MpsProcessMediaOperationAiRecognitionTask>;
    /**
     * The information of the file to process.
     */
    inputInfo: pulumi.Input<inputs.MpsProcessMediaOperationInputInfo>;
    /**
     * The media processing parameters to use.
     */
    mediaProcessTask?: pulumi.Input<inputs.MpsProcessMediaOperationMediaProcessTask>;
    /**
     * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.If
     * you do not specify this parameter, the file will be saved to the directory specified in `InputInfo`.
     */
    outputDir?: pulumi.Input<string>;
    /**
     * The storage location of the media processing output file. If this parameter is left empty, the storage location in
     * `InputInfo` will be inherited.
     */
    outputStorage?: pulumi.Input<inputs.MpsProcessMediaOperationOutputStorage>;
    /**
     * The scheme ID.Note 1: About `OutputStorage` and `OutputDir`If an output storage and directory are specified for a
     * subtask of the scheme, those output settings will be applied.If an output storage and directory are not specified for
     * the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.Note 2: If
     * `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the
     * scheme.Note 3: The trigger configured for a scheme is for automatically starting a scheme. It stops working when you
     * manually call this API to start a scheme.
     */
    scheduleId?: pulumi.Input<number>;
    /**
     * The source context which is used to pass through the user request information. The task flow status change callback will
     * return the value of this field. It can contain up to 1,000 characters.
     */
    sessionContext?: pulumi.Input<string>;
    /**
     * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will
     * return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered,
     * no deduplication will be performed.
     */
    sessionId?: pulumi.Input<string>;
    /**
     * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
     */
    taskNotifyConfig?: pulumi.Input<inputs.MpsProcessMediaOperationTaskNotifyConfig>;
    /**
     * The task type. `Online` (default): A task that is executed immediately. `Offline`: A task that is executed when the
     * system is idle (within three days by default).
     */
    taskType?: pulumi.Input<string>;
    /**
     * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left
     * empty, 0 will be used.
     */
    tasksPriority?: pulumi.Input<number>;
}
