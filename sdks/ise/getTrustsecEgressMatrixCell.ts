// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTrustsecEgressMatrixCell(args: GetTrustsecEgressMatrixCellArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustsecEgressMatrixCellResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ise:index/getTrustsecEgressMatrixCell:getTrustsecEgressMatrixCell", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTrustsecEgressMatrixCell.
 */
export interface GetTrustsecEgressMatrixCellArgs {
    id: string;
}

/**
 * A collection of values returned by getTrustsecEgressMatrixCell.
 */
export interface GetTrustsecEgressMatrixCellResult {
    readonly defaultRule: string;
    readonly description: string;
    readonly destinationSgtId: string;
    readonly id: string;
    readonly matrixCellStatus: string;
    readonly sgacls: string[];
    readonly sourceSgtId: string;
}
export function getTrustsecEgressMatrixCellOutput(args: GetTrustsecEgressMatrixCellOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrustsecEgressMatrixCellResult> {
    return pulumi.output(args).apply((a: any) => getTrustsecEgressMatrixCell(a, opts))
}

/**
 * A collection of arguments for invoking getTrustsecEgressMatrixCell.
 */
export interface GetTrustsecEgressMatrixCellOutputArgs {
    id: pulumi.Input<string>;
}
