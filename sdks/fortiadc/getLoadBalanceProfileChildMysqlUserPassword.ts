// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceProfileChildMysqlUserPassword(args: GetLoadBalanceProfileChildMysqlUserPasswordArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceProfileChildMysqlUserPasswordResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceProfileChildMysqlUserPassword:getLoadBalanceProfileChildMysqlUserPassword", {
        "id": args.id,
        "mkey": args.mkey,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildMysqlUserPassword.
 */
export interface GetLoadBalanceProfileChildMysqlUserPasswordArgs {
    id?: string;
    mkey: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceProfileChildMysqlUserPassword.
 */
export interface GetLoadBalanceProfileChildMysqlUserPasswordResult {
    readonly id: string;
    readonly mkey: string;
    readonly password: string;
    readonly pkey: string;
    readonly username: string;
    readonly vdom?: string;
}
export function getLoadBalanceProfileChildMysqlUserPasswordOutput(args: GetLoadBalanceProfileChildMysqlUserPasswordOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceProfileChildMysqlUserPasswordResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceProfileChildMysqlUserPassword(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildMysqlUserPassword.
 */
export interface GetLoadBalanceProfileChildMysqlUserPasswordOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
