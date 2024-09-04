// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityWafProfilelist(args?: GetSecurityWafProfilelistArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityWafProfilelistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSecurityWafProfilelist:getSecurityWafProfilelist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityWafProfilelist.
 */
export interface GetSecurityWafProfilelistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSecurityWafProfilelist.
 */
export interface GetSecurityWafProfilelistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getSecurityWafProfilelistOutput(args?: GetSecurityWafProfilelistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityWafProfilelistResult> {
    return pulumi.output(args).apply((a: any) => getSecurityWafProfilelist(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityWafProfilelist.
 */
export interface GetSecurityWafProfilelistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
