// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getElasticsearchIngestProcessorDateIndexName(args: GetElasticsearchIngestProcessorDateIndexNameArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchIngestProcessorDateIndexNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchIngestProcessorDateIndexName:getElasticsearchIngestProcessorDateIndexName", {
        "dateFormats": args.dateFormats,
        "dateRounding": args.dateRounding,
        "description": args.description,
        "field": args.field,
        "if": args.if,
        "ignoreFailure": args.ignoreFailure,
        "indexNameFormat": args.indexNameFormat,
        "indexNamePrefix": args.indexNamePrefix,
        "locale": args.locale,
        "onFailures": args.onFailures,
        "tag": args.tag,
        "timezone": args.timezone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorDateIndexName.
 */
export interface GetElasticsearchIngestProcessorDateIndexNameArgs {
    dateFormats?: string[];
    dateRounding: string;
    description?: string;
    field: string;
    if?: string;
    ignoreFailure?: boolean;
    indexNameFormat?: string;
    indexNamePrefix?: string;
    locale?: string;
    onFailures?: string[];
    tag?: string;
    timezone?: string;
}

/**
 * A collection of values returned by getElasticsearchIngestProcessorDateIndexName.
 */
export interface GetElasticsearchIngestProcessorDateIndexNameResult {
    readonly dateFormats?: string[];
    readonly dateRounding: string;
    readonly description?: string;
    readonly field: string;
    readonly id: string;
    readonly if?: string;
    readonly ignoreFailure?: boolean;
    readonly indexNameFormat?: string;
    readonly indexNamePrefix?: string;
    readonly json: string;
    readonly locale?: string;
    readonly onFailures?: string[];
    readonly tag?: string;
    readonly timezone?: string;
}
export function getElasticsearchIngestProcessorDateIndexNameOutput(args: GetElasticsearchIngestProcessorDateIndexNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchIngestProcessorDateIndexNameResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchIngestProcessorDateIndexName(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorDateIndexName.
 */
export interface GetElasticsearchIngestProcessorDateIndexNameOutputArgs {
    dateFormats?: pulumi.Input<pulumi.Input<string>[]>;
    dateRounding: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    field: pulumi.Input<string>;
    if?: pulumi.Input<string>;
    ignoreFailure?: pulumi.Input<boolean>;
    indexNameFormat?: pulumi.Input<string>;
    indexNamePrefix?: pulumi.Input<string>;
    locale?: pulumi.Input<string>;
    onFailures?: pulumi.Input<pulumi.Input<string>[]>;
    tag?: pulumi.Input<string>;
    timezone?: pulumi.Input<string>;
}
