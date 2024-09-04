// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAttributeSyntax(args: GetAttributeSyntaxArgs, opts?: pulumi.InvokeOptions): Promise<GetAttributeSyntaxResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getAttributeSyntax:getAttributeSyntax", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAttributeSyntax.
 */
export interface GetAttributeSyntaxArgs {
    name: string;
}

/**
 * A collection of values returned by getAttributeSyntax.
 */
export interface GetAttributeSyntaxResult {
    readonly allowZeroLengthValues: boolean;
    readonly enableCompaction: boolean;
    readonly enabled: boolean;
    readonly excludeAttributeFromCompactions: string[];
    readonly id: string;
    readonly includeAttributeInCompactions: string[];
    readonly name: string;
    readonly requireBinaryTransfer: boolean;
    readonly strictFormat: boolean;
    readonly stripSyntaxMinUpperBound: boolean;
    readonly type: string;
}
export function getAttributeSyntaxOutput(args: GetAttributeSyntaxOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAttributeSyntaxResult> {
    return pulumi.output(args).apply((a: any) => getAttributeSyntax(a, opts))
}

/**
 * A collection of arguments for invoking getAttributeSyntax.
 */
export interface GetAttributeSyntaxOutputArgs {
    name: pulumi.Input<string>;
}
