// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTsfGroups(args?: GetTsfGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetTsfGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTsfGroups:getTsfGroups", {
        "applicationId": args.applicationId,
        "clusterId": args.clusterId,
        "groupIdLists": args.groupIdLists,
        "groupResourceTypeLists": args.groupResourceTypeLists,
        "id": args.id,
        "namespaceId": args.namespaceId,
        "orderBy": args.orderBy,
        "orderType": args.orderType,
        "resultOutputFile": args.resultOutputFile,
        "searchWord": args.searchWord,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTsfGroups.
 */
export interface GetTsfGroupsArgs {
    applicationId?: string;
    clusterId?: string;
    groupIdLists?: string[];
    groupResourceTypeLists?: string[];
    id?: string;
    namespaceId?: string;
    orderBy?: string;
    orderType?: number;
    resultOutputFile?: string;
    searchWord?: string;
    status?: string;
}

/**
 * A collection of values returned by getTsfGroups.
 */
export interface GetTsfGroupsResult {
    readonly applicationId?: string;
    readonly clusterId?: string;
    readonly groupIdLists?: string[];
    readonly groupResourceTypeLists?: string[];
    readonly id: string;
    readonly namespaceId?: string;
    readonly orderBy?: string;
    readonly orderType?: number;
    readonly resultOutputFile?: string;
    readonly results: outputs.GetTsfGroupsResult[];
    readonly searchWord?: string;
    readonly status?: string;
}
export function getTsfGroupsOutput(args?: GetTsfGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTsfGroupsResult> {
    return pulumi.output(args).apply((a: any) => getTsfGroups(a, opts))
}

/**
 * A collection of arguments for invoking getTsfGroups.
 */
export interface GetTsfGroupsOutputArgs {
    applicationId?: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    groupIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    groupResourceTypeLists?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    namespaceId?: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
    orderType?: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    searchWord?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
