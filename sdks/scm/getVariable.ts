// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVariable(args: GetVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getVariable:getVariable", {
        "device": args.device,
        "folder": args.folder,
        "id": args.id,
        "snippet": args.snippet,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVariable.
 */
export interface GetVariableArgs {
    device?: string;
    folder?: string;
    id: string;
    snippet?: string;
}

/**
 * A collection of values returned by getVariable.
 */
export interface GetVariableResult {
    readonly description: string;
    readonly device?: string;
    readonly folder?: string;
    readonly id: string;
    readonly name: string;
    readonly overridden: boolean;
    readonly snippet?: string;
    readonly tfid: string;
    readonly type: string;
    readonly value: string;
}
export function getVariableOutput(args: GetVariableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVariableResult> {
    return pulumi.output(args).apply((a: any) => getVariable(a, opts))
}

/**
 * A collection of arguments for invoking getVariable.
 */
export interface GetVariableOutputArgs {
    device?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    id: pulumi.Input<string>;
    snippet?: pulumi.Input<string>;
}
