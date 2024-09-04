// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUser(args?: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("googleworkspace:index/getUser:getUser", {
        "id": args.id,
        "primaryEmail": args.primaryEmail,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    id?: string;
    primaryEmail?: string;
}

/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly addresses: outputs.GetUserAddress[];
    readonly agreedToTerms: boolean;
    readonly aliases: string[];
    readonly archived: boolean;
    readonly changePasswordAtNextLogin: boolean;
    readonly creationTime: string;
    readonly customSchemas: outputs.GetUserCustomSchema[];
    readonly customerId: string;
    readonly deletionTime: string;
    readonly emails: outputs.GetUserEmail[];
    readonly etag: string;
    readonly externalIds: outputs.GetUserExternalId[];
    readonly hashFunction: string;
    readonly id: string;
    readonly ims: outputs.GetUserIm[];
    readonly includeInGlobalAddressList: boolean;
    readonly ipAllowlist: boolean;
    readonly isAdmin: boolean;
    readonly isDelegatedAdmin: boolean;
    readonly isEnforcedIn2StepVerification: boolean;
    readonly isEnrolledIn2StepVerification: boolean;
    readonly isMailboxSetup: boolean;
    readonly keywords: outputs.GetUserKeyword[];
    readonly languages: outputs.GetUserLanguage[];
    readonly lastLoginTime: string;
    readonly locations: outputs.GetUserLocation[];
    readonly names: outputs.GetUserName[];
    readonly nonEditableAliases: string[];
    readonly orgUnitPath: string;
    readonly organizations: outputs.GetUserOrganization[];
    readonly password: string;
    readonly phones: outputs.GetUserPhone[];
    readonly posixAccounts: outputs.GetUserPosixAccount[];
    readonly primaryEmail: string;
    readonly recoveryEmail: string;
    readonly recoveryPhone: string;
    readonly relations: outputs.GetUserRelation[];
    readonly sshPublicKeys: outputs.GetUserSshPublicKey[];
    readonly suspended: boolean;
    readonly suspensionReason: string;
    readonly thumbnailPhotoEtag: string;
    readonly thumbnailPhotoUrl: string;
    readonly websites: outputs.GetUserWebsite[];
}
export function getUserOutput(args?: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult> {
    return pulumi.output(args).apply((a: any) => getUser(a, opts))
}

/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    id?: pulumi.Input<string>;
    primaryEmail?: pulumi.Input<string>;
}
