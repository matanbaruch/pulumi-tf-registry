// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DedicatedHypervisorServerV1 extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHypervisorServerV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DedicatedHypervisorServerV1State, opts?: pulumi.CustomResourceOptions): DedicatedHypervisorServerV1 {
        return new DedicatedHypervisorServerV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/dedicatedHypervisorServerV1:DedicatedHypervisorServerV1';

    /**
     * Returns true if the given object is an instance of DedicatedHypervisorServerV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedHypervisorServerV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedHypervisorServerV1.__pulumiType;
    }

    public readonly adminPass!: pulumi.Output<string>;
    public readonly availabilityZone!: pulumi.Output<string>;
    public /*out*/ readonly baremetalServerId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly flavorRef!: pulumi.Output<string>;
    public readonly imageRef!: pulumi.Output<string>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networks!: pulumi.Output<outputs.DedicatedHypervisorServerV1Network[]>;
    public readonly timeouts!: pulumi.Output<outputs.DedicatedHypervisorServerV1Timeouts | undefined>;

    /**
     * Create a DedicatedHypervisorServerV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHypervisorServerV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DedicatedHypervisorServerV1Args | DedicatedHypervisorServerV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DedicatedHypervisorServerV1State | undefined;
            resourceInputs["adminPass"] = state ? state.adminPass : undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["baremetalServerId"] = state ? state.baremetalServerId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["flavorRef"] = state ? state.flavorRef : undefined;
            resourceInputs["imageRef"] = state ? state.imageRef : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DedicatedHypervisorServerV1Args | undefined;
            if ((!args || args.flavorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'flavorRef'");
            }
            if ((!args || args.imageRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageRef'");
            }
            if ((!args || args.networks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networks'");
            }
            resourceInputs["adminPass"] = args ? args.adminPass : undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["flavorRef"] = args ? args.flavorRef : undefined;
            resourceInputs["imageRef"] = args ? args.imageRef : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["baremetalServerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DedicatedHypervisorServerV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DedicatedHypervisorServerV1 resources.
 */
export interface DedicatedHypervisorServerV1State {
    adminPass?: pulumi.Input<string>;
    availabilityZone?: pulumi.Input<string>;
    baremetalServerId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    flavorRef?: pulumi.Input<string>;
    imageRef?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    networks?: pulumi.Input<pulumi.Input<inputs.DedicatedHypervisorServerV1Network>[]>;
    timeouts?: pulumi.Input<inputs.DedicatedHypervisorServerV1Timeouts>;
}

/**
 * The set of arguments for constructing a DedicatedHypervisorServerV1 resource.
 */
export interface DedicatedHypervisorServerV1Args {
    adminPass?: pulumi.Input<string>;
    availabilityZone?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    flavorRef: pulumi.Input<string>;
    imageRef: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    networks: pulumi.Input<pulumi.Input<inputs.DedicatedHypervisorServerV1Network>[]>;
    timeouts?: pulumi.Input<inputs.DedicatedHypervisorServerV1Timeouts>;
}
