// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsOauthClientCertificate(args: GetIdentityDomainsOauthClientCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsOauthClientCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsOauthClientCertificate:getIdentityDomainsOauthClientCertificate", {
        "authorization": args.authorization,
        "idcsEndpoint": args.idcsEndpoint,
        "oAuthClientCertificateId": args.oAuthClientCertificateId,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsOauthClientCertificate.
 */
export interface GetIdentityDomainsOauthClientCertificateArgs {
    authorization?: string;
    idcsEndpoint: string;
    oAuthClientCertificateId: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsOauthClientCertificate.
 */
export interface GetIdentityDomainsOauthClientCertificateResult {
    readonly authorization?: string;
    readonly certEndDate: string;
    readonly certStartDate: string;
    readonly certificateAlias: string;
    readonly compartmentOcid: string;
    readonly deleteInProgress: boolean;
    readonly domainOcid: string;
    readonly externalId: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsOauthClientCertificateIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsOauthClientCertificateIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly keyStoreId: string;
    readonly keyStoreName: string;
    readonly keyStorePassword: string;
    readonly map: string;
    readonly metas: outputs.GetIdentityDomainsOauthClientCertificateMeta[];
    readonly oAuthClientCertificateId: string;
    readonly ocid: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly sha1thumbprint: string;
    readonly sha256thumbprint: string;
    readonly tags: outputs.GetIdentityDomainsOauthClientCertificateTag[];
    readonly tenancyOcid: string;
    readonly x509base64certificate: string;
}
export function getIdentityDomainsOauthClientCertificateOutput(args: GetIdentityDomainsOauthClientCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsOauthClientCertificateResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsOauthClientCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsOauthClientCertificate.
 */
export interface GetIdentityDomainsOauthClientCertificateOutputArgs {
    authorization?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    oAuthClientCertificateId: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
