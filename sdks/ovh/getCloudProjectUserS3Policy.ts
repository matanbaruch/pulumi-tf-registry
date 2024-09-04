// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudProjectUserS3Policy(args: GetCloudProjectUserS3PolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProjectUserS3PolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getCloudProjectUserS3Policy:getCloudProjectUserS3Policy", {
        "id": args.id,
        "serviceName": args.serviceName,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudProjectUserS3Policy.
 */
export interface GetCloudProjectUserS3PolicyArgs {
    id?: string;
    serviceName: string;
    userId: string;
}

/**
 * A collection of values returned by getCloudProjectUserS3Policy.
 */
export interface GetCloudProjectUserS3PolicyResult {
    readonly id: string;
    readonly policy: string;
    readonly serviceName: string;
    readonly userId: string;
}
export function getCloudProjectUserS3PolicyOutput(args: GetCloudProjectUserS3PolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudProjectUserS3PolicyResult> {
    return pulumi.output(args).apply((a: any) => getCloudProjectUserS3Policy(a, opts))
}

/**
 * A collection of arguments for invoking getCloudProjectUserS3Policy.
 */
export interface GetCloudProjectUserS3PolicyOutputArgs {
    id?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
