// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MwsWorkspaces extends pulumi.CustomResource {
    /**
     * Get an existing MwsWorkspaces resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MwsWorkspacesState, opts?: pulumi.CustomResourceOptions): MwsWorkspaces {
        return new MwsWorkspaces(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/mwsWorkspaces:MwsWorkspaces';

    /**
     * Returns true if the given object is an instance of MwsWorkspaces.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MwsWorkspaces {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MwsWorkspaces.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string>;
    public readonly awsRegion!: pulumi.Output<string | undefined>;
    public readonly cloud!: pulumi.Output<string>;
    public readonly cloudResourceContainer!: pulumi.Output<outputs.MwsWorkspacesCloudResourceContainer | undefined>;
    public readonly creationTime!: pulumi.Output<number>;
    public readonly credentialsId!: pulumi.Output<string | undefined>;
    public readonly customTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly customerManagedKeyId!: pulumi.Output<string | undefined>;
    public readonly deploymentName!: pulumi.Output<string | undefined>;
    public readonly externalCustomerInfo!: pulumi.Output<outputs.MwsWorkspacesExternalCustomerInfo | undefined>;
    public readonly gcpManagedNetworkConfig!: pulumi.Output<outputs.MwsWorkspacesGcpManagedNetworkConfig | undefined>;
    public /*out*/ readonly gcpWorkspaceSa!: pulumi.Output<string>;
    public readonly gkeConfig!: pulumi.Output<outputs.MwsWorkspacesGkeConfig | undefined>;
    public readonly isNoPublicIpEnabled!: pulumi.Output<boolean | undefined>;
    public readonly location!: pulumi.Output<string | undefined>;
    public readonly managedServicesCustomerManagedKeyId!: pulumi.Output<string | undefined>;
    public readonly networkId!: pulumi.Output<string | undefined>;
    public readonly pricingTier!: pulumi.Output<string>;
    public readonly privateAccessSettingsId!: pulumi.Output<string | undefined>;
    public readonly storageConfigurationId!: pulumi.Output<string | undefined>;
    public readonly storageCustomerManagedKeyId!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MwsWorkspacesTimeouts | undefined>;
    public readonly token!: pulumi.Output<outputs.MwsWorkspacesToken | undefined>;
    public readonly workspaceId!: pulumi.Output<number>;
    public readonly workspaceName!: pulumi.Output<string>;
    public readonly workspaceStatus!: pulumi.Output<string>;
    public readonly workspaceStatusMessage!: pulumi.Output<string>;
    public readonly workspaceUrl!: pulumi.Output<string>;

    /**
     * Create a MwsWorkspaces resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MwsWorkspacesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MwsWorkspacesArgs | MwsWorkspacesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MwsWorkspacesState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["awsRegion"] = state ? state.awsRegion : undefined;
            resourceInputs["cloud"] = state ? state.cloud : undefined;
            resourceInputs["cloudResourceContainer"] = state ? state.cloudResourceContainer : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["credentialsId"] = state ? state.credentialsId : undefined;
            resourceInputs["customTags"] = state ? state.customTags : undefined;
            resourceInputs["customerManagedKeyId"] = state ? state.customerManagedKeyId : undefined;
            resourceInputs["deploymentName"] = state ? state.deploymentName : undefined;
            resourceInputs["externalCustomerInfo"] = state ? state.externalCustomerInfo : undefined;
            resourceInputs["gcpManagedNetworkConfig"] = state ? state.gcpManagedNetworkConfig : undefined;
            resourceInputs["gcpWorkspaceSa"] = state ? state.gcpWorkspaceSa : undefined;
            resourceInputs["gkeConfig"] = state ? state.gkeConfig : undefined;
            resourceInputs["isNoPublicIpEnabled"] = state ? state.isNoPublicIpEnabled : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["managedServicesCustomerManagedKeyId"] = state ? state.managedServicesCustomerManagedKeyId : undefined;
            resourceInputs["networkId"] = state ? state.networkId : undefined;
            resourceInputs["pricingTier"] = state ? state.pricingTier : undefined;
            resourceInputs["privateAccessSettingsId"] = state ? state.privateAccessSettingsId : undefined;
            resourceInputs["storageConfigurationId"] = state ? state.storageConfigurationId : undefined;
            resourceInputs["storageCustomerManagedKeyId"] = state ? state.storageCustomerManagedKeyId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
            resourceInputs["workspaceName"] = state ? state.workspaceName : undefined;
            resourceInputs["workspaceStatus"] = state ? state.workspaceStatus : undefined;
            resourceInputs["workspaceStatusMessage"] = state ? state.workspaceStatusMessage : undefined;
            resourceInputs["workspaceUrl"] = state ? state.workspaceUrl : undefined;
        } else {
            const args = argsOrState as MwsWorkspacesArgs | undefined;
            if ((!args || args.accountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountId'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["accountId"] = args?.accountId ? pulumi.secret(args.accountId) : undefined;
            resourceInputs["awsRegion"] = args ? args.awsRegion : undefined;
            resourceInputs["cloud"] = args ? args.cloud : undefined;
            resourceInputs["cloudResourceContainer"] = args ? args.cloudResourceContainer : undefined;
            resourceInputs["creationTime"] = args ? args.creationTime : undefined;
            resourceInputs["credentialsId"] = args ? args.credentialsId : undefined;
            resourceInputs["customTags"] = args ? args.customTags : undefined;
            resourceInputs["customerManagedKeyId"] = args ? args.customerManagedKeyId : undefined;
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["externalCustomerInfo"] = args ? args.externalCustomerInfo : undefined;
            resourceInputs["gcpManagedNetworkConfig"] = args ? args.gcpManagedNetworkConfig : undefined;
            resourceInputs["gkeConfig"] = args ? args.gkeConfig : undefined;
            resourceInputs["isNoPublicIpEnabled"] = args ? args.isNoPublicIpEnabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedServicesCustomerManagedKeyId"] = args ? args.managedServicesCustomerManagedKeyId : undefined;
            resourceInputs["networkId"] = args ? args.networkId : undefined;
            resourceInputs["pricingTier"] = args ? args.pricingTier : undefined;
            resourceInputs["privateAccessSettingsId"] = args ? args.privateAccessSettingsId : undefined;
            resourceInputs["storageConfigurationId"] = args ? args.storageConfigurationId : undefined;
            resourceInputs["storageCustomerManagedKeyId"] = args ? args.storageCustomerManagedKeyId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["token"] = args ? args.token : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["workspaceStatus"] = args ? args.workspaceStatus : undefined;
            resourceInputs["workspaceStatusMessage"] = args ? args.workspaceStatusMessage : undefined;
            resourceInputs["workspaceUrl"] = args ? args.workspaceUrl : undefined;
            resourceInputs["gcpWorkspaceSa"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountId"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MwsWorkspaces.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MwsWorkspaces resources.
 */
