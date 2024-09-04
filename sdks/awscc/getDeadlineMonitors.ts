// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDeadlineMonitors(opts?: pulumi.InvokeOptions): Promise<GetDeadlineMonitorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDeadlineMonitors:getDeadlineMonitors", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getDeadlineMonitors.
 */
export interface GetDeadlineMonitorsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getDeadlineMonitorsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetDeadlineMonitorsResult> {
    return pulumi.output(getDeadlineMonitors(opts))
}
