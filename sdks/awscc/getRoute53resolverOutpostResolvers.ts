// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53resolverOutpostResolvers(opts?: pulumi.InvokeOptions): Promise<GetRoute53resolverOutpostResolversResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRoute53resolverOutpostResolvers:getRoute53resolverOutpostResolvers", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getRoute53resolverOutpostResolvers.
 */
export interface GetRoute53resolverOutpostResolversResult {
    readonly id: string;
    readonly ids: string[];
}
export function getRoute53resolverOutpostResolversOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53resolverOutpostResolversResult> {
    return pulumi.output(getRoute53resolverOutpostResolvers(opts))
}
