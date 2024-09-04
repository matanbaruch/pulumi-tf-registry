// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceWhiskyHunter(args: GetSourceWhiskyHunterArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceWhiskyHunterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceWhiskyHunter:getSourceWhiskyHunter", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterResult {
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
export function getSourceWhiskyHunterOutput(args: GetSourceWhiskyHunterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceWhiskyHunterResult> {
    return pulumi.output(args).apply((a: any) => getSourceWhiskyHunter(a, opts))
}

/**
 * A collection of arguments for invoking getSourceWhiskyHunter.
 */
export interface GetSourceWhiskyHunterOutputArgs {
    sourceId: pulumi.Input<string>;
}
