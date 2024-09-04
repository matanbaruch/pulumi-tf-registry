// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6NatPoolGroupMember extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6NatPoolGroupMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6NatPoolGroupMemberState, opts?: pulumi.CustomResourceOptions): Cgnv6NatPoolGroupMember {
        return new Cgnv6NatPoolGroupMember(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6NatPoolGroupMember:Cgnv6NatPoolGroupMember';

    /**
     * Returns true if the given object is an instance of Cgnv6NatPoolGroupMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6NatPoolGroupMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6NatPoolGroupMember.__pulumiType;
    }

    /**
     * PoolGroupName
     */
    public readonly poolGroupName!: pulumi.Output<string>;
    /**
     * Specify CGNv6 NAT pool name
     */
    public readonly poolName!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6NatPoolGroupMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6NatPoolGroupMemberArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6NatPoolGroupMemberArgs | Cgnv6NatPoolGroupMemberState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6NatPoolGroupMemberState | undefined;
            resourceInputs["poolGroupName"] = state ? state.poolGroupName : undefined;
            resourceInputs["poolName"] = state ? state.poolName : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6NatPoolGroupMemberArgs | undefined;
            if ((!args || args.poolGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolGroupName'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            resourceInputs["poolGroupName"] = args ? args.poolGroupName : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6NatPoolGroupMember.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6NatPoolGroupMember resources.
 */
export interface Cgnv6NatPoolGroupMemberState {
    /**
     * PoolGroupName
     */
    poolGroupName?: pulumi.Input<string>;
    /**
     * Specify CGNv6 NAT pool name
     */
    poolName?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6NatPoolGroupMember resource.
 */
export interface Cgnv6NatPoolGroupMemberArgs {
    /**
     * PoolGroupName
     */
    poolGroupName: pulumi.Input<string>;
    /**
     * Specify CGNv6 NAT pool name
     */
    poolName: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
