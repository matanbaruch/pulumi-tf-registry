// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2SnapshotBlockPublicAccesses(opts?: pulumi.InvokeOptions): Promise<GetEc2SnapshotBlockPublicAccessesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2SnapshotBlockPublicAccesses:getEc2SnapshotBlockPublicAccesses", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2SnapshotBlockPublicAccesses.
 */
export interface GetEc2SnapshotBlockPublicAccessesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2SnapshotBlockPublicAccessesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2SnapshotBlockPublicAccessesResult> {
    return pulumi.output(getEc2SnapshotBlockPublicAccesses(opts))
}
