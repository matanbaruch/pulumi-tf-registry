// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAdAccessCredentials(args: GetAdAccessCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetAdAccessCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vault:index/getAdAccessCredentials:getAdAccessCredentials", {
        "backend": args.backend,
        "id": args.id,
        "namespace": args.namespace,
        "role": args.role,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdAccessCredentials.
 */
export interface GetAdAccessCredentialsArgs {
    backend: string;
    id?: string;
    namespace?: string;
    role: string;
}

/**
 * A collection of values returned by getAdAccessCredentials.
 */
export interface GetAdAccessCredentialsResult {
    readonly backend: string;
    readonly currentPassword: string;
    readonly id: string;
    readonly lastPassword: string;
    readonly namespace?: string;
    readonly role: string;
    readonly username: string;
}
export function getAdAccessCredentialsOutput(args: GetAdAccessCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdAccessCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getAdAccessCredentials(a, opts))
}

/**
 * A collection of arguments for invoking getAdAccessCredentials.
 */
export interface GetAdAccessCredentialsOutputArgs {
    backend: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    role: pulumi.Input<string>;
}
