// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AsScalingGroup extends pulumi.CustomResource {
    /**
     * Get an existing AsScalingGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AsScalingGroupState, opts?: pulumi.CustomResourceOptions): AsScalingGroup {
        return new AsScalingGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/asScalingGroup:AsScalingGroup';

    /**
     * Returns true if the given object is an instance of AsScalingGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AsScalingGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AsScalingGroup.__pulumiType;
    }

    /**
     * An available ID for a launch configuration.
     */
    public readonly configurationId!: pulumi.Output<string>;
    /**
     * The time when the AS group was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Default cooldown time in second, and default value is `300`.
     */
    public readonly defaultCooldown!: pulumi.Output<number | undefined>;
    /**
     * Desired volume of CVM instances, which is between `max_size` and `min_size`.
     */
    public readonly desiredCapacity!: pulumi.Output<number>;
    /**
     * List of application load balancers, which can't be specified with `load_balancer_ids` together.
     */
    public readonly forwardBalancerIds!: pulumi.Output<outputs.AsScalingGroupForwardBalancerId[] | undefined>;
    /**
     * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the
     * network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information,
     * see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB:
     * confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check
     * Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).<br>If the parameter is set to
     * `CLB`, the scaling group will check both the network status and the CLB health check status. If the network check
     * indicates unhealthy, the `HealthStatus` field will return `UNHEALTHY`. If the CLB health check indicates unhealthy, the
     * `HealthStatus` field will return `CLB_UNHEALTHY`. If both checks indicate unhealthy, the `HealthStatus` field will
     * return `UNHEALTHY|CLB_UNHEALTHY`. Default value: `CLB`.
     */
    public readonly healthCheckType!: pulumi.Output<string>;
    /**
     * Instance number of a scaling group.
     */
    public /*out*/ readonly instanceCount!: pulumi.Output<number>;
    /**
     * Grace period of the CLB health check during which the `IN_SERVICE` instances added will not be marked as
     * `CLB_UNHEALTHY`.<br>Valid range: 0-7200, in seconds. Default value: `0`.
     */
    public readonly lbHealthCheckGracePeriod!: pulumi.Output<number>;
    /**
     * ID list of traditional load balancers.
     */
    public readonly loadBalancerIds!: pulumi.Output<string[] | undefined>;
    /**
     * Maximum number of CVM instances. Valid value ranges: (0~2000).
     */
    public readonly maxSize!: pulumi.Output<number>;
    /**
     * Minimum number of CVM instances. Valid value ranges: (0~2000).
     */
    public readonly minSize!: pulumi.Output<number>;
    /**
     * Multi zone or subnet strategy, Valid values: PRIORITY and EQUALITY.
     */
    public readonly multiZoneSubnetPolicy!: pulumi.Output<string | undefined>;
    /**
     * Specifies to which project the scaling group belongs.
     */
    public readonly projectId!: pulumi.Output<number | undefined>;
    /**
     * Enable unhealthy instance replacement. If set to `true`, AS will replace instances that are found unhealthy in the CLB
     * health check.
     */
    public readonly replaceLoadBalancerUnhealthy!: pulumi.Output<boolean | undefined>;
    /**
     * Enables unhealthy instance replacement. If set to `true`, AS will replace instances that are flagged as unhealthy by
     * Cloud Monitor.
     */
    public readonly replaceMonitorUnhealthy!: pulumi.Output<boolean | undefined>;
    /**
     * Available values for retry policies. Valid values: IMMEDIATE_RETRY and INCREMENTAL_INTERVALS.
     */
    public readonly retryPolicy!: pulumi.Output<string | undefined>;
    /**
     * Name of a scaling group.
     */
    public readonly scalingGroupName!: pulumi.Output<string>;
    /**
     * Indicates scaling mode which creates and terminates instances (classic method), or method first tries to start stopped
     * instances (wake up stopped) to perform scaling operations. Available values: `CLASSIC_SCALING`,
     * `WAKE_UP_STOPPED_SCALING`. Default: `CLASSIC_SCALING`.
     */
    public readonly scalingMode!: pulumi.Output<string | undefined>;
    /**
     * Current status of a scaling group.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * ID list of subnet, and for VPC it is required.
     */
    public readonly subnetIds!: pulumi.Output<string[] | undefined>;
    /**
     * Tags of a scaling group.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Available values for termination policies. Valid values: OLDEST_INSTANCE and NEWEST_INSTANCE.
     */
    public readonly terminationPolicies!: pulumi.Output<string[]>;
    /**
     * ID of VPC network.
     */
    public readonly vpcId!: pulumi.Output<string>;
    /**
     * List of available zones, for Basic network it is required.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a AsScalingGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AsScalingGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AsScalingGroupArgs | AsScalingGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AsScalingGroupState | undefined;
            resourceInputs["configurationId"] = state ? state.configurationId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["defaultCooldown"] = state ? state.defaultCooldown : undefined;
            resourceInputs["desiredCapacity"] = state ? state.desiredCapacity : undefined;
            resourceInputs["forwardBalancerIds"] = state ? state.forwardBalancerIds : undefined;
            resourceInputs["healthCheckType"] = state ? state.healthCheckType : undefined;
            resourceInputs["instanceCount"] = state ? state.instanceCount : undefined;
            resourceInputs["lbHealthCheckGracePeriod"] = state ? state.lbHealthCheckGracePeriod : undefined;
            resourceInputs["loadBalancerIds"] = state ? state.loadBalancerIds : undefined;
            resourceInputs["maxSize"] = state ? state.maxSize : undefined;
            resourceInputs["minSize"] = state ? state.minSize : undefined;
            resourceInputs["multiZoneSubnetPolicy"] = state ? state.multiZoneSubnetPolicy : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["replaceLoadBalancerUnhealthy"] = state ? state.replaceLoadBalancerUnhealthy : undefined;
            resourceInputs["replaceMonitorUnhealthy"] = state ? state.replaceMonitorUnhealthy : undefined;
            resourceInputs["retryPolicy"] = state ? state.retryPolicy : undefined;
            resourceInputs["scalingGroupName"] = state ? state.scalingGroupName : undefined;
            resourceInputs["scalingMode"] = state ? state.scalingMode : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["terminationPolicies"] = state ? state.terminationPolicies : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as AsScalingGroupArgs | undefined;
            if ((!args || args.configurationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationId'");
            }
            if ((!args || args.maxSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxSize'");
            }
            if ((!args || args.minSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minSize'");
            }
            if ((!args || args.scalingGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingGroupName'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["configurationId"] = args ? args.configurationId : undefined;
            resourceInputs["defaultCooldown"] = args ? args.defaultCooldown : undefined;
            resourceInputs["desiredCapacity"] = args ? args.desiredCapacity : undefined;
            resourceInputs["forwardBalancerIds"] = args ? args.forwardBalancerIds : undefined;
            resourceInputs["healthCheckType"] = args ? args.healthCheckType : undefined;
            resourceInputs["lbHealthCheckGracePeriod"] = args ? args.lbHealthCheckGracePeriod : undefined;
            resourceInputs["loadBalancerIds"] = args ? args.loadBalancerIds : undefined;
            resourceInputs["maxSize"] = args ? args.maxSize : undefined;
            resourceInputs["minSize"] = args ? args.minSize : undefined;
            resourceInputs["multiZoneSubnetPolicy"] = args ? args.multiZoneSubnetPolicy : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["replaceLoadBalancerUnhealthy"] = args ? args.replaceLoadBalancerUnhealthy : undefined;
            resourceInputs["replaceMonitorUnhealthy"] = args ? args.replaceMonitorUnhealthy : undefined;
            resourceInputs["retryPolicy"] = args ? args.retryPolicy : undefined;
            resourceInputs["scalingGroupName"] = args ? args.scalingGroupName : undefined;
            resourceInputs["scalingMode"] = args ? args.scalingMode : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["terminationPolicies"] = args ? args.terminationPolicies : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["instanceCount"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AsScalingGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AsScalingGroup resources.
 */
