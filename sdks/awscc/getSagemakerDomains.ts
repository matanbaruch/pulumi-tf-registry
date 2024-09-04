// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSagemakerDomains(opts?: pulumi.InvokeOptions): Promise<GetSagemakerDomainsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerDomains:getSagemakerDomains", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSagemakerDomains.
 */
export interface GetSagemakerDomainsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSagemakerDomainsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerDomainsResult> {
    return pulumi.output(getSagemakerDomains(opts))
}
