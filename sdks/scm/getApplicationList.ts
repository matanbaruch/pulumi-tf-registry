// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplicationList(args?: GetApplicationListArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getApplicationList:getApplicationList", {
        "device": args.device,
        "folder": args.folder,
        "limit": args.limit,
        "name": args.name,
        "offset": args.offset,
        "snippet": args.snippet,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplicationList.
 */
export interface GetApplicationListArgs {
    device?: string;
    folder?: string;
    limit?: number;
    name?: string;
    offset?: number;
    snippet?: string;
}

/**
 * A collection of values returned by getApplicationList.
 */
export interface GetApplicationListResult {
    readonly datas: outputs.GetApplicationListData[];
    readonly device?: string;
    readonly folder?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly limit: number;
    readonly name?: string;
    readonly offset: number;
    readonly snippet?: string;
    readonly tfid: string;
    readonly total: number;
}
export function getApplicationListOutput(args?: GetApplicationListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationListResult> {
    return pulumi.output(args).apply((a: any) => getApplicationList(a, opts))
}

/**
 * A collection of arguments for invoking getApplicationList.
 */
export interface GetApplicationListOutputArgs {
    device?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    offset?: pulumi.Input<number>;
    snippet?: pulumi.Input<string>;
}
