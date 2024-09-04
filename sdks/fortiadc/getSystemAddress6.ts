// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemAddress6(args: GetSystemAddress6Args, opts?: pulumi.InvokeOptions): Promise<GetSystemAddress6Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemAddress6:getSystemAddress6", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAddress6.
 */
export interface GetSystemAddress6Args {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemAddress6.
 */
export interface GetSystemAddress6Result {
    readonly id: string;
    readonly ip6Max: string;
    readonly ip6Min: string;
    readonly ip6Network: string;
    readonly mkey: string;
    readonly type: string;
    readonly vdom?: string;
}
export function getSystemAddress6Output(args: GetSystemAddress6OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAddress6Result> {
    return pulumi.output(args).apply((a: any) => getSystemAddress6(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAddress6.
 */
export interface GetSystemAddress6OutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
