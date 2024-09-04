// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppsecPenaltyBox(args: GetAppsecPenaltyBoxArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsecPenaltyBoxResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getAppsecPenaltyBox:getAppsecPenaltyBox", {
        "configId": args.configId,
        "id": args.id,
        "securityPolicyId": args.securityPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsecPenaltyBox.
 */
export interface GetAppsecPenaltyBoxArgs {
    configId: number;
    id?: string;
    securityPolicyId: string;
}

/**
 * A collection of values returned by getAppsecPenaltyBox.
 */
export interface GetAppsecPenaltyBoxResult {
    readonly action: string;
    readonly configId: number;
    readonly enabled: boolean;
    readonly id: string;
    readonly outputText: string;
    readonly securityPolicyId: string;
}
export function getAppsecPenaltyBoxOutput(args: GetAppsecPenaltyBoxOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsecPenaltyBoxResult> {
    return pulumi.output(args).apply((a: any) => getAppsecPenaltyBox(a, opts))
}

/**
 * A collection of arguments for invoking getAppsecPenaltyBox.
 */
export interface GetAppsecPenaltyBoxOutputArgs {
    configId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    securityPolicyId: pulumi.Input<string>;
}
