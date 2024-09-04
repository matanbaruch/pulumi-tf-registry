// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSourcebuildProjectOsRuntimeVersions(args: GetSourcebuildProjectOsRuntimeVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcebuildProjectOsRuntimeVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ncloud:index/getSourcebuildProjectOsRuntimeVersions:getSourcebuildProjectOsRuntimeVersions", {
        "filters": args.filters,
        "id": args.id,
        "osId": args.osId,
        "runtimeId": args.runtimeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcebuildProjectOsRuntimeVersions.
 */
export interface GetSourcebuildProjectOsRuntimeVersionsArgs {
    filters?: inputs.GetSourcebuildProjectOsRuntimeVersionsFilter[];
    id?: string;
    osId: number;
    runtimeId: number;
}

/**
 * A collection of values returned by getSourcebuildProjectOsRuntimeVersions.
 */
export interface GetSourcebuildProjectOsRuntimeVersionsResult {
    readonly filters?: outputs.GetSourcebuildProjectOsRuntimeVersionsFilter[];
    readonly id: string;
    readonly osId: number;
    readonly runtimeId: number;
    readonly runtimeVersions: outputs.GetSourcebuildProjectOsRuntimeVersionsRuntimeVersion[];
}
export function getSourcebuildProjectOsRuntimeVersionsOutput(args: GetSourcebuildProjectOsRuntimeVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourcebuildProjectOsRuntimeVersionsResult> {
    return pulumi.output(args).apply((a: any) => getSourcebuildProjectOsRuntimeVersions(a, opts))
}

/**
 * A collection of arguments for invoking getSourcebuildProjectOsRuntimeVersions.
 */
export interface GetSourcebuildProjectOsRuntimeVersionsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSourcebuildProjectOsRuntimeVersionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    osId: pulumi.Input<number>;
    runtimeId: pulumi.Input<number>;
}
