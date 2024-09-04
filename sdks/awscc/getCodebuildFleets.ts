// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCodebuildFleets(opts?: pulumi.InvokeOptions): Promise<GetCodebuildFleetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCodebuildFleets:getCodebuildFleets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCodebuildFleets.
 */
export interface GetCodebuildFleetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCodebuildFleetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCodebuildFleetsResult> {
    return pulumi.output(getCodebuildFleets(opts))
}
