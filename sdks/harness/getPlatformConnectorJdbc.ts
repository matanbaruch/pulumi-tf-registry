// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformConnectorJdbc(args: GetPlatformConnectorJdbcArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorJdbcResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorJdbc:getPlatformConnectorJdbc", {
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorJdbc.
 */
export interface GetPlatformConnectorJdbcArgs {
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorJdbc.
 */
export interface GetPlatformConnectorJdbcResult {
    readonly credentials: outputs.GetPlatformConnectorJdbcCredential[];
    readonly delegateSelectors: string[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
    readonly url: string;
}
export function getPlatformConnectorJdbcOutput(args: GetPlatformConnectorJdbcOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorJdbcResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorJdbc(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorJdbc.
 */
export interface GetPlatformConnectorJdbcOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