export interface AsScalingGroupState {
    /**
     * An available ID for a launch configuration.
     */
    configurationId?: pulumi.Input<string>;
    /**
     * The time when the AS group was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Default cooldown time in second, and default value is `300`.
     */
    defaultCooldown?: pulumi.Input<number>;
    /**
     * Desired volume of CVM instances, which is between `max_size` and `min_size`.
     */
    desiredCapacity?: pulumi.Input<number>;
    /**
     * List of application load balancers, which can't be specified with `load_balancer_ids` together.
     */
    forwardBalancerIds?: pulumi.Input<pulumi.Input<inputs.AsScalingGroupForwardBalancerId>[]>;
    /**
     * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the
     * network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information,
     * see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB:
     * confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check
     * Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).<br>If the parameter is set to
     * `CLB`, the scaling group will check both the network status and the CLB health check status. If the network check
     * indicates unhealthy, the `HealthStatus` field will return `UNHEALTHY`. If the CLB health check indicates unhealthy, the
     * `HealthStatus` field will return `CLB_UNHEALTHY`. If both checks indicate unhealthy, the `HealthStatus` field will
     * return `UNHEALTHY|CLB_UNHEALTHY`. Default value: `CLB`.
     */
    healthCheckType?: pulumi.Input<string>;
    /**
     * Instance number of a scaling group.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Grace period of the CLB health check during which the `IN_SERVICE` instances added will not be marked as
     * `CLB_UNHEALTHY`.<br>Valid range: 0-7200, in seconds. Default value: `0`.
     */
    lbHealthCheckGracePeriod?: pulumi.Input<number>;
    /**
     * ID list of traditional load balancers.
     */
    loadBalancerIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum number of CVM instances. Valid value ranges: (0~2000).
     */
    maxSize?: pulumi.Input<number>;
    /**
     * Minimum number of CVM instances. Valid value ranges: (0~2000).
     */
    minSize?: pulumi.Input<number>;
    /**
     * Multi zone or subnet strategy, Valid values: PRIORITY and EQUALITY.
     */
    multiZoneSubnetPolicy?: pulumi.Input<string>;
    /**
     * Specifies to which project the scaling group belongs.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Enable unhealthy instance replacement. If set to `true`, AS will replace instances that are found unhealthy in the CLB
     * health check.
     */
    replaceLoadBalancerUnhealthy?: pulumi.Input<boolean>;
    /**
     * Enables unhealthy instance replacement. If set to `true`, AS will replace instances that are flagged as unhealthy by
     * Cloud Monitor.
     */
    replaceMonitorUnhealthy?: pulumi.Input<boolean>;
    /**
     * Available values for retry policies. Valid values: IMMEDIATE_RETRY and INCREMENTAL_INTERVALS.
     */
    retryPolicy?: pulumi.Input<string>;
    /**
     * Name of a scaling group.
     */
    scalingGroupName?: pulumi.Input<string>;
    /**
     * Indicates scaling mode which creates and terminates instances (classic method), or method first tries to start stopped
     * instances (wake up stopped) to perform scaling operations. Available values: `CLASSIC_SCALING`,
     * `WAKE_UP_STOPPED_SCALING`. Default: `CLASSIC_SCALING`.
     */
    scalingMode?: pulumi.Input<string>;
    /**
     * Current status of a scaling group.
     */
    status?: pulumi.Input<string>;
    /**
     * ID list of subnet, and for VPC it is required.
     */
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags of a scaling group.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Available values for termination policies. Valid values: OLDEST_INSTANCE and NEWEST_INSTANCE.
     */
    terminationPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of VPC network.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * List of available zones, for Basic network it is required.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a AsScalingGroup resource.
 */
export interface AsScalingGroupArgs {
    /**
     * An available ID for a launch configuration.
     */
    configurationId: pulumi.Input<string>;
    /**
     * Default cooldown time in second, and default value is `300`.
     */
    defaultCooldown?: pulumi.Input<number>;
    /**
     * Desired volume of CVM instances, which is between `max_size` and `min_size`.
     */
    desiredCapacity?: pulumi.Input<number>;
    /**
     * List of application load balancers, which can't be specified with `load_balancer_ids` together.
     */
    forwardBalancerIds?: pulumi.Input<pulumi.Input<inputs.AsScalingGroupForwardBalancerId>[]>;
    /**
     * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the
     * network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information,
     * see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB:
     * confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check
     * Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).<br>If the parameter is set to
     * `CLB`, the scaling group will check both the network status and the CLB health check status. If the network check
     * indicates unhealthy, the `HealthStatus` field will return `UNHEALTHY`. If the CLB health check indicates unhealthy, the
     * `HealthStatus` field will return `CLB_UNHEALTHY`. If both checks indicate unhealthy, the `HealthStatus` field will
     * return `UNHEALTHY|CLB_UNHEALTHY`. Default value: `CLB`.
     */
    healthCheckType?: pulumi.Input<string>;
    /**
     * Grace period of the CLB health check during which the `IN_SERVICE` instances added will not be marked as
     * `CLB_UNHEALTHY`.<br>Valid range: 0-7200, in seconds. Default value: `0`.
     */
    lbHealthCheckGracePeriod?: pulumi.Input<number>;
    /**
     * ID list of traditional load balancers.
     */
    loadBalancerIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum number of CVM instances. Valid value ranges: (0~2000).
     */
    maxSize: pulumi.Input<number>;
    /**
     * Minimum number of CVM instances. Valid value ranges: (0~2000).
     */
    minSize: pulumi.Input<number>;
    /**
     * Multi zone or subnet strategy, Valid values: PRIORITY and EQUALITY.
     */
    multiZoneSubnetPolicy?: pulumi.Input<string>;
    /**
     * Specifies to which project the scaling group belongs.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Enable unhealthy instance replacement. If set to `true`, AS will replace instances that are found unhealthy in the CLB
     * health check.
     */
    replaceLoadBalancerUnhealthy?: pulumi.Input<boolean>;
    /**
     * Enables unhealthy instance replacement. If set to `true`, AS will replace instances that are flagged as unhealthy by
     * Cloud Monitor.
     */
    replaceMonitorUnhealthy?: pulumi.Input<boolean>;
    /**
     * Available values for retry policies. Valid values: IMMEDIATE_RETRY and INCREMENTAL_INTERVALS.
     */
    retryPolicy?: pulumi.Input<string>;
    /**
     * Name of a scaling group.
     */
    scalingGroupName: pulumi.Input<string>;
    /**
     * Indicates scaling mode which creates and terminates instances (classic method), or method first tries to start stopped
     * instances (wake up stopped) to perform scaling operations. Available values: `CLASSIC_SCALING`,
     * `WAKE_UP_STOPPED_SCALING`. Default: `CLASSIC_SCALING`.
     */
    scalingMode?: pulumi.Input<string>;
    /**
     * ID list of subnet, and for VPC it is required.
     */
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags of a scaling group.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Available values for termination policies. Valid values: OLDEST_INSTANCE and NEWEST_INSTANCE.
     */
    terminationPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of VPC network.
     */
    vpcId: pulumi.Input<string>;
    /**
     * List of available zones, for Basic network it is required.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
