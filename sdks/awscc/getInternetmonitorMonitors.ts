// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getInternetmonitorMonitors(opts?: pulumi.InvokeOptions): Promise<GetInternetmonitorMonitorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getInternetmonitorMonitors:getInternetmonitorMonitors", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getInternetmonitorMonitors.
 */
export interface GetInternetmonitorMonitorsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getInternetmonitorMonitorsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetInternetmonitorMonitorsResult> {
    return pulumi.output(getInternetmonitorMonitors(opts))
}
