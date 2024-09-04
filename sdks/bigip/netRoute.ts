// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NetRoute extends pulumi.CustomResource {
    /**
     * Get an existing NetRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetRouteState, opts?: pulumi.CustomResourceOptions): NetRoute {
        return new NetRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigip:index/netRoute:NetRoute';

    /**
     * Returns true if the given object is an instance of NetRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetRoute.__pulumiType;
    }

    /**
     * Gateway address
     */
    public readonly gw!: pulumi.Output<string | undefined>;
    /**
     * Name of the route
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Destination network
     */
    public readonly network!: pulumi.Output<string>;
    /**
     * reject route
     */
    public readonly reject!: pulumi.Output<boolean | undefined>;
    /**
     * tunnel_ref to route traffic
     */
    public readonly tunnelRef!: pulumi.Output<string | undefined>;

    /**
     * Create a NetRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetRouteArgs | NetRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetRouteState | undefined;
            resourceInputs["gw"] = state ? state.gw : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["reject"] = state ? state.reject : undefined;
            resourceInputs["tunnelRef"] = state ? state.tunnelRef : undefined;
        } else {
            const args = argsOrState as NetRouteArgs | undefined;
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["gw"] = args ? args.gw : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["reject"] = args ? args.reject : undefined;
            resourceInputs["tunnelRef"] = args ? args.tunnelRef : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetRoute resources.
 */
export interface NetRouteState {
    /**
     * Gateway address
     */
    gw?: pulumi.Input<string>;
    /**
     * Name of the route
     */
    name?: pulumi.Input<string>;
    /**
     * Destination network
     */
    network?: pulumi.Input<string>;
    /**
     * reject route
     */
    reject?: pulumi.Input<boolean>;
    /**
     * tunnel_ref to route traffic
     */
    tunnelRef?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetRoute resource.
 */
export interface NetRouteArgs {
    /**
     * Gateway address
     */
    gw?: pulumi.Input<string>;
    /**
     * Name of the route
     */
    name?: pulumi.Input<string>;
    /**
     * Destination network
     */
    network: pulumi.Input<string>;
    /**
     * reject route
     */
    reject?: pulumi.Input<boolean>;
    /**
     * tunnel_ref to route traffic
     */
    tunnelRef?: pulumi.Input<string>;
}
