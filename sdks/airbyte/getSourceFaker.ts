// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceFaker(args: GetSourceFakerArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFakerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFaker:getSourceFaker", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFaker.
 */
export interface GetSourceFakerArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFaker.
 */
export interface GetSourceFakerResult {
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
export function getSourceFakerOutput(args: GetSourceFakerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceFakerResult> {
    return pulumi.output(args).apply((a: any) => getSourceFaker(a, opts))
}

/**
 * A collection of arguments for invoking getSourceFaker.
 */
export interface GetSourceFakerOutputArgs {
    sourceId: pulumi.Input<string>;
}
