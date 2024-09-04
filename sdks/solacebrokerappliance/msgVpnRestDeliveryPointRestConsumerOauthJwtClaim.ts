// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimState, opts?: pulumi.CustomResourceOptions): MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim {
        return new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnRestDeliveryPointRestConsumerOauthJwtClaim:MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim';

    /**
     * Returns true if the given object is an instance of MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The name of the additional claim. Cannot be "exp", "iat", or "jti".
     */
    public readonly oauthJwtClaimName!: pulumi.Output<string>;
    /**
     * The value of the additional claim, which must be a string containing a valid JSON value. Note that this attribute
     * requires replacement of the resource when updated.
     */
    public readonly oauthJwtClaimValue!: pulumi.Output<string>;
    /**
     * The name of the REST Consumer.
     */
    public readonly restConsumerName!: pulumi.Output<string>;
    /**
     * The name of the REST Delivery Point.
     */
    public readonly restDeliveryPointName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs | MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["oauthJwtClaimName"] = state ? state.oauthJwtClaimName : undefined;
            resourceInputs["oauthJwtClaimValue"] = state ? state.oauthJwtClaimValue : undefined;
            resourceInputs["restConsumerName"] = state ? state.restConsumerName : undefined;
            resourceInputs["restDeliveryPointName"] = state ? state.restDeliveryPointName : undefined;
        } else {
            const args = argsOrState as MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.oauthJwtClaimName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oauthJwtClaimName'");
            }
            if ((!args || args.oauthJwtClaimValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oauthJwtClaimValue'");
            }
            if ((!args || args.restConsumerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restConsumerName'");
            }
            if ((!args || args.restDeliveryPointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restDeliveryPointName'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["oauthJwtClaimName"] = args ? args.oauthJwtClaimName : undefined;
            resourceInputs["oauthJwtClaimValue"] = args ? args.oauthJwtClaimValue : undefined;
            resourceInputs["restConsumerName"] = args ? args.restConsumerName : undefined;
            resourceInputs["restDeliveryPointName"] = args ? args.restDeliveryPointName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim resources.
 */
export interface MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The name of the additional claim. Cannot be "exp", "iat", or "jti".
     */
    oauthJwtClaimName?: pulumi.Input<string>;
    /**
     * The value of the additional claim, which must be a string containing a valid JSON value. Note that this attribute
     * requires replacement of the resource when updated.
     */
    oauthJwtClaimValue?: pulumi.Input<string>;
    /**
     * The name of the REST Consumer.
     */
    restConsumerName?: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnRestDeliveryPointRestConsumerOauthJwtClaim resource.
 */
export interface MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The name of the additional claim. Cannot be "exp", "iat", or "jti".
     */
    oauthJwtClaimName: pulumi.Input<string>;
    /**
     * The value of the additional claim, which must be a string containing a valid JSON value. Note that this attribute
     * requires replacement of the resource when updated.
     */
    oauthJwtClaimValue: pulumi.Input<string>;
    /**
     * The name of the REST Consumer.
     */
    restConsumerName: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName: pulumi.Input<string>;
}
