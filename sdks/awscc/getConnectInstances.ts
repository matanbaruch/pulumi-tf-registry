// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getConnectInstances(opts?: pulumi.InvokeOptions): Promise<GetConnectInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getConnectInstances:getConnectInstances", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getConnectInstances.
 */
export interface GetConnectInstancesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getConnectInstancesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectInstancesResult> {
    return pulumi.output(getConnectInstances(opts))
}
