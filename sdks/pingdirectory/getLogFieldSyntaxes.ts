// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLogFieldSyntaxes(args?: GetLogFieldSyntaxesArgs, opts?: pulumi.InvokeOptions): Promise<GetLogFieldSyntaxesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getLogFieldSyntaxes:getLogFieldSyntaxes", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLogFieldSyntaxes.
 */
export interface GetLogFieldSyntaxesArgs {
    filter?: string;
}

/**
 * A collection of values returned by getLogFieldSyntaxes.
 */
export interface GetLogFieldSyntaxesResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetLogFieldSyntaxesObject[];
}
export function getLogFieldSyntaxesOutput(args?: GetLogFieldSyntaxesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogFieldSyntaxesResult> {
    return pulumi.output(args).apply((a: any) => getLogFieldSyntaxes(a, opts))
}

/**
 * A collection of arguments for invoking getLogFieldSyntaxes.
 */
export interface GetLogFieldSyntaxesOutputArgs {
    filter?: pulumi.Input<string>;
}
