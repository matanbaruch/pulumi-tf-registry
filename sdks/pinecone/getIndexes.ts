// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIndexes(opts?: pulumi.InvokeOptions): Promise<GetIndexesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pinecone:index/getIndexes:getIndexes", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIndexes.
 */
export interface GetIndexesResult {
    readonly id: string;
    readonly indexes: outputs.GetIndexesIndex[];
}
export function getIndexesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIndexesResult> {
    return pulumi.output(getIndexes(opts))
}
