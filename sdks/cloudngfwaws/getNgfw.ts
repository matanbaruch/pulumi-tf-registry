// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNgfw(args: GetNgfwArgs, opts?: pulumi.InvokeOptions): Promise<GetNgfwResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudngfwaws:index/getNgfw:getNgfw", {
        "accountId": args.accountId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNgfw.
 */
export interface GetNgfwArgs {
    accountId?: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getNgfw.
 */
export interface GetNgfwResult {
    readonly accountId?: string;
    readonly appIdVersion: string;
    readonly automaticUpgradeAppIdVersion: boolean;
    readonly description: string;
    readonly endpointMode: string;
    readonly endpointServiceName: string;
    readonly firewallId: string;
    readonly globalRulestack: string;
    readonly id: string;
    readonly linkId: string;
    readonly linkStatus: string;
    readonly multiVpc: boolean;
    readonly name: string;
    readonly rulestack: string;
    readonly statuses: outputs.GetNgfwStatus[];
    readonly subnetMappings: outputs.GetNgfwSubnetMapping[];
    readonly tags: {[key: string]: string};
    readonly updateToken: string;
    readonly vpcId: string;
}
export function getNgfwOutput(args: GetNgfwOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNgfwResult> {
    return pulumi.output(args).apply((a: any) => getNgfw(a, opts))
}

/**
 * A collection of arguments for invoking getNgfw.
 */
export interface GetNgfwOutputArgs {
    accountId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
