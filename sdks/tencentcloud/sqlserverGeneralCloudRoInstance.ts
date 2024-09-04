// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SqlserverGeneralCloudRoInstance extends pulumi.CustomResource {
    /**
     * Get an existing SqlserverGeneralCloudRoInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlserverGeneralCloudRoInstanceState, opts?: pulumi.CustomResourceOptions): SqlserverGeneralCloudRoInstance {
        return new SqlserverGeneralCloudRoInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sqlserverGeneralCloudRoInstance:SqlserverGeneralCloudRoInstance';

    /**
     * Returns true if the given object is an instance of SqlserverGeneralCloudRoInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlserverGeneralCloudRoInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlserverGeneralCloudRoInstance.__pulumiType;
    }

    /**
     * System character set collation, default: Chinese_PRC_CI_AS.
     */
    public readonly collation!: pulumi.Output<string | undefined>;
    /**
     * Number of instance cores.
     */
    public readonly cpu!: pulumi.Output<number>;
    /**
     * Payment mode, the value supports PREPAID (prepaid), POSTPAID (postpaid).
     */
    public readonly instanceChargeType!: pulumi.Output<string | undefined>;
    /**
     * Primary instance ID, in the format: mssql-3l3fgqn7.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The host disk type of the purchased instance, CLOUD_HSSD-enhanced SSD cloud disk for virtual machines,
     * CLOUD_TSSD-extremely fast SSD cloud disk for virtual machines, CLOUD_BSSD-universal SSD cloud disk for virtual machines.
     */
    public readonly machineType!: pulumi.Output<string>;
    /**
     * Instance memory size, in GB.
     */
    public readonly memory!: pulumi.Output<number>;
    /**
     * Purchase instance period, the default value is 1, which means one month. The value cannot exceed 48.
     */
    public readonly period!: pulumi.Output<number | undefined>;
    /**
     * Required when ReadOnlyGroupType=3, existing read-only group ID.
     */
    public readonly readOnlyGroupId!: pulumi.Output<string>;
    /**
     * Required when ReadOnlyGroupType=2, whether to enable the delayed elimination function for the newly created read-only
     * group, 1-on, 0-off. When the delay between the read-only replica and the primary instance is greater than the threshold,
     * it will be automatically removed.
     */
    public readonly readOnlyGroupIsOfflineDelay!: pulumi.Output<number>;
    /**
     * Mandatory when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the threshold for delay culling of newly created
     * read-only groups.
     */
    public readonly readOnlyGroupMaxDelayTime!: pulumi.Output<number>;
    /**
     * Required when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the newly created read-only group retains at least
     * the number of read-only replicas after delay elimination.
     */
    public readonly readOnlyGroupMinInGroup!: pulumi.Output<number>;
    /**
     * Required when ReadOnlyGroupType=2, the name of the newly created read-only group.
     */
    public readonly readOnlyGroupName!: pulumi.Output<string>;
    /**
     * Read-only group type option, 1- Ship according to one instance and one read-only group, 2 - Ship after creating a
     * read-only group, all instances are under this read-only group, 3 - All instances shipped are in the existing Some
     * read-only groups below.
     */
    public readonly readOnlyGroupType!: pulumi.Output<number>;
    /**
     * Tag description list.
     */
    public readonly resourceTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Primary read only instance ID, in the format: mssqlro-lbljc5qd.
     */
    public /*out*/ readonly roInstanceId!: pulumi.Output<string>;
    /**
     * Security group list, fill in the security group ID in the form of sg-xxx.
     */
    public readonly securityGroupLists!: pulumi.Output<string[] | undefined>;
    /**
     * Instance disk size, in GB.
     */
    public readonly storage!: pulumi.Output<number>;
    /**
     * VPC subnet ID, in the form of subnet-bdoe83fa; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    public readonly subnetId!: pulumi.Output<string | undefined>;
    /**
     * System time zone, default: China Standard Time.
     */
    public readonly timeZone!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SqlserverGeneralCloudRoInstanceTimeouts | undefined>;
    /**
     * VPC network ID, in the form of vpc-dsp338hz; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    public readonly vpcId!: pulumi.Output<string | undefined>;
    /**
     * Instance Availability Zone, similar to ap-guangzhou-1 (Guangzhou District 1); the instance sales area can be obtained
     * through the interface DescribeZones.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a SqlserverGeneralCloudRoInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlserverGeneralCloudRoInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlserverGeneralCloudRoInstanceArgs | SqlserverGeneralCloudRoInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlserverGeneralCloudRoInstanceState | undefined;
            resourceInputs["collation"] = state ? state.collation : undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["instanceChargeType"] = state ? state.instanceChargeType : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["machineType"] = state ? state.machineType : undefined;
            resourceInputs["memory"] = state ? state.memory : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["readOnlyGroupId"] = state ? state.readOnlyGroupId : undefined;
            resourceInputs["readOnlyGroupIsOfflineDelay"] = state ? state.readOnlyGroupIsOfflineDelay : undefined;
            resourceInputs["readOnlyGroupMaxDelayTime"] = state ? state.readOnlyGroupMaxDelayTime : undefined;
            resourceInputs["readOnlyGroupMinInGroup"] = state ? state.readOnlyGroupMinInGroup : undefined;
            resourceInputs["readOnlyGroupName"] = state ? state.readOnlyGroupName : undefined;
            resourceInputs["readOnlyGroupType"] = state ? state.readOnlyGroupType : undefined;
            resourceInputs["resourceTags"] = state ? state.resourceTags : undefined;
            resourceInputs["roInstanceId"] = state ? state.roInstanceId : undefined;
            resourceInputs["securityGroupLists"] = state ? state.securityGroupLists : undefined;
            resourceInputs["storage"] = state ? state.storage : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeZone"] = state ? state.timeZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as SqlserverGeneralCloudRoInstanceArgs | undefined;
            if ((!args || args.cpu === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpu'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.machineType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineType'");
            }
            if ((!args || args.memory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memory'");
            }
            if ((!args || args.readOnlyGroupType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'readOnlyGroupType'");
            }
            if ((!args || args.storage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storage'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["instanceChargeType"] = args ? args.instanceChargeType : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["machineType"] = args ? args.machineType : undefined;
            resourceInputs["memory"] = args ? args.memory : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["readOnlyGroupId"] = args ? args.readOnlyGroupId : undefined;
            resourceInputs["readOnlyGroupIsOfflineDelay"] = args ? args.readOnlyGroupIsOfflineDelay : undefined;
            resourceInputs["readOnlyGroupMaxDelayTime"] = args ? args.readOnlyGroupMaxDelayTime : undefined;
            resourceInputs["readOnlyGroupMinInGroup"] = args ? args.readOnlyGroupMinInGroup : undefined;
            resourceInputs["readOnlyGroupName"] = args ? args.readOnlyGroupName : undefined;
            resourceInputs["readOnlyGroupType"] = args ? args.readOnlyGroupType : undefined;
            resourceInputs["resourceTags"] = args ? args.resourceTags : undefined;
            resourceInputs["securityGroupLists"] = args ? args.securityGroupLists : undefined;
            resourceInputs["storage"] = args ? args.storage : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["roInstanceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqlserverGeneralCloudRoInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlserverGeneralCloudRoInstance resources.
 */
