// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getObjectstorageNamespace(args?: GetObjectstorageNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectstorageNamespaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getObjectstorageNamespace:getObjectstorageNamespace", {
        "compartmentId": args.compartmentId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getObjectstorageNamespace.
 */
export interface GetObjectstorageNamespaceArgs {
    compartmentId?: string;
    id?: string;
}

/**
 * A collection of values returned by getObjectstorageNamespace.
 */
export interface GetObjectstorageNamespaceResult {
    readonly compartmentId?: string;
    readonly id: string;
    readonly namespace: string;
}
export function getObjectstorageNamespaceOutput(args?: GetObjectstorageNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObjectstorageNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getObjectstorageNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getObjectstorageNamespace.
 */
export interface GetObjectstorageNamespaceOutputArgs {
    compartmentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
