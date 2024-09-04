// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RabbitmqSecretBackend extends pulumi.CustomResource {
    /**
     * Get an existing RabbitmqSecretBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RabbitmqSecretBackendState, opts?: pulumi.CustomResourceOptions): RabbitmqSecretBackend {
        return new RabbitmqSecretBackend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/rabbitmqSecretBackend:RabbitmqSecretBackend';

    /**
     * Returns true if the given object is an instance of RabbitmqSecretBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RabbitmqSecretBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RabbitmqSecretBackend.__pulumiType;
    }

    /**
     * Specifies the RabbitMQ connection URI.
     */
    public readonly connectionUri!: pulumi.Output<string>;
    /**
     * Default lease duration for secrets in seconds
     */
    public readonly defaultLeaseTtlSeconds!: pulumi.Output<number>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    public readonly disableRemount!: pulumi.Output<boolean | undefined>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    public readonly maxLeaseTtlSeconds!: pulumi.Output<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Specifies the RabbitMQ management administrator password
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if
     * not set.
     */
    public readonly passwordPolicy!: pulumi.Output<string | undefined>;
    /**
     * The path of the RabbitMQ Secret Backend where the connection should be configured
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * Specifies the RabbitMQ management administrator username
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * Template describing how dynamic usernames are generated.
     */
    public readonly usernameTemplate!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to verify connection URI, username, and password.
     */
    public readonly verifyConnection!: pulumi.Output<boolean | undefined>;

    /**
     * Create a RabbitmqSecretBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RabbitmqSecretBackendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RabbitmqSecretBackendArgs | RabbitmqSecretBackendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RabbitmqSecretBackendState | undefined;
            resourceInputs["connectionUri"] = state ? state.connectionUri : undefined;
            resourceInputs["defaultLeaseTtlSeconds"] = state ? state.defaultLeaseTtlSeconds : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableRemount"] = state ? state.disableRemount : undefined;
            resourceInputs["maxLeaseTtlSeconds"] = state ? state.maxLeaseTtlSeconds : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordPolicy"] = state ? state.passwordPolicy : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["usernameTemplate"] = state ? state.usernameTemplate : undefined;
            resourceInputs["verifyConnection"] = state ? state.verifyConnection : undefined;
        } else {
            const args = argsOrState as RabbitmqSecretBackendArgs | undefined;
            if ((!args || args.connectionUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionUri'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["connectionUri"] = args ? args.connectionUri : undefined;
            resourceInputs["defaultLeaseTtlSeconds"] = args ? args.defaultLeaseTtlSeconds : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableRemount"] = args ? args.disableRemount : undefined;
            resourceInputs["maxLeaseTtlSeconds"] = args ? args.maxLeaseTtlSeconds : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordPolicy"] = args ? args.passwordPolicy : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["username"] = args?.username ? pulumi.secret(args.username) : undefined;
            resourceInputs["usernameTemplate"] = args ? args.usernameTemplate : undefined;
            resourceInputs["verifyConnection"] = args ? args.verifyConnection : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "username"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(RabbitmqSecretBackend.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RabbitmqSecretBackend resources.
 */
export interface RabbitmqSecretBackendState {
    /**
     * Specifies the RabbitMQ connection URI.
     */
    connectionUri?: pulumi.Input<string>;
    /**
     * Default lease duration for secrets in seconds
     */
    defaultLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    maxLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the RabbitMQ management administrator password
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if
     * not set.
     */
    passwordPolicy?: pulumi.Input<string>;
    /**
     * The path of the RabbitMQ Secret Backend where the connection should be configured
     */
    path?: pulumi.Input<string>;
    /**
     * Specifies the RabbitMQ management administrator username
     */
    username?: pulumi.Input<string>;
    /**
     * Template describing how dynamic usernames are generated.
     */
    usernameTemplate?: pulumi.Input<string>;
    /**
     * Specifies whether to verify connection URI, username, and password.
     */
    verifyConnection?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a RabbitmqSecretBackend resource.
 */
export interface RabbitmqSecretBackendArgs {
    /**
     * Specifies the RabbitMQ connection URI.
     */
    connectionUri: pulumi.Input<string>;
    /**
     * Default lease duration for secrets in seconds
     */
    defaultLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    maxLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Specifies the RabbitMQ management administrator password
     */
    password: pulumi.Input<string>;
    /**
     * Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if
     * not set.
     */
    passwordPolicy?: pulumi.Input<string>;
    /**
     * The path of the RabbitMQ Secret Backend where the connection should be configured
     */
    path?: pulumi.Input<string>;
    /**
     * Specifies the RabbitMQ management administrator username
     */
    username: pulumi.Input<string>;
    /**
     * Template describing how dynamic usernames are generated.
     */
    usernameTemplate?: pulumi.Input<string>;
    /**
     * Specifies whether to verify connection URI, username, and password.
     */
    verifyConnection?: pulumi.Input<boolean>;
}
