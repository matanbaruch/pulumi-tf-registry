// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCockpit(args?: GetCockpitArgs, opts?: pulumi.InvokeOptions): Promise<GetCockpitResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getCockpit:getCockpit", {
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCockpit.
 */
export interface GetCockpitArgs {
    id?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getCockpit.
 */
export interface GetCockpitResult {
    readonly endpoints: outputs.GetCockpitEndpoint[];
    readonly id: string;
    readonly planId: string;
    readonly projectId?: string;
    readonly pushUrls: outputs.GetCockpitPushUrl[];
}
export function getCockpitOutput(args?: GetCockpitOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCockpitResult> {
    return pulumi.output(args).apply((a: any) => getCockpit(a, opts))
}

/**
 * A collection of arguments for invoking getCockpit.
 */
export interface GetCockpitOutputArgs {
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
