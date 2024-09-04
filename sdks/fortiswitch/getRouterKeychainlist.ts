// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterKeychainlist(args?: GetRouterKeychainlistArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterKeychainlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiswitch:index/getRouterKeychainlist:getRouterKeychainlist", {
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterKeychainlist.
 */
export interface GetRouterKeychainlistArgs {
    filter?: string;
    id?: string;
}

/**
 * A collection of values returned by getRouterKeychainlist.
 */
export interface GetRouterKeychainlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
}
export function getRouterKeychainlistOutput(args?: GetRouterKeychainlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterKeychainlistResult> {
    return pulumi.output(args).apply((a: any) => getRouterKeychainlist(a, opts))
}

/**
 * A collection of arguments for invoking getRouterKeychainlist.
 */
export interface GetRouterKeychainlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
