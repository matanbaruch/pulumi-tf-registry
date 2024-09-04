// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApiGatewayApiUsagePlans(args: GetApiGatewayApiUsagePlansArgs, opts?: pulumi.InvokeOptions): Promise<GetApiGatewayApiUsagePlansResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getApiGatewayApiUsagePlans:getApiGatewayApiUsagePlans", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "serviceId": args.serviceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApiGatewayApiUsagePlans.
 */
export interface GetApiGatewayApiUsagePlansArgs {
    id?: string;
    resultOutputFile?: string;
    serviceId: string;
}

/**
 * A collection of values returned by getApiGatewayApiUsagePlans.
 */
export interface GetApiGatewayApiUsagePlansResult {
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly results: outputs.GetApiGatewayApiUsagePlansResult[];
    readonly serviceId: string;
}
export function getApiGatewayApiUsagePlansOutput(args: GetApiGatewayApiUsagePlansOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiGatewayApiUsagePlansResult> {
    return pulumi.output(args).apply((a: any) => getApiGatewayApiUsagePlans(a, opts))
}

/**
 * A collection of arguments for invoking getApiGatewayApiUsagePlans.
 */
export interface GetApiGatewayApiUsagePlansOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    serviceId: pulumi.Input<string>;
}
