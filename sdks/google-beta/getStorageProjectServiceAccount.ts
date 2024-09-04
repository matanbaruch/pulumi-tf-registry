// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getStorageProjectServiceAccount(args?: GetStorageProjectServiceAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageProjectServiceAccountResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getStorageProjectServiceAccount:getStorageProjectServiceAccount", {
        "id": args.id,
        "project": args.project,
        "userProject": args.userProject,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageProjectServiceAccount.
 */
export interface GetStorageProjectServiceAccountArgs {
    id?: string;
    project?: string;
    userProject?: string;
}

/**
 * A collection of values returned by getStorageProjectServiceAccount.
 */
export interface GetStorageProjectServiceAccountResult {
    readonly emailAddress: string;
    readonly id: string;
    readonly member: string;
    readonly project: string;
    readonly userProject?: string;
}
export function getStorageProjectServiceAccountOutput(args?: GetStorageProjectServiceAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageProjectServiceAccountResult> {
    return pulumi.output(args).apply((a: any) => getStorageProjectServiceAccount(a, opts))
}

/**
 * A collection of arguments for invoking getStorageProjectServiceAccount.
 */
export interface GetStorageProjectServiceAccountOutputArgs {
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    userProject?: pulumi.Input<string>;
}
