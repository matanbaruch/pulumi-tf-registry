// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabases(args?: GetDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabasesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getDatabases:getDatabases", {
        "id": args.id,
        "like": args.like,
        "limit": args.limit,
        "startsWith": args.startsWith,
        "withDescribe": args.withDescribe,
        "withParameters": args.withParameters,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabases.
 */
export interface GetDatabasesArgs {
    id?: string;
    like?: string;
    limit?: inputs.GetDatabasesLimit;
    startsWith?: string;
    withDescribe?: boolean;
    withParameters?: boolean;
}

/**
 * A collection of values returned by getDatabases.
 */
export interface GetDatabasesResult {
    readonly databases: outputs.GetDatabasesDatabase[];
    readonly id: string;
    readonly like?: string;
    readonly limit?: outputs.GetDatabasesLimit;
    readonly startsWith?: string;
    readonly withDescribe?: boolean;
    readonly withParameters?: boolean;
}
export function getDatabasesOutput(args?: GetDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabasesResult> {
    return pulumi.output(args).apply((a: any) => getDatabases(a, opts))
}

/**
 * A collection of arguments for invoking getDatabases.
 */
export interface GetDatabasesOutputArgs {
    id?: pulumi.Input<string>;
    like?: pulumi.Input<string>;
    limit?: pulumi.Input<inputs.GetDatabasesLimitArgs>;
    startsWith?: pulumi.Input<string>;
    withDescribe?: pulumi.Input<boolean>;
    withParameters?: pulumi.Input<boolean>;
}
