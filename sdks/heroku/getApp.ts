// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("heroku:index/getApp:getApp", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApp.
 */
export interface GetAppArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getApp.
 */
export interface GetAppResult {
    readonly acm: boolean;
    readonly buildpacks: string[];
    readonly configVars: {[key: string]: string};
    readonly gitUrl: string;
    readonly herokuHostname: string;
    readonly id: string;
    readonly internalRouting: boolean;
    readonly lastReleaseId: string;
    readonly lastSlugId: string;
    readonly name: string;
    readonly organizations: outputs.GetAppOrganization[];
    readonly region: string;
    readonly space: string;
    readonly stack: string;
    readonly uuid: string;
    readonly webUrl: string;
}
export function getAppOutput(args: GetAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppResult> {
    return pulumi.output(args).apply((a: any) => getApp(a, opts))
}

/**
 * A collection of arguments for invoking getApp.
 */
export interface GetAppOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
