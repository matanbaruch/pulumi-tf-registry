// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlatformConnectorElasticsearch(args: GetPlatformConnectorElasticsearchArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorElasticsearchResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorElasticsearch:getPlatformConnectorElasticsearch", {
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorElasticsearch.
 */
export interface GetPlatformConnectorElasticsearchArgs {
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorElasticsearch.
 */
export interface GetPlatformConnectorElasticsearchResult {
    readonly apiTokens: outputs.GetPlatformConnectorElasticsearchApiToken[];
    readonly delegateSelectors: string[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly tags: string[];
    readonly url: string;
    readonly usernamePasswords: outputs.GetPlatformConnectorElasticsearchUsernamePassword[];
}
export function getPlatformConnectorElasticsearchOutput(args: GetPlatformConnectorElasticsearchOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorElasticsearchResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorElasticsearch(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorElasticsearch.
 */
export interface GetPlatformConnectorElasticsearchOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
