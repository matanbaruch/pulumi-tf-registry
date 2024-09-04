// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComposerUserWorkloadsSecret(args: GetComposerUserWorkloadsSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetComposerUserWorkloadsSecretResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getComposerUserWorkloadsSecret:getComposerUserWorkloadsSecret", {
        "environment": args.environment,
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComposerUserWorkloadsSecret.
 */
export interface GetComposerUserWorkloadsSecretArgs {
    environment: string;
    id?: string;
    name: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getComposerUserWorkloadsSecret.
 */
export interface GetComposerUserWorkloadsSecretResult {
    readonly data: {[key: string]: string};
    readonly environment: string;
    readonly id: string;
    readonly name: string;
    readonly project?: string;
    readonly region?: string;
}
export function getComposerUserWorkloadsSecretOutput(args: GetComposerUserWorkloadsSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComposerUserWorkloadsSecretResult> {
    return pulumi.output(args).apply((a: any) => getComposerUserWorkloadsSecret(a, opts))
}

/**
 * A collection of arguments for invoking getComposerUserWorkloadsSecret.
 */
export interface GetComposerUserWorkloadsSecretOutputArgs {
    environment: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
