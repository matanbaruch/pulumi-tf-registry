// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CdnDomain extends pulumi.CustomResource {
    /**
     * Get an existing CdnDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CdnDomainState, opts?: pulumi.CustomResourceOptions): CdnDomain {
        return new CdnDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cdnDomain:CdnDomain';

    /**
     * Returns true if the given object is an instance of CdnDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CdnDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CdnDomain.__pulumiType;
    }

    /**
     * @deprecated Deprecated
     */
    public readonly authConfig!: pulumi.Output<outputs.CdnDomainAuthConfig | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly blockIps!: pulumi.Output<string[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly cacheConfigs!: pulumi.Output<outputs.CdnDomainCacheConfig[] | undefined>;
    public readonly cdnType!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly certificateConfig!: pulumi.Output<outputs.CdnDomainCertificateConfig | undefined>;
    public readonly domainName!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly httpHeaderConfigs!: pulumi.Output<outputs.CdnDomainHttpHeaderConfig[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly optimizeEnable!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly page404Config!: pulumi.Output<outputs.CdnDomainPage404Config | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly pageCompressEnable!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly parameterFilterConfig!: pulumi.Output<outputs.CdnDomainParameterFilterConfig | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly rangeEnable!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly referConfig!: pulumi.Output<outputs.CdnDomainReferConfig | undefined>;
    public readonly scope!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly sourcePort!: pulumi.Output<number | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly sourceType!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly sources!: pulumi.Output<string[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly videoSeekEnable!: pulumi.Output<string | undefined>;

    /**
     * Create a CdnDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CdnDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CdnDomainArgs | CdnDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CdnDomainState | undefined;
            resourceInputs["authConfig"] = state ? state.authConfig : undefined;
            resourceInputs["blockIps"] = state ? state.blockIps : undefined;
            resourceInputs["cacheConfigs"] = state ? state.cacheConfigs : undefined;
            resourceInputs["cdnType"] = state ? state.cdnType : undefined;
            resourceInputs["certificateConfig"] = state ? state.certificateConfig : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["httpHeaderConfigs"] = state ? state.httpHeaderConfigs : undefined;
            resourceInputs["optimizeEnable"] = state ? state.optimizeEnable : undefined;
            resourceInputs["page404Config"] = state ? state.page404Config : undefined;
            resourceInputs["pageCompressEnable"] = state ? state.pageCompressEnable : undefined;
            resourceInputs["parameterFilterConfig"] = state ? state.parameterFilterConfig : undefined;
            resourceInputs["rangeEnable"] = state ? state.rangeEnable : undefined;
            resourceInputs["referConfig"] = state ? state.referConfig : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["sourcePort"] = state ? state.sourcePort : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["sources"] = state ? state.sources : undefined;
            resourceInputs["videoSeekEnable"] = state ? state.videoSeekEnable : undefined;
        } else {
            const args = argsOrState as CdnDomainArgs | undefined;
            if ((!args || args.cdnType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cdnType'");
            }
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            resourceInputs["authConfig"] = args ? args.authConfig : undefined;
            resourceInputs["blockIps"] = args ? args.blockIps : undefined;
            resourceInputs["cacheConfigs"] = args ? args.cacheConfigs : undefined;
            resourceInputs["cdnType"] = args ? args.cdnType : undefined;
            resourceInputs["certificateConfig"] = args ? args.certificateConfig : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["httpHeaderConfigs"] = args ? args.httpHeaderConfigs : undefined;
            resourceInputs["optimizeEnable"] = args ? args.optimizeEnable : undefined;
            resourceInputs["page404Config"] = args ? args.page404Config : undefined;
            resourceInputs["pageCompressEnable"] = args ? args.pageCompressEnable : undefined;
            resourceInputs["parameterFilterConfig"] = args ? args.parameterFilterConfig : undefined;
            resourceInputs["rangeEnable"] = args ? args.rangeEnable : undefined;
            resourceInputs["referConfig"] = args ? args.referConfig : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["sourcePort"] = args ? args.sourcePort : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["videoSeekEnable"] = args ? args.videoSeekEnable : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CdnDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CdnDomain resources.
 */
export interface CdnDomainState {
    /**
     * @deprecated Deprecated
     */
    authConfig?: pulumi.Input<inputs.CdnDomainAuthConfig>;
    /**
     * @deprecated Deprecated
     */
    blockIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    cacheConfigs?: pulumi.Input<pulumi.Input<inputs.CdnDomainCacheConfig>[]>;
    cdnType?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    certificateConfig?: pulumi.Input<inputs.CdnDomainCertificateConfig>;
    domainName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    httpHeaderConfigs?: pulumi.Input<pulumi.Input<inputs.CdnDomainHttpHeaderConfig>[]>;
    /**
     * @deprecated Deprecated
     */
    optimizeEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    page404Config?: pulumi.Input<inputs.CdnDomainPage404Config>;
    /**
     * @deprecated Deprecated
     */
    pageCompressEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    parameterFilterConfig?: pulumi.Input<inputs.CdnDomainParameterFilterConfig>;
    /**
     * @deprecated Deprecated
     */
    rangeEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    referConfig?: pulumi.Input<inputs.CdnDomainReferConfig>;
    scope?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourcePort?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    sourceType?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    videoSeekEnable?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CdnDomain resource.
 */
export interface CdnDomainArgs {
    /**
     * @deprecated Deprecated
     */
    authConfig?: pulumi.Input<inputs.CdnDomainAuthConfig>;
    /**
     * @deprecated Deprecated
     */
    blockIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    cacheConfigs?: pulumi.Input<pulumi.Input<inputs.CdnDomainCacheConfig>[]>;
    cdnType: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    certificateConfig?: pulumi.Input<inputs.CdnDomainCertificateConfig>;
    domainName: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    httpHeaderConfigs?: pulumi.Input<pulumi.Input<inputs.CdnDomainHttpHeaderConfig>[]>;
    /**
     * @deprecated Deprecated
     */
    optimizeEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    page404Config?: pulumi.Input<inputs.CdnDomainPage404Config>;
    /**
     * @deprecated Deprecated
     */
    pageCompressEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    parameterFilterConfig?: pulumi.Input<inputs.CdnDomainParameterFilterConfig>;
    /**
     * @deprecated Deprecated
     */
    rangeEnable?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    referConfig?: pulumi.Input<inputs.CdnDomainReferConfig>;
    scope?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourcePort?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    sourceType?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sources?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    videoSeekEnable?: pulumi.Input<string>;
}
