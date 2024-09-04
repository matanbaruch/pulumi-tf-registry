// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLightsailDisks(opts?: pulumi.InvokeOptions): Promise<GetLightsailDisksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLightsailDisks:getLightsailDisks", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getLightsailDisks.
 */
export interface GetLightsailDisksResult {
    readonly id: string;
    readonly ids: string[];
}
export function getLightsailDisksOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetLightsailDisksResult> {
    return pulumi.output(getLightsailDisks(opts))
}
