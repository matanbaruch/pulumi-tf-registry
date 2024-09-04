// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCertificatemanagerAccount(args: GetCertificatemanagerAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificatemanagerAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCertificatemanagerAccount:getCertificatemanagerAccount", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCertificatemanagerAccount.
 */
export interface GetCertificatemanagerAccountArgs {
    id: string;
}

/**
 * A collection of values returned by getCertificatemanagerAccount.
 */
export interface GetCertificatemanagerAccountResult {
    readonly accountId: string;
    readonly expiryEventsConfiguration: outputs.GetCertificatemanagerAccountExpiryEventsConfiguration;
    readonly id: string;
}
export function getCertificatemanagerAccountOutput(args: GetCertificatemanagerAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCertificatemanagerAccountResult> {
    return pulumi.output(args).apply((a: any) => getCertificatemanagerAccount(a, opts))
}

/**
 * A collection of arguments for invoking getCertificatemanagerAccount.
 */
export interface GetCertificatemanagerAccountOutputArgs {
    id: pulumi.Input<string>;
}
