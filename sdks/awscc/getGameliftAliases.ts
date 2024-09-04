// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getGameliftAliases(opts?: pulumi.InvokeOptions): Promise<GetGameliftAliasesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getGameliftAliases:getGameliftAliases", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getGameliftAliases.
 */
export interface GetGameliftAliasesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getGameliftAliasesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetGameliftAliasesResult> {
    return pulumi.output(getGameliftAliases(opts))
}
