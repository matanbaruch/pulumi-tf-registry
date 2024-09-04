// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKbld(args?: GetKbldArgs, opts?: pulumi.InvokeOptions): Promise<GetKbldResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("carvel:index/getKbld:getKbld", {
        "configYaml": args.configYaml,
        "debugLogs": args.debugLogs,
        "files": args.files,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKbld.
 */
export interface GetKbldArgs {
    configYaml?: string;
    debugLogs?: boolean;
    files?: string[];
    id?: string;
}

/**
 * A collection of values returned by getKbld.
 */
export interface GetKbldResult {
    readonly configYaml?: string;
    readonly debugLogs?: boolean;
    readonly files?: string[];
    readonly id: string;
    readonly result: string;
}
export function getKbldOutput(args?: GetKbldOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKbldResult> {
    return pulumi.output(args).apply((a: any) => getKbld(a, opts))
}

/**
 * A collection of arguments for invoking getKbld.
 */
export interface GetKbldOutputArgs {
    configYaml?: pulumi.Input<string>;
    debugLogs?: pulumi.Input<boolean>;
    files?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
}
