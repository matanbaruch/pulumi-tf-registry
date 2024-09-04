// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NutanixHypervisorResourcePool extends pulumi.CustomResource {
    /**
     * Get an existing NutanixHypervisorResourcePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NutanixHypervisorResourcePoolState, opts?: pulumi.CustomResourceOptions): NutanixHypervisorResourcePool {
        return new NutanixHypervisorResourcePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/nutanixHypervisorResourcePool:NutanixHypervisorResourcePool';

    /**
     * Returns true if the given object is an instance of NutanixHypervisorResourcePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NutanixHypervisorResourcePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NutanixHypervisorResourcePool.__pulumiType;
    }

    /**
     * Id of the hypervisor for which the resource pool needs to be created.
     */
    public readonly hypervisor!: pulumi.Output<string>;
    /**
     * Name of the resource pool. Name should be unique across all hypervisors.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Networks for allocating resources.
     */
    public readonly networks!: pulumi.Output<string[]>;

    /**
     * Create a NutanixHypervisorResourcePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NutanixHypervisorResourcePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NutanixHypervisorResourcePoolArgs | NutanixHypervisorResourcePoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NutanixHypervisorResourcePoolState | undefined;
            resourceInputs["hypervisor"] = state ? state.hypervisor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
        } else {
            const args = argsOrState as NutanixHypervisorResourcePoolArgs | undefined;
            if ((!args || args.hypervisor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hypervisor'");
            }
            if ((!args || args.networks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networks'");
            }
            resourceInputs["hypervisor"] = args ? args.hypervisor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NutanixHypervisorResourcePool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NutanixHypervisorResourcePool resources.
 */
export interface NutanixHypervisorResourcePoolState {
    /**
     * Id of the hypervisor for which the resource pool needs to be created.
     */
    hypervisor?: pulumi.Input<string>;
    /**
     * Name of the resource pool. Name should be unique across all hypervisors.
     */
    name?: pulumi.Input<string>;
    /**
     * Networks for allocating resources.
     */
    networks?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a NutanixHypervisorResourcePool resource.
 */
export interface NutanixHypervisorResourcePoolArgs {
    /**
     * Id of the hypervisor for which the resource pool needs to be created.
     */
    hypervisor: pulumi.Input<string>;
    /**
     * Name of the resource pool. Name should be unique across all hypervisors.
     */
    name?: pulumi.Input<string>;
    /**
     * Networks for allocating resources.
     */
    networks: pulumi.Input<pulumi.Input<string>[]>;
}
