// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getK8sv2Kubeconfig(args: GetK8sv2KubeconfigArgs, opts?: pulumi.InvokeOptions): Promise<GetK8sv2KubeconfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getK8sv2Kubeconfig:getK8sv2Kubeconfig", {
        "clusterName": args.clusterName,
        "id": args.id,
        "projectId": args.projectId,
        "projectName": args.projectName,
        "regionId": args.regionId,
        "regionName": args.regionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getK8sv2Kubeconfig.
 */
export interface GetK8sv2KubeconfigArgs {
    clusterName: string;
    id?: string;
    projectId?: number;
    projectName?: string;
    regionId?: number;
    regionName?: string;
}

/**
 * A collection of values returned by getK8sv2Kubeconfig.
 */
export interface GetK8sv2KubeconfigResult {
    readonly clusterName: string;
    readonly id: string;
    readonly kubeconfig: string;
    readonly projectId?: number;
    readonly projectName?: string;
    readonly regionId?: number;
    readonly regionName?: string;
}
export function getK8sv2KubeconfigOutput(args: GetK8sv2KubeconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetK8sv2KubeconfigResult> {
    return pulumi.output(args).apply((a: any) => getK8sv2Kubeconfig(a, opts))
}

/**
 * A collection of arguments for invoking getK8sv2Kubeconfig.
 */
export interface GetK8sv2KubeconfigOutputArgs {
    clusterName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
