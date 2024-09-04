// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEcdSimpleOfficeSites(args?: GetEcdSimpleOfficeSitesArgs, opts?: pulumi.InvokeOptions): Promise<GetEcdSimpleOfficeSitesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEcdSimpleOfficeSites:getEcdSimpleOfficeSites", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcdSimpleOfficeSites.
 */
export interface GetEcdSimpleOfficeSitesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getEcdSimpleOfficeSites.
 */
export interface GetEcdSimpleOfficeSitesResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly sites: outputs.GetEcdSimpleOfficeSitesSite[];
    readonly status?: string;
}
export function getEcdSimpleOfficeSitesOutput(args?: GetEcdSimpleOfficeSitesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcdSimpleOfficeSitesResult> {
    return pulumi.output(args).apply((a: any) => getEcdSimpleOfficeSites(a, opts))
}

/**
 * A collection of arguments for invoking getEcdSimpleOfficeSites.
 */
export interface GetEcdSimpleOfficeSitesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
