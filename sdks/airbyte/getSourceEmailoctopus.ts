// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceEmailoctopus(args: GetSourceEmailoctopusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceEmailoctopusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceEmailoctopus:getSourceEmailoctopus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusResult {
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
export function getSourceEmailoctopusOutput(args: GetSourceEmailoctopusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceEmailoctopusResult> {
    return pulumi.output(args).apply((a: any) => getSourceEmailoctopus(a, opts))
}

/**
 * A collection of arguments for invoking getSourceEmailoctopus.
 */
export interface GetSourceEmailoctopusOutputArgs {
    sourceId: pulumi.Input<string>;
}
