// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIvsPlaybackRestrictionPolicy(args: GetIvsPlaybackRestrictionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetIvsPlaybackRestrictionPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIvsPlaybackRestrictionPolicy:getIvsPlaybackRestrictionPolicy", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIvsPlaybackRestrictionPolicy.
 */
export interface GetIvsPlaybackRestrictionPolicyArgs {
    id: string;
}

/**
 * A collection of values returned by getIvsPlaybackRestrictionPolicy.
 */
export interface GetIvsPlaybackRestrictionPolicyResult {
    readonly allowedCountries: string[];
    readonly allowedOrigins: string[];
    readonly arn: string;
    readonly enableStrictOriginEnforcement: boolean;
    readonly id: string;
    readonly name: string;
    readonly tags: outputs.GetIvsPlaybackRestrictionPolicyTag[];
}
export function getIvsPlaybackRestrictionPolicyOutput(args: GetIvsPlaybackRestrictionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIvsPlaybackRestrictionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getIvsPlaybackRestrictionPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getIvsPlaybackRestrictionPolicy.
 */
export interface GetIvsPlaybackRestrictionPolicyOutputArgs {
    id: pulumi.Input<string>;
}
