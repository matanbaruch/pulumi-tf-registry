// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVmaasCloudFolder(args: GetVmaasCloudFolderArgs, opts?: pulumi.InvokeOptions): Promise<GetVmaasCloudFolderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hpegl:index/getVmaasCloudFolder:getVmaasCloudFolder", {
        "cloudId": args.cloudId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVmaasCloudFolder.
 */
export interface GetVmaasCloudFolderArgs {
    cloudId: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getVmaasCloudFolder.
 */
export interface GetVmaasCloudFolderResult {
    readonly cloudId: string;
    readonly code: string;
    readonly id: string;
    readonly name: string;
}
export function getVmaasCloudFolderOutput(args: GetVmaasCloudFolderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmaasCloudFolderResult> {
    return pulumi.output(args).apply((a: any) => getVmaasCloudFolder(a, opts))
}

/**
 * A collection of arguments for invoking getVmaasCloudFolder.
 */
export interface GetVmaasCloudFolderOutputArgs {
    cloudId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
