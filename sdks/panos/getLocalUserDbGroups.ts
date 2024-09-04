// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLocalUserDbGroups(args?: GetLocalUserDbGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalUserDbGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getLocalUserDbGroups:getLocalUserDbGroups", {
        "id": args.id,
        "template": args.template,
        "templateStack": args.templateStack,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocalUserDbGroups.
 */
export interface GetLocalUserDbGroupsArgs {
    id?: string;
    template?: string;
    templateStack?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getLocalUserDbGroups.
 */
export interface GetLocalUserDbGroupsResult {
    readonly id: string;
    readonly listings: string[];
    readonly template?: string;
    readonly templateStack?: string;
    readonly total: number;
    readonly vsys?: string;
}
export function getLocalUserDbGroupsOutput(args?: GetLocalUserDbGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalUserDbGroupsResult> {
    return pulumi.output(args).apply((a: any) => getLocalUserDbGroups(a, opts))
}

/**
 * A collection of arguments for invoking getLocalUserDbGroups.
 */
export interface GetLocalUserDbGroupsOutputArgs {
    id?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
