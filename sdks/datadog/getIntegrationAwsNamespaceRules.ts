// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIntegrationAwsNamespaceRules(opts?: pulumi.InvokeOptions): Promise<GetIntegrationAwsNamespaceRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("datadog:index/getIntegrationAwsNamespaceRules:getIntegrationAwsNamespaceRules", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIntegrationAwsNamespaceRules.
 */
export interface GetIntegrationAwsNamespaceRulesResult {
    readonly id: string;
    readonly namespaceRules: string[];
}
export function getIntegrationAwsNamespaceRulesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIntegrationAwsNamespaceRulesResult> {
    return pulumi.output(getIntegrationAwsNamespaceRules(opts))
}
