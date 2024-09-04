// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitorScheduledQueryRulesAlert(args: GetMonitorScheduledQueryRulesAlertArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorScheduledQueryRulesAlertResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getMonitorScheduledQueryRulesAlert:getMonitorScheduledQueryRulesAlert", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitorScheduledQueryRulesAlert.
 */
export interface GetMonitorScheduledQueryRulesAlertArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetMonitorScheduledQueryRulesAlertTimeouts;
}

/**
 * A collection of values returned by getMonitorScheduledQueryRulesAlert.
 */
export interface GetMonitorScheduledQueryRulesAlertResult {
    readonly actions: outputs.GetMonitorScheduledQueryRulesAlertAction[];
    readonly authorizedResourceIds: string[];
    readonly dataSourceId: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly frequency: number;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly query: string;
    readonly queryType: string;
    readonly resourceGroupName: string;
    readonly severity: number;
    readonly tags: {[key: string]: string};
    readonly throttling: number;
    readonly timeWindow: number;
    readonly timeouts?: outputs.GetMonitorScheduledQueryRulesAlertTimeouts;
    readonly triggers: outputs.GetMonitorScheduledQueryRulesAlertTrigger[];
}
export function getMonitorScheduledQueryRulesAlertOutput(args: GetMonitorScheduledQueryRulesAlertOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorScheduledQueryRulesAlertResult> {
    return pulumi.output(args).apply((a: any) => getMonitorScheduledQueryRulesAlert(a, opts))
}

/**
 * A collection of arguments for invoking getMonitorScheduledQueryRulesAlert.
 */
export interface GetMonitorScheduledQueryRulesAlertOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetMonitorScheduledQueryRulesAlertTimeoutsArgs>;
}
