// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNlbServiceList(args: GetNlbServiceListArgs, opts?: pulumi.InvokeOptions): Promise<GetNlbServiceListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("exoscale:index/getNlbServiceList:getNlbServiceList", {
        "nlbId": args.nlbId,
        "nlbName": args.nlbName,
        "timeouts": args.timeouts,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNlbServiceList.
 */
export interface GetNlbServiceListArgs {
    nlbId?: string;
    nlbName?: string;
    timeouts?: inputs.GetNlbServiceListTimeouts;
    zone: string;
}

/**
 * A collection of values returned by getNlbServiceList.
 */
export interface GetNlbServiceListResult {
    readonly id: string;
    readonly nlbId?: string;
    readonly nlbName?: string;
    readonly services: outputs.GetNlbServiceListService[];
    readonly timeouts?: outputs.GetNlbServiceListTimeouts;
    readonly zone: string;
}
export function getNlbServiceListOutput(args: GetNlbServiceListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNlbServiceListResult> {
    return pulumi.output(args).apply((a: any) => getNlbServiceList(a, opts))
}

/**
 * A collection of arguments for invoking getNlbServiceList.
 */
export interface GetNlbServiceListOutputArgs {
    nlbId?: pulumi.Input<string>;
    nlbName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetNlbServiceListTimeoutsArgs>;
    zone: pulumi.Input<string>;
}
