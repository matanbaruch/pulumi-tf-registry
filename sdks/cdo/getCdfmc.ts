// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCdfmc(opts?: pulumi.InvokeOptions): Promise<GetCdfmcResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cdo:index/getCdfmc:getCdfmc", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCdfmc.
 */
export interface GetCdfmcResult {
    readonly domainUuid: string;
    readonly hostname: string;
    readonly id: string;
    readonly softwareVersion: string;
}
export function getCdfmcOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCdfmcResult> {
    return pulumi.output(getCdfmc(opts))
}
