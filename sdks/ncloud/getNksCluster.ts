// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNksCluster(args: GetNksClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetNksClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getNksCluster:getNksCluster", {
        "hypervisorCode": args.hypervisorCode,
        "id": args.id,
        "ipAclDefaultAction": args.ipAclDefaultAction,
        "ipAcls": args.ipAcls,
        "kubeNetworkPlugin": args.kubeNetworkPlugin,
        "oidc": args.oidc,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNksCluster.
 */
export interface GetNksClusterArgs {
    hypervisorCode?: string;
    id?: string;
    ipAclDefaultAction?: string;
    ipAcls?: inputs.GetNksClusterIpAcl[];
    kubeNetworkPlugin?: string;
    oidc?: inputs.GetNksClusterOidc;
    uuid: string;
}

/**
 * A collection of values returned by getNksCluster.
 */
export interface GetNksClusterResult {
    readonly acgNo: string;
    readonly clusterType: string;
    readonly endpoint: string;
    readonly hypervisorCode: string;
    readonly id: string;
    readonly ipAclDefaultAction?: string;
    readonly ipAcls?: outputs.GetNksClusterIpAcl[];
    readonly k8sVersion: string;
    readonly kubeNetworkPlugin: string;
    readonly lbPrivateSubnetNo: string;
    readonly lbPublicSubnetNo: string;
    readonly loginKeyName: string;
    readonly logs: outputs.GetNksClusterLog[];
    readonly name: string;
    readonly oidc?: outputs.GetNksClusterOidc;
    readonly publicNetwork: boolean;
    readonly subnetNoLists: string[];
    readonly uuid: string;
    readonly vpcNo: string;
    readonly zone: string;
}
export function getNksClusterOutput(args: GetNksClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNksClusterResult> {
    return pulumi.output(args).apply((a: any) => getNksCluster(a, opts))
}

/**
 * A collection of arguments for invoking getNksCluster.
 */
export interface GetNksClusterOutputArgs {
    hypervisorCode?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipAclDefaultAction?: pulumi.Input<string>;
    ipAcls?: pulumi.Input<pulumi.Input<inputs.GetNksClusterIpAclArgs>[]>;
    kubeNetworkPlugin?: pulumi.Input<string>;
    oidc?: pulumi.Input<inputs.GetNksClusterOidcArgs>;
    uuid: pulumi.Input<string>;
}
