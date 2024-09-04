// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEntryCache(args: GetEntryCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetEntryCacheResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getEntryCache:getEntryCache", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEntryCache.
 */
export interface GetEntryCacheArgs {
    name: string;
}

/**
 * A collection of values returned by getEntryCache.
 */
export interface GetEntryCacheResult {
    readonly cacheLevel: number;
    readonly cacheUnindexedSearchResults: boolean;
    readonly description: string;
    readonly enabled: boolean;
    readonly excludeFilters: string[];
    readonly id: string;
    readonly includeFilters: string[];
    readonly maxEntries: number;
    readonly maxMemoryPercent: number;
    readonly minCacheEntryAttributes: string[];
    readonly minCacheEntryValueCount: number;
    readonly name: string;
    readonly onlyCacheFrequentlyAccessed: boolean;
    readonly type: string;
}
export function getEntryCacheOutput(args: GetEntryCacheOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEntryCacheResult> {
    return pulumi.output(args).apply((a: any) => getEntryCache(a, opts))
}

/**
 * A collection of arguments for invoking getEntryCache.
 */
export interface GetEntryCacheOutputArgs {
    name: pulumi.Input<string>;
}
