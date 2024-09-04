// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIapAppEngineServiceIamPolicy(args: GetIapAppEngineServiceIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetIapAppEngineServiceIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getIapAppEngineServiceIamPolicy:getIapAppEngineServiceIamPolicy", {
        "appId": args.appId,
        "id": args.id,
        "project": args.project,
        "service": args.service,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIapAppEngineServiceIamPolicy.
 */
export interface GetIapAppEngineServiceIamPolicyArgs {
    appId: string;
    id?: string;
    project?: string;
    service: string;
}

/**
 * A collection of values returned by getIapAppEngineServiceIamPolicy.
 */
export interface GetIapAppEngineServiceIamPolicyResult {
    readonly appId: string;
    readonly etag: string;
    readonly id: string;
    readonly policyData: string;
    readonly project: string;
    readonly service: string;
}
export function getIapAppEngineServiceIamPolicyOutput(args: GetIapAppEngineServiceIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIapAppEngineServiceIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getIapAppEngineServiceIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getIapAppEngineServiceIamPolicy.
 */
export interface GetIapAppEngineServiceIamPolicyOutputArgs {
    appId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    service: pulumi.Input<string>;
}
