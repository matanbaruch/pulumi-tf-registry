// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ComputeInstanceNetworkingInfo {
    dns?: pulumi.Input<pulumi.Input<string>[]>;
    index: pulumi.Input<number>;
    ipAddress?: pulumi.Input<string>;
    ipNetwork?: pulumi.Input<string>;
    isDefaultGateway?: pulumi.Input<boolean>;
    macAddress?: pulumi.Input<string>;
    nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    nats?: pulumi.Input<pulumi.Input<string>[]>;
    searchDomains?: pulumi.Input<pulumi.Input<string>[]>;
    secLists?: pulumi.Input<pulumi.Input<string>[]>;
    sharedNetwork?: pulumi.Input<boolean>;
    vnic?: pulumi.Input<string>;
    vnicSets?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ComputeInstanceStorage {
    index: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    volume: pulumi.Input<string>;
}

export interface ComputeInstanceTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface ComputeOrchestratedInstanceInstance {
    attributes?: pulumi.Input<string>;
    availabilityDomain?: pulumi.Input<string>;
    bootOrders?: pulumi.Input<pulumi.Input<number>[]>;
    domain?: pulumi.Input<string>;
    entry?: pulumi.Input<number>;
    fingerprint?: pulumi.Input<string>;
    fqdn?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    imageFormat?: pulumi.Input<string>;
    imageList?: pulumi.Input<string>;
    instanceAttributes?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    label?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    networkingInfos?: pulumi.Input<pulumi.Input<inputs.ComputeOrchestratedInstanceInstanceNetworkingInfo>[]>;
    persistent?: pulumi.Input<boolean>;
    placementRequirements?: pulumi.Input<pulumi.Input<string>[]>;
    platform?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    quotaReservation?: pulumi.Input<string>;
    relationships?: pulumi.Input<pulumi.Input<string>[]>;
    resolvers?: pulumi.Input<pulumi.Input<string>[]>;
    reverseDns?: pulumi.Input<boolean>;
    shape: pulumi.Input<string>;
    site?: pulumi.Input<string>;
    sshKeys?: pulumi.Input<pulumi.Input<string>[]>;
    startTime?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    storages?: pulumi.Input<pulumi.Input<inputs.ComputeOrchestratedInstanceInstanceStorage>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    vcable?: pulumi.Input<string>;
    virtio?: pulumi.Input<boolean>;
    vncAddress?: pulumi.Input<string>;
}

export interface ComputeOrchestratedInstanceInstanceNetworkingInfo {
    dns?: pulumi.Input<pulumi.Input<string>[]>;
    index: pulumi.Input<number>;
    ipAddress?: pulumi.Input<string>;
    ipNetwork?: pulumi.Input<string>;
    isDefaultGateway?: pulumi.Input<boolean>;
    macAddress?: pulumi.Input<string>;
    nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    nats?: pulumi.Input<pulumi.Input<string>[]>;
    searchDomains?: pulumi.Input<pulumi.Input<string>[]>;
    secLists?: pulumi.Input<pulumi.Input<string>[]>;
    sharedNetwork?: pulumi.Input<boolean>;
    vnic?: pulumi.Input<string>;
    vnicSets?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ComputeOrchestratedInstanceInstanceStorage {
    index: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    volume: pulumi.Input<string>;
}

export interface ComputeOrchestratedInstanceTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface ComputeSnapshotTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface ComputeStorageAttachmentTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface ComputeStorageVolumeSnapshotTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface ComputeStorageVolumeTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface ComputeVpnEndpointV2PhaseOneSettings {
    dhGroup: pulumi.Input<string>;
    encryption: pulumi.Input<string>;
    hash: pulumi.Input<string>;
    lifetime?: pulumi.Input<number>;
}

export interface ComputeVpnEndpointV2PhaseTwoSettings {
    encryption: pulumi.Input<string>;
    hash: pulumi.Input<string>;
    lifetime?: pulumi.Input<number>;
}

export interface ComputeVpnEndpointV2Timeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface LbaasPolicyApplicationCookieStickinessPolicy {
    cookieName: pulumi.Input<string>;
}

export interface LbaasPolicyCloudgatePolicy {
    cloudgateApplication?: pulumi.Input<string>;
    cloudgatePolicyName?: pulumi.Input<string>;
    identityServiceInstanceGuid?: pulumi.Input<string>;
    virtualHostnameForPolicyAttribution: pulumi.Input<string>;
}

export interface LbaasPolicyLoadBalancerCookieStickinessPolicy {
    cookieExpirationPeriod: pulumi.Input<number>;
}

export interface LbaasPolicyLoadBalancingMechanismPolicy {
    loadBalancingMechanism: pulumi.Input<string>;
}

export interface LbaasPolicyRateLimitingRequestPolicy {
    burstSize: pulumi.Input<number>;
    delayExcessiveRequests: pulumi.Input<boolean>;
    httpErrorCode?: pulumi.Input<number>;
    loggingLevel?: pulumi.Input<string>;
    rateLimitingCriteria?: pulumi.Input<string>;
    requestsPerSecond: pulumi.Input<number>;
    zone: pulumi.Input<string>;
    zoneMemorySize?: pulumi.Input<number>;
}

export interface LbaasPolicyRedirectPolicy {
    redirectUri: pulumi.Input<string>;
    responseCode: pulumi.Input<number>;
}

export interface LbaasPolicyResourceAccessControlPolicy {
    deniedClients?: pulumi.Input<pulumi.Input<string>[]>;
    disposition: pulumi.Input<string>;
    permittedClients?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LbaasPolicySetRequestHeaderPolicy {
    actionWhenHeaderExists?: pulumi.Input<string>;
    actionWhenHeaderValueIs?: pulumi.Input<pulumi.Input<string>[]>;
    actionWhenHeaderValueIsNots?: pulumi.Input<pulumi.Input<string>[]>;
    headerName: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

export interface LbaasPolicySslNegotiationPolicy {
    port: pulumi.Input<number>;
    serverOrderPreference?: pulumi.Input<string>;
    sslCiphers?: pulumi.Input<pulumi.Input<string>[]>;
    sslProtocols: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LbaasPolicyTrustedCertificatePolicy {
    trustedCertificate: pulumi.Input<string>;
}

export interface LbaasServerPoolHealthCheck {
    acceptedReturnCodes?: pulumi.Input<pulumi.Input<string>[]>;
    enabled?: pulumi.Input<boolean>;
    healthyThreshold?: pulumi.Input<number>;
    interval?: pulumi.Input<number>;
    path?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    unhealthyThreshold?: pulumi.Input<number>;
}
