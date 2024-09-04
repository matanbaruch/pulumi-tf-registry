// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6NatSharedPoolGroupOper(args?: GetCgnv6NatSharedPoolGroupOperArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6NatSharedPoolGroupOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6NatSharedPoolGroupOper:getCgnv6NatSharedPoolGroupOper", {
        "id": args.id,
        "members": args.members,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6NatSharedPoolGroupOper.
 */
export interface GetCgnv6NatSharedPoolGroupOperArgs {
    id?: string;
    members?: inputs.GetCgnv6NatSharedPoolGroupOperMembers;
    oper?: inputs.GetCgnv6NatSharedPoolGroupOperOper;
}

/**
 * A collection of values returned by getCgnv6NatSharedPoolGroupOper.
 */
export interface GetCgnv6NatSharedPoolGroupOperResult {
    readonly id: string;
    readonly members?: outputs.GetCgnv6NatSharedPoolGroupOperMembers;
    readonly oper?: outputs.GetCgnv6NatSharedPoolGroupOperOper;
}
export function getCgnv6NatSharedPoolGroupOperOutput(args?: GetCgnv6NatSharedPoolGroupOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6NatSharedPoolGroupOperResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6NatSharedPoolGroupOper(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6NatSharedPoolGroupOper.
 */
export interface GetCgnv6NatSharedPoolGroupOperOutputArgs {
    id?: pulumi.Input<string>;
    members?: pulumi.Input<inputs.GetCgnv6NatSharedPoolGroupOperMembersArgs>;
    oper?: pulumi.Input<inputs.GetCgnv6NatSharedPoolGroupOperOperArgs>;
}
