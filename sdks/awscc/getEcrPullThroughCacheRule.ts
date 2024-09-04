// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEcrPullThroughCacheRule(args: GetEcrPullThroughCacheRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetEcrPullThroughCacheRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEcrPullThroughCacheRule:getEcrPullThroughCacheRule", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcrPullThroughCacheRule.
 */
export interface GetEcrPullThroughCacheRuleArgs {
    id: string;
}

/**
 * A collection of values returned by getEcrPullThroughCacheRule.
 */
export interface GetEcrPullThroughCacheRuleResult {
    readonly credentialArn: string;
    readonly ecrRepositoryPrefix: string;
    readonly id: string;
    readonly upstreamRegistry: string;
    readonly upstreamRegistryUrl: string;
}
export function getEcrPullThroughCacheRuleOutput(args: GetEcrPullThroughCacheRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcrPullThroughCacheRuleResult> {
    return pulumi.output(args).apply((a: any) => getEcrPullThroughCacheRule(a, opts))
}

/**
 * A collection of arguments for invoking getEcrPullThroughCacheRule.
 */
export interface GetEcrPullThroughCacheRuleOutputArgs {
    id: pulumi.Input<string>;
}
