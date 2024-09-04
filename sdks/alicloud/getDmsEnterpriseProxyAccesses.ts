// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDmsEnterpriseProxyAccesses(args: GetDmsEnterpriseProxyAccessesArgs, opts?: pulumi.InvokeOptions): Promise<GetDmsEnterpriseProxyAccessesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDmsEnterpriseProxyAccesses:getDmsEnterpriseProxyAccesses", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "proxyId": args.proxyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmsEnterpriseProxyAccesses.
 */
export interface GetDmsEnterpriseProxyAccessesArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    outputFile?: string;
    proxyId: string;
}

/**
 * A collection of values returned by getDmsEnterpriseProxyAccesses.
 */
export interface GetDmsEnterpriseProxyAccessesResult {
    readonly accesses: outputs.GetDmsEnterpriseProxyAccessesAccess[];
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly proxyId: string;
}
export function getDmsEnterpriseProxyAccessesOutput(args: GetDmsEnterpriseProxyAccessesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsEnterpriseProxyAccessesResult> {
    return pulumi.output(args).apply((a: any) => getDmsEnterpriseProxyAccesses(a, opts))
}

/**
 * A collection of arguments for invoking getDmsEnterpriseProxyAccesses.
 */
export interface GetDmsEnterpriseProxyAccessesOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    proxyId: pulumi.Input<string>;
}
