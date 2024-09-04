// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAwpAzureOnboardingData(args: GetAwpAzureOnboardingDataArgs, opts?: pulumi.InvokeOptions): Promise<GetAwpAzureOnboardingDataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dome9:index/getAwpAzureOnboardingData:getAwpAzureOnboardingData", {
        "centralizedCloudAccountId": args.centralizedCloudAccountId,
        "cloudAccountId": args.cloudAccountId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAwpAzureOnboardingData.
 */
export interface GetAwpAzureOnboardingDataArgs {
    centralizedCloudAccountId?: string;
    cloudAccountId: string;
    id?: string;
}

/**
 * A collection of values returned by getAwpAzureOnboardingData.
 */
export interface GetAwpAzureOnboardingDataResult {
    readonly appClientId: string;
    readonly awpCentralizedCloudAccountId: string;
    readonly awpCloudAccountId: string;
    readonly centralizedCloudAccountId?: string;
    readonly cloudAccountId: string;
    readonly id: string;
    readonly region: string;
}
export function getAwpAzureOnboardingDataOutput(args: GetAwpAzureOnboardingDataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAwpAzureOnboardingDataResult> {
    return pulumi.output(args).apply((a: any) => getAwpAzureOnboardingData(a, opts))
}

/**
 * A collection of arguments for invoking getAwpAzureOnboardingData.
 */
export interface GetAwpAzureOnboardingDataOutputArgs {
    centralizedCloudAccountId?: pulumi.Input<string>;
    cloudAccountId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
