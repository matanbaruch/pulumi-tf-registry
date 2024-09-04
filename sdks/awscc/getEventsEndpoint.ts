// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEventsEndpoint(args: GetEventsEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEventsEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEventsEndpoint:getEventsEndpoint", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEventsEndpoint.
 */
export interface GetEventsEndpointArgs {
    id: string;
}

/**
 * A collection of values returned by getEventsEndpoint.
 */
export interface GetEventsEndpointResult {
    readonly arn: string;
    readonly description: string;
    readonly endpointId: string;
    readonly endpointUrl: string;
    readonly eventBuses: outputs.GetEventsEndpointEventBus[];
    readonly id: string;
    readonly name: string;
    readonly replicationConfig: outputs.GetEventsEndpointReplicationConfig;
    readonly roleArn: string;
    readonly routingConfig: outputs.GetEventsEndpointRoutingConfig;
    readonly state: string;
    readonly stateReason: string;
}
export function getEventsEndpointOutput(args: GetEventsEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventsEndpointResult> {
    return pulumi.output(args).apply((a: any) => getEventsEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getEventsEndpoint.
 */
export interface GetEventsEndpointOutputArgs {
    id: pulumi.Input<string>;
}
