// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Vrf extends pulumi.CustomResource {
    /**
     * Get an existing Vrf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VrfState, opts?: pulumi.CustomResourceOptions): Vrf {
        return new Vrf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/vrf:Vrf';

    /**
     * Returns true if the given object is an instance of Vrf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vrf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vrf.__pulumiType;
    }

    /**
     * VRF description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Encap for this Context, supported formats: `unknown`, `vlan-%d` or `vxlan-%d`. - Default value: `unknown`
     */
    public readonly encap!: pulumi.Output<string>;
    /**
     * VRF name.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a Vrf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VrfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VrfArgs | VrfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VrfState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["encap"] = state ? state.encap : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as VrfArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["encap"] = args ? args.encap : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vrf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vrf resources.
 */
export interface VrfState {
    /**
     * VRF description.
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Encap for this Context, supported formats: `unknown`, `vlan-%d` or `vxlan-%d`. - Default value: `unknown`
     */
    encap?: pulumi.Input<string>;
    /**
     * VRF name.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Vrf resource.
 */
export interface VrfArgs {
    /**
     * VRF description.
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Encap for this Context, supported formats: `unknown`, `vlan-%d` or `vxlan-%d`. - Default value: `unknown`
     */
    encap?: pulumi.Input<string>;
    /**
     * VRF name.
     */
    name?: pulumi.Input<string>;
}
