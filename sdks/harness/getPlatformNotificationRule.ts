// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformNotificationRule(args: GetPlatformNotificationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformNotificationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformNotificationRule:getPlatformNotificationRule", {
        "id": args.id,
        "identifier": args.identifier,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformNotificationRule.
 */
export interface GetPlatformNotificationRuleArgs {
    id?: string;
    identifier: string;
    orgId: string;
    projectId: string;
}

/**
 * A collection of values returned by getPlatformNotificationRule.
 */
export interface GetPlatformNotificationRuleResult {
    readonly id: string;
    readonly identifier: string;
    readonly orgId: string;
    readonly projectId: string;
}
export function getPlatformNotificationRuleOutput(args: GetPlatformNotificationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformNotificationRuleResult> {
    return pulumi.output(args).apply((a: any) => getPlatformNotificationRule(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformNotificationRule.
 */
export interface GetPlatformNotificationRuleOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
