// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIdpMetadataSaml(args?: GetIdpMetadataSamlArgs, opts?: pulumi.InvokeOptions): Promise<GetIdpMetadataSamlResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getIdpMetadataSaml:getIdpMetadataSaml", {
        "id": args.id,
        "idpId": args.idpId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdpMetadataSaml.
 */
export interface GetIdpMetadataSamlArgs {
    id?: string;
    idpId?: string;
}

/**
 * A collection of values returned by getIdpMetadataSaml.
 */
export interface GetIdpMetadataSamlResult {
    readonly assertionsSigned: boolean;
    readonly authnRequestSigned: boolean;
    readonly encryptionCertificate: string;
    readonly entityId: string;
    readonly httpPostBinding: string;
    readonly httpRedirectBinding: string;
    readonly id: string;
    readonly idpId?: string;
    readonly metadata: string;
    readonly signingCertificate: string;
}
export function getIdpMetadataSamlOutput(args?: GetIdpMetadataSamlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdpMetadataSamlResult> {
    return pulumi.output(args).apply((a: any) => getIdpMetadataSaml(a, opts))
}

/**
 * A collection of arguments for invoking getIdpMetadataSaml.
 */
export interface GetIdpMetadataSamlOutputArgs {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
}
