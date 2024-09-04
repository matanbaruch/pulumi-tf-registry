// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatasyncLocationFsxOpenZfs(args: GetDatasyncLocationFsxOpenZfsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasyncLocationFsxOpenZfsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDatasyncLocationFsxOpenZfs:getDatasyncLocationFsxOpenZfs", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatasyncLocationFsxOpenZfs.
 */
export interface GetDatasyncLocationFsxOpenZfsArgs {
    id: string;
}

/**
 * A collection of values returned by getDatasyncLocationFsxOpenZfs.
 */
export interface GetDatasyncLocationFsxOpenZfsResult {
    readonly fsxFilesystemArn: string;
    readonly id: string;
    readonly locationArn: string;
    readonly locationUri: string;
    readonly protocol: outputs.GetDatasyncLocationFsxOpenZfsProtocol;
    readonly securityGroupArns: string[];
    readonly subdirectory: string;
    readonly tags: outputs.GetDatasyncLocationFsxOpenZfsTag[];
}
export function getDatasyncLocationFsxOpenZfsOutput(args: GetDatasyncLocationFsxOpenZfsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasyncLocationFsxOpenZfsResult> {
    return pulumi.output(args).apply((a: any) => getDatasyncLocationFsxOpenZfs(a, opts))
}

/**
 * A collection of arguments for invoking getDatasyncLocationFsxOpenZfs.
 */
export interface GetDatasyncLocationFsxOpenZfsOutputArgs {
    id: pulumi.Input<string>;
}
