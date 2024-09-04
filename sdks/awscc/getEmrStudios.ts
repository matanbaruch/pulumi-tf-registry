// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEmrStudios(opts?: pulumi.InvokeOptions): Promise<GetEmrStudiosResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEmrStudios:getEmrStudios", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEmrStudios.
 */
export interface GetEmrStudiosResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEmrStudiosOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEmrStudiosResult> {
    return pulumi.output(getEmrStudios(opts))
}
