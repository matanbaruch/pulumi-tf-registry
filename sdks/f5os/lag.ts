// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Lag extends pulumi.CustomResource {
    /**
     * Get an existing Lag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LagState, opts?: pulumi.CustomResourceOptions): Lag {
        return new Lag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'f5os:index/lag:Lag';

    /**
     * Returns true if the given object is an instance of Lag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lag.__pulumiType;
    }

    /**
     * The LACP interval of the interface to be created.
     */
    public readonly interval!: pulumi.Output<string>;
    /**
     * List of physical interfaces that are members of the LAG. The members should be present on F5 platform and they shouldn't
     * have any VLANs attached to it
     */
    public readonly members!: pulumi.Output<string[]>;
    /**
     * The LACP mode of the interface to be created.
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Name of the Link Aggregation Group interface (LAG) interface to configure
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configures the VLAN ID to associate with LAG interface. The `native_vlan` parameter is used for untagged traffic.
     */
    public readonly nativeVlan!: pulumi.Output<number | undefined>;
    /**
     * Operational state of the LAG interface.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Configures multiple VLAN IDs to associate with the LAG interface. The `trunk_vlans` parameter is used for tagged traffic
     */
    public readonly trunkVlans!: pulumi.Output<number[] | undefined>;

    /**
     * Create a Lag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LagArgs | LagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LagState | undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nativeVlan"] = state ? state.nativeVlan : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["trunkVlans"] = state ? state.trunkVlans : undefined;
        } else {
            const args = argsOrState as LagArgs | undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nativeVlan"] = args ? args.nativeVlan : undefined;
            resourceInputs["trunkVlans"] = args ? args.trunkVlans : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Lag resources.
 */
export interface LagState {
    /**
     * The LACP interval of the interface to be created.
     */
    interval?: pulumi.Input<string>;
    /**
     * List of physical interfaces that are members of the LAG. The members should be present on F5 platform and they shouldn't
     * have any VLANs attached to it
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LACP mode of the interface to be created.
     */
    mode?: pulumi.Input<string>;
    /**
     * Name of the Link Aggregation Group interface (LAG) interface to configure
     */
    name?: pulumi.Input<string>;
    /**
     * Configures the VLAN ID to associate with LAG interface. The `native_vlan` parameter is used for untagged traffic.
     */
    nativeVlan?: pulumi.Input<number>;
    /**
     * Operational state of the LAG interface.
     */
    status?: pulumi.Input<string>;
    /**
     * Configures multiple VLAN IDs to associate with the LAG interface. The `trunk_vlans` parameter is used for tagged traffic
     */
    trunkVlans?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a Lag resource.
 */
export interface LagArgs {
    /**
     * The LACP interval of the interface to be created.
     */
    interval?: pulumi.Input<string>;
    /**
     * List of physical interfaces that are members of the LAG. The members should be present on F5 platform and they shouldn't
     * have any VLANs attached to it
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LACP mode of the interface to be created.
     */
    mode?: pulumi.Input<string>;
    /**
     * Name of the Link Aggregation Group interface (LAG) interface to configure
     */
    name?: pulumi.Input<string>;
    /**
     * Configures the VLAN ID to associate with LAG interface. The `native_vlan` parameter is used for untagged traffic.
     */
    nativeVlan?: pulumi.Input<number>;
    /**
     * Configures multiple VLAN IDs to associate with the LAG interface. The `trunk_vlans` parameter is used for tagged traffic
     */
    trunkVlans?: pulumi.Input<pulumi.Input<number>[]>;
}
