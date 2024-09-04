// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotAuthorizers(opts?: pulumi.InvokeOptions): Promise<GetIotAuthorizersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotAuthorizers:getIotAuthorizers", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotAuthorizers.
 */
export interface GetIotAuthorizersResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotAuthorizersOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotAuthorizersResult> {
    return pulumi.output(getIotAuthorizers(opts))
}
