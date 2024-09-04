// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getJmespathCheck(args?: GetJmespathCheckArgs, opts?: pulumi.InvokeOptions): Promise<GetJmespathCheckResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zentral:index/getJmespathCheck:getJmespathCheck", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getJmespathCheck.
 */
export interface GetJmespathCheckArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getJmespathCheck.
 */
export interface GetJmespathCheckResult {
    readonly description: string;
    readonly id?: number;
    readonly jmespathExpression: string;
    readonly name?: string;
    readonly platforms: string[];
    readonly sourceName: string;
    readonly tagIds: number[];
    readonly version: number;
}
export function getJmespathCheckOutput(args?: GetJmespathCheckOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJmespathCheckResult> {
    return pulumi.output(args).apply((a: any) => getJmespathCheck(a, opts))
}

/**
 * A collection of arguments for invoking getJmespathCheck.
 */
export interface GetJmespathCheckOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
