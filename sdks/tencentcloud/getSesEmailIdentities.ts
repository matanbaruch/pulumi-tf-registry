// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSesEmailIdentities(args?: GetSesEmailIdentitiesArgs, opts?: pulumi.InvokeOptions): Promise<GetSesEmailIdentitiesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSesEmailIdentities:getSesEmailIdentities", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSesEmailIdentities.
 */
export interface GetSesEmailIdentitiesArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSesEmailIdentities.
 */
export interface GetSesEmailIdentitiesResult {
    readonly emailIdentities: outputs.GetSesEmailIdentitiesEmailIdentity[];
    readonly id: string;
    readonly maxDailyQuota: number;
    readonly maxReputationLevel: number;
    readonly resultOutputFile?: string;
}
export function getSesEmailIdentitiesOutput(args?: GetSesEmailIdentitiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSesEmailIdentitiesResult> {
    return pulumi.output(args).apply((a: any) => getSesEmailIdentities(a, opts))
}

/**
 * A collection of arguments for invoking getSesEmailIdentities.
 */
export interface GetSesEmailIdentitiesOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
