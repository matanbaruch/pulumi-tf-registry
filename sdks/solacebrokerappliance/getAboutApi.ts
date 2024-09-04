// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAboutApi(opts?: pulumi.InvokeOptions): Promise<GetAboutApiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getAboutApi:getAboutApi", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getAboutApi.
 */
export interface GetAboutApiResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly platform: string;
    readonly sempVersion: string;
}
export function getAboutApiOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetAboutApiResult> {
    return pulumi.output(getAboutApi(opts))
}
