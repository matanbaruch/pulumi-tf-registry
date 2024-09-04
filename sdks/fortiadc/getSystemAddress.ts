// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemAddress(args: GetSystemAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemAddressResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemAddress:getSystemAddress", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAddress.
 */
export interface GetSystemAddressArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemAddress.
 */
export interface GetSystemAddressResult {
    readonly id: string;
    readonly ipMax: string;
    readonly ipMin: string;
    readonly ipNetmask: string;
    readonly mkey: string;
    readonly type: string;
    readonly vdom?: string;
}
export function getSystemAddressOutput(args: GetSystemAddressOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAddressResult> {
    return pulumi.output(args).apply((a: any) => getSystemAddress(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAddress.
 */
export interface GetSystemAddressOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
