// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getDomain:getDomain", {
        "domainIdOrName": args.domainIdOrName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainArgs {
    domainIdOrName: string;
}

/**
 * A collection of values returned by getDomain.
 */
export interface GetDomainResult {
    readonly certificateSourceType: string;
    readonly dnsRecords: outputs.GetDomainDnsRecord[];
    readonly domain: string;
    readonly domainIdOrName: string;
    readonly id: string;
    readonly publicCertificate: {[key: string]: string};
    readonly validationStatus: string;
}
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainResult> {
    return pulumi.output(args).apply((a: any) => getDomain(a, opts))
}

/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainOutputArgs {
    domainIdOrName: pulumi.Input<string>;
}
