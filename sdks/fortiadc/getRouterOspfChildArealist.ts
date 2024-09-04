// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterOspfChildArealist(args?: GetRouterOspfChildArealistArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterOspfChildArealistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getRouterOspfChildArealist:getRouterOspfChildArealist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterOspfChildArealist.
 */
export interface GetRouterOspfChildArealistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getRouterOspfChildArealist.
 */
export interface GetRouterOspfChildArealistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getRouterOspfChildArealistOutput(args?: GetRouterOspfChildArealistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterOspfChildArealistResult> {
    return pulumi.output(args).apply((a: any) => getRouterOspfChildArealist(a, opts))
}

/**
 * A collection of arguments for invoking getRouterOspfChildArealist.
 */
export interface GetRouterOspfChildArealistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
