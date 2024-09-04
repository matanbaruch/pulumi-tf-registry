// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFarawayReplica(args: GetFarawayReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetFarawayReplicaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("biganimal:index/getFarawayReplica:getFarawayReplica", {
        "allowedIpRanges": args.allowedIpRanges,
        "backupRetentionPeriod": args.backupRetentionPeriod,
        "clusterId": args.clusterId,
        "cspAuth": args.cspAuth,
        "peAllowedPrincipalIds": args.peAllowedPrincipalIds,
        "pgConfigs": args.pgConfigs,
        "privateNetworking": args.privateNetworking,
        "projectId": args.projectId,
        "serviceAccountIds": args.serviceAccountIds,
        "timeouts": args.timeouts,
        "transparentDataEncryption": args.transparentDataEncryption,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFarawayReplica.
 */
export interface GetFarawayReplicaArgs {
    allowedIpRanges?: inputs.GetFarawayReplicaAllowedIpRange[];
    backupRetentionPeriod?: string;
    clusterId: string;
    cspAuth?: boolean;
    peAllowedPrincipalIds?: string[];
    pgConfigs?: inputs.GetFarawayReplicaPgConfig[];
    privateNetworking?: boolean;
    projectId?: string;
    serviceAccountIds?: string[];
    timeouts?: inputs.GetFarawayReplicaTimeouts;
    transparentDataEncryption?: inputs.GetFarawayReplicaTransparentDataEncryption;
}

/**
 * A collection of values returned by getFarawayReplica.
 */
export interface GetFarawayReplicaResult {
    readonly allowedIpRanges: outputs.GetFarawayReplicaAllowedIpRange[];
    readonly backupRetentionPeriod?: string;
    readonly cloudProvider: string;
    readonly clusterArchitecture: outputs.GetFarawayReplicaClusterArchitecture;
    readonly clusterId: string;
    readonly clusterName: string;
    readonly clusterType: string;
    readonly connectionUri: string;
    readonly createdAt: string;
    readonly cspAuth?: boolean;
    readonly id: string;
    readonly instanceType: string;
    readonly logsUrl: string;
    readonly metricsUrl: string;
    readonly peAllowedPrincipalIds: string[];
    readonly pgConfigs?: outputs.GetFarawayReplicaPgConfig[];
    readonly pgIdentity: string;
    readonly pgType: string;
    readonly pgVersion: string;
    readonly phase: string;
    readonly privateNetworking?: boolean;
    readonly projectId?: string;
    readonly region: string;
    readonly resizingPvcs: string[];
    readonly serviceAccountIds: string[];
    readonly sourceClusterId: string;
    readonly storage: outputs.GetFarawayReplicaStorage;
    readonly timeouts?: outputs.GetFarawayReplicaTimeouts;
    readonly transparentDataEncryption?: outputs.GetFarawayReplicaTransparentDataEncryption;
    readonly transparentDataEncryptionAction: string;
    readonly volumeSnapshotBackup: boolean;
}
export function getFarawayReplicaOutput(args: GetFarawayReplicaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFarawayReplicaResult> {
    return pulumi.output(args).apply((a: any) => getFarawayReplica(a, opts))
}

/**
 * A collection of arguments for invoking getFarawayReplica.
 */
export interface GetFarawayReplicaOutputArgs {
    allowedIpRanges?: pulumi.Input<pulumi.Input<inputs.GetFarawayReplicaAllowedIpRangeArgs>[]>;
    backupRetentionPeriod?: pulumi.Input<string>;
    clusterId: pulumi.Input<string>;
    cspAuth?: pulumi.Input<boolean>;
    peAllowedPrincipalIds?: pulumi.Input<pulumi.Input<string>[]>;
    pgConfigs?: pulumi.Input<pulumi.Input<inputs.GetFarawayReplicaPgConfigArgs>[]>;
    privateNetworking?: pulumi.Input<boolean>;
    projectId?: pulumi.Input<string>;
    serviceAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.GetFarawayReplicaTimeoutsArgs>;
    transparentDataEncryption?: pulumi.Input<inputs.GetFarawayReplicaTransparentDataEncryptionArgs>;
}
