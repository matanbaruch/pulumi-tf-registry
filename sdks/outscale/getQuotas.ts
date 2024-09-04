// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getQuotas(args?: GetQuotasArgs, opts?: pulumi.InvokeOptions): Promise<GetQuotasResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getQuotas:getQuotas", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQuotas.
 */
export interface GetQuotasArgs {
    filters?: inputs.GetQuotasFilter[];
    id?: string;
}

/**
 * A collection of values returned by getQuotas.
 */
export interface GetQuotasResult {
    readonly filters?: outputs.GetQuotasFilter[];
    readonly id: string;
    readonly quotas: outputs.GetQuotasQuota[];
    readonly requestId: string;
}
export function getQuotasOutput(args?: GetQuotasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQuotasResult> {
    return pulumi.output(args).apply((a: any) => getQuotas(a, opts))
}

/**
 * A collection of arguments for invoking getQuotas.
 */
export interface GetQuotasOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetQuotasFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
