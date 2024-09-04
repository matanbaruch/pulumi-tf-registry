// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PrivateCrossconnect extends pulumi.CustomResource {
    /**
     * Get an existing PrivateCrossconnect resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateCrossconnectState, opts?: pulumi.CustomResourceOptions): PrivateCrossconnect {
        return new PrivateCrossconnect(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ionoscloud:index/privateCrossconnect:PrivateCrossconnect';

    /**
     * Returns true if the given object is an instance of PrivateCrossconnect.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateCrossconnect {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateCrossconnect.__pulumiType;
    }

    /**
     * A list containing all the connectable datacenters
     */
    public readonly connectableDatacenters!: pulumi.Output<outputs.PrivateCrossconnectConnectableDatacenter[] | undefined>;
    /**
     * The desired description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The desired name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list containing the details of all cross-connected datacenters
     */
    public readonly peers!: pulumi.Output<outputs.PrivateCrossconnectPeer[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PrivateCrossconnectTimeouts | undefined>;

    /**
     * Create a PrivateCrossconnect resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PrivateCrossconnectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PrivateCrossconnectArgs | PrivateCrossconnectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PrivateCrossconnectState | undefined;
            resourceInputs["connectableDatacenters"] = state ? state.connectableDatacenters : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["peers"] = state ? state.peers : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PrivateCrossconnectArgs | undefined;
            resourceInputs["connectableDatacenters"] = args ? args.connectableDatacenters : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peers"] = args ? args.peers : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PrivateCrossconnect.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PrivateCrossconnect resources.
 */
export interface PrivateCrossconnectState {
    /**
     * A list containing all the connectable datacenters
     */
    connectableDatacenters?: pulumi.Input<pulumi.Input<inputs.PrivateCrossconnectConnectableDatacenter>[]>;
    /**
     * The desired description
     */
    description?: pulumi.Input<string>;
    /**
     * The desired name
     */
    name?: pulumi.Input<string>;
    /**
     * A list containing the details of all cross-connected datacenters
     */
    peers?: pulumi.Input<pulumi.Input<inputs.PrivateCrossconnectPeer>[]>;
    timeouts?: pulumi.Input<inputs.PrivateCrossconnectTimeouts>;
}

/**
 * The set of arguments for constructing a PrivateCrossconnect resource.
 */
export interface PrivateCrossconnectArgs {
    /**
     * A list containing all the connectable datacenters
     */
    connectableDatacenters?: pulumi.Input<pulumi.Input<inputs.PrivateCrossconnectConnectableDatacenter>[]>;
    /**
     * The desired description
     */
    description?: pulumi.Input<string>;
    /**
     * The desired name
     */
    name?: pulumi.Input<string>;
    /**
     * A list containing the details of all cross-connected datacenters
     */
    peers?: pulumi.Input<pulumi.Input<inputs.PrivateCrossconnectPeer>[]>;
    timeouts?: pulumi.Input<inputs.PrivateCrossconnectTimeouts>;
}
