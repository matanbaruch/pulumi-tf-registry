// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6StatefulFirewallAlgRtp extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6StatefulFirewallAlgRtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6StatefulFirewallAlgRtpState, opts?: pulumi.CustomResourceOptions): Cgnv6StatefulFirewallAlgRtp {
        return new Cgnv6StatefulFirewallAlgRtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6StatefulFirewallAlgRtp:Cgnv6StatefulFirewallAlgRtp';

    /**
     * Returns true if the given object is an instance of Cgnv6StatefulFirewallAlgRtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6StatefulFirewallAlgRtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6StatefulFirewallAlgRtp.__pulumiType;
    }

    /**
     * RTP/RTCP STUN timeout (default: 5 minutes)}
     */
    public readonly rtpStunTimeout!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6StatefulFirewallAlgRtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6StatefulFirewallAlgRtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6StatefulFirewallAlgRtpArgs | Cgnv6StatefulFirewallAlgRtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6StatefulFirewallAlgRtpState | undefined;
            resourceInputs["rtpStunTimeout"] = state ? state.rtpStunTimeout : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6StatefulFirewallAlgRtpArgs | undefined;
            resourceInputs["rtpStunTimeout"] = args ? args.rtpStunTimeout : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6StatefulFirewallAlgRtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6StatefulFirewallAlgRtp resources.
 */
export interface Cgnv6StatefulFirewallAlgRtpState {
    /**
     * RTP/RTCP STUN timeout (default: 5 minutes)}
     */
    rtpStunTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6StatefulFirewallAlgRtp resource.
 */
export interface Cgnv6StatefulFirewallAlgRtpArgs {
    /**
     * RTP/RTCP STUN timeout (default: 5 minutes)}
     */
    rtpStunTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
