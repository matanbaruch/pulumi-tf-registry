// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPolicyGatewayPrefixList(args: GetPolicyGatewayPrefixListArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyGatewayPrefixListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getPolicyGatewayPrefixList:getPolicyGatewayPrefixList", {
        "description": args.description,
        "displayName": args.displayName,
        "gatewayPath": args.gatewayPath,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPolicyGatewayPrefixList.
 */
export interface GetPolicyGatewayPrefixListArgs {
    description?: string;
    displayName: string;
    gatewayPath?: string;
    id?: string;
}

/**
 * A collection of values returned by getPolicyGatewayPrefixList.
 */
export interface GetPolicyGatewayPrefixListResult {
    readonly description?: string;
    readonly displayName: string;
    readonly gatewayPath?: string;
    readonly id: string;
    readonly path: string;
}
export function getPolicyGatewayPrefixListOutput(args: GetPolicyGatewayPrefixListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyGatewayPrefixListResult> {
    return pulumi.output(args).apply((a: any) => getPolicyGatewayPrefixList(a, opts))
}

/**
 * A collection of arguments for invoking getPolicyGatewayPrefixList.
 */
export interface GetPolicyGatewayPrefixListOutputArgs {
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    gatewayPath?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
