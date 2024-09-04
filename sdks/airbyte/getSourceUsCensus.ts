// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceUsCensus(args: GetSourceUsCensusArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceUsCensusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceUsCensus:getSourceUsCensus", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceUsCensus.
 */
export interface GetSourceUsCensusArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceUsCensus.
 */
export interface GetSourceUsCensusResult {
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
export function getSourceUsCensusOutput(args: GetSourceUsCensusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceUsCensusResult> {
    return pulumi.output(args).apply((a: any) => getSourceUsCensus(a, opts))
}

/**
 * A collection of arguments for invoking getSourceUsCensus.
 */
export interface GetSourceUsCensusOutputArgs {
    sourceId: pulumi.Input<string>;
}
