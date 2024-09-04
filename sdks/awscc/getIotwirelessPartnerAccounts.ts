// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotwirelessPartnerAccounts(opts?: pulumi.InvokeOptions): Promise<GetIotwirelessPartnerAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotwirelessPartnerAccounts:getIotwirelessPartnerAccounts", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotwirelessPartnerAccounts.
 */
export interface GetIotwirelessPartnerAccountsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotwirelessPartnerAccountsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotwirelessPartnerAccountsResult> {
    return pulumi.output(getIotwirelessPartnerAccounts(opts))
}
