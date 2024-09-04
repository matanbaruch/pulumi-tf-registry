// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPostgresqlXlogs(args: GetPostgresqlXlogsArgs, opts?: pulumi.InvokeOptions): Promise<GetPostgresqlXlogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getPostgresqlXlogs:getPostgresqlXlogs", {
        "endTime": args.endTime,
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPostgresqlXlogs.
 */
export interface GetPostgresqlXlogsArgs {
    endTime?: string;
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
    startTime?: string;
}

/**
 * A collection of values returned by getPostgresqlXlogs.
 */
export interface GetPostgresqlXlogsResult {
    readonly endTime?: string;
    readonly id: string;
    readonly instanceId: string;
    readonly lists: outputs.GetPostgresqlXlogsList[];
    readonly resultOutputFile?: string;
    readonly startTime?: string;
}
export function getPostgresqlXlogsOutput(args: GetPostgresqlXlogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostgresqlXlogsResult> {
    return pulumi.output(args).apply((a: any) => getPostgresqlXlogs(a, opts))
}

/**
 * A collection of arguments for invoking getPostgresqlXlogs.
 */
export interface GetPostgresqlXlogsOutputArgs {
    endTime?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
}
