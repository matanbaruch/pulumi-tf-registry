// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTeams(args: GetTeamsArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getTeams:getTeams", {
        "id": args.id,
        "name": args.name,
        "orgId": args.orgId,
        "teamId": args.teamId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsArgs {
    id?: string;
    name?: string;
    orgId: string;
    teamId?: string;
}

/**
 * A collection of values returned by getTeams.
 */
export interface GetTeamsResult {
    readonly id: string;
    readonly name: string;
    readonly orgId: string;
    readonly teamId: string;
    readonly usernames: string[];
}
export function getTeamsOutput(args: GetTeamsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamsResult> {
    return pulumi.output(args).apply((a: any) => getTeams(a, opts))
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId: pulumi.Input<string>;
    teamId?: pulumi.Input<string>;
}
