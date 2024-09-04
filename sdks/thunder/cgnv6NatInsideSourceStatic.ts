// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6NatInsideSourceStatic extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6NatInsideSourceStatic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6NatInsideSourceStaticState, opts?: pulumi.CustomResourceOptions): Cgnv6NatInsideSourceStatic {
        return new Cgnv6NatInsideSourceStatic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6NatInsideSourceStatic:Cgnv6NatInsideSourceStatic';

    /**
     * Returns true if the given object is an instance of Cgnv6NatInsideSourceStatic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6NatInsideSourceStatic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6NatInsideSourceStatic.__pulumiType;
    }

    /**
     * NAT Address
     */
    public readonly natAddress!: pulumi.Output<string | undefined>;
    /**
     * Inside User Partition (Partition Name)
     */
    public readonly partition!: pulumi.Output<string>;
    /**
     * Original Source Address
     */
    public readonly srcAddress!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    public readonly vrid!: pulumi.Output<number | undefined>;

    /**
     * Create a Cgnv6NatInsideSourceStatic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6NatInsideSourceStaticArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6NatInsideSourceStaticArgs | Cgnv6NatInsideSourceStaticState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6NatInsideSourceStaticState | undefined;
            resourceInputs["natAddress"] = state ? state.natAddress : undefined;
            resourceInputs["partition"] = state ? state.partition : undefined;
            resourceInputs["srcAddress"] = state ? state.srcAddress : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vrid"] = state ? state.vrid : undefined;
        } else {
            const args = argsOrState as Cgnv6NatInsideSourceStaticArgs | undefined;
            if ((!args || args.partition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partition'");
            }
            if ((!args || args.srcAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcAddress'");
            }
            resourceInputs["natAddress"] = args ? args.natAddress : undefined;
            resourceInputs["partition"] = args ? args.partition : undefined;
            resourceInputs["srcAddress"] = args ? args.srcAddress : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vrid"] = args ? args.vrid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6NatInsideSourceStatic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6NatInsideSourceStatic resources.
 */
export interface Cgnv6NatInsideSourceStaticState {
    /**
     * NAT Address
     */
    natAddress?: pulumi.Input<string>;
    /**
     * Inside User Partition (Partition Name)
     */
    partition?: pulumi.Input<string>;
    /**
     * Original Source Address
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    vrid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Cgnv6NatInsideSourceStatic resource.
 */
export interface Cgnv6NatInsideSourceStaticArgs {
    /**
     * NAT Address
     */
    natAddress?: pulumi.Input<string>;
    /**
     * Inside User Partition (Partition Name)
     */
    partition: pulumi.Input<string>;
    /**
     * Original Source Address
     */
    srcAddress: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    vrid?: pulumi.Input<number>;
}
