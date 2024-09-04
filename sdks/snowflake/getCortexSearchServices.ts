// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCortexSearchServices(args?: GetCortexSearchServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetCortexSearchServicesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getCortexSearchServices:getCortexSearchServices", {
        "id": args.id,
        "in": args.in,
        "like": args.like,
        "limit": args.limit,
        "startsWith": args.startsWith,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCortexSearchServices.
 */
export interface GetCortexSearchServicesArgs {
    id?: string;
    in?: inputs.GetCortexSearchServicesIn;
    like?: string;
    limit?: inputs.GetCortexSearchServicesLimit;
    startsWith?: string;
}

/**
 * A collection of values returned by getCortexSearchServices.
 */
export interface GetCortexSearchServicesResult {
    readonly cortexSearchServices: outputs.GetCortexSearchServicesCortexSearchService[];
    readonly id: string;
    readonly in?: outputs.GetCortexSearchServicesIn;
    readonly like?: string;
    readonly limit?: outputs.GetCortexSearchServicesLimit;
    readonly startsWith?: string;
}
export function getCortexSearchServicesOutput(args?: GetCortexSearchServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCortexSearchServicesResult> {
    return pulumi.output(args).apply((a: any) => getCortexSearchServices(a, opts))
}

/**
 * A collection of arguments for invoking getCortexSearchServices.
 */
export interface GetCortexSearchServicesOutputArgs {
    id?: pulumi.Input<string>;
    in?: pulumi.Input<inputs.GetCortexSearchServicesInArgs>;
    like?: pulumi.Input<string>;
    limit?: pulumi.Input<inputs.GetCortexSearchServicesLimitArgs>;
    startsWith?: pulumi.Input<string>;
}
