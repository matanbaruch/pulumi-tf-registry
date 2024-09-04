// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticsearchDescribeIndexList(args: GetElasticsearchDescribeIndexListArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchDescribeIndexListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getElasticsearchDescribeIndexList:getElasticsearchDescribeIndexList", {
        "id": args.id,
        "indexName": args.indexName,
        "indexStatusLists": args.indexStatusLists,
        "indexType": args.indexType,
        "instanceId": args.instanceId,
        "order": args.order,
        "orderBy": args.orderBy,
        "password": args.password,
        "resultOutputFile": args.resultOutputFile,
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchDescribeIndexList.
 */
export interface GetElasticsearchDescribeIndexListArgs {
    id?: string;
    indexName?: string;
    indexStatusLists?: string[];
    indexType: string;
    instanceId?: string;
    order?: string;
    orderBy?: string;
    password?: string;
    resultOutputFile?: string;
    username?: string;
}

/**
 * A collection of values returned by getElasticsearchDescribeIndexList.
 */
export interface GetElasticsearchDescribeIndexListResult {
    readonly id: string;
    readonly indexMetaFields: outputs.GetElasticsearchDescribeIndexListIndexMetaField[];
    readonly indexName?: string;
    readonly indexStatusLists?: string[];
    readonly indexType: string;
    readonly instanceId?: string;
    readonly order?: string;
    readonly orderBy?: string;
    readonly password?: string;
    readonly resultOutputFile?: string;
    readonly username?: string;
}
export function getElasticsearchDescribeIndexListOutput(args: GetElasticsearchDescribeIndexListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchDescribeIndexListResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchDescribeIndexList(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchDescribeIndexList.
 */
export interface GetElasticsearchDescribeIndexListOutputArgs {
    id?: pulumi.Input<string>;
    indexName?: pulumi.Input<string>;
    indexStatusLists?: pulumi.Input<pulumi.Input<string>[]>;
    indexType: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    order?: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
