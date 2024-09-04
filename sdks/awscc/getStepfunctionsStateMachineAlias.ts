// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStepfunctionsStateMachineAlias(args: GetStepfunctionsStateMachineAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetStepfunctionsStateMachineAliasResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getStepfunctionsStateMachineAlias:getStepfunctionsStateMachineAlias", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStepfunctionsStateMachineAlias.
 */
export interface GetStepfunctionsStateMachineAliasArgs {
    id: string;
}

/**
 * A collection of values returned by getStepfunctionsStateMachineAlias.
 */
export interface GetStepfunctionsStateMachineAliasResult {
    readonly arn: string;
    readonly deploymentPreference: outputs.GetStepfunctionsStateMachineAliasDeploymentPreference;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly routingConfigurations: outputs.GetStepfunctionsStateMachineAliasRoutingConfiguration[];
}
export function getStepfunctionsStateMachineAliasOutput(args: GetStepfunctionsStateMachineAliasOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStepfunctionsStateMachineAliasResult> {
    return pulumi.output(args).apply((a: any) => getStepfunctionsStateMachineAlias(a, opts))
}

/**
 * A collection of arguments for invoking getStepfunctionsStateMachineAlias.
 */
export interface GetStepfunctionsStateMachineAliasOutputArgs {
    id: pulumi.Input<string>;
}
