// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6LsnStunTimeoutTcp extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6LsnStunTimeoutTcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6LsnStunTimeoutTcpState, opts?: pulumi.CustomResourceOptions): Cgnv6LsnStunTimeoutTcp {
        return new Cgnv6LsnStunTimeoutTcp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6LsnStunTimeoutTcp:Cgnv6LsnStunTimeoutTcp';

    /**
     * Returns true if the given object is an instance of Cgnv6LsnStunTimeoutTcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6LsnStunTimeoutTcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6LsnStunTimeoutTcp.__pulumiType;
    }

    /**
     * Port Range (Port Range End)
     */
    public readonly portEnd!: pulumi.Output<number>;
    /**
     * Port Range (Port Range Start)
     */
    public readonly portStart!: pulumi.Output<number>;
    /**
     * STUN timeout in minutes (default: 2 minutes)
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6LsnStunTimeoutTcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6LsnStunTimeoutTcpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6LsnStunTimeoutTcpArgs | Cgnv6LsnStunTimeoutTcpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6LsnStunTimeoutTcpState | undefined;
            resourceInputs["portEnd"] = state ? state.portEnd : undefined;
            resourceInputs["portStart"] = state ? state.portStart : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6LsnStunTimeoutTcpArgs | undefined;
            if ((!args || args.portEnd === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portEnd'");
            }
            if ((!args || args.portStart === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portStart'");
            }
            resourceInputs["portEnd"] = args ? args.portEnd : undefined;
            resourceInputs["portStart"] = args ? args.portStart : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6LsnStunTimeoutTcp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6LsnStunTimeoutTcp resources.
 */
export interface Cgnv6LsnStunTimeoutTcpState {
    /**
     * Port Range (Port Range End)
     */
    portEnd?: pulumi.Input<number>;
    /**
     * Port Range (Port Range Start)
     */
    portStart?: pulumi.Input<number>;
    /**
     * STUN timeout in minutes (default: 2 minutes)
     */
    timeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6LsnStunTimeoutTcp resource.
 */
export interface Cgnv6LsnStunTimeoutTcpArgs {
    /**
     * Port Range (Port Range End)
     */
    portEnd: pulumi.Input<number>;
    /**
     * Port Range (Port Range Start)
     */
    portStart: pulumi.Input<number>;
    /**
     * STUN timeout in minutes (default: 2 minutes)
     */
    timeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
