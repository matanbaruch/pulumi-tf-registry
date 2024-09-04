// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApigatewayAccount(args: GetApigatewayAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetApigatewayAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApigatewayAccount:getApigatewayAccount", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApigatewayAccount.
 */
export interface GetApigatewayAccountArgs {
    id: string;
}

/**
 * A collection of values returned by getApigatewayAccount.
 */
export interface GetApigatewayAccountResult {
    readonly accountId: string;
    readonly cloudwatchRoleArn: string;
    readonly id: string;
}
export function getApigatewayAccountOutput(args: GetApigatewayAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApigatewayAccountResult> {
    return pulumi.output(args).apply((a: any) => getApigatewayAccount(a, opts))
}

/**
 * A collection of arguments for invoking getApigatewayAccount.
 */
export interface GetApigatewayAccountOutputArgs {
    id: pulumi.Input<string>;
}
