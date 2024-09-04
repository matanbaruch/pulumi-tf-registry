// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dnsimple:index/getCertificate:getCertificate", {
        "certificateId": args.certificateId,
        "domain": args.domain,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateArgs {
    certificateId: number;
    domain: string;
    timeouts?: inputs.GetCertificateTimeouts;
}

/**
 * A collection of values returned by getCertificate.
 */
export interface GetCertificateResult {
    readonly certificateChains: string[];
    readonly certificateId: number;
    readonly domain: string;
    readonly id: string;
    readonly privateKey: string;
    readonly rootCertificate: string;
    readonly serverCertificate: string;
    readonly timeouts?: outputs.GetCertificateTimeouts;
}
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateOutputArgs {
    certificateId: pulumi.Input<number>;
    domain: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCertificateTimeoutsArgs>;
}
