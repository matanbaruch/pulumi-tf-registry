// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AllowListAllowList {
    /**
     * A comment to describe the IP address
     */
    comment?: string;
    /**
     * The IP address to allow access to the service. The IP must be in a valid CIDR format
     */
    ip: string;
}

export interface AllowListTimeouts {
    create?: string;
}

export interface AutonomousAutoScaleDisk {
    id: string;
    maxStorageSizeGbs: number;
}

export interface AutonomousAutoScaleNodesHorizontal {
    id: string;
    maxNodes: number;
    minNodes: number;
}

export interface AutonomousAutoScaleNodesVertical {
    id: string;
    maxNodeSize: string;
    minNodeSize: string;
}

export interface GetAvailabilityZonesZone {
    /**
     * The ID of the availability zone.
     */
    id: string;
    /**
     * The name of the availability zone.
     */
    name: string;
    /**
     * The provider for the availability zone.
     */
    provider: string;
    /**
     * The region name of the availability zone.
     */
    region: string;
}

export interface GetProjectsProject {
    /**
     * The description of the project.
     */
    description: string;
    /**
     * The ID of the project.
     */
    id: string;
    /**
     * Whether the project is the default project.
     */
    isDefault: boolean;
    /**
     * The name of the project.
     */
    name: string;
}

export interface GetServiceEndpoint {
    allowedAccounts: string[];
    endpointService: string;
    mechanism: string;
    name: string;
    ports: outputs.GetServiceEndpointPort[];
    visibility: string;
}

export interface GetServiceEndpointPort {
    name: string;
    port: number;
    purpose: string;
}

export interface GetServiceStorageVolume {
    /**
     * The number of IOPS for the storage volume. This is only applicable for io1 and gp3 volumes.
     */
    iops: number;
    /**
     * The size of the storage volume in GB.
     */
    size: number;
    /**
     * The Throughput for the storage volume. This is only applicable for gp3 volumes.
     */
    throughput: number;
    /**
     * The type of the storage volume. Possible values are: gp3, io1 etc
     */
    volumeType: string;
}

export interface GetVersionsVersion {
    /**
     * The display name of the version
     */
    displayName: string;
    /**
     * The ID of the version
     */
    id: string;
    /**
     * Whether the version is a major version
     */
    isMajor: boolean;
    /**
     * The name of the version
     */
    name: string;
    /**
     * The product that uses the version
     */
    product: string;
    /**
     * The release date of the version
     */
    releaseDate: string;
    /**
     * The URL to the release notes of the version
     */
    releaseNotesUrl: string;
    /**
     * The topology that uses the version
     */
    topology: string;
    /**
     * The version display name
     */
    version: string;
}

export interface ServiceAllowList {
    /**
     * A comment to describe the IP address
     */
    comment?: string;
    /**
     * The IP address to allow access to the service. The IP must be in a valid CIDR format
     */
    ip: string;
}

export interface ServiceTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

