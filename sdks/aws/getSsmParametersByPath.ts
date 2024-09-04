// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsmParametersByPath(args: GetSsmParametersByPathArgs, opts?: pulumi.InvokeOptions): Promise<GetSsmParametersByPathResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSsmParametersByPath:getSsmParametersByPath", {
        "id": args.id,
        "path": args.path,
        "recursive": args.recursive,
        "withDecryption": args.withDecryption,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSsmParametersByPath.
 */
export interface GetSsmParametersByPathArgs {
    id?: string;
    path: string;
    recursive?: boolean;
    withDecryption?: boolean;
}

/**
 * A collection of values returned by getSsmParametersByPath.
 */
export interface GetSsmParametersByPathResult {
    readonly arns: string[];
    readonly id: string;
    readonly names: string[];
    readonly path: string;
    readonly recursive?: boolean;
    readonly types: string[];
    readonly values: string[];
    readonly withDecryption?: boolean;
}
export function getSsmParametersByPathOutput(args: GetSsmParametersByPathOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSsmParametersByPathResult> {
    return pulumi.output(args).apply((a: any) => getSsmParametersByPath(a, opts))
}

/**
 * A collection of arguments for invoking getSsmParametersByPath.
 */
export interface GetSsmParametersByPathOutputArgs {
    id?: pulumi.Input<string>;
    path: pulumi.Input<string>;
    recursive?: pulumi.Input<boolean>;
    withDecryption?: pulumi.Input<boolean>;
}
