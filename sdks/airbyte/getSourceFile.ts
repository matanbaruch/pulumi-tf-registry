// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceFile(args: GetSourceFileArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceFileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceFile:getSourceFile", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceFile.
 */
export interface GetSourceFileArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceFile.
 */
export interface GetSourceFileResult {
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
export function getSourceFileOutput(args: GetSourceFileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceFileResult> {
    return pulumi.output(args).apply((a: any) => getSourceFile(a, opts))
}

/**
 * A collection of arguments for invoking getSourceFile.
 */
export interface GetSourceFileOutputArgs {
    sourceId: pulumi.Input<string>;
}
