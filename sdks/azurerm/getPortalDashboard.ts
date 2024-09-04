// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPortalDashboard(args: GetPortalDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetPortalDashboardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getPortalDashboard:getPortalDashboard", {
        "dashboardProperties": args.dashboardProperties,
        "displayName": args.displayName,
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPortalDashboard.
 */
export interface GetPortalDashboardArgs {
    dashboardProperties?: string;
    displayName?: string;
    id?: string;
    name?: string;
    resourceGroupName: string;
    timeouts?: inputs.GetPortalDashboardTimeouts;
}

/**
 * A collection of values returned by getPortalDashboard.
 */
export interface GetPortalDashboardResult {
    readonly dashboardProperties: string;
    readonly displayName?: string;
    readonly id: string;
    readonly location: string;
    readonly name?: string;
    readonly resourceGroupName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetPortalDashboardTimeouts;
}
export function getPortalDashboardOutput(args: GetPortalDashboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortalDashboardResult> {
    return pulumi.output(args).apply((a: any) => getPortalDashboard(a, opts))
}

/**
 * A collection of arguments for invoking getPortalDashboard.
 */
export interface GetPortalDashboardOutputArgs {
    dashboardProperties?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetPortalDashboardTimeoutsArgs>;
}
