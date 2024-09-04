// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CredentialUsernamePassword extends pulumi.CustomResource {
    /**
     * Get an existing CredentialUsernamePassword resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CredentialUsernamePasswordState, opts?: pulumi.CustomResourceOptions): CredentialUsernamePassword {
        return new CredentialUsernamePassword(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'boundary:index/credentialUsernamePassword:CredentialUsernamePassword';

    /**
     * Returns true if the given object is an instance of CredentialUsernamePassword.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CredentialUsernamePassword {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CredentialUsernamePassword.__pulumiType;
    }

    /**
     * The credential store in which to save this username/password credential.
     */
    public readonly credentialStoreId!: pulumi.Output<string>;
    /**
     * The description of this username/password credential.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of this username/password credential. Defaults to the resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password of this username/password credential.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The password hmac.
     */
    public /*out*/ readonly passwordHmac!: pulumi.Output<string>;
    /**
     * The username of this username/password credential.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a CredentialUsernamePassword resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialUsernamePasswordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CredentialUsernamePasswordArgs | CredentialUsernamePasswordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CredentialUsernamePasswordState | undefined;
            resourceInputs["credentialStoreId"] = state ? state.credentialStoreId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordHmac"] = state ? state.passwordHmac : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as CredentialUsernamePasswordArgs | undefined;
            if ((!args || args.credentialStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentialStoreId'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["credentialStoreId"] = args ? args.credentialStoreId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["passwordHmac"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CredentialUsernamePassword.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CredentialUsernamePassword resources.
 */
export interface CredentialUsernamePasswordState {
    /**
     * The credential store in which to save this username/password credential.
     */
    credentialStoreId?: pulumi.Input<string>;
    /**
     * The description of this username/password credential.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this username/password credential. Defaults to the resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of this username/password credential.
     */
    password?: pulumi.Input<string>;
    /**
     * The password hmac.
     */
    passwordHmac?: pulumi.Input<string>;
    /**
     * The username of this username/password credential.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CredentialUsernamePassword resource.
 */
export interface CredentialUsernamePasswordArgs {
    /**
     * The credential store in which to save this username/password credential.
     */
    credentialStoreId: pulumi.Input<string>;
    /**
     * The description of this username/password credential.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this username/password credential. Defaults to the resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of this username/password credential.
     */
    password: pulumi.Input<string>;
    /**
     * The username of this username/password credential.
     */
    username: pulumi.Input<string>;
}
