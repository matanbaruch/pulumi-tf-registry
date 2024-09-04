// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTeamConnectorMemberships(args: GetTeamConnectorMembershipsArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamConnectorMembershipsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fivetran:index/getTeamConnectorMemberships:getTeamConnectorMemberships", {
        "connectors": args.connectors,
        "teamId": args.teamId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeamConnectorMemberships.
 */
export interface GetTeamConnectorMembershipsArgs {
    connectors?: inputs.GetTeamConnectorMembershipsConnector[];
    teamId: string;
}

/**
 * A collection of values returned by getTeamConnectorMemberships.
 */
export interface GetTeamConnectorMembershipsResult {
    readonly connectors?: outputs.GetTeamConnectorMembershipsConnector[];
    readonly id: string;
    readonly teamId: string;
}
export function getTeamConnectorMembershipsOutput(args: GetTeamConnectorMembershipsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamConnectorMembershipsResult> {
    return pulumi.output(args).apply((a: any) => getTeamConnectorMemberships(a, opts))
}

/**
 * A collection of arguments for invoking getTeamConnectorMemberships.
 */
export interface GetTeamConnectorMembershipsOutputArgs {
    connectors?: pulumi.Input<pulumi.Input<inputs.GetTeamConnectorMembershipsConnectorArgs>[]>;
    teamId: pulumi.Input<string>;
}
