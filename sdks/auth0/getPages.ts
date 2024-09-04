// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPages(args?: GetPagesArgs, opts?: pulumi.InvokeOptions): Promise<GetPagesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("auth0:index/getPages:getPages", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPages.
 */
export interface GetPagesArgs {
    id?: string;
}

/**
 * A collection of values returned by getPages.
 */
export interface GetPagesResult {
    readonly changePasswords: outputs.GetPagesChangePassword[];
    readonly errors: outputs.GetPagesError[];
    readonly guardianMfas: outputs.GetPagesGuardianMfa[];
    readonly id: string;
    readonly logins: outputs.GetPagesLogin[];
}
export function getPagesOutput(args?: GetPagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPagesResult> {
    return pulumi.output(args).apply((a: any) => getPages(a, opts))
}

/**
 * A collection of arguments for invoking getPages.
 */
export interface GetPagesOutputArgs {
    id?: pulumi.Input<string>;
}
