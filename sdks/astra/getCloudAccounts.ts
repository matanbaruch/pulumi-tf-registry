// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudAccounts(args: GetCloudAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("astra:index/getCloudAccounts:getCloudAccounts", {
        "cloudProvider": args.cloudProvider,
        "id": args.id,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudAccounts.
 */
export interface GetCloudAccountsArgs {
    cloudProvider: string;
    id?: string;
    region: string;
}

/**
 * A collection of values returned by getCloudAccounts.
 */
export interface GetCloudAccountsResult {
    readonly cloudProvider: string;
    readonly id: string;
    readonly region: string;
    readonly results: outputs.GetCloudAccountsResult[];
}
export function getCloudAccountsOutput(args: GetCloudAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudAccountsResult> {
    return pulumi.output(args).apply((a: any) => getCloudAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getCloudAccounts.
 */
export interface GetCloudAccountsOutputArgs {
    cloudProvider: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region: pulumi.Input<string>;
}
