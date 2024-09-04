// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53ResolverRule(args?: GetRoute53ResolverRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53ResolverRuleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRoute53ResolverRule:getRoute53ResolverRule", {
        "domainName": args.domainName,
        "id": args.id,
        "name": args.name,
        "resolverEndpointId": args.resolverEndpointId,
        "resolverRuleId": args.resolverRuleId,
        "ruleType": args.ruleType,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoute53ResolverRule.
 */
export interface GetRoute53ResolverRuleArgs {
    domainName?: string;
    id?: string;
    name?: string;
    resolverEndpointId?: string;
    resolverRuleId?: string;
    ruleType?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getRoute53ResolverRule.
 */
export interface GetRoute53ResolverRuleResult {
    readonly arn: string;
    readonly domainName: string;
    readonly id: string;
    readonly name: string;
    readonly ownerId: string;
    readonly resolverEndpointId: string;
    readonly resolverRuleId: string;
    readonly ruleType: string;
    readonly shareStatus: string;
    readonly tags: {[key: string]: string};
}
export function getRoute53ResolverRuleOutput(args?: GetRoute53ResolverRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53ResolverRuleResult> {
    return pulumi.output(args).apply((a: any) => getRoute53ResolverRule(a, opts))
}

/**
 * A collection of arguments for invoking getRoute53ResolverRule.
 */
export interface GetRoute53ResolverRuleOutputArgs {
    domainName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resolverEndpointId?: pulumi.Input<string>;
    resolverRuleId?: pulumi.Input<string>;
    ruleType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
