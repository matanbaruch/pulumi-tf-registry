// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkspace(opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ns:index/getWorkspace:getWorkspace", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getWorkspace.
 */
export interface GetWorkspaceResult {
    readonly blockId: number;
    readonly blockName: string;
    readonly blockRef: string;
    readonly envId: number;
    readonly envName: string;
    /**
     * @deprecated Deprecated
     */
    readonly id: string;
    readonly stackId: number;
    readonly stackName: string;
    readonly tags: {[key: string]: string};
}
export function getWorkspaceOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult> {
    return pulumi.output(getWorkspace(opts))
}
