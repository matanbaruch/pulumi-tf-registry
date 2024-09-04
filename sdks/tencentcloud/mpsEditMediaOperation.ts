// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MpsEditMediaOperation extends pulumi.CustomResource {
    /**
     * Get an existing MpsEditMediaOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MpsEditMediaOperationState, opts?: pulumi.CustomResourceOptions): MpsEditMediaOperation {
        return new MpsEditMediaOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mpsEditMediaOperation:MpsEditMediaOperation';

    /**
     * Returns true if the given object is an instance of MpsEditMediaOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MpsEditMediaOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MpsEditMediaOperation.__pulumiType;
    }

    /**
     * Information of input video file.
     */
    public readonly fileInfos!: pulumi.Output<outputs.MpsEditMediaOperationFileInfo[]>;
    /**
     * Configuration for output files of video editing.
     */
    public readonly outputConfig!: pulumi.Output<outputs.MpsEditMediaOperationOutputConfig | undefined>;
    /**
     * The path to save the media processing output file.
     */
    public readonly outputObjectPath!: pulumi.Output<string>;
    /**
     * The storage location of the media processing output file.
     */
    public readonly outputStorage!: pulumi.Output<outputs.MpsEditMediaOperationOutputStorage>;
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
     * Event notification information of task. If this parameter is left empty, no event notifications will be obtained.
     */
    public readonly taskNotifyConfig!: pulumi.Output<outputs.MpsEditMediaOperationTaskNotifyConfig | undefined>;
    /**
     * Task priority. The higher the value, the higher the priority. Value range: [-10,10]. If this parameter is left empty, 0
     * will be used.
     */
    public readonly tasksPriority!: pulumi.Output<number | undefined>;

    /**
     * Create a MpsEditMediaOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MpsEditMediaOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MpsEditMediaOperationArgs | MpsEditMediaOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MpsEditMediaOperationState | undefined;
            resourceInputs["fileInfos"] = state ? state.fileInfos : undefined;
            resourceInputs["outputConfig"] = state ? state.outputConfig : undefined;
            resourceInputs["outputObjectPath"] = state ? state.outputObjectPath : undefined;
            resourceInputs["outputStorage"] = state ? state.outputStorage : undefined;
            resourceInputs["sessionContext"] = state ? state.sessionContext : undefined;
            resourceInputs["sessionId"] = state ? state.sessionId : undefined;
            resourceInputs["taskNotifyConfig"] = state ? state.taskNotifyConfig : undefined;
            resourceInputs["tasksPriority"] = state ? state.tasksPriority : undefined;
        } else {
            const args = argsOrState as MpsEditMediaOperationArgs | undefined;
            if ((!args || args.fileInfos === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileInfos'");
            }
            if ((!args || args.outputObjectPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputObjectPath'");
            }
            if ((!args || args.outputStorage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outputStorage'");
            }
            resourceInputs["fileInfos"] = args ? args.fileInfos : undefined;
            resourceInputs["outputConfig"] = args ? args.outputConfig : undefined;
            resourceInputs["outputObjectPath"] = args ? args.outputObjectPath : undefined;
            resourceInputs["outputStorage"] = args ? args.outputStorage : undefined;
            resourceInputs["sessionContext"] = args ? args.sessionContext : undefined;
            resourceInputs["sessionId"] = args ? args.sessionId : undefined;
            resourceInputs["taskNotifyConfig"] = args ? args.taskNotifyConfig : undefined;
            resourceInputs["tasksPriority"] = args ? args.tasksPriority : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MpsEditMediaOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MpsEditMediaOperation resources.
 */
export interface MpsEditMediaOperationState {
    /**
     * Information of input video file.
     */
    fileInfos?: pulumi.Input<pulumi.Input<inputs.MpsEditMediaOperationFileInfo>[]>;
    /**
     * Configuration for output files of video editing.
     */
    outputConfig?: pulumi.Input<inputs.MpsEditMediaOperationOutputConfig>;
    /**
     * The path to save the media processing output file.
     */
    outputObjectPath?: pulumi.Input<string>;
    /**
     * The storage location of the media processing output file.
     */
    outputStorage?: pulumi.Input<inputs.MpsEditMediaOperationOutputStorage>;
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
     * Event notification information of task. If this parameter is left empty, no event notifications will be obtained.
     */
    taskNotifyConfig?: pulumi.Input<inputs.MpsEditMediaOperationTaskNotifyConfig>;
    /**
     * Task priority. The higher the value, the higher the priority. Value range: [-10,10]. If this parameter is left empty, 0
     * will be used.
     */
    tasksPriority?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MpsEditMediaOperation resource.
 */
export interface MpsEditMediaOperationArgs {
    /**
     * Information of input video file.
     */
    fileInfos: pulumi.Input<pulumi.Input<inputs.MpsEditMediaOperationFileInfo>[]>;
    /**
     * Configuration for output files of video editing.
     */
    outputConfig?: pulumi.Input<inputs.MpsEditMediaOperationOutputConfig>;
    /**
     * The path to save the media processing output file.
     */
    outputObjectPath: pulumi.Input<string>;
    /**
     * The storage location of the media processing output file.
     */
    outputStorage: pulumi.Input<inputs.MpsEditMediaOperationOutputStorage>;
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
     * Event notification information of task. If this parameter is left empty, no event notifications will be obtained.
     */
    taskNotifyConfig?: pulumi.Input<inputs.MpsEditMediaOperationTaskNotifyConfig>;
    /**
     * Task priority. The higher the value, the higher the priority. Value range: [-10,10]. If this parameter is left empty, 0
     * will be used.
     */
    tasksPriority?: pulumi.Input<number>;
}
