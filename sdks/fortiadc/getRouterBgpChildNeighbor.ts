// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterBgpChildNeighbor(args: GetRouterBgpChildNeighborArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterBgpChildNeighborResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getRouterBgpChildNeighbor:getRouterBgpChildNeighbor", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterBgpChildNeighbor.
 */
export interface GetRouterBgpChildNeighborArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getRouterBgpChildNeighbor.
 */
export interface GetRouterBgpChildNeighborResult {
    readonly distributeListIn: string;
    readonly distributeListIn6: string;
    readonly distributeListOut: string;
    readonly distributeListOut6: string;
    readonly holdtime: string;
    readonly id: string;
    readonly interface: string;
    readonly ip: string;
    readonly ip6: string;
    readonly keepalive: string;
    readonly mkey: string;
    readonly port: string;
    readonly prefixListIn: string;
    readonly prefixListIn6: string;
    readonly prefixListOut: string;
    readonly prefixListOut6: string;
    readonly remoteAs: string;
    readonly type: string;
    readonly vdom?: string;
    readonly weight: string;
}
export function getRouterBgpChildNeighborOutput(args: GetRouterBgpChildNeighborOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterBgpChildNeighborResult> {
    return pulumi.output(args).apply((a: any) => getRouterBgpChildNeighbor(a, opts))
}

/**
 * A collection of arguments for invoking getRouterBgpChildNeighbor.
 */
export interface GetRouterBgpChildNeighborOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
