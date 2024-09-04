// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PimAnycastRpPeer extends pulumi.CustomResource {
    /**
     * Get an existing PimAnycastRpPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PimAnycastRpPeerState, opts?: pulumi.CustomResourceOptions): PimAnycastRpPeer {
        return new PimAnycastRpPeer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/pimAnycastRpPeer:PimAnycastRpPeer';

    /**
     * Returns true if the given object is an instance of PimAnycastRpPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PimAnycastRpPeer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PimAnycastRpPeer.__pulumiType;
    }

    /**
     * Anycast RP address.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * RP set address.
     */
    public readonly rpSetAddress!: pulumi.Output<string>;
    /**
     * VRF name.
     */
    public readonly vrfName!: pulumi.Output<string>;

    /**
     * Create a PimAnycastRpPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PimAnycastRpPeerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PimAnycastRpPeerArgs | PimAnycastRpPeerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PimAnycastRpPeerState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["rpSetAddress"] = state ? state.rpSetAddress : undefined;
            resourceInputs["vrfName"] = state ? state.vrfName : undefined;
        } else {
            const args = argsOrState as PimAnycastRpPeerArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.rpSetAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rpSetAddress'");
            }
            if ((!args || args.vrfName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrfName'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["rpSetAddress"] = args ? args.rpSetAddress : undefined;
            resourceInputs["vrfName"] = args ? args.vrfName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PimAnycastRpPeer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PimAnycastRpPeer resources.
 */
export interface PimAnycastRpPeerState {
    /**
     * Anycast RP address.
     */
    address?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * RP set address.
     */
    rpSetAddress?: pulumi.Input<string>;
    /**
     * VRF name.
     */
    vrfName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PimAnycastRpPeer resource.
 */
export interface PimAnycastRpPeerArgs {
    /**
     * Anycast RP address.
     */
    address: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * RP set address.
     */
    rpSetAddress: pulumi.Input<string>;
    /**
     * VRF name.
     */
    vrfName: pulumi.Input<string>;
}
