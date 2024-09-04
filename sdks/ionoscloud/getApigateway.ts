// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApigateway(args?: GetApigatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApigatewayResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getApigateway:getApigateway", {
        "id": args.id,
        "name": args.name,
        "partialMatch": args.partialMatch,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApigateway.
 */
export interface GetApigatewayArgs {
    id?: string;
    name?: string;
    partialMatch?: boolean;
}

/**
 * A collection of values returned by getApigateway.
 */
export interface GetApigatewayResult {
    readonly customDomains: outputs.GetApigatewayCustomDomain[];
    readonly id: string;
    readonly logs: boolean;
    readonly metrics: boolean;
    readonly name: string;
    readonly partialMatch?: boolean;
    readonly publicEndpoint: string;
}
export function getApigatewayOutput(args?: GetApigatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApigatewayResult> {
    return pulumi.output(args).apply((a: any) => getApigateway(a, opts))
}

/**
 * A collection of arguments for invoking getApigateway.
 */
export interface GetApigatewayOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    partialMatch?: pulumi.Input<boolean>;
}
