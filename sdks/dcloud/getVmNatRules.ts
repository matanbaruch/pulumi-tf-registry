// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVmNatRules(args: GetVmNatRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetVmNatRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dcloud:index/getVmNatRules:getVmNatRules", {
        "id": args.id,
        "topologyUid": args.topologyUid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVmNatRules.
 */
export interface GetVmNatRulesArgs {
    id?: string;
    topologyUid: string;
}

/**
 * A collection of values returned by getVmNatRules.
 */
export interface GetVmNatRulesResult {
    readonly id: string;
    readonly topologyUid: string;
    readonly vmNatRules: outputs.GetVmNatRulesVmNatRule[];
}
export function getVmNatRulesOutput(args: GetVmNatRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmNatRulesResult> {
    return pulumi.output(args).apply((a: any) => getVmNatRules(a, opts))
}

/**
 * A collection of arguments for invoking getVmNatRules.
 */
export interface GetVmNatRulesOutputArgs {
    id?: pulumi.Input<string>;
    topologyUid: pulumi.Input<string>;
}
