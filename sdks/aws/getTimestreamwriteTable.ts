// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTimestreamwriteTable(args: GetTimestreamwriteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTimestreamwriteTableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getTimestreamwriteTable:getTimestreamwriteTable", {
        "databaseName": args.databaseName,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTimestreamwriteTable.
 */
export interface GetTimestreamwriteTableArgs {
    databaseName: string;
    name: string;
}

/**
 * A collection of values returned by getTimestreamwriteTable.
 */
export interface GetTimestreamwriteTableResult {
    readonly arn: string;
    readonly creationTime: string;
    readonly databaseName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly lastUpdatedTime: string;
    readonly magneticStoreWriteProperties: outputs.GetTimestreamwriteTableMagneticStoreWriteProperty[];
    readonly name: string;
    readonly retentionProperties: outputs.GetTimestreamwriteTableRetentionProperty[];
    readonly schemas: outputs.GetTimestreamwriteTableSchema[];
    readonly tableStatus: string;
}
export function getTimestreamwriteTableOutput(args: GetTimestreamwriteTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTimestreamwriteTableResult> {
    return pulumi.output(args).apply((a: any) => getTimestreamwriteTable(a, opts))
}

/**
 * A collection of arguments for invoking getTimestreamwriteTable.
 */
export interface GetTimestreamwriteTableOutputArgs {
    databaseName: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
