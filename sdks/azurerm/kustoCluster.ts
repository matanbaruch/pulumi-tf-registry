// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KustoCluster extends pulumi.CustomResource {
    /**
     * Get an existing KustoCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KustoClusterState, opts?: pulumi.CustomResourceOptions): KustoCluster {
        return new KustoCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/kustoCluster:KustoCluster';

    /**
     * Returns true if the given object is an instance of KustoCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KustoCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KustoCluster.__pulumiType;
    }

    public readonly allowedFqdns!: pulumi.Output<string[] | undefined>;
    public readonly allowedIpRanges!: pulumi.Output<string[] | undefined>;
    public readonly autoStopEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly dataIngestionUri!: pulumi.Output<string>;
    public readonly diskEncryptionEnabled!: pulumi.Output<boolean | undefined>;
    public readonly doubleEncryptionEnabled!: pulumi.Output<boolean | undefined>;
    public readonly identity!: pulumi.Output<outputs.KustoClusterIdentity | undefined>;
    public readonly languageExtensions!: pulumi.Output<outputs.KustoClusterLanguageExtension[] | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly optimizedAutoScale!: pulumi.Output<outputs.KustoClusterOptimizedAutoScale | undefined>;
    public readonly outboundNetworkAccessRestricted!: pulumi.Output<boolean | undefined>;
    public readonly publicIpType!: pulumi.Output<string | undefined>;
    public readonly publicNetworkAccessEnabled!: pulumi.Output<boolean | undefined>;
    public readonly purgeEnabled!: pulumi.Output<boolean | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly sku!: pulumi.Output<outputs.KustoClusterSku>;
    public readonly streamingIngestionEnabled!: pulumi.Output<boolean | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KustoClusterTimeouts | undefined>;
    public readonly trustedExternalTenants!: pulumi.Output<string[]>;
    public /*out*/ readonly uri!: pulumi.Output<string>;
    public readonly virtualNetworkConfiguration!: pulumi.Output<outputs.KustoClusterVirtualNetworkConfiguration | undefined>;
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a KustoCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KustoClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KustoClusterArgs | KustoClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KustoClusterState | undefined;
            resourceInputs["allowedFqdns"] = state ? state.allowedFqdns : undefined;
            resourceInputs["allowedIpRanges"] = state ? state.allowedIpRanges : undefined;
            resourceInputs["autoStopEnabled"] = state ? state.autoStopEnabled : undefined;
            resourceInputs["dataIngestionUri"] = state ? state.dataIngestionUri : undefined;
            resourceInputs["diskEncryptionEnabled"] = state ? state.diskEncryptionEnabled : undefined;
            resourceInputs["doubleEncryptionEnabled"] = state ? state.doubleEncryptionEnabled : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["languageExtensions"] = state ? state.languageExtensions : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["optimizedAutoScale"] = state ? state.optimizedAutoScale : undefined;
            resourceInputs["outboundNetworkAccessRestricted"] = state ? state.outboundNetworkAccessRestricted : undefined;
            resourceInputs["publicIpType"] = state ? state.publicIpType : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = state ? state.publicNetworkAccessEnabled : undefined;
            resourceInputs["purgeEnabled"] = state ? state.purgeEnabled : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["sku"] = state ? state.sku : undefined;
            resourceInputs["streamingIngestionEnabled"] = state ? state.streamingIngestionEnabled : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["trustedExternalTenants"] = state ? state.trustedExternalTenants : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
            resourceInputs["virtualNetworkConfiguration"] = state ? state.virtualNetworkConfiguration : undefined;
            resourceInputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as KustoClusterArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["allowedFqdns"] = args ? args.allowedFqdns : undefined;
            resourceInputs["allowedIpRanges"] = args ? args.allowedIpRanges : undefined;
            resourceInputs["autoStopEnabled"] = args ? args.autoStopEnabled : undefined;
            resourceInputs["diskEncryptionEnabled"] = args ? args.diskEncryptionEnabled : undefined;
            resourceInputs["doubleEncryptionEnabled"] = args ? args.doubleEncryptionEnabled : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["languageExtensions"] = args ? args.languageExtensions : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["optimizedAutoScale"] = args ? args.optimizedAutoScale : undefined;
            resourceInputs["outboundNetworkAccessRestricted"] = args ? args.outboundNetworkAccessRestricted : undefined;
            resourceInputs["publicIpType"] = args ? args.publicIpType : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = args ? args.publicNetworkAccessEnabled : undefined;
            resourceInputs["purgeEnabled"] = args ? args.purgeEnabled : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["streamingIngestionEnabled"] = args ? args.streamingIngestionEnabled : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["trustedExternalTenants"] = args ? args.trustedExternalTenants : undefined;
            resourceInputs["virtualNetworkConfiguration"] = args ? args.virtualNetworkConfiguration : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["dataIngestionUri"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KustoCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KustoCluster resources.
 */
export interface KustoClusterState {
    allowedFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    allowedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    autoStopEnabled?: pulumi.Input<boolean>;
    dataIngestionUri?: pulumi.Input<string>;
    diskEncryptionEnabled?: pulumi.Input<boolean>;
    doubleEncryptionEnabled?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.KustoClusterIdentity>;
    languageExtensions?: pulumi.Input<pulumi.Input<inputs.KustoClusterLanguageExtension>[]>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    optimizedAutoScale?: pulumi.Input<inputs.KustoClusterOptimizedAutoScale>;
    outboundNetworkAccessRestricted?: pulumi.Input<boolean>;
    publicIpType?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    purgeEnabled?: pulumi.Input<boolean>;
    resourceGroupName?: pulumi.Input<string>;
    sku?: pulumi.Input<inputs.KustoClusterSku>;
    streamingIngestionEnabled?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KustoClusterTimeouts>;
    trustedExternalTenants?: pulumi.Input<pulumi.Input<string>[]>;
    uri?: pulumi.Input<string>;
    virtualNetworkConfiguration?: pulumi.Input<inputs.KustoClusterVirtualNetworkConfiguration>;
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a KustoCluster resource.
 */
export interface KustoClusterArgs {
    allowedFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    allowedIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    autoStopEnabled?: pulumi.Input<boolean>;
    diskEncryptionEnabled?: pulumi.Input<boolean>;
    doubleEncryptionEnabled?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.KustoClusterIdentity>;
    languageExtensions?: pulumi.Input<pulumi.Input<inputs.KustoClusterLanguageExtension>[]>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    optimizedAutoScale?: pulumi.Input<inputs.KustoClusterOptimizedAutoScale>;
    outboundNetworkAccessRestricted?: pulumi.Input<boolean>;
    publicIpType?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    purgeEnabled?: pulumi.Input<boolean>;
    resourceGroupName: pulumi.Input<string>;
    sku: pulumi.Input<inputs.KustoClusterSku>;
    streamingIngestionEnabled?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.KustoClusterTimeouts>;
    trustedExternalTenants?: pulumi.Input<pulumi.Input<string>[]>;
    virtualNetworkConfiguration?: pulumi.Input<inputs.KustoClusterVirtualNetworkConfiguration>;
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
