// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackboneVirtualCircuit extends pulumi.CustomResource {
    /**
     * Get an existing BackboneVirtualCircuit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackboneVirtualCircuitState, opts?: pulumi.CustomResourceOptions): BackboneVirtualCircuit {
        return new BackboneVirtualCircuit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'packetfabric:index/backboneVirtualCircuit:BackboneVirtualCircuit';

    /**
     * Returns true if the given object is an instance of BackboneVirtualCircuit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackboneVirtualCircuit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackboneVirtualCircuit.__pulumiType;
    }

    public readonly bandwidths!: pulumi.Output<outputs.BackboneVirtualCircuitBandwidth[]>;
    /**
     * A brief description of this connection.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * If true, the circuit will be an EPL connection rather than an EVPL. Default is false. EPL is an Ethernet Private Line.
     * Typical access ports can only support one EPL connection (meaning one virtual circuit for that port). ENNI ports can
     * support multiple EPL connections. EVPL is an Ethernet Virtual Private Line. A port can support multiple EVPL
     * connections, as bandwidth allows. For more information on the difference between the two, see [Virtual Circuit Ethernet
     * Features](https://docs.packetfabric.com/reference/specs/ethernet_features/). Defaults: false
     */
    public readonly epl!: pulumi.Output<boolean | undefined>;
    /**
     * Early Termination Liability (ETL) fees apply when terminating a service before its term ends. ETL is prorated to the
     * remaining contract days.
     */
    public /*out*/ readonly etl!: pulumi.Output<number>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    public readonly flexBandwidthId!: pulumi.Output<string | undefined>;
    public readonly interfaceAs!: pulumi.Output<outputs.BackboneVirtualCircuitInterfaceA[]>;
    public readonly interfaceZs!: pulumi.Output<outputs.BackboneVirtualCircuitInterfaceZ[]>;
    /**
     * Label value linked to an object.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Purchase order number or identifier of a service.
     */
    public readonly poNumber!: pulumi.Output<string | undefined>;
    /**
     * The upper bound, in Mbps, by which to limit incoming data.
     */
    public readonly rateLimitIn!: pulumi.Output<number | undefined>;
    /**
     * The upper bound, in Mbps, by which to limit outgoing data.
     */
    public readonly rateLimitOut!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BackboneVirtualCircuitTimeouts | undefined>;

    /**
     * Create a BackboneVirtualCircuit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackboneVirtualCircuitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackboneVirtualCircuitArgs | BackboneVirtualCircuitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackboneVirtualCircuitState | undefined;
            resourceInputs["bandwidths"] = state ? state.bandwidths : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["epl"] = state ? state.epl : undefined;
            resourceInputs["etl"] = state ? state.etl : undefined;
            resourceInputs["flexBandwidthId"] = state ? state.flexBandwidthId : undefined;
            resourceInputs["interfaceAs"] = state ? state.interfaceAs : undefined;
            resourceInputs["interfaceZs"] = state ? state.interfaceZs : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["poNumber"] = state ? state.poNumber : undefined;
            resourceInputs["rateLimitIn"] = state ? state.rateLimitIn : undefined;
            resourceInputs["rateLimitOut"] = state ? state.rateLimitOut : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BackboneVirtualCircuitArgs | undefined;
            if ((!args || args.bandwidths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidths'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.interfaceAs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceAs'");
            }
            if ((!args || args.interfaceZs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceZs'");
            }
            resourceInputs["bandwidths"] = args ? args.bandwidths : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["epl"] = args ? args.epl : undefined;
            resourceInputs["flexBandwidthId"] = args ? args.flexBandwidthId : undefined;
            resourceInputs["interfaceAs"] = args ? args.interfaceAs : undefined;
            resourceInputs["interfaceZs"] = args ? args.interfaceZs : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["poNumber"] = args ? args.poNumber : undefined;
            resourceInputs["rateLimitIn"] = args ? args.rateLimitIn : undefined;
            resourceInputs["rateLimitOut"] = args ? args.rateLimitOut : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["etl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackboneVirtualCircuit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackboneVirtualCircuit resources.
 */
export interface BackboneVirtualCircuitState {
    bandwidths?: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitBandwidth>[]>;
    /**
     * A brief description of this connection.
     */
    description?: pulumi.Input<string>;
    /**
     * If true, the circuit will be an EPL connection rather than an EVPL. Default is false. EPL is an Ethernet Private Line.
     * Typical access ports can only support one EPL connection (meaning one virtual circuit for that port). ENNI ports can
     * support multiple EPL connections. EVPL is an Ethernet Virtual Private Line. A port can support multiple EVPL
     * connections, as bandwidth allows. For more information on the difference between the two, see [Virtual Circuit Ethernet
     * Features](https://docs.packetfabric.com/reference/specs/ethernet_features/). Defaults: false
     */
    epl?: pulumi.Input<boolean>;
    /**
     * Early Termination Liability (ETL) fees apply when terminating a service before its term ends. ETL is prorated to the
     * remaining contract days.
     */
    etl?: pulumi.Input<number>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    flexBandwidthId?: pulumi.Input<string>;
    interfaceAs?: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitInterfaceA>[]>;
    interfaceZs?: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitInterfaceZ>[]>;
    /**
     * Label value linked to an object.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Purchase order number or identifier of a service.
     */
    poNumber?: pulumi.Input<string>;
    /**
     * The upper bound, in Mbps, by which to limit incoming data.
     */
    rateLimitIn?: pulumi.Input<number>;
    /**
     * The upper bound, in Mbps, by which to limit outgoing data.
     */
    rateLimitOut?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitTimeouts>;
}

/**
 * The set of arguments for constructing a BackboneVirtualCircuit resource.
 */
export interface BackboneVirtualCircuitArgs {
    bandwidths: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitBandwidth>[]>;
    /**
     * A brief description of this connection.
     */
    description: pulumi.Input<string>;
    /**
     * If true, the circuit will be an EPL connection rather than an EVPL. Default is false. EPL is an Ethernet Private Line.
     * Typical access ports can only support one EPL connection (meaning one virtual circuit for that port). ENNI ports can
     * support multiple EPL connections. EVPL is an Ethernet Virtual Private Line. A port can support multiple EVPL
     * connections, as bandwidth allows. For more information on the difference between the two, see [Virtual Circuit Ethernet
     * Features](https://docs.packetfabric.com/reference/specs/ethernet_features/). Defaults: false
     */
    epl?: pulumi.Input<boolean>;
    /**
     * ID of the flex bandwidth container from which to subtract this VC's speed.
     */
    flexBandwidthId?: pulumi.Input<string>;
    interfaceAs: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitInterfaceA>[]>;
    interfaceZs: pulumi.Input<pulumi.Input<inputs.BackboneVirtualCircuitInterfaceZ>[]>;
    /**
     * Label value linked to an object.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Purchase order number or identifier of a service.
     */
    poNumber?: pulumi.Input<string>;
    /**
     * The upper bound, in Mbps, by which to limit incoming data.
     */
    rateLimitIn?: pulumi.Input<number>;
    /**
     * The upper bound, in Mbps, by which to limit outgoing data.
     */
    rateLimitOut?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.BackboneVirtualCircuitTimeouts>;
}
