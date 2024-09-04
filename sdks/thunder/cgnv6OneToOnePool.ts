// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6OneToOnePool extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6OneToOnePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6OneToOnePoolState, opts?: pulumi.CustomResourceOptions): Cgnv6OneToOnePool {
        return new Cgnv6OneToOnePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6OneToOnePool:Cgnv6OneToOnePool';

    /**
     * Returns true if the given object is an instance of Cgnv6OneToOnePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6OneToOnePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6OneToOnePool.__pulumiType;
    }

    /**
     * Configure end IP address of NAT pool
     */
    public readonly endAddress!: pulumi.Output<string | undefined>;
    /**
     * Share with a partition group (Partition Group Name)
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * Configure mask for pool
     */
    public readonly netmask!: pulumi.Output<string | undefined>;
    /**
     * Share with a single partition (Partition Name)
     */
    public readonly partition!: pulumi.Output<string | undefined>;
    /**
     * Specify pool name or pool group
     */
    public readonly poolName!: pulumi.Output<string>;
    /**
     * Share this pool with other partitions (default: not shared)
     */
    public readonly shared!: pulumi.Output<number | undefined>;
    /**
     * Configure start IP address of NAT pool
     */
    public readonly startAddress!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Configure VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    public readonly vrid!: pulumi.Output<number | undefined>;

    /**
     * Create a Cgnv6OneToOnePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6OneToOnePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6OneToOnePoolArgs | Cgnv6OneToOnePoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6OneToOnePoolState | undefined;
            resourceInputs["endAddress"] = state ? state.endAddress : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["partition"] = state ? state.partition : undefined;
            resourceInputs["poolName"] = state ? state.poolName : undefined;
            resourceInputs["shared"] = state ? state.shared : undefined;
            resourceInputs["startAddress"] = state ? state.startAddress : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vrid"] = state ? state.vrid : undefined;
        } else {
            const args = argsOrState as Cgnv6OneToOnePoolArgs | undefined;
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            resourceInputs["endAddress"] = args ? args.endAddress : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["partition"] = args ? args.partition : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["shared"] = args ? args.shared : undefined;
            resourceInputs["startAddress"] = args ? args.startAddress : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vrid"] = args ? args.vrid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6OneToOnePool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6OneToOnePool resources.
 */
export interface Cgnv6OneToOnePoolState {
    /**
     * Configure end IP address of NAT pool
     */
    endAddress?: pulumi.Input<string>;
    /**
     * Share with a partition group (Partition Group Name)
     */
    group?: pulumi.Input<string>;
    /**
     * Configure mask for pool
     */
    netmask?: pulumi.Input<string>;
    /**
     * Share with a single partition (Partition Name)
     */
    partition?: pulumi.Input<string>;
    /**
     * Specify pool name or pool group
     */
    poolName?: pulumi.Input<string>;
    /**
     * Share this pool with other partitions (default: not shared)
     */
    shared?: pulumi.Input<number>;
    /**
     * Configure start IP address of NAT pool
     */
    startAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Configure VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    vrid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Cgnv6OneToOnePool resource.
 */
export interface Cgnv6OneToOnePoolArgs {
    /**
     * Configure end IP address of NAT pool
     */
    endAddress?: pulumi.Input<string>;
    /**
     * Share with a partition group (Partition Group Name)
     */
    group?: pulumi.Input<string>;
    /**
     * Configure mask for pool
     */
    netmask?: pulumi.Input<string>;
    /**
     * Share with a single partition (Partition Name)
     */
    partition?: pulumi.Input<string>;
    /**
     * Specify pool name or pool group
     */
    poolName: pulumi.Input<string>;
    /**
     * Share this pool with other partitions (default: not shared)
     */
    shared?: pulumi.Input<number>;
    /**
     * Configure start IP address of NAT pool
     */
    startAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Configure VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    vrid?: pulumi.Input<number>;
}
