// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceClonePool(args: GetLoadBalanceClonePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceClonePoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceClonePool:getLoadBalanceClonePool", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceClonePool.
 */
export interface GetLoadBalanceClonePoolArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceClonePool.
 */
export interface GetLoadBalanceClonePoolResult {
    readonly id: string;
    readonly mkey: string;
    readonly vdom?: string;
}
export function getLoadBalanceClonePoolOutput(args: GetLoadBalanceClonePoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceClonePoolResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceClonePool(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceClonePool.
 */
export interface GetLoadBalanceClonePoolOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
