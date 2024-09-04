// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsMyCustomerSecretKey(args: GetIdentityDomainsMyCustomerSecretKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsMyCustomerSecretKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsMyCustomerSecretKey:getIdentityDomainsMyCustomerSecretKey", {
        "authorization": args.authorization,
        "idcsEndpoint": args.idcsEndpoint,
        "myCustomerSecretKeyId": args.myCustomerSecretKeyId,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyCustomerSecretKey.
 */
export interface GetIdentityDomainsMyCustomerSecretKeyArgs {
    authorization?: string;
    idcsEndpoint: string;
    myCustomerSecretKeyId: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsMyCustomerSecretKey.
 */
export interface GetIdentityDomainsMyCustomerSecretKeyResult {
    readonly accessKey: string;
    readonly authorization?: string;
    readonly compartmentOcid: string;
    readonly deleteInProgress: boolean;
    readonly description: string;
    readonly displayName: string;
    readonly domainOcid: string;
    readonly expiresOn: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsMyCustomerSecretKeyIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsMyCustomerSecretKeyIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly metas: outputs.GetIdentityDomainsMyCustomerSecretKeyMeta[];
    readonly myCustomerSecretKeyId: string;
    readonly ocid: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly status: string;
    readonly tags: outputs.GetIdentityDomainsMyCustomerSecretKeyTag[];
    readonly tenancyOcid: string;
    readonly users: outputs.GetIdentityDomainsMyCustomerSecretKeyUser[];
}
export function getIdentityDomainsMyCustomerSecretKeyOutput(args: GetIdentityDomainsMyCustomerSecretKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsMyCustomerSecretKeyResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsMyCustomerSecretKey(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsMyCustomerSecretKey.
 */
export interface GetIdentityDomainsMyCustomerSecretKeyOutputArgs {
    authorization?: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    myCustomerSecretKeyId: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
