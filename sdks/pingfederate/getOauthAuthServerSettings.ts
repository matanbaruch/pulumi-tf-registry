// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOauthAuthServerSettings(opts?: pulumi.InvokeOptions): Promise<GetOauthAuthServerSettingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingfederate:index/getOauthAuthServerSettings:getOauthAuthServerSettings", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getOauthAuthServerSettings.
 */
export interface GetOauthAuthServerSettingsResult {
    readonly activationCodeCheckMode: string;
    readonly adminWebServicePcvRef: string;
    readonly allowUnidentifiedClientExtensionGrants: boolean;
    readonly allowUnidentifiedClientRoCreds: boolean;
    readonly allowedOrigins: string[];
    readonly approvedScopesAttribute: string;
    readonly atmIdForOAuthGrantManagement: string;
    readonly authorizationCodeEntropy: number;
    readonly authorizationCodeTimeout: number;
    readonly bypassActivationCodeConfirmation: boolean;
    readonly bypassAuthorizationForApprovedGrants: boolean;
    readonly clientSecretRetentionPeriod: number;
    readonly defaultScopeDescription: string;
    readonly devicePollingInterval: number;
    readonly disallowPlainPkce: boolean;
    readonly exclusiveScopeGroups: outputs.GetOauthAuthServerSettingsExclusiveScopeGroup[];
    readonly exclusiveScopes: outputs.GetOauthAuthServerSettingsExclusiveScope[];
    readonly id: string;
    readonly includeIssuerInAuthorizationResponse: boolean;
    readonly jwtSecuredAuthorizationResponseModeLifetime: number;
    readonly parReferenceLength: number;
    readonly parReferenceTimeout: number;
    readonly parStatus: string;
    readonly pendingAuthorizationTimeout: number;
    readonly persistentGrantContract: outputs.GetOauthAuthServerSettingsPersistentGrantContract;
    readonly persistentGrantIdleTimeout: number;
    readonly persistentGrantIdleTimeoutTimeUnit: string;
    readonly persistentGrantLifetime: number;
    readonly persistentGrantLifetimeUnit: string;
    readonly persistentGrantReuseGrantTypes: string[];
    readonly refreshRollingInterval: number;
    readonly refreshTokenLength: number;
    readonly refreshTokenRollingGracePeriod: number;
    readonly registeredAuthorizationPath: string;
    readonly rollRefreshTokenValues: boolean;
    readonly scopeForOAuthGrantManagement: string;
    readonly scopeGroups: outputs.GetOauthAuthServerSettingsScopeGroup[];
    readonly scopes: outputs.GetOauthAuthServerSettingsScope[];
    readonly tokenEndpointBaseUrl: string;
    readonly trackUserSessionsForLogout: boolean;
    readonly userAuthorizationConsentAdapter: string;
    readonly userAuthorizationConsentPageSetting: string;
    readonly userAuthorizationUrl: string;
}
export function getOauthAuthServerSettingsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOauthAuthServerSettingsResult> {
    return pulumi.output(getOauthAuthServerSettings(opts))
}
