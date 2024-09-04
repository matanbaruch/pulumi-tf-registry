// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RouterInterfaceConnection extends pulumi.CustomResource {
    /**
     * Get an existing RouterInterfaceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterInterfaceConnectionState, opts?: pulumi.CustomResourceOptions): RouterInterfaceConnection {
        return new RouterInterfaceConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/routerInterfaceConnection:RouterInterfaceConnection';

    /**
     * Returns true if the given object is an instance of RouterInterfaceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterInterfaceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterInterfaceConnection.__pulumiType;
    }

    public readonly interfaceId!: pulumi.Output<string>;
    public readonly oppositeInterfaceId!: pulumi.Output<string>;
    public readonly oppositeInterfaceOwnerId!: pulumi.Output<string>;
    public readonly oppositeRouterId!: pulumi.Output<string>;
    public readonly oppositeRouterType!: pulumi.Output<string | undefined>;

    /**
     * Create a RouterInterfaceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouterInterfaceConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterInterfaceConnectionArgs | RouterInterfaceConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterInterfaceConnectionState | undefined;
            resourceInputs["interfaceId"] = state ? state.interfaceId : undefined;
            resourceInputs["oppositeInterfaceId"] = state ? state.oppositeInterfaceId : undefined;
            resourceInputs["oppositeInterfaceOwnerId"] = state ? state.oppositeInterfaceOwnerId : undefined;
            resourceInputs["oppositeRouterId"] = state ? state.oppositeRouterId : undefined;
            resourceInputs["oppositeRouterType"] = state ? state.oppositeRouterType : undefined;
        } else {
            const args = argsOrState as RouterInterfaceConnectionArgs | undefined;
            if ((!args || args.interfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceId'");
            }
            if ((!args || args.oppositeInterfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oppositeInterfaceId'");
            }
            resourceInputs["interfaceId"] = args ? args.interfaceId : undefined;
            resourceInputs["oppositeInterfaceId"] = args ? args.oppositeInterfaceId : undefined;
            resourceInputs["oppositeInterfaceOwnerId"] = args ? args.oppositeInterfaceOwnerId : undefined;
            resourceInputs["oppositeRouterId"] = args ? args.oppositeRouterId : undefined;
            resourceInputs["oppositeRouterType"] = args ? args.oppositeRouterType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterInterfaceConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterInterfaceConnection resources.
 */
export interface RouterInterfaceConnectionState {
    interfaceId?: pulumi.Input<string>;
    oppositeInterfaceId?: pulumi.Input<string>;
    oppositeInterfaceOwnerId?: pulumi.Input<string>;
    oppositeRouterId?: pulumi.Input<string>;
    oppositeRouterType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterInterfaceConnection resource.
 */
export interface RouterInterfaceConnectionArgs {
    interfaceId: pulumi.Input<string>;
    oppositeInterfaceId: pulumi.Input<string>;
    oppositeInterfaceOwnerId?: pulumi.Input<string>;
    oppositeRouterId?: pulumi.Input<string>;
    oppositeRouterType?: pulumi.Input<string>;
}
