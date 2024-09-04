// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSagemakerModelQualityJobDefinitions(opts?: pulumi.InvokeOptions): Promise<GetSagemakerModelQualityJobDefinitionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerModelQualityJobDefinitions:getSagemakerModelQualityJobDefinitions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSagemakerModelQualityJobDefinitions.
 */
export interface GetSagemakerModelQualityJobDefinitionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSagemakerModelQualityJobDefinitionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerModelQualityJobDefinitionsResult> {
    return pulumi.output(getSagemakerModelQualityJobDefinitions(opts))
}
