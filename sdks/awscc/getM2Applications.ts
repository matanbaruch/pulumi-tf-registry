// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getM2Applications(opts?: pulumi.InvokeOptions): Promise<GetM2ApplicationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getM2Applications:getM2Applications", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getM2Applications.
 */
export interface GetM2ApplicationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getM2ApplicationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetM2ApplicationsResult> {
    return pulumi.output(getM2Applications(opts))
}
