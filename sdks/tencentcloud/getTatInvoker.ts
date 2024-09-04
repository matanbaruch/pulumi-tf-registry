// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTatInvoker(args?: GetTatInvokerArgs, opts?: pulumi.InvokeOptions): Promise<GetTatInvokerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTatInvoker:getTatInvoker", {
        "commandId": args.commandId,
        "id": args.id,
        "invokerId": args.invokerId,
        "resultOutputFile": args.resultOutputFile,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTatInvoker.
 */
export interface GetTatInvokerArgs {
    commandId?: string;
    id?: string;
    invokerId?: string;
    resultOutputFile?: string;
    type?: string;
}

/**
 * A collection of values returned by getTatInvoker.
 */
export interface GetTatInvokerResult {
    readonly commandId?: string;
    readonly id: string;
    readonly invokerId?: string;
    readonly invokerSets: outputs.GetTatInvokerInvokerSet[];
    readonly resultOutputFile?: string;
    readonly type?: string;
}
export function getTatInvokerOutput(args?: GetTatInvokerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTatInvokerResult> {
    return pulumi.output(args).apply((a: any) => getTatInvoker(a, opts))
}

/**
 * A collection of arguments for invoking getTatInvoker.
 */
export interface GetTatInvokerOutputArgs {
    commandId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    invokerId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
