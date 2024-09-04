// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface JobCommand {
    description?: pulumi.Input<string>;
    errorHandlers?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandler>[]>;
    inlineScript?: pulumi.Input<string>;
    jobs?: pulumi.Input<pulumi.Input<inputs.JobCommandJob>[]>;
    keepGoingOnSuccess?: pulumi.Input<boolean>;
    nodeStepPlugins?: pulumi.Input<pulumi.Input<inputs.JobCommandNodeStepPlugin>[]>;
    scriptFile?: pulumi.Input<string>;
    scriptFileArgs?: pulumi.Input<string>;
    scriptInterpreters?: pulumi.Input<pulumi.Input<inputs.JobCommandScriptInterpreter>[]>;
    shellCommand?: pulumi.Input<string>;
    stepPlugins?: pulumi.Input<pulumi.Input<inputs.JobCommandStepPlugin>[]>;
}

export interface JobCommandErrorHandler {
    description?: pulumi.Input<string>;
    inlineScript?: pulumi.Input<string>;
    jobs?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandlerJob>[]>;
    keepGoingOnSuccess?: pulumi.Input<boolean>;
    nodeStepPlugins?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandlerNodeStepPlugin>[]>;
    scriptFile?: pulumi.Input<string>;
    scriptFileArgs?: pulumi.Input<string>;
    scriptInterpreters?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandlerScriptInterpreter>[]>;
    shellCommand?: pulumi.Input<string>;
    stepPlugins?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandlerStepPlugin>[]>;
}

export interface JobCommandErrorHandlerJob {
    args?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nodeFilters?: pulumi.Input<pulumi.Input<inputs.JobCommandErrorHandlerJobNodeFilter>[]>;
    runForEachNode?: pulumi.Input<boolean>;
}

export interface JobCommandErrorHandlerJobNodeFilter {
    excludeFilter?: pulumi.Input<string>;
    excludePrecedence?: pulumi.Input<boolean>;
    filter?: pulumi.Input<string>;
}

export interface JobCommandErrorHandlerNodeStepPlugin {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobCommandErrorHandlerScriptInterpreter {
    argsQuoted?: pulumi.Input<boolean>;
    invocationString?: pulumi.Input<string>;
}

export interface JobCommandErrorHandlerStepPlugin {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobCommandJob {
    args?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nodeFilters?: pulumi.Input<pulumi.Input<inputs.JobCommandJobNodeFilter>[]>;
    runForEachNode?: pulumi.Input<boolean>;
}

export interface JobCommandJobNodeFilter {
    excludeFilter?: pulumi.Input<string>;
    excludePrecedence?: pulumi.Input<boolean>;
    filter?: pulumi.Input<string>;
}

export interface JobCommandNodeStepPlugin {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobCommandScriptInterpreter {
    argsQuoted?: pulumi.Input<boolean>;
    invocationString?: pulumi.Input<string>;
}

export interface JobCommandStepPlugin {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobGlobalLogFilter {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobNotification {
    emails?: pulumi.Input<pulumi.Input<inputs.JobNotificationEmail>[]>;
    plugins?: pulumi.Input<pulumi.Input<inputs.JobNotificationPlugin>[]>;
    /**
     * Option of `on_success`, `on_failure`, `on_start`
     */
    type: pulumi.Input<string>;
    webhookUrls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface JobNotificationEmail {
    attachLog?: pulumi.Input<boolean>;
    recipients: pulumi.Input<pulumi.Input<string>[]>;
    subject?: pulumi.Input<string>;
}

export interface JobNotificationPlugin {
    config?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface JobOption {
    allowMultipleValues?: pulumi.Input<boolean>;
    defaultValue?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    exposedToScripts?: pulumi.Input<boolean>;
    hidden?: pulumi.Input<boolean>;
    label?: pulumi.Input<string>;
    multiValueDelimiter?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    obscureInput?: pulumi.Input<boolean>;
    requirePredefinedChoice?: pulumi.Input<boolean>;
    required?: pulumi.Input<boolean>;
    storagePath?: pulumi.Input<string>;
    validationRegex?: pulumi.Input<string>;
    valueChoices?: pulumi.Input<pulumi.Input<string>[]>;
    valueChoicesUrl?: pulumi.Input<string>;
}

export interface JobOrchestrator {
    /**
     * The Node Attribute that shoud be used to rank nodes in High/Low Orchestrator.
     */
    attribute?: pulumi.Input<string>;
    /**
     * Value for the subset orchestrator
     */
    count?: pulumi.Input<number>;
    /**
     * Value for the maxPercentage orchestrator
     */
    percent?: pulumi.Input<number>;
    /**
     * Option of `highest` or `lowest` for High/Low Orchestrator
     */
    sort?: pulumi.Input<string>;
    /**
     * Option of `subset`, `rankTiered`, `maxPercentage`, `orchestrator-highest-lowest-attribute`
     */
    type: pulumi.Input<string>;
}

export interface ProjectResourceModelSource {
    /**
     * Configuration parameters for the selected plugin
     */
    config: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource model plugin to use
     */
    type: pulumi.Input<string>;
}
