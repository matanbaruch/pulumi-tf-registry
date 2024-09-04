// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSignerSigningJob(args: GetSignerSigningJobArgs, opts?: pulumi.InvokeOptions): Promise<GetSignerSigningJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSignerSigningJob:getSignerSigningJob", {
        "id": args.id,
        "jobId": args.jobId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSignerSigningJob.
 */
export interface GetSignerSigningJobArgs {
    id?: string;
    jobId: string;
}

/**
 * A collection of values returned by getSignerSigningJob.
 */
export interface GetSignerSigningJobResult {
    readonly completedAt: string;
    readonly createdAt: string;
    readonly id: string;
    readonly jobId: string;
    readonly jobInvoker: string;
    readonly jobOwner: string;
    readonly platformDisplayName: string;
    readonly platformId: string;
    readonly profileName: string;
    readonly profileVersion: string;
    readonly requestedBy: string;
    readonly revocationRecords: outputs.GetSignerSigningJobRevocationRecord[];
    readonly signatureExpiresAt: string;
    readonly signedObjects: outputs.GetSignerSigningJobSignedObject[];
    readonly sources: outputs.GetSignerSigningJobSource[];
    readonly status: string;
    readonly statusReason: string;
}
export function getSignerSigningJobOutput(args: GetSignerSigningJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignerSigningJobResult> {
    return pulumi.output(args).apply((a: any) => getSignerSigningJob(a, opts))
}

/**
 * A collection of arguments for invoking getSignerSigningJob.
 */
export interface GetSignerSigningJobOutputArgs {
    id?: pulumi.Input<string>;
    jobId: pulumi.Input<string>;
}
