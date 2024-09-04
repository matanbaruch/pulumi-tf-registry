// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSearchEntryCriteriaList(args?: GetSearchEntryCriteriaListArgs, opts?: pulumi.InvokeOptions): Promise<GetSearchEntryCriteriaListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getSearchEntryCriteriaList:getSearchEntryCriteriaList", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSearchEntryCriteriaList.
 */
export interface GetSearchEntryCriteriaListArgs {
    filter?: string;
}

/**
 * A collection of values returned by getSearchEntryCriteriaList.
 */
export interface GetSearchEntryCriteriaListResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetSearchEntryCriteriaListObject[];
}
export function getSearchEntryCriteriaListOutput(args?: GetSearchEntryCriteriaListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSearchEntryCriteriaListResult> {
    return pulumi.output(args).apply((a: any) => getSearchEntryCriteriaList(a, opts))
}

/**
 * A collection of arguments for invoking getSearchEntryCriteriaList.
 */
export interface GetSearchEntryCriteriaListOutputArgs {
    filter?: pulumi.Input<string>;
}
