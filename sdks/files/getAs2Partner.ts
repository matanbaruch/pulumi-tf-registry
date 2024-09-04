// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAs2Partner(args: GetAs2PartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetAs2PartnerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("files:index/getAs2Partner:getAs2Partner", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAs2Partner.
 */
export interface GetAs2PartnerArgs {
    id: number;
}

/**
 * A collection of values returned by getAs2Partner.
 */
export interface GetAs2PartnerResult {
    readonly as2StationId: number;
    readonly enableDedicatedIps: boolean;
    readonly hexPublicCertificateSerial: string;
    readonly httpAuthUsername: string;
    readonly id: number;
    readonly mdnValidationLevel: string;
    readonly name: string;
    readonly publicCertificateIssuer: string;
    readonly publicCertificateMd5: string;
    readonly publicCertificateNotAfter: string;
    readonly publicCertificateNotBefore: string;
    readonly publicCertificateSerial: string;
    readonly publicCertificateSubject: string;
    readonly serverCertificate: string;
    readonly uri: string;
}
export function getAs2PartnerOutput(args: GetAs2PartnerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAs2PartnerResult> {
    return pulumi.output(args).apply((a: any) => getAs2Partner(a, opts))
}

/**
 * A collection of arguments for invoking getAs2Partner.
 */
export interface GetAs2PartnerOutputArgs {
    id: pulumi.Input<number>;
}
