// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkContainer(args: GetNetworkContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getNetworkContainer:getNetworkContainer", {
        "containerId": args.containerId,
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkContainer.
 */
export interface GetNetworkContainerArgs {
    containerId: string;
    id?: string;
    projectId: string;
}

/**
 * A collection of values returned by getNetworkContainer.
 */
export interface GetNetworkContainerResult {
    readonly atlasCidrBlock: string;
    readonly azureSubscriptionId: string;
    readonly containerId: string;
    readonly gcpProjectId: string;
    readonly id: string;
    readonly networkName: string;
    readonly projectId: string;
    readonly providerName: string;
    readonly provisioned: boolean;
    readonly region: string;
    readonly regionName: string;
    readonly regions: string[];
    readonly vnetName: string;
    readonly vpcId: string;
}
export function getNetworkContainerOutput(args: GetNetworkContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkContainerResult> {
    return pulumi.output(args).apply((a: any) => getNetworkContainer(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkContainer.
 */
export interface GetNetworkContainerOutputArgs {
    containerId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
