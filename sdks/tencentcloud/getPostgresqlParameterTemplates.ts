// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPostgresqlParameterTemplates(args?: GetPostgresqlParameterTemplatesArgs, opts?: pulumi.InvokeOptions): Promise<GetPostgresqlParameterTemplatesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getPostgresqlParameterTemplates:getPostgresqlParameterTemplates", {
        "filters": args.filters,
        "id": args.id,
        "orderBy": args.orderBy,
        "orderByType": args.orderByType,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPostgresqlParameterTemplates.
 */
export interface GetPostgresqlParameterTemplatesArgs {
    filters?: inputs.GetPostgresqlParameterTemplatesFilter[];
    id?: string;
    orderBy?: string;
    orderByType?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getPostgresqlParameterTemplates.
 */
export interface GetPostgresqlParameterTemplatesResult {
    readonly filters?: outputs.GetPostgresqlParameterTemplatesFilter[];
    readonly id: string;
    readonly lists: outputs.GetPostgresqlParameterTemplatesList[];
    readonly orderBy?: string;
    readonly orderByType?: string;
    readonly resultOutputFile?: string;
}
export function getPostgresqlParameterTemplatesOutput(args?: GetPostgresqlParameterTemplatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostgresqlParameterTemplatesResult> {
    return pulumi.output(args).apply((a: any) => getPostgresqlParameterTemplates(a, opts))
}

/**
 * A collection of arguments for invoking getPostgresqlParameterTemplates.
 */
export interface GetPostgresqlParameterTemplatesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetPostgresqlParameterTemplatesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
    orderByType?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
