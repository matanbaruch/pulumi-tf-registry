// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemIspAddrChildAddresslist(args: GetSystemIspAddrChildAddresslistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIspAddrChildAddresslistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemIspAddrChildAddresslist:getSystemIspAddrChildAddresslist", {
        "filter": args.filter,
        "id": args.id,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIspAddrChildAddresslist.
 */
export interface GetSystemIspAddrChildAddresslistArgs {
    filter?: string;
    id?: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemIspAddrChildAddresslist.
 */
export interface GetSystemIspAddrChildAddresslistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly pkey: string;
    readonly vdom?: string;
}
export function getSystemIspAddrChildAddresslistOutput(args: GetSystemIspAddrChildAddresslistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIspAddrChildAddresslistResult> {
    return pulumi.output(args).apply((a: any) => getSystemIspAddrChildAddresslist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIspAddrChildAddresslist.
 */
export interface GetSystemIspAddrChildAddresslistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
