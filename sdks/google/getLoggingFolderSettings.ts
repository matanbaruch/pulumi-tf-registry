// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoggingFolderSettings(args: GetLoggingFolderSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingFolderSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getLoggingFolderSettings:getLoggingFolderSettings", {
        "folder": args.folder,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingFolderSettings.
 */
export interface GetLoggingFolderSettingsArgs {
    folder: string;
    id?: string;
}

/**
 * A collection of values returned by getLoggingFolderSettings.
 */
export interface GetLoggingFolderSettingsResult {
    readonly disableDefaultSink: boolean;
    readonly folder: string;
    readonly id: string;
    readonly kmsKeyName: string;
    readonly kmsServiceAccountId: string;
    readonly loggingServiceAccountId: string;
    readonly name: string;
    readonly storageLocation: string;
}
export function getLoggingFolderSettingsOutput(args: GetLoggingFolderSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingFolderSettingsResult> {
    return pulumi.output(args).apply((a: any) => getLoggingFolderSettings(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingFolderSettings.
 */
export interface GetLoggingFolderSettingsOutputArgs {
    folder: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
