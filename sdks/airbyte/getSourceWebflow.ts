// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceWebflow(args: GetSourceWebflowArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWebflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWebflow:getSourceWebflow", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWebflow.
 */
export interface GetSourceWebflowArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceWebflow.
 */
export interface GetSourceWebflowResult {
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
export function getSourceWebflowOutput(args: GetSourceWebflowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceWebflowResult> {
    return pulumi.output(args).apply((a: any) => getSourceWebflow(a, opts))
}

/**
 * A collection of arguments for invoking getSourceWebflow.
 */
export interface GetSourceWebflowOutputArgs {
    sourceId: pulumi.Input<string>;
}
