// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6Nat64FragmentationOutbound extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6Nat64FragmentationOutbound resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6Nat64FragmentationOutboundState, opts?: pulumi.CustomResourceOptions): Cgnv6Nat64FragmentationOutbound {
        return new Cgnv6Nat64FragmentationOutbound(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6Nat64FragmentationOutbound:Cgnv6Nat64FragmentationOutbound';

    /**
     * Returns true if the given object is an instance of Cgnv6Nat64FragmentationOutbound.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6Nat64FragmentationOutbound {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6Nat64FragmentationOutbound.__pulumiType;
    }

    /**
     * 'drop': Drop Silently; 'ipv4': Use IPv4 fragmentation (default); 'send-icmpv6': Send ICMPv6 Type 2 Code 0 (Packet Too
     * Big);
     */
    public readonly fragAction!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6Nat64FragmentationOutbound resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6Nat64FragmentationOutboundArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6Nat64FragmentationOutboundArgs | Cgnv6Nat64FragmentationOutboundState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6Nat64FragmentationOutboundState | undefined;
            resourceInputs["fragAction"] = state ? state.fragAction : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6Nat64FragmentationOutboundArgs | undefined;
            resourceInputs["fragAction"] = args ? args.fragAction : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6Nat64FragmentationOutbound.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6Nat64FragmentationOutbound resources.
 */
export interface Cgnv6Nat64FragmentationOutboundState {
    /**
     * 'drop': Drop Silently; 'ipv4': Use IPv4 fragmentation (default); 'send-icmpv6': Send ICMPv6 Type 2 Code 0 (Packet Too
     * Big);
     */
    fragAction?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6Nat64FragmentationOutbound resource.
 */
export interface Cgnv6Nat64FragmentationOutboundArgs {
    /**
     * 'drop': Drop Silently; 'ipv4': Use IPv4 fragmentation (default); 'send-icmpv6': Send ICMPv6 Type 2 Code 0 (Packet Too
     * Big);
     */
    fragAction?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
