// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNics(args?: GetNicsArgs, opts?: pulumi.InvokeOptions): Promise<GetNicsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getNics:getNics", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNics.
 */
export interface GetNicsArgs {
    filters?: inputs.GetNicsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getNics.
 */
export interface GetNicsResult {
    readonly filters?: outputs.GetNicsFilter[];
    readonly id: string;
    readonly nics: outputs.GetNicsNic[];
    readonly requestId: string;
}
export function getNicsOutput(args?: GetNicsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNicsResult> {
    return pulumi.output(args).apply((a: any) => getNics(a, opts))
}

/**
 * A collection of arguments for invoking getNics.
 */
export interface GetNicsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetNicsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
