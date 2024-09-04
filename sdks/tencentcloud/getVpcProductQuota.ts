// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcProductQuota(args: GetVpcProductQuotaArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcProductQuotaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVpcProductQuota:getVpcProductQuota", {
        "id": args.id,
        "product": args.product,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcProductQuota.
 */
export interface GetVpcProductQuotaArgs {
    id?: string;
    product: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getVpcProductQuota.
 */
export interface GetVpcProductQuotaResult {
    readonly id: string;
    readonly product: string;
    readonly productQuotaSets: outputs.GetVpcProductQuotaProductQuotaSet[];
    readonly resultOutputFile?: string;
}
export function getVpcProductQuotaOutput(args: GetVpcProductQuotaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcProductQuotaResult> {
    return pulumi.output(args).apply((a: any) => getVpcProductQuota(a, opts))
}

/**
 * A collection of arguments for invoking getVpcProductQuota.
 */
export interface GetVpcProductQuotaOutputArgs {
    id?: pulumi.Input<string>;
    product: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
