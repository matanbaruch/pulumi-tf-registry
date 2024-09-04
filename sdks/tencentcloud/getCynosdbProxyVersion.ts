// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCynosdbProxyVersion(args: GetCynosdbProxyVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetCynosdbProxyVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCynosdbProxyVersion:getCynosdbProxyVersion", {
        "clusterId": args.clusterId,
        "id": args.id,
        "proxyGroupId": args.proxyGroupId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCynosdbProxyVersion.
 */
export interface GetCynosdbProxyVersionArgs {
    clusterId: string;
    id?: string;
    proxyGroupId?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getCynosdbProxyVersion.
 */
export interface GetCynosdbProxyVersionResult {
    readonly clusterId: string;
    readonly currentProxyVersion: string;
    readonly id: string;
    readonly proxyGroupId?: string;
    readonly resultOutputFile?: string;
    readonly supportProxyVersions: string[];
}
export function getCynosdbProxyVersionOutput(args: GetCynosdbProxyVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCynosdbProxyVersionResult> {
    return pulumi.output(args).apply((a: any) => getCynosdbProxyVersion(a, opts))
}

/**
 * A collection of arguments for invoking getCynosdbProxyVersion.
 */
export interface GetCynosdbProxyVersionOutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    proxyGroupId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
