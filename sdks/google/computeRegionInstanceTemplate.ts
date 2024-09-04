// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRegionInstanceTemplate extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRegionInstanceTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRegionInstanceTemplateState, opts?: pulumi.CustomResourceOptions): ComputeRegionInstanceTemplate {
        return new ComputeRegionInstanceTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeRegionInstanceTemplate:ComputeRegionInstanceTemplate';

    /**
     * Returns true if the given object is an instance of ComputeRegionInstanceTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRegionInstanceTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRegionInstanceTemplate.__pulumiType;
    }

    /**
     * Controls for advanced machine-related behavior features.
     */
    public readonly advancedMachineFeatures!: pulumi.Output<outputs.ComputeRegionInstanceTemplateAdvancedMachineFeatures | undefined>;
    /**
     * Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.
     */
    public readonly canIpForward!: pulumi.Output<boolean | undefined>;
    /**
     * The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
     * to create.
     */
    public readonly confidentialInstanceConfig!: pulumi.Output<outputs.ComputeRegionInstanceTemplateConfidentialInstanceConfig | undefined>;
    /**
     * A brief description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Disks to attach to instances created from this template. This can be specified multiple times for multiple disks.
     */
    public readonly disks!: pulumi.Output<outputs.ComputeRegionInstanceTemplateDisk[]>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * List of the type and count of accelerator cards attached to the instance.
     */
    public readonly guestAccelerators!: pulumi.Output<outputs.ComputeRegionInstanceTemplateGuestAccelerator[] | undefined>;
    /**
     * A description of the instance.
     */
    public readonly instanceDescription!: pulumi.Output<string | undefined>;
    /**
     * A set of key/value label pairs to assign to instances created from this template, **Note**: This field is
     * non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The machine type to create. To create a machine with a custom type (such as extended memory), format the value like
     * custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.
     */
    public readonly machineType!: pulumi.Output<string>;
    /**
     * Metadata key/value pairs to make available from within instances created from this template.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The unique fingerprint of the metadata.
     */
    public /*out*/ readonly metadataFingerprint!: pulumi.Output<string>;
    /**
     * An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces
     * the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used
     * simultaneously.
     */
    public readonly metadataStartupScript!: pulumi.Output<string | undefined>;
    /**
     * Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or
     * Intel Skylake.
     */
    public readonly minCpuPlatform!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    public readonly namePrefix!: pulumi.Output<string>;
    /**
     * Networks to attach to instances created from this template. This can be specified multiple times for multiple networks.
     */
    public readonly networkInterfaces!: pulumi.Output<outputs.ComputeRegionInstanceTemplateNetworkInterface[] | undefined>;
    /**
     * Configures network performance settings for the instance. If not specified, the instance will be created with its
     * default network performance configuration.
     */
    public readonly networkPerformanceConfig!: pulumi.Output<outputs.ComputeRegionInstanceTemplateNetworkPerformanceConfig | undefined>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The region in which the instance template is located. If it is not provided, the provider region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Specifies the reservations that this instance can consume from.
     */
    public readonly reservationAffinity!: pulumi.Output<outputs.ComputeRegionInstanceTemplateReservationAffinity | undefined>;
    /**
     * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags.
     * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both
     * PUT & PATCH) when empty.
     */
    public readonly resourceManagerTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
     */
    public readonly resourcePolicies!: pulumi.Output<string[] | undefined>;
    /**
     * The scheduling strategy to use.
     */
    public readonly scheduling!: pulumi.Output<outputs.ComputeRegionInstanceTemplateScheduling | undefined>;
    /**
     * The URI of the created resource.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * Service account to attach to the instance.
     */
    public readonly serviceAccount!: pulumi.Output<outputs.ComputeRegionInstanceTemplateServiceAccount | undefined>;
    /**
     * Enable Shielded VM on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits.
     * Defaults to disabled. Note: shielded_instance_config can only be used with boot images with shielded vm support.
     */
    public readonly shieldedInstanceConfig!: pulumi.Output<outputs.ComputeRegionInstanceTemplateShieldedInstanceConfig | undefined>;
    /**
     * Tags to attach to the instance.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The unique fingerprint of the tags.
     */
    public /*out*/ readonly tagsFingerprint!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRegionInstanceTemplateTimeouts | undefined>;

    /**
     * Create a ComputeRegionInstanceTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRegionInstanceTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRegionInstanceTemplateArgs | ComputeRegionInstanceTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRegionInstanceTemplateState | undefined;
            resourceInputs["advancedMachineFeatures"] = state ? state.advancedMachineFeatures : undefined;
            resourceInputs["canIpForward"] = state ? state.canIpForward : undefined;
            resourceInputs["confidentialInstanceConfig"] = state ? state.confidentialInstanceConfig : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disks"] = state ? state.disks : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["guestAccelerators"] = state ? state.guestAccelerators : undefined;
            resourceInputs["instanceDescription"] = state ? state.instanceDescription : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["machineType"] = state ? state.machineType : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["metadataFingerprint"] = state ? state.metadataFingerprint : undefined;
            resourceInputs["metadataStartupScript"] = state ? state.metadataStartupScript : undefined;
            resourceInputs["minCpuPlatform"] = state ? state.minCpuPlatform : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["networkInterfaces"] = state ? state.networkInterfaces : undefined;
            resourceInputs["networkPerformanceConfig"] = state ? state.networkPerformanceConfig : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["reservationAffinity"] = state ? state.reservationAffinity : undefined;
            resourceInputs["resourceManagerTags"] = state ? state.resourceManagerTags : undefined;
            resourceInputs["resourcePolicies"] = state ? state.resourcePolicies : undefined;
            resourceInputs["scheduling"] = state ? state.scheduling : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["serviceAccount"] = state ? state.serviceAccount : undefined;
            resourceInputs["shieldedInstanceConfig"] = state ? state.shieldedInstanceConfig : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsFingerprint"] = state ? state.tagsFingerprint : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeRegionInstanceTemplateArgs | undefined;
            if ((!args || args.disks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'disks'");
            }
            if ((!args || args.machineType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineType'");
            }
            resourceInputs["advancedMachineFeatures"] = args ? args.advancedMachineFeatures : undefined;
            resourceInputs["canIpForward"] = args ? args.canIpForward : undefined;
            resourceInputs["confidentialInstanceConfig"] = args ? args.confidentialInstanceConfig : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disks"] = args ? args.disks : undefined;
            resourceInputs["guestAccelerators"] = args ? args.guestAccelerators : undefined;
            resourceInputs["instanceDescription"] = args ? args.instanceDescription : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["machineType"] = args ? args.machineType : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["metadataStartupScript"] = args ? args.metadataStartupScript : undefined;
            resourceInputs["minCpuPlatform"] = args ? args.minCpuPlatform : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["networkInterfaces"] = args ? args.networkInterfaces : undefined;
            resourceInputs["networkPerformanceConfig"] = args ? args.networkPerformanceConfig : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["reservationAffinity"] = args ? args.reservationAffinity : undefined;
            resourceInputs["resourceManagerTags"] = args ? args.resourceManagerTags : undefined;
            resourceInputs["resourcePolicies"] = args ? args.resourcePolicies : undefined;
            resourceInputs["scheduling"] = args ? args.scheduling : undefined;
            resourceInputs["serviceAccount"] = args ? args.serviceAccount : undefined;
            resourceInputs["shieldedInstanceConfig"] = args ? args.shieldedInstanceConfig : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["metadataFingerprint"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["tagsFingerprint"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeRegionInstanceTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRegionInstanceTemplate resources.
 */
