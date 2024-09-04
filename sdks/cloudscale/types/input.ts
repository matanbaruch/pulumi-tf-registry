// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CustomImageTimeouts {
    create?: pulumi.Input<string>;
}

export interface LoadBalancerVipAddress {
    address?: pulumi.Input<string>;
    subnetCidr?: pulumi.Input<string>;
    subnetHref?: pulumi.Input<string>;
    subnetUuid?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

export interface NetworkSubnet {
    cidr: pulumi.Input<string>;
    href: pulumi.Input<string>;
    uuid: pulumi.Input<string>;
}

export interface ObjectsUserKey {
    accessKey: pulumi.Input<string>;
    secretKey: pulumi.Input<string>;
}

export interface ServerInterface {
    addresses?: pulumi.Input<pulumi.Input<inputs.ServerInterfaceAddress>[]>;
    networkHref?: pulumi.Input<string>;
    networkName?: pulumi.Input<string>;
    networkUuid?: pulumi.Input<string>;
    noAddress?: pulumi.Input<boolean>;
    type: pulumi.Input<string>;
}

export interface ServerInterfaceAddress {
    address?: pulumi.Input<string>;
    gateway?: pulumi.Input<string>;
    prefixLength?: pulumi.Input<number>;
    reversePtr?: pulumi.Input<string>;
    subnetCidr?: pulumi.Input<string>;
    subnetHref?: pulumi.Input<string>;
    subnetUuid?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

export interface ServerServerGroup {
    href: pulumi.Input<string>;
    name: pulumi.Input<string>;
    uuid: pulumi.Input<string>;
}

export interface ServerTimeouts {
    create?: pulumi.Input<string>;
}

export interface ServerVolume {
    devicePath: pulumi.Input<string>;
    sizeGb: pulumi.Input<number>;
    type: pulumi.Input<string>;
    uuid: pulumi.Input<string>;
}
