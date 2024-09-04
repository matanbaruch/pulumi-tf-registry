// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDbCredentials(args: GetIdentityDbCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDbCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDbCredentials:getIdentityDbCredentials", {
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "state": args.state,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDbCredentials.
 */
export interface GetIdentityDbCredentialsArgs {
    filters?: inputs.GetIdentityDbCredentialsFilter[];
    id?: string;
    name?: string;
    state?: string;
    userId: string;
}

/**
 * A collection of values returned by getIdentityDbCredentials.
 */
export interface GetIdentityDbCredentialsResult {
    readonly dbCredentials: outputs.GetIdentityDbCredentialsDbCredential[];
    readonly filters?: outputs.GetIdentityDbCredentialsFilter[];
    readonly id: string;
    readonly name?: string;
    readonly state?: string;
    readonly userId: string;
}
export function getIdentityDbCredentialsOutput(args: GetIdentityDbCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDbCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDbCredentials(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDbCredentials.
 */
export interface GetIdentityDbCredentialsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetIdentityDbCredentialsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
