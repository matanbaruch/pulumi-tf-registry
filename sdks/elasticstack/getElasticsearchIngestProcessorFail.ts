// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getElasticsearchIngestProcessorFail(args: GetElasticsearchIngestProcessorFailArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchIngestProcessorFailResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchIngestProcessorFail:getElasticsearchIngestProcessorFail", {
        "description": args.description,
        "if": args.if,
        "ignoreFailure": args.ignoreFailure,
        "message": args.message,
        "onFailures": args.onFailures,
        "tag": args.tag,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorFail.
 */
export interface GetElasticsearchIngestProcessorFailArgs {
    description?: string;
    if?: string;
    ignoreFailure?: boolean;
    message: string;
    onFailures?: string[];
    tag?: string;
}

/**
 * A collection of values returned by getElasticsearchIngestProcessorFail.
 */
export interface GetElasticsearchIngestProcessorFailResult {
    readonly description?: string;
    readonly id: string;
    readonly if?: string;
    readonly ignoreFailure?: boolean;
    readonly json: string;
    readonly message: string;
    readonly onFailures?: string[];
    readonly tag?: string;
}
export function getElasticsearchIngestProcessorFailOutput(args: GetElasticsearchIngestProcessorFailOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchIngestProcessorFailResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchIngestProcessorFail(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchIngestProcessorFail.
 */
export interface GetElasticsearchIngestProcessorFailOutputArgs {
    description?: pulumi.Input<string>;
    if?: pulumi.Input<string>;
    ignoreFailure?: pulumi.Input<boolean>;
    message: pulumi.Input<string>;
    onFailures?: pulumi.Input<pulumi.Input<string>[]>;
    tag?: pulumi.Input<string>;
}
