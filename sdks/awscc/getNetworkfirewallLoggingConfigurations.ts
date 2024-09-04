// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkfirewallLoggingConfigurations(opts?: pulumi.InvokeOptions): Promise<GetNetworkfirewallLoggingConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkfirewallLoggingConfigurations:getNetworkfirewallLoggingConfigurations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getNetworkfirewallLoggingConfigurations.
 */
export interface GetNetworkfirewallLoggingConfigurationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getNetworkfirewallLoggingConfigurationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkfirewallLoggingConfigurationsResult> {
    return pulumi.output(getNetworkfirewallLoggingConfigurations(opts))
}
