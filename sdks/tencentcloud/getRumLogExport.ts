// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRumLogExport(args: GetRumLogExportArgs, opts?: pulumi.InvokeOptions): Promise<GetRumLogExportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getRumLogExport:getRumLogExport", {
        "endTime": args.endTime,
        "fields": args.fields,
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "query": args.query,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRumLogExport.
 */
export interface GetRumLogExportArgs {
    endTime: string;
    fields?: string[];
    id?: string;
    name: string;
    projectId: number;
    query: string;
    resultOutputFile?: string;
    startTime: string;
}

/**
 * A collection of values returned by getRumLogExport.
 */
export interface GetRumLogExportResult {
    readonly endTime: string;
    readonly fields?: string[];
    readonly id: string;
    readonly name: string;
    readonly projectId: number;
    readonly query: string;
    readonly result: string;
    readonly resultOutputFile?: string;
    readonly startTime: string;
}
export function getRumLogExportOutput(args: GetRumLogExportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRumLogExportResult> {
    return pulumi.output(args).apply((a: any) => getRumLogExport(a, opts))
}

/**
 * A collection of arguments for invoking getRumLogExport.
 */
export interface GetRumLogExportOutputArgs {
    endTime: pulumi.Input<string>;
    fields?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    projectId: pulumi.Input<number>;
    query: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<string>;
}
