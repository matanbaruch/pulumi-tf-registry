// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getClientCertAuthorityOcspTlsTrustedCommonName(args: GetClientCertAuthorityOcspTlsTrustedCommonNameArgs, opts?: pulumi.InvokeOptions): Promise<GetClientCertAuthorityOcspTlsTrustedCommonNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getClientCertAuthorityOcspTlsTrustedCommonName:getClientCertAuthorityOcspTlsTrustedCommonName", {
        "certAuthorityName": args.certAuthorityName,
        "ocspTlsTrustedCommonName": args.ocspTlsTrustedCommonName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClientCertAuthorityOcspTlsTrustedCommonName.
 */
export interface GetClientCertAuthorityOcspTlsTrustedCommonNameArgs {
    certAuthorityName: string;
    ocspTlsTrustedCommonName: string;
}

/**
 * A collection of values returned by getClientCertAuthorityOcspTlsTrustedCommonName.
 */
export interface GetClientCertAuthorityOcspTlsTrustedCommonNameResult {
    readonly certAuthorityName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ocspTlsTrustedCommonName: string;
}
export function getClientCertAuthorityOcspTlsTrustedCommonNameOutput(args: GetClientCertAuthorityOcspTlsTrustedCommonNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClientCertAuthorityOcspTlsTrustedCommonNameResult> {
    return pulumi.output(args).apply((a: any) => getClientCertAuthorityOcspTlsTrustedCommonName(a, opts))
}

/**
 * A collection of arguments for invoking getClientCertAuthorityOcspTlsTrustedCommonName.
 */
export interface GetClientCertAuthorityOcspTlsTrustedCommonNameOutputArgs {
    certAuthorityName: pulumi.Input<string>;
    ocspTlsTrustedCommonName: pulumi.Input<string>;
}
