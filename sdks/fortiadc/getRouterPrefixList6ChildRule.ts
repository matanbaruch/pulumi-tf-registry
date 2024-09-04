// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRouterPrefixList6ChildRule(args: GetRouterPrefixList6ChildRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterPrefixList6ChildRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getRouterPrefixList6ChildRule:getRouterPrefixList6ChildRule", {
        "id": args.id,
        "mkey": args.mkey,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterPrefixList6ChildRule.
 */
export interface GetRouterPrefixList6ChildRuleArgs {
    id?: string;
    mkey: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getRouterPrefixList6ChildRule.
 */
export interface GetRouterPrefixList6ChildRuleResult {
    readonly action: string;
    readonly ge: string;
    readonly id: string;
    readonly le: string;
    readonly mkey: string;
    readonly pkey: string;
    readonly prefix6: string;
    readonly vdom?: string;
}
export function getRouterPrefixList6ChildRuleOutput(args: GetRouterPrefixList6ChildRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterPrefixList6ChildRuleResult> {
    return pulumi.output(args).apply((a: any) => getRouterPrefixList6ChildRule(a, opts))
}

/**
 * A collection of arguments for invoking getRouterPrefixList6ChildRule.
 */
export interface GetRouterPrefixList6ChildRuleOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
