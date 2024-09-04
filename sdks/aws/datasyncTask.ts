// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatasyncTask extends pulumi.CustomResource {
    /**
     * Get an existing DatasyncTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasyncTaskState, opts?: pulumi.CustomResourceOptions): DatasyncTask {
        return new DatasyncTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/datasyncTask:DatasyncTask';

    /**
     * Returns true if the given object is an instance of DatasyncTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasyncTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasyncTask.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly cloudwatchLogGroupArn!: pulumi.Output<string | undefined>;
    public readonly destinationLocationArn!: pulumi.Output<string>;
    public readonly excludes!: pulumi.Output<outputs.DatasyncTaskExcludes | undefined>;
    public readonly includes!: pulumi.Output<outputs.DatasyncTaskIncludes | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<outputs.DatasyncTaskOptions | undefined>;
    public readonly schedule!: pulumi.Output<outputs.DatasyncTaskSchedule | undefined>;
    public readonly sourceLocationArn!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly taskReportConfig!: pulumi.Output<outputs.DatasyncTaskTaskReportConfig | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DatasyncTaskTimeouts | undefined>;

    /**
     * Create a DatasyncTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasyncTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasyncTaskArgs | DatasyncTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasyncTaskState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["cloudwatchLogGroupArn"] = state ? state.cloudwatchLogGroupArn : undefined;
            resourceInputs["destinationLocationArn"] = state ? state.destinationLocationArn : undefined;
            resourceInputs["excludes"] = state ? state.excludes : undefined;
            resourceInputs["includes"] = state ? state.includes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["sourceLocationArn"] = state ? state.sourceLocationArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["taskReportConfig"] = state ? state.taskReportConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatasyncTaskArgs | undefined;
            if ((!args || args.destinationLocationArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationLocationArn'");
            }
            if ((!args || args.sourceLocationArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceLocationArn'");
            }
            resourceInputs["cloudwatchLogGroupArn"] = args ? args.cloudwatchLogGroupArn : undefined;
            resourceInputs["destinationLocationArn"] = args ? args.destinationLocationArn : undefined;
            resourceInputs["excludes"] = args ? args.excludes : undefined;
            resourceInputs["includes"] = args ? args.includes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["sourceLocationArn"] = args ? args.sourceLocationArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["taskReportConfig"] = args ? args.taskReportConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatasyncTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatasyncTask resources.
 */
export interface DatasyncTaskState {
    arn?: pulumi.Input<string>;
    cloudwatchLogGroupArn?: pulumi.Input<string>;
    destinationLocationArn?: pulumi.Input<string>;
    excludes?: pulumi.Input<inputs.DatasyncTaskExcludes>;
    includes?: pulumi.Input<inputs.DatasyncTaskIncludes>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<inputs.DatasyncTaskOptions>;
    schedule?: pulumi.Input<inputs.DatasyncTaskSchedule>;
    sourceLocationArn?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    taskReportConfig?: pulumi.Input<inputs.DatasyncTaskTaskReportConfig>;
    timeouts?: pulumi.Input<inputs.DatasyncTaskTimeouts>;
}

/**
 * The set of arguments for constructing a DatasyncTask resource.
 */
export interface DatasyncTaskArgs {
    cloudwatchLogGroupArn?: pulumi.Input<string>;
    destinationLocationArn: pulumi.Input<string>;
    excludes?: pulumi.Input<inputs.DatasyncTaskExcludes>;
    includes?: pulumi.Input<inputs.DatasyncTaskIncludes>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<inputs.DatasyncTaskOptions>;
    schedule?: pulumi.Input<inputs.DatasyncTaskSchedule>;
    sourceLocationArn: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    taskReportConfig?: pulumi.Input<inputs.DatasyncTaskTaskReportConfig>;
    timeouts?: pulumi.Input<inputs.DatasyncTaskTimeouts>;
}
