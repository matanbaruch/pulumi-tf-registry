// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getArtifactsScan(args: GetArtifactsScanArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactsScanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("xray:index/getArtifactsScan:getArtifactsScan", {
        "createdEnd": args.createdEnd,
        "createdStart": args.createdStart,
        "direction": args.direction,
        "numOfRows": args.numOfRows,
        "offset": args.offset,
        "orderBy": args.orderBy,
        "repo": args.repo,
        "repoPath": args.repoPath,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getArtifactsScan.
 */
export interface GetArtifactsScanArgs {
    createdEnd?: string;
    createdStart?: string;
    direction?: string;
    numOfRows?: number;
    offset?: number;
    orderBy?: string;
    repo: string;
    repoPath?: string;
}

/**
 * A collection of values returned by getArtifactsScan.
 */
export interface GetArtifactsScanResult {
    readonly createdEnd?: string;
    readonly createdStart?: string;
    readonly direction?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly numOfRows?: number;
    readonly offset: number;
    readonly orderBy?: string;
    readonly repo: string;
    readonly repoPath?: string;
    readonly results: outputs.GetArtifactsScanResult[];
}
export function getArtifactsScanOutput(args: GetArtifactsScanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArtifactsScanResult> {
    return pulumi.output(args).apply((a: any) => getArtifactsScan(a, opts))
}

/**
 * A collection of arguments for invoking getArtifactsScan.
 */
export interface GetArtifactsScanOutputArgs {
    createdEnd?: pulumi.Input<string>;
    createdStart?: pulumi.Input<string>;
    direction?: pulumi.Input<string>;
    numOfRows?: pulumi.Input<number>;
    offset?: pulumi.Input<number>;
    orderBy?: pulumi.Input<string>;
    repo: pulumi.Input<string>;
    repoPath?: pulumi.Input<string>;
}
