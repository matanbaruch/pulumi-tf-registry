// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLicenses(args: GetLicensesArgs, opts?: pulumi.InvokeOptions): Promise<GetLicensesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getLicenses:getLicenses", {
        "dataFilters": args.dataFilters,
        "organizationId": args.organizationId,
        "scimFilter": args.scimFilter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLicenses.
 */
export interface GetLicensesArgs {
    dataFilters?: inputs.GetLicensesDataFilter[];
    organizationId: string;
    scimFilter?: string;
}

/**
 * A collection of values returned by getLicenses.
 */
export interface GetLicensesResult {
    readonly dataFilters?: outputs.GetLicensesDataFilter[];
    readonly id: string;
    readonly ids: string[];
    readonly organizationId: string;
    readonly scimFilter?: string;
}
export function getLicensesOutput(args: GetLicensesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicensesResult> {
    return pulumi.output(args).apply((a: any) => getLicenses(a, opts))
}

/**
 * A collection of arguments for invoking getLicenses.
 */
export interface GetLicensesOutputArgs {
    dataFilters?: pulumi.Input<pulumi.Input<inputs.GetLicensesDataFilterArgs>[]>;
    organizationId: pulumi.Input<string>;
    scimFilter?: pulumi.Input<string>;
}
