// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("files:index/getUser:getUser", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    id: number;
}

/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly active2fa: boolean;
    readonly adminGroupIds: number[];
    readonly allowedIps: string;
    readonly apiKeysCount: number;
    readonly attachmentsPermission: boolean;
    readonly authenticateUntil: string;
    readonly authenticationMethod: string;
    readonly avatarUrl: string;
    readonly billingPermission: boolean;
    readonly bypassInactiveDisable: boolean;
    readonly bypassSiteAllowedIps: boolean;
    readonly company: string;
    readonly createdAt: string;
    readonly davPermission: boolean;
    readonly daysRemainingUntilPasswordExpire: number;
    readonly disabled: boolean;
    readonly disabledExpiredOrInactive: boolean;
    readonly email: string;
    readonly externallyManaged: boolean;
    readonly firstLoginAt: string;
    readonly ftpPermission: boolean;
    readonly groupIds: string;
    readonly headerText: string;
    readonly id: number;
    readonly language: string;
    readonly lastActiveAt: string;
    readonly lastApiUseAt: string;
    readonly lastDavLoginAt: string;
    readonly lastDesktopLoginAt: string;
    readonly lastFtpLoginAt: string;
    readonly lastLoginAt: string;
    readonly lastProtocolCipher: string;
    readonly lastRestapiLoginAt: string;
    readonly lastSftpLoginAt: string;
    readonly lastWebLoginAt: string;
    readonly lockoutExpires: string;
    readonly name: string;
    readonly notes: string;
    readonly notificationDailySendTime: number;
    readonly officeIntegrationEnabled: boolean;
    readonly passwordExpireAt: string;
    readonly passwordExpired: boolean;
    readonly passwordSetAt: string;
    readonly passwordValidityDays: number;
    readonly publicKeysCount: number;
    readonly readonlySiteAdmin: boolean;
    readonly receiveAdminAlerts: boolean;
    readonly require2fa: string;
    readonly requireLoginBy: string;
    readonly requirePasswordChange: boolean;
    readonly restapiPermission: boolean;
    readonly selfManaged: boolean;
    readonly sftpPermission: boolean;
    readonly siteAdmin: boolean;
    readonly skipWelcomeScreen: boolean;
    readonly sslRequired: string;
    readonly ssoStrategyId: number;
    readonly subscribeToNewsletter: boolean;
    readonly timeZone: string;
    readonly typeOf2fa: string;
    readonly typeOf2faForDisplay: string;
    readonly userRoot: string;
    readonly username: string;
}
export function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    id: pulumi.Input<number>;
}
