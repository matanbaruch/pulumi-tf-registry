// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRumLogExportList(args: GetRumLogExportListArgs, opts?: pulumi.InvokeOptions): Promise<GetRumLogExportListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getRumLogExportList:getRumLogExportList", {
        "id": args.id,
        "projectId": args.projectId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRumLogExportList.
 */
export interface GetRumLogExportListArgs {
    id?: string;
    projectId: number;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getRumLogExportList.
 */
export interface GetRumLogExportListResult {
    readonly id: string;
    readonly projectId: number;
    readonly result: string;
    readonly resultOutputFile?: string;
}
export function getRumLogExportListOutput(args: GetRumLogExportListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRumLogExportListResult> {
    return pulumi.output(args).apply((a: any) => getRumLogExportList(a, opts))
}

/**
 * A collection of arguments for invoking getRumLogExportList.
 */
export interface GetRumLogExportListOutputArgs {
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
}
