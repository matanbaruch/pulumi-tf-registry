// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WindowsWebAppSlot extends pulumi.CustomResource {
    /**
     * Get an existing WindowsWebAppSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WindowsWebAppSlotState, opts?: pulumi.CustomResourceOptions): WindowsWebAppSlot {
        return new WindowsWebAppSlot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/windowsWebAppSlot:WindowsWebAppSlot';

    /**
     * Returns true if the given object is an instance of WindowsWebAppSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WindowsWebAppSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WindowsWebAppSlot.__pulumiType;
    }

    public readonly appServiceId!: pulumi.Output<string>;
    public readonly appSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly authSettings!: pulumi.Output<outputs.WindowsWebAppSlotAuthSettings | undefined>;
    public readonly authSettingsV2!: pulumi.Output<outputs.WindowsWebAppSlotAuthSettingsV2 | undefined>;
    public readonly backup!: pulumi.Output<outputs.WindowsWebAppSlotBackup | undefined>;
    public readonly clientAffinityEnabled!: pulumi.Output<boolean | undefined>;
    public readonly clientCertificateEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Paths to exclude when using client certificates, separated by ;
     */
    public readonly clientCertificateExclusionPaths!: pulumi.Output<string | undefined>;
    public readonly clientCertificateMode!: pulumi.Output<string | undefined>;
    public readonly connectionStrings!: pulumi.Output<outputs.WindowsWebAppSlotConnectionString[] | undefined>;
    public /*out*/ readonly customDomainVerificationId!: pulumi.Output<string>;
    public /*out*/ readonly defaultHostname!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly ftpPublishBasicAuthenticationEnabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly hostingEnvironmentId!: pulumi.Output<string>;
    public readonly httpsOnly!: pulumi.Output<boolean | undefined>;
    public readonly identity!: pulumi.Output<outputs.WindowsWebAppSlotIdentity | undefined>;
    public readonly keyVaultReferenceIdentityId!: pulumi.Output<string>;
    public /*out*/ readonly kind!: pulumi.Output<string>;
    public readonly logs!: pulumi.Output<outputs.WindowsWebAppSlotLogs | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly outboundIpAddressLists!: pulumi.Output<string[]>;
    public /*out*/ readonly outboundIpAddresses!: pulumi.Output<string>;
    public /*out*/ readonly possibleOutboundIpAddressLists!: pulumi.Output<string[]>;
    public /*out*/ readonly possibleOutboundIpAddresses!: pulumi.Output<string>;
    public readonly publicNetworkAccessEnabled!: pulumi.Output<boolean | undefined>;
    public readonly servicePlanId!: pulumi.Output<string | undefined>;
    public readonly siteConfig!: pulumi.Output<outputs.WindowsWebAppSlotSiteConfig>;
    public /*out*/ readonly siteCredentials!: pulumi.Output<outputs.WindowsWebAppSlotSiteCredential[]>;
    public readonly storageAccounts!: pulumi.Output<outputs.WindowsWebAppSlotStorageAccount[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.WindowsWebAppSlotTimeouts | undefined>;
    public readonly virtualNetworkSubnetId!: pulumi.Output<string | undefined>;
    public readonly webdeployPublishBasicAuthenticationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The local path and filename of the Zip packaged application to deploy to this Windows Web App. **Note:** Using this
     * value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.
     */
    public readonly zipDeployFile!: pulumi.Output<string>;

    /**
     * Create a WindowsWebAppSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WindowsWebAppSlotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WindowsWebAppSlotArgs | WindowsWebAppSlotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WindowsWebAppSlotState | undefined;
            resourceInputs["appServiceId"] = state ? state.appServiceId : undefined;
            resourceInputs["appSettings"] = state ? state.appSettings : undefined;
            resourceInputs["authSettings"] = state ? state.authSettings : undefined;
            resourceInputs["authSettingsV2"] = state ? state.authSettingsV2 : undefined;
            resourceInputs["backup"] = state ? state.backup : undefined;
            resourceInputs["clientAffinityEnabled"] = state ? state.clientAffinityEnabled : undefined;
            resourceInputs["clientCertificateEnabled"] = state ? state.clientCertificateEnabled : undefined;
            resourceInputs["clientCertificateExclusionPaths"] = state ? state.clientCertificateExclusionPaths : undefined;
            resourceInputs["clientCertificateMode"] = state ? state.clientCertificateMode : undefined;
            resourceInputs["connectionStrings"] = state ? state.connectionStrings : undefined;
            resourceInputs["customDomainVerificationId"] = state ? state.customDomainVerificationId : undefined;
            resourceInputs["defaultHostname"] = state ? state.defaultHostname : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["ftpPublishBasicAuthenticationEnabled"] = state ? state.ftpPublishBasicAuthenticationEnabled : undefined;
            resourceInputs["hostingEnvironmentId"] = state ? state.hostingEnvironmentId : undefined;
            resourceInputs["httpsOnly"] = state ? state.httpsOnly : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["keyVaultReferenceIdentityId"] = state ? state.keyVaultReferenceIdentityId : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["logs"] = state ? state.logs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundIpAddressLists"] = state ? state.outboundIpAddressLists : undefined;
            resourceInputs["outboundIpAddresses"] = state ? state.outboundIpAddresses : undefined;
            resourceInputs["possibleOutboundIpAddressLists"] = state ? state.possibleOutboundIpAddressLists : undefined;
            resourceInputs["possibleOutboundIpAddresses"] = state ? state.possibleOutboundIpAddresses : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = state ? state.publicNetworkAccessEnabled : undefined;
            resourceInputs["servicePlanId"] = state ? state.servicePlanId : undefined;
            resourceInputs["siteConfig"] = state ? state.siteConfig : undefined;
            resourceInputs["siteCredentials"] = state ? state.siteCredentials : undefined;
            resourceInputs["storageAccounts"] = state ? state.storageAccounts : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["virtualNetworkSubnetId"] = state ? state.virtualNetworkSubnetId : undefined;
            resourceInputs["webdeployPublishBasicAuthenticationEnabled"] = state ? state.webdeployPublishBasicAuthenticationEnabled : undefined;
            resourceInputs["zipDeployFile"] = state ? state.zipDeployFile : undefined;
        } else {
            const args = argsOrState as WindowsWebAppSlotArgs | undefined;
            if ((!args || args.appServiceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appServiceId'");
            }
            if ((!args || args.siteConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteConfig'");
            }
            resourceInputs["appServiceId"] = args ? args.appServiceId : undefined;
            resourceInputs["appSettings"] = args ? args.appSettings : undefined;
            resourceInputs["authSettings"] = args ? args.authSettings : undefined;
            resourceInputs["authSettingsV2"] = args ? args.authSettingsV2 : undefined;
            resourceInputs["backup"] = args ? args.backup : undefined;
            resourceInputs["clientAffinityEnabled"] = args ? args.clientAffinityEnabled : undefined;
            resourceInputs["clientCertificateEnabled"] = args ? args.clientCertificateEnabled : undefined;
            resourceInputs["clientCertificateExclusionPaths"] = args ? args.clientCertificateExclusionPaths : undefined;
            resourceInputs["clientCertificateMode"] = args ? args.clientCertificateMode : undefined;
            resourceInputs["connectionStrings"] = args ? args.connectionStrings : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ftpPublishBasicAuthenticationEnabled"] = args ? args.ftpPublishBasicAuthenticationEnabled : undefined;
            resourceInputs["httpsOnly"] = args ? args.httpsOnly : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyVaultReferenceIdentityId"] = args ? args.keyVaultReferenceIdentityId : undefined;
            resourceInputs["logs"] = args ? args.logs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicNetworkAccessEnabled"] = args ? args.publicNetworkAccessEnabled : undefined;
            resourceInputs["servicePlanId"] = args ? args.servicePlanId : undefined;
            resourceInputs["siteConfig"] = args ? args.siteConfig : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["virtualNetworkSubnetId"] = args ? args.virtualNetworkSubnetId : undefined;
            resourceInputs["webdeployPublishBasicAuthenticationEnabled"] = args ? args.webdeployPublishBasicAuthenticationEnabled : undefined;
            resourceInputs["zipDeployFile"] = args ? args.zipDeployFile : undefined;
            resourceInputs["customDomainVerificationId"] = undefined /*out*/;
            resourceInputs["defaultHostname"] = undefined /*out*/;
            resourceInputs["hostingEnvironmentId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["outboundIpAddressLists"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["possibleOutboundIpAddressLists"] = undefined /*out*/;
            resourceInputs["possibleOutboundIpAddresses"] = undefined /*out*/;
            resourceInputs["siteCredentials"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["customDomainVerificationId", "siteCredentials"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(WindowsWebAppSlot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WindowsWebAppSlot resources.
 */
export interface WindowsWebAppSlotState {
    appServiceId?: pulumi.Input<string>;
    appSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    authSettings?: pulumi.Input<inputs.WindowsWebAppSlotAuthSettings>;
    authSettingsV2?: pulumi.Input<inputs.WindowsWebAppSlotAuthSettingsV2>;
    backup?: pulumi.Input<inputs.WindowsWebAppSlotBackup>;
    clientAffinityEnabled?: pulumi.Input<boolean>;
    clientCertificateEnabled?: pulumi.Input<boolean>;
    /**
     * Paths to exclude when using client certificates, separated by ;
     */
    clientCertificateExclusionPaths?: pulumi.Input<string>;
    clientCertificateMode?: pulumi.Input<string>;
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.WindowsWebAppSlotConnectionString>[]>;
    customDomainVerificationId?: pulumi.Input<string>;
    defaultHostname?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    ftpPublishBasicAuthenticationEnabled?: pulumi.Input<boolean>;
    hostingEnvironmentId?: pulumi.Input<string>;
    httpsOnly?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.WindowsWebAppSlotIdentity>;
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
    kind?: pulumi.Input<string>;
    logs?: pulumi.Input<inputs.WindowsWebAppSlotLogs>;
    name?: pulumi.Input<string>;
    outboundIpAddressLists?: pulumi.Input<pulumi.Input<string>[]>;
    outboundIpAddresses?: pulumi.Input<string>;
    possibleOutboundIpAddressLists?: pulumi.Input<pulumi.Input<string>[]>;
    possibleOutboundIpAddresses?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    servicePlanId?: pulumi.Input<string>;
    siteConfig?: pulumi.Input<inputs.WindowsWebAppSlotSiteConfig>;
    siteCredentials?: pulumi.Input<pulumi.Input<inputs.WindowsWebAppSlotSiteCredential>[]>;
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.WindowsWebAppSlotStorageAccount>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.WindowsWebAppSlotTimeouts>;
    virtualNetworkSubnetId?: pulumi.Input<string>;
    webdeployPublishBasicAuthenticationEnabled?: pulumi.Input<boolean>;
    /**
     * The local path and filename of the Zip packaged application to deploy to this Windows Web App. **Note:** Using this
     * value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.
     */
    zipDeployFile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WindowsWebAppSlot resource.
 */
export interface WindowsWebAppSlotArgs {
    appServiceId: pulumi.Input<string>;
    appSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    authSettings?: pulumi.Input<inputs.WindowsWebAppSlotAuthSettings>;
    authSettingsV2?: pulumi.Input<inputs.WindowsWebAppSlotAuthSettingsV2>;
    backup?: pulumi.Input<inputs.WindowsWebAppSlotBackup>;
    clientAffinityEnabled?: pulumi.Input<boolean>;
    clientCertificateEnabled?: pulumi.Input<boolean>;
    /**
     * Paths to exclude when using client certificates, separated by ;
     */
    clientCertificateExclusionPaths?: pulumi.Input<string>;
    clientCertificateMode?: pulumi.Input<string>;
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.WindowsWebAppSlotConnectionString>[]>;
    enabled?: pulumi.Input<boolean>;
    ftpPublishBasicAuthenticationEnabled?: pulumi.Input<boolean>;
    httpsOnly?: pulumi.Input<boolean>;
    identity?: pulumi.Input<inputs.WindowsWebAppSlotIdentity>;
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
    logs?: pulumi.Input<inputs.WindowsWebAppSlotLogs>;
    name?: pulumi.Input<string>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    servicePlanId?: pulumi.Input<string>;
    siteConfig: pulumi.Input<inputs.WindowsWebAppSlotSiteConfig>;
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.WindowsWebAppSlotStorageAccount>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.WindowsWebAppSlotTimeouts>;
    virtualNetworkSubnetId?: pulumi.Input<string>;
    webdeployPublishBasicAuthenticationEnabled?: pulumi.Input<boolean>;
    /**
     * The local path and filename of the Zip packaged application to deploy to this Windows Web App. **Note:** Using this
     * value requires `WEBSITE_RUN_FROM_PACKAGE=1` on the App in `app_settings`.
     */
    zipDeployFile?: pulumi.Input<string>;
}
