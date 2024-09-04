// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EntryCache extends pulumi.CustomResource {
    /**
     * Get an existing EntryCache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EntryCacheState, opts?: pulumi.CustomResourceOptions): EntryCache {
        return new EntryCache(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/entryCache:EntryCache';

    /**
     * Returns true if the given object is an instance of EntryCache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EntryCache {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EntryCache.__pulumiType;
    }

    /**
     * Specifies the cache level in the cache order if more than one instance of the cache is configured.
     */
    public readonly cacheLevel!: pulumi.Output<number>;
    /**
     * Indicates whether the entry cache should be updated with entries that have been returned to the client during the course
     * of processing an unindexed search.
     */
    public readonly cacheUnindexedSearchResults!: pulumi.Output<boolean>;
    /**
     * A description for this Entry Cache
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the Entry Cache is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of filters that define the entries that should be excluded from the cache.
     */
    public readonly excludeFilters!: pulumi.Output<string[]>;
    /**
     * The set of filters that define the entries that should be included in the cache.
     */
    public readonly includeFilters!: pulumi.Output<string[]>;
    /**
     * Specifies the maximum number of entries that will be allowed in the cache. Once the cache reaches this size, then adding
     * new entries will cause existing entries to be purged, starting with the oldest.
     */
    public readonly maxEntries!: pulumi.Output<number>;
    /**
     * Specifies the maximum amount of memory, as a percentage of the total maximum JVM heap size, that this cache should
     * occupy when full. If the amount of memory the cache is using is greater than this amount, then an attempt to put a new
     * entry in the cache will be ignored and will cause the oldest entry to be purged.
     */
    public readonly maxMemoryPercent!: pulumi.Output<number>;
    /**
     * Specifies the names of the attribute types for which the min-cache-entry-value-count property should apply. If no
     * attribute types are specified, then all user attributes will be examined.
     */
    public readonly minCacheEntryAttributes!: pulumi.Output<string[]>;
    /**
     * Specifies the minimum number of attribute values (optionally across a specified subset of attributes as defined in the
     * min-cache-entry-attributes property) for entries that should be held in the cache. Entries with fewer than this number
     * of attribute values will be excluded from the cache.
     */
    public readonly minCacheEntryValueCount!: pulumi.Output<number>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies that the cache should only store entries which are accessed much more frequently than the average entry. The
     * cache will observe attempts to place entries in the cache and compare an entry's accesses to the average entry's.
     */
    public readonly onlyCacheFrequentlyAccessed!: pulumi.Output<boolean>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.EntryCacheRequiredAction[]>;
    /**
     * The type of Entry Cache resource. Options are ['fifo']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a EntryCache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EntryCacheArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EntryCacheArgs | EntryCacheState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EntryCacheState | undefined;
            resourceInputs["cacheLevel"] = state ? state.cacheLevel : undefined;
            resourceInputs["cacheUnindexedSearchResults"] = state ? state.cacheUnindexedSearchResults : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["excludeFilters"] = state ? state.excludeFilters : undefined;
            resourceInputs["includeFilters"] = state ? state.includeFilters : undefined;
            resourceInputs["maxEntries"] = state ? state.maxEntries : undefined;
            resourceInputs["maxMemoryPercent"] = state ? state.maxMemoryPercent : undefined;
            resourceInputs["minCacheEntryAttributes"] = state ? state.minCacheEntryAttributes : undefined;
            resourceInputs["minCacheEntryValueCount"] = state ? state.minCacheEntryValueCount : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["onlyCacheFrequentlyAccessed"] = state ? state.onlyCacheFrequentlyAccessed : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as EntryCacheArgs | undefined;
            if ((!args || args.cacheLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheLevel'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            resourceInputs["cacheLevel"] = args ? args.cacheLevel : undefined;
            resourceInputs["cacheUnindexedSearchResults"] = args ? args.cacheUnindexedSearchResults : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["excludeFilters"] = args ? args.excludeFilters : undefined;
            resourceInputs["includeFilters"] = args ? args.includeFilters : undefined;
            resourceInputs["maxEntries"] = args ? args.maxEntries : undefined;
            resourceInputs["maxMemoryPercent"] = args ? args.maxMemoryPercent : undefined;
            resourceInputs["minCacheEntryAttributes"] = args ? args.minCacheEntryAttributes : undefined;
            resourceInputs["minCacheEntryValueCount"] = args ? args.minCacheEntryValueCount : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onlyCacheFrequentlyAccessed"] = args ? args.onlyCacheFrequentlyAccessed : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EntryCache.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EntryCache resources.
 */
