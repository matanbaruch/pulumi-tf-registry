// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLogsDestinations(opts?: pulumi.InvokeOptions): Promise<GetLogsDestinationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLogsDestinations:getLogsDestinations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getLogsDestinations.
 */
export interface GetLogsDestinationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getLogsDestinationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetLogsDestinationsResult> {
    return pulumi.output(getLogsDestinations(opts))
}
