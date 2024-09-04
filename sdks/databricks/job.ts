// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JobState, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/job:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * @deprecated Deprecated
     */
    public readonly alwaysRunning!: pulumi.Output<boolean | undefined>;
    public readonly continuous!: pulumi.Output<outputs.JobContinuous | undefined>;
    public readonly controlRunState!: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly dbtTask!: pulumi.Output<outputs.JobDbtTask | undefined>;
    public readonly deployment!: pulumi.Output<outputs.JobDeployment | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly editMode!: pulumi.Output<string | undefined>;
    public readonly emailNotifications!: pulumi.Output<outputs.JobEmailNotifications | undefined>;
    public readonly environments!: pulumi.Output<outputs.JobEnvironment[] | undefined>;
    public readonly existingClusterId!: pulumi.Output<string | undefined>;
    public readonly format!: pulumi.Output<string>;
    public readonly gitSource!: pulumi.Output<outputs.JobGitSource | undefined>;
    public readonly health!: pulumi.Output<outputs.JobHealth | undefined>;
    public readonly jobClusters!: pulumi.Output<outputs.JobJobCluster[] | undefined>;
    public readonly libraries!: pulumi.Output<outputs.JobLibrary[] | undefined>;
    public readonly maxConcurrentRuns!: pulumi.Output<number | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly maxRetries!: pulumi.Output<number | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly minRetryIntervalMillis!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly newCluster!: pulumi.Output<outputs.JobNewCluster | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly notebookTask!: pulumi.Output<outputs.JobNotebookTask | undefined>;
    public readonly notificationSettings!: pulumi.Output<outputs.JobNotificationSettings | undefined>;
    public readonly parameters!: pulumi.Output<outputs.JobParameter[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly pipelineTask!: pulumi.Output<outputs.JobPipelineTask | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly pythonWheelTask!: pulumi.Output<outputs.JobPythonWheelTask | undefined>;
    public readonly queue!: pulumi.Output<outputs.JobQueue | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly retryOnTimeout!: pulumi.Output<boolean | undefined>;
    public readonly runAs!: pulumi.Output<outputs.JobRunAs | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly runJobTask!: pulumi.Output<outputs.JobRunJobTask | undefined>;
    public readonly schedule!: pulumi.Output<outputs.JobSchedule | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly sparkJarTask!: pulumi.Output<outputs.JobSparkJarTask | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly sparkPythonTask!: pulumi.Output<outputs.JobSparkPythonTask | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly sparkSubmitTask!: pulumi.Output<outputs.JobSparkSubmitTask | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tasks!: pulumi.Output<outputs.JobTask[] | undefined>;
    public readonly timeoutSeconds!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.JobTimeouts | undefined>;
    public readonly trigger!: pulumi.Output<outputs.JobTrigger | undefined>;
    public /*out*/ readonly url!: pulumi.Output<string>;
    public readonly webhookNotifications!: pulumi.Output<outputs.JobWebhookNotifications | undefined>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: JobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: JobArgs | JobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as JobState | undefined;
            resourceInputs["alwaysRunning"] = state ? state.alwaysRunning : undefined;
            resourceInputs["continuous"] = state ? state.continuous : undefined;
            resourceInputs["controlRunState"] = state ? state.controlRunState : undefined;
            resourceInputs["dbtTask"] = state ? state.dbtTask : undefined;
            resourceInputs["deployment"] = state ? state.deployment : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["editMode"] = state ? state.editMode : undefined;
            resourceInputs["emailNotifications"] = state ? state.emailNotifications : undefined;
            resourceInputs["environments"] = state ? state.environments : undefined;
            resourceInputs["existingClusterId"] = state ? state.existingClusterId : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["gitSource"] = state ? state.gitSource : undefined;
            resourceInputs["health"] = state ? state.health : undefined;
            resourceInputs["jobClusters"] = state ? state.jobClusters : undefined;
            resourceInputs["libraries"] = state ? state.libraries : undefined;
            resourceInputs["maxConcurrentRuns"] = state ? state.maxConcurrentRuns : undefined;
            resourceInputs["maxRetries"] = state ? state.maxRetries : undefined;
            resourceInputs["minRetryIntervalMillis"] = state ? state.minRetryIntervalMillis : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["newCluster"] = state ? state.newCluster : undefined;
            resourceInputs["notebookTask"] = state ? state.notebookTask : undefined;
            resourceInputs["notificationSettings"] = state ? state.notificationSettings : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["pipelineTask"] = state ? state.pipelineTask : undefined;
            resourceInputs["pythonWheelTask"] = state ? state.pythonWheelTask : undefined;
            resourceInputs["queue"] = state ? state.queue : undefined;
            resourceInputs["retryOnTimeout"] = state ? state.retryOnTimeout : undefined;
            resourceInputs["runAs"] = state ? state.runAs : undefined;
            resourceInputs["runJobTask"] = state ? state.runJobTask : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["sparkJarTask"] = state ? state.sparkJarTask : undefined;
            resourceInputs["sparkPythonTask"] = state ? state.sparkPythonTask : undefined;
            resourceInputs["sparkSubmitTask"] = state ? state.sparkSubmitTask : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tasks"] = state ? state.tasks : undefined;
            resourceInputs["timeoutSeconds"] = state ? state.timeoutSeconds : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["trigger"] = state ? state.trigger : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["webhookNotifications"] = state ? state.webhookNotifications : undefined;
        } else {
            const args = argsOrState as JobArgs | undefined;
            resourceInputs["alwaysRunning"] = args ? args.alwaysRunning : undefined;
            resourceInputs["continuous"] = args ? args.continuous : undefined;
            resourceInputs["controlRunState"] = args ? args.controlRunState : undefined;
            resourceInputs["dbtTask"] = args ? args.dbtTask : undefined;
            resourceInputs["deployment"] = args ? args.deployment : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["editMode"] = args ? args.editMode : undefined;
            resourceInputs["emailNotifications"] = args ? args.emailNotifications : undefined;
            resourceInputs["environments"] = args ? args.environments : undefined;
            resourceInputs["existingClusterId"] = args ? args.existingClusterId : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["gitSource"] = args ? args.gitSource : undefined;
            resourceInputs["health"] = args ? args.health : undefined;
            resourceInputs["jobClusters"] = args ? args.jobClusters : undefined;
            resourceInputs["libraries"] = args ? args.libraries : undefined;
            resourceInputs["maxConcurrentRuns"] = args ? args.maxConcurrentRuns : undefined;
            resourceInputs["maxRetries"] = args ? args.maxRetries : undefined;
            resourceInputs["minRetryIntervalMillis"] = args ? args.minRetryIntervalMillis : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["newCluster"] = args ? args.newCluster : undefined;
            resourceInputs["notebookTask"] = args ? args.notebookTask : undefined;
            resourceInputs["notificationSettings"] = args ? args.notificationSettings : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["pipelineTask"] = args ? args.pipelineTask : undefined;
            resourceInputs["pythonWheelTask"] = args ? args.pythonWheelTask : undefined;
            resourceInputs["queue"] = args ? args.queue : undefined;
            resourceInputs["retryOnTimeout"] = args ? args.retryOnTimeout : undefined;
            resourceInputs["runAs"] = args ? args.runAs : undefined;
            resourceInputs["runJobTask"] = args ? args.runJobTask : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["sparkJarTask"] = args ? args.sparkJarTask : undefined;
            resourceInputs["sparkPythonTask"] = args ? args.sparkPythonTask : undefined;
            resourceInputs["sparkSubmitTask"] = args ? args.sparkSubmitTask : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tasks"] = args ? args.tasks : undefined;
            resourceInputs["timeoutSeconds"] = args ? args.timeoutSeconds : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["trigger"] = args ? args.trigger : undefined;
            resourceInputs["webhookNotifications"] = args ? args.webhookNotifications : undefined;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Job.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Job resources.
 */
export interface JobState {
    /**
     * @deprecated Deprecated
     */
    alwaysRunning?: pulumi.Input<boolean>;
    continuous?: pulumi.Input<inputs.JobContinuous>;
    controlRunState?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    dbtTask?: pulumi.Input<inputs.JobDbtTask>;
    deployment?: pulumi.Input<inputs.JobDeployment>;
    description?: pulumi.Input<string>;
    editMode?: pulumi.Input<string>;
    emailNotifications?: pulumi.Input<inputs.JobEmailNotifications>;
    environments?: pulumi.Input<pulumi.Input<inputs.JobEnvironment>[]>;
    existingClusterId?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    gitSource?: pulumi.Input<inputs.JobGitSource>;
    health?: pulumi.Input<inputs.JobHealth>;
    jobClusters?: pulumi.Input<pulumi.Input<inputs.JobJobCluster>[]>;
    libraries?: pulumi.Input<pulumi.Input<inputs.JobLibrary>[]>;
    maxConcurrentRuns?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    maxRetries?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    minRetryIntervalMillis?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    newCluster?: pulumi.Input<inputs.JobNewCluster>;
    /**
     * @deprecated Deprecated
     */
    notebookTask?: pulumi.Input<inputs.JobNotebookTask>;
    notificationSettings?: pulumi.Input<inputs.JobNotificationSettings>;
    parameters?: pulumi.Input<pulumi.Input<inputs.JobParameter>[]>;
    /**
     * @deprecated Deprecated
     */
    pipelineTask?: pulumi.Input<inputs.JobPipelineTask>;
    /**
     * @deprecated Deprecated
     */
    pythonWheelTask?: pulumi.Input<inputs.JobPythonWheelTask>;
    queue?: pulumi.Input<inputs.JobQueue>;
    /**
     * @deprecated Deprecated
     */
    retryOnTimeout?: pulumi.Input<boolean>;
    runAs?: pulumi.Input<inputs.JobRunAs>;
    /**
     * @deprecated Deprecated
     */
    runJobTask?: pulumi.Input<inputs.JobRunJobTask>;
    schedule?: pulumi.Input<inputs.JobSchedule>;
    /**
     * @deprecated Deprecated
     */
    sparkJarTask?: pulumi.Input<inputs.JobSparkJarTask>;
    /**
     * @deprecated Deprecated
     */
    sparkPythonTask?: pulumi.Input<inputs.JobSparkPythonTask>;
    /**
     * @deprecated Deprecated
     */
    sparkSubmitTask?: pulumi.Input<inputs.JobSparkSubmitTask>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tasks?: pulumi.Input<pulumi.Input<inputs.JobTask>[]>;
    timeoutSeconds?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.JobTimeouts>;
    trigger?: pulumi.Input<inputs.JobTrigger>;
    url?: pulumi.Input<string>;
    webhookNotifications?: pulumi.Input<inputs.JobWebhookNotifications>;
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * @deprecated Deprecated
     */
    alwaysRunning?: pulumi.Input<boolean>;
    continuous?: pulumi.Input<inputs.JobContinuous>;
    controlRunState?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    dbtTask?: pulumi.Input<inputs.JobDbtTask>;
    deployment?: pulumi.Input<inputs.JobDeployment>;
    description?: pulumi.Input<string>;
    editMode?: pulumi.Input<string>;
    emailNotifications?: pulumi.Input<inputs.JobEmailNotifications>;
    environments?: pulumi.Input<pulumi.Input<inputs.JobEnvironment>[]>;
    existingClusterId?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    gitSource?: pulumi.Input<inputs.JobGitSource>;
    health?: pulumi.Input<inputs.JobHealth>;
    jobClusters?: pulumi.Input<pulumi.Input<inputs.JobJobCluster>[]>;
    libraries?: pulumi.Input<pulumi.Input<inputs.JobLibrary>[]>;
    maxConcurrentRuns?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    maxRetries?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    minRetryIntervalMillis?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    newCluster?: pulumi.Input<inputs.JobNewCluster>;
    /**
     * @deprecated Deprecated
     */
    notebookTask?: pulumi.Input<inputs.JobNotebookTask>;
    notificationSettings?: pulumi.Input<inputs.JobNotificationSettings>;
    parameters?: pulumi.Input<pulumi.Input<inputs.JobParameter>[]>;
    /**
     * @deprecated Deprecated
     */
    pipelineTask?: pulumi.Input<inputs.JobPipelineTask>;
    /**
     * @deprecated Deprecated
     */
    pythonWheelTask?: pulumi.Input<inputs.JobPythonWheelTask>;
    queue?: pulumi.Input<inputs.JobQueue>;
    /**
     * @deprecated Deprecated
     */
    retryOnTimeout?: pulumi.Input<boolean>;
    runAs?: pulumi.Input<inputs.JobRunAs>;
    /**
     * @deprecated Deprecated
     */
    runJobTask?: pulumi.Input<inputs.JobRunJobTask>;
    schedule?: pulumi.Input<inputs.JobSchedule>;
    /**
     * @deprecated Deprecated
     */
    sparkJarTask?: pulumi.Input<inputs.JobSparkJarTask>;
    /**
     * @deprecated Deprecated
     */
    sparkPythonTask?: pulumi.Input<inputs.JobSparkPythonTask>;
    /**
     * @deprecated Deprecated
     */
    sparkSubmitTask?: pulumi.Input<inputs.JobSparkSubmitTask>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tasks?: pulumi.Input<pulumi.Input<inputs.JobTask>[]>;
    timeoutSeconds?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.JobTimeouts>;
    trigger?: pulumi.Input<inputs.JobTrigger>;
    webhookNotifications?: pulumi.Input<inputs.JobWebhookNotifications>;
}
