// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceVcl extends pulumi.CustomResource {
    /**
     * Get an existing ServiceVcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceVclState, opts?: pulumi.CustomResourceOptions): ServiceVcl {
        return new ServiceVcl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fastly:index/serviceVcl:ServiceVcl';

    /**
     * Returns true if the given object is an instance of ServiceVcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceVcl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceVcl.__pulumiType;
    }

    public readonly acls!: pulumi.Output<outputs.ServiceVclAcl[] | undefined>;
    /**
     * Conditionally prevents the Service from being activated. The apply step will continue to create a new draft version but
     * will not activate it if this is set to `false`. Default `true`
     */
    public readonly activate!: pulumi.Output<boolean | undefined>;
    /**
     * The currently active version of your Fastly Service
     */
    public /*out*/ readonly activeVersion!: pulumi.Output<number>;
    public readonly backends!: pulumi.Output<outputs.ServiceVclBackend[] | undefined>;
    public readonly cacheSettings!: pulumi.Output<outputs.ServiceVclCacheSetting[] | undefined>;
    /**
     * The latest cloned version by the provider
     */
    public /*out*/ readonly clonedVersion!: pulumi.Output<number>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly conditions!: pulumi.Output<outputs.ServiceVclCondition[] | undefined>;
    /**
     * The default hostname
     */
    public readonly defaultHost!: pulumi.Output<string | undefined>;
    /**
     * The default Time-to-live (TTL) for requests
     */
    public readonly defaultTtl!: pulumi.Output<number | undefined>;
    public readonly dictionaries!: pulumi.Output<outputs.ServiceVclDictionary[] | undefined>;
    public readonly directors!: pulumi.Output<outputs.ServiceVclDirector[] | undefined>;
    /**
     * A set of Domain names to serve as entry points for your Service
     */
    public readonly domains!: pulumi.Output<outputs.ServiceVclDomain[]>;
    public readonly dynamicsnippets!: pulumi.Output<outputs.ServiceVclDynamicsnippet[] | undefined>;
    /**
     * Services that are active cannot be destroyed. In order to destroy the Service, set `force_destroy` to `true`. Default
     * `false`
     */
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly forceRefresh!: pulumi.Output<boolean>;
    public readonly gzips!: pulumi.Output<outputs.ServiceVclGzip[] | undefined>;
    public readonly headers!: pulumi.Output<outputs.ServiceVclHeader[] | undefined>;
    public readonly healthchecks!: pulumi.Output<outputs.ServiceVclHealthcheck[] | undefined>;
    /**
     * Enables support for the HTTP/3 (QUIC) protocol
     */
    public readonly http3!: pulumi.Output<boolean | undefined>;
    public readonly imageOptimizerDefaultSettings!: pulumi.Output<outputs.ServiceVclImageOptimizerDefaultSettings | undefined>;
    /**
     * Used internally by the provider to temporarily indicate if the service is being imported, and is reset to false once the
     * import is finished
     */
    public /*out*/ readonly imported!: pulumi.Output<boolean>;
    public readonly loggingBigqueries!: pulumi.Output<outputs.ServiceVclLoggingBigquery[] | undefined>;
    public readonly loggingBlobstorages!: pulumi.Output<outputs.ServiceVclLoggingBlobstorage[] | undefined>;
    public readonly loggingCloudfiles!: pulumi.Output<outputs.ServiceVclLoggingCloudfile[] | undefined>;
    public readonly loggingDatadogs!: pulumi.Output<outputs.ServiceVclLoggingDatadog[] | undefined>;
    public readonly loggingDigitaloceans!: pulumi.Output<outputs.ServiceVclLoggingDigitalocean[] | undefined>;
    public readonly loggingElasticsearches!: pulumi.Output<outputs.ServiceVclLoggingElasticsearch[] | undefined>;
    public readonly loggingFtps!: pulumi.Output<outputs.ServiceVclLoggingFtp[] | undefined>;
    public readonly loggingGcs!: pulumi.Output<outputs.ServiceVclLoggingGc[] | undefined>;
    public readonly loggingGooglepubsubs!: pulumi.Output<outputs.ServiceVclLoggingGooglepubsub[] | undefined>;
    public readonly loggingHerokus!: pulumi.Output<outputs.ServiceVclLoggingHerokus[] | undefined>;
    public readonly loggingHoneycombs!: pulumi.Output<outputs.ServiceVclLoggingHoneycomb[] | undefined>;
    public readonly loggingHttps!: pulumi.Output<outputs.ServiceVclLoggingHttp[] | undefined>;
    public readonly loggingKafkas!: pulumi.Output<outputs.ServiceVclLoggingKafka[] | undefined>;
    public readonly loggingKineses!: pulumi.Output<outputs.ServiceVclLoggingKinese[] | undefined>;
    public readonly loggingLogentries!: pulumi.Output<outputs.ServiceVclLoggingLogentry[] | undefined>;
    public readonly loggingLogglies!: pulumi.Output<outputs.ServiceVclLoggingLoggly[] | undefined>;
    public readonly loggingLogshuttles!: pulumi.Output<outputs.ServiceVclLoggingLogshuttle[] | undefined>;
    public readonly loggingNewrelicotlps!: pulumi.Output<outputs.ServiceVclLoggingNewrelicotlp[] | undefined>;
    public readonly loggingNewrelics!: pulumi.Output<outputs.ServiceVclLoggingNewrelic[] | undefined>;
    public readonly loggingOpenstacks!: pulumi.Output<outputs.ServiceVclLoggingOpenstack[] | undefined>;
    public readonly loggingPapertrails!: pulumi.Output<outputs.ServiceVclLoggingPapertrail[] | undefined>;
    public readonly loggingS3s!: pulumi.Output<outputs.ServiceVclLoggingS3[] | undefined>;
    public readonly loggingScalyrs!: pulumi.Output<outputs.ServiceVclLoggingScalyr[] | undefined>;
    public readonly loggingSftps!: pulumi.Output<outputs.ServiceVclLoggingSftp[] | undefined>;
    public readonly loggingSplunks!: pulumi.Output<outputs.ServiceVclLoggingSplunk[] | undefined>;
    public readonly loggingSumologics!: pulumi.Output<outputs.ServiceVclLoggingSumologic[] | undefined>;
    public readonly loggingSyslogs!: pulumi.Output<outputs.ServiceVclLoggingSyslog[] | undefined>;
    /**
     * The unique name for the Service to create
     */
    public readonly name!: pulumi.Output<string>;
    public readonly productEnablement!: pulumi.Output<outputs.ServiceVclProductEnablement | undefined>;
    public readonly rateLimiters!: pulumi.Output<outputs.ServiceVclRateLimiter[] | undefined>;
    public readonly requestSettings!: pulumi.Output<outputs.ServiceVclRequestSetting[] | undefined>;
    public readonly responseObjects!: pulumi.Output<outputs.ServiceVclResponseObject[] | undefined>;
    public readonly reuse!: pulumi.Output<boolean | undefined>;
    public readonly snippets!: pulumi.Output<outputs.ServiceVclSnippet[] | undefined>;
    /**
     * Enables serving a stale object if there is an error
     */
    public readonly staleIfError!: pulumi.Output<boolean | undefined>;
    /**
     * The default time-to-live (TTL) for serving the stale object for the version
     */
    public readonly staleIfErrorTtl!: pulumi.Output<number | undefined>;
    public readonly vcls!: pulumi.Output<outputs.ServiceVclVcl[] | undefined>;
    /**
     * Description field for the version
     */
    public readonly versionComment!: pulumi.Output<string | undefined>;
    public readonly waf!: pulumi.Output<outputs.ServiceVclWaf | undefined>;

    /**
     * Create a ServiceVcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceVclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceVclArgs | ServiceVclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceVclState | undefined;
            resourceInputs["acls"] = state ? state.acls : undefined;
            resourceInputs["activate"] = state ? state.activate : undefined;
            resourceInputs["activeVersion"] = state ? state.activeVersion : undefined;
            resourceInputs["backends"] = state ? state.backends : undefined;
            resourceInputs["cacheSettings"] = state ? state.cacheSettings : undefined;
            resourceInputs["clonedVersion"] = state ? state.clonedVersion : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["defaultHost"] = state ? state.defaultHost : undefined;
            resourceInputs["defaultTtl"] = state ? state.defaultTtl : undefined;
            resourceInputs["dictionaries"] = state ? state.dictionaries : undefined;
            resourceInputs["directors"] = state ? state.directors : undefined;
            resourceInputs["domains"] = state ? state.domains : undefined;
            resourceInputs["dynamicsnippets"] = state ? state.dynamicsnippets : undefined;
            resourceInputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            resourceInputs["forceRefresh"] = state ? state.forceRefresh : undefined;
            resourceInputs["gzips"] = state ? state.gzips : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["healthchecks"] = state ? state.healthchecks : undefined;
            resourceInputs["http3"] = state ? state.http3 : undefined;
            resourceInputs["imageOptimizerDefaultSettings"] = state ? state.imageOptimizerDefaultSettings : undefined;
            resourceInputs["imported"] = state ? state.imported : undefined;
            resourceInputs["loggingBigqueries"] = state ? state.loggingBigqueries : undefined;
            resourceInputs["loggingBlobstorages"] = state ? state.loggingBlobstorages : undefined;
            resourceInputs["loggingCloudfiles"] = state ? state.loggingCloudfiles : undefined;
            resourceInputs["loggingDatadogs"] = state ? state.loggingDatadogs : undefined;
            resourceInputs["loggingDigitaloceans"] = state ? state.loggingDigitaloceans : undefined;
            resourceInputs["loggingElasticsearches"] = state ? state.loggingElasticsearches : undefined;
            resourceInputs["loggingFtps"] = state ? state.loggingFtps : undefined;
            resourceInputs["loggingGcs"] = state ? state.loggingGcs : undefined;
            resourceInputs["loggingGooglepubsubs"] = state ? state.loggingGooglepubsubs : undefined;
            resourceInputs["loggingHerokus"] = state ? state.loggingHerokus : undefined;
            resourceInputs["loggingHoneycombs"] = state ? state.loggingHoneycombs : undefined;
            resourceInputs["loggingHttps"] = state ? state.loggingHttps : undefined;
            resourceInputs["loggingKafkas"] = state ? state.loggingKafkas : undefined;
            resourceInputs["loggingKineses"] = state ? state.loggingKineses : undefined;
            resourceInputs["loggingLogentries"] = state ? state.loggingLogentries : undefined;
            resourceInputs["loggingLogglies"] = state ? state.loggingLogglies : undefined;
            resourceInputs["loggingLogshuttles"] = state ? state.loggingLogshuttles : undefined;
            resourceInputs["loggingNewrelicotlps"] = state ? state.loggingNewrelicotlps : undefined;
            resourceInputs["loggingNewrelics"] = state ? state.loggingNewrelics : undefined;
            resourceInputs["loggingOpenstacks"] = state ? state.loggingOpenstacks : undefined;
            resourceInputs["loggingPapertrails"] = state ? state.loggingPapertrails : undefined;
            resourceInputs["loggingS3s"] = state ? state.loggingS3s : undefined;
            resourceInputs["loggingScalyrs"] = state ? state.loggingScalyrs : undefined;
            resourceInputs["loggingSftps"] = state ? state.loggingSftps : undefined;
            resourceInputs["loggingSplunks"] = state ? state.loggingSplunks : undefined;
            resourceInputs["loggingSumologics"] = state ? state.loggingSumologics : undefined;
            resourceInputs["loggingSyslogs"] = state ? state.loggingSyslogs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["productEnablement"] = state ? state.productEnablement : undefined;
            resourceInputs["rateLimiters"] = state ? state.rateLimiters : undefined;
            resourceInputs["requestSettings"] = state ? state.requestSettings : undefined;
            resourceInputs["responseObjects"] = state ? state.responseObjects : undefined;
            resourceInputs["reuse"] = state ? state.reuse : undefined;
            resourceInputs["snippets"] = state ? state.snippets : undefined;
            resourceInputs["staleIfError"] = state ? state.staleIfError : undefined;
            resourceInputs["staleIfErrorTtl"] = state ? state.staleIfErrorTtl : undefined;
            resourceInputs["vcls"] = state ? state.vcls : undefined;
            resourceInputs["versionComment"] = state ? state.versionComment : undefined;
            resourceInputs["waf"] = state ? state.waf : undefined;
        } else {
            const args = argsOrState as ServiceVclArgs | undefined;
            if ((!args || args.domains === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domains'");
            }
            resourceInputs["acls"] = args ? args.acls : undefined;
            resourceInputs["activate"] = args ? args.activate : undefined;
            resourceInputs["backends"] = args ? args.backends : undefined;
            resourceInputs["cacheSettings"] = args ? args.cacheSettings : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["defaultHost"] = args ? args.defaultHost : undefined;
            resourceInputs["defaultTtl"] = args ? args.defaultTtl : undefined;
            resourceInputs["dictionaries"] = args ? args.dictionaries : undefined;
            resourceInputs["directors"] = args ? args.directors : undefined;
            resourceInputs["domains"] = args ? args.domains : undefined;
            resourceInputs["dynamicsnippets"] = args ? args.dynamicsnippets : undefined;
            resourceInputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            resourceInputs["gzips"] = args ? args.gzips : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["healthchecks"] = args ? args.healthchecks : undefined;
            resourceInputs["http3"] = args ? args.http3 : undefined;
            resourceInputs["imageOptimizerDefaultSettings"] = args ? args.imageOptimizerDefaultSettings : undefined;
            resourceInputs["loggingBigqueries"] = args ? args.loggingBigqueries : undefined;
            resourceInputs["loggingBlobstorages"] = args ? args.loggingBlobstorages : undefined;
            resourceInputs["loggingCloudfiles"] = args ? args.loggingCloudfiles : undefined;
            resourceInputs["loggingDatadogs"] = args ? args.loggingDatadogs : undefined;
            resourceInputs["loggingDigitaloceans"] = args ? args.loggingDigitaloceans : undefined;
            resourceInputs["loggingElasticsearches"] = args ? args.loggingElasticsearches : undefined;
            resourceInputs["loggingFtps"] = args ? args.loggingFtps : undefined;
            resourceInputs["loggingGcs"] = args ? args.loggingGcs : undefined;
            resourceInputs["loggingGooglepubsubs"] = args ? args.loggingGooglepubsubs : undefined;
            resourceInputs["loggingHerokus"] = args ? args.loggingHerokus : undefined;
            resourceInputs["loggingHoneycombs"] = args ? args.loggingHoneycombs : undefined;
            resourceInputs["loggingHttps"] = args ? args.loggingHttps : undefined;
            resourceInputs["loggingKafkas"] = args ? args.loggingKafkas : undefined;
            resourceInputs["loggingKineses"] = args ? args.loggingKineses : undefined;
            resourceInputs["loggingLogentries"] = args ? args.loggingLogentries : undefined;
            resourceInputs["loggingLogglies"] = args ? args.loggingLogglies : undefined;
            resourceInputs["loggingLogshuttles"] = args ? args.loggingLogshuttles : undefined;
            resourceInputs["loggingNewrelicotlps"] = args ? args.loggingNewrelicotlps : undefined;
            resourceInputs["loggingNewrelics"] = args ? args.loggingNewrelics : undefined;
            resourceInputs["loggingOpenstacks"] = args ? args.loggingOpenstacks : undefined;
            resourceInputs["loggingPapertrails"] = args ? args.loggingPapertrails : undefined;
            resourceInputs["loggingS3s"] = args ? args.loggingS3s : undefined;
            resourceInputs["loggingScalyrs"] = args ? args.loggingScalyrs : undefined;
            resourceInputs["loggingSftps"] = args ? args.loggingSftps : undefined;
            resourceInputs["loggingSplunks"] = args ? args.loggingSplunks : undefined;
            resourceInputs["loggingSumologics"] = args ? args.loggingSumologics : undefined;
            resourceInputs["loggingSyslogs"] = args ? args.loggingSyslogs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["productEnablement"] = args ? args.productEnablement : undefined;
            resourceInputs["rateLimiters"] = args ? args.rateLimiters : undefined;
            resourceInputs["requestSettings"] = args ? args.requestSettings : undefined;
            resourceInputs["responseObjects"] = args ? args.responseObjects : undefined;
            resourceInputs["reuse"] = args ? args.reuse : undefined;
            resourceInputs["snippets"] = args ? args.snippets : undefined;
            resourceInputs["staleIfError"] = args ? args.staleIfError : undefined;
            resourceInputs["staleIfErrorTtl"] = args ? args.staleIfErrorTtl : undefined;
            resourceInputs["vcls"] = args ? args.vcls : undefined;
            resourceInputs["versionComment"] = args ? args.versionComment : undefined;
            resourceInputs["waf"] = args ? args.waf : undefined;
            resourceInputs["activeVersion"] = undefined /*out*/;
            resourceInputs["clonedVersion"] = undefined /*out*/;
            resourceInputs["forceRefresh"] = undefined /*out*/;
            resourceInputs["imported"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceVcl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceVcl resources.
 */
export interface ServiceVclState {
    acls?: pulumi.Input<pulumi.Input<inputs.ServiceVclAcl>[]>;
    /**
     * Conditionally prevents the Service from being activated. The apply step will continue to create a new draft version but
     * will not activate it if this is set to `false`. Default `true`
     */
    activate?: pulumi.Input<boolean>;
    /**
     * The currently active version of your Fastly Service
     */
    activeVersion?: pulumi.Input<number>;
    backends?: pulumi.Input<pulumi.Input<inputs.ServiceVclBackend>[]>;
    cacheSettings?: pulumi.Input<pulumi.Input<inputs.ServiceVclCacheSetting>[]>;
    /**
     * The latest cloned version by the provider
     */
    clonedVersion?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    conditions?: pulumi.Input<pulumi.Input<inputs.ServiceVclCondition>[]>;
    /**
     * The default hostname
     */
    defaultHost?: pulumi.Input<string>;
    /**
     * The default Time-to-live (TTL) for requests
     */
    defaultTtl?: pulumi.Input<number>;
    dictionaries?: pulumi.Input<pulumi.Input<inputs.ServiceVclDictionary>[]>;
    directors?: pulumi.Input<pulumi.Input<inputs.ServiceVclDirector>[]>;
    /**
     * A set of Domain names to serve as entry points for your Service
     */
    domains?: pulumi.Input<pulumi.Input<inputs.ServiceVclDomain>[]>;
    dynamicsnippets?: pulumi.Input<pulumi.Input<inputs.ServiceVclDynamicsnippet>[]>;
    /**
     * Services that are active cannot be destroyed. In order to destroy the Service, set `force_destroy` to `true`. Default
     * `false`
     */
    forceDestroy?: pulumi.Input<boolean>;
    forceRefresh?: pulumi.Input<boolean>;
    gzips?: pulumi.Input<pulumi.Input<inputs.ServiceVclGzip>[]>;
    headers?: pulumi.Input<pulumi.Input<inputs.ServiceVclHeader>[]>;
    healthchecks?: pulumi.Input<pulumi.Input<inputs.ServiceVclHealthcheck>[]>;
    /**
     * Enables support for the HTTP/3 (QUIC) protocol
     */
    http3?: pulumi.Input<boolean>;
    imageOptimizerDefaultSettings?: pulumi.Input<inputs.ServiceVclImageOptimizerDefaultSettings>;
    /**
     * Used internally by the provider to temporarily indicate if the service is being imported, and is reset to false once the
     * import is finished
     */
    imported?: pulumi.Input<boolean>;
    loggingBigqueries?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingBigquery>[]>;
    loggingBlobstorages?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingBlobstorage>[]>;
    loggingCloudfiles?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingCloudfile>[]>;
    loggingDatadogs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingDatadog>[]>;
    loggingDigitaloceans?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingDigitalocean>[]>;
    loggingElasticsearches?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingElasticsearch>[]>;
    loggingFtps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingFtp>[]>;
    loggingGcs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingGc>[]>;
    loggingGooglepubsubs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingGooglepubsub>[]>;
    loggingHerokus?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHerokus>[]>;
    loggingHoneycombs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHoneycomb>[]>;
    loggingHttps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHttp>[]>;
    loggingKafkas?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingKafka>[]>;
    loggingKineses?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingKinese>[]>;
    loggingLogentries?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLogentry>[]>;
    loggingLogglies?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLoggly>[]>;
    loggingLogshuttles?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLogshuttle>[]>;
    loggingNewrelicotlps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingNewrelicotlp>[]>;
    loggingNewrelics?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingNewrelic>[]>;
    loggingOpenstacks?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingOpenstack>[]>;
    loggingPapertrails?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingPapertrail>[]>;
    loggingS3s?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingS3>[]>;
    loggingScalyrs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingScalyr>[]>;
    loggingSftps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSftp>[]>;
    loggingSplunks?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSplunk>[]>;
    loggingSumologics?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSumologic>[]>;
    loggingSyslogs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSyslog>[]>;
    /**
     * The unique name for the Service to create
     */
    name?: pulumi.Input<string>;
    productEnablement?: pulumi.Input<inputs.ServiceVclProductEnablement>;
    rateLimiters?: pulumi.Input<pulumi.Input<inputs.ServiceVclRateLimiter>[]>;
    requestSettings?: pulumi.Input<pulumi.Input<inputs.ServiceVclRequestSetting>[]>;
    responseObjects?: pulumi.Input<pulumi.Input<inputs.ServiceVclResponseObject>[]>;
    reuse?: pulumi.Input<boolean>;
    snippets?: pulumi.Input<pulumi.Input<inputs.ServiceVclSnippet>[]>;
    /**
     * Enables serving a stale object if there is an error
     */
    staleIfError?: pulumi.Input<boolean>;
    /**
     * The default time-to-live (TTL) for serving the stale object for the version
     */
    staleIfErrorTtl?: pulumi.Input<number>;
    vcls?: pulumi.Input<pulumi.Input<inputs.ServiceVclVcl>[]>;
    /**
     * Description field for the version
     */
    versionComment?: pulumi.Input<string>;
    waf?: pulumi.Input<inputs.ServiceVclWaf>;
}

/**
 * The set of arguments for constructing a ServiceVcl resource.
 */
export interface ServiceVclArgs {
    acls?: pulumi.Input<pulumi.Input<inputs.ServiceVclAcl>[]>;
    /**
     * Conditionally prevents the Service from being activated. The apply step will continue to create a new draft version but
     * will not activate it if this is set to `false`. Default `true`
     */
    activate?: pulumi.Input<boolean>;
    backends?: pulumi.Input<pulumi.Input<inputs.ServiceVclBackend>[]>;
    cacheSettings?: pulumi.Input<pulumi.Input<inputs.ServiceVclCacheSetting>[]>;
    comment?: pulumi.Input<string>;
    conditions?: pulumi.Input<pulumi.Input<inputs.ServiceVclCondition>[]>;
    /**
     * The default hostname
     */
    defaultHost?: pulumi.Input<string>;
    /**
     * The default Time-to-live (TTL) for requests
     */
    defaultTtl?: pulumi.Input<number>;
    dictionaries?: pulumi.Input<pulumi.Input<inputs.ServiceVclDictionary>[]>;
    directors?: pulumi.Input<pulumi.Input<inputs.ServiceVclDirector>[]>;
    /**
     * A set of Domain names to serve as entry points for your Service
     */
    domains: pulumi.Input<pulumi.Input<inputs.ServiceVclDomain>[]>;
    dynamicsnippets?: pulumi.Input<pulumi.Input<inputs.ServiceVclDynamicsnippet>[]>;
    /**
     * Services that are active cannot be destroyed. In order to destroy the Service, set `force_destroy` to `true`. Default
     * `false`
     */
    forceDestroy?: pulumi.Input<boolean>;
    gzips?: pulumi.Input<pulumi.Input<inputs.ServiceVclGzip>[]>;
    headers?: pulumi.Input<pulumi.Input<inputs.ServiceVclHeader>[]>;
    healthchecks?: pulumi.Input<pulumi.Input<inputs.ServiceVclHealthcheck>[]>;
    /**
     * Enables support for the HTTP/3 (QUIC) protocol
     */
    http3?: pulumi.Input<boolean>;
    imageOptimizerDefaultSettings?: pulumi.Input<inputs.ServiceVclImageOptimizerDefaultSettings>;
    loggingBigqueries?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingBigquery>[]>;
    loggingBlobstorages?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingBlobstorage>[]>;
    loggingCloudfiles?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingCloudfile>[]>;
    loggingDatadogs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingDatadog>[]>;
    loggingDigitaloceans?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingDigitalocean>[]>;
    loggingElasticsearches?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingElasticsearch>[]>;
    loggingFtps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingFtp>[]>;
    loggingGcs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingGc>[]>;
    loggingGooglepubsubs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingGooglepubsub>[]>;
    loggingHerokus?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHerokus>[]>;
    loggingHoneycombs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHoneycomb>[]>;
    loggingHttps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingHttp>[]>;
    loggingKafkas?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingKafka>[]>;
    loggingKineses?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingKinese>[]>;
    loggingLogentries?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLogentry>[]>;
    loggingLogglies?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLoggly>[]>;
    loggingLogshuttles?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingLogshuttle>[]>;
    loggingNewrelicotlps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingNewrelicotlp>[]>;
    loggingNewrelics?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingNewrelic>[]>;
    loggingOpenstacks?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingOpenstack>[]>;
    loggingPapertrails?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingPapertrail>[]>;
    loggingS3s?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingS3>[]>;
    loggingScalyrs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingScalyr>[]>;
    loggingSftps?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSftp>[]>;
    loggingSplunks?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSplunk>[]>;
    loggingSumologics?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSumologic>[]>;
    loggingSyslogs?: pulumi.Input<pulumi.Input<inputs.ServiceVclLoggingSyslog>[]>;
    /**
     * The unique name for the Service to create
     */
    name?: pulumi.Input<string>;
    productEnablement?: pulumi.Input<inputs.ServiceVclProductEnablement>;
    rateLimiters?: pulumi.Input<pulumi.Input<inputs.ServiceVclRateLimiter>[]>;
    requestSettings?: pulumi.Input<pulumi.Input<inputs.ServiceVclRequestSetting>[]>;
    responseObjects?: pulumi.Input<pulumi.Input<inputs.ServiceVclResponseObject>[]>;
    reuse?: pulumi.Input<boolean>;
    snippets?: pulumi.Input<pulumi.Input<inputs.ServiceVclSnippet>[]>;
    /**
     * Enables serving a stale object if there is an error
     */
    staleIfError?: pulumi.Input<boolean>;
    /**
     * The default time-to-live (TTL) for serving the stale object for the version
     */
    staleIfErrorTtl?: pulumi.Input<number>;
    vcls?: pulumi.Input<pulumi.Input<inputs.ServiceVclVcl>[]>;
    /**
     * Description field for the version
     */
    versionComment?: pulumi.Input<string>;
    waf?: pulumi.Input<inputs.ServiceVclWaf>;
}
