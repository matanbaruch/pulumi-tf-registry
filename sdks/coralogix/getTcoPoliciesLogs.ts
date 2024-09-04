// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTcoPoliciesLogs(opts?: pulumi.InvokeOptions): Promise<GetTcoPoliciesLogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("coralogix:index/getTcoPoliciesLogs:getTcoPoliciesLogs", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getTcoPoliciesLogs.
 */
export interface GetTcoPoliciesLogsResult {
    readonly id: string;
    readonly policies: outputs.GetTcoPoliciesLogsPolicy[];
}
export function getTcoPoliciesLogsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetTcoPoliciesLogsResult> {
    return pulumi.output(getTcoPoliciesLogs(opts))
}
