// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CredentialIssuerProfile extends pulumi.CustomResource {
    /**
     * Get an existing CredentialIssuerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CredentialIssuerProfileState, opts?: pulumi.CustomResourceOptions): CredentialIssuerProfile {
        return new CredentialIssuerProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/credentialIssuerProfile:CredentialIssuerProfile';

    /**
     * Returns true if the given object is an instance of CredentialIssuerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CredentialIssuerProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CredentialIssuerProfile.__pulumiType;
    }

    /**
     * Identifier (UUID) of the application instance registered with the PingOne platform service. This enables the client to
     * send messages to the service.
     */
    public /*out*/ readonly applicationInstanceId!: pulumi.Output<string>;
    /**
     * Date and time the issuer profile was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The ID of the environment to create the credential issuer in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * The name of the credential issuer. The name is included in the metadata of an issued verifiable credential.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CredentialIssuerProfileTimeouts | undefined>;
    /**
     * Date and time the issuer profile was last updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a CredentialIssuerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialIssuerProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CredentialIssuerProfileArgs | CredentialIssuerProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CredentialIssuerProfileState | undefined;
            resourceInputs["applicationInstanceId"] = state ? state.applicationInstanceId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as CredentialIssuerProfileArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["applicationInstanceId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CredentialIssuerProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CredentialIssuerProfile resources.
 */
export interface CredentialIssuerProfileState {
    /**
     * Identifier (UUID) of the application instance registered with the PingOne platform service. This enables the client to
     * send messages to the service.
     */
    applicationInstanceId?: pulumi.Input<string>;
    /**
     * Date and time the issuer profile was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The ID of the environment to create the credential issuer in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The name of the credential issuer. The name is included in the metadata of an issued verifiable credential.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CredentialIssuerProfileTimeouts>;
    /**
     * Date and time the issuer profile was last updated.
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CredentialIssuerProfile resource.
 */
export interface CredentialIssuerProfileArgs {
    /**
     * The ID of the environment to create the credential issuer in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * The name of the credential issuer. The name is included in the metadata of an issued verifiable credential.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CredentialIssuerProfileTimeouts>;
}
