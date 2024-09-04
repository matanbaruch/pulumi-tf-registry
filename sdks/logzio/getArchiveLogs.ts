// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getArchiveLogs(args?: GetArchiveLogsArgs, opts?: pulumi.InvokeOptions): Promise<GetArchiveLogsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("logzio:index/getArchiveLogs:getArchiveLogs", {
        "archiveId": args.archiveId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getArchiveLogs.
 */
export interface GetArchiveLogsArgs {
    archiveId?: number;
    id?: string;
}

/**
 * A collection of values returned by getArchiveLogs.
 */
export interface GetArchiveLogsResult {
    readonly archiveId?: number;
    readonly awsAccessKey: string;
    readonly awsCredentialsType: string;
    readonly awsS3IamCredentialsArn: string;
    readonly awsS3Path: string;
    readonly azureAccountName: string;
    readonly azureBlobPath: string;
    readonly azureClientId: string;
    readonly azureContainerName: string;
    readonly azureTenantId: string;
    readonly compressed: boolean;
    readonly enabled: boolean;
    readonly id: string;
    readonly storageType: string;
}
export function getArchiveLogsOutput(args?: GetArchiveLogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArchiveLogsResult> {
    return pulumi.output(args).apply((a: any) => getArchiveLogs(a, opts))
}

/**
 * A collection of arguments for invoking getArchiveLogs.
 */
export interface GetArchiveLogsOutputArgs {
    archiveId?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
