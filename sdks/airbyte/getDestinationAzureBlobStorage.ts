// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationAzureBlobStorage(args: GetDestinationAzureBlobStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationAzureBlobStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationAzureBlobStorage:getDestinationAzureBlobStorage", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageResult {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export function getDestinationAzureBlobStorageOutput(args: GetDestinationAzureBlobStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationAzureBlobStorageResult> {
    return pulumi.output(args).apply((a: any) => getDestinationAzureBlobStorage(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationAzureBlobStorage.
 */
export interface GetDestinationAzureBlobStorageOutputArgs {
    destinationId: pulumi.Input<string>;
}
