// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIntelligentFeed(args: GetIntelligentFeedArgs, opts?: pulumi.InvokeOptions): Promise<GetIntelligentFeedResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudngfwaws:index/getIntelligentFeed:getIntelligentFeed", {
        "configType": args.configType,
        "id": args.id,
        "name": args.name,
        "rulestack": args.rulestack,
        "scope": args.scope,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIntelligentFeed.
 */
export interface GetIntelligentFeedArgs {
    configType?: string;
    id?: string;
    name: string;
    rulestack: string;
    scope?: string;
}

/**
 * A collection of values returned by getIntelligentFeed.
 */
export interface GetIntelligentFeedResult {
    readonly auditComment: string;
    readonly certificate: string;
    readonly configType?: string;
    readonly description: string;
    readonly frequency: string;
    readonly id: string;
    readonly name: string;
    readonly rulestack: string;
    readonly scope?: string;
    readonly time: number;
    readonly type: string;
    readonly updateToken: string;
    readonly url: string;
}
export function getIntelligentFeedOutput(args: GetIntelligentFeedOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIntelligentFeedResult> {
    return pulumi.output(args).apply((a: any) => getIntelligentFeed(a, opts))
}

/**
 * A collection of arguments for invoking getIntelligentFeed.
 */
export interface GetIntelligentFeedOutputArgs {
    configType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    rulestack: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
}
