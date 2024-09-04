// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AzureAuthenticationMethod extends pulumi.CustomResource {
    /**
     * Get an existing AzureAuthenticationMethod resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AzureAuthenticationMethodState, opts?: pulumi.CustomResourceOptions): AzureAuthenticationMethod {
        return new AzureAuthenticationMethod(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/azureAuthenticationMethod:AzureAuthenticationMethod';

    /**
     * Returns true if the given object is an instance of AzureAuthenticationMethod.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureAuthenticationMethod {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureAuthenticationMethod.__pulumiType;
    }

    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The client ID to use to
     * authenticate. - `default`: The client ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_CLIENT_ID
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The client secret to use to authenticate.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * A description for this Azure Authentication Method
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * The password for the user to authenticate.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.AzureAuthenticationMethodRequiredAction[]>;
    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The tenant ID to use to
     * authenticate. - `default`: The tenant ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_TENANT_ID environment variable.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of Azure Authentication Method resource. Options are ['default', 'client-secret', 'username-password']
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The username for the user to authenticate.
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a AzureAuthenticationMethod resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureAuthenticationMethodArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AzureAuthenticationMethodArgs | AzureAuthenticationMethodState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AzureAuthenticationMethodState | undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as AzureAuthenticationMethodArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientSecret", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AzureAuthenticationMethod.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AzureAuthenticationMethod resources.
 */
export interface AzureAuthenticationMethodState {
    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The client ID to use to
     * authenticate. - `default`: The client ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_CLIENT_ID
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret to use to authenticate.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * A description for this Azure Authentication Method
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The password for the user to authenticate.
     */
    password?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.AzureAuthenticationMethodRequiredAction>[]>;
    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The tenant ID to use to
     * authenticate. - `default`: The tenant ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_TENANT_ID environment variable.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The type of Azure Authentication Method resource. Options are ['default', 'client-secret', 'username-password']
     */
    type?: pulumi.Input<string>;
    /**
     * The username for the user to authenticate.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AzureAuthenticationMethod resource.
 */
export interface AzureAuthenticationMethodArgs {
    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The client ID to use to
     * authenticate. - `default`: The client ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_CLIENT_ID
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret to use to authenticate.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * A description for this Azure Authentication Method
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * The password for the user to authenticate.
     */
    password?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`client-secret`, `username-password`]: The tenant ID to use to
     * authenticate. - `default`: The tenant ID to use to authenticate. If this is not provided, then it will be obtained from
     * the AZURE_TENANT_ID environment variable.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The type of Azure Authentication Method resource. Options are ['default', 'client-secret', 'username-password']
     */
    type: pulumi.Input<string>;
    /**
     * The username for the user to authenticate.
     */
    username?: pulumi.Input<string>;
}
