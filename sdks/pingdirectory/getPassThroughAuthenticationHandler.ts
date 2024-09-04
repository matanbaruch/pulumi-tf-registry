// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPassThroughAuthenticationHandler(args: GetPassThroughAuthenticationHandlerArgs, opts?: pulumi.InvokeOptions): Promise<GetPassThroughAuthenticationHandlerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getPassThroughAuthenticationHandler:getPassThroughAuthenticationHandler", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPassThroughAuthenticationHandler.
 */
export interface GetPassThroughAuthenticationHandlerArgs {
    name: string;
}

/**
 * A collection of values returned by getPassThroughAuthenticationHandler.
 */
export interface GetPassThroughAuthenticationHandlerResult {
    readonly additionalUserMappingScimFilter: string;
    readonly apiUrl: string;
    readonly authUrl: string;
    readonly bindDnPattern: string;
    readonly connectionCriteria: string;
    readonly continueOnFailureTypes: string[];
    readonly description: string;
    readonly dnMaps: string[];
    readonly environmentId: string;
    readonly extensionArguments: string[];
    readonly extensionClass: string;
    readonly httpProxyExternalServer: string;
    readonly id: string;
    readonly includedLocalEntryBaseDns: string[];
    readonly initialConnections: number;
    readonly maxConnections: number;
    readonly maximumAllowedLocalResponseTime: string;
    readonly maximumAllowedNonlocalResponseTime: string;
    readonly name: string;
    readonly oauthClientId: string;
    readonly oauthClientSecret: string;
    readonly oauthClientSecretPassphraseProvider: string;
    readonly requestCriteria: string;
    readonly searchBaseDn: string;
    readonly searchFilterPattern: string;
    readonly serverAccessMode: string;
    readonly servers: string[];
    readonly subordinatePassThroughAuthenticationHandlers: string[];
    readonly type: string;
    readonly useLocation: boolean;
    readonly usePasswordPolicyControl: boolean;
    readonly userMappingLocalAttributes: string[];
    readonly userMappingRemoteJsonFields: string[];
}
export function getPassThroughAuthenticationHandlerOutput(args: GetPassThroughAuthenticationHandlerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPassThroughAuthenticationHandlerResult> {
    return pulumi.output(args).apply((a: any) => getPassThroughAuthenticationHandler(a, opts))
}

/**
 * A collection of arguments for invoking getPassThroughAuthenticationHandler.
 */
export interface GetPassThroughAuthenticationHandlerOutputArgs {
    name: pulumi.Input<string>;
}
