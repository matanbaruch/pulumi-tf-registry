// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacenterRoutingPolicy(args: GetDatacenterRoutingPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacenterRoutingPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getDatacenterRoutingPolicy:getDatacenterRoutingPolicy", {
        "blueprintId": args.blueprintId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenterRoutingPolicy.
 */
export interface GetDatacenterRoutingPolicyArgs {
    blueprintId: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getDatacenterRoutingPolicy.
 */
export interface GetDatacenterRoutingPolicyResult {
    readonly aggregatePrefixes: string[];
    readonly blueprintId: string;
    readonly description: string;
    readonly expectDefaultIpv4: boolean;
    readonly expectDefaultIpv6: boolean;
    readonly exportPolicy: outputs.GetDatacenterRoutingPolicyExportPolicy;
    readonly extraExports: outputs.GetDatacenterRoutingPolicyExtraExport[];
    readonly extraImports: outputs.GetDatacenterRoutingPolicyExtraImport[];
    readonly id: string;
    readonly importPolicy: string;
    readonly name: string;
}
export function getDatacenterRoutingPolicyOutput(args: GetDatacenterRoutingPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacenterRoutingPolicyResult> {
    return pulumi.output(args).apply((a: any) => getDatacenterRoutingPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenterRoutingPolicy.
 */
export interface GetDatacenterRoutingPolicyOutputArgs {
    blueprintId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
