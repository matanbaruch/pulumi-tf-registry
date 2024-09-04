// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityRuleList(args?: GetSecurityRuleListArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityRuleListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getSecurityRuleList:getSecurityRuleList", {
        "device": args.device,
        "folder": args.folder,
        "limit": args.limit,
        "name": args.name,
        "offset": args.offset,
        "position": args.position,
        "snippet": args.snippet,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityRuleList.
 */
export interface GetSecurityRuleListArgs {
    device?: string;
    folder?: string;
    limit?: number;
    name?: string;
    offset?: number;
    position?: string;
    snippet?: string;
}

/**
 * A collection of values returned by getSecurityRuleList.
 */
export interface GetSecurityRuleListResult {
    readonly datas: outputs.GetSecurityRuleListData[];
    readonly device?: string;
    readonly folder?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly limit: number;
    readonly name?: string;
    readonly offset: number;
    readonly position: string;
    readonly snippet?: string;
    readonly tfid: string;
    readonly total: number;
}
export function getSecurityRuleListOutput(args?: GetSecurityRuleListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityRuleListResult> {
    return pulumi.output(args).apply((a: any) => getSecurityRuleList(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityRuleList.
 */
export interface GetSecurityRuleListOutputArgs {
    device?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    offset?: pulumi.Input<number>;
    position?: pulumi.Input<string>;
    snippet?: pulumi.Input<string>;
}
