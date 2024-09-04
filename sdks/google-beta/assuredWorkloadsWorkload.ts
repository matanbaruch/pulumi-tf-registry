// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AssuredWorkloadsWorkload extends pulumi.CustomResource {
    /**
     * Get an existing AssuredWorkloadsWorkload resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssuredWorkloadsWorkloadState, opts?: pulumi.CustomResourceOptions): AssuredWorkloadsWorkload {
        return new AssuredWorkloadsWorkload(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/assuredWorkloadsWorkload:AssuredWorkloadsWorkload';

    /**
     * Returns true if the given object is an instance of AssuredWorkloadsWorkload.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssuredWorkloadsWorkload {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssuredWorkloadsWorkload.__pulumiType;
    }

    /**
     * Optional. Input only. The billing account used for the resources which are direct children of workload. This billing
     * account is initially associated with the resources created as part of Workload creation. After the initial creation of
     * these resources, the customer can change the assigned billing account. The resource name has the form
     * `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    public readonly billingAccount!: pulumi.Output<string | undefined>;
    /**
     * Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED,
     * IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT,
     * CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS,
     * ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
     */
    public readonly complianceRegime!: pulumi.Output<string>;
    /**
     * Output only. Count of active Violations in the Workload.
     */
    public /*out*/ readonly complianceStatuses!: pulumi.Output<outputs.AssuredWorkloadsWorkloadComplianceStatus[]>;
    /**
     * Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the
     * ResourceUsageRestriction org policy. Invoke workloads.restrictAllowedResources endpoint to allow your project developers
     * to use these services in their environment.
     */
    public /*out*/ readonly compliantButDisallowedServices!: pulumi.Output<string[]>;
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed
     * characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Optional. Represents the Ekm Provisioning State of the given workload.
     */
    public /*out*/ readonly ekmProvisioningResponses!: pulumi.Output<outputs.AssuredWorkloadsWorkloadEkmProvisioningResponse[]>;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    public readonly enableSovereignControls!: pulumi.Output<boolean>;
    /**
     * Output only. Represents the KAJ enrollment state of the given workload. Possible values:
     * KAJ_ENROLLMENT_STATE_UNSPECIFIED, KAJ_ENROLLMENT_STATE_PENDING, KAJ_ENROLLMENT_STATE_COMPLETE
     */
    public /*out*/ readonly kajEnrollmentState!: pulumi.Output<string>;
    /**
     * **DEPRECATED** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is
     * provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify,
     * ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    public readonly kmsSettings!: pulumi.Output<outputs.AssuredWorkloadsWorkloadKmsSettings | undefined>;
    /**
     * Optional. Labels applied to the workload. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Output only. The resource name of the workload.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The organization for the resource
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS,
     * SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
     */
    public readonly partner!: pulumi.Output<string | undefined>;
    /**
     * Optional. Permissions granted to the AW Partner SA account for the customer workload
     */
    public readonly partnerPermissions!: pulumi.Output<outputs.AssuredWorkloadsWorkloadPartnerPermissions | undefined>;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder
     * resource which is a child of the Workload parent. If not specified all resources are created under the parent
     * organization. Format: folders/{folder_id}
     */
    public readonly provisionedResourcesParent!: pulumi.Output<string | undefined>;
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project
     * id) will be used to create workload resources if possible. This field is optional.
     */
    public readonly resourceSettings!: pulumi.Output<outputs.AssuredWorkloadsWorkloadResourceSetting[] | undefined>;
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If
     * any of the projects already exist, the workload creation will fail. Always read only.
     */
    public /*out*/ readonly resources!: pulumi.Output<outputs.AssuredWorkloadsWorkloadResource[]>;
    /**
     * Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during
     * workloads.get call. In failure cases, user friendly error message is shown in SAA details page.
     */
    public /*out*/ readonly saaEnrollmentResponses!: pulumi.Output<outputs.AssuredWorkloadsWorkloadSaaEnrollmentResponse[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.AssuredWorkloadsWorkloadTimeouts | undefined>;
    /**
     * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by
     * default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any
     * Changes to this field during the createWorkload call will not be honored. This will always be true while creating the
     * workload.
     */
    public readonly violationNotificationsEnabled!: pulumi.Output<boolean>;

    /**
     * Create a AssuredWorkloadsWorkload resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssuredWorkloadsWorkloadArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AssuredWorkloadsWorkloadArgs | AssuredWorkloadsWorkloadState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AssuredWorkloadsWorkloadState | undefined;
            resourceInputs["billingAccount"] = state ? state.billingAccount : undefined;
            resourceInputs["complianceRegime"] = state ? state.complianceRegime : undefined;
            resourceInputs["complianceStatuses"] = state ? state.complianceStatuses : undefined;
            resourceInputs["compliantButDisallowedServices"] = state ? state.compliantButDisallowedServices : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["ekmProvisioningResponses"] = state ? state.ekmProvisioningResponses : undefined;
            resourceInputs["enableSovereignControls"] = state ? state.enableSovereignControls : undefined;
            resourceInputs["kajEnrollmentState"] = state ? state.kajEnrollmentState : undefined;
            resourceInputs["kmsSettings"] = state ? state.kmsSettings : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["partner"] = state ? state.partner : undefined;
            resourceInputs["partnerPermissions"] = state ? state.partnerPermissions : undefined;
            resourceInputs["provisionedResourcesParent"] = state ? state.provisionedResourcesParent : undefined;
            resourceInputs["resourceSettings"] = state ? state.resourceSettings : undefined;
            resourceInputs["resources"] = state ? state.resources : undefined;
            resourceInputs["saaEnrollmentResponses"] = state ? state.saaEnrollmentResponses : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["violationNotificationsEnabled"] = state ? state.violationNotificationsEnabled : undefined;
        } else {
            const args = argsOrState as AssuredWorkloadsWorkloadArgs | undefined;
            if ((!args || args.complianceRegime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'complianceRegime'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            resourceInputs["billingAccount"] = args ? args.billingAccount : undefined;
            resourceInputs["complianceRegime"] = args ? args.complianceRegime : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enableSovereignControls"] = args ? args.enableSovereignControls : undefined;
            resourceInputs["kmsSettings"] = args ? args.kmsSettings : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["partner"] = args ? args.partner : undefined;
            resourceInputs["partnerPermissions"] = args ? args.partnerPermissions : undefined;
            resourceInputs["provisionedResourcesParent"] = args ? args.provisionedResourcesParent : undefined;
            resourceInputs["resourceSettings"] = args ? args.resourceSettings : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["violationNotificationsEnabled"] = args ? args.violationNotificationsEnabled : undefined;
            resourceInputs["complianceStatuses"] = undefined /*out*/;
            resourceInputs["compliantButDisallowedServices"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["ekmProvisioningResponses"] = undefined /*out*/;
            resourceInputs["kajEnrollmentState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["saaEnrollmentResponses"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AssuredWorkloadsWorkload.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AssuredWorkloadsWorkload resources.
 */
export interface AssuredWorkloadsWorkloadState {
    /**
     * Optional. Input only. The billing account used for the resources which are direct children of workload. This billing
     * account is initially associated with the resources created as part of Workload creation. After the initial creation of
     * these resources, the customer can change the assigned billing account. The resource name has the form
     * `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: pulumi.Input<string>;
    /**
     * Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED,
     * IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT,
     * CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS,
     * ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
     */
    complianceRegime?: pulumi.Input<string>;
    /**
     * Output only. Count of active Violations in the Workload.
     */
    complianceStatuses?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadComplianceStatus>[]>;
    /**
     * Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the
     * ResourceUsageRestriction org policy. Invoke workloads.restrictAllowedResources endpoint to allow your project developers
     * to use these services in their environment.
     */
    compliantButDisallowedServices?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed
     * characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional. Represents the Ekm Provisioning State of the given workload.
     */
    ekmProvisioningResponses?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadEkmProvisioningResponse>[]>;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: pulumi.Input<boolean>;
    /**
     * Output only. Represents the KAJ enrollment state of the given workload. Possible values:
     * KAJ_ENROLLMENT_STATE_UNSPECIFIED, KAJ_ENROLLMENT_STATE_PENDING, KAJ_ENROLLMENT_STATE_COMPLETE
     */
    kajEnrollmentState?: pulumi.Input<string>;
    /**
     * **DEPRECATED** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is
     * provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify,
     * ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: pulumi.Input<inputs.AssuredWorkloadsWorkloadKmsSettings>;
    /**
     * Optional. Labels applied to the workload. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Output only. The resource name of the workload.
     */
    name?: pulumi.Input<string>;
    /**
     * The organization for the resource
     */
    organization?: pulumi.Input<string>;
    /**
     * Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS,
     * SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
     */
    partner?: pulumi.Input<string>;
    /**
     * Optional. Permissions granted to the AW Partner SA account for the customer workload
     */
    partnerPermissions?: pulumi.Input<inputs.AssuredWorkloadsWorkloadPartnerPermissions>;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder
     * resource which is a child of the Workload parent. If not specified all resources are created under the parent
     * organization. Format: folders/{folder_id}
     */
    provisionedResourcesParent?: pulumi.Input<string>;
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project
     * id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadResourceSetting>[]>;
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If
     * any of the projects already exist, the workload creation will fail. Always read only.
     */
    resources?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadResource>[]>;
    /**
     * Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during
     * workloads.get call. In failure cases, user friendly error message is shown in SAA details page.
     */
    saaEnrollmentResponses?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadSaaEnrollmentResponse>[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.AssuredWorkloadsWorkloadTimeouts>;
    /**
     * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by
     * default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any
     * Changes to this field during the createWorkload call will not be honored. This will always be true while creating the
     * workload.
     */
    violationNotificationsEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a AssuredWorkloadsWorkload resource.
 */
export interface AssuredWorkloadsWorkloadArgs {
    /**
     * Optional. Input only. The billing account used for the resources which are direct children of workload. This billing
     * account is initially associated with the resources created as part of Workload creation. After the initial creation of
     * these resources, the customer can change the assigned billing account. The resource name has the form
     * `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: pulumi.Input<string>;
    /**
     * Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED,
     * IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT,
     * CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS,
     * ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
     */
    complianceRegime: pulumi.Input<string>;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed
     * characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName: pulumi.Input<string>;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: pulumi.Input<boolean>;
    /**
     * **DEPRECATED** Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is
     * provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify,
     * ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: pulumi.Input<inputs.AssuredWorkloadsWorkloadKmsSettings>;
    /**
     * Optional. Labels applied to the workload. **Note**: This field is non-authoritative, and will only manage the labels
     * present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * The organization for the resource
     */
    organization: pulumi.Input<string>;
    /**
     * Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS,
     * SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
     */
    partner?: pulumi.Input<string>;
    /**
     * Optional. Permissions granted to the AW Partner SA account for the customer workload
     */
    partnerPermissions?: pulumi.Input<inputs.AssuredWorkloadsWorkloadPartnerPermissions>;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder
     * resource which is a child of the Workload parent. If not specified all resources are created under the parent
     * organization. Format: folders/{folder_id}
     */
    provisionedResourcesParent?: pulumi.Input<string>;
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project
     * id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: pulumi.Input<pulumi.Input<inputs.AssuredWorkloadsWorkloadResourceSetting>[]>;
    timeouts?: pulumi.Input<inputs.AssuredWorkloadsWorkloadTimeouts>;
    /**
     * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by
     * default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any
     * Changes to this field during the createWorkload call will not be honored. This will always be true while creating the
     * workload.
     */
    violationNotificationsEnabled?: pulumi.Input<boolean>;
}
