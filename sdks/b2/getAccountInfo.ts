// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAccountInfo(args?: GetAccountInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("b2:index/getAccountInfo:getAccountInfo", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccountInfo.
 */
export interface GetAccountInfoArgs {
    id?: string;
}

/**
 * A collection of values returned by getAccountInfo.
 */
export interface GetAccountInfoResult {
    readonly accountAuthToken: string;
    readonly accountId: string;
    readonly alloweds: outputs.GetAccountInfoAllowed[];
    readonly apiUrl: string;
    readonly downloadUrl: string;
    readonly id: string;
    readonly s3ApiUrl: string;
}
export function getAccountInfoOutput(args?: GetAccountInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountInfoResult> {
    return pulumi.output(args).apply((a: any) => getAccountInfo(a, opts))
}

/**
 * A collection of arguments for invoking getAccountInfo.
 */
export interface GetAccountInfoOutputArgs {
    id?: pulumi.Input<string>;
}
