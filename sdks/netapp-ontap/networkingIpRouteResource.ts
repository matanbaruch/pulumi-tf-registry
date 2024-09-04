// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkingIpRouteResource extends pulumi.CustomResource {
    /**
     * Get an existing NetworkingIpRouteResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkingIpRouteResourceState, opts?: pulumi.CustomResourceOptions): NetworkingIpRouteResource {
        return new NetworkingIpRouteResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-ontap:index/networkingIpRouteResource:NetworkingIpRouteResource';

    /**
     * Returns true if the given object is an instance of NetworkingIpRouteResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkingIpRouteResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkingIpRouteResource.__pulumiType;
    }

    /**
     * Connection profile name
     */
    public readonly cxProfileName!: pulumi.Output<string>;
    /**
     * destination IP address information
     */
    public readonly destination!: pulumi.Output<outputs.NetworkingIpRouteResourceDestination>;
    /**
     * The IP address of the gateway router leading to the destination.
     */
    public readonly gateway!: pulumi.Output<string>;
    /**
     * Indicates a preference order between several routes to the same destination.
     */
    public readonly metric!: pulumi.Output<number>;
    /**
     * IPInterface svm name
     */
    public readonly svmName!: pulumi.Output<string | undefined>;

    /**
     * Create a NetworkingIpRouteResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkingIpRouteResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkingIpRouteResourceArgs | NetworkingIpRouteResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkingIpRouteResourceState | undefined;
            resourceInputs["cxProfileName"] = state ? state.cxProfileName : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["metric"] = state ? state.metric : undefined;
            resourceInputs["svmName"] = state ? state.svmName : undefined;
        } else {
            const args = argsOrState as NetworkingIpRouteResourceArgs | undefined;
            if ((!args || args.cxProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cxProfileName'");
            }
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            resourceInputs["cxProfileName"] = args ? args.cxProfileName : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["metric"] = args ? args.metric : undefined;
            resourceInputs["svmName"] = args ? args.svmName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkingIpRouteResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkingIpRouteResource resources.
 */
export interface NetworkingIpRouteResourceState {
    /**
     * Connection profile name
     */
    cxProfileName?: pulumi.Input<string>;
    /**
     * destination IP address information
     */
    destination?: pulumi.Input<inputs.NetworkingIpRouteResourceDestination>;
    /**
     * The IP address of the gateway router leading to the destination.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Indicates a preference order between several routes to the same destination.
     */
    metric?: pulumi.Input<number>;
    /**
     * IPInterface svm name
     */
    svmName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkingIpRouteResource resource.
 */
export interface NetworkingIpRouteResourceArgs {
    /**
     * Connection profile name
     */
    cxProfileName: pulumi.Input<string>;
    /**
     * destination IP address information
     */
    destination?: pulumi.Input<inputs.NetworkingIpRouteResourceDestination>;
    /**
     * The IP address of the gateway router leading to the destination.
     */
    gateway: pulumi.Input<string>;
    /**
     * Indicates a preference order between several routes to the same destination.
     */
    metric?: pulumi.Input<number>;
    /**
     * IPInterface svm name
     */
    svmName?: pulumi.Input<string>;
}
