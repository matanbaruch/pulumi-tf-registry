// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBedrockFlowAlias(args: GetBedrockFlowAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetBedrockFlowAliasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getBedrockFlowAlias:getBedrockFlowAlias", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBedrockFlowAlias.
 */
export interface GetBedrockFlowAliasArgs {
    id: string;
}

/**
 * A collection of values returned by getBedrockFlowAlias.
 */
export interface GetBedrockFlowAliasResult {
    readonly arn: string;
    readonly createdAt: string;
    readonly description: string;
    readonly flowAliasId: string;
    readonly flowArn: string;
    readonly flowId: string;
    readonly id: string;
    readonly name: string;
    readonly routingConfigurations: outputs.GetBedrockFlowAliasRoutingConfiguration[];
    readonly tags: {[key: string]: string};
    readonly updatedAt: string;
}
export function getBedrockFlowAliasOutput(args: GetBedrockFlowAliasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBedrockFlowAliasResult> {
    return pulumi.output(args).apply((a: any) => getBedrockFlowAlias(a, opts))
}

/**
 * A collection of arguments for invoking getBedrockFlowAlias.
 */
export interface GetBedrockFlowAliasOutputArgs {
    id: pulumi.Input<string>;
}
