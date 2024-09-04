// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatasyncLocationObjectStorage(args: GetDatasyncLocationObjectStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasyncLocationObjectStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDatasyncLocationObjectStorage:getDatasyncLocationObjectStorage", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatasyncLocationObjectStorage.
 */
export interface GetDatasyncLocationObjectStorageArgs {
    id: string;
}

/**
 * A collection of values returned by getDatasyncLocationObjectStorage.
 */
export interface GetDatasyncLocationObjectStorageResult {
    readonly accessKey: string;
    readonly agentArns: string[];
    readonly bucketName: string;
    readonly id: string;
    readonly locationArn: string;
    readonly locationUri: string;
    readonly secretKey: string;
    readonly serverCertificate: string;
    readonly serverHostname: string;
    readonly serverPort: number;
    readonly serverProtocol: string;
    readonly subdirectory: string;
    readonly tags: outputs.GetDatasyncLocationObjectStorageTag[];
}
export function getDatasyncLocationObjectStorageOutput(args: GetDatasyncLocationObjectStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasyncLocationObjectStorageResult> {
    return pulumi.output(args).apply((a: any) => getDatasyncLocationObjectStorage(a, opts))
}

/**
 * A collection of arguments for invoking getDatasyncLocationObjectStorage.
 */
export interface GetDatasyncLocationObjectStorageOutputArgs {
    id: pulumi.Input<string>;
}
