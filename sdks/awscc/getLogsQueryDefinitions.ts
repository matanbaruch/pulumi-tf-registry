// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLogsQueryDefinitions(opts?: pulumi.InvokeOptions): Promise<GetLogsQueryDefinitionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLogsQueryDefinitions:getLogsQueryDefinitions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getLogsQueryDefinitions.
 */
export interface GetLogsQueryDefinitionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getLogsQueryDefinitionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetLogsQueryDefinitionsResult> {
    return pulumi.output(getLogsQueryDefinitions(opts))
}
