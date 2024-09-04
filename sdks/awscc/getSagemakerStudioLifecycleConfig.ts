// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSagemakerStudioLifecycleConfig(args: GetSagemakerStudioLifecycleConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetSagemakerStudioLifecycleConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerStudioLifecycleConfig:getSagemakerStudioLifecycleConfig", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSagemakerStudioLifecycleConfig.
 */
export interface GetSagemakerStudioLifecycleConfigArgs {
    id: string;
}

/**
 * A collection of values returned by getSagemakerStudioLifecycleConfig.
 */
export interface GetSagemakerStudioLifecycleConfigResult {
    readonly id: string;
    readonly studioLifecycleConfigAppType: string;
    readonly studioLifecycleConfigArn: string;
    readonly studioLifecycleConfigContent: string;
    readonly studioLifecycleConfigName: string;
    readonly tags: outputs.GetSagemakerStudioLifecycleConfigTag[];
}
export function getSagemakerStudioLifecycleConfigOutput(args: GetSagemakerStudioLifecycleConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerStudioLifecycleConfigResult> {
    return pulumi.output(args).apply((a: any) => getSagemakerStudioLifecycleConfig(a, opts))
}

/**
 * A collection of arguments for invoking getSagemakerStudioLifecycleConfig.
 */
export interface GetSagemakerStudioLifecycleConfigOutputArgs {
    id: pulumi.Input<string>;
}
