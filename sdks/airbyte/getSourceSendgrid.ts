// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceSendgrid(args: GetSourceSendgridArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceSendgridResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceSendgrid:getSourceSendgrid", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceSendgrid.
 */
export interface GetSourceSendgridArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceSendgrid.
 */
export interface GetSourceSendgridResult {
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
export function getSourceSendgridOutput(args: GetSourceSendgridOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceSendgridResult> {
    return pulumi.output(args).apply((a: any) => getSourceSendgrid(a, opts))
}

/**
 * A collection of arguments for invoking getSourceSendgrid.
 */
export interface GetSourceSendgridOutputArgs {
    sourceId: pulumi.Input<string>;
}
