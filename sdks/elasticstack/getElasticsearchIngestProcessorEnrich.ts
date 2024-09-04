// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getElasticsearchIngestProcessorEnrich(args: GetElasticsearchIngestProcessorEnrichArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchIngestProcessorEnrichResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchIngestProcessorEnrich:getElasticsearchIngestProcessorEnrich", {
        "description": args.description,
        "field": args.field,
        "if": args.if,
        "ignoreFailure": args.ignoreFailure,
        "ignoreMissing": args.ignoreMissing,
        "maxMatches": args.maxMatches,
        "onFailures": args.onFailures,
        "override": args.override,
        "policyName": args.policyName,
        "shapeRelation": args.shapeRelation,
        "tag": args.tag,
        "targetField": args.targetField,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorEnrich.
 */
export interface GetElasticsearchIngestProcessorEnrichArgs {
    description?: string;
    field: string;
    if?: string;
    ignoreFailure?: boolean;
    ignoreMissing?: boolean;
    maxMatches?: number;
    onFailures?: string[];
    override?: boolean;
    policyName: string;
    shapeRelation?: string;
    tag?: string;
    targetField: string;
}

/**
 * A collection of values returned by getElasticsearchIngestProcessorEnrich.
 */
export interface GetElasticsearchIngestProcessorEnrichResult {
    readonly description?: string;
    readonly field: string;
    readonly id: string;
    readonly if?: string;
    readonly ignoreFailure?: boolean;
    readonly ignoreMissing?: boolean;
    readonly json: string;
    readonly maxMatches?: number;
    readonly onFailures?: string[];
    readonly override?: boolean;
    readonly policyName: string;
    readonly shapeRelation?: string;
    readonly tag?: string;
    readonly targetField: string;
}
export function getElasticsearchIngestProcessorEnrichOutput(args: GetElasticsearchIngestProcessorEnrichOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchIngestProcessorEnrichResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchIngestProcessorEnrich(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorEnrich.
 */
export interface GetElasticsearchIngestProcessorEnrichOutputArgs {
    description?: pulumi.Input<string>;
    field: pulumi.Input<string>;
    if?: pulumi.Input<string>;
    ignoreFailure?: pulumi.Input<boolean>;
    ignoreMissing?: pulumi.Input<boolean>;
    maxMatches?: pulumi.Input<number>;
    onFailures?: pulumi.Input<pulumi.Input<string>[]>;
    override?: pulumi.Input<boolean>;
    policyName: pulumi.Input<string>;
    shapeRelation?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    targetField: pulumi.Input<string>;
}
