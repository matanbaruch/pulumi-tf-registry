// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetPackageFilter {
    disk?: number;
    group?: string;
    lwps?: number;
    memory?: number;
    name?: string;
    swap?: number;
    vcpus?: number;
    version?: string;
}

export interface InstanceTemplateTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

export interface KeyTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

export interface MachineCns {
    /**
     * Disable CNS for this instance (after create)
     */
    disable?: boolean;
    /**
     * Assign CNS service names to this instance
     */
    services?: string[];
}

export interface MachineLocality {
    /**
     * UUIDs of other instances to attempt to provision alongside
     */
    closeTos?: string[];
    /**
     * UUIDs of other instances to attempt not to provision alongside
     */
    farFroms?: string[];
}

export interface MachineNic {
    /**
     * IPv4 gateway
     */
    gateway: string;
    /**
     * NIC's IPv4 address
     */
    ip: string;
    /**
     * NIC's MAC address
     */
    mac: string;
    /**
     * IPv4 netmask
     */
    netmask: string;
    /**
     * ID of the network to which the NIC is attached
     */
    network: string;
    /**
     * Whether this is the machine's primary NIC
     */
    primary: boolean;
    /**
     * Provisioning state of the NIC
     */
    state: string;
}

export interface MachineTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

export interface MachineVolume {
    /**
     * The volume attachment mode
     */
    mode: string;
    /**
     * Where to attach the volume
     */
    mountpoint: string;
    /**
     * The name of the volume
     */
    name: string;
    /**
     * The type of volume
     */
    type: string;
}

export interface ServiceGroupTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

export interface VlanTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

export interface VolumeTimeouts {
    create?: string;
    delete?: string;
    read?: string;
    update?: string;
}

