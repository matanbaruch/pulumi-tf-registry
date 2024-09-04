// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLicensemanagerGrants(args?: GetLicensemanagerGrantsArgs, opts?: pulumi.InvokeOptions): Promise<GetLicensemanagerGrantsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getLicensemanagerGrants:getLicensemanagerGrants", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLicensemanagerGrants.
 */
export interface GetLicensemanagerGrantsArgs {
    filters?: inputs.GetLicensemanagerGrantsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getLicensemanagerGrants.
 */
export interface GetLicensemanagerGrantsResult {
    readonly arns: string[];
    readonly filters?: outputs.GetLicensemanagerGrantsFilter[];
    readonly id: string;
}
export function getLicensemanagerGrantsOutput(args?: GetLicensemanagerGrantsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicensemanagerGrantsResult> {
    return pulumi.output(args).apply((a: any) => getLicensemanagerGrants(a, opts))
}

/**
 * A collection of arguments for invoking getLicensemanagerGrants.
 */
export interface GetLicensemanagerGrantsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLicensemanagerGrantsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
