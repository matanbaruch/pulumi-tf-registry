// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbTlsCipherPolicies(args?: GetSlbTlsCipherPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbTlsCipherPoliciesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getSlbTlsCipherPolicies:getSlbTlsCipherPolicies", {
        "id": args.id,
        "ids": args.ids,
        "includeListener": args.includeListener,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
        "tlsCipherPolicyName": args.tlsCipherPolicyName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbTlsCipherPolicies.
 */
export interface GetSlbTlsCipherPoliciesArgs {
    id?: string;
    ids?: string[];
    includeListener?: boolean;
    nameRegex?: string;
    outputFile?: string;
    status?: string;
    tlsCipherPolicyName?: string;
}

/**
 * A collection of values returned by getSlbTlsCipherPolicies.
 */
export interface GetSlbTlsCipherPoliciesResult {
    readonly id: string;
    readonly ids: string[];
    readonly includeListener?: boolean;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly policies: outputs.GetSlbTlsCipherPoliciesPolicy[];
    readonly status?: string;
    readonly tlsCipherPolicyName?: string;
}
export function getSlbTlsCipherPoliciesOutput(args?: GetSlbTlsCipherPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbTlsCipherPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getSlbTlsCipherPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getSlbTlsCipherPolicies.
 */
export interface GetSlbTlsCipherPoliciesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    includeListener?: pulumi.Input<boolean>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tlsCipherPolicyName?: pulumi.Input<string>;
}
