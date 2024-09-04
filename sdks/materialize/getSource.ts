// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSource(args?: GetSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("materialize:index/getSource:getSource", {
        "databaseName": args.databaseName,
        "id": args.id,
        "region": args.region,
        "schemaName": args.schemaName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSource.
 */
export interface GetSourceArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}

/**
 * A collection of values returned by getSource.
 */
export interface GetSourceResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly sources: outputs.GetSourceSource[];
}
export function getSourceOutput(args?: GetSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceResult> {
    return pulumi.output(args).apply((a: any) => getSource(a, opts))
}

/**
 * A collection of arguments for invoking getSource.
 */
export interface GetSourceOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
