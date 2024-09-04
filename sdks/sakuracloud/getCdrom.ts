// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCdrom(args?: GetCdromArgs, opts?: pulumi.InvokeOptions): Promise<GetCdromResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sakuracloud:index/getCdrom:getCdrom", {
        "filter": args.filter,
        "id": args.id,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCdrom.
 */
export interface GetCdromArgs {
    filter?: inputs.GetCdromFilter;
    id?: string;
    zone?: string;
}

/**
 * A collection of values returned by getCdrom.
 */
export interface GetCdromResult {
    readonly description: string;
    readonly filter?: outputs.GetCdromFilter;
    readonly iconId: string;
    readonly id: string;
    readonly name: string;
    readonly size: number;
    readonly tags: string[];
    readonly zone: string;
}
export function getCdromOutput(args?: GetCdromOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCdromResult> {
    return pulumi.output(args).apply((a: any) => getCdrom(a, opts))
}

/**
 * A collection of arguments for invoking getCdrom.
 */
export interface GetCdromOutputArgs {
    filter?: pulumi.Input<inputs.GetCdromFilterArgs>;
    id?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
