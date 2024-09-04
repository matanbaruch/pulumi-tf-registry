// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DirectConnectRouting extends pulumi.CustomResource {
    /**
     * Get an existing DirectConnectRouting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectConnectRoutingState, opts?: pulumi.CustomResourceOptions): DirectConnectRouting {
        return new DirectConnectRouting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/directConnectRouting:DirectConnectRouting';

    /**
     * Returns true if the given object is an instance of DirectConnectRouting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DirectConnectRouting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DirectConnectRouting.__pulumiType;
    }

    /**
     * Network CIDR
     */
    public readonly destinationNetworkCidr!: pulumi.Output<string>;
    /**
     * Routing Table id
     */
    public readonly routingTableId!: pulumi.Output<string>;
    /**
     * Source Interface Id
     */
    public readonly sourceServiceInterfaceId!: pulumi.Output<string>;
    /**
     * Source Interface Name
     */
    public readonly sourceServiceInterfaceName!: pulumi.Output<string>;

    /**
     * Create a DirectConnectRouting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectConnectRoutingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectConnectRoutingArgs | DirectConnectRoutingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DirectConnectRoutingState | undefined;
            resourceInputs["destinationNetworkCidr"] = state ? state.destinationNetworkCidr : undefined;
            resourceInputs["routingTableId"] = state ? state.routingTableId : undefined;
            resourceInputs["sourceServiceInterfaceId"] = state ? state.sourceServiceInterfaceId : undefined;
            resourceInputs["sourceServiceInterfaceName"] = state ? state.sourceServiceInterfaceName : undefined;
        } else {
            const args = argsOrState as DirectConnectRoutingArgs | undefined;
            if ((!args || args.destinationNetworkCidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationNetworkCidr'");
            }
            if ((!args || args.routingTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routingTableId'");
            }
            if ((!args || args.sourceServiceInterfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceServiceInterfaceId'");
            }
            if ((!args || args.sourceServiceInterfaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceServiceInterfaceName'");
            }
            resourceInputs["destinationNetworkCidr"] = args ? args.destinationNetworkCidr : undefined;
            resourceInputs["routingTableId"] = args ? args.routingTableId : undefined;
            resourceInputs["sourceServiceInterfaceId"] = args ? args.sourceServiceInterfaceId : undefined;
            resourceInputs["sourceServiceInterfaceName"] = args ? args.sourceServiceInterfaceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DirectConnectRouting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DirectConnectRouting resources.
 */
export interface DirectConnectRoutingState {
    /**
     * Network CIDR
     */
    destinationNetworkCidr?: pulumi.Input<string>;
    /**
     * Routing Table id
     */
    routingTableId?: pulumi.Input<string>;
    /**
     * Source Interface Id
     */
    sourceServiceInterfaceId?: pulumi.Input<string>;
    /**
     * Source Interface Name
     */
    sourceServiceInterfaceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DirectConnectRouting resource.
 */
export interface DirectConnectRoutingArgs {
    /**
     * Network CIDR
     */
    destinationNetworkCidr: pulumi.Input<string>;
    /**
     * Routing Table id
     */
    routingTableId: pulumi.Input<string>;
    /**
     * Source Interface Id
     */
    sourceServiceInterfaceId: pulumi.Input<string>;
    /**
     * Source Interface Name
     */
    sourceServiceInterfaceName: pulumi.Input<string>;
}
