// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApiGatewayApis(args: GetApiGatewayApisArgs, opts?: pulumi.InvokeOptions): Promise<GetApiGatewayApisResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getApiGatewayApis:getApiGatewayApis", {
        "apiId": args.apiId,
        "apiName": args.apiName,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "serviceId": args.serviceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApiGatewayApis.
 */
export interface GetApiGatewayApisArgs {
    apiId?: string;
    apiName?: string;
    id?: string;
    resultOutputFile?: string;
    serviceId: string;
}

/**
 * A collection of values returned by getApiGatewayApis.
 */
export interface GetApiGatewayApisResult {
    readonly apiId?: string;
    readonly apiName?: string;
    readonly id: string;
    readonly lists: outputs.GetApiGatewayApisList[];
    readonly resultOutputFile?: string;
    readonly serviceId: string;
}
export function getApiGatewayApisOutput(args: GetApiGatewayApisOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiGatewayApisResult> {
    return pulumi.output(args).apply((a: any) => getApiGatewayApis(a, opts))
}

/**
 * A collection of arguments for invoking getApiGatewayApis.
 */
export interface GetApiGatewayApisOutputArgs {
    apiId?: pulumi.Input<string>;
    apiName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    serviceId: pulumi.Input<string>;
}
