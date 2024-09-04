// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirmwareCatalog(args?: GetFirmwareCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetFirmwareCatalogResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ome:index/getFirmwareCatalog:getFirmwareCatalog", {
        "names": args.names,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirmwareCatalog.
 */
export interface GetFirmwareCatalogArgs {
    names?: string[];
}

/**
 * A collection of values returned by getFirmwareCatalog.
 */
export interface GetFirmwareCatalogResult {
    readonly firmwareCatalogs: outputs.GetFirmwareCatalogFirmwareCatalog[];
    readonly id: number;
    readonly names?: string[];
}
export function getFirmwareCatalogOutput(args?: GetFirmwareCatalogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirmwareCatalogResult> {
    return pulumi.output(args).apply((a: any) => getFirmwareCatalog(a, opts))
}

/**
 * A collection of arguments for invoking getFirmwareCatalog.
 */
export interface GetFirmwareCatalogOutputArgs {
    names?: pulumi.Input<pulumi.Input<string>[]>;
}
