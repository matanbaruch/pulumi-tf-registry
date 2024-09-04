// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDnsForwardNsgs(args?: GetDnsForwardNsgsArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsForwardNsgsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("b1ddi:index/getDnsForwardNsgs:getDnsForwardNsgs", {
        "filters": args.filters,
        "id": args.id,
        "tfilters": args.tfilters,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsForwardNsgs.
 */
export interface GetDnsForwardNsgsArgs {
    filters?: {[key: string]: string};
    id?: string;
    tfilters?: {[key: string]: string};
}

/**
 * A collection of values returned by getDnsForwardNsgs.
 */
export interface GetDnsForwardNsgsResult {
    readonly filters?: {[key: string]: string};
    readonly id: string;
    readonly results: outputs.GetDnsForwardNsgsResult[];
    readonly tfilters?: {[key: string]: string};
}
export function getDnsForwardNsgsOutput(args?: GetDnsForwardNsgsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsForwardNsgsResult> {
    return pulumi.output(args).apply((a: any) => getDnsForwardNsgs(a, opts))
}

/**
 * A collection of arguments for invoking getDnsForwardNsgs.
 */
export interface GetDnsForwardNsgsOutputArgs {
    filters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
    tfilters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
