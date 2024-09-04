// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getResourceManagerAccountDeletionCheckTask(args: GetResourceManagerAccountDeletionCheckTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceManagerAccountDeletionCheckTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getResourceManagerAccountDeletionCheckTask:getResourceManagerAccountDeletionCheckTask", {
        "accountId": args.accountId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourceManagerAccountDeletionCheckTask.
 */
export interface GetResourceManagerAccountDeletionCheckTaskArgs {
    accountId: string;
    id?: string;
}

/**
 * A collection of values returned by getResourceManagerAccountDeletionCheckTask.
 */
export interface GetResourceManagerAccountDeletionCheckTaskResult {
    readonly abandonAbleChecks: outputs.GetResourceManagerAccountDeletionCheckTaskAbandonAbleCheck[];
    readonly accountId: string;
    readonly allowDelete: boolean;
    readonly id: string;
    readonly notAllowReasons: outputs.GetResourceManagerAccountDeletionCheckTaskNotAllowReason[];
    readonly status: string;
}
export function getResourceManagerAccountDeletionCheckTaskOutput(args: GetResourceManagerAccountDeletionCheckTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceManagerAccountDeletionCheckTaskResult> {
    return pulumi.output(args).apply((a: any) => getResourceManagerAccountDeletionCheckTask(a, opts))
}

/**
 * A collection of arguments for invoking getResourceManagerAccountDeletionCheckTask.
 */
export interface GetResourceManagerAccountDeletionCheckTaskOutputArgs {
    accountId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
