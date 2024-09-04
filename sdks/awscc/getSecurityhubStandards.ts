// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityhubStandards(opts?: pulumi.InvokeOptions): Promise<GetSecurityhubStandardsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSecurityhubStandards:getSecurityhubStandards", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSecurityhubStandards.
 */
export interface GetSecurityhubStandardsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSecurityhubStandardsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityhubStandardsResult> {
    return pulumi.output(getSecurityhubStandards(opts))
}
