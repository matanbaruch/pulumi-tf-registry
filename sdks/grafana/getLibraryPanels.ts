// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLibraryPanels(args?: GetLibraryPanelsArgs, opts?: pulumi.InvokeOptions): Promise<GetLibraryPanelsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("grafana:index/getLibraryPanels:getLibraryPanels", {
        "orgId": args.orgId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLibraryPanels.
 */
export interface GetLibraryPanelsArgs {
    orgId?: string;
}

/**
 * A collection of values returned by getLibraryPanels.
 */
export interface GetLibraryPanelsResult {
    readonly id: string;
    readonly orgId: string;
    readonly panels: outputs.GetLibraryPanelsPanel[];
}
export function getLibraryPanelsOutput(args?: GetLibraryPanelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLibraryPanelsResult> {
    return pulumi.output(args).apply((a: any) => getLibraryPanels(a, opts))
}

/**
 * A collection of arguments for invoking getLibraryPanels.
 */
export interface GetLibraryPanelsOutputArgs {
    orgId?: pulumi.Input<string>;
}
