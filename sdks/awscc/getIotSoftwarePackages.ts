// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotSoftwarePackages(opts?: pulumi.InvokeOptions): Promise<GetIotSoftwarePackagesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotSoftwarePackages:getIotSoftwarePackages", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotSoftwarePackages.
 */
export interface GetIotSoftwarePackagesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotSoftwarePackagesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotSoftwarePackagesResult> {
    return pulumi.output(getIotSoftwarePackages(opts))
}
