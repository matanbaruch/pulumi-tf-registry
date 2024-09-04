// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTransferCertificates(opts?: pulumi.InvokeOptions): Promise<GetTransferCertificatesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getTransferCertificates:getTransferCertificates", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getTransferCertificates.
 */
export interface GetTransferCertificatesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getTransferCertificatesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetTransferCertificatesResult> {
    return pulumi.output(getTransferCertificates(opts))
}
