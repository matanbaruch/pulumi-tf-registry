// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServiceAccountIdToken(args: GetServiceAccountIdTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceAccountIdTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getServiceAccountIdToken:getServiceAccountIdToken", {
        "delegates": args.delegates,
        "id": args.id,
        "includeEmail": args.includeEmail,
        "targetAudience": args.targetAudience,
        "targetServiceAccount": args.targetServiceAccount,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceAccountIdToken.
 */
export interface GetServiceAccountIdTokenArgs {
    delegates?: string[];
    id?: string;
    includeEmail?: boolean;
    targetAudience: string;
    targetServiceAccount?: string;
}

/**
 * A collection of values returned by getServiceAccountIdToken.
 */
export interface GetServiceAccountIdTokenResult {
    readonly delegates?: string[];
    readonly id: string;
    readonly idToken: string;
    readonly includeEmail?: boolean;
    readonly targetAudience: string;
    readonly targetServiceAccount?: string;
}
export function getServiceAccountIdTokenOutput(args: GetServiceAccountIdTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceAccountIdTokenResult> {
    return pulumi.output(args).apply((a: any) => getServiceAccountIdToken(a, opts))
}

/**
 * A collection of arguments for invoking getServiceAccountIdToken.
 */
export interface GetServiceAccountIdTokenOutputArgs {
    delegates?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    includeEmail?: pulumi.Input<boolean>;
    targetAudience: pulumi.Input<string>;
    targetServiceAccount?: pulumi.Input<string>;
}
