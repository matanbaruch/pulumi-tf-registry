// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceQualaroo(args: GetSourceQualarooArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceQualarooResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceQualaroo:getSourceQualaroo", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceQualaroo.
 */
export interface GetSourceQualarooArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceQualaroo.
 */
export interface GetSourceQualarooResult {
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
export function getSourceQualarooOutput(args: GetSourceQualarooOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceQualarooResult> {
    return pulumi.output(args).apply((a: any) => getSourceQualaroo(a, opts))
}

/**
 * A collection of arguments for invoking getSourceQualaroo.
 */
export interface GetSourceQualarooOutputArgs {
    sourceId: pulumi.Input<string>;
}
