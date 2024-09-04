// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDlcDescribeWorkGroupInfo(args?: GetDlcDescribeWorkGroupInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetDlcDescribeWorkGroupInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDlcDescribeWorkGroupInfo:getDlcDescribeWorkGroupInfo", {
        "filters": args.filters,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "sortBy": args.sortBy,
        "sorting": args.sorting,
        "type": args.type,
        "workGroupId": args.workGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDlcDescribeWorkGroupInfo.
 */
export interface GetDlcDescribeWorkGroupInfoArgs {
    filters?: inputs.GetDlcDescribeWorkGroupInfoFilter[];
    id?: string;
    resultOutputFile?: string;
    sortBy?: string;
    sorting?: string;
    type?: string;
    workGroupId?: number;
}

/**
 * A collection of values returned by getDlcDescribeWorkGroupInfo.
 */
export interface GetDlcDescribeWorkGroupInfoResult {
    readonly filters?: outputs.GetDlcDescribeWorkGroupInfoFilter[];
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly sortBy?: string;
    readonly sorting?: string;
    readonly type?: string;
    readonly workGroupId?: number;
    readonly workGroupInfos: outputs.GetDlcDescribeWorkGroupInfoWorkGroupInfo[];
}
export function getDlcDescribeWorkGroupInfoOutput(args?: GetDlcDescribeWorkGroupInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDlcDescribeWorkGroupInfoResult> {
    return pulumi.output(args).apply((a: any) => getDlcDescribeWorkGroupInfo(a, opts))
}

/**
 * A collection of arguments for invoking getDlcDescribeWorkGroupInfo.
 */
export interface GetDlcDescribeWorkGroupInfoOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDlcDescribeWorkGroupInfoFilterArgs>[]>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    sorting?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    workGroupId?: pulumi.Input<number>;
}
