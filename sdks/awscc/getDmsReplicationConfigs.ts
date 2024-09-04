// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDmsReplicationConfigs(opts?: pulumi.InvokeOptions): Promise<GetDmsReplicationConfigsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDmsReplicationConfigs:getDmsReplicationConfigs", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getDmsReplicationConfigs.
 */
export interface GetDmsReplicationConfigsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getDmsReplicationConfigsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsReplicationConfigsResult> {
    return pulumi.output(getDmsReplicationConfigs(opts))
}
