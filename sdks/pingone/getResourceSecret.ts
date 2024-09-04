// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getResourceSecret(args: GetResourceSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getResourceSecret:getResourceSecret", {
        "environmentId": args.environmentId,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourceSecret.
 */
export interface GetResourceSecretArgs {
    environmentId: string;
    resourceId: string;
}

/**
 * A collection of values returned by getResourceSecret.
 */
export interface GetResourceSecretResult {
    readonly environmentId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly previous: outputs.GetResourceSecretPrevious;
    readonly resourceId: string;
    readonly secret: string;
}
export function getResourceSecretOutput(args: GetResourceSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceSecretResult> {
    return pulumi.output(args).apply((a: any) => getResourceSecret(a, opts))
}

/**
 * A collection of arguments for invoking getResourceSecret.
 */
export interface GetResourceSecretOutputArgs {
    environmentId: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
}
