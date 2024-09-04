// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTimestreamTables(opts?: pulumi.InvokeOptions): Promise<GetTimestreamTablesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getTimestreamTables:getTimestreamTables", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getTimestreamTables.
 */
export interface GetTimestreamTablesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getTimestreamTablesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetTimestreamTablesResult> {
    return pulumi.output(getTimestreamTables(opts))
}
