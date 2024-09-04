// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterEdgeNative extends pulumi.CustomResource {
    /**
     * Get an existing ClusterEdgeNative resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterEdgeNativeState, opts?: pulumi.CustomResourceOptions): ClusterEdgeNative {
        return new ClusterEdgeNative(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/clusterEdgeNative:ClusterEdgeNative';

    /**
     * Returns true if the given object is an instance of ClusterEdgeNative.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterEdgeNative {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterEdgeNative.__pulumiType;
    }

    /**
     * Admin Kube-config for the cluster. This can be used to connect to the cluster using `kubectl`, With admin privilege.
     */
    public /*out*/ readonly adminKubeConfig!: pulumi.Output<string>;
    /**
     * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action.
     * `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is
     * `DownloadAndInstall`.
     */
    public readonly applySetting!: pulumi.Output<string | undefined>;
    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    public readonly backupPolicy!: pulumi.Output<outputs.ClusterEdgeNativeBackupPolicy | undefined>;
    public readonly cloudAccountId!: pulumi.Output<string | undefined>;
    public readonly cloudConfig!: pulumi.Output<outputs.ClusterEdgeNativeCloudConfig>;
    /**
     * ID of the cloud config used for the cluster. This cloud config must be of type `azure`.
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly cloudConfigId!: pulumi.Output<string>;
    /**
     * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env':
     * 'stage'}`
     */
    public readonly clusterMetaAttribute!: pulumi.Output<string | undefined>;
    public readonly clusterProfiles!: pulumi.Output<outputs.ClusterEdgeNativeClusterProfile[] | undefined>;
    /**
     * The RBAC binding for the cluster.
     */
    public readonly clusterRbacBindings!: pulumi.Output<outputs.ClusterEdgeNativeClusterRbacBinding[] | undefined>;
    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
     */
    public readonly forceDelete!: pulumi.Output<boolean | undefined>;
    /**
     * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
     */
    public readonly forceDeleteDelay!: pulumi.Output<number | undefined>;
    /**
     * The host configuration for the cluster.
     */
    public readonly hostConfigs!: pulumi.Output<outputs.ClusterEdgeNativeHostConfig[] | undefined>;
    /**
     * Kubeconfig for the cluster. This can be used to connect to the cluster using `kubectl`.
     */
    public /*out*/ readonly kubeconfig!: pulumi.Output<string>;
    public readonly locationConfigs!: pulumi.Output<outputs.ClusterEdgeNativeLocationConfig[] | undefined>;
    public readonly machinePools!: pulumi.Output<outputs.ClusterEdgeNativeMachinePool[]>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The namespaces for the cluster.
     */
    public readonly namespaces!: pulumi.Output<outputs.ClusterEdgeNativeNamespace[] | undefined>;
    /**
     * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
     */
    public readonly osPatchAfter!: pulumi.Output<string | undefined>;
    /**
     * Whether to apply OS patch on boot. Default is `false`.
     */
    public readonly osPatchOnBoot!: pulumi.Output<boolean | undefined>;
    /**
     * The cron schedule for OS patching. This must be in the form of cron syntax. Ex: `0 0 * * *`.
     */
    public readonly osPatchSchedule!: pulumi.Output<string | undefined>;
    /**
     * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an
     * individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses
     * automatic agent upgrades for the cluster.
     */
    public readonly pauseAgentUpgrades!: pulumi.Output<string | undefined>;
    /**
     * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
     */
    public readonly reviewRepaveState!: pulumi.Output<string | undefined>;
    /**
     * The scan policy for the cluster.
     */
    public readonly scanPolicy!: pulumi.Output<outputs.ClusterEdgeNativeScanPolicy | undefined>;
    /**
     * If `true`, the cluster will be created asynchronously. Default value is `false`.
     */
    public readonly skipCompletion!: pulumi.Output<boolean | undefined>;
    /**
     * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterEdgeNativeTimeouts | undefined>;

    /**
     * Create a ClusterEdgeNative resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterEdgeNativeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterEdgeNativeArgs | ClusterEdgeNativeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterEdgeNativeState | undefined;
            resourceInputs["adminKubeConfig"] = state ? state.adminKubeConfig : undefined;
            resourceInputs["applySetting"] = state ? state.applySetting : undefined;
            resourceInputs["backupPolicy"] = state ? state.backupPolicy : undefined;
            resourceInputs["cloudAccountId"] = state ? state.cloudAccountId : undefined;
            resourceInputs["cloudConfig"] = state ? state.cloudConfig : undefined;
            resourceInputs["cloudConfigId"] = state ? state.cloudConfigId : undefined;
            resourceInputs["clusterMetaAttribute"] = state ? state.clusterMetaAttribute : undefined;
            resourceInputs["clusterProfiles"] = state ? state.clusterProfiles : undefined;
            resourceInputs["clusterRbacBindings"] = state ? state.clusterRbacBindings : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["forceDeleteDelay"] = state ? state.forceDeleteDelay : undefined;
            resourceInputs["hostConfigs"] = state ? state.hostConfigs : undefined;
            resourceInputs["kubeconfig"] = state ? state.kubeconfig : undefined;
            resourceInputs["locationConfigs"] = state ? state.locationConfigs : undefined;
            resourceInputs["machinePools"] = state ? state.machinePools : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespaces"] = state ? state.namespaces : undefined;
            resourceInputs["osPatchAfter"] = state ? state.osPatchAfter : undefined;
            resourceInputs["osPatchOnBoot"] = state ? state.osPatchOnBoot : undefined;
            resourceInputs["osPatchSchedule"] = state ? state.osPatchSchedule : undefined;
            resourceInputs["pauseAgentUpgrades"] = state ? state.pauseAgentUpgrades : undefined;
            resourceInputs["reviewRepaveState"] = state ? state.reviewRepaveState : undefined;
            resourceInputs["scanPolicy"] = state ? state.scanPolicy : undefined;
            resourceInputs["skipCompletion"] = state ? state.skipCompletion : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ClusterEdgeNativeArgs | undefined;
            if ((!args || args.cloudConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudConfig'");
            }
            if ((!args || args.machinePools === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machinePools'");
            }
            resourceInputs["applySetting"] = args ? args.applySetting : undefined;
            resourceInputs["backupPolicy"] = args ? args.backupPolicy : undefined;
            resourceInputs["cloudAccountId"] = args ? args.cloudAccountId : undefined;
            resourceInputs["cloudConfig"] = args ? args.cloudConfig : undefined;
            resourceInputs["clusterMetaAttribute"] = args ? args.clusterMetaAttribute : undefined;
            resourceInputs["clusterProfiles"] = args ? args.clusterProfiles : undefined;
            resourceInputs["clusterRbacBindings"] = args ? args.clusterRbacBindings : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["forceDeleteDelay"] = args ? args.forceDeleteDelay : undefined;
            resourceInputs["hostConfigs"] = args ? args.hostConfigs : undefined;
            resourceInputs["locationConfigs"] = args ? args.locationConfigs : undefined;
            resourceInputs["machinePools"] = args ? args.machinePools : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaces"] = args ? args.namespaces : undefined;
            resourceInputs["osPatchAfter"] = args ? args.osPatchAfter : undefined;
            resourceInputs["osPatchOnBoot"] = args ? args.osPatchOnBoot : undefined;
            resourceInputs["osPatchSchedule"] = args ? args.osPatchSchedule : undefined;
            resourceInputs["pauseAgentUpgrades"] = args ? args.pauseAgentUpgrades : undefined;
            resourceInputs["reviewRepaveState"] = args ? args.reviewRepaveState : undefined;
            resourceInputs["scanPolicy"] = args ? args.scanPolicy : undefined;
            resourceInputs["skipCompletion"] = args ? args.skipCompletion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["adminKubeConfig"] = undefined /*out*/;
            resourceInputs["cloudConfigId"] = undefined /*out*/;
            resourceInputs["kubeconfig"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterEdgeNative.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterEdgeNative resources.
 */
export interface ClusterEdgeNativeState {
    /**
     * Admin Kube-config for the cluster. This can be used to connect to the cluster using `kubectl`, With admin privilege.
     */
    adminKubeConfig?: pulumi.Input<string>;
    /**
     * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action.
     * `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is
     * `DownloadAndInstall`.
     */
    applySetting?: pulumi.Input<string>;
    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    backupPolicy?: pulumi.Input<inputs.ClusterEdgeNativeBackupPolicy>;
    cloudAccountId?: pulumi.Input<string>;
    cloudConfig?: pulumi.Input<inputs.ClusterEdgeNativeCloudConfig>;
    /**
     * ID of the cloud config used for the cluster. This cloud config must be of type `azure`.
     *
     * @deprecated Deprecated
     */
    cloudConfigId?: pulumi.Input<string>;
    /**
     * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env':
     * 'stage'}`
     */
    clusterMetaAttribute?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeClusterProfile>[]>;
    /**
     * The RBAC binding for the cluster.
     */
    clusterRbacBindings?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeClusterRbacBinding>[]>;
    context?: pulumi.Input<string>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
     */
    forceDeleteDelay?: pulumi.Input<number>;
    /**
     * The host configuration for the cluster.
     */
    hostConfigs?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeHostConfig>[]>;
    /**
     * Kubeconfig for the cluster. This can be used to connect to the cluster using `kubectl`.
     */
    kubeconfig?: pulumi.Input<string>;
    locationConfigs?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeLocationConfig>[]>;
    machinePools?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeMachinePool>[]>;
    name?: pulumi.Input<string>;
    /**
     * The namespaces for the cluster.
     */
    namespaces?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeNamespace>[]>;
    /**
     * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
     */
    osPatchAfter?: pulumi.Input<string>;
    /**
     * Whether to apply OS patch on boot. Default is `false`.
     */
    osPatchOnBoot?: pulumi.Input<boolean>;
    /**
     * The cron schedule for OS patching. This must be in the form of cron syntax. Ex: `0 0 * * *`.
     */
    osPatchSchedule?: pulumi.Input<string>;
    /**
     * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an
     * individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses
     * automatic agent upgrades for the cluster.
     */
    pauseAgentUpgrades?: pulumi.Input<string>;
    /**
     * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
     */
    reviewRepaveState?: pulumi.Input<string>;
    /**
     * The scan policy for the cluster.
     */
    scanPolicy?: pulumi.Input<inputs.ClusterEdgeNativeScanPolicy>;
    /**
     * If `true`, the cluster will be created asynchronously. Default value is `false`.
     */
    skipCompletion?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ClusterEdgeNativeTimeouts>;
}

/**
 * The set of arguments for constructing a ClusterEdgeNative resource.
 */
export interface ClusterEdgeNativeArgs {
    /**
     * The setting to apply the cluster profile. `DownloadAndInstall` will download and install packs in one action.
     * `DownloadAndInstallLater` will only download artifact and postpone install for later. Default value is
     * `DownloadAndInstall`.
     */
    applySetting?: pulumi.Input<string>;
    /**
     * The backup policy for the cluster. If not specified, no backups will be taken.
     */
    backupPolicy?: pulumi.Input<inputs.ClusterEdgeNativeBackupPolicy>;
    cloudAccountId?: pulumi.Input<string>;
    cloudConfig: pulumi.Input<inputs.ClusterEdgeNativeCloudConfig>;
    /**
     * `cluster_meta_attribute` can be used to set additional cluster metadata information, eg `{'nic_name': 'test', 'env':
     * 'stage'}`
     */
    clusterMetaAttribute?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeClusterProfile>[]>;
    /**
     * The RBAC binding for the cluster.
     */
    clusterRbacBindings?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeClusterRbacBinding>[]>;
    context?: pulumi.Input<string>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * If set to `true`, the cluster will be force deleted and user has to manually clean up the provisioned cloud resources.
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * Delay duration in minutes to before invoking cluster force delete. Default and minimum is 20.
     */
    forceDeleteDelay?: pulumi.Input<number>;
    /**
     * The host configuration for the cluster.
     */
    hostConfigs?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeHostConfig>[]>;
    locationConfigs?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeLocationConfig>[]>;
    machinePools: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeMachinePool>[]>;
    name?: pulumi.Input<string>;
    /**
     * The namespaces for the cluster.
     */
    namespaces?: pulumi.Input<pulumi.Input<inputs.ClusterEdgeNativeNamespace>[]>;
    /**
     * Date and time after which to patch cluster `RFC3339: 2006-01-02T15:04:05Z07:00`
     */
    osPatchAfter?: pulumi.Input<string>;
    /**
     * Whether to apply OS patch on boot. Default is `false`.
     */
    osPatchOnBoot?: pulumi.Input<boolean>;
    /**
     * The cron schedule for OS patching. This must be in the form of cron syntax. Ex: `0 0 * * *`.
     */
    osPatchSchedule?: pulumi.Input<string>;
    /**
     * The pause agent upgrades setting allows to control the automatic upgrade of the Palette component and agent for an
     * individual cluster. The default value is `unlock`, meaning upgrades occur automatically. Setting it to `lock` pauses
     * automatic agent upgrades for the cluster.
     */
    pauseAgentUpgrades?: pulumi.Input<string>;
    /**
     * To authorize the cluster repave, set the value to `Approved` for approval and `""` to decline. Default value is `""`.
     */
    reviewRepaveState?: pulumi.Input<string>;
    /**
     * The scan policy for the cluster.
     */
    scanPolicy?: pulumi.Input<inputs.ClusterEdgeNativeScanPolicy>;
    /**
     * If `true`, the cluster will be created asynchronously. Default value is `false`.
     */
    skipCompletion?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the cluster. Tags must be in the form of `key:value`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ClusterEdgeNativeTimeouts>;
}
