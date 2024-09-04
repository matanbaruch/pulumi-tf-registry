// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAcmpcaCertificate(args: GetAcmpcaCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetAcmpcaCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getAcmpcaCertificate:getAcmpcaCertificate", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAcmpcaCertificate.
 */
export interface GetAcmpcaCertificateArgs {
    id: string;
}

/**
 * A collection of values returned by getAcmpcaCertificate.
 */
export interface GetAcmpcaCertificateResult {
    readonly apiPassthrough: outputs.GetAcmpcaCertificateApiPassthrough;
    readonly arn: string;
    readonly certificate: string;
    readonly certificateAuthorityArn: string;
    readonly certificateSigningRequest: string;
    readonly id: string;
    readonly signingAlgorithm: string;
    readonly templateArn: string;
    readonly validity: outputs.GetAcmpcaCertificateValidity;
    readonly validityNotBefore: outputs.GetAcmpcaCertificateValidityNotBefore;
}
export function getAcmpcaCertificateOutput(args: GetAcmpcaCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAcmpcaCertificateResult> {
    return pulumi.output(args).apply((a: any) => getAcmpcaCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getAcmpcaCertificate.
 */
export interface GetAcmpcaCertificateOutputArgs {
    id: pulumi.Input<string>;
}
