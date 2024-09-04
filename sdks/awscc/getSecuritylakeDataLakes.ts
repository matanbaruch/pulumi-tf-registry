// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecuritylakeDataLakes(opts?: pulumi.InvokeOptions): Promise<GetSecuritylakeDataLakesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSecuritylakeDataLakes:getSecuritylakeDataLakes", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSecuritylakeDataLakes.
 */
export interface GetSecuritylakeDataLakesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSecuritylakeDataLakesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSecuritylakeDataLakesResult> {
    return pulumi.output(getSecuritylakeDataLakes(opts))
}
