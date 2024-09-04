// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTseGatewayCanaryRules(args: GetTseGatewayCanaryRulesArgs, opts?: pulumi.InvokeOptions): Promise<GetTseGatewayCanaryRulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTseGatewayCanaryRules:getTseGatewayCanaryRules", {
        "gatewayId": args.gatewayId,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
        "serviceId": args.serviceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTseGatewayCanaryRules.
 */
export interface GetTseGatewayCanaryRulesArgs {
    gatewayId: string;
    id?: string;
    resultOutputFile?: string;
    serviceId: string;
}

/**
 * A collection of values returned by getTseGatewayCanaryRules.
 */
export interface GetTseGatewayCanaryRulesResult {
    readonly gatewayId: string;
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly results: outputs.GetTseGatewayCanaryRulesResult[];
    readonly serviceId: string;
}
export function getTseGatewayCanaryRulesOutput(args: GetTseGatewayCanaryRulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTseGatewayCanaryRulesResult> {
    return pulumi.output(args).apply((a: any) => getTseGatewayCanaryRules(a, opts))
}

/**
 * A collection of arguments for invoking getTseGatewayCanaryRules.
 */
export interface GetTseGatewayCanaryRulesOutputArgs {
    gatewayId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    serviceId: pulumi.Input<string>;
}
