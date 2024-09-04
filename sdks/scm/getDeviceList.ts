// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDeviceList(args?: GetDeviceListArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getDeviceList:getDeviceList", {
        "limit": args.limit,
        "name": args.name,
        "offset": args.offset,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeviceList.
 */
export interface GetDeviceListArgs {
    limit?: number;
    name?: string;
    offset?: number;
}

/**
 * A collection of values returned by getDeviceList.
 */
export interface GetDeviceListResult {
    readonly datas: outputs.GetDeviceListData[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly limit: number;
    readonly name?: string;
    readonly offset: number;
    readonly tfid: string;
    readonly total: number;
}
export function getDeviceListOutput(args?: GetDeviceListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceListResult> {
    return pulumi.output(args).apply((a: any) => getDeviceList(a, opts))
}

/**
 * A collection of arguments for invoking getDeviceList.
 */
export interface GetDeviceListOutputArgs {
    limit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    offset?: pulumi.Input<number>;
}
