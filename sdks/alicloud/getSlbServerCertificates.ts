// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbServerCertificates(args?: GetSlbServerCertificatesArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbServerCertificatesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSlbServerCertificates:getSlbServerCertificates", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "resourceGroupId": args.resourceGroupId,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbServerCertificates.
 */
export interface GetSlbServerCertificatesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    resourceGroupId?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getSlbServerCertificates.
 */
export interface GetSlbServerCertificatesResult {
    readonly certificates: outputs.GetSlbServerCertificatesCertificate[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly resourceGroupId?: string;
    readonly tags?: {[key: string]: string};
}
export function getSlbServerCertificatesOutput(args?: GetSlbServerCertificatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbServerCertificatesResult> {
    return pulumi.output(args).apply((a: any) => getSlbServerCertificates(a, opts))
}

/**
 * A collection of arguments for invoking getSlbServerCertificates.
 */
export interface GetSlbServerCertificatesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
