// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAllowedProtocols(args?: GetAllowedProtocolsArgs, opts?: pulumi.InvokeOptions): Promise<GetAllowedProtocolsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ise:index/getAllowedProtocols:getAllowedProtocols", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAllowedProtocols.
 */
export interface GetAllowedProtocolsArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getAllowedProtocols.
 */
export interface GetAllowedProtocolsResult {
    readonly allow5g: boolean;
    readonly allowChap: boolean;
    readonly allowEapFast: boolean;
    readonly allowEapMd5: boolean;
    readonly allowEapTls: boolean;
    readonly allowEapTtls: boolean;
    readonly allowLeap: boolean;
    readonly allowMsChapV1: boolean;
    readonly allowMsChapV2: boolean;
    readonly allowPapAscii: boolean;
    readonly allowPeap: boolean;
    readonly allowPreferredEapProtocol: boolean;
    readonly allowTeap: boolean;
    readonly allowWeakCiphersForEap: boolean;
    readonly description: string;
    readonly eapFastAcceptClientCert: boolean;
    readonly eapFastAllowMachineAuthentication: boolean;
    readonly eapFastEapGtc: boolean;
    readonly eapFastEapGtcPwdChange: boolean;
    readonly eapFastEapGtcPwdChangeRetries: number;
    readonly eapFastEapMsChapV2: boolean;
    readonly eapFastEapMsChapV2PwdChange: boolean;
    readonly eapFastEapMsChapV2PwdChangeRetries: number;
    readonly eapFastEapTls: boolean;
    readonly eapFastEapTlsAuthOfExpiredCerts: boolean;
    readonly eapFastEnableEapChaining: boolean;
    readonly eapFastPacsAllowAnonymousProvisioning: boolean;
    readonly eapFastPacsAllowAuthenticatedProvisioning: boolean;
    readonly eapFastPacsAllowClientCert: boolean;
    readonly eapFastPacsAllowMachineAuthentication: boolean;
    readonly eapFastPacsAuthorizationPacTtl: number;
    readonly eapFastPacsAuthorizationPacTtlUnit: string;
    readonly eapFastPacsMachinePacTtl: number;
    readonly eapFastPacsMachinePacTtlUnit: string;
    readonly eapFastPacsServerReturns: boolean;
    readonly eapFastPacsStatelessSessionResume: boolean;
    readonly eapFastPacsTunnelPacTtl: number;
    readonly eapFastPacsTunnelPacTtlUnit: string;
    readonly eapFastPacsUseProactivePacUpdatePercentage: number;
    readonly eapFastUsePacs: boolean;
    readonly eapTlsAllowAuthOfExpiredCerts: boolean;
    readonly eapTlsEnableStatelessSessionResume: boolean;
    readonly eapTlsLBit: boolean;
    readonly eapTlsSessionTicketPercentage: number;
    readonly eapTlsSessionTicketTtl: number;
    readonly eapTlsSessionTicketTtlUnit: string;
    readonly eapTtlsChap: boolean;
    readonly eapTtlsEapMd5: boolean;
    readonly eapTtlsEapMsChapV2: boolean;
    readonly eapTtlsEapMsChapV2PwdChange: boolean;
    readonly eapTtlsEapMsChapV2PwdChangeRetries: number;
    readonly eapTtlsMsChapV1: boolean;
    readonly eapTtlsMsChapV2: boolean;
    readonly eapTtlsPapAscii: boolean;
    readonly id: string;
    readonly name: string;
    readonly peapAllowPeapEapGtc: boolean;
    readonly peapAllowPeapEapGtcPwdChange: boolean;
    readonly peapAllowPeapEapGtcPwdChangeRetries: number;
    readonly peapAllowPeapEapMsChapV2: boolean;
    readonly peapAllowPeapEapMsChapV2PwdChange: boolean;
    readonly peapAllowPeapEapMsChapV2PwdChangeRetries: number;
    readonly peapAllowPeapEapTls: boolean;
    readonly peapAllowPeapEapTlsAuthOfExpiredCerts: boolean;
    readonly peapPeapV0: boolean;
    readonly preferredEapProtocol: string;
    readonly processHostLookup: boolean;
    readonly requireCryptobinding: boolean;
    readonly requireMessageAuth: boolean;
    readonly teapDowngradeMsk: boolean;
    readonly teapEapAcceptClientCertDuringTunnelEst: boolean;
    readonly teapEapChaining: boolean;
    readonly teapEapMsChapV2: boolean;
    readonly teapEapMsChapV2PwdChange: boolean;
    readonly teapEapMsChapV2PwdChangeRetries: number;
    readonly teapEapTls: boolean;
    readonly teapEapTlsAuthOfExpiredCerts: boolean;
    readonly teapRequestBasicPwdAuth: boolean;
}
export function getAllowedProtocolsOutput(args?: GetAllowedProtocolsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAllowedProtocolsResult> {
    return pulumi.output(args).apply((a: any) => getAllowedProtocols(a, opts))
}

/**
 * A collection of arguments for invoking getAllowedProtocols.
 */
export interface GetAllowedProtocolsOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
