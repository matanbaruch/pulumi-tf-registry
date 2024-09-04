// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIottwinmakerWorkspaces(opts?: pulumi.InvokeOptions): Promise<GetIottwinmakerWorkspacesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIottwinmakerWorkspaces:getIottwinmakerWorkspaces", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIottwinmakerWorkspaces.
 */
export interface GetIottwinmakerWorkspacesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIottwinmakerWorkspacesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIottwinmakerWorkspacesResult> {
    return pulumi.output(getIottwinmakerWorkspaces(opts))
}
