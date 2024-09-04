// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsSmtpCredentials(args: GetIdentityDomainsSmtpCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsSmtpCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsSmtpCredentials:getIdentityDomainsSmtpCredentials", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "compartmentId": args.compartmentId,
        "id": args.id,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
        "smtpCredentialCount": args.smtpCredentialCount,
        "smtpCredentialFilter": args.smtpCredentialFilter,
        "sortBy": args.sortBy,
        "sortOrder": args.sortOrder,
        "startIndex": args.startIndex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsSmtpCredentials.
 */
export interface GetIdentityDomainsSmtpCredentialsArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    compartmentId?: string;
    id?: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
    smtpCredentialCount?: number;
    smtpCredentialFilter?: string;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
}

/**
 * A collection of values returned by getIdentityDomainsSmtpCredentials.
 */
export interface GetIdentityDomainsSmtpCredentialsResult {
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentId?: string;
    readonly id: string;
    readonly idcsEndpoint: string;
    readonly itemsPerPage: number;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly smtpCredentialCount?: number;
    readonly smtpCredentialFilter?: string;
    readonly smtpCredentials: outputs.GetIdentityDomainsSmtpCredentialsSmtpCredential[];
    readonly sortBy?: string;
    readonly sortOrder?: string;
    readonly startIndex?: number;
    readonly totalResults: number;
}
export function getIdentityDomainsSmtpCredentialsOutput(args: GetIdentityDomainsSmtpCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsSmtpCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsSmtpCredentials(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsSmtpCredentials.
 */
export interface GetIdentityDomainsSmtpCredentialsOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
    smtpCredentialCount?: pulumi.Input<number>;
    smtpCredentialFilter?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    sortOrder?: pulumi.Input<string>;
    startIndex?: pulumi.Input<number>;
}
