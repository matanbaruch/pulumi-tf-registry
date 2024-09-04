// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCertificatesManagementCertificateAuthority(args: GetCertificatesManagementCertificateAuthorityArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificatesManagementCertificateAuthorityResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCertificatesManagementCertificateAuthority:getCertificatesManagementCertificateAuthority", {
        "certificateAuthorityId": args.certificateAuthorityId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCertificatesManagementCertificateAuthority.
 */
export interface GetCertificatesManagementCertificateAuthorityArgs {
    certificateAuthorityId: string;
}

/**
 * A collection of values returned by getCertificatesManagementCertificateAuthority.
 */
export interface GetCertificatesManagementCertificateAuthorityResult {
    readonly certificateAuthorityConfigs: outputs.GetCertificatesManagementCertificateAuthorityCertificateAuthorityConfig[];
    readonly certificateAuthorityId: string;
    readonly certificateAuthorityRules: outputs.GetCertificatesManagementCertificateAuthorityCertificateAuthorityRule[];
    readonly certificateRevocationListDetails: outputs.GetCertificatesManagementCertificateAuthorityCertificateRevocationListDetail[];
    readonly compartmentId: string;
    readonly configType: string;
    readonly currentVersions: outputs.GetCertificatesManagementCertificateAuthorityCurrentVersion[];
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly issuerCertificateAuthorityId: string;
    readonly kmsKeyId: string;
    readonly lifecycleDetails: string;
    readonly name: string;
    readonly signingAlgorithm: string;
    readonly state: string;
    readonly subjects: outputs.GetCertificatesManagementCertificateAuthoritySubject[];
    readonly timeCreated: string;
    readonly timeOfDeletion: string;
}
export function getCertificatesManagementCertificateAuthorityOutput(args: GetCertificatesManagementCertificateAuthorityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificatesManagementCertificateAuthorityResult> {
    return pulumi.output(args).apply((a: any) => getCertificatesManagementCertificateAuthority(a, opts))
}

/**
 * A collection of arguments for invoking getCertificatesManagementCertificateAuthority.
 */
export interface GetCertificatesManagementCertificateAuthorityOutputArgs {
    certificateAuthorityId: pulumi.Input<string>;
}
