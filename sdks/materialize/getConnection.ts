// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConnection(args?: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("materialize:index/getConnection:getConnection", {
        "connectionId": args.connectionId,
        "databaseName": args.databaseName,
        "id": args.id,
        "region": args.region,
        "schemaName": args.schemaName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionArgs {
    connectionId?: string;
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}

/**
 * A collection of values returned by getConnection.
 */
export interface GetConnectionResult {
    readonly connectionId?: string;
    readonly connections: outputs.GetConnectionConnection[];
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
}
export function getConnectionOutput(args?: GetConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionResult> {
    return pulumi.output(args).apply((a: any) => getConnection(a, opts))
}

/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionOutputArgs {
    connectionId?: pulumi.Input<string>;
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
