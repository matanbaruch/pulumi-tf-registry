// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HarmonyControllerProfileTunnel extends pulumi.CustomResource {
    /**
     * Get an existing HarmonyControllerProfileTunnel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HarmonyControllerProfileTunnelState, opts?: pulumi.CustomResourceOptions): HarmonyControllerProfileTunnel {
        return new HarmonyControllerProfileTunnel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/harmonyControllerProfileTunnel:HarmonyControllerProfileTunnel';

    /**
     * Returns true if the given object is an instance of HarmonyControllerProfileTunnel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HarmonyControllerProfileTunnel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HarmonyControllerProfileTunnel.__pulumiType;
    }

    /**
     * 'enable': Tunnel Enable; 'disable': Tunnel Disable;
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a HarmonyControllerProfileTunnel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HarmonyControllerProfileTunnelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HarmonyControllerProfileTunnelArgs | HarmonyControllerProfileTunnelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HarmonyControllerProfileTunnelState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as HarmonyControllerProfileTunnelArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HarmonyControllerProfileTunnel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HarmonyControllerProfileTunnel resources.
 */
export interface HarmonyControllerProfileTunnelState {
    /**
     * 'enable': Tunnel Enable; 'disable': Tunnel Disable;
     */
    action?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HarmonyControllerProfileTunnel resource.
 */
export interface HarmonyControllerProfileTunnelArgs {
    /**
     * 'enable': Tunnel Enable; 'disable': Tunnel Disable;
     */
    action?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
