// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAclToken(args: GetAclTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetAclTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("consul:index/getAclToken:getAclToken", {
        "accessorId": args.accessorId,
        "id": args.id,
        "namespace": args.namespace,
        "partition": args.partition,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAclToken.
 */
export interface GetAclTokenArgs {
    accessorId: string;
    id?: string;
    namespace?: string;
    partition?: string;
}

/**
 * A collection of values returned by getAclToken.
 */
export interface GetAclTokenResult {
    readonly accessorId: string;
    readonly description: string;
    readonly expirationTime: string;
    readonly id: string;
    readonly local: boolean;
    readonly namespace?: string;
    readonly nodeIdentities: outputs.GetAclTokenNodeIdentity[];
    readonly partition?: string;
    readonly policies: outputs.GetAclTokenPolicy[];
    readonly roles: outputs.GetAclTokenRole[];
    readonly serviceIdentities: outputs.GetAclTokenServiceIdentity[];
    readonly templatedPolicies: outputs.GetAclTokenTemplatedPolicy[];
}
export function getAclTokenOutput(args: GetAclTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAclTokenResult> {
    return pulumi.output(args).apply((a: any) => getAclToken(a, opts))
}

/**
 * A collection of arguments for invoking getAclToken.
 */
export interface GetAclTokenOutputArgs {
    accessorId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    partition?: pulumi.Input<string>;
}
