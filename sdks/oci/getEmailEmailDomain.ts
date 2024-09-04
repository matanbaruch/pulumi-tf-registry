// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEmailEmailDomain(args: GetEmailEmailDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailEmailDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getEmailEmailDomain:getEmailEmailDomain", {
        "emailDomainId": args.emailDomainId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEmailEmailDomain.
 */
export interface GetEmailEmailDomainArgs {
    emailDomainId: string;
}

/**
 * A collection of values returned by getEmailEmailDomain.
 */
export interface GetEmailEmailDomainResult {
    readonly activeDkimId: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly domainVerificationId: string;
    readonly domainVerificationStatus: string;
    readonly emailDomainId: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isSpf: boolean;
    readonly name: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
}
export function getEmailEmailDomainOutput(args: GetEmailEmailDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEmailEmailDomainResult> {
    return pulumi.output(args).apply((a: any) => getEmailEmailDomain(a, opts))
}

/**
 * A collection of arguments for invoking getEmailEmailDomain.
 */
export interface GetEmailEmailDomainOutputArgs {
    emailDomainId: pulumi.Input<string>;
}
