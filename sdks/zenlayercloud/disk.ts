// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Disk extends pulumi.CustomResource {
    /**
     * Get an existing Disk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskState, opts?: pulumi.CustomResourceOptions): Disk {
        return new Disk(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zenlayercloud:index/disk:Disk';

    /**
     * Returns true if the given object is an instance of Disk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Disk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Disk.__pulumiType;
    }

    /**
     * The ID of zone that the disk locates at.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The tenancy (time unit is month) of the prepaid disk.
     */
    public readonly chargePrepaidPeriod!: pulumi.Output<number | undefined>;
    /**
     * Charge type of disk.
     */
    public readonly chargeType!: pulumi.Output<string | undefined>;
    /**
     * Create time of the disk.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The size of disk. Unit: GB. The minimum value is 20 GB.
     */
    public readonly diskSize!: pulumi.Output<number>;
    /**
     * Expire time of the disk.
     */
    public /*out*/ readonly expiredTime!: pulumi.Output<string>;
    /**
     * Indicate whether to force delete the data disk. Default is `false`. If set true, the disk will be permanently deleted
     * instead of being moved into the recycle bin.
     */
    public readonly forceDelete!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of instance which the disk attached to.
     */
    public /*out*/ readonly instanceId!: pulumi.Output<string>;
    /**
     * The name of the disk.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The resource group id the disk belongs to.
     */
    public readonly resourceGroupId!: pulumi.Output<string | undefined>;

    /**
     * Create a Disk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiskArgs | DiskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DiskState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["chargePrepaidPeriod"] = state ? state.chargePrepaidPeriod : undefined;
            resourceInputs["chargeType"] = state ? state.chargeType : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["diskSize"] = state ? state.diskSize : undefined;
            resourceInputs["expiredTime"] = state ? state.expiredTime : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
        } else {
            const args = argsOrState as DiskArgs | undefined;
            if ((!args || args.availabilityZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZone'");
            }
            if ((!args || args.diskSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskSize'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["chargePrepaidPeriod"] = args ? args.chargePrepaidPeriod : undefined;
            resourceInputs["chargeType"] = args ? args.chargeType : undefined;
            resourceInputs["diskSize"] = args ? args.diskSize : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["expiredTime"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Disk.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Disk resources.
 */
export interface DiskState {
    /**
     * The ID of zone that the disk locates at.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The tenancy (time unit is month) of the prepaid disk.
     */
    chargePrepaidPeriod?: pulumi.Input<number>;
    /**
     * Charge type of disk.
     */
    chargeType?: pulumi.Input<string>;
    /**
     * Create time of the disk.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The size of disk. Unit: GB. The minimum value is 20 GB.
     */
    diskSize?: pulumi.Input<number>;
    /**
     * Expire time of the disk.
     */
    expiredTime?: pulumi.Input<string>;
    /**
     * Indicate whether to force delete the data disk. Default is `false`. If set true, the disk will be permanently deleted
     * instead of being moved into the recycle bin.
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * The ID of instance which the disk attached to.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The name of the disk.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group id the disk belongs to.
     */
    resourceGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Disk resource.
 */
export interface DiskArgs {
    /**
     * The ID of zone that the disk locates at.
     */
    availabilityZone: pulumi.Input<string>;
    /**
     * The tenancy (time unit is month) of the prepaid disk.
     */
    chargePrepaidPeriod?: pulumi.Input<number>;
    /**
     * Charge type of disk.
     */
    chargeType?: pulumi.Input<string>;
    /**
     * The size of disk. Unit: GB. The minimum value is 20 GB.
     */
    diskSize: pulumi.Input<number>;
    /**
     * Indicate whether to force delete the data disk. Default is `false`. If set true, the disk will be permanently deleted
     * instead of being moved into the recycle bin.
     */
    forceDelete?: pulumi.Input<boolean>;
    /**
     * The name of the disk.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group id the disk belongs to.
     */
    resourceGroupId?: pulumi.Input<string>;
}
