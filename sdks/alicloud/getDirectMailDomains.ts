// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDirectMailDomains(args?: GetDirectMailDomainsArgs, opts?: pulumi.InvokeOptions): Promise<GetDirectMailDomainsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDirectMailDomains:getDirectMailDomains", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "keyWord": args.keyWord,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDirectMailDomains.
 */
export interface GetDirectMailDomainsArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    keyWord?: string;
    nameRegex?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getDirectMailDomains.
 */
export interface GetDirectMailDomainsResult {
    readonly domains: outputs.GetDirectMailDomainsDomain[];
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly keyWord?: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly status?: string;
}
export function getDirectMailDomainsOutput(args?: GetDirectMailDomainsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDirectMailDomainsResult> {
    return pulumi.output(args).apply((a: any) => getDirectMailDomains(a, opts))
}

/**
 * A collection of arguments for invoking getDirectMailDomains.
 */
export interface GetDirectMailDomainsOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    keyWord?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
