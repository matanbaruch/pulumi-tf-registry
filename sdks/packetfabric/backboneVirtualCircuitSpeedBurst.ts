// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackboneVirtualCircuitSpeedBurst extends pulumi.CustomResource {
    /**
     * Get an existing BackboneVirtualCircuitSpeedBurst resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackboneVirtualCircuitSpeedBurstState, opts?: pulumi.CustomResourceOptions): BackboneVirtualCircuitSpeedBurst {
        return new BackboneVirtualCircuitSpeedBurst(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packetfabric:index/backboneVirtualCircuitSpeedBurst:BackboneVirtualCircuitSpeedBurst';

    /**
     * Returns true if the given object is an instance of BackboneVirtualCircuitSpeedBurst.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackboneVirtualCircuitSpeedBurst {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackboneVirtualCircuitSpeedBurst.__pulumiType;
    }

    /**
     * Speed in Mbps of the burst. This bandwidth will be added to the existing circuit speed. If an existing burst exists,
     * this speed burst will replace the existing one. Must be a multiple of 100Mbps.
     */
    public readonly speed!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BackboneVirtualCircuitSpeedBurstTimeouts | undefined>;
    /**
     * The circuit ID of the virtual circuit that you are bursting.
     */
    public readonly vcCircuitId!: pulumi.Output<string>;

    /**
     * Create a BackboneVirtualCircuitSpeedBurst resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackboneVirtualCircuitSpeedBurstArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackboneVirtualCircuitSpeedBurstArgs | BackboneVirtualCircuitSpeedBurstState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackboneVirtualCircuitSpeedBurstState | undefined;
            resourceInputs["speed"] = state ? state.speed : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vcCircuitId"] = state ? state.vcCircuitId : undefined;
        } else {
            const args = argsOrState as BackboneVirtualCircuitSpeedBurstArgs | undefined;
            if ((!args || args.speed === undefined) && !opts.urn) {
                throw new Error("Missing required property 'speed'");
            }
            if ((!args || args.vcCircuitId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vcCircuitId'");
            }
            resourceInputs["speed"] = args ? args.speed : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vcCircuitId"] = args ? args.vcCircuitId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackboneVirtualCircuitSpeedBurst.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackboneVirtualCircuitSpeedBurst resources.
 */
export interface BackboneVirtualCircuitSpeedBurstState {
    /**
     * Speed in Mbps of the burst. This bandwidth will be added to the existing circuit speed. If an existing burst exists,
     * this speed burst will replace the existing one. Must be a multiple of 100Mbps.
     */
    speed?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitSpeedBurstTimeouts>;
    /**
     * The circuit ID of the virtual circuit that you are bursting.
     */
    vcCircuitId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BackboneVirtualCircuitSpeedBurst resource.
 */
export interface BackboneVirtualCircuitSpeedBurstArgs {
    /**
     * Speed in Mbps of the burst. This bandwidth will be added to the existing circuit speed. If an existing burst exists,
     * this speed burst will replace the existing one. Must be a multiple of 100Mbps.
     */
    speed: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitSpeedBurstTimeouts>;
    /**
     * The circuit ID of the virtual circuit that you are bursting.
     */
    vcCircuitId: pulumi.Input<string>;
}
