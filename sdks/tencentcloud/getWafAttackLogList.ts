// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafAttackLogList(args: GetWafAttackLogListArgs, opts?: pulumi.InvokeOptions): Promise<GetWafAttackLogListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getWafAttackLogList:getWafAttackLogList", {
        "domain": args.domain,
        "endTime": args.endTime,
        "id": args.id,
        "page": args.page,
        "queryCount": args.queryCount,
        "queryString": args.queryString,
        "resultOutputFile": args.resultOutputFile,
        "sort": args.sort,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafAttackLogList.
 */
export interface GetWafAttackLogListArgs {
    domain: string;
    endTime: string;
    id?: string;
    page?: number;
    queryCount?: number;
    queryString: string;
    resultOutputFile?: string;
    sort?: string;
    startTime: string;
}

/**
 * A collection of values returned by getWafAttackLogList.
 */
export interface GetWafAttackLogListResult {
    readonly datas: outputs.GetWafAttackLogListData[];
    readonly domain: string;
    readonly endTime: string;
    readonly id: string;
    readonly page?: number;
    readonly queryCount?: number;
    readonly queryString: string;
    readonly resultOutputFile?: string;
    readonly sort?: string;
    readonly startTime: string;
}
export function getWafAttackLogListOutput(args: GetWafAttackLogListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafAttackLogListResult> {
    return pulumi.output(args).apply((a: any) => getWafAttackLogList(a, opts))
}

/**
 * A collection of arguments for invoking getWafAttackLogList.
 */
export interface GetWafAttackLogListOutputArgs {
    domain: pulumi.Input<string>;
    endTime: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    page?: pulumi.Input<number>;
    queryCount?: pulumi.Input<number>;
    queryString: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    sort?: pulumi.Input<string>;
    startTime: pulumi.Input<string>;
}
