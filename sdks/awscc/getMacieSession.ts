// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMacieSession(args: GetMacieSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetMacieSessionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMacieSession:getMacieSession", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMacieSession.
 */
export interface GetMacieSessionArgs {
    id: string;
}

/**
 * A collection of values returned by getMacieSession.
 */
export interface GetMacieSessionResult {
    readonly awsAccountId: string;
    readonly findingPublishingFrequency: string;
    readonly id: string;
    readonly serviceRole: string;
    readonly status: string;
}
export function getMacieSessionOutput(args: GetMacieSessionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMacieSessionResult> {
    return pulumi.output(args).apply((a: any) => getMacieSession(a, opts))
}

/**
 * A collection of arguments for invoking getMacieSession.
 */
export interface GetMacieSessionOutputArgs {
    id: pulumi.Input<string>;
}
