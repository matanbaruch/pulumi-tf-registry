// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSamlProfiles(args?: GetSamlProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetSamlProfilesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getSamlProfiles:getSamlProfiles", {
        "id": args.id,
        "template": args.template,
        "templateStack": args.templateStack,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSamlProfiles.
 */
export interface GetSamlProfilesArgs {
    id?: string;
    template?: string;
    templateStack?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getSamlProfiles.
 */
export interface GetSamlProfilesResult {
    readonly id: string;
    readonly listings: string[];
    readonly template?: string;
    readonly templateStack?: string;
    readonly total: number;
    readonly vsys?: string;
}
export function getSamlProfilesOutput(args?: GetSamlProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSamlProfilesResult> {
    return pulumi.output(args).apply((a: any) => getSamlProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getSamlProfiles.
 */
export interface GetSamlProfilesOutputArgs {
    id?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
