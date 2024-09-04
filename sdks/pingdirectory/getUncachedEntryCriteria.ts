// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUncachedEntryCriteria(args: GetUncachedEntryCriteriaArgs, opts?: pulumi.InvokeOptions): Promise<GetUncachedEntryCriteriaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getUncachedEntryCriteria:getUncachedEntryCriteria", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUncachedEntryCriteria.
 */
export interface GetUncachedEntryCriteriaArgs {
    name: string;
}

/**
 * A collection of values returned by getUncachedEntryCriteria.
 */
export interface GetUncachedEntryCriteriaResult {
    readonly accessTimeThreshold: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly extensionArguments: string[];
    readonly extensionClass: string;
    readonly filter: string;
    readonly filterIdentifiesUncachedEntries: boolean;
    readonly id: string;
    readonly name: string;
    readonly scriptArguments: string[];
    readonly scriptClass: string;
    readonly type: string;
}
export function getUncachedEntryCriteriaOutput(args: GetUncachedEntryCriteriaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUncachedEntryCriteriaResult> {
    return pulumi.output(args).apply((a: any) => getUncachedEntryCriteria(a, opts))
}

/**
 * A collection of arguments for invoking getUncachedEntryCriteria.
 */
export interface GetUncachedEntryCriteriaOutputArgs {
    name: pulumi.Input<string>;
}
