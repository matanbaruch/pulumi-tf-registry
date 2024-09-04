// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Allocation extends pulumi.CustomResource {
    /**
     * Get an existing Allocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AllocationState, opts?: pulumi.CustomResourceOptions): Allocation {
        return new Allocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netris:index/allocation:Allocation';

    /**
     * Returns true if the given object is an instance of Allocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Allocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Allocation.__pulumiType;
    }

    /**
     * Unique name for current allocation.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique prefix for allocation, must not overlap with other allocations.
     */
    public readonly prefix!: pulumi.Output<string>;
    /**
     * ID of tenant. Users of this tenant will be permitted to manage subnets under this allocation.
     */
    public readonly tenantid!: pulumi.Output<number>;
    /**
     * ID of VPC. If not specified, the allocation will be created in the VPC marked as a default.
     */
    public readonly vpcid!: pulumi.Output<number | undefined>;

    /**
     * Create a Allocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AllocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AllocationArgs | AllocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AllocationState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["tenantid"] = state ? state.tenantid : undefined;
            resourceInputs["vpcid"] = state ? state.vpcid : undefined;
        } else {
            const args = argsOrState as AllocationArgs | undefined;
            if ((!args || args.prefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefix'");
            }
            if ((!args || args.tenantid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantid'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["tenantid"] = args ? args.tenantid : undefined;
            resourceInputs["vpcid"] = args ? args.vpcid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Allocation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Allocation resources.
 */
export interface AllocationState {
    /**
     * Unique name for current allocation.
     */
    name?: pulumi.Input<string>;
    /**
     * Unique prefix for allocation, must not overlap with other allocations.
     */
    prefix?: pulumi.Input<string>;
    /**
     * ID of tenant. Users of this tenant will be permitted to manage subnets under this allocation.
     */
    tenantid?: pulumi.Input<number>;
    /**
     * ID of VPC. If not specified, the allocation will be created in the VPC marked as a default.
     */
    vpcid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Allocation resource.
 */
export interface AllocationArgs {
    /**
     * Unique name for current allocation.
     */
    name?: pulumi.Input<string>;
    /**
     * Unique prefix for allocation, must not overlap with other allocations.
     */
    prefix: pulumi.Input<string>;
    /**
     * ID of tenant. Users of this tenant will be permitted to manage subnets under this allocation.
     */
    tenantid: pulumi.Input<number>;
    /**
     * ID of VPC. If not specified, the allocation will be created in the VPC marked as a default.
     */
    vpcid?: pulumi.Input<number>;
}
