// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIvsRecordingConfigurations(opts?: pulumi.InvokeOptions): Promise<GetIvsRecordingConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIvsRecordingConfigurations:getIvsRecordingConfigurations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIvsRecordingConfigurations.
 */
export interface GetIvsRecordingConfigurationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIvsRecordingConfigurationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIvsRecordingConfigurationsResult> {
    return pulumi.output(getIvsRecordingConfigurations(opts))
}
