// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv6 extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6State, opts?: pulumi.CustomResourceOptions): Ipv6 {
        return new Ipv6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/ipv6:Ipv6';

    /**
     * Returns true if the given object is an instance of Ipv6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6.__pulumiType;
    }

    public readonly dodad!: pulumi.Output<string>;
    public readonly natprefix!: pulumi.Output<string>;
    public readonly ndbasereachtime!: pulumi.Output<number>;
    public readonly ndretransmissiontime!: pulumi.Output<number>;
    public readonly ralearning!: pulumi.Output<string>;
    public readonly routerredirection!: pulumi.Output<string>;
    public readonly td!: pulumi.Output<number>;
    public readonly usipnatprefix!: pulumi.Output<string>;

    /**
     * Create a Ipv6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv6Args | Ipv6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv6State | undefined;
            resourceInputs["dodad"] = state ? state.dodad : undefined;
            resourceInputs["natprefix"] = state ? state.natprefix : undefined;
            resourceInputs["ndbasereachtime"] = state ? state.ndbasereachtime : undefined;
            resourceInputs["ndretransmissiontime"] = state ? state.ndretransmissiontime : undefined;
            resourceInputs["ralearning"] = state ? state.ralearning : undefined;
            resourceInputs["routerredirection"] = state ? state.routerredirection : undefined;
            resourceInputs["td"] = state ? state.td : undefined;
            resourceInputs["usipnatprefix"] = state ? state.usipnatprefix : undefined;
        } else {
            const args = argsOrState as Ipv6Args | undefined;
            resourceInputs["dodad"] = args ? args.dodad : undefined;
            resourceInputs["natprefix"] = args ? args.natprefix : undefined;
            resourceInputs["ndbasereachtime"] = args ? args.ndbasereachtime : undefined;
            resourceInputs["ndretransmissiontime"] = args ? args.ndretransmissiontime : undefined;
            resourceInputs["ralearning"] = args ? args.ralearning : undefined;
            resourceInputs["routerredirection"] = args ? args.routerredirection : undefined;
            resourceInputs["td"] = args ? args.td : undefined;
            resourceInputs["usipnatprefix"] = args ? args.usipnatprefix : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv6 resources.
 */
export interface Ipv6State {
    dodad?: pulumi.Input<string>;
    natprefix?: pulumi.Input<string>;
    ndbasereachtime?: pulumi.Input<number>;
    ndretransmissiontime?: pulumi.Input<number>;
    ralearning?: pulumi.Input<string>;
    routerredirection?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    usipnatprefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ipv6 resource.
 */
export interface Ipv6Args {
    dodad?: pulumi.Input<string>;
    natprefix?: pulumi.Input<string>;
    ndbasereachtime?: pulumi.Input<number>;
    ndretransmissiontime?: pulumi.Input<number>;
    ralearning?: pulumi.Input<string>;
    routerredirection?: pulumi.Input<string>;
    td?: pulumi.Input<number>;
    usipnatprefix?: pulumi.Input<string>;
}
