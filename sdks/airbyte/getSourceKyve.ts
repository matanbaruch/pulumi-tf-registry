// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceKyve(args: GetSourceKyveArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceKyveResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceKyve:getSourceKyve", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceKyve.
 */
export interface GetSourceKyveArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceKyve.
 */
export interface GetSourceKyveResult {
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
export function getSourceKyveOutput(args: GetSourceKyveOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceKyveResult> {
    return pulumi.output(args).apply((a: any) => getSourceKyve(a, opts))
}

/**
 * A collection of arguments for invoking getSourceKyve.
 */
export interface GetSourceKyveOutputArgs {
    sourceId: pulumi.Input<string>;
}
