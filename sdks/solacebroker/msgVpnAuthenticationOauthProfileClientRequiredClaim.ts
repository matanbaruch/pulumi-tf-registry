// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnAuthenticationOauthProfileClientRequiredClaim extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnAuthenticationOauthProfileClientRequiredClaim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnAuthenticationOauthProfileClientRequiredClaimState, opts?: pulumi.CustomResourceOptions): MsgVpnAuthenticationOauthProfileClientRequiredClaim {
        return new MsgVpnAuthenticationOauthProfileClientRequiredClaim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnAuthenticationOauthProfileClientRequiredClaim:MsgVpnAuthenticationOauthProfileClientRequiredClaim';

    /**
     * Returns true if the given object is an instance of MsgVpnAuthenticationOauthProfileClientRequiredClaim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnAuthenticationOauthProfileClientRequiredClaim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnAuthenticationOauthProfileClientRequiredClaim.__pulumiType;
    }

    /**
     * The name of the ID token claim to verify.
     */
    public readonly clientRequiredClaimName!: pulumi.Output<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    public readonly clientRequiredClaimValue!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The name of the OAuth profile.
     */
    public readonly oauthProfileName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnAuthenticationOauthProfileClientRequiredClaim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnAuthenticationOauthProfileClientRequiredClaimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnAuthenticationOauthProfileClientRequiredClaimArgs | MsgVpnAuthenticationOauthProfileClientRequiredClaimState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnAuthenticationOauthProfileClientRequiredClaimState | undefined;
            resourceInputs["clientRequiredClaimName"] = state ? state.clientRequiredClaimName : undefined;
            resourceInputs["clientRequiredClaimValue"] = state ? state.clientRequiredClaimValue : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["oauthProfileName"] = state ? state.oauthProfileName : undefined;
        } else {
            const args = argsOrState as MsgVpnAuthenticationOauthProfileClientRequiredClaimArgs | undefined;
            if ((!args || args.clientRequiredClaimName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientRequiredClaimName'");
            }
            if ((!args || args.clientRequiredClaimValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientRequiredClaimValue'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.oauthProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oauthProfileName'");
            }
            resourceInputs["clientRequiredClaimName"] = args ? args.clientRequiredClaimName : undefined;
            resourceInputs["clientRequiredClaimValue"] = args ? args.clientRequiredClaimValue : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["oauthProfileName"] = args ? args.oauthProfileName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnAuthenticationOauthProfileClientRequiredClaim.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnAuthenticationOauthProfileClientRequiredClaim resources.
 */
export interface MsgVpnAuthenticationOauthProfileClientRequiredClaimState {
    /**
     * The name of the ID token claim to verify.
     */
    clientRequiredClaimName?: pulumi.Input<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    clientRequiredClaimValue?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The name of the OAuth profile.
     */
    oauthProfileName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnAuthenticationOauthProfileClientRequiredClaim resource.
 */
export interface MsgVpnAuthenticationOauthProfileClientRequiredClaimArgs {
    /**
     * The name of the ID token claim to verify.
     */
    clientRequiredClaimName: pulumi.Input<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    clientRequiredClaimValue: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The name of the OAuth profile.
     */
    oauthProfileName: pulumi.Input<string>;
}
