// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComputeSslPolicy(args: GetComputeSslPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeSslPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getComputeSslPolicy:getComputeSslPolicy", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeSslPolicy.
 */
export interface GetComputeSslPolicyArgs {
    id?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getComputeSslPolicy.
 */
export interface GetComputeSslPolicyResult {
    readonly creationTimestamp: string;
    readonly customFeatures: string[];
    readonly description: string;
    readonly enabledFeatures: string[];
    readonly fingerprint: string;
    readonly id: string;
    readonly minTlsVersion: string;
    readonly name: string;
    readonly profile: string;
    readonly project?: string;
    readonly selfLink: string;
}
export function getComputeSslPolicyOutput(args: GetComputeSslPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeSslPolicyResult> {
    return pulumi.output(args).apply((a: any) => getComputeSslPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getComputeSslPolicy.
 */
export interface GetComputeSslPolicyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
