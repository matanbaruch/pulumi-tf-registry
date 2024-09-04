// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformConnectorJenkins(args: GetPlatformConnectorJenkinsArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorJenkinsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorJenkins:getPlatformConnectorJenkins", {
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorJenkins.
 */
export interface GetPlatformConnectorJenkinsArgs {
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorJenkins.
 */
export interface GetPlatformConnectorJenkinsResult {
    readonly auths: outputs.GetPlatformConnectorJenkinsAuth[];
    readonly delegateSelectors: string[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly jenkinsUrl: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
}
export function getPlatformConnectorJenkinsOutput(args: GetPlatformConnectorJenkinsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorJenkinsResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorJenkins(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorJenkins.
 */
export interface GetPlatformConnectorJenkinsOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
