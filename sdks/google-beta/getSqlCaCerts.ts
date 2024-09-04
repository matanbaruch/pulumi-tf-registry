// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSqlCaCerts(args: GetSqlCaCertsArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlCaCertsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getSqlCaCerts:getSqlCaCerts", {
        "id": args.id,
        "instance": args.instance,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlCaCerts.
 */
export interface GetSqlCaCertsArgs {
    id?: string;
    instance: string;
    project?: string;
}

/**
 * A collection of values returned by getSqlCaCerts.
 */
export interface GetSqlCaCertsResult {
    readonly activeVersion: string;
    readonly certs: outputs.GetSqlCaCertsCert[];
    readonly id: string;
    readonly instance: string;
    readonly project: string;
}
export function getSqlCaCertsOutput(args: GetSqlCaCertsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlCaCertsResult> {
    return pulumi.output(args).apply((a: any) => getSqlCaCerts(a, opts))
}

/**
 * A collection of arguments for invoking getSqlCaCerts.
 */
export interface GetSqlCaCertsOutputArgs {
    id?: pulumi.Input<string>;
    instance: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
