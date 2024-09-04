// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecret(args?: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getSecret:getSecret", {
        "id": args.id,
        "name": args.name,
        "organizationId": args.organizationId,
        "path": args.path,
        "projectId": args.projectId,
        "region": args.region,
        "secretId": args.secretId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    id?: string;
    name?: string;
    organizationId?: string;
    path?: string;
    projectId?: string;
    region?: string;
    secretId?: string;
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly name?: string;
    readonly organizationId: string;
    readonly path?: string;
    readonly projectId?: string;
    readonly region?: string;
    readonly secretId?: string;
    readonly status: string;
    readonly tags: string[];
    readonly updatedAt: string;
    readonly versionCount: number;
}
export function getSecretOutput(args?: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    return pulumi.output(args).apply((a: any) => getSecret(a, opts))
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    secretId?: pulumi.Input<string>;
}
