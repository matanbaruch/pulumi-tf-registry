// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCorrelatedLdapDataViews(args: GetCorrelatedLdapDataViewsArgs, opts?: pulumi.InvokeOptions): Promise<GetCorrelatedLdapDataViewsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getCorrelatedLdapDataViews:getCorrelatedLdapDataViews", {
        "filter": args.filter,
        "scimResourceTypeName": args.scimResourceTypeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCorrelatedLdapDataViews.
 */
export interface GetCorrelatedLdapDataViewsArgs {
    filter?: string;
    scimResourceTypeName: string;
}

/**
 * A collection of values returned by getCorrelatedLdapDataViews.
 */
export interface GetCorrelatedLdapDataViewsResult {
    readonly filter?: string;
    readonly id: string;
    readonly ids: string[];
    readonly scimResourceTypeName: string;
}
export function getCorrelatedLdapDataViewsOutput(args: GetCorrelatedLdapDataViewsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCorrelatedLdapDataViewsResult> {
    return pulumi.output(args).apply((a: any) => getCorrelatedLdapDataViews(a, opts))
}

/**
 * A collection of arguments for invoking getCorrelatedLdapDataViews.
 */
export interface GetCorrelatedLdapDataViewsOutputArgs {
    filter?: pulumi.Input<string>;
    scimResourceTypeName: pulumi.Input<string>;
}
