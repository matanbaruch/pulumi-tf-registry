// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getReplicationServer(args: GetReplicationServerArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getReplicationServer:getReplicationServer", {
        "replicationServerId": args.replicationServerId,
        "synchronizationProviderName": args.synchronizationProviderName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getReplicationServer.
 */
export interface GetReplicationServerArgs {
    replicationServerId: number;
    synchronizationProviderName: string;
}

/**
 * A collection of values returned by getReplicationServer.
 */
export interface GetReplicationServerResult {
    readonly compressionCriteria: string;
    readonly gatewayPriority: number;
    readonly heartbeatInterval: string;
    readonly id: string;
    readonly includeAllRemoteServersStateInMonitorMessage: boolean;
    readonly jeProperties: string[];
    readonly listenOnAllAddresses: boolean;
    readonly missingChangesAlertThresholdPercent: number;
    readonly missingChangesPolicy: string;
    readonly remoteMonitorUpdateInterval: string;
    readonly replicationDbDirectory: string;
    readonly replicationPort: number;
    readonly replicationPurgeDelay: string;
    readonly replicationServerId: number;
    readonly restrictedDomains: string[];
    readonly synchronizationProviderName: string;
    readonly targetDatabaseSize: string;
    readonly type: string;
}
export function getReplicationServerOutput(args: GetReplicationServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationServerResult> {
    return pulumi.output(args).apply((a: any) => getReplicationServer(a, opts))
}

/**
 * A collection of arguments for invoking getReplicationServer.
 */
export interface GetReplicationServerOutputArgs {
    replicationServerId: pulumi.Input<number>;
    synchronizationProviderName: pulumi.Input<string>;
}
