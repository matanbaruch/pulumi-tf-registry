// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppsRules(args: GetAppsRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("onelogin:index/getAppsRules:getAppsRules", {
        "actions": args.actions,
        "appsId": args.appsId,
        "conditions": args.conditions,
        "enabled": args.enabled,
        "filters": args.filters,
        "id": args.id,
        "match": args.match,
        "name": args.name,
        "position": args.position,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsRules.
 */
export interface GetAppsRulesArgs {
    actions?: inputs.GetAppsRulesAction[];
    appsId: string;
    conditions?: inputs.GetAppsRulesCondition[];
    enabled?: boolean;
    filters?: inputs.GetAppsRulesFilter[];
    id?: string;
    match?: string;
    name?: string;
    position?: number;
}

/**
 * A collection of values returned by getAppsRules.
 */
export interface GetAppsRulesResult {
    readonly actions?: outputs.GetAppsRulesAction[];
    readonly appsId: string;
    readonly conditions?: outputs.GetAppsRulesCondition[];
    readonly enabled: boolean;
    readonly filters?: outputs.GetAppsRulesFilter[];
    readonly id: string;
    readonly match: string;
    readonly name: string;
    readonly position: number;
}
export function getAppsRulesOutput(args: GetAppsRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsRulesResult> {
    return pulumi.output(args).apply((a: any) => getAppsRules(a, opts))
}

/**
 * A collection of arguments for invoking getAppsRules.
 */
export interface GetAppsRulesOutputArgs {
    actions?: pulumi.Input<pulumi.Input<inputs.GetAppsRulesActionArgs>[]>;
    appsId: pulumi.Input<string>;
    conditions?: pulumi.Input<pulumi.Input<inputs.GetAppsRulesConditionArgs>[]>;
    enabled?: pulumi.Input<boolean>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAppsRulesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    match?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    position?: pulumi.Input<number>;
}
