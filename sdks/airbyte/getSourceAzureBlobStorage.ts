// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceAzureBlobStorage(args: GetSourceAzureBlobStorageArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAzureBlobStorageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAzureBlobStorage:getSourceAzureBlobStorage", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceAzureBlobStorageOutput(args: GetSourceAzureBlobStorageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceAzureBlobStorageResult> {
    return pulumi.output(args).apply((a: any) => getSourceAzureBlobStorage(a, opts))
}

/**
 * A collection of arguments for invoking getSourceAzureBlobStorage.
 */
export interface GetSourceAzureBlobStorageOutputArgs {
    sourceId: pulumi.Input<string>;
}
