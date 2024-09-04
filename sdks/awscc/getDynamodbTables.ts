// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDynamodbTables(opts?: pulumi.InvokeOptions): Promise<GetDynamodbTablesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDynamodbTables:getDynamodbTables", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getDynamodbTables.
 */
export interface GetDynamodbTablesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getDynamodbTablesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetDynamodbTablesResult> {
    return pulumi.output(getDynamodbTables(opts))
}
