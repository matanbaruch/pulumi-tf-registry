// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoadBalancerListenerRules(args: GetLoadBalancerListenerRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerListenerRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getLoadBalancerListenerRules:getLoadBalancerListenerRules", {
        "filters": args.filters,
        "id": args.id,
        "listenerName": args.listenerName,
        "loadBalancerId": args.loadBalancerId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalancerListenerRules.
 */
export interface GetLoadBalancerListenerRulesArgs {
    filters?: inputs.GetLoadBalancerListenerRulesFilter[];
    id?: string;
    listenerName: string;
    loadBalancerId: string;
}

/**
 * A collection of values returned by getLoadBalancerListenerRules.
 */
export interface GetLoadBalancerListenerRulesResult {
    readonly filters?: outputs.GetLoadBalancerListenerRulesFilter[];
    readonly id: string;
    readonly listenerName: string;
    readonly listenerRules: outputs.GetLoadBalancerListenerRulesListenerRule[];
    readonly loadBalancerId: string;
}
export function getLoadBalancerListenerRulesOutput(args: GetLoadBalancerListenerRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancerListenerRulesResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalancerListenerRules(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalancerListenerRules.
 */
export interface GetLoadBalancerListenerRulesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLoadBalancerListenerRulesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    listenerName: pulumi.Input<string>;
    loadBalancerId: pulumi.Input<string>;
}
