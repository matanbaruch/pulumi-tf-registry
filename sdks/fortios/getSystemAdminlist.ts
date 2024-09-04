// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemAdminlist(args?: GetSystemAdminlistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemAdminlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemAdminlist:getSystemAdminlist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAdminlist.
 */
export interface GetSystemAdminlistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemAdminlist.
 */
export interface GetSystemAdminlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getSystemAdminlistOutput(args?: GetSystemAdminlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAdminlistResult> {
    return pulumi.output(args).apply((a: any) => getSystemAdminlist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAdminlist.
 */
export interface GetSystemAdminlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
