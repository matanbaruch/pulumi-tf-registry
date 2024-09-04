// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SysUtEventActionL1 extends pulumi.CustomResource {
    /**
     * Get an existing SysUtEventActionL1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SysUtEventActionL1State, opts?: pulumi.CustomResourceOptions): SysUtEventActionL1 {
        return new SysUtEventActionL1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/sysUtEventActionL1:SysUtEventActionL1';

    /**
     * Returns true if the given object is an instance of SysUtEventActionL1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SysUtEventActionL1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SysUtEventActionL1.__pulumiType;
    }

    /**
     * Auto calculate pkt len
     */
    public readonly auto!: pulumi.Output<number | undefined>;
    /**
     * Direction
     */
    public readonly direction!: pulumi.Output<string>;
    public readonly ethLists!: pulumi.Output<outputs.SysUtEventActionL1EthList[] | undefined>;
    /**
     * EventNumber
     */
    public readonly eventNumber!: pulumi.Output<string>;
    /**
     * packet length
     */
    public readonly length!: pulumi.Output<number | undefined>;
    public readonly trunkLists!: pulumi.Output<outputs.SysUtEventActionL1TrunkList[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Total packet length starting at L2 header
     */
    public readonly value!: pulumi.Output<number | undefined>;

    /**
     * Create a SysUtEventActionL1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SysUtEventActionL1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SysUtEventActionL1Args | SysUtEventActionL1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SysUtEventActionL1State | undefined;
            resourceInputs["auto"] = state ? state.auto : undefined;
            resourceInputs["direction"] = state ? state.direction : undefined;
            resourceInputs["ethLists"] = state ? state.ethLists : undefined;
            resourceInputs["eventNumber"] = state ? state.eventNumber : undefined;
            resourceInputs["length"] = state ? state.length : undefined;
            resourceInputs["trunkLists"] = state ? state.trunkLists : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as SysUtEventActionL1Args | undefined;
            if ((!args || args.direction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'direction'");
            }
            if ((!args || args.eventNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventNumber'");
            }
            resourceInputs["auto"] = args ? args.auto : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["ethLists"] = args ? args.ethLists : undefined;
            resourceInputs["eventNumber"] = args ? args.eventNumber : undefined;
            resourceInputs["length"] = args ? args.length : undefined;
            resourceInputs["trunkLists"] = args ? args.trunkLists : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SysUtEventActionL1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SysUtEventActionL1 resources.
 */
export interface SysUtEventActionL1State {
    /**
     * Auto calculate pkt len
     */
    auto?: pulumi.Input<number>;
    /**
     * Direction
     */
    direction?: pulumi.Input<string>;
    ethLists?: pulumi.Input<pulumi.Input<inputs.SysUtEventActionL1EthList>[]>;
    /**
     * EventNumber
     */
    eventNumber?: pulumi.Input<string>;
    /**
     * packet length
     */
    length?: pulumi.Input<number>;
    trunkLists?: pulumi.Input<pulumi.Input<inputs.SysUtEventActionL1TrunkList>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Total packet length starting at L2 header
     */
    value?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SysUtEventActionL1 resource.
 */
export interface SysUtEventActionL1Args {
    /**
     * Auto calculate pkt len
     */
    auto?: pulumi.Input<number>;
    /**
     * Direction
     */
    direction: pulumi.Input<string>;
    ethLists?: pulumi.Input<pulumi.Input<inputs.SysUtEventActionL1EthList>[]>;
    /**
     * EventNumber
     */
    eventNumber: pulumi.Input<string>;
    /**
     * packet length
     */
    length?: pulumi.Input<number>;
    trunkLists?: pulumi.Input<pulumi.Input<inputs.SysUtEventActionL1TrunkList>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Total packet length starting at L2 header
     */
    value?: pulumi.Input<number>;
}
