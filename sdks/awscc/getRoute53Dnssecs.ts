// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53Dnssecs(opts?: pulumi.InvokeOptions): Promise<GetRoute53DnssecsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRoute53Dnssecs:getRoute53Dnssecs", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getRoute53Dnssecs.
 */
export interface GetRoute53DnssecsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getRoute53DnssecsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53DnssecsResult> {
    return pulumi.output(getRoute53Dnssecs(opts))
}
