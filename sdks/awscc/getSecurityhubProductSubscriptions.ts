// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityhubProductSubscriptions(opts?: pulumi.InvokeOptions): Promise<GetSecurityhubProductSubscriptionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSecurityhubProductSubscriptions:getSecurityhubProductSubscriptions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSecurityhubProductSubscriptions.
 */
export interface GetSecurityhubProductSubscriptionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSecurityhubProductSubscriptionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityhubProductSubscriptionsResult> {
    return pulumi.output(getSecurityhubProductSubscriptions(opts))
}
