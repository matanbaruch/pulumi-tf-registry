// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterPrefixList(args: GetRouterPrefixListArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterPrefixListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getRouterPrefixList:getRouterPrefixList", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterPrefixList.
 */
export interface GetRouterPrefixListArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getRouterPrefixList.
 */
export interface GetRouterPrefixListResult {
    readonly description: string;
    readonly id: string;
    readonly mkey: string;
    readonly vdom?: string;
}
export function getRouterPrefixListOutput(args: GetRouterPrefixListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterPrefixListResult> {
    return pulumi.output(args).apply((a: any) => getRouterPrefixList(a, opts))
}

/**
 * A collection of arguments for invoking getRouterPrefixList.
 */
export interface GetRouterPrefixListOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
