// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCpsDeployments(args: GetCpsDeploymentsArgs, opts?: pulumi.InvokeOptions): Promise<GetCpsDeploymentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getCpsDeployments:getCpsDeployments", {
        "enrollmentId": args.enrollmentId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCpsDeployments.
 */
export interface GetCpsDeploymentsArgs {
    enrollmentId: number;
    id?: string;
}

/**
 * A collection of values returned by getCpsDeployments.
 */
export interface GetCpsDeploymentsResult {
    readonly autoRenewalStartTime: string;
    readonly enrollmentId: number;
    readonly expiryDate: string;
    readonly id: string;
    readonly productionCertificateEcdsa: string;
    readonly productionCertificateRsa: string;
    readonly stagingCertificateEcdsa: string;
    readonly stagingCertificateRsa: string;
}
export function getCpsDeploymentsOutput(args: GetCpsDeploymentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCpsDeploymentsResult> {
    return pulumi.output(args).apply((a: any) => getCpsDeployments(a, opts))
}

/**
 * A collection of arguments for invoking getCpsDeployments.
 */
export interface GetCpsDeploymentsOutputArgs {
    enrollmentId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
