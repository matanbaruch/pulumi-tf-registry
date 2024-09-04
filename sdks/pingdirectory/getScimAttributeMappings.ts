// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getScimAttributeMappings(args: GetScimAttributeMappingsArgs, opts?: pulumi.InvokeOptions): Promise<GetScimAttributeMappingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getScimAttributeMappings:getScimAttributeMappings", {
        "filter": args.filter,
        "scimResourceTypeName": args.scimResourceTypeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getScimAttributeMappings.
 */
export interface GetScimAttributeMappingsArgs {
    filter?: string;
    scimResourceTypeName: string;
}

/**
 * A collection of values returned by getScimAttributeMappings.
 */
export interface GetScimAttributeMappingsResult {
    readonly filter?: string;
    readonly id: string;
    readonly ids: string[];
    readonly scimResourceTypeName: string;
}
export function getScimAttributeMappingsOutput(args: GetScimAttributeMappingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScimAttributeMappingsResult> {
    return pulumi.output(args).apply((a: any) => getScimAttributeMappings(a, opts))
}

/**
 * A collection of arguments for invoking getScimAttributeMappings.
 */
export interface GetScimAttributeMappingsOutputArgs {
    filter?: pulumi.Input<string>;
    scimResourceTypeName: pulumi.Input<string>;
}
