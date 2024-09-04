// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrebuiltProject(args: GetPrebuiltProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetPrebuiltProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vercel:index/getPrebuiltProject:getPrebuiltProject", {
        "path": args.path,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrebuiltProject.
 */
export interface GetPrebuiltProjectArgs {
    path: string;
}

/**
 * A collection of values returned by getPrebuiltProject.
 */
export interface GetPrebuiltProjectResult {
    readonly id: string;
    readonly output: {[key: string]: string};
    readonly path: string;
}
export function getPrebuiltProjectOutput(args: GetPrebuiltProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrebuiltProjectResult> {
    return pulumi.output(args).apply((a: any) => getPrebuiltProject(a, opts))
}

/**
 * A collection of arguments for invoking getPrebuiltProject.
 */
export interface GetPrebuiltProjectOutputArgs {
    path: pulumi.Input<string>;
}
