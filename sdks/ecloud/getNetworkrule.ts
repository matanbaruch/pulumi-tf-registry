// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkrule(args?: GetNetworkruleArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkruleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecloud:index/getNetworkrule:getNetworkrule", {
        "action": args.action,
        "destination": args.destination,
        "direction": args.direction,
        "enabled": args.enabled,
        "id": args.id,
        "name": args.name,
        "networkPolicyId": args.networkPolicyId,
        "networkRuleId": args.networkRuleId,
        "sequence": args.sequence,
        "source": args.source,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkrule.
 */
export interface GetNetworkruleArgs {
    action?: string;
    destination?: string;
    direction?: string;
    enabled?: boolean;
    id?: string;
    name?: string;
    networkPolicyId?: string;
    networkRuleId?: string;
    sequence?: number;
    source?: string;
}

/**
 * A collection of values returned by getNetworkrule.
 */
export interface GetNetworkruleResult {
    readonly action?: string;
    readonly destination?: string;
    readonly direction?: string;
    readonly enabled?: boolean;
    readonly id: string;
    readonly name?: string;
    readonly networkPolicyId?: string;
    readonly networkRuleId?: string;
    readonly sequence?: number;
    readonly source?: string;
}
export function getNetworkruleOutput(args?: GetNetworkruleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkruleResult> {
    return pulumi.output(args).apply((a: any) => getNetworkrule(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkrule.
 */
export interface GetNetworkruleOutputArgs {
    action?: pulumi.Input<string>;
    destination?: pulumi.Input<string>;
    direction?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkPolicyId?: pulumi.Input<string>;
    networkRuleId?: pulumi.Input<string>;
    sequence?: pulumi.Input<number>;
    source?: pulumi.Input<string>;
}
