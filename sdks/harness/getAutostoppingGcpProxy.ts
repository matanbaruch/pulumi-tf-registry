// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAutostoppingGcpProxy(args: GetAutostoppingGcpProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetAutostoppingGcpProxyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getAutostoppingGcpProxy:getAutostoppingGcpProxy", {
        "allocateStaticIp": args.allocateStaticIp,
        "apiKey": args.apiKey,
        "certificates": args.certificates,
        "cloudConnectorId": args.cloudConnectorId,
        "deleteCloudResourcesOnDestroy": args.deleteCloudResourcesOnDestroy,
        "hostName": args.hostName,
        "id": args.id,
        "machineType": args.machineType,
        "name": args.name,
        "region": args.region,
        "securityGroups": args.securityGroups,
        "subnetId": args.subnetId,
        "vpc": args.vpc,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutostoppingGcpProxy.
 */
export interface GetAutostoppingGcpProxyArgs {
    allocateStaticIp?: boolean;
    apiKey: string;
    certificates?: inputs.GetAutostoppingGcpProxyCertificates;
    cloudConnectorId: string;
    deleteCloudResourcesOnDestroy: boolean;
    hostName: string;
    id?: string;
    machineType: string;
    name: string;
    region: string;
    securityGroups?: string[];
    subnetId: string;
    vpc: string;
    zone: string;
}

/**
 * A collection of values returned by getAutostoppingGcpProxy.
 */
export interface GetAutostoppingGcpProxyResult {
    readonly allocateStaticIp?: boolean;
    readonly apiKey: string;
    readonly certificates?: outputs.GetAutostoppingGcpProxyCertificates;
    readonly cloudConnectorId: string;
    readonly deleteCloudResourcesOnDestroy: boolean;
    readonly hostName: string;
    readonly id: string;
    readonly identifier: string;
    readonly machineType: string;
    readonly name: string;
    readonly region: string;
    readonly securityGroups?: string[];
    readonly subnetId: string;
    readonly vpc: string;
    readonly zone: string;
}
export function getAutostoppingGcpProxyOutput(args: GetAutostoppingGcpProxyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutostoppingGcpProxyResult> {
    return pulumi.output(args).apply((a: any) => getAutostoppingGcpProxy(a, opts))
}

/**
 * A collection of arguments for invoking getAutostoppingGcpProxy.
 */
export interface GetAutostoppingGcpProxyOutputArgs {
    allocateStaticIp?: pulumi.Input<boolean>;
    apiKey: pulumi.Input<string>;
    certificates?: pulumi.Input<inputs.GetAutostoppingGcpProxyCertificatesArgs>;
    cloudConnectorId: pulumi.Input<string>;
    deleteCloudResourcesOnDestroy: pulumi.Input<boolean>;
    hostName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    machineType: pulumi.Input<string>;
    name: pulumi.Input<string>;
    region: pulumi.Input<string>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    subnetId: pulumi.Input<string>;
    vpc: pulumi.Input<string>;
    zone: pulumi.Input<string>;
}
