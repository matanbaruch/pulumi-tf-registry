// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServiceMeshMeshes(args: GetServiceMeshMeshesArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceMeshMeshesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getServiceMeshMeshes:getServiceMeshMeshes", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceMeshMeshes.
 */
export interface GetServiceMeshMeshesArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetServiceMeshMeshesFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getServiceMeshMeshes.
 */
export interface GetServiceMeshMeshesResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetServiceMeshMeshesFilter[];
    readonly id?: string;
    readonly meshCollections: outputs.GetServiceMeshMeshesMeshCollection[];
    readonly state?: string;
}
export function getServiceMeshMeshesOutput(args: GetServiceMeshMeshesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceMeshMeshesResult> {
    return pulumi.output(args).apply((a: any) => getServiceMeshMeshes(a, opts))
}

/**
 * A collection of arguments for invoking getServiceMeshMeshes.
 */
export interface GetServiceMeshMeshesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetServiceMeshMeshesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
