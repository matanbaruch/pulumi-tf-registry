// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceProfileChildMysqlRule(args: GetLoadBalanceProfileChildMysqlRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceProfileChildMysqlRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceProfileChildMysqlRule:getLoadBalanceProfileChildMysqlRule", {
        "id": args.id,
        "mkey": args.mkey,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildMysqlRule.
 */
export interface GetLoadBalanceProfileChildMysqlRuleArgs {
    id?: string;
    mkey: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceProfileChildMysqlRule.
 */
export interface GetLoadBalanceProfileChildMysqlRuleResult {
    readonly clientIpList: string;
    readonly dbList: string;
    readonly id: string;
    readonly mkey: string;
    readonly pkey: string;
    readonly sqlList: string;
    readonly tableList: string;
    readonly type: string;
    readonly userList: string;
    readonly vdom?: string;
}
export function getLoadBalanceProfileChildMysqlRuleOutput(args: GetLoadBalanceProfileChildMysqlRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceProfileChildMysqlRuleResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceProfileChildMysqlRule(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildMysqlRule.
 */
export interface GetLoadBalanceProfileChildMysqlRuleOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
