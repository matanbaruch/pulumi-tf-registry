// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformTriggers(args: GetPlatformTriggersArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformTriggersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformTriggers:getPlatformTriggers", {
        "id": args.id,
        "identifier": args.identifier,
        "ignoreError": args.ignoreError,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
        "targetId": args.targetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformTriggers.
 */
export interface GetPlatformTriggersArgs {
    id?: string;
    identifier?: string;
    ignoreError?: boolean;
    name?: string;
    orgId: string;
    projectId: string;
    targetId: string;
}

/**
 * A collection of values returned by getPlatformTriggers.
 */
export interface GetPlatformTriggersResult {
    readonly description: string;
    readonly id: string;
    readonly identifier?: string;
    readonly ignoreError?: boolean;
    readonly name?: string;
    readonly orgId: string;
    readonly projectId: string;
    readonly tags: string[];
    readonly targetId: string;
    readonly yaml: string;
}
export function getPlatformTriggersOutput(args: GetPlatformTriggersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformTriggersResult> {
    return pulumi.output(args).apply((a: any) => getPlatformTriggers(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformTriggers.
 */
export interface GetPlatformTriggersOutputArgs {
    id?: pulumi.Input<string>;
    identifier?: pulumi.Input<string>;
    ignoreError?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    targetId: pulumi.Input<string>;
}
