// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAcmpcaCertificateAuthorities(opts?: pulumi.InvokeOptions): Promise<GetAcmpcaCertificateAuthoritiesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAcmpcaCertificateAuthorities:getAcmpcaCertificateAuthorities", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getAcmpcaCertificateAuthorities.
 */
export interface GetAcmpcaCertificateAuthoritiesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getAcmpcaCertificateAuthoritiesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetAcmpcaCertificateAuthoritiesResult> {
    return pulumi.output(getAcmpcaCertificateAuthorities(opts))
}
