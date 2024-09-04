// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConfigurationTemplateList(opts?: pulumi.InvokeOptions): Promise<GetConfigurationTemplateListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opal:index/getConfigurationTemplateList:getConfigurationTemplateList", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getConfigurationTemplateList.
 */
export interface GetConfigurationTemplateListResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly results: outputs.GetConfigurationTemplateListResult[];
}
export function getConfigurationTemplateListOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationTemplateListResult> {
    return pulumi.output(getConfigurationTemplateList(opts))
}
