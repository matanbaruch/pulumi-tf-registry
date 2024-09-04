// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOceanusCheckSavepoint(args: GetOceanusCheckSavepointArgs, opts?: pulumi.InvokeOptions): Promise<GetOceanusCheckSavepointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getOceanusCheckSavepoint:getOceanusCheckSavepoint", {
        "id": args.id,
        "jobId": args.jobId,
        "recordType": args.recordType,
        "resultOutputFile": args.resultOutputFile,
        "savepointPath": args.savepointPath,
        "serialId": args.serialId,
        "workSpaceId": args.workSpaceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOceanusCheckSavepoint.
 */
export interface GetOceanusCheckSavepointArgs {
    id?: string;
    jobId: string;
    recordType: number;
    resultOutputFile?: string;
    savepointPath: string;
    serialId: string;
    workSpaceId: string;
}

/**
 * A collection of values returned by getOceanusCheckSavepoint.
 */
export interface GetOceanusCheckSavepointResult {
    readonly id: string;
    readonly jobId: string;
    readonly recordType: number;
    readonly resultOutputFile?: string;
    readonly savepointPath: string;
    readonly savepointStatus: number;
    readonly serialId: string;
    readonly workSpaceId: string;
}
export function getOceanusCheckSavepointOutput(args: GetOceanusCheckSavepointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOceanusCheckSavepointResult> {
    return pulumi.output(args).apply((a: any) => getOceanusCheckSavepoint(a, opts))
}

/**
 * A collection of arguments for invoking getOceanusCheckSavepoint.
 */
export interface GetOceanusCheckSavepointOutputArgs {
    id?: pulumi.Input<string>;
    jobId: pulumi.Input<string>;
    recordType: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    savepointPath: pulumi.Input<string>;
    serialId: pulumi.Input<string>;
    workSpaceId: pulumi.Input<string>;
}
