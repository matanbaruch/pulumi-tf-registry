// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityDomainsCustomerSecretKey(args: GetIdentityDomainsCustomerSecretKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityDomainsCustomerSecretKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityDomainsCustomerSecretKey:getIdentityDomainsCustomerSecretKey", {
        "attributeSets": args.attributeSets,
        "attributes": args.attributes,
        "authorization": args.authorization,
        "customerSecretKeyId": args.customerSecretKeyId,
        "idcsEndpoint": args.idcsEndpoint,
        "resourceTypeSchemaVersion": args.resourceTypeSchemaVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityDomainsCustomerSecretKey.
 */
export interface GetIdentityDomainsCustomerSecretKeyArgs {
    attributeSets?: string[];
    attributes?: string;
    authorization?: string;
    customerSecretKeyId: string;
    idcsEndpoint: string;
    resourceTypeSchemaVersion?: string;
}

/**
 * A collection of values returned by getIdentityDomainsCustomerSecretKey.
 */
export interface GetIdentityDomainsCustomerSecretKeyResult {
    readonly accessKey: string;
    readonly attributeSets?: string[];
    readonly attributes?: string;
    readonly authorization?: string;
    readonly compartmentOcid: string;
    readonly customerSecretKeyId: string;
    readonly deleteInProgress: boolean;
    readonly description: string;
    readonly displayName: string;
    readonly domainOcid: string;
    readonly expiresOn: string;
    readonly id: string;
    readonly idcsCreatedBies: outputs.GetIdentityDomainsCustomerSecretKeyIdcsCreatedBy[];
    readonly idcsEndpoint: string;
    readonly idcsLastModifiedBies: outputs.GetIdentityDomainsCustomerSecretKeyIdcsLastModifiedBy[];
    readonly idcsLastUpgradedInRelease: string;
    readonly idcsPreventedOperations: string[];
    readonly metas: outputs.GetIdentityDomainsCustomerSecretKeyMeta[];
    readonly ocid: string;
    readonly resourceTypeSchemaVersion?: string;
    readonly schemas: string[];
    readonly status: string;
    readonly tags: outputs.GetIdentityDomainsCustomerSecretKeyTag[];
    readonly tenancyOcid: string;
    readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUsers: outputs.GetIdentityDomainsCustomerSecretKeyUrnietfparamsscimschemasoracleidcsextensionselfChangeUser[];
    readonly users: outputs.GetIdentityDomainsCustomerSecretKeyUser[];
}
export function getIdentityDomainsCustomerSecretKeyOutput(args: GetIdentityDomainsCustomerSecretKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityDomainsCustomerSecretKeyResult> {
    return pulumi.output(args).apply((a: any) => getIdentityDomainsCustomerSecretKey(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityDomainsCustomerSecretKey.
 */
export interface GetIdentityDomainsCustomerSecretKeyOutputArgs {
    attributeSets?: pulumi.Input<pulumi.Input<string>[]>;
    attributes?: pulumi.Input<string>;
    authorization?: pulumi.Input<string>;
    customerSecretKeyId: pulumi.Input<string>;
    idcsEndpoint: pulumi.Input<string>;
    resourceTypeSchemaVersion?: pulumi.Input<string>;
}
