// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLicensemanagerGrant(args: GetLicensemanagerGrantArgs, opts?: pulumi.InvokeOptions): Promise<GetLicensemanagerGrantResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLicensemanagerGrant:getLicensemanagerGrant", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLicensemanagerGrant.
 */
export interface GetLicensemanagerGrantArgs {
    id: string;
}

/**
 * A collection of values returned by getLicensemanagerGrant.
 */
export interface GetLicensemanagerGrantResult {
    readonly allowedOperations: string[];
    readonly grantArn: string;
    readonly grantName: string;
    readonly homeRegion: string;
    readonly id: string;
    readonly licenseArn: string;
    readonly principals: string[];
    readonly status: string;
    readonly version: string;
}
export function getLicensemanagerGrantOutput(args: GetLicensemanagerGrantOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLicensemanagerGrantResult> {
    return pulumi.output(args).apply((a: any) => getLicensemanagerGrant(a, opts))
}

/**
 * A collection of arguments for invoking getLicensemanagerGrant.
 */
export interface GetLicensemanagerGrantOutputArgs {
    id: pulumi.Input<string>;
}
