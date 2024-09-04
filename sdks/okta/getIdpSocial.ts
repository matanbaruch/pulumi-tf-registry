// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIdpSocial(args?: GetIdpSocialArgs, opts?: pulumi.InvokeOptions): Promise<GetIdpSocialResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getIdpSocial:getIdpSocial", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdpSocial.
 */
export interface GetIdpSocialArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getIdpSocial.
 */
export interface GetIdpSocialResult {
    readonly accountLinkAction: string;
    readonly accountLinkGroupIncludes: string[];
    readonly authorizationBinding: string;
    readonly authorizationUrl: string;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly deprovisionedAction: string;
    readonly groupsAction: string;
    readonly groupsAssignments: string[];
    readonly groupsAttribute: string;
    readonly groupsFilters: string[];
    readonly id?: string;
    readonly issuerMode: string;
    readonly maxClockSkew: number;
    readonly name?: string;
    readonly profileMaster: boolean;
    readonly protocolType: string;
    readonly provisioningAction: string;
    readonly scopes: string[];
    readonly status: string;
    readonly subjectMatchAttribute: string;
    readonly subjectMatchType: string;
    readonly suspendedAction: string;
    readonly tokenBinding: string;
    readonly tokenUrl: string;
    readonly type: string;
    readonly usernameTemplate: string;
}
export function getIdpSocialOutput(args?: GetIdpSocialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdpSocialResult> {
    return pulumi.output(args).apply((a: any) => getIdpSocial(a, opts))
}

/**
 * A collection of arguments for invoking getIdpSocial.
 */
export interface GetIdpSocialOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
