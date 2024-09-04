// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupFramework(args: GetBackupFrameworkArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupFrameworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getBackupFramework:getBackupFramework", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupFramework.
 */
export interface GetBackupFrameworkArgs {
    id?: string;
    name: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getBackupFramework.
 */
export interface GetBackupFrameworkResult {
    readonly arn: string;
    readonly controls: outputs.GetBackupFrameworkControl[];
    readonly creationTime: string;
    readonly deploymentStatus: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly status: string;
    readonly tags: {[key: string]: string};
}
export function getBackupFrameworkOutput(args: GetBackupFrameworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupFrameworkResult> {
    return pulumi.output(args).apply((a: any) => getBackupFramework(a, opts))
}

/**
 * A collection of arguments for invoking getBackupFramework.
 */
export interface GetBackupFrameworkOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
