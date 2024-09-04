// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getK8sCluster(args?: GetK8sClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetK8sClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getK8sCluster:getK8sCluster", {
        "clusterId": args.clusterId,
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getK8sCluster.
 */
export interface GetK8sClusterArgs {
    clusterId?: string;
    id?: string;
    name?: string;
    projectId?: string;
    region?: string;
}

/**
 * A collection of values returned by getK8sCluster.
 */
export interface GetK8sClusterResult {
    readonly admissionPlugins: string[];
    readonly apiserverCertSans: string[];
    readonly apiserverUrl: string;
    readonly autoUpgrades: outputs.GetK8sClusterAutoUpgrade[];
    readonly autoscalerConfigs: outputs.GetK8sClusterAutoscalerConfig[];
    readonly clusterId?: string;
    readonly cni: string;
    readonly createdAt: string;
    readonly description: string;
    readonly featureGates: string[];
    readonly id: string;
    readonly kubeconfigs: outputs.GetK8sClusterKubeconfig[];
    readonly name?: string;
    readonly openIdConnectConfigs: outputs.GetK8sClusterOpenIdConnectConfig[];
    readonly organizationId: string;
    readonly privateNetworkId: string;
    readonly projectId?: string;
    readonly region?: string;
    readonly status: string;
    readonly tags: string[];
    readonly type: string;
    readonly updatedAt: string;
    readonly upgradeAvailable: boolean;
    readonly version: string;
    readonly wildcardDns: string;
}
export function getK8sClusterOutput(args?: GetK8sClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetK8sClusterResult> {
    return pulumi.output(args).apply((a: any) => getK8sCluster(a, opts))
}

/**
 * A collection of arguments for invoking getK8sCluster.
 */
export interface GetK8sClusterOutputArgs {
    clusterId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
