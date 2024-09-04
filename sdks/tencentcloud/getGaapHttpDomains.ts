// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGaapHttpDomains(args: GetGaapHttpDomainsArgs, opts?: pulumi.InvokeOptions): Promise<GetGaapHttpDomainsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getGaapHttpDomains:getGaapHttpDomains", {
        "domain": args.domain,
        "id": args.id,
        "listenerId": args.listenerId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGaapHttpDomains.
 */
export interface GetGaapHttpDomainsArgs {
    domain: string;
    id?: string;
    listenerId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getGaapHttpDomains.
 */
export interface GetGaapHttpDomainsResult {
    readonly domain: string;
    readonly domains: outputs.GetGaapHttpDomainsDomain[];
    readonly id: string;
    readonly listenerId: string;
    readonly resultOutputFile?: string;
}
export function getGaapHttpDomainsOutput(args: GetGaapHttpDomainsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGaapHttpDomainsResult> {
    return pulumi.output(args).apply((a: any) => getGaapHttpDomains(a, opts))
}

/**
 * A collection of arguments for invoking getGaapHttpDomains.
 */
export interface GetGaapHttpDomainsOutputArgs {
    domain: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    listenerId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
