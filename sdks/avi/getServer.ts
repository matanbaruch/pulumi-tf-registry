// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getServer:getServer", {
        "id": args.id,
        "ip": args.ip,
        "poolRef": args.poolRef,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerArgs {
    id?: string;
    ip: string;
    poolRef: string;
}

/**
 * A collection of values returned by getServer.
 */
export interface GetServerResult {
    readonly autoscalingGroupName: string;
    readonly availabilityZone: string;
    readonly description: string;
    readonly discoveredNetworks: outputs.GetServerDiscoveredNetwork[];
    readonly enabled: string;
    readonly externalOrchestrationId: string;
    readonly externalUuid: string;
    readonly hostname: string;
    readonly id: string;
    readonly ip: string;
    readonly locations: outputs.GetServerLocation[];
    readonly macAddress: string;
    readonly nwRef: string;
    readonly poolRef: string;
    readonly port: string;
    readonly preferenceOrder: string;
    readonly prstHdrVal: string;
    readonly ratio: string;
    readonly resolveServerByDns: string;
    readonly rewriteHostHeader: string;
    readonly serverNode: string;
    readonly static: string;
    readonly type: string;
    readonly verifyNetwork: string;
    readonly vmRef: string;
}
export function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerResult> {
    return pulumi.output(args).apply((a: any) => getServer(a, opts))
}

/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerOutputArgs {
    id?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    poolRef: pulumi.Input<string>;
}
