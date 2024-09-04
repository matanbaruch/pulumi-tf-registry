// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoggingProjectSettings(args: GetLoggingProjectSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingProjectSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getLoggingProjectSettings:getLoggingProjectSettings", {
        "id": args.id,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingProjectSettings.
 */
export interface GetLoggingProjectSettingsArgs {
    id?: string;
    project: string;
}

/**
 * A collection of values returned by getLoggingProjectSettings.
 */
export interface GetLoggingProjectSettingsResult {
    readonly disableDefaultSink: boolean;
    readonly id: string;
    readonly kmsKeyName: string;
    readonly kmsServiceAccountId: string;
    readonly loggingServiceAccountId: string;
    readonly name: string;
    readonly project: string;
    readonly storageLocation: string;
}
export function getLoggingProjectSettingsOutput(args: GetLoggingProjectSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingProjectSettingsResult> {
    return pulumi.output(args).apply((a: any) => getLoggingProjectSettings(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingProjectSettings.
 */
export interface GetLoggingProjectSettingsOutputArgs {
    id?: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
