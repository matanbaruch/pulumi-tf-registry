// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResources(args: GetResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetResourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kubernetes:index/getResources:getResources", {
        "apiVersion": args.apiVersion,
        "fieldSelector": args.fieldSelector,
        "kind": args.kind,
        "labelSelector": args.labelSelector,
        "limit": args.limit,
        "namespace": args.namespace,
        "objects": args.objects,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResources.
 */
export interface GetResourcesArgs {
    apiVersion: string;
    fieldSelector?: string;
    kind: string;
    labelSelector?: string;
    limit?: number;
    namespace?: string;
    objects?: any;
}

/**
 * A collection of values returned by getResources.
 */
export interface GetResourcesResult {
    readonly apiVersion: string;
    readonly fieldSelector?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly kind: string;
    readonly labelSelector?: string;
    readonly limit?: number;
    readonly namespace?: string;
    readonly objects: any;
}
export function getResourcesOutput(args: GetResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourcesResult> {
    return pulumi.output(args).apply((a: any) => getResources(a, opts))
}

/**
 * A collection of arguments for invoking getResources.
 */
export interface GetResourcesOutputArgs {
    apiVersion: pulumi.Input<string>;
    fieldSelector?: pulumi.Input<string>;
    kind: pulumi.Input<string>;
    labelSelector?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    namespace?: pulumi.Input<string>;
    objects?: any;
}
