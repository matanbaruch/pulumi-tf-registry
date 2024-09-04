// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFsxOntapFileSystem(args: GetFsxOntapFileSystemArgs, opts?: pulumi.InvokeOptions): Promise<GetFsxOntapFileSystemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getFsxOntapFileSystem:getFsxOntapFileSystem", {
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFsxOntapFileSystem.
 */
export interface GetFsxOntapFileSystemArgs {
    id: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getFsxOntapFileSystem.
 */
export interface GetFsxOntapFileSystemResult {
    readonly arn: string;
    readonly automaticBackupRetentionDays: number;
    readonly dailyAutomaticBackupStartTime: string;
    readonly deploymentType: string;
    readonly diskIopsConfigurations: outputs.GetFsxOntapFileSystemDiskIopsConfiguration[];
    readonly dnsName: string;
    readonly endpointIpAddressRange: string;
    readonly endpoints: outputs.GetFsxOntapFileSystemEndpoint[];
    readonly haPairs: number;
    readonly id: string;
    readonly kmsKeyId: string;
    readonly networkInterfaceIds: string[];
    readonly ownerId: string;
    readonly preferredSubnetId: string;
    readonly routeTableIds: string[];
    readonly storageCapacity: number;
    readonly storageType: string;
    readonly subnetIds: string[];
    readonly tags: {[key: string]: string};
    readonly throughputCapacity: number;
    readonly throughputCapacityPerHaPair: number;
    readonly vpcId: string;
    readonly weeklyMaintenanceStartTime: string;
}
export function getFsxOntapFileSystemOutput(args: GetFsxOntapFileSystemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFsxOntapFileSystemResult> {
    return pulumi.output(args).apply((a: any) => getFsxOntapFileSystem(a, opts))
}

/**
 * A collection of arguments for invoking getFsxOntapFileSystem.
 */
export interface GetFsxOntapFileSystemOutputArgs {
    id: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
