// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemIspAddr(args: GetSystemIspAddrArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIspAddrResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemIspAddr:getSystemIspAddr", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIspAddr.
 */
export interface GetSystemIspAddrArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemIspAddr.
 */
export interface GetSystemIspAddrResult {
    readonly id: string;
    readonly mkey: string;
    readonly type: string;
    readonly vdom?: string;
}
export function getSystemIspAddrOutput(args: GetSystemIspAddrOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIspAddrResult> {
    return pulumi.output(args).apply((a: any) => getSystemIspAddr(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIspAddr.
 */
export interface GetSystemIspAddrOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
