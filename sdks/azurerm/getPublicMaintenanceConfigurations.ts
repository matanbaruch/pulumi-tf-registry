// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPublicMaintenanceConfigurations(args?: GetPublicMaintenanceConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicMaintenanceConfigurationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getPublicMaintenanceConfigurations:getPublicMaintenanceConfigurations", {
        "id": args.id,
        "location": args.location,
        "recurEvery": args.recurEvery,
        "scope": args.scope,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPublicMaintenanceConfigurations.
 */
export interface GetPublicMaintenanceConfigurationsArgs {
    id?: string;
    location?: string;
    recurEvery?: string;
    scope?: string;
    timeouts?: inputs.GetPublicMaintenanceConfigurationsTimeouts;
}

/**
 * A collection of values returned by getPublicMaintenanceConfigurations.
 */
export interface GetPublicMaintenanceConfigurationsResult {
    readonly configs: outputs.GetPublicMaintenanceConfigurationsConfig[];
    readonly id: string;
    readonly location?: string;
    readonly recurEvery?: string;
    readonly scope?: string;
    readonly timeouts?: outputs.GetPublicMaintenanceConfigurationsTimeouts;
}
export function getPublicMaintenanceConfigurationsOutput(args?: GetPublicMaintenanceConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPublicMaintenanceConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => getPublicMaintenanceConfigurations(a, opts))
}

/**
 * A collection of arguments for invoking getPublicMaintenanceConfigurations.
 */
export interface GetPublicMaintenanceConfigurationsOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    recurEvery?: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetPublicMaintenanceConfigurationsTimeoutsArgs>;
}
