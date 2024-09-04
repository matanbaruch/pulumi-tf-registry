// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotThings(opts?: pulumi.InvokeOptions): Promise<GetIotThingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotThings:getIotThings", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotThings.
 */
export interface GetIotThingsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotThingsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotThingsResult> {
    return pulumi.output(getIotThings(opts))
}
