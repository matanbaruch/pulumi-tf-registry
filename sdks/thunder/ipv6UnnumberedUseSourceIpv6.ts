// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv6UnnumberedUseSourceIpv6 extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6UnnumberedUseSourceIpv6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6UnnumberedUseSourceIpv6State, opts?: pulumi.CustomResourceOptions): Ipv6UnnumberedUseSourceIpv6 {
        return new Ipv6UnnumberedUseSourceIpv6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ipv6UnnumberedUseSourceIpv6:Ipv6UnnumberedUseSourceIpv6';

    /**
     * Returns true if the given object is an instance of Ipv6UnnumberedUseSourceIpv6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv6UnnumberedUseSourceIpv6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6UnnumberedUseSourceIpv6.__pulumiType;
    }

    /**
     * IPv6 address
     */
    public readonly updateSourceIpv6!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Ipv6UnnumberedUseSourceIpv6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Ipv6UnnumberedUseSourceIpv6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv6UnnumberedUseSourceIpv6Args | Ipv6UnnumberedUseSourceIpv6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv6UnnumberedUseSourceIpv6State | undefined;
            resourceInputs["updateSourceIpv6"] = state ? state.updateSourceIpv6 : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Ipv6UnnumberedUseSourceIpv6Args | undefined;
            resourceInputs["updateSourceIpv6"] = args ? args.updateSourceIpv6 : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6UnnumberedUseSourceIpv6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv6UnnumberedUseSourceIpv6 resources.
 */
export interface Ipv6UnnumberedUseSourceIpv6State {
    /**
     * IPv6 address
     */
    updateSourceIpv6?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ipv6UnnumberedUseSourceIpv6 resource.
 */
export interface Ipv6UnnumberedUseSourceIpv6Args {
    /**
     * IPv6 address
     */
    updateSourceIpv6?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
