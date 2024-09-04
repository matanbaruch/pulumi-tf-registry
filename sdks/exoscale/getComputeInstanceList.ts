// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeInstanceList(args: GetComputeInstanceListArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeInstanceListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("exoscale:index/getComputeInstanceList:getComputeInstanceList", {
        "createdAt": args.createdAt,
        "deployTargetId": args.deployTargetId,
        "diskSize": args.diskSize,
        "id": args.id,
        "ipv6": args.ipv6,
        "ipv6Address": args.ipv6Address,
        "labels": args.labels,
        "managerId": args.managerId,
        "managerType": args.managerType,
        "name": args.name,
        "publicIpAddress": args.publicIpAddress,
        "reverseDns": args.reverseDns,
        "sshKey": args.sshKey,
        "state": args.state,
        "templateId": args.templateId,
        "type": args.type,
        "userData": args.userData,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeInstanceList.
 */
export interface GetComputeInstanceListArgs {
    createdAt?: string;
    deployTargetId?: string;
    diskSize?: number;
    id?: string;
    ipv6?: boolean;
    ipv6Address?: string;
    labels?: {[key: string]: string};
    managerId?: string;
    managerType?: string;
    name?: string;
    publicIpAddress?: string;
    reverseDns?: string;
    sshKey?: string;
    state?: string;
    templateId?: string;
    type?: string;
    userData?: string;
    zone: string;
}

/**
 * A collection of values returned by getComputeInstanceList.
 */
export interface GetComputeInstanceListResult {
    readonly createdAt?: string;
    readonly deployTargetId?: string;
    readonly diskSize?: number;
    readonly id?: string;
    readonly instances: outputs.GetComputeInstanceListInstance[];
    readonly ipv6?: boolean;
    readonly ipv6Address?: string;
    readonly labels?: {[key: string]: string};
    readonly managerId?: string;
    readonly managerType?: string;
    readonly name?: string;
    readonly publicIpAddress?: string;
    readonly reverseDns?: string;
    readonly sshKey?: string;
    readonly state?: string;
    readonly templateId?: string;
    readonly type?: string;
    readonly userData?: string;
    readonly zone: string;
}
export function getComputeInstanceListOutput(args: GetComputeInstanceListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeInstanceListResult> {
    return pulumi.output(args).apply((a: any) => getComputeInstanceList(a, opts))
}

/**
 * A collection of arguments for invoking getComputeInstanceList.
 */
export interface GetComputeInstanceListOutputArgs {
    createdAt?: pulumi.Input<string>;
    deployTargetId?: pulumi.Input<string>;
    diskSize?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    ipv6?: pulumi.Input<boolean>;
    ipv6Address?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    managerId?: pulumi.Input<string>;
    managerType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    publicIpAddress?: pulumi.Input<string>;
    reverseDns?: pulumi.Input<string>;
    sshKey?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    templateId?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    userData?: pulumi.Input<string>;
    zone: pulumi.Input<string>;
}
