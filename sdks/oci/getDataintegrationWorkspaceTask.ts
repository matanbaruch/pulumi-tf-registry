// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataintegrationWorkspaceTask(args: GetDataintegrationWorkspaceTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetDataintegrationWorkspaceTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataintegrationWorkspaceTask:getDataintegrationWorkspaceTask", {
        "expandReferences": args.expandReferences,
        "key": args.key,
        "workspaceId": args.workspaceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataintegrationWorkspaceTask.
 */
export interface GetDataintegrationWorkspaceTaskArgs {
    expandReferences: string;
    key: string;
    workspaceId: string;
}

/**
 * A collection of values returned by getDataintegrationWorkspaceTask.
 */
export interface GetDataintegrationWorkspaceTaskResult {
    readonly apiCallMode: string;
    readonly authConfigs: outputs.GetDataintegrationWorkspaceTaskAuthConfig[];
    readonly cancelRestCallConfigs: outputs.GetDataintegrationWorkspaceTaskCancelRestCallConfig[];
    readonly configProviderDelegates: outputs.GetDataintegrationWorkspaceTaskConfigProviderDelegate[];
    readonly description: string;
    readonly executeRestCallConfigs: outputs.GetDataintegrationWorkspaceTaskExecuteRestCallConfig[];
    readonly expandReferences: string;
    readonly id: string;
    readonly identifier: string;
    readonly inputPorts: outputs.GetDataintegrationWorkspaceTaskInputPort[];
    readonly isSingleLoad: boolean;
    readonly key: string;
    readonly keyMap: {[key: string]: string};
    readonly metadatas: outputs.GetDataintegrationWorkspaceTaskMetadata[];
    readonly modelType: string;
    readonly modelVersion: string;
    readonly name: string;
    readonly objectStatus: number;
    readonly objectVersion: number;
    readonly opConfigValues: outputs.GetDataintegrationWorkspaceTaskOpConfigValue[];
    readonly operation: string;
    readonly outputPorts: outputs.GetDataintegrationWorkspaceTaskOutputPort[];
    readonly parallelLoadLimit: number;
    readonly parameters: outputs.GetDataintegrationWorkspaceTaskParameter[];
    readonly parentReves: outputs.GetDataintegrationWorkspaceTaskParentRef[];
    readonly pollRestCallConfigs: outputs.GetDataintegrationWorkspaceTaskPollRestCallConfig[];
    readonly registryMetadatas: outputs.GetDataintegrationWorkspaceTaskRegistryMetadata[];
    readonly typedExpressions: outputs.GetDataintegrationWorkspaceTaskTypedExpression[];
    readonly workspaceId: string;
}
export function getDataintegrationWorkspaceTaskOutput(args: GetDataintegrationWorkspaceTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataintegrationWorkspaceTaskResult> {
    return pulumi.output(args).apply((a: any) => getDataintegrationWorkspaceTask(a, opts))
}

/**
 * A collection of arguments for invoking getDataintegrationWorkspaceTask.
 */
export interface GetDataintegrationWorkspaceTaskOutputArgs {
    expandReferences: pulumi.Input<string>;
    key: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
