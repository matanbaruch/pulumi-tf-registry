// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnAuthenticationOauthProfile(args: GetMsgVpnAuthenticationOauthProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnAuthenticationOauthProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnAuthenticationOauthProfile:getMsgVpnAuthenticationOauthProfile", {
        "msgVpnName": args.msgVpnName,
        "oauthProfileName": args.oauthProfileName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnAuthenticationOauthProfile.
 */
export interface GetMsgVpnAuthenticationOauthProfileArgs {
    msgVpnName: string;
    oauthProfileName: string;
}

/**
 * A collection of values returned by getMsgVpnAuthenticationOauthProfile.
 */
export interface GetMsgVpnAuthenticationOauthProfileResult {
    readonly authorizationGroupsClaimName: string;
    readonly authorizationGroupsClaimStringFormat: string;
    readonly clientId: string;
    readonly clientRequiredType: string;
    readonly clientValidateTypeEnabled: boolean;
    readonly disconnectOnTokenExpirationEnabled: boolean;
    readonly enabled: boolean;
    readonly endpointDiscovery: string;
    readonly endpointDiscoveryRefreshInterval: number;
    readonly endpointIntrospection: string;
    readonly endpointIntrospectionTimeout: number;
    readonly endpointJwks: string;
    readonly endpointJwksRefreshInterval: number;
    readonly endpointUserinfo: string;
    readonly endpointUserinfoTimeout: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly issuer: string;
    readonly mqttUsernameValidateEnabled: boolean;
    readonly msgVpnName: string;
    readonly oauthProfileName: string;
    readonly oauthRole: string;
    readonly proxyName: string;
    readonly resourceServerParseAccessTokenEnabled: boolean;
    readonly resourceServerRequiredAudience: string;
    readonly resourceServerRequiredIssuer: string;
    readonly resourceServerRequiredScope: string;
    readonly resourceServerRequiredType: string;
    readonly resourceServerValidateAudienceEnabled: boolean;
    readonly resourceServerValidateIssuerEnabled: boolean;
    readonly resourceServerValidateScopeEnabled: boolean;
    readonly resourceServerValidateTypeEnabled: boolean;
    readonly usernameClaimName: string;
}
export function getMsgVpnAuthenticationOauthProfileOutput(args: GetMsgVpnAuthenticationOauthProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnAuthenticationOauthProfileResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnAuthenticationOauthProfile(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnAuthenticationOauthProfile.
 */
export interface GetMsgVpnAuthenticationOauthProfileOutputArgs {
    msgVpnName: pulumi.Input<string>;
    oauthProfileName: pulumi.Input<string>;
}
