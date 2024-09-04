// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GroupCryptoPolicy extends pulumi.CustomResource {
    /**
     * Get an existing GroupCryptoPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupCryptoPolicyState, opts?: pulumi.CustomResourceOptions): GroupCryptoPolicy {
        return new GroupCryptoPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dsm:index/groupCryptoPolicy:GroupCryptoPolicy';

    /**
     * Returns true if the given object is an instance of GroupCryptoPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupCryptoPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupCryptoPolicy.__pulumiType;
    }

    /**
     * Account ID from Fortanix DSM.
     */
    public /*out*/ readonly acctId!: pulumi.Output<string>;
    /**
     * The Fortanix DSM group object quorum approval policy definition as a JSON string.
     */
    public /*out*/ readonly approvalPolicy!: pulumi.Output<string>;
    /**
     * The creator of the group from Fortanix DSM. * `user`: If the group was created by a user, the computed value will be the
     * matching user id. * `app`: If the group was created by a app, the computed value will be the matching app id.
     */
    public /*out*/ readonly creator!: pulumi.Output<{[key: string]: string}>;
    /**
     * The Fortanix DSM group object cryptographic policy definition as a JSON string
     */
    public readonly cryptographicPolicy!: pulumi.Output<string>;
    /**
     * The Fortanix DSM group object description.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * Group object ID from Fortanix DSM.
     */
    public /*out*/ readonly groupId!: pulumi.Output<string>;
    /**
     * The Fortanix DSM group object name.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a GroupCryptoPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupCryptoPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupCryptoPolicyArgs | GroupCryptoPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupCryptoPolicyState | undefined;
            resourceInputs["acctId"] = state ? state.acctId : undefined;
            resourceInputs["approvalPolicy"] = state ? state.approvalPolicy : undefined;
            resourceInputs["creator"] = state ? state.creator : undefined;
            resourceInputs["cryptographicPolicy"] = state ? state.cryptographicPolicy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as GroupCryptoPolicyArgs | undefined;
            if ((!args || args.cryptographicPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cryptographicPolicy'");
            }
            resourceInputs["cryptographicPolicy"] = args ? args.cryptographicPolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["acctId"] = undefined /*out*/;
            resourceInputs["approvalPolicy"] = undefined /*out*/;
            resourceInputs["creator"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["groupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GroupCryptoPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroupCryptoPolicy resources.
 */
export interface GroupCryptoPolicyState {
    /**
     * Account ID from Fortanix DSM.
     */
    acctId?: pulumi.Input<string>;
    /**
     * The Fortanix DSM group object quorum approval policy definition as a JSON string.
     */
    approvalPolicy?: pulumi.Input<string>;
    /**
     * The creator of the group from Fortanix DSM. * `user`: If the group was created by a user, the computed value will be the
     * matching user id. * `app`: If the group was created by a app, the computed value will be the matching app id.
     */
    creator?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Fortanix DSM group object cryptographic policy definition as a JSON string
     */
    cryptographicPolicy?: pulumi.Input<string>;
    /**
     * The Fortanix DSM group object description.
     */
    description?: pulumi.Input<string>;
    /**
     * Group object ID from Fortanix DSM.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The Fortanix DSM group object name.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroupCryptoPolicy resource.
 */
export interface GroupCryptoPolicyArgs {
    /**
     * The Fortanix DSM group object cryptographic policy definition as a JSON string
     */
    cryptographicPolicy: pulumi.Input<string>;
    /**
     * The Fortanix DSM group object name.
     */
    name?: pulumi.Input<string>;
}