export interface MwsWorkspacesState {
    accountId?: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    cloud?: pulumi.Input<string>;
    cloudResourceContainer?: pulumi.Input<inputs.MwsWorkspacesCloudResourceContainer>;
    creationTime?: pulumi.Input<number>;
    credentialsId?: pulumi.Input<string>;
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated Deprecated
     */
    customerManagedKeyId?: pulumi.Input<string>;
    deploymentName?: pulumi.Input<string>;
    externalCustomerInfo?: pulumi.Input<inputs.MwsWorkspacesExternalCustomerInfo>;
    gcpManagedNetworkConfig?: pulumi.Input<inputs.MwsWorkspacesGcpManagedNetworkConfig>;
    gcpWorkspaceSa?: pulumi.Input<string>;
    gkeConfig?: pulumi.Input<inputs.MwsWorkspacesGkeConfig>;
    isNoPublicIpEnabled?: pulumi.Input<boolean>;
    location?: pulumi.Input<string>;
    managedServicesCustomerManagedKeyId?: pulumi.Input<string>;
    networkId?: pulumi.Input<string>;
    pricingTier?: pulumi.Input<string>;
    privateAccessSettingsId?: pulumi.Input<string>;
    storageConfigurationId?: pulumi.Input<string>;
    storageCustomerManagedKeyId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MwsWorkspacesTimeouts>;
    token?: pulumi.Input<inputs.MwsWorkspacesToken>;
    workspaceId?: pulumi.Input<number>;
    workspaceName?: pulumi.Input<string>;
    workspaceStatus?: pulumi.Input<string>;
    workspaceStatusMessage?: pulumi.Input<string>;
    workspaceUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MwsWorkspaces resource.
 */
export interface MwsWorkspacesArgs {
    accountId: pulumi.Input<string>;
    awsRegion?: pulumi.Input<string>;
    cloud?: pulumi.Input<string>;
    cloudResourceContainer?: pulumi.Input<inputs.MwsWorkspacesCloudResourceContainer>;
    creationTime?: pulumi.Input<number>;
    credentialsId?: pulumi.Input<string>;
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated Deprecated
     */
    customerManagedKeyId?: pulumi.Input<string>;
    deploymentName?: pulumi.Input<string>;
    externalCustomerInfo?: pulumi.Input<inputs.MwsWorkspacesExternalCustomerInfo>;
    gcpManagedNetworkConfig?: pulumi.Input<inputs.MwsWorkspacesGcpManagedNetworkConfig>;
    gkeConfig?: pulumi.Input<inputs.MwsWorkspacesGkeConfig>;
    isNoPublicIpEnabled?: pulumi.Input<boolean>;
    location?: pulumi.Input<string>;
    managedServicesCustomerManagedKeyId?: pulumi.Input<string>;
    networkId?: pulumi.Input<string>;
    pricingTier?: pulumi.Input<string>;
    privateAccessSettingsId?: pulumi.Input<string>;
    storageConfigurationId?: pulumi.Input<string>;
    storageCustomerManagedKeyId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MwsWorkspacesTimeouts>;
    token?: pulumi.Input<inputs.MwsWorkspacesToken>;
    workspaceId?: pulumi.Input<number>;
    workspaceName: pulumi.Input<string>;
    workspaceStatus?: pulumi.Input<string>;
    workspaceStatusMessage?: pulumi.Input<string>;
    workspaceUrl?: pulumi.Input<string>;
}
