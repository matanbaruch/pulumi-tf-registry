// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetwork(args?: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zerotier:index/getNetwork:getNetwork", {
        "assignIpv4s": args.assignIpv4s,
        "assignIpv6s": args.assignIpv6s,
        "assignmentPools": args.assignmentPools,
        "description": args.description,
        "dns": args.dns,
        "enableBroadcast": args.enableBroadcast,
        "flowRules": args.flowRules,
        "id": args.id,
        "multicastLimit": args.multicastLimit,
        "name": args.name,
        "private": args.private,
        "routes": args.routes,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    assignIpv4s?: inputs.GetNetworkAssignIpv4[];
    assignIpv6s?: inputs.GetNetworkAssignIpv6[];
    assignmentPools?: inputs.GetNetworkAssignmentPool[];
    description?: string;
    dns?: inputs.GetNetworkDn[];
    enableBroadcast?: boolean;
    flowRules?: string;
    id?: string;
    multicastLimit?: number;
    name?: string;
    private?: boolean;
    routes?: inputs.GetNetworkRoute[];
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    readonly assignIpv4s?: outputs.GetNetworkAssignIpv4[];
    readonly assignIpv6s?: outputs.GetNetworkAssignIpv6[];
    readonly assignmentPools?: outputs.GetNetworkAssignmentPool[];
    readonly creationTime: number;
    readonly description?: string;
    readonly dns?: outputs.GetNetworkDn[];
    readonly enableBroadcast?: boolean;
    readonly flowRules?: string;
    readonly id: string;
    readonly multicastLimit?: number;
    readonly name: string;
    readonly private?: boolean;
    readonly routes?: outputs.GetNetworkRoute[];
}
export function getNetworkOutput(args?: GetNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkResult> {
    return pulumi.output(args).apply((a: any) => getNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkOutputArgs {
    assignIpv4s?: pulumi.Input<pulumi.Input<inputs.GetNetworkAssignIpv4Args>[]>;
    assignIpv6s?: pulumi.Input<pulumi.Input<inputs.GetNetworkAssignIpv6Args>[]>;
    assignmentPools?: pulumi.Input<pulumi.Input<inputs.GetNetworkAssignmentPoolArgs>[]>;
    description?: pulumi.Input<string>;
    dns?: pulumi.Input<pulumi.Input<inputs.GetNetworkDnArgs>[]>;
    enableBroadcast?: pulumi.Input<boolean>;
    flowRules?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    multicastLimit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    private?: pulumi.Input<boolean>;
    routes?: pulumi.Input<pulumi.Input<inputs.GetNetworkRouteArgs>[]>;
}
