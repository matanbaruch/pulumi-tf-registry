// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotTopicRuleDestination(args: GetIotTopicRuleDestinationArgs, opts?: pulumi.InvokeOptions): Promise<GetIotTopicRuleDestinationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotTopicRuleDestination:getIotTopicRuleDestination", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotTopicRuleDestination.
 */
export interface GetIotTopicRuleDestinationArgs {
    id: string;
}

/**
 * A collection of values returned by getIotTopicRuleDestination.
 */
export interface GetIotTopicRuleDestinationResult {
    readonly arn: string;
    readonly httpUrlProperties: outputs.GetIotTopicRuleDestinationHttpUrlProperties;
    readonly id: string;
    readonly status: string;
    readonly statusReason: string;
    readonly vpcProperties: outputs.GetIotTopicRuleDestinationVpcProperties;
}
export function getIotTopicRuleDestinationOutput(args: GetIotTopicRuleDestinationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotTopicRuleDestinationResult> {
    return pulumi.output(args).apply((a: any) => getIotTopicRuleDestination(a, opts))
}

/**
 * A collection of arguments for invoking getIotTopicRuleDestination.
 */
export interface GetIotTopicRuleDestinationOutputArgs {
    id: pulumi.Input<string>;
}
