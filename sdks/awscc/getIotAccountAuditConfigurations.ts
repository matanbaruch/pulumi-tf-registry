// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotAccountAuditConfigurations(opts?: pulumi.InvokeOptions): Promise<GetIotAccountAuditConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotAccountAuditConfigurations:getIotAccountAuditConfigurations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotAccountAuditConfigurations.
 */
export interface GetIotAccountAuditConfigurationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotAccountAuditConfigurationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotAccountAuditConfigurationsResult> {
    return pulumi.output(getIotAccountAuditConfigurations(opts))
}
