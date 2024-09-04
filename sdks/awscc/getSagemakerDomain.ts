// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSagemakerDomain(args: GetSagemakerDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetSagemakerDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerDomain:getSagemakerDomain", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSagemakerDomain.
 */
export interface GetSagemakerDomainArgs {
    id: string;
}

/**
 * A collection of values returned by getSagemakerDomain.
 */
export interface GetSagemakerDomainResult {
    readonly appNetworkAccessType: string;
    readonly appSecurityGroupManagement: string;
    readonly authMode: string;
    readonly defaultSpaceSettings: outputs.GetSagemakerDomainDefaultSpaceSettings;
    readonly defaultUserSettings: outputs.GetSagemakerDomainDefaultUserSettings;
    readonly domainArn: string;
    readonly domainId: string;
    readonly domainName: string;
    readonly domainSettings: outputs.GetSagemakerDomainDomainSettings;
    readonly homeEfsFileSystemId: string;
    readonly id: string;
    readonly kmsKeyId: string;
    readonly securityGroupIdForDomainBoundary: string;
    readonly singleSignOnApplicationArn: string;
    readonly singleSignOnManagedApplicationInstanceId: string;
    readonly subnetIds: string[];
    readonly tags: outputs.GetSagemakerDomainTag[];
    readonly url: string;
    readonly vpcId: string;
}
export function getSagemakerDomainOutput(args: GetSagemakerDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerDomainResult> {
    return pulumi.output(args).apply((a: any) => getSagemakerDomain(a, opts))
}

/**
 * A collection of arguments for invoking getSagemakerDomain.
 */
export interface GetSagemakerDomainOutputArgs {
    id: pulumi.Input<string>;
}
