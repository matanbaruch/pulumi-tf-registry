// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEcrRepositories(opts?: pulumi.InvokeOptions): Promise<GetEcrRepositoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEcrRepositories:getEcrRepositories", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEcrRepositories.
 */
export interface GetEcrRepositoriesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEcrRepositoriesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEcrRepositoriesResult> {
    return pulumi.output(getEcrRepositories(opts))
}
