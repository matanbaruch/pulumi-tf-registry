// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudGuardSecurityRecipe(args: GetCloudGuardSecurityRecipeArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudGuardSecurityRecipeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudGuardSecurityRecipe:getCloudGuardSecurityRecipe", {
        "securityRecipeId": args.securityRecipeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudGuardSecurityRecipe.
 */
export interface GetCloudGuardSecurityRecipeArgs {
    securityRecipeId: string;
}

/**
 * A collection of values returned by getCloudGuardSecurityRecipe.
 */
export interface GetCloudGuardSecurityRecipeResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly owner: string;
    readonly securityPolicies: string[];
    readonly securityRecipeId: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getCloudGuardSecurityRecipeOutput(args: GetCloudGuardSecurityRecipeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudGuardSecurityRecipeResult> {
    return pulumi.output(args).apply((a: any) => getCloudGuardSecurityRecipe(a, opts))
}

/**
 * A collection of arguments for invoking getCloudGuardSecurityRecipe.
 */
export interface GetCloudGuardSecurityRecipeOutputArgs {
    securityRecipeId: pulumi.Input<string>;
}
