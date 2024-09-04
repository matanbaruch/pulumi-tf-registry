// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppSignonPolicy(args: GetAppSignonPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAppSignonPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getAppSignonPolicy:getAppSignonPolicy", {
        "appId": args.appId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppSignonPolicy.
 */
export interface GetAppSignonPolicyArgs {
    appId: string;
    id?: string;
}

/**
 * A collection of values returned by getAppSignonPolicy.
 */
export interface GetAppSignonPolicyResult {
    readonly appId: string;
    readonly id: string;
    readonly name: string;
}
export function getAppSignonPolicyOutput(args: GetAppSignonPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppSignonPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAppSignonPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getAppSignonPolicy.
 */
export interface GetAppSignonPolicyOutputArgs {
    appId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
