// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeInstanceGroupManager extends pulumi.CustomResource {
    /**
     * Get an existing ComputeInstanceGroupManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeInstanceGroupManagerState, opts?: pulumi.CustomResourceOptions): ComputeInstanceGroupManager {
        return new ComputeInstanceGroupManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeInstanceGroupManager:ComputeInstanceGroupManager';

    /**
     * Returns true if the given object is an instance of ComputeInstanceGroupManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeInstanceGroupManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeInstanceGroupManager.__pulumiType;
    }

    /**
     * Specifies configuration that overrides the instance template configuration for the group.
     */
    public readonly allInstancesConfig!: pulumi.Output<outputs.ComputeInstanceGroupManagerAllInstancesConfig | undefined>;
    /**
     * The autohealing policies for this managed instance group. You can specify only one value.
     */
    public readonly autoHealingPolicies!: pulumi.Output<outputs.ComputeInstanceGroupManagerAutoHealingPolicies | undefined>;
    /**
     * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters
     * are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character
     * string to the base instance name.
     */
    public readonly baseInstanceName!: pulumi.Output<string>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly creationTimestamp!: pulumi.Output<string>;
    /**
     * An optional textual description of the instance group manager.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The fingerprint of the instance group manager.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    /**
     * The full URL of the instance group created by the manager.
     */
    public /*out*/ readonly instanceGroup!: pulumi.Output<string>;
    /**
     * The instance lifecycle policy for this managed instance group.
     */
    public readonly instanceLifecyclePolicy!: pulumi.Output<outputs.ComputeInstanceGroupManagerInstanceLifecyclePolicy | undefined>;
    /**
     * Pagination behavior of the listManagedInstances API method for this managed instance group. Valid values are:
     * "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method.
     * maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED,
     * pagination is enabled, maxResults and pageToken query parameters are respected.
     */
    public readonly listManagedInstancesResults!: pulumi.Output<string | undefined>;
    /**
     * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters
     * include lowercase letters, numbers, and hyphens.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The named port configuration.
     */
    public readonly namedPorts!: pulumi.Output<outputs.ComputeInstanceGroupManagerNamedPort[] | undefined>;
    public /*out*/ readonly operation!: pulumi.Output<string>;
    /**
     * Input only additional params for instance group manager creation.
     */
    public readonly params!: pulumi.Output<outputs.ComputeInstanceGroupManagerParams | undefined>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The URL of the created resource.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * Standby policy for stopped and suspended instances.
     */
    public readonly standbyPolicy!: pulumi.Output<outputs.ComputeInstanceGroupManagerStandbyPolicy | undefined>;
    /**
     * Disks created on the instances that will be preserved on instance delete, update, etc.
     */
    public readonly statefulDisks!: pulumi.Output<outputs.ComputeInstanceGroupManagerStatefulDisk[] | undefined>;
    /**
     * External IPs considered stateful by the instance group.
     */
    public readonly statefulExternalIps!: pulumi.Output<outputs.ComputeInstanceGroupManagerStatefulExternalIp[] | undefined>;
    /**
     * External IPs considered stateful by the instance group.
     */
    public readonly statefulInternalIps!: pulumi.Output<outputs.ComputeInstanceGroupManagerStatefulInternalIp[] | undefined>;
    /**
     * The status of this managed instance group.
     */
    public /*out*/ readonly statuses!: pulumi.Output<outputs.ComputeInstanceGroupManagerStatus[]>;
    /**
     * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does
     * not affect existing instances.
     */
    public readonly targetPools!: pulumi.Output<string[] | undefined>;
    /**
     * The target number of running instances for this managed instance group. This value should always be explicitly set
     * unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
     */
    public readonly targetSize!: pulumi.Output<number>;
    /**
     * The target number of stopped instances for this managed instance group.
     */
    public readonly targetStoppedSize!: pulumi.Output<number>;
    /**
     * The target number of suspended instances for this managed instance group.
     */
    public readonly targetSuspendedSize!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeInstanceGroupManagerTimeouts | undefined>;
    /**
     * The update policy for this managed instance group.
     */
    public readonly updatePolicy!: pulumi.Output<outputs.ComputeInstanceGroupManagerUpdatePolicy | undefined>;
    /**
     * Application versions managed by this instance group. Each version deals with a specific instance template, allowing
     * canary release scenarios.
     */
    public readonly versions!: pulumi.Output<outputs.ComputeInstanceGroupManagerVersion[]>;
    public readonly waitForInstances!: pulumi.Output<boolean | undefined>;
    /**
     * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait
     * until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached
     * and any per instance configs to be effective and all instances configs to be effective as well as all instances to be
     * stable before returning.
     */
    public readonly waitForInstancesStatus!: pulumi.Output<string | undefined>;
    /**
     * The zone that instances in this group should be created in.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ComputeInstanceGroupManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeInstanceGroupManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeInstanceGroupManagerArgs | ComputeInstanceGroupManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeInstanceGroupManagerState | undefined;
            resourceInputs["allInstancesConfig"] = state ? state.allInstancesConfig : undefined;
            resourceInputs["autoHealingPolicies"] = state ? state.autoHealingPolicies : undefined;
            resourceInputs["baseInstanceName"] = state ? state.baseInstanceName : undefined;
            resourceInputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["instanceGroup"] = state ? state.instanceGroup : undefined;
            resourceInputs["instanceLifecyclePolicy"] = state ? state.instanceLifecyclePolicy : undefined;
            resourceInputs["listManagedInstancesResults"] = state ? state.listManagedInstancesResults : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namedPorts"] = state ? state.namedPorts : undefined;
            resourceInputs["operation"] = state ? state.operation : undefined;
            resourceInputs["params"] = state ? state.params : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["standbyPolicy"] = state ? state.standbyPolicy : undefined;
            resourceInputs["statefulDisks"] = state ? state.statefulDisks : undefined;
            resourceInputs["statefulExternalIps"] = state ? state.statefulExternalIps : undefined;
            resourceInputs["statefulInternalIps"] = state ? state.statefulInternalIps : undefined;
            resourceInputs["statuses"] = state ? state.statuses : undefined;
            resourceInputs["targetPools"] = state ? state.targetPools : undefined;
            resourceInputs["targetSize"] = state ? state.targetSize : undefined;
            resourceInputs["targetStoppedSize"] = state ? state.targetStoppedSize : undefined;
            resourceInputs["targetSuspendedSize"] = state ? state.targetSuspendedSize : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatePolicy"] = state ? state.updatePolicy : undefined;
            resourceInputs["versions"] = state ? state.versions : undefined;
            resourceInputs["waitForInstances"] = state ? state.waitForInstances : undefined;
            resourceInputs["waitForInstancesStatus"] = state ? state.waitForInstancesStatus : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ComputeInstanceGroupManagerArgs | undefined;
            if ((!args || args.baseInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseInstanceName'");
            }
            if ((!args || args.versions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versions'");
            }
            resourceInputs["allInstancesConfig"] = args ? args.allInstancesConfig : undefined;
            resourceInputs["autoHealingPolicies"] = args ? args.autoHealingPolicies : undefined;
            resourceInputs["baseInstanceName"] = args ? args.baseInstanceName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceLifecyclePolicy"] = args ? args.instanceLifecyclePolicy : undefined;
            resourceInputs["listManagedInstancesResults"] = args ? args.listManagedInstancesResults : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namedPorts"] = args ? args.namedPorts : undefined;
            resourceInputs["params"] = args ? args.params : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["standbyPolicy"] = args ? args.standbyPolicy : undefined;
            resourceInputs["statefulDisks"] = args ? args.statefulDisks : undefined;
            resourceInputs["statefulExternalIps"] = args ? args.statefulExternalIps : undefined;
            resourceInputs["statefulInternalIps"] = args ? args.statefulInternalIps : undefined;
            resourceInputs["targetPools"] = args ? args.targetPools : undefined;
            resourceInputs["targetSize"] = args ? args.targetSize : undefined;
            resourceInputs["targetStoppedSize"] = args ? args.targetStoppedSize : undefined;
            resourceInputs["targetSuspendedSize"] = args ? args.targetSuspendedSize : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["updatePolicy"] = args ? args.updatePolicy : undefined;
            resourceInputs["versions"] = args ? args.versions : undefined;
            resourceInputs["waitForInstances"] = args ? args.waitForInstances : undefined;
            resourceInputs["waitForInstancesStatus"] = args ? args.waitForInstancesStatus : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["creationTimestamp"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["instanceGroup"] = undefined /*out*/;
            resourceInputs["operation"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeInstanceGroupManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeInstanceGroupManager resources.
 */
export interface ComputeInstanceGroupManagerState {
    /**
     * Specifies configuration that overrides the instance template configuration for the group.
     */
    allInstancesConfig?: pulumi.Input<inputs.ComputeInstanceGroupManagerAllInstancesConfig>;
    /**
     * The autohealing policies for this managed instance group. You can specify only one value.
     */
    autoHealingPolicies?: pulumi.Input<inputs.ComputeInstanceGroupManagerAutoHealingPolicies>;
    /**
     * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters
     * are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character
     * string to the base instance name.
     */
    baseInstanceName?: pulumi.Input<string>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: pulumi.Input<string>;
    /**
     * An optional textual description of the instance group manager.
     */
    description?: pulumi.Input<string>;
    /**
     * The fingerprint of the instance group manager.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * The full URL of the instance group created by the manager.
     */
    instanceGroup?: pulumi.Input<string>;
    /**
     * The instance lifecycle policy for this managed instance group.
     */
    instanceLifecyclePolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerInstanceLifecyclePolicy>;
    /**
     * Pagination behavior of the listManagedInstances API method for this managed instance group. Valid values are:
     * "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method.
     * maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED,
     * pagination is enabled, maxResults and pageToken query parameters are respected.
     */
    listManagedInstancesResults?: pulumi.Input<string>;
    /**
     * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters
     * include lowercase letters, numbers, and hyphens.
     */
    name?: pulumi.Input<string>;
    /**
     * The named port configuration.
     */
    namedPorts?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerNamedPort>[]>;
    operation?: pulumi.Input<string>;
    /**
     * Input only additional params for instance group manager creation.
     */
    params?: pulumi.Input<inputs.ComputeInstanceGroupManagerParams>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * The URL of the created resource.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * Standby policy for stopped and suspended instances.
     */
    standbyPolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerStandbyPolicy>;
    /**
     * Disks created on the instances that will be preserved on instance delete, update, etc.
     */
    statefulDisks?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulDisk>[]>;
    /**
     * External IPs considered stateful by the instance group.
     */
    statefulExternalIps?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulExternalIp>[]>;
    /**
     * External IPs considered stateful by the instance group.
     */
    statefulInternalIps?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulInternalIp>[]>;
    /**
     * The status of this managed instance group.
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatus>[]>;
    /**
     * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does
     * not affect existing instances.
     */
    targetPools?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The target number of running instances for this managed instance group. This value should always be explicitly set
     * unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
     */
    targetSize?: pulumi.Input<number>;
    /**
     * The target number of stopped instances for this managed instance group.
     */
    targetStoppedSize?: pulumi.Input<number>;
    /**
     * The target number of suspended instances for this managed instance group.
     */
    targetSuspendedSize?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceGroupManagerTimeouts>;
    /**
     * The update policy for this managed instance group.
     */
    updatePolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerUpdatePolicy>;
    /**
     * Application versions managed by this instance group. Each version deals with a specific instance template, allowing
     * canary release scenarios.
     */
    versions?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerVersion>[]>;
    waitForInstances?: pulumi.Input<boolean>;
    /**
     * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait
     * until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached
     * and any per instance configs to be effective and all instances configs to be effective as well as all instances to be
     * stable before returning.
     */
    waitForInstancesStatus?: pulumi.Input<string>;
    /**
     * The zone that instances in this group should be created in.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeInstanceGroupManager resource.
 */
export interface ComputeInstanceGroupManagerArgs {
    /**
     * Specifies configuration that overrides the instance template configuration for the group.
     */
    allInstancesConfig?: pulumi.Input<inputs.ComputeInstanceGroupManagerAllInstancesConfig>;
    /**
     * The autohealing policies for this managed instance group. You can specify only one value.
     */
    autoHealingPolicies?: pulumi.Input<inputs.ComputeInstanceGroupManagerAutoHealingPolicies>;
    /**
     * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters
     * are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character
     * string to the base instance name.
     */
    baseInstanceName: pulumi.Input<string>;
    /**
     * An optional textual description of the instance group manager.
     */
    description?: pulumi.Input<string>;
    /**
     * The instance lifecycle policy for this managed instance group.
     */
    instanceLifecyclePolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerInstanceLifecyclePolicy>;
    /**
     * Pagination behavior of the listManagedInstances API method for this managed instance group. Valid values are:
     * "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method.
     * maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED,
     * pagination is enabled, maxResults and pageToken query parameters are respected.
     */
    listManagedInstancesResults?: pulumi.Input<string>;
    /**
     * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters
     * include lowercase letters, numbers, and hyphens.
     */
    name?: pulumi.Input<string>;
    /**
     * The named port configuration.
     */
    namedPorts?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerNamedPort>[]>;
    /**
     * Input only additional params for instance group manager creation.
     */
    params?: pulumi.Input<inputs.ComputeInstanceGroupManagerParams>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * Standby policy for stopped and suspended instances.
     */
    standbyPolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerStandbyPolicy>;
    /**
     * Disks created on the instances that will be preserved on instance delete, update, etc.
     */
    statefulDisks?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulDisk>[]>;
    /**
     * External IPs considered stateful by the instance group.
     */
    statefulExternalIps?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulExternalIp>[]>;
    /**
     * External IPs considered stateful by the instance group.
     */
    statefulInternalIps?: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerStatefulInternalIp>[]>;
    /**
     * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does
     * not affect existing instances.
     */
    targetPools?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The target number of running instances for this managed instance group. This value should always be explicitly set
     * unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
     */
    targetSize?: pulumi.Input<number>;
    /**
     * The target number of stopped instances for this managed instance group.
     */
    targetStoppedSize?: pulumi.Input<number>;
    /**
     * The target number of suspended instances for this managed instance group.
     */
    targetSuspendedSize?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ComputeInstanceGroupManagerTimeouts>;
    /**
     * The update policy for this managed instance group.
     */
    updatePolicy?: pulumi.Input<inputs.ComputeInstanceGroupManagerUpdatePolicy>;
    /**
     * Application versions managed by this instance group. Each version deals with a specific instance template, allowing
     * canary release scenarios.
     */
    versions: pulumi.Input<pulumi.Input<inputs.ComputeInstanceGroupManagerVersion>[]>;
    waitForInstances?: pulumi.Input<boolean>;
    /**
     * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait
     * until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached
     * and any per instance configs to be effective and all instances configs to be effective as well as all instances to be
     * stable before returning.
     */
    waitForInstancesStatus?: pulumi.Input<string>;
    /**
     * The zone that instances in this group should be created in.
     */
    zone?: pulumi.Input<string>;
}
