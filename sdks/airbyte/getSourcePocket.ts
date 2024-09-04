// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourcePocket(args: GetSourcePocketArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePocketResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePocket:getSourcePocket", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePocket.
 */
export interface GetSourcePocketArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePocket.
 */
export interface GetSourcePocketResult {
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
export function getSourcePocketOutput(args: GetSourcePocketOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourcePocketResult> {
    return pulumi.output(args).apply((a: any) => getSourcePocket(a, opts))
}

/**
 * A collection of arguments for invoking getSourcePocket.
 */
export interface GetSourcePocketOutputArgs {
    sourceId: pulumi.Input<string>;
}
