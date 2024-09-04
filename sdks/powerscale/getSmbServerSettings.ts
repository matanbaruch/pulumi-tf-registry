// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSmbServerSettings(args?: GetSmbServerSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetSmbServerSettingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powerscale:index/getSmbServerSettings:getSmbServerSettings", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSmbServerSettings.
 */
export interface GetSmbServerSettingsArgs {
    filter?: inputs.GetSmbServerSettingsFilter;
}

/**
 * A collection of values returned by getSmbServerSettings.
 */
export interface GetSmbServerSettingsResult {
    readonly filter?: outputs.GetSmbServerSettingsFilter;
    readonly id: string;
    readonly smbServerSettings: outputs.GetSmbServerSettingsSmbServerSettings;
}
export function getSmbServerSettingsOutput(args?: GetSmbServerSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSmbServerSettingsResult> {
    return pulumi.output(args).apply((a: any) => getSmbServerSettings(a, opts))
}

/**
 * A collection of arguments for invoking getSmbServerSettings.
 */
export interface GetSmbServerSettingsOutputArgs {
    filter?: pulumi.Input<inputs.GetSmbServerSettingsFilterArgs>;
}