export interface ComputeRegionInstanceTemplateState {
    /**
     * Controls for advanced machine-related behavior features.
     */
    advancedMachineFeatures?: pulumi.Input<inputs.ComputeRegionInstanceTemplateAdvancedMachineFeatures>;
    /**
     * Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.
     */
    canIpForward?: pulumi.Input<boolean>;
    /**
     * The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
     * to create.
     */
    confidentialInstanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateConfidentialInstanceConfig>;
    /**
     * A brief description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Disks to attach to instances created from this template. This can be specified multiple times for multiple disks.
     */
    disks?: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateDisk>[]>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of the type and count of accelerator cards attached to the instance.
     */
    guestAccelerators?: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateGuestAccelerator>[]>;
    /**
     * A description of the instance.
     */
    instanceDescription?: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to instances created from this template, **Note**: This field is
     * non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The machine type to create. To create a machine with a custom type (such as extended memory), format the value like
     * custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.
     */
    machineType?: pulumi.Input<string>;
    /**
     * Metadata key/value pairs to make available from within instances created from this template.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique fingerprint of the metadata.
     */
    metadataFingerprint?: pulumi.Input<string>;
    /**
     * An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces
     * the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used
     * simultaneously.
     */
    metadataStartupScript?: pulumi.Input<string>;
    /**
     * Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or
     * Intel Skylake.
     */
    minCpuPlatform?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * Networks to attach to instances created from this template. This can be specified multiple times for multiple networks.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateNetworkInterface>[]>;
    /**
     * Configures network performance settings for the instance. If not specified, the instance will be created with its
     * default network performance configuration.
     */
    networkPerformanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateNetworkPerformanceConfig>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * The region in which the instance template is located. If it is not provided, the provider region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * Specifies the reservations that this instance can consume from.
     */
    reservationAffinity?: pulumi.Input<inputs.ComputeRegionInstanceTemplateReservationAffinity>;
    /**
     * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags.
     * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both
     * PUT & PATCH) when empty.
     */
    resourceManagerTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
     */
    resourcePolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The scheduling strategy to use.
     */
    scheduling?: pulumi.Input<inputs.ComputeRegionInstanceTemplateScheduling>;
    /**
     * The URI of the created resource.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * Service account to attach to the instance.
     */
    serviceAccount?: pulumi.Input<inputs.ComputeRegionInstanceTemplateServiceAccount>;
    /**
     * Enable Shielded VM on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits.
     * Defaults to disabled. Note: shielded_instance_config can only be used with boot images with shielded vm support.
     */
    shieldedInstanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateShieldedInstanceConfig>;
    /**
     * Tags to attach to the instance.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique fingerprint of the tags.
     */
    tagsFingerprint?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ComputeRegionInstanceTemplateTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeRegionInstanceTemplate resource.
 */
export interface ComputeRegionInstanceTemplateArgs {
    /**
     * Controls for advanced machine-related behavior features.
     */
    advancedMachineFeatures?: pulumi.Input<inputs.ComputeRegionInstanceTemplateAdvancedMachineFeatures>;
    /**
     * Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.
     */
    canIpForward?: pulumi.Input<boolean>;
    /**
     * The Confidential VM config being used by the instance. on_host_maintenance has to be set to TERMINATE or this will fail
     * to create.
     */
    confidentialInstanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateConfidentialInstanceConfig>;
    /**
     * A brief description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Disks to attach to instances created from this template. This can be specified multiple times for multiple disks.
     */
    disks: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateDisk>[]>;
    /**
     * List of the type and count of accelerator cards attached to the instance.
     */
    guestAccelerators?: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateGuestAccelerator>[]>;
    /**
     * A description of the instance.
     */
    instanceDescription?: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to instances created from this template, **Note**: This field is
     * non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The machine type to create. To create a machine with a custom type (such as extended memory), format the value like
     * custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.
     */
    machineType: pulumi.Input<string>;
    /**
     * Metadata key/value pairs to make available from within instances created from this template.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. This replaces
     * the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used
     * simultaneously.
     */
    metadataStartupScript?: pulumi.Input<string>;
    /**
     * Specifies a minimum CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell or
     * Intel Skylake.
     */
    minCpuPlatform?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * Networks to attach to instances created from this template. This can be specified multiple times for multiple networks.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.ComputeRegionInstanceTemplateNetworkInterface>[]>;
    /**
     * Configures network performance settings for the instance. If not specified, the instance will be created with its
     * default network performance configuration.
     */
    networkPerformanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateNetworkPerformanceConfig>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * The region in which the instance template is located. If it is not provided, the provider region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * Specifies the reservations that this instance can consume from.
     */
    reservationAffinity?: pulumi.Input<inputs.ComputeRegionInstanceTemplateReservationAffinity>;
    /**
     * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags.
     * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both
     * PUT & PATCH) when empty.
     */
    resourceManagerTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
     */
    resourcePolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The scheduling strategy to use.
     */
    scheduling?: pulumi.Input<inputs.ComputeRegionInstanceTemplateScheduling>;
    /**
     * Service account to attach to the instance.
     */
    serviceAccount?: pulumi.Input<inputs.ComputeRegionInstanceTemplateServiceAccount>;
    /**
     * Enable Shielded VM on this instance. Shielded VM provides verifiable integrity to prevent against malware and rootkits.
     * Defaults to disabled. Note: shielded_instance_config can only be used with boot images with shielded vm support.
     */
    shieldedInstanceConfig?: pulumi.Input<inputs.ComputeRegionInstanceTemplateShieldedInstanceConfig>;
    /**
     * Tags to attach to the instance.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ComputeRegionInstanceTemplateTimeouts>;
}
