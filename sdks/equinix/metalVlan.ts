// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MetalVlan extends pulumi.CustomResource {
    /**
     * Get an existing MetalVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetalVlanState, opts?: pulumi.CustomResourceOptions): MetalVlan {
        return new MetalVlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'equinix:index/metalVlan:MetalVlan';

    /**
     * Returns true if the given object is an instance of MetalVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetalVlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetalVlan.__pulumiType;
    }

    /**
     * Description string
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Facility where to create the VLAN
     *
     * @deprecated Deprecated
     */
    public readonly facility!: pulumi.Output<string>;
    /**
     * Metro in which to create the VLAN
     */
    public readonly metro!: pulumi.Output<string>;
    /**
     * ID of parent project
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * VLAN ID, must be unique in metro
     */
    public readonly vxlan!: pulumi.Output<number>;

    /**
     * Create a MetalVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetalVlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetalVlanArgs | MetalVlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetalVlanState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["facility"] = state ? state.facility : undefined;
            resourceInputs["metro"] = state ? state.metro : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["vxlan"] = state ? state.vxlan : undefined;
        } else {
            const args = argsOrState as MetalVlanArgs | undefined;
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["facility"] = args ? args.facility : undefined;
            resourceInputs["metro"] = args ? args.metro : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["vxlan"] = args ? args.vxlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetalVlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetalVlan resources.
 */
export interface MetalVlanState {
    /**
     * Description string
     */
    description?: pulumi.Input<string>;
    /**
     * Facility where to create the VLAN
     *
     * @deprecated Deprecated
     */
    facility?: pulumi.Input<string>;
    /**
     * Metro in which to create the VLAN
     */
    metro?: pulumi.Input<string>;
    /**
     * ID of parent project
     */
    projectId?: pulumi.Input<string>;
    /**
     * VLAN ID, must be unique in metro
     */
    vxlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MetalVlan resource.
 */
export interface MetalVlanArgs {
    /**
     * Description string
     */
    description?: pulumi.Input<string>;
    /**
     * Facility where to create the VLAN
     *
     * @deprecated Deprecated
     */
    facility?: pulumi.Input<string>;
    /**
     * Metro in which to create the VLAN
     */
    metro?: pulumi.Input<string>;
    /**
     * ID of parent project
     */
    projectId: pulumi.Input<string>;
    /**
     * VLAN ID, must be unique in metro
     */
    vxlan?: pulumi.Input<number>;
}
