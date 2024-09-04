// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoggingProjectCmekSettings(args: GetLoggingProjectCmekSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingProjectCmekSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getLoggingProjectCmekSettings:getLoggingProjectCmekSettings", {
        "id": args.id,
        "kmsKeyName": args.kmsKeyName,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingProjectCmekSettings.
 */
export interface GetLoggingProjectCmekSettingsArgs {
    id?: string;
    kmsKeyName?: string;
    project: string;
}

/**
 * A collection of values returned by getLoggingProjectCmekSettings.
 */
export interface GetLoggingProjectCmekSettingsResult {
    readonly id: string;
    readonly kmsKeyName?: string;
    readonly kmsKeyVersionName: string;
    readonly name: string;
    readonly project: string;
    readonly serviceAccountId: string;
}
export function getLoggingProjectCmekSettingsOutput(args: GetLoggingProjectCmekSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingProjectCmekSettingsResult> {
    return pulumi.output(args).apply((a: any) => getLoggingProjectCmekSettings(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingProjectCmekSettings.
 */
export interface GetLoggingProjectCmekSettingsOutputArgs {
    id?: pulumi.Input<string>;
    kmsKeyName?: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
