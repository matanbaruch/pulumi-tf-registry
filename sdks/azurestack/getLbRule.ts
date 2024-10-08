// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLbRule(args: GetLbRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetLbRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurestack:index/getLbRule:getLbRule", {
        "id": args.id,
        "loadbalancerId": args.loadbalancerId,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLbRule.
 */
export interface GetLbRuleArgs {
    id?: string;
    loadbalancerId: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetLbRuleTimeouts;
}

/**
 * A collection of values returned by getLbRule.
 */
export interface GetLbRuleResult {
    readonly backendAddressPoolId: string;
    readonly backendPort: number;
    readonly disableOutboundSnat: boolean;
    readonly enableFloatingIp: boolean;
    readonly frontendIpConfigurationName: string;
    readonly frontendPort: number;
    readonly id: string;
    readonly idleTimeoutInMinutes: number;
    readonly loadDistribution: string;
    readonly loadbalancerId: string;
    readonly name: string;
    readonly probeId: string;
    readonly protocol: string;
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetLbRuleTimeouts;
}
export function getLbRuleOutput(args: GetLbRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLbRuleResult> {
    return pulumi.output(args).apply((a: any) => getLbRule(a, opts))
}

/**
 * A collection of arguments for invoking getLbRule.
 */
export interface GetLbRuleOutputArgs {
    id?: pulumi.Input<string>;
    loadbalancerId: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetLbRuleTimeoutsArgs>;
}
