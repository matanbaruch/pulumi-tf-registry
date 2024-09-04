// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWebCategoryInterceptedUrlsOper(args?: GetWebCategoryInterceptedUrlsOperArgs, opts?: pulumi.InvokeOptions): Promise<GetWebCategoryInterceptedUrlsOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getWebCategoryInterceptedUrlsOper:getWebCategoryInterceptedUrlsOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebCategoryInterceptedUrlsOper.
 */
export interface GetWebCategoryInterceptedUrlsOperArgs {
    id?: string;
    oper?: inputs.GetWebCategoryInterceptedUrlsOperOper;
}

/**
 * A collection of values returned by getWebCategoryInterceptedUrlsOper.
 */
export interface GetWebCategoryInterceptedUrlsOperResult {
    readonly id: string;
    readonly oper?: outputs.GetWebCategoryInterceptedUrlsOperOper;
}
export function getWebCategoryInterceptedUrlsOperOutput(args?: GetWebCategoryInterceptedUrlsOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebCategoryInterceptedUrlsOperResult> {
    return pulumi.output(args).apply((a: any) => getWebCategoryInterceptedUrlsOper(a, opts))
}

/**
 * A collection of arguments for invoking getWebCategoryInterceptedUrlsOper.
 */
export interface GetWebCategoryInterceptedUrlsOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetWebCategoryInterceptedUrlsOperOperArgs>;
}
