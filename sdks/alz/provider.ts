// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * The provider type for the alz package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'alz';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    /**
     * The password associated with the client certificate. For use when authenticating as a service principal using a client
     * certificate. If not specified, value will be attempted to be read from the `ARM_CLIENT_CERTIFICATE_PASSWORD` environment
     * variable.
     */
    public readonly clientCertificatePassword!: pulumi.Output<string | undefined>;
    /**
     * The path to the client certificate associated with the service principal for use when authenticating as a service
     * principal using a client certificate. If not specified, value will be attempted to be read from the
     * `ARM_CLIENT_CERTIFICATE_PATH` environment variable.
     */
    public readonly clientCertificatePath!: pulumi.Output<string | undefined>;
    /**
     * The client id which should be used. For use when authenticating as a service principal. If not specified, value will be
     * attempted to be read from the `ARM_CLIENT_ID` environment variable.
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The client secret which should be used. For use when authenticating as a service principal using a client secret. If not
     * specified, value will be attempted to be read from the `ARM_CLIENT_SECRET` environment variable.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    public readonly environment!: pulumi.Output<string | undefined>;
    /**
     * The bearer token for the request to the OIDC provider. For use when authenticating using OpenID Connect. If not
     * specified, value will be attempted to be read from the first non-empty value of the `ARM_OIDC_REQUEST_TOKEN` and
     * `ACTIONS_ID_TOKEN_REQUEST_TOKEN` environment variables.
     */
    public readonly oidcRequestToken!: pulumi.Output<string | undefined>;
    /**
     * The URL for the OIDC provider from which to request an id token. For use when authenticating as a service principal
     * using OpenID Connect. If not specified, value will be attempted to be read from the first non-empty value of the
     * `ARM_OIDC_REQUEST_URL` and `ACTIONS_ID_TOKEN_REQUEST_URL` environment variables.
     */
    public readonly oidcRequestUrl!: pulumi.Output<string | undefined>;
    /**
     * The OIDC id token for use when authenticating as a service principal using OpenID Connect. If not specified, value will
     * be attempted to be read from the `ARM_OIDC_TOKEN` environment variable.
     */
    public readonly oidcToken!: pulumi.Output<string | undefined>;
    /**
     * The path to a file containing an OIDC id token for use when authenticating using OpenID Connect. If not specified, value
     * will be attempted to be read from the `ARM_OIDC_TOKEN_FILE_PATH` environment variable.
     */
    public readonly oidcTokenFilePath!: pulumi.Output<string | undefined>;
    /**
     * The Tenant ID which should be used. If not specified, value will be attempted to be read from the `ARM_TENANT_ID`
     * environment variable.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["auxiliaryTenantIds"] = pulumi.output(args ? args.auxiliaryTenantIds : undefined).apply(JSON.stringify);
            resourceInputs["clientCertificatePassword"] = args?.clientCertificatePassword ? pulumi.secret(args.clientCertificatePassword) : undefined;
            resourceInputs["clientCertificatePath"] = args ? args.clientCertificatePath : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["libOverwriteEnabled"] = pulumi.output(args ? args.libOverwriteEnabled : undefined).apply(JSON.stringify);
            resourceInputs["libraryReferences"] = pulumi.output(args ? args.libraryReferences : undefined).apply(JSON.stringify);
            resourceInputs["oidcRequestToken"] = args?.oidcRequestToken ? pulumi.secret(args.oidcRequestToken) : undefined;
            resourceInputs["oidcRequestUrl"] = args ? args.oidcRequestUrl : undefined;
            resourceInputs["oidcToken"] = args?.oidcToken ? pulumi.secret(args.oidcToken) : undefined;
            resourceInputs["oidcTokenFilePath"] = args ? args.oidcTokenFilePath : undefined;
            resourceInputs["skipProviderRegistration"] = pulumi.output(args ? args.skipProviderRegistration : undefined).apply(JSON.stringify);
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["useCli"] = pulumi.output(args ? args.useCli : undefined).apply(JSON.stringify);
            resourceInputs["useMsi"] = pulumi.output(args ? args.useMsi : undefined).apply(JSON.stringify);
            resourceInputs["useOidc"] = pulumi.output(args ? args.useOidc : undefined).apply(JSON.stringify);
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientCertificatePassword", "clientSecret", "oidcRequestToken", "oidcToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * A list of auxiliary tenant ids which should be used. If not specified, value will be attempted to be read from the
     * `ARM_AUXILIARY_TENANT_IDS` environment variable. When configuring from the environment, use a semicolon as a delimiter.
     */
    auxiliaryTenantIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The password associated with the client certificate. For use when authenticating as a service principal using a client
     * certificate. If not specified, value will be attempted to be read from the `ARM_CLIENT_CERTIFICATE_PASSWORD` environment
     * variable.
     */
    clientCertificatePassword?: pulumi.Input<string>;
    /**
     * The path to the client certificate associated with the service principal for use when authenticating as a service
     * principal using a client certificate. If not specified, value will be attempted to be read from the
     * `ARM_CLIENT_CERTIFICATE_PATH` environment variable.
     */
    clientCertificatePath?: pulumi.Input<string>;
    /**
     * The client id which should be used. For use when authenticating as a service principal. If not specified, value will be
     * attempted to be read from the `ARM_CLIENT_ID` environment variable.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret which should be used. For use when authenticating as a service principal using a client secret. If not
     * specified, value will be attempted to be read from the `ARM_CLIENT_SECRET` environment variable.
     */
    clientSecret?: pulumi.Input<string>;
    environment?: pulumi.Input<string>;
    /**
     * Whether to allow overwriting of the library by other lib directories. Default is `false`.
     */
    libOverwriteEnabled?: pulumi.Input<boolean>;
    /**
     * A list of references to the [ALZ library](https://aka.ms/alz/library) to use. Each reference should either contain the
     * `path` (e.g. `platform/alz`) and the `ref` (e.g. `2024.03.03`), or a `custom_url` to be supplied to go-getter. If this
     * value is not specified, the default value will be used, which is: ```terraform alz_library_references = [ { path =
     * "platform/alz", tag = "2024.03.03" }, ] ```
     */
    libraryReferences?: pulumi.Input<pulumi.Input<inputs.ProviderLibraryReference>[]>;
    /**
     * The bearer token for the request to the OIDC provider. For use when authenticating using OpenID Connect. If not
     * specified, value will be attempted to be read from the first non-empty value of the `ARM_OIDC_REQUEST_TOKEN` and
     * `ACTIONS_ID_TOKEN_REQUEST_TOKEN` environment variables.
     */
    oidcRequestToken?: pulumi.Input<string>;
    /**
     * The URL for the OIDC provider from which to request an id token. For use when authenticating as a service principal
     * using OpenID Connect. If not specified, value will be attempted to be read from the first non-empty value of the
     * `ARM_OIDC_REQUEST_URL` and `ACTIONS_ID_TOKEN_REQUEST_URL` environment variables.
     */
    oidcRequestUrl?: pulumi.Input<string>;
    /**
     * The OIDC id token for use when authenticating as a service principal using OpenID Connect. If not specified, value will
     * be attempted to be read from the `ARM_OIDC_TOKEN` environment variable.
     */
    oidcToken?: pulumi.Input<string>;
    /**
     * The path to a file containing an OIDC id token for use when authenticating using OpenID Connect. If not specified, value
     * will be attempted to be read from the `ARM_OIDC_TOKEN_FILE_PATH` environment variable.
     */
    oidcTokenFilePath?: pulumi.Input<string>;
    /**
     * Should the provider skip registering all of the resource providers that it supports, if they're not already registered?
     * Default is `false`. If not specified, value will be attempted to be read from the `ARM_SKIP_PROVIDER_REGISTRATION`
     * environment variable.
     */
    skipProviderRegistration?: pulumi.Input<boolean>;
    /**
     * The Tenant ID which should be used. If not specified, value will be attempted to be read from the `ARM_TENANT_ID`
     * environment variable.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Allow Azure CLI to be used for authentication. Default is `true`. If not specified, value will be attempted to be read
     * from the `ARM_USE_CLI` environment variable.
     */
    useCli?: pulumi.Input<boolean>;
    /**
     * Allow managed service identity to be used for authentication. Default is `false`. If not specified, value will be
     * attempted to be read from the `ARM_USE_MSI` environment variable.
     */
    useMsi?: pulumi.Input<boolean>;
    /**
     * Allow OpenID Connect to be used for authentication. Default is `false`. If not specified, value will be attempted to be
     * read from the `ARM_USE_OIDC` environment variable.
     */
    useOidc?: pulumi.Input<boolean>;
}
