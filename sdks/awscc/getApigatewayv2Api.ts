// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApigatewayv2Api(args: GetApigatewayv2ApiArgs, opts?: pulumi.InvokeOptions): Promise<GetApigatewayv2ApiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApigatewayv2Api:getApigatewayv2Api", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApigatewayv2Api.
 */
export interface GetApigatewayv2ApiArgs {
    id: string;
}

/**
 * A collection of values returned by getApigatewayv2Api.
 */
export interface GetApigatewayv2ApiResult {
    readonly apiEndpoint: string;
    readonly apiId: string;
    readonly apiKeySelectionExpression: string;
    readonly basePath: string;
    readonly body: string;
    readonly bodyS3Location: outputs.GetApigatewayv2ApiBodyS3Location;
    readonly corsConfiguration: outputs.GetApigatewayv2ApiCorsConfiguration;
    readonly credentialsArn: string;
    readonly description: string;
    readonly disableExecuteApiEndpoint: boolean;
    readonly disableSchemaValidation: boolean;
    readonly failOnWarnings: boolean;
    readonly id: string;
    readonly name: string;
    readonly protocolType: string;
    readonly routeKey: string;
    readonly routeSelectionExpression: string;
    readonly tags: {[key: string]: string};
    readonly target: string;
    readonly version: string;
}
export function getApigatewayv2ApiOutput(args: GetApigatewayv2ApiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApigatewayv2ApiResult> {
    return pulumi.output(args).apply((a: any) => getApigatewayv2Api(a, opts))
}

/**
 * A collection of arguments for invoking getApigatewayv2Api.
 */
export interface GetApigatewayv2ApiOutputArgs {
    id: pulumi.Input<string>;
}
