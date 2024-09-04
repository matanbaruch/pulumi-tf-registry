// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAzureVpcPeeringConnection(args: GetAzureVpcPeeringConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureVpcPeeringConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aiven:index/getAzureVpcPeeringConnection:getAzureVpcPeeringConnection", {
        "azureSubscriptionId": args.azureSubscriptionId,
        "id": args.id,
        "peerAzureAppId": args.peerAzureAppId,
        "peerAzureTenantId": args.peerAzureTenantId,
        "peerResourceGroup": args.peerResourceGroup,
        "vnetName": args.vnetName,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAzureVpcPeeringConnection.
 */
export interface GetAzureVpcPeeringConnectionArgs {
    azureSubscriptionId: string;
    id?: string;
    peerAzureAppId: string;
    peerAzureTenantId: string;
    peerResourceGroup: string;
    vnetName: string;
    vpcId: string;
}

/**
 * A collection of values returned by getAzureVpcPeeringConnection.
 */
export interface GetAzureVpcPeeringConnectionResult {
    readonly azureSubscriptionId: string;
    readonly id: string;
    readonly peerAzureAppId: string;
    readonly peerAzureTenantId: string;
    readonly peerResourceGroup: string;
    readonly peeringConnectionId: string;
    readonly state: string;
    readonly stateInfo: {[key: string]: string};
    readonly vnetName: string;
    readonly vpcId: string;
}
export function getAzureVpcPeeringConnectionOutput(args: GetAzureVpcPeeringConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureVpcPeeringConnectionResult> {
    return pulumi.output(args).apply((a: any) => getAzureVpcPeeringConnection(a, opts))
}

/**
 * A collection of arguments for invoking getAzureVpcPeeringConnection.
 */
export interface GetAzureVpcPeeringConnectionOutputArgs {
    azureSubscriptionId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    peerAzureAppId: pulumi.Input<string>;
    peerAzureTenantId: pulumi.Input<string>;
    peerResourceGroup: pulumi.Input<string>;
    vnetName: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
