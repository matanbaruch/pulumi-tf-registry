// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getObjectstorageNamespaceMetadata(args: GetObjectstorageNamespaceMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectstorageNamespaceMetadataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getObjectstorageNamespaceMetadata:getObjectstorageNamespaceMetadata", {
        "id": args.id,
        "namespace": args.namespace,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getObjectstorageNamespaceMetadata.
 */
export interface GetObjectstorageNamespaceMetadataArgs {
    id?: string;
    namespace: string;
}

/**
 * A collection of values returned by getObjectstorageNamespaceMetadata.
 */
export interface GetObjectstorageNamespaceMetadataResult {
    readonly defaultS3compartmentId: string;
    readonly defaultSwiftCompartmentId: string;
    readonly id: string;
    readonly namespace: string;
}
export function getObjectstorageNamespaceMetadataOutput(args: GetObjectstorageNamespaceMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObjectstorageNamespaceMetadataResult> {
    return pulumi.output(args).apply((a: any) => getObjectstorageNamespaceMetadata(a, opts))
}

/**
 * A collection of arguments for invoking getObjectstorageNamespaceMetadata.
 */
export interface GetObjectstorageNamespaceMetadataOutputArgs {
    id?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
}
