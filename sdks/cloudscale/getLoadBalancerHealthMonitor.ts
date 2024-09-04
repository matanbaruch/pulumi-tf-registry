// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalancerHealthMonitor(args?: GetLoadBalancerHealthMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerHealthMonitorResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudscale:index/getLoadBalancerHealthMonitor:getLoadBalancerHealthMonitor", {
        "delayS": args.delayS,
        "downThreshold": args.downThreshold,
        "httpExpectedCodes": args.httpExpectedCodes,
        "httpHost": args.httpHost,
        "httpMethod": args.httpMethod,
        "httpUrlPath": args.httpUrlPath,
        "httpVersion": args.httpVersion,
        "id": args.id,
        "poolUuid": args.poolUuid,
        "tags": args.tags,
        "timeoutS": args.timeoutS,
        "upThreshold": args.upThreshold,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalancerHealthMonitor.
 */
export interface GetLoadBalancerHealthMonitorArgs {
    delayS?: number;
    downThreshold?: number;
    httpExpectedCodes?: string[];
    httpHost?: string;
    httpMethod?: string;
    httpUrlPath?: string;
    httpVersion?: string;
    id?: string;
    poolUuid?: string;
    tags?: {[key: string]: string};
    timeoutS?: number;
    upThreshold?: number;
}

/**
 * A collection of values returned by getLoadBalancerHealthMonitor.
 */
export interface GetLoadBalancerHealthMonitorResult {
    readonly delayS: number;
    readonly downThreshold: number;
    readonly href: string;
    readonly httpExpectedCodes: string[];
    readonly httpHost: string;
    readonly httpMethod: string;
    readonly httpUrlPath: string;
    readonly httpVersion: string;
    readonly id?: string;
    readonly poolHref: string;
    readonly poolName: string;
    readonly poolUuid?: string;
    readonly tags?: {[key: string]: string};
    readonly timeoutS: number;
    readonly type: string;
    readonly upThreshold: number;
}
export function getLoadBalancerHealthMonitorOutput(args?: GetLoadBalancerHealthMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancerHealthMonitorResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalancerHealthMonitor(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalancerHealthMonitor.
 */
export interface GetLoadBalancerHealthMonitorOutputArgs {
    delayS?: pulumi.Input<number>;
    downThreshold?: pulumi.Input<number>;
    httpExpectedCodes?: pulumi.Input<pulumi.Input<string>[]>;
    httpHost?: pulumi.Input<string>;
    httpMethod?: pulumi.Input<string>;
    httpUrlPath?: pulumi.Input<string>;
    httpVersion?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    poolUuid?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeoutS?: pulumi.Input<number>;
    upThreshold?: pulumi.Input<number>;
}
