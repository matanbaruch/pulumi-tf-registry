// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimState, opts?: pulumi.CustomResourceOptions): MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim {
        return new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnAuthenticationOauthProfileResourceServerRequiredClaim:MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim';

    /**
     * Returns true if the given object is an instance of MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The name of the OAuth profile.
     */
    public readonly oauthProfileName!: pulumi.Output<string>;
    /**
     * The name of the access token claim to verify.
     */
    public readonly resourceServerRequiredClaimName!: pulumi.Output<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    public readonly resourceServerRequiredClaimValue!: pulumi.Output<string>;

    /**
     * Create a MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimArgs | MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["oauthProfileName"] = state ? state.oauthProfileName : undefined;
            resourceInputs["resourceServerRequiredClaimName"] = state ? state.resourceServerRequiredClaimName : undefined;
            resourceInputs["resourceServerRequiredClaimValue"] = state ? state.resourceServerRequiredClaimValue : undefined;
        } else {
            const args = argsOrState as MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.oauthProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oauthProfileName'");
            }
            if ((!args || args.resourceServerRequiredClaimName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceServerRequiredClaimName'");
            }
            if ((!args || args.resourceServerRequiredClaimValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceServerRequiredClaimValue'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["oauthProfileName"] = args ? args.oauthProfileName : undefined;
            resourceInputs["resourceServerRequiredClaimName"] = args ? args.resourceServerRequiredClaimName : undefined;
            resourceInputs["resourceServerRequiredClaimValue"] = args ? args.resourceServerRequiredClaimValue : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim resources.
 */
export interface MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The name of the OAuth profile.
     */
    oauthProfileName?: pulumi.Input<string>;
    /**
     * The name of the access token claim to verify.
     */
    resourceServerRequiredClaimName?: pulumi.Input<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    resourceServerRequiredClaimValue?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnAuthenticationOauthProfileResourceServerRequiredClaim resource.
 */
export interface MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The name of the OAuth profile.
     */
    oauthProfileName: pulumi.Input<string>;
    /**
     * The name of the access token claim to verify.
     */
    resourceServerRequiredClaimName: pulumi.Input<string>;
    /**
     * The required claim value. Note that this attribute requires replacement of the resource when updated.
     */
    resourceServerRequiredClaimValue: pulumi.Input<string>;
}
