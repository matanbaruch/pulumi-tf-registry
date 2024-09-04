// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTeams(args?: GetTeamsArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("octopusdeploy:index/getTeams:getTeams", {
        "ids": args.ids,
        "includeSystem": args.includeSystem,
        "partialName": args.partialName,
        "skip": args.skip,
        "spaces": args.spaces,
        "take": args.take,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsArgs {
    ids?: string[];
    includeSystem?: boolean;
    partialName?: string;
    skip?: number;
    spaces?: string[];
    take?: number;
}

/**
 * A collection of values returned by getTeams.
 */
export interface GetTeamsResult {
    readonly id: string;
    readonly ids?: string[];
    readonly includeSystem?: boolean;
    readonly partialName?: string;
    readonly skip?: number;
    readonly spaces?: string[];
    readonly take?: number;
    readonly teams: outputs.GetTeamsTeam[];
}
export function getTeamsOutput(args?: GetTeamsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamsResult> {
    return pulumi.output(args).apply((a: any) => getTeams(a, opts))
}

/**
 * A collection of arguments for invoking getTeams.
 */
export interface GetTeamsOutputArgs {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    includeSystem?: pulumi.Input<boolean>;
    partialName?: pulumi.Input<string>;
    skip?: pulumi.Input<number>;
    spaces?: pulumi.Input<pulumi.Input<string>[]>;
    take?: pulumi.Input<number>;
}
