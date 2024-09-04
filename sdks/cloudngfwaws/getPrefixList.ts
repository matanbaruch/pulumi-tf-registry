// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrefixList(args: GetPrefixListArgs, opts?: pulumi.InvokeOptions): Promise<GetPrefixListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudngfwaws:index/getPrefixList:getPrefixList", {
        "configType": args.configType,
        "id": args.id,
        "name": args.name,
        "rulestack": args.rulestack,
        "scope": args.scope,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrefixList.
 */
export interface GetPrefixListArgs {
    configType?: string;
    id?: string;
    name: string;
    rulestack: string;
    scope?: string;
}

/**
 * A collection of values returned by getPrefixList.
 */
export interface GetPrefixListResult {
    readonly auditComment: string;
    readonly configType?: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly prefixLists: string[];
    readonly rulestack: string;
    readonly scope?: string;
    readonly updateToken: string;
}
export function getPrefixListOutput(args: GetPrefixListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrefixListResult> {
    return pulumi.output(args).apply((a: any) => getPrefixList(a, opts))
}

/**
 * A collection of arguments for invoking getPrefixList.
 */
export interface GetPrefixListOutputArgs {
    configType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    rulestack: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
}
