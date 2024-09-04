// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformConnectorDatadog(args: GetPlatformConnectorDatadogArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorDatadogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorDatadog:getPlatformConnectorDatadog", {
        "delegateSelectors": args.delegateSelectors,
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorDatadog.
 */
export interface GetPlatformConnectorDatadogArgs {
    delegateSelectors?: string[];
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorDatadog.
 */
export interface GetPlatformConnectorDatadogResult {
    readonly apiKeyRef: string;
    readonly applicationKeyRef: string;
    readonly delegateSelectors?: string[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
    readonly url: string;
}
export function getPlatformConnectorDatadogOutput(args: GetPlatformConnectorDatadogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorDatadogResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorDatadog(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorDatadog.
 */
export interface GetPlatformConnectorDatadogOutputArgs {
    delegateSelectors?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
