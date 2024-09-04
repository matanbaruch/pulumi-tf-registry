// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEntityresolutionSchemaMappings(opts?: pulumi.InvokeOptions): Promise<GetEntityresolutionSchemaMappingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEntityresolutionSchemaMappings:getEntityresolutionSchemaMappings", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEntityresolutionSchemaMappings.
 */
export interface GetEntityresolutionSchemaMappingsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEntityresolutionSchemaMappingsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEntityresolutionSchemaMappingsResult> {
    return pulumi.output(getEntityresolutionSchemaMappings(opts))
}
