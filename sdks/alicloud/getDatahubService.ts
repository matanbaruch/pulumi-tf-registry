// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatahubService(args?: GetDatahubServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDatahubServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDatahubService:getDatahubService", {
        "enable": args.enable,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatahubService.
 */
export interface GetDatahubServiceArgs {
    enable?: string;
    id?: string;
}

/**
 * A collection of values returned by getDatahubService.
 */
export interface GetDatahubServiceResult {
    readonly enable?: string;
    readonly id: string;
    readonly status: string;
}
export function getDatahubServiceOutput(args?: GetDatahubServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatahubServiceResult> {
    return pulumi.output(args).apply((a: any) => getDatahubService(a, opts))
}

/**
 * A collection of arguments for invoking getDatahubService.
 */
export interface GetDatahubServiceOutputArgs {
    enable?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
