// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getElasticsearchIngestProcessorKv(args: GetElasticsearchIngestProcessorKvArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchIngestProcessorKvResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchIngestProcessorKv:getElasticsearchIngestProcessorKv", {
        "description": args.description,
        "excludeKeys": args.excludeKeys,
        "field": args.field,
        "fieldSplit": args.fieldSplit,
        "if": args.if,
        "ignoreFailure": args.ignoreFailure,
        "ignoreMissing": args.ignoreMissing,
        "includeKeys": args.includeKeys,
        "onFailures": args.onFailures,
        "prefix": args.prefix,
        "stripBrackets": args.stripBrackets,
        "tag": args.tag,
        "targetField": args.targetField,
        "trimKey": args.trimKey,
        "trimValue": args.trimValue,
        "valueSplit": args.valueSplit,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorKv.
 */
export interface GetElasticsearchIngestProcessorKvArgs {
    description?: string;
    excludeKeys?: string[];
    field: string;
    fieldSplit: string;
    if?: string;
    ignoreFailure?: boolean;
    ignoreMissing?: boolean;
    includeKeys?: string[];
    onFailures?: string[];
    prefix?: string;
    stripBrackets?: boolean;
    tag?: string;
    targetField?: string;
    trimKey?: string;
    trimValue?: string;
    valueSplit: string;
}

/**
 * A collection of values returned by getElasticsearchIngestProcessorKv.
 */
export interface GetElasticsearchIngestProcessorKvResult {
    readonly description?: string;
    readonly excludeKeys?: string[];
    readonly field: string;
    readonly fieldSplit: string;
    readonly id: string;
    readonly if?: string;
    readonly ignoreFailure?: boolean;
    readonly ignoreMissing?: boolean;
    readonly includeKeys?: string[];
    readonly json: string;
    readonly onFailures?: string[];
    readonly prefix?: string;
    readonly stripBrackets?: boolean;
    readonly tag?: string;
    readonly targetField?: string;
    readonly trimKey?: string;
    readonly trimValue?: string;
    readonly valueSplit: string;
}
export function getElasticsearchIngestProcessorKvOutput(args: GetElasticsearchIngestProcessorKvOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchIngestProcessorKvResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchIngestProcessorKv(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorKv.
 */
export interface GetElasticsearchIngestProcessorKvOutputArgs {
    description?: pulumi.Input<string>;
    excludeKeys?: pulumi.Input<pulumi.Input<string>[]>;
    field: pulumi.Input<string>;
    fieldSplit: pulumi.Input<string>;
    if?: pulumi.Input<string>;
    ignoreFailure?: pulumi.Input<boolean>;
    ignoreMissing?: pulumi.Input<boolean>;
    includeKeys?: pulumi.Input<pulumi.Input<string>[]>;
    onFailures?: pulumi.Input<pulumi.Input<string>[]>;
    prefix?: pulumi.Input<string>;
    stripBrackets?: pulumi.Input<boolean>;
    tag?: pulumi.Input<string>;
    targetField?: pulumi.Input<string>;
    trimKey?: pulumi.Input<string>;
    trimValue?: pulumi.Input<string>;
    valueSplit: pulumi.Input<string>;
}
