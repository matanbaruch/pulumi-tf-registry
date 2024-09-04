// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApprunnerObservabilityConfigurations(opts?: pulumi.InvokeOptions): Promise<GetApprunnerObservabilityConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApprunnerObservabilityConfigurations:getApprunnerObservabilityConfigurations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getApprunnerObservabilityConfigurations.
 */
export interface GetApprunnerObservabilityConfigurationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getApprunnerObservabilityConfigurationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetApprunnerObservabilityConfigurationsResult> {
    return pulumi.output(getApprunnerObservabilityConfigurations(opts))
}
