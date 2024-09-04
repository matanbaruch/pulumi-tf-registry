// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/route:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    public readonly advertise!: pulumi.Output<string>;
    public readonly cost!: pulumi.Output<number>;
    public readonly cost1!: pulumi.Output<number>;
    public readonly detail!: pulumi.Output<boolean>;
    public readonly distance!: pulumi.Output<number>;
    public readonly gateway!: pulumi.Output<string>;
    public readonly monitor!: pulumi.Output<string>;
    public readonly msr!: pulumi.Output<string>;
    public readonly netmask!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<string>;
    public readonly ownergroup!: pulumi.Output<string>;
    public readonly routetype!: pulumi.Output<string>;
    public readonly td!: pulumi.Output<number>;
    public readonly vlan!: pulumi.Output<number>;
    public readonly weight!: pulumi.Output<number>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteArgs | RouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouteState | undefined;
            resourceInputs["advertise"] = state ? state.advertise : undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["cost1"] = state ? state.cost1 : undefined;
            resourceInputs["detail"] = state ? state.detail : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["msr"] = state ? state.msr : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["ownergroup"] = state ? state.ownergroup : undefined;
            resourceInputs["routetype"] = state ? state.routetype : undefined;
            resourceInputs["td"] = state ? state.td : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as RouteArgs | undefined;
            if ((!args || args.gateway === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gateway'");
            }
            if ((!args || args.netmask === undefined) && !opts.urn) {
                throw new Error("Missing required property 'netmask'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["advertise"] = args ? args.advertise : undefined;
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["cost1"] = args ? args.cost1 : undefined;
            resourceInputs["detail"] = args ? args.detail : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["msr"] = args ? args.msr : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["ownergroup"] = args ? args.ownergroup : undefined;
            resourceInputs["routetype"] = args ? args.routetype : undefined;
            resourceInputs["td"] = args ? args.td : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Route.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    advertise?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    cost1?: pulumi.Input<number>;
    detail?: pulumi.Input<boolean>;
    distance?: pulumi.Input<number>;
    gateway?: pulumi.Input<string>;
    monitor?: pulumi.Input<string>;
    msr?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
    network?: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    routetype?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    vlan?: pulumi.Input<number>;
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    advertise?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    cost1?: pulumi.Input<number>;
    detail?: pulumi.Input<boolean>;
    distance?: pulumi.Input<number>;
    gateway: pulumi.Input<string>;
    monitor?: pulumi.Input<string>;
    msr?: pulumi.Input<string>;
    netmask: pulumi.Input<string>;
    network: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    routetype?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    vlan?: pulumi.Input<number>;
    weight?: pulumi.Input<number>;
}
