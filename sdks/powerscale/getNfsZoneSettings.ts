// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNfsZoneSettings(args?: GetNfsZoneSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetNfsZoneSettingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powerscale:index/getNfsZoneSettings:getNfsZoneSettings", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNfsZoneSettings.
 */
export interface GetNfsZoneSettingsArgs {
    filter?: inputs.GetNfsZoneSettingsFilter;
}

/**
 * A collection of values returned by getNfsZoneSettings.
 */
export interface GetNfsZoneSettingsResult {
    readonly filter?: outputs.GetNfsZoneSettingsFilter;
    readonly id: string;
    readonly nfsZoneSettings: outputs.GetNfsZoneSettingsNfsZoneSettings;
}
export function getNfsZoneSettingsOutput(args?: GetNfsZoneSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNfsZoneSettingsResult> {
    return pulumi.output(args).apply((a: any) => getNfsZoneSettings(a, opts))
}

/**
 * A collection of arguments for invoking getNfsZoneSettings.
 */
export interface GetNfsZoneSettingsOutputArgs {
    filter?: pulumi.Input<inputs.GetNfsZoneSettingsFilterArgs>;
}
