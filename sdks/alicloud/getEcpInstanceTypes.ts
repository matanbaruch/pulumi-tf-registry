// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcpInstanceTypes(args?: GetEcpInstanceTypesArgs, opts?: pulumi.InvokeOptions): Promise<GetEcpInstanceTypesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcpInstanceTypes:getEcpInstanceTypes", {
        "id": args.id,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcpInstanceTypes.
 */
export interface GetEcpInstanceTypesArgs {
    id?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getEcpInstanceTypes.
 */
export interface GetEcpInstanceTypesResult {
    readonly id: string;
    readonly instanceTypes: outputs.GetEcpInstanceTypesInstanceType[];
    readonly outputFile?: string;
}
export function getEcpInstanceTypesOutput(args?: GetEcpInstanceTypesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcpInstanceTypesResult> {
    return pulumi.output(args).apply((a: any) => getEcpInstanceTypes(a, opts))
}

/**
 * A collection of arguments for invoking getEcpInstanceTypes.
 */
export interface GetEcpInstanceTypesOutputArgs {
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
