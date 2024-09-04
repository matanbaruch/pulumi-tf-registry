// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiManagementAuthorizationServer extends pulumi.CustomResource {
    /**
     * Get an existing ApiManagementAuthorizationServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiManagementAuthorizationServerState, opts?: pulumi.CustomResourceOptions): ApiManagementAuthorizationServer {
        return new ApiManagementAuthorizationServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/apiManagementAuthorizationServer:ApiManagementAuthorizationServer';

    /**
     * Returns true if the given object is an instance of ApiManagementAuthorizationServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiManagementAuthorizationServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiManagementAuthorizationServer.__pulumiType;
    }

    public readonly apiManagementName!: pulumi.Output<string>;
    public readonly authorizationEndpoint!: pulumi.Output<string>;
    public readonly authorizationMethods!: pulumi.Output<string[]>;
    public readonly bearerTokenSendingMethods!: pulumi.Output<string[] | undefined>;
    public readonly clientAuthenticationMethods!: pulumi.Output<string[] | undefined>;
    public readonly clientId!: pulumi.Output<string>;
    public readonly clientRegistrationEndpoint!: pulumi.Output<string>;
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    public readonly defaultScope!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly grantTypes!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly resourceOwnerPassword!: pulumi.Output<string | undefined>;
    public readonly resourceOwnerUsername!: pulumi.Output<string | undefined>;
    public readonly supportState!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ApiManagementAuthorizationServerTimeouts | undefined>;
    public readonly tokenBodyParameters!: pulumi.Output<outputs.ApiManagementAuthorizationServerTokenBodyParameter[] | undefined>;
    public readonly tokenEndpoint!: pulumi.Output<string | undefined>;

    /**
     * Create a ApiManagementAuthorizationServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiManagementAuthorizationServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiManagementAuthorizationServerArgs | ApiManagementAuthorizationServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiManagementAuthorizationServerState | undefined;
            resourceInputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            resourceInputs["authorizationEndpoint"] = state ? state.authorizationEndpoint : undefined;
            resourceInputs["authorizationMethods"] = state ? state.authorizationMethods : undefined;
            resourceInputs["bearerTokenSendingMethods"] = state ? state.bearerTokenSendingMethods : undefined;
            resourceInputs["clientAuthenticationMethods"] = state ? state.clientAuthenticationMethods : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientRegistrationEndpoint"] = state ? state.clientRegistrationEndpoint : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["defaultScope"] = state ? state.defaultScope : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["grantTypes"] = state ? state.grantTypes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["resourceOwnerPassword"] = state ? state.resourceOwnerPassword : undefined;
            resourceInputs["resourceOwnerUsername"] = state ? state.resourceOwnerUsername : undefined;
            resourceInputs["supportState"] = state ? state.supportState : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tokenBodyParameters"] = state ? state.tokenBodyParameters : undefined;
            resourceInputs["tokenEndpoint"] = state ? state.tokenEndpoint : undefined;
        } else {
            const args = argsOrState as ApiManagementAuthorizationServerArgs | undefined;
            if ((!args || args.apiManagementName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if ((!args || args.authorizationEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationEndpoint'");
            }
            if ((!args || args.authorizationMethods === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationMethods'");
            }
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.clientRegistrationEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientRegistrationEndpoint'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.grantTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'grantTypes'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            resourceInputs["authorizationEndpoint"] = args ? args.authorizationEndpoint : undefined;
            resourceInputs["authorizationMethods"] = args ? args.authorizationMethods : undefined;
            resourceInputs["bearerTokenSendingMethods"] = args ? args.bearerTokenSendingMethods : undefined;
            resourceInputs["clientAuthenticationMethods"] = args ? args.clientAuthenticationMethods : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientRegistrationEndpoint"] = args ? args.clientRegistrationEndpoint : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["defaultScope"] = args ? args.defaultScope : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["grantTypes"] = args ? args.grantTypes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceOwnerPassword"] = args?.resourceOwnerPassword ? pulumi.secret(args.resourceOwnerPassword) : undefined;
            resourceInputs["resourceOwnerUsername"] = args ? args.resourceOwnerUsername : undefined;
            resourceInputs["supportState"] = args ? args.supportState : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["tokenBodyParameters"] = args ? args.tokenBodyParameters : undefined;
            resourceInputs["tokenEndpoint"] = args ? args.tokenEndpoint : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientSecret", "resourceOwnerPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ApiManagementAuthorizationServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiManagementAuthorizationServer resources.
 */
export interface ApiManagementAuthorizationServerState {
    apiManagementName?: pulumi.Input<string>;
    authorizationEndpoint?: pulumi.Input<string>;
    authorizationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string>[]>;
    clientAuthenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    clientId?: pulumi.Input<string>;
    clientRegistrationEndpoint?: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    defaultScope?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    grantTypes?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    resourceOwnerPassword?: pulumi.Input<string>;
    resourceOwnerUsername?: pulumi.Input<string>;
    supportState?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ApiManagementAuthorizationServerTimeouts>;
    tokenBodyParameters?: pulumi.Input<pulumi.Input<inputs.ApiManagementAuthorizationServerTokenBodyParameter>[]>;
    tokenEndpoint?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiManagementAuthorizationServer resource.
 */
export interface ApiManagementAuthorizationServerArgs {
    apiManagementName: pulumi.Input<string>;
    authorizationEndpoint: pulumi.Input<string>;
    authorizationMethods: pulumi.Input<pulumi.Input<string>[]>;
    bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string>[]>;
    clientAuthenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    clientId: pulumi.Input<string>;
    clientRegistrationEndpoint: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    defaultScope?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    grantTypes: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    resourceOwnerPassword?: pulumi.Input<string>;
    resourceOwnerUsername?: pulumi.Input<string>;
    supportState?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ApiManagementAuthorizationServerTimeouts>;
    tokenBodyParameters?: pulumi.Input<pulumi.Input<inputs.ApiManagementAuthorizationServerTokenBodyParameter>[]>;
    tokenEndpoint?: pulumi.Input<string>;
}
