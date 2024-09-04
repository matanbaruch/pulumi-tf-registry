// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOtsInstances(args?: GetOtsInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetOtsInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getOtsInstances:getOtsInstances", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOtsInstances.
 */
export interface GetOtsInstancesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getOtsInstances.
 */
export interface GetOtsInstancesResult {
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetOtsInstancesInstance[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly tags?: {[key: string]: string};
}
export function getOtsInstancesOutput(args?: GetOtsInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOtsInstancesResult> {
    return pulumi.output(args).apply((a: any) => getOtsInstances(a, opts))
}

/**
 * A collection of arguments for invoking getOtsInstances.
 */
export interface GetOtsInstancesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
