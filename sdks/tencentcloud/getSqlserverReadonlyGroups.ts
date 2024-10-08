// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSqlserverReadonlyGroups(args?: GetSqlserverReadonlyGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlserverReadonlyGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSqlserverReadonlyGroups:getSqlserverReadonlyGroups", {
        "id": args.id,
        "masterInstanceId": args.masterInstanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlserverReadonlyGroups.
 */
export interface GetSqlserverReadonlyGroupsArgs {
    id?: string;
    masterInstanceId?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSqlserverReadonlyGroups.
 */
export interface GetSqlserverReadonlyGroupsResult {
    readonly id: string;
    readonly lists: outputs.GetSqlserverReadonlyGroupsList[];
    readonly masterInstanceId?: string;
    readonly resultOutputFile?: string;
}
export function getSqlserverReadonlyGroupsOutput(args?: GetSqlserverReadonlyGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlserverReadonlyGroupsResult> {
    return pulumi.output(args).apply((a: any) => getSqlserverReadonlyGroups(a, opts))
}

/**
 * A collection of arguments for invoking getSqlserverReadonlyGroups.
 */
export interface GetSqlserverReadonlyGroupsOutputArgs {
    id?: pulumi.Input<string>;
    masterInstanceId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
