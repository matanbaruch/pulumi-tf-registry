// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDriverLicense(args: GetDriverLicenseArgs, opts?: pulumi.InvokeOptions): Promise<GetDriverLicenseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("secretsmanager:index/getDriverLicense:getDriverLicense", {
        "id": args.id,
        "path": args.path,
        "title": args.title,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDriverLicense.
 */
export interface GetDriverLicenseArgs {
    id?: string;
    path: string;
    title?: string;
}

/**
 * A collection of values returned by getDriverLicense.
 */
export interface GetDriverLicenseResult {
    readonly addressReves: outputs.GetDriverLicenseAddressRef[];
    readonly birthDate: string;
    readonly driverLicenseNumber: string;
    readonly expirationDate: string;
    readonly fileReves: outputs.GetDriverLicenseFileRef[];
    readonly id: string;
    readonly names: outputs.GetDriverLicenseName[];
    readonly notes: string;
    readonly path: string;
    readonly title?: string;
    readonly type: string;
}
export function getDriverLicenseOutput(args: GetDriverLicenseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDriverLicenseResult> {
    return pulumi.output(args).apply((a: any) => getDriverLicense(a, opts))
}

/**
 * A collection of arguments for invoking getDriverLicense.
 */
export interface GetDriverLicenseOutputArgs {
    id?: pulumi.Input<string>;
    path: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}