export interface SqlserverGeneralCloudRoInstanceState {
    /**
     * System character set collation, default: Chinese_PRC_CI_AS.
     */
    collation?: pulumi.Input<string>;
    /**
     * Number of instance cores.
     */
    cpu?: pulumi.Input<number>;
    /**
     * Payment mode, the value supports PREPAID (prepaid), POSTPAID (postpaid).
     */
    instanceChargeType?: pulumi.Input<string>;
    /**
     * Primary instance ID, in the format: mssql-3l3fgqn7.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The host disk type of the purchased instance, CLOUD_HSSD-enhanced SSD cloud disk for virtual machines,
     * CLOUD_TSSD-extremely fast SSD cloud disk for virtual machines, CLOUD_BSSD-universal SSD cloud disk for virtual machines.
     */
    machineType?: pulumi.Input<string>;
    /**
     * Instance memory size, in GB.
     */
    memory?: pulumi.Input<number>;
    /**
     * Purchase instance period, the default value is 1, which means one month. The value cannot exceed 48.
     */
    period?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=3, existing read-only group ID.
     */
    readOnlyGroupId?: pulumi.Input<string>;
    /**
     * Required when ReadOnlyGroupType=2, whether to enable the delayed elimination function for the newly created read-only
     * group, 1-on, 0-off. When the delay between the read-only replica and the primary instance is greater than the threshold,
     * it will be automatically removed.
     */
    readOnlyGroupIsOfflineDelay?: pulumi.Input<number>;
    /**
     * Mandatory when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the threshold for delay culling of newly created
     * read-only groups.
     */
    readOnlyGroupMaxDelayTime?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the newly created read-only group retains at least
     * the number of read-only replicas after delay elimination.
     */
    readOnlyGroupMinInGroup?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=2, the name of the newly created read-only group.
     */
    readOnlyGroupName?: pulumi.Input<string>;
    /**
     * Read-only group type option, 1- Ship according to one instance and one read-only group, 2 - Ship after creating a
     * read-only group, all instances are under this read-only group, 3 - All instances shipped are in the existing Some
     * read-only groups below.
     */
    readOnlyGroupType?: pulumi.Input<number>;
    /**
     * Tag description list.
     */
    resourceTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Primary read only instance ID, in the format: mssqlro-lbljc5qd.
     */
    roInstanceId?: pulumi.Input<string>;
    /**
     * Security group list, fill in the security group ID in the form of sg-xxx.
     */
    securityGroupLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Instance disk size, in GB.
     */
    storage?: pulumi.Input<number>;
    /**
     * VPC subnet ID, in the form of subnet-bdoe83fa; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * System time zone, default: China Standard Time.
     */
    timeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SqlserverGeneralCloudRoInstanceTimeouts>;
    /**
     * VPC network ID, in the form of vpc-dsp338hz; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * Instance Availability Zone, similar to ap-guangzhou-1 (Guangzhou District 1); the instance sales area can be obtained
     * through the interface DescribeZones.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SqlserverGeneralCloudRoInstance resource.
 */
export interface SqlserverGeneralCloudRoInstanceArgs {
    /**
     * System character set collation, default: Chinese_PRC_CI_AS.
     */
    collation?: pulumi.Input<string>;
    /**
     * Number of instance cores.
     */
    cpu: pulumi.Input<number>;
    /**
     * Payment mode, the value supports PREPAID (prepaid), POSTPAID (postpaid).
     */
    instanceChargeType?: pulumi.Input<string>;
    /**
     * Primary instance ID, in the format: mssql-3l3fgqn7.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The host disk type of the purchased instance, CLOUD_HSSD-enhanced SSD cloud disk for virtual machines,
     * CLOUD_TSSD-extremely fast SSD cloud disk for virtual machines, CLOUD_BSSD-universal SSD cloud disk for virtual machines.
     */
    machineType: pulumi.Input<string>;
    /**
     * Instance memory size, in GB.
     */
    memory: pulumi.Input<number>;
    /**
     * Purchase instance period, the default value is 1, which means one month. The value cannot exceed 48.
     */
    period?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=3, existing read-only group ID.
     */
    readOnlyGroupId?: pulumi.Input<string>;
    /**
     * Required when ReadOnlyGroupType=2, whether to enable the delayed elimination function for the newly created read-only
     * group, 1-on, 0-off. When the delay between the read-only replica and the primary instance is greater than the threshold,
     * it will be automatically removed.
     */
    readOnlyGroupIsOfflineDelay?: pulumi.Input<number>;
    /**
     * Mandatory when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the threshold for delay culling of newly created
     * read-only groups.
     */
    readOnlyGroupMaxDelayTime?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the newly created read-only group retains at least
     * the number of read-only replicas after delay elimination.
     */
    readOnlyGroupMinInGroup?: pulumi.Input<number>;
    /**
     * Required when ReadOnlyGroupType=2, the name of the newly created read-only group.
     */
    readOnlyGroupName?: pulumi.Input<string>;
    /**
     * Read-only group type option, 1- Ship according to one instance and one read-only group, 2 - Ship after creating a
     * read-only group, all instances are under this read-only group, 3 - All instances shipped are in the existing Some
     * read-only groups below.
     */
    readOnlyGroupType: pulumi.Input<number>;
    /**
     * Tag description list.
     */
    resourceTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Security group list, fill in the security group ID in the form of sg-xxx.
     */
    securityGroupLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Instance disk size, in GB.
     */
    storage: pulumi.Input<number>;
    /**
     * VPC subnet ID, in the form of subnet-bdoe83fa; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * System time zone, default: China Standard Time.
     */
    timeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SqlserverGeneralCloudRoInstanceTimeouts>;
    /**
     * VPC network ID, in the form of vpc-dsp338hz; SubnetId and VpcId need to be set at the same time or not set at the same
     * time.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * Instance Availability Zone, similar to ap-guangzhou-1 (Guangzhou District 1); the instance sales area can be obtained
     * through the interface DescribeZones.
     */
    zone: pulumi.Input<string>;
}
