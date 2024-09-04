// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCognitoUserPoolResourceServer(args: GetCognitoUserPoolResourceServerArgs, opts?: pulumi.InvokeOptions): Promise<GetCognitoUserPoolResourceServerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCognitoUserPoolResourceServer:getCognitoUserPoolResourceServer", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCognitoUserPoolResourceServer.
 */
export interface GetCognitoUserPoolResourceServerArgs {
    id: string;
}

/**
 * A collection of values returned by getCognitoUserPoolResourceServer.
 */
export interface GetCognitoUserPoolResourceServerResult {
    readonly id: string;
    readonly identifier: string;
    readonly name: string;
    readonly scopes: outputs.GetCognitoUserPoolResourceServerScope[];
    readonly userPoolId: string;
}
export function getCognitoUserPoolResourceServerOutput(args: GetCognitoUserPoolResourceServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCognitoUserPoolResourceServerResult> {
    return pulumi.output(args).apply((a: any) => getCognitoUserPoolResourceServer(a, opts))
}

/**
 * A collection of arguments for invoking getCognitoUserPoolResourceServer.
 */
export interface GetCognitoUserPoolResourceServerOutputArgs {
    id: pulumi.Input<string>;
}
