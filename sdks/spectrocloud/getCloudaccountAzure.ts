// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudaccountAzure(args?: GetCloudaccountAzureArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudaccountAzureResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("spectrocloud:index/getCloudaccountAzure:getCloudaccountAzure", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudaccountAzure.
 */
export interface GetCloudaccountAzureArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getCloudaccountAzure.
 */
export interface GetCloudaccountAzureResult {
    readonly azureClientId: string;
    readonly azureTenantId: string;
    readonly disablePropertiesRequest: boolean;
    readonly id: string;
    readonly name: string;
    readonly tenantName: string;
}
export function getCloudaccountAzureOutput(args?: GetCloudaccountAzureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudaccountAzureResult> {
    return pulumi.output(args).apply((a: any) => getCloudaccountAzure(a, opts))
}

/**
 * A collection of arguments for invoking getCloudaccountAzure.
 */
export interface GetCloudaccountAzureOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
