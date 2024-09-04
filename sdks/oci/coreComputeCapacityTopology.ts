// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreComputeCapacityTopology extends pulumi.CustomResource {
    /**
     * Get an existing CoreComputeCapacityTopology resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreComputeCapacityTopologyState, opts?: pulumi.CustomResourceOptions): CoreComputeCapacityTopology {
        return new CoreComputeCapacityTopology(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreComputeCapacityTopology:CoreComputeCapacityTopology';

    /**
     * Returns true if the given object is an instance of CoreComputeCapacityTopology.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreComputeCapacityTopology {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreComputeCapacityTopology.__pulumiType;
    }

    public readonly availabilityDomain!: pulumi.Output<string>;
    public readonly capacitySource!: pulumi.Output<outputs.CoreComputeCapacityTopologyCapacitySource>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreComputeCapacityTopologyTimeouts | undefined>;

    /**
     * Create a CoreComputeCapacityTopology resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreComputeCapacityTopologyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreComputeCapacityTopologyArgs | CoreComputeCapacityTopologyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreComputeCapacityTopologyState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["capacitySource"] = state ? state.capacitySource : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CoreComputeCapacityTopologyArgs | undefined;
            if ((!args || args.availabilityDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityDomain'");
            }
            if ((!args || args.capacitySource === undefined) && !opts.urn) {
                throw new Error("Missing required property 'capacitySource'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            resourceInputs["availabilityDomain"] = args ? args.availabilityDomain : undefined;
            resourceInputs["capacitySource"] = args ? args.capacitySource : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreComputeCapacityTopology.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreComputeCapacityTopology resources.
 */
export interface CoreComputeCapacityTopologyState {
    availabilityDomain?: pulumi.Input<string>;
    capacitySource?: pulumi.Input<inputs.CoreComputeCapacityTopologyCapacitySource>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreComputeCapacityTopologyTimeouts>;
}

/**
 * The set of arguments for constructing a CoreComputeCapacityTopology resource.
 */
export interface CoreComputeCapacityTopologyArgs {
    availabilityDomain: pulumi.Input<string>;
    capacitySource: pulumi.Input<inputs.CoreComputeCapacityTopologyCapacitySource>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.CoreComputeCapacityTopologyTimeouts>;
}
