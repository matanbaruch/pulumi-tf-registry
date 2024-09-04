// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBastionhostInstances(args?: GetBastionhostInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionhostInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getBastionhostInstances:getBastionhostInstances", {
        "descriptionRegex": args.descriptionRegex,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBastionhostInstances.
 */
export interface GetBastionhostInstancesArgs {
    descriptionRegex?: string;
    id?: string;
    ids?: string[];
    outputFile?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getBastionhostInstances.
 */
export interface GetBastionhostInstancesResult {
    readonly descriptionRegex?: string;
    readonly descriptions: string[];
    readonly id: string;
    readonly ids: string[];
    readonly instances: outputs.GetBastionhostInstancesInstance[];
    readonly outputFile?: string;
    readonly tags?: {[key: string]: string};
}
export function getBastionhostInstancesOutput(args?: GetBastionhostInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBastionhostInstancesResult> {
    return pulumi.output(args).apply((a: any) => getBastionhostInstances(a, opts))
}

/**
 * A collection of arguments for invoking getBastionhostInstances.
 */
export interface GetBastionhostInstancesOutputArgs {
    descriptionRegex?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
