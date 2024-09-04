// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudaccessKeyVersions(args: GetCloudaccessKeyVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudaccessKeyVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getCloudaccessKeyVersions:getCloudaccessKeyVersions", {
        "accessKeyName": args.accessKeyName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudaccessKeyVersions.
 */
export interface GetCloudaccessKeyVersionsArgs {
    accessKeyName: string;
}

/**
 * A collection of values returned by getCloudaccessKeyVersions.
 */
export interface GetCloudaccessKeyVersionsResult {
    readonly accessKeyName: string;
    readonly accessKeyUid: number;
    readonly accessKeyVersions: outputs.GetCloudaccessKeyVersionsAccessKeyVersion[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
export function getCloudaccessKeyVersionsOutput(args: GetCloudaccessKeyVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudaccessKeyVersionsResult> {
    return pulumi.output(args).apply((a: any) => getCloudaccessKeyVersions(a, opts))
}

/**
 * A collection of arguments for invoking getCloudaccessKeyVersions.
 */
export interface GetCloudaccessKeyVersionsOutputArgs {
    accessKeyName: pulumi.Input<string>;
}
