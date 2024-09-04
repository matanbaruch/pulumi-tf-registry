// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSslDescribeHostLighthouseInstanceList(args: GetSslDescribeHostLighthouseInstanceListArgs, opts?: pulumi.InvokeOptions): Promise<GetSslDescribeHostLighthouseInstanceListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSslDescribeHostLighthouseInstanceList:getSslDescribeHostLighthouseInstanceList", {
        "certificateId": args.certificateId,
        "filters": args.filters,
        "id": args.id,
        "isCache": args.isCache,
        "resourceType": args.resourceType,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSslDescribeHostLighthouseInstanceList.
 */
export interface GetSslDescribeHostLighthouseInstanceListArgs {
    certificateId: string;
    filters?: inputs.GetSslDescribeHostLighthouseInstanceListFilter[];
    id?: string;
    isCache?: number;
    resourceType: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSslDescribeHostLighthouseInstanceList.
 */
export interface GetSslDescribeHostLighthouseInstanceListResult {
    readonly certificateId: string;
    readonly filters?: outputs.GetSslDescribeHostLighthouseInstanceListFilter[];
    readonly id: string;
    readonly instanceLists: outputs.GetSslDescribeHostLighthouseInstanceListInstanceList[];
    readonly isCache?: number;
    readonly resourceType: string;
    readonly resultOutputFile?: string;
}
export function getSslDescribeHostLighthouseInstanceListOutput(args: GetSslDescribeHostLighthouseInstanceListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSslDescribeHostLighthouseInstanceListResult> {
    return pulumi.output(args).apply((a: any) => getSslDescribeHostLighthouseInstanceList(a, opts))
}

/**
 * A collection of arguments for invoking getSslDescribeHostLighthouseInstanceList.
 */
export interface GetSslDescribeHostLighthouseInstanceListOutputArgs {
    certificateId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetSslDescribeHostLighthouseInstanceListFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isCache?: pulumi.Input<number>;
    resourceType: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
