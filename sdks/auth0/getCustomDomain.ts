// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCustomDomain(args?: GetCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("auth0:index/getCustomDomain:getCustomDomain", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCustomDomain.
 */
export interface GetCustomDomainArgs {
    id?: string;
}

/**
 * A collection of values returned by getCustomDomain.
 */
export interface GetCustomDomainResult {
    readonly customClientIpHeader: string;
    readonly domain: string;
    readonly id: string;
    readonly originDomainName: string;
    readonly primary: boolean;
    readonly status: string;
    readonly tlsPolicy: string;
    readonly type: string;
    readonly verifications: outputs.GetCustomDomainVerification[];
}
export function getCustomDomainOutput(args?: GetCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getCustomDomain(a, opts))
}

/**
 * A collection of arguments for invoking getCustomDomain.
 */
export interface GetCustomDomainOutputArgs {
    id?: pulumi.Input<string>;
}
