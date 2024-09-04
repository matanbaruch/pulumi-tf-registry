// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterPrefixlist6list(args?: GetRouterPrefixlist6listArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterPrefixlist6listResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getRouterPrefixlist6list:getRouterPrefixlist6list", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterPrefixlist6list.
 */
export interface GetRouterPrefixlist6listArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getRouterPrefixlist6list.
 */
export interface GetRouterPrefixlist6listResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getRouterPrefixlist6listOutput(args?: GetRouterPrefixlist6listOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterPrefixlist6listResult> {
    return pulumi.output(args).apply((a: any) => getRouterPrefixlist6list(a, opts))
}

/**
 * A collection of arguments for invoking getRouterPrefixlist6list.
 */
export interface GetRouterPrefixlist6listOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
