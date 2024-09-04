// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTeams(args?: GetTeamsArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("astro:index/getTeams:getTeams", {
        "names": args.names,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsArgs {
    names?: string[];
}

/**
 * A collection of values returned by getTeams.
 */
export interface GetTeamsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly names?: string[];
    readonly teams: outputs.GetTeamsTeam[];
}
export function getTeamsOutput(args?: GetTeamsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamsResult> {
    return pulumi.output(args).apply((a: any) => getTeams(a, opts))
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsOutputArgs {
    names?: pulumi.Input<pulumi.Input<string>[]>;
}