export interface EntryCacheState {
    /**
     * Specifies the cache level in the cache order if more than one instance of the cache is configured.
     */
    cacheLevel?: pulumi.Input<number>;
    /**
     * Indicates whether the entry cache should be updated with entries that have been returned to the client during the course
     * of processing an unindexed search.
     */
    cacheUnindexedSearchResults?: pulumi.Input<boolean>;
    /**
     * A description for this Entry Cache
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Entry Cache is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of filters that define the entries that should be excluded from the cache.
     */
    excludeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of filters that define the entries that should be included in the cache.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum number of entries that will be allowed in the cache. Once the cache reaches this size, then adding
     * new entries will cause existing entries to be purged, starting with the oldest.
     */
    maxEntries?: pulumi.Input<number>;
    /**
     * Specifies the maximum amount of memory, as a percentage of the total maximum JVM heap size, that this cache should
     * occupy when full. If the amount of memory the cache is using is greater than this amount, then an attempt to put a new
     * entry in the cache will be ignored and will cause the oldest entry to be purged.
     */
    maxMemoryPercent?: pulumi.Input<number>;
    /**
     * Specifies the names of the attribute types for which the min-cache-entry-value-count property should apply. If no
     * attribute types are specified, then all user attributes will be examined.
     */
    minCacheEntryAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the minimum number of attribute values (optionally across a specified subset of attributes as defined in the
     * min-cache-entry-attributes property) for entries that should be held in the cache. Entries with fewer than this number
     * of attribute values will be excluded from the cache.
     */
    minCacheEntryValueCount?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies that the cache should only store entries which are accessed much more frequently than the average entry. The
     * cache will observe attempts to place entries in the cache and compare an entry's accesses to the average entry's.
     */
    onlyCacheFrequentlyAccessed?: pulumi.Input<boolean>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.EntryCacheRequiredAction>[]>;
    /**
     * The type of Entry Cache resource. Options are ['fifo']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EntryCache resource.
 */
export interface EntryCacheArgs {
    /**
     * Specifies the cache level in the cache order if more than one instance of the cache is configured.
     */
    cacheLevel: pulumi.Input<number>;
    /**
     * Indicates whether the entry cache should be updated with entries that have been returned to the client during the course
     * of processing an unindexed search.
     */
    cacheUnindexedSearchResults?: pulumi.Input<boolean>;
    /**
     * A description for this Entry Cache
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Entry Cache is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The set of filters that define the entries that should be excluded from the cache.
     */
    excludeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The set of filters that define the entries that should be included in the cache.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum number of entries that will be allowed in the cache. Once the cache reaches this size, then adding
     * new entries will cause existing entries to be purged, starting with the oldest.
     */
    maxEntries?: pulumi.Input<number>;
    /**
     * Specifies the maximum amount of memory, as a percentage of the total maximum JVM heap size, that this cache should
     * occupy when full. If the amount of memory the cache is using is greater than this amount, then an attempt to put a new
     * entry in the cache will be ignored and will cause the oldest entry to be purged.
     */
    maxMemoryPercent?: pulumi.Input<number>;
    /**
     * Specifies the names of the attribute types for which the min-cache-entry-value-count property should apply. If no
     * attribute types are specified, then all user attributes will be examined.
     */
    minCacheEntryAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the minimum number of attribute values (optionally across a specified subset of attributes as defined in the
     * min-cache-entry-attributes property) for entries that should be held in the cache. Entries with fewer than this number
     * of attribute values will be excluded from the cache.
     */
    minCacheEntryValueCount?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies that the cache should only store entries which are accessed much more frequently than the average entry. The
     * cache will observe attempts to place entries in the cache and compare an entry's accesses to the average entry's.
     */
    onlyCacheFrequentlyAccessed?: pulumi.Input<boolean>;
    /**
     * The type of Entry Cache resource. Options are ['fifo']
     */
    type?: pulumi.Input<string>;
}
