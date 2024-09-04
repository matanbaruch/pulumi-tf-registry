// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ReverseIpv6 extends pulumi.CustomResource {
    /**
     * Get an existing ReverseIpv6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReverseIpv6State, opts?: pulumi.CustomResourceOptions): ReverseIpv6 {
        return new ReverseIpv6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vultr:index/reverseIpv6:ReverseIpv6';

    /**
     * Returns true if the given object is an instance of ReverseIpv6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReverseIpv6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReverseIpv6.__pulumiType;
    }

    public readonly instanceId!: pulumi.Output<string>;
    public readonly ip!: pulumi.Output<string>;
    public readonly reverse!: pulumi.Output<string>;

    /**
     * Create a ReverseIpv6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReverseIpv6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReverseIpv6Args | ReverseIpv6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReverseIpv6State | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["reverse"] = state ? state.reverse : undefined;
        } else {
            const args = argsOrState as ReverseIpv6Args | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.reverse === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reverse'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["reverse"] = args ? args.reverse : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReverseIpv6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReverseIpv6 resources.
 */
export interface ReverseIpv6State {
    instanceId?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    reverse?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ReverseIpv6 resource.
 */
export interface ReverseIpv6Args {
    instanceId: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    reverse: pulumi.Input<string>;
}
