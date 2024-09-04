// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceWebFilterProfileChildCategoryMembers(args: GetLoadBalanceWebFilterProfileChildCategoryMembersArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceWebFilterProfileChildCategoryMembersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceWebFilterProfileChildCategoryMembers:getLoadBalanceWebFilterProfileChildCategoryMembers", {
        "id": args.id,
        "mkey": args.mkey,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceWebFilterProfileChildCategoryMembers.
 */
export interface GetLoadBalanceWebFilterProfileChildCategoryMembersArgs {
    id?: string;
    mkey: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceWebFilterProfileChildCategoryMembers.
 */
export interface GetLoadBalanceWebFilterProfileChildCategoryMembersResult {
    readonly category: string;
    readonly id: string;
    readonly mkey: string;
    readonly pkey: string;
    readonly vdom?: string;
}
export function getLoadBalanceWebFilterProfileChildCategoryMembersOutput(args: GetLoadBalanceWebFilterProfileChildCategoryMembersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceWebFilterProfileChildCategoryMembersResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceWebFilterProfileChildCategoryMembers(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceWebFilterProfileChildCategoryMembers.
 */
export interface GetLoadBalanceWebFilterProfileChildCategoryMembersOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
