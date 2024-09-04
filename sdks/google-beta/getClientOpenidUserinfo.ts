// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getClientOpenidUserinfo(opts?: pulumi.InvokeOptions): Promise<GetClientOpenidUserinfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getClientOpenidUserinfo:getClientOpenidUserinfo", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getClientOpenidUserinfo.
 */
export interface GetClientOpenidUserinfoResult {
    readonly email: string;
    readonly id: string;
}
export function getClientOpenidUserinfoOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetClientOpenidUserinfoResult> {
    return pulumi.output(getClientOpenidUserinfo(opts))
}
