// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafCertificates(args: GetWafCertificatesArgs, opts?: pulumi.InvokeOptions): Promise<GetWafCertificatesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getWafCertificates:getWafCertificates", {
        "domain": args.domain,
        "id": args.id,
        "ids": args.ids,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafCertificates.
 */
export interface GetWafCertificatesArgs {
    domain?: string;
    id?: string;
    ids?: string[];
    instanceId: string;
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getWafCertificates.
 */
export interface GetWafCertificatesResult {
    readonly certificates: outputs.GetWafCertificatesCertificate[];
    readonly domain?: string;
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getWafCertificatesOutput(args: GetWafCertificatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafCertificatesResult> {
    return pulumi.output(args).apply((a: any) => getWafCertificates(a, opts))
}

/**
 * A collection of arguments for invoking getWafCertificates.
 */
export interface GetWafCertificatesOutputArgs {
    domain?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
