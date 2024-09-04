// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVmwarePrivateCloud(args: GetVmwarePrivateCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetVmwarePrivateCloudResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getVmwarePrivateCloud:getVmwarePrivateCloud", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVmwarePrivateCloud.
 */
export interface GetVmwarePrivateCloudArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetVmwarePrivateCloudTimeouts;
}

/**
 * A collection of values returned by getVmwarePrivateCloud.
 */
export interface GetVmwarePrivateCloudResult {
    readonly circuits: outputs.GetVmwarePrivateCloudCircuit[];
    readonly hcxCloudManagerEndpoint: string;
    readonly id: string;
    readonly internetConnectionEnabled: boolean;
    readonly location: string;
    readonly managementClusters: outputs.GetVmwarePrivateCloudManagementCluster[];
    readonly managementSubnetCidr: string;
    readonly name: string;
    readonly networkSubnetCidr: string;
    readonly nsxtCertificateThumbprint: string;
    readonly nsxtManagerEndpoint: string;
    readonly provisioningSubnetCidr: string;
    readonly resourceGroupName: string;
    readonly skuName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetVmwarePrivateCloudTimeouts;
    readonly vcenterCertificateThumbprint: string;
    readonly vcsaEndpoint: string;
    readonly vmotionSubnetCidr: string;
}
export function getVmwarePrivateCloudOutput(args: GetVmwarePrivateCloudOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVmwarePrivateCloudResult> {
    return pulumi.output(args).apply((a: any) => getVmwarePrivateCloud(a, opts))
}

/**
 * A collection of arguments for invoking getVmwarePrivateCloud.
 */
export interface GetVmwarePrivateCloudOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetVmwarePrivateCloudTimeoutsArgs>;
}
