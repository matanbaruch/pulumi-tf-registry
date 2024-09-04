// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudfoundryCredentials extends pulumi.CustomResource {
    /**
     * Get an existing CloudfoundryCredentials resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudfoundryCredentialsState, opts?: pulumi.CustomResourceOptions): CloudfoundryCredentials {
        return new CloudfoundryCredentials(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/cloudfoundryCredentials:CloudfoundryCredentials';

    /**
     * Returns true if the given object is an instance of CloudfoundryCredentials.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudfoundryCredentials {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudfoundryCredentials.__pulumiType;
    }

    /**
     * The monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration. If not set on creation,
     * the `true` value is used. If the field is omitted during an update, the old value remains unaffected.
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
    /**
     * The URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or trailing
     * whitespaces are not allowed.
     */
    public readonly apiUrl!: pulumi.Output<string>;
    /**
     * The login URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or
     * trailing whitespaces are not allowed.
     */
    public readonly loginUrl!: pulumi.Output<string>;
    /**
     * The name of the Cloud Foundry foundation credentials. Allowed characters are letters, numbers, whitespaces, and the
     * following characters: `.+-_`. Leading or trailing whitespace is not allowed.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password of the Cloud Foundry foundation credentials.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Any attributes that aren't yet supported by this provider
     */
    public readonly unknowns!: pulumi.Output<string | undefined>;
    /**
     * The username of the Cloud Foundry foundation credentials. Leading and trailing whitespaces are not allowed.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a CloudfoundryCredentials resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudfoundryCredentialsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudfoundryCredentialsArgs | CloudfoundryCredentialsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudfoundryCredentialsState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["apiUrl"] = state ? state.apiUrl : undefined;
            resourceInputs["loginUrl"] = state ? state.loginUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["unknowns"] = state ? state.unknowns : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as CloudfoundryCredentialsArgs | undefined;
            if ((!args || args.apiUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiUrl'");
            }
            if ((!args || args.loginUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loginUrl'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["apiUrl"] = args ? args.apiUrl : undefined;
            resourceInputs["loginUrl"] = args ? args.loginUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["unknowns"] = args ? args.unknowns : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudfoundryCredentials.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudfoundryCredentials resources.
 */
export interface CloudfoundryCredentialsState {
    /**
     * The monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration. If not set on creation,
     * the `true` value is used. If the field is omitted during an update, the old value remains unaffected.
     */
    active?: pulumi.Input<boolean>;
    /**
     * The URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or trailing
     * whitespaces are not allowed.
     */
    apiUrl?: pulumi.Input<string>;
    /**
     * The login URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or
     * trailing whitespaces are not allowed.
     */
    loginUrl?: pulumi.Input<string>;
    /**
     * The name of the Cloud Foundry foundation credentials. Allowed characters are letters, numbers, whitespaces, and the
     * following characters: `.+-_`. Leading or trailing whitespace is not allowed.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of the Cloud Foundry foundation credentials.
     */
    password?: pulumi.Input<string>;
    /**
     * Any attributes that aren't yet supported by this provider
     */
    unknowns?: pulumi.Input<string>;
    /**
     * The username of the Cloud Foundry foundation credentials. Leading and trailing whitespaces are not allowed.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudfoundryCredentials resource.
 */
export interface CloudfoundryCredentialsArgs {
    /**
     * The monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration. If not set on creation,
     * the `true` value is used. If the field is omitted during an update, the old value remains unaffected.
     */
    active?: pulumi.Input<boolean>;
    /**
     * The URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or trailing
     * whitespaces are not allowed.
     */
    apiUrl: pulumi.Input<string>;
    /**
     * The login URL of the Cloud Foundry foundation credentials. The URL must be valid according to RFC 2396. Leading or
     * trailing whitespaces are not allowed.
     */
    loginUrl: pulumi.Input<string>;
    /**
     * The name of the Cloud Foundry foundation credentials. Allowed characters are letters, numbers, whitespaces, and the
     * following characters: `.+-_`. Leading or trailing whitespace is not allowed.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of the Cloud Foundry foundation credentials.
     */
    password?: pulumi.Input<string>;
    /**
     * Any attributes that aren't yet supported by this provider
     */
    unknowns?: pulumi.Input<string>;
    /**
     * The username of the Cloud Foundry foundation credentials. Leading and trailing whitespaces are not allowed.
     */
    username: pulumi.Input<string>;
}
