// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("couchbase-capella:index/getCertificate:getCertificate", {
        "clusterId": args.clusterId,
        "organizationId": args.organizationId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateArgs {
    clusterId: string;
    organizationId: string;
    projectId: string;
}

/**
 * A collection of values returned by getCertificate.
 */
export interface GetCertificateResult {
    readonly clusterId: string;
    readonly datas: outputs.GetCertificateData[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organizationId: string;
    readonly projectId: string;
}
export function getCertificateOutput(args: GetCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificateResult> {
    return pulumi.output(args).apply((a: any) => getCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getCertificate.
 */
export interface GetCertificateOutputArgs {
    clusterId: pulumi.Input<string>;
    organizationId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
