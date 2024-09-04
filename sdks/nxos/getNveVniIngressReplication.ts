// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNveVniIngressReplication(args: GetNveVniIngressReplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetNveVniIngressReplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getNveVniIngressReplication:getNveVniIngressReplication", {
        "device": args.device,
        "vni": args.vni,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNveVniIngressReplication.
 */
export interface GetNveVniIngressReplicationArgs {
    device?: string;
    vni: number;
}

/**
 * A collection of values returned by getNveVniIngressReplication.
 */
export interface GetNveVniIngressReplicationResult {
    readonly device?: string;
    readonly id: string;
    readonly protocol: string;
    readonly vni: number;
}
export function getNveVniIngressReplicationOutput(args: GetNveVniIngressReplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNveVniIngressReplicationResult> {
    return pulumi.output(args).apply((a: any) => getNveVniIngressReplication(a, opts))
}

/**
 * A collection of arguments for invoking getNveVniIngressReplication.
 */
export interface GetNveVniIngressReplicationOutputArgs {
    device?: pulumi.Input<string>;
    vni: pulumi.Input<number>;
}
