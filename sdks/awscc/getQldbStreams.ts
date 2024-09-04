// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQldbStreams(opts?: pulumi.InvokeOptions): Promise<GetQldbStreamsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getQldbStreams:getQldbStreams", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getQldbStreams.
 */
export interface GetQldbStreamsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getQldbStreamsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetQldbStreamsResult> {
    return pulumi.output(getQldbStreams(opts))
}
