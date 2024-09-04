// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PartitionSharedVlan extends pulumi.CustomResource {
    /**
     * Get an existing PartitionSharedVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PartitionSharedVlanState, opts?: pulumi.CustomResourceOptions): PartitionSharedVlan {
        return new PartitionSharedVlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/partitionSharedVlan:PartitionSharedVlan';

    /**
     * Returns true if the given object is an instance of PartitionSharedVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PartitionSharedVlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PartitionSharedVlan.__pulumiType;
    }

    public readonly allowableIpRanges!: pulumi.Output<outputs.PartitionSharedVlanAllowableIpRange[] | undefined>;
    public readonly allowableIpv6Ranges!: pulumi.Output<outputs.PartitionSharedVlanAllowableIpv6Range[] | undefined>;
    /**
     * IPv4 Address for Shared VLAN Mgmt IP Address
     */
    public readonly mgmtFloatingIpAddress!: pulumi.Output<string | undefined>;
    /**
     * PartitionName
     */
    public readonly partitionName!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly vlan!: pulumi.Output<number | undefined>;
    /**
     * Specify VRRP-A vrid
     */
    public readonly vrid!: pulumi.Output<number | undefined>;

    /**
     * Create a PartitionSharedVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartitionSharedVlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PartitionSharedVlanArgs | PartitionSharedVlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PartitionSharedVlanState | undefined;
            resourceInputs["allowableIpRanges"] = state ? state.allowableIpRanges : undefined;
            resourceInputs["allowableIpv6Ranges"] = state ? state.allowableIpv6Ranges : undefined;
            resourceInputs["mgmtFloatingIpAddress"] = state ? state.mgmtFloatingIpAddress : undefined;
            resourceInputs["partitionName"] = state ? state.partitionName : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
            resourceInputs["vrid"] = state ? state.vrid : undefined;
        } else {
            const args = argsOrState as PartitionSharedVlanArgs | undefined;
            if ((!args || args.partitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partitionName'");
            }
            resourceInputs["allowableIpRanges"] = args ? args.allowableIpRanges : undefined;
            resourceInputs["allowableIpv6Ranges"] = args ? args.allowableIpv6Ranges : undefined;
            resourceInputs["mgmtFloatingIpAddress"] = args ? args.mgmtFloatingIpAddress : undefined;
            resourceInputs["partitionName"] = args ? args.partitionName : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
            resourceInputs["vrid"] = args ? args.vrid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PartitionSharedVlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PartitionSharedVlan resources.
 */
export interface PartitionSharedVlanState {
    allowableIpRanges?: pulumi.Input<pulumi.Input<inputs.PartitionSharedVlanAllowableIpRange>[]>;
    allowableIpv6Ranges?: pulumi.Input<pulumi.Input<inputs.PartitionSharedVlanAllowableIpv6Range>[]>;
    /**
     * IPv4 Address for Shared VLAN Mgmt IP Address
     */
    mgmtFloatingIpAddress?: pulumi.Input<string>;
    /**
     * PartitionName
     */
    partitionName?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
    /**
     * Specify VRRP-A vrid
     */
    vrid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a PartitionSharedVlan resource.
 */
export interface PartitionSharedVlanArgs {
    allowableIpRanges?: pulumi.Input<pulumi.Input<inputs.PartitionSharedVlanAllowableIpRange>[]>;
    allowableIpv6Ranges?: pulumi.Input<pulumi.Input<inputs.PartitionSharedVlanAllowableIpv6Range>[]>;
    /**
     * IPv4 Address for Shared VLAN Mgmt IP Address
     */
    mgmtFloatingIpAddress?: pulumi.Input<string>;
    /**
     * PartitionName
     */
    partitionName: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
    /**
     * Specify VRRP-A vrid
     */
    vrid?: pulumi.Input<number>;
}
