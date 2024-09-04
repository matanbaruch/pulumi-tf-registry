// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterMulticastflowlist(args?: GetRouterMulticastflowlistArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterMulticastflowlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiswitch:index/getRouterMulticastflowlist:getRouterMulticastflowlist", {
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterMulticastflowlist.
 */
export interface GetRouterMulticastflowlistArgs {
    filter?: string;
    id?: string;
}

/**
 * A collection of values returned by getRouterMulticastflowlist.
 */
export interface GetRouterMulticastflowlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
}
export function getRouterMulticastflowlistOutput(args?: GetRouterMulticastflowlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterMulticastflowlistResult> {
    return pulumi.output(args).apply((a: any) => getRouterMulticastflowlist(a, opts))
}

/**
 * A collection of arguments for invoking getRouterMulticastflowlist.
 */
export interface GetRouterMulticastflowlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
