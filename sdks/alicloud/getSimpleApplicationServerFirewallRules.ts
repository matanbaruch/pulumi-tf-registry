// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSimpleApplicationServerFirewallRules(args: GetSimpleApplicationServerFirewallRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetSimpleApplicationServerFirewallRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSimpleApplicationServerFirewallRules:getSimpleApplicationServerFirewallRules", {
        "id": args.id,
        "ids": args.ids,
        "instanceId": args.instanceId,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSimpleApplicationServerFirewallRules.
 */
export interface GetSimpleApplicationServerFirewallRulesArgs {
    id?: string;
    ids?: string[];
    instanceId: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getSimpleApplicationServerFirewallRules.
 */
export interface GetSimpleApplicationServerFirewallRulesResult {
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly outputFile?: string;
    readonly rules: outputs.GetSimpleApplicationServerFirewallRulesRule[];
}
export function getSimpleApplicationServerFirewallRulesOutput(args: GetSimpleApplicationServerFirewallRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSimpleApplicationServerFirewallRulesResult> {
    return pulumi.output(args).apply((a: any) => getSimpleApplicationServerFirewallRules(a, opts))
}

/**
 * A collection of arguments for invoking getSimpleApplicationServerFirewallRules.
 */
export interface GetSimpleApplicationServerFirewallRulesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceId: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
