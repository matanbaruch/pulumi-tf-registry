// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppsyncResolver(args: GetAppsyncResolverArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsyncResolverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAppsyncResolver:getAppsyncResolver", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsyncResolver.
 */
export interface GetAppsyncResolverArgs {
    id: string;
}

/**
 * A collection of values returned by getAppsyncResolver.
 */
export interface GetAppsyncResolverResult {
    readonly apiId: string;
    readonly cachingConfig: outputs.GetAppsyncResolverCachingConfig;
    readonly code: string;
    readonly codeS3Location: string;
    readonly dataSourceName: string;
    readonly fieldName: string;
    readonly id: string;
    readonly kind: string;
    readonly maxBatchSize: number;
    readonly metricsConfig: string;
    readonly pipelineConfig: outputs.GetAppsyncResolverPipelineConfig;
    readonly requestMappingTemplate: string;
    readonly requestMappingTemplateS3Location: string;
    readonly resolverArn: string;
    readonly responseMappingTemplate: string;
    readonly responseMappingTemplateS3Location: string;
    readonly runtime: outputs.GetAppsyncResolverRuntime;
    readonly syncConfig: outputs.GetAppsyncResolverSyncConfig;
    readonly typeName: string;
}
export function getAppsyncResolverOutput(args: GetAppsyncResolverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsyncResolverResult> {
    return pulumi.output(args).apply((a: any) => getAppsyncResolver(a, opts))
}

/**
 * A collection of arguments for invoking getAppsyncResolver.
 */
export interface GetAppsyncResolverOutputArgs {
    id: pulumi.Input<string>;
}
