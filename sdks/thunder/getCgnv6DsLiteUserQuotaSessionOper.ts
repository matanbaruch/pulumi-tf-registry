// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6DsLiteUserQuotaSessionOper(args?: GetCgnv6DsLiteUserQuotaSessionOperArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6DsLiteUserQuotaSessionOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6DsLiteUserQuotaSessionOper:getCgnv6DsLiteUserQuotaSessionOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6DsLiteUserQuotaSessionOper.
 */
export interface GetCgnv6DsLiteUserQuotaSessionOperArgs {
    id?: string;
    oper?: inputs.GetCgnv6DsLiteUserQuotaSessionOperOper;
}

/**
 * A collection of values returned by getCgnv6DsLiteUserQuotaSessionOper.
 */
export interface GetCgnv6DsLiteUserQuotaSessionOperResult {
    readonly id: string;
    readonly oper?: outputs.GetCgnv6DsLiteUserQuotaSessionOperOper;
}
export function getCgnv6DsLiteUserQuotaSessionOperOutput(args?: GetCgnv6DsLiteUserQuotaSessionOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6DsLiteUserQuotaSessionOperResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6DsLiteUserQuotaSessionOper(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6DsLiteUserQuotaSessionOper.
 */
export interface GetCgnv6DsLiteUserQuotaSessionOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetCgnv6DsLiteUserQuotaSessionOperOperArgs>;
}
