// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getContainerAttachedInstallManifest(args: GetContainerAttachedInstallManifestArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAttachedInstallManifestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getContainerAttachedInstallManifest:getContainerAttachedInstallManifest", {
        "clusterId": args.clusterId,
        "id": args.id,
        "location": args.location,
        "platformVersion": args.platformVersion,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerAttachedInstallManifest.
 */
export interface GetContainerAttachedInstallManifestArgs {
    clusterId: string;
    id?: string;
    location: string;
    platformVersion: string;
    project: string;
}

/**
 * A collection of values returned by getContainerAttachedInstallManifest.
 */
export interface GetContainerAttachedInstallManifestResult {
    readonly clusterId: string;
    readonly id: string;
    readonly location: string;
    readonly manifest: string;
    readonly platformVersion: string;
    readonly project: string;
}
export function getContainerAttachedInstallManifestOutput(args: GetContainerAttachedInstallManifestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAttachedInstallManifestResult> {
    return pulumi.output(args).apply((a: any) => getContainerAttachedInstallManifest(a, opts))
}

/**
 * A collection of arguments for invoking getContainerAttachedInstallManifest.
 */
export interface GetContainerAttachedInstallManifestOutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    platformVersion: pulumi.Input<string>;
    project: pulumi.Input<string>;
}
