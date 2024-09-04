// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServicecatalogServiceActions(opts?: pulumi.InvokeOptions): Promise<GetServicecatalogServiceActionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getServicecatalogServiceActions:getServicecatalogServiceActions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getServicecatalogServiceActions.
 */
export interface GetServicecatalogServiceActionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getServicecatalogServiceActionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetServicecatalogServiceActionsResult> {
    return pulumi.output(getServicecatalogServiceActions(opts))
}
