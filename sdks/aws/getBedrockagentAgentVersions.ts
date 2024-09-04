// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBedrockagentAgentVersions(args: GetBedrockagentAgentVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetBedrockagentAgentVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getBedrockagentAgentVersions:getBedrockagentAgentVersions", {
        "agentId": args.agentId,
        "agentVersionSummaries": args.agentVersionSummaries,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBedrockagentAgentVersions.
 */
export interface GetBedrockagentAgentVersionsArgs {
    agentId: string;
    agentVersionSummaries?: inputs.GetBedrockagentAgentVersionsAgentVersionSummary[];
}

/**
 * A collection of values returned by getBedrockagentAgentVersions.
 */
export interface GetBedrockagentAgentVersionsResult {
    readonly agentId: string;
    readonly agentVersionSummaries?: outputs.GetBedrockagentAgentVersionsAgentVersionSummary[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
export function getBedrockagentAgentVersionsOutput(args: GetBedrockagentAgentVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBedrockagentAgentVersionsResult> {
    return pulumi.output(args).apply((a: any) => getBedrockagentAgentVersions(a, opts))
}

/**
 * A collection of arguments for invoking getBedrockagentAgentVersions.
 */
export interface GetBedrockagentAgentVersionsOutputArgs {
    agentId: pulumi.Input<string>;
    agentVersionSummaries?: pulumi.Input<pulumi.Input<inputs.GetBedrockagentAgentVersionsAgentVersionSummaryArgs>[]>;
}
