// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDbfsFile(args: GetDbfsFileArgs, opts?: pulumi.InvokeOptions): Promise<GetDbfsFileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("databricks:index/getDbfsFile:getDbfsFile", {
        "id": args.id,
        "limitFileSize": args.limitFileSize,
        "path": args.path,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDbfsFile.
 */
export interface GetDbfsFileArgs {
    id?: string;
    limitFileSize: boolean;
    path: string;
}

/**
 * A collection of values returned by getDbfsFile.
 */
export interface GetDbfsFileResult {
    readonly content: string;
    readonly fileSize: number;
    readonly id: string;
    readonly limitFileSize: boolean;
    readonly path: string;
}
export function getDbfsFileOutput(args: GetDbfsFileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDbfsFileResult> {
    return pulumi.output(args).apply((a: any) => getDbfsFile(a, opts))
}

/**
 * A collection of arguments for invoking getDbfsFile.
 */
export interface GetDbfsFileOutputArgs {
    id?: pulumi.Input<string>;
    limitFileSize: pulumi.Input<boolean>;
    path: pulumi.Input<string>;
}
