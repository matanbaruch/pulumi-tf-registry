// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAlertRule(args?: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("logicmonitor:index/getAlertRule:getAlertRule", {
        "datapoint": args.datapoint,
        "datasource": args.datasource,
        "deviceGroups": args.deviceGroups,
        "devices": args.devices,
        "escalatingChain": args.escalatingChain,
        "escalatingChainId": args.escalatingChainId,
        "escalationInterval": args.escalationInterval,
        "filter": args.filter,
        "id": args.id,
        "instance": args.instance,
        "levelStr": args.levelStr,
        "name": args.name,
        "priority": args.priority,
        "suppressAlertAckSdt": args.suppressAlertAckSdt,
        "suppressAlertClear": args.suppressAlertClear,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlertRule.
 */
export interface GetAlertRuleArgs {
    datapoint?: string;
    datasource?: string;
    deviceGroups?: string[];
    devices?: string[];
    escalatingChain?: {[key: string]: string};
    escalatingChainId?: number;
    escalationInterval?: number;
    filter?: string;
    id?: number;
    instance?: string;
    levelStr?: string;
    name?: string;
    priority?: number;
    suppressAlertAckSdt?: boolean;
    suppressAlertClear?: boolean;
}

/**
 * A collection of values returned by getAlertRule.
 */
export interface GetAlertRuleResult {
    readonly datapoint?: string;
    readonly datasource?: string;
    readonly deviceGroups?: string[];
    readonly devices?: string[];
    readonly escalatingChain?: {[key: string]: string};
    readonly escalatingChainId?: number;
    readonly escalationInterval?: number;
    readonly filter?: string;
    readonly id: number;
    readonly instance?: string;
    readonly levelStr?: string;
    readonly name?: string;
    readonly priority?: number;
    readonly suppressAlertAckSdt?: boolean;
    readonly suppressAlertClear?: boolean;
}
export function getAlertRuleOutput(args?: GetAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertRuleResult> {
    return pulumi.output(args).apply((a: any) => getAlertRule(a, opts))
}

/**
 * A collection of arguments for invoking getAlertRule.
 */
export interface GetAlertRuleOutputArgs {
    datapoint?: pulumi.Input<string>;
    datasource?: pulumi.Input<string>;
    deviceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    escalatingChain?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    escalatingChainId?: pulumi.Input<number>;
    escalationInterval?: pulumi.Input<number>;
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<number>;
    instance?: pulumi.Input<string>;
    levelStr?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    suppressAlertAckSdt?: pulumi.Input<boolean>;
    suppressAlertClear?: pulumi.Input<boolean>;
}
