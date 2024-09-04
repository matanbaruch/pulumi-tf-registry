// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMseZnodes(args: GetMseZnodesArgs, opts?: pulumi.InvokeOptions): Promise<GetMseZnodesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getMseZnodes:getMseZnodes", {
        "acceptLanguage": args.acceptLanguage,
        "clusterId": args.clusterId,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "path": args.path,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMseZnodes.
 */
export interface GetMseZnodesArgs {
    acceptLanguage?: string;
    clusterId: string;
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    path: string;
}

/**
 * A collection of values returned by getMseZnodes.
 */
export interface GetMseZnodesResult {
    readonly acceptLanguage?: string;
    readonly clusterId: string;
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly path: string;
    readonly znodes: outputs.GetMseZnodesZnode[];
}
export function getMseZnodesOutput(args: GetMseZnodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMseZnodesResult> {
    return pulumi.output(args).apply((a: any) => getMseZnodes(a, opts))
}

/**
 * A collection of arguments for invoking getMseZnodes.
 */
export interface GetMseZnodesOutputArgs {
    acceptLanguage?: pulumi.Input<string>;
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    path: pulumi.Input<string>;
}
