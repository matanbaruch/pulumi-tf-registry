// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeIpAddressReservation extends pulumi.CustomResource {
    /**
     * Get an existing ComputeIpAddressReservation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeIpAddressReservationState, opts?: pulumi.CustomResourceOptions): ComputeIpAddressReservation {
        return new ComputeIpAddressReservation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeIpAddressReservation:ComputeIpAddressReservation';

    /**
     * Returns true if the given object is an instance of ComputeIpAddressReservation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeIpAddressReservation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeIpAddressReservation.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    public readonly ipAddressPool!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a ComputeIpAddressReservation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeIpAddressReservationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeIpAddressReservationArgs | ComputeIpAddressReservationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeIpAddressReservationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["ipAddressPool"] = state ? state.ipAddressPool : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as ComputeIpAddressReservationArgs | undefined;
            if ((!args || args.ipAddressPool === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddressPool'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipAddressPool"] = args ? args.ipAddressPool : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeIpAddressReservation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeIpAddressReservation resources.
 */
export interface ComputeIpAddressReservationState {
    description?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    ipAddressPool?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeIpAddressReservation resource.
 */
export interface ComputeIpAddressReservationArgs {
    description?: pulumi.Input<string>;
    ipAddressPool: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
