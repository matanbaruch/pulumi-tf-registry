// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Route6 extends pulumi.CustomResource {
    /**
     * Get an existing Route6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Route6State, opts?: pulumi.CustomResourceOptions): Route6 {
        return new Route6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/route6:Route6';

    /**
     * Returns true if the given object is an instance of Route6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route6.__pulumiType;
    }

    public readonly advertise!: pulumi.Output<string>;
    public readonly cost!: pulumi.Output<number>;
    public readonly detail!: pulumi.Output<boolean>;
    public readonly distance!: pulumi.Output<number>;
    public readonly gateway!: pulumi.Output<string>;
    public readonly monitor!: pulumi.Output<string>;
    public readonly msr!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<string>;
    public readonly ownergroup!: pulumi.Output<string>;
    public readonly routetype!: pulumi.Output<string>;
    public readonly td!: pulumi.Output<number>;
    public readonly vlan!: pulumi.Output<number>;
    public readonly vxlan!: pulumi.Output<number>;
    public readonly weight!: pulumi.Output<number>;

    /**
     * Create a Route6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Route6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Route6Args | Route6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Route6State | undefined;
            resourceInputs["advertise"] = state ? state.advertise : undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["detail"] = state ? state.detail : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["msr"] = state ? state.msr : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["ownergroup"] = state ? state.ownergroup : undefined;
            resourceInputs["routetype"] = state ? state.routetype : undefined;
            resourceInputs["td"] = state ? state.td : undefined;
            resourceInputs["vlan"] = state ? state.vlan : undefined;
            resourceInputs["vxlan"] = state ? state.vxlan : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as Route6Args | undefined;
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["advertise"] = args ? args.advertise : undefined;
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["detail"] = args ? args.detail : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["msr"] = args ? args.msr : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["ownergroup"] = args ? args.ownergroup : undefined;
            resourceInputs["routetype"] = args ? args.routetype : undefined;
            resourceInputs["td"] = args ? args.td : undefined;
            resourceInputs["vlan"] = args ? args.vlan : undefined;
            resourceInputs["vxlan"] = args ? args.vxlan : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Route6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Route6 resources.
 */
export interface Route6State {
    advertise?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    detail?: pulumi.Input<boolean>;
    distance?: pulumi.Input<number>;
    gateway?: pulumi.Input<string>;
    monitor?: pulumi.Input<string>;
    msr?: pulumi.Input<string>;
    network?: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    routetype?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    vlan?: pulumi.Input<number>;
    vxlan?: pulumi.Input<number>;
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Route6 resource.
 */
export interface Route6Args {
    advertise?: pulumi.Input<string>;
    cost?: pulumi.Input<number>;
    detail?: pulumi.Input<boolean>;
    distance?: pulumi.Input<number>;
    gateway?: pulumi.Input<string>;
    monitor?: pulumi.Input<string>;
    msr?: pulumi.Input<string>;
    network: pulumi.Input<string>;
    ownergroup?: pulumi.Input<string>;
    routetype?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    vlan?: pulumi.Input<number>;
    vxlan?: pulumi.Input<number>;
    weight?: pulumi.Input<number>;
}
