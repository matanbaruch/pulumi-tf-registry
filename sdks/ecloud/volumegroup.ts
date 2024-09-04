// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Volumegroup extends pulumi.CustomResource {
    /**
     * Get an existing Volumegroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumegroupState, opts?: pulumi.CustomResourceOptions): Volumegroup {
        return new Volumegroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecloud:index/volumegroup:Volumegroup';

    /**
     * Returns true if the given object is an instance of Volumegroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volumegroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volumegroup.__pulumiType;
    }

    public readonly availabilityZoneId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Volumegroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumegroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumegroupArgs | VolumegroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumegroupState | undefined;
            resourceInputs["availabilityZoneId"] = state ? state.availabilityZoneId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as VolumegroupArgs | undefined;
            if ((!args || args.availabilityZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZoneId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["availabilityZoneId"] = args ? args.availabilityZoneId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Volumegroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Volumegroup resources.
 */
export interface VolumegroupState {
    availabilityZoneId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Volumegroup resource.
 */
export interface VolumegroupArgs {
    availabilityZoneId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
