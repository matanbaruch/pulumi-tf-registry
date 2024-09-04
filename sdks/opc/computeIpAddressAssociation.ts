// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeIpAddressAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ComputeIpAddressAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeIpAddressAssociationState, opts?: pulumi.CustomResourceOptions): ComputeIpAddressAssociation {
        return new ComputeIpAddressAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeIpAddressAssociation:ComputeIpAddressAssociation';

    /**
     * Returns true if the given object is an instance of ComputeIpAddressAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeIpAddressAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeIpAddressAssociation.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly ipAddressReservation!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly uri!: pulumi.Output<string>;
    public readonly vnic!: pulumi.Output<string | undefined>;

    /**
     * Create a ComputeIpAddressAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComputeIpAddressAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeIpAddressAssociationArgs | ComputeIpAddressAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeIpAddressAssociationState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipAddressReservation"] = state ? state.ipAddressReservation : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
            resourceInputs["vnic"] = state ? state.vnic : undefined;
        } else {
            const args = argsOrState as ComputeIpAddressAssociationArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipAddressReservation"] = args ? args.ipAddressReservation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vnic"] = args ? args.vnic : undefined;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeIpAddressAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeIpAddressAssociation resources.
 */
export interface ComputeIpAddressAssociationState {
    description?: pulumi.Input<string>;
    ipAddressReservation?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    uri?: pulumi.Input<string>;
    vnic?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeIpAddressAssociation resource.
 */
export interface ComputeIpAddressAssociationArgs {
    description?: pulumi.Input<string>;
    ipAddressReservation?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    vnic?: pulumi.Input<string>;
}
