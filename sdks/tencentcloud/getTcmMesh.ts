// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTcmMesh(args?: GetTcmMeshArgs, opts?: pulumi.InvokeOptions): Promise<GetTcmMeshResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTcmMesh:getTcmMesh", {
        "id": args.id,
        "meshClusters": args.meshClusters,
        "meshIds": args.meshIds,
        "meshNames": args.meshNames,
        "resultOutputFile": args.resultOutputFile,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTcmMesh.
 */
export interface GetTcmMeshArgs {
    id?: string;
    meshClusters?: string[];
    meshIds?: string[];
    meshNames?: string[];
    resultOutputFile?: string;
    tags?: string[];
}

/**
 * A collection of values returned by getTcmMesh.
 */
export interface GetTcmMeshResult {
    readonly id: string;
    readonly meshClusters?: string[];
    readonly meshIds?: string[];
    readonly meshLists: outputs.GetTcmMeshMeshList[];
    readonly meshNames?: string[];
    readonly resultOutputFile?: string;
    readonly tags?: string[];
}
export function getTcmMeshOutput(args?: GetTcmMeshOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTcmMeshResult> {
    return pulumi.output(args).apply((a: any) => getTcmMesh(a, opts))
}

/**
 * A collection of arguments for invoking getTcmMesh.
 */
export interface GetTcmMeshOutputArgs {
    id?: pulumi.Input<string>;
    meshClusters?: pulumi.Input<pulumi.Input<string>[]>;
    meshIds?: pulumi.Input<pulumi.Input<string>[]>;
    meshNames?: pulumi.Input<pulumi.Input<string>[]>;
    resultOutputFile?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
