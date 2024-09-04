// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabrewRecipes(opts?: pulumi.InvokeOptions): Promise<GetDatabrewRecipesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDatabrewRecipes:getDatabrewRecipes", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getDatabrewRecipes.
 */
export interface GetDatabrewRecipesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getDatabrewRecipesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabrewRecipesResult> {
    return pulumi.output(getDatabrewRecipes(opts))
}
