// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceClickhouse(args: GetSourceClickhouseArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceClickhouseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceClickhouse:getSourceClickhouse", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceClickhouse.
 */
export interface GetSourceClickhouseArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceClickhouse.
 */
export interface GetSourceClickhouseResult {
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
export function getSourceClickhouseOutput(args: GetSourceClickhouseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceClickhouseResult> {
    return pulumi.output(args).apply((a: any) => getSourceClickhouse(a, opts))
}

/**
 * A collection of arguments for invoking getSourceClickhouse.
 */
export interface GetSourceClickhouseOutputArgs {
    sourceId: pulumi.Input<string>;
}
