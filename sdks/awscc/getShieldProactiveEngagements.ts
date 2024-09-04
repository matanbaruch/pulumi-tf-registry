// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getShieldProactiveEngagements(opts?: pulumi.InvokeOptions): Promise<GetShieldProactiveEngagementsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getShieldProactiveEngagements:getShieldProactiveEngagements", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getShieldProactiveEngagements.
 */
export interface GetShieldProactiveEngagementsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getShieldProactiveEngagementsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetShieldProactiveEngagementsResult> {
    return pulumi.output(getShieldProactiveEngagements(opts))
}
