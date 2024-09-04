// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getHttpConfiguration(opts?: pulumi.InvokeOptions): Promise<GetHttpConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getHttpConfiguration:getHttpConfiguration", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getHttpConfiguration.
 */
export interface GetHttpConfigurationResult {
    readonly id: string;
    readonly includeServletInformationInErrorPages: boolean;
    readonly includeStackTracesInErrorPages: boolean;
    readonly type: string;
}
export function getHttpConfigurationOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetHttpConfigurationResult> {
    return pulumi.output(getHttpConfiguration(opts))
}
