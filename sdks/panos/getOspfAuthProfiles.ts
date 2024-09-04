// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOspfAuthProfiles(args: GetOspfAuthProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetOspfAuthProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getOspfAuthProfiles:getOspfAuthProfiles", {
        "id": args.id,
        "template": args.template,
        "templateStack": args.templateStack,
        "virtualRouter": args.virtualRouter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOspfAuthProfiles.
 */
export interface GetOspfAuthProfilesArgs {
    id?: string;
    template?: string;
    templateStack?: string;
    virtualRouter: string;
}

/**
 * A collection of values returned by getOspfAuthProfiles.
 */
export interface GetOspfAuthProfilesResult {
    readonly id: string;
    readonly listings: string[];
    readonly template?: string;
    readonly templateStack?: string;
    readonly total: number;
    readonly virtualRouter: string;
}
export function getOspfAuthProfilesOutput(args: GetOspfAuthProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOspfAuthProfilesResult> {
    return pulumi.output(args).apply((a: any) => getOspfAuthProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getOspfAuthProfiles.
 */
export interface GetOspfAuthProfilesOutputArgs {
    id?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    templateStack?: pulumi.Input<string>;
    virtualRouter: pulumi.Input<string>;
}
