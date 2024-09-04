// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTeam(args?: GetTeamArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("buildkite:index/getTeam:getTeam", {
        "id": args.id,
        "slug": args.slug,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamArgs {
    id?: string;
    slug?: string;
}

/**
 * A collection of values returned by getTeam.
 */
export interface GetTeamResult {
    readonly defaultMemberRole: string;
    readonly defaultTeam: boolean;
    readonly description: string;
    readonly id: string;
    readonly membersCanCreatePipelines: boolean;
    readonly name: string;
    readonly privacy: string;
    readonly slug: string;
    readonly uuid: string;
}
export function getTeamOutput(args?: GetTeamOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamResult> {
    return pulumi.output(args).apply((a: any) => getTeam(a, opts))
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamOutputArgs {
    id?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
}
