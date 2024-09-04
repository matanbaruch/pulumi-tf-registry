// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIoteventsDetectorModels(opts?: pulumi.InvokeOptions): Promise<GetIoteventsDetectorModelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIoteventsDetectorModels:getIoteventsDetectorModels", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIoteventsDetectorModels.
 */
export interface GetIoteventsDetectorModelsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIoteventsDetectorModelsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIoteventsDetectorModelsResult> {
    return pulumi.output(getIoteventsDetectorModels(opts))
}
