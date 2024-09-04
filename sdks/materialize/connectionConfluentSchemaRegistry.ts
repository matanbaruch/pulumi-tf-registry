// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConnectionConfluentSchemaRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionConfluentSchemaRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionConfluentSchemaRegistryState, opts?: pulumi.CustomResourceOptions): ConnectionConfluentSchemaRegistry {
        return new ConnectionConfluentSchemaRegistry(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/connectionConfluentSchemaRegistry:ConnectionConfluentSchemaRegistry';

    /**
     * Returns true if the given object is an instance of ConnectionConfluentSchemaRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionConfluentSchemaRegistry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionConfluentSchemaRegistry.__pulumiType;
    }

    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    public readonly awsPrivatelink!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryAwsPrivatelink | undefined>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * The identifier for the connection.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    public readonly ownershipRole!: pulumi.Output<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    public readonly password!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryPassword | undefined>;
    /**
     * The fully qualified name of the connection.
     */
    public /*out*/ readonly qualifiedSqlName!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    public readonly schemaName!: pulumi.Output<string | undefined>;
    /**
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    public readonly sshTunnel!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySshTunnel | undefined>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference
     * to a secret object using `secret`.
     */
    public readonly sslCertificate!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslCertificate | undefined>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to
     * a secret object using `secret`.
     */
    public readonly sslCertificateAuthority!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority | undefined>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    public readonly sslKey!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslKey | undefined>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    public readonly username!: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryUsername | undefined>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    public readonly validate!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ConnectionConfluentSchemaRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionConfluentSchemaRegistryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectionConfluentSchemaRegistryArgs | ConnectionConfluentSchemaRegistryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectionConfluentSchemaRegistryState | undefined;
            resourceInputs["awsPrivatelink"] = state ? state.awsPrivatelink : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ownershipRole"] = state ? state.ownershipRole : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["qualifiedSqlName"] = state ? state.qualifiedSqlName : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["schemaName"] = state ? state.schemaName : undefined;
            resourceInputs["sshTunnel"] = state ? state.sshTunnel : undefined;
            resourceInputs["sslCertificate"] = state ? state.sslCertificate : undefined;
            resourceInputs["sslCertificateAuthority"] = state ? state.sslCertificateAuthority : undefined;
            resourceInputs["sslKey"] = state ? state.sslKey : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["validate"] = state ? state.validate : undefined;
        } else {
            const args = argsOrState as ConnectionConfluentSchemaRegistryArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["awsPrivatelink"] = args ? args.awsPrivatelink : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownershipRole"] = args ? args.ownershipRole : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["sshTunnel"] = args ? args.sshTunnel : undefined;
            resourceInputs["sslCertificate"] = args ? args.sslCertificate : undefined;
            resourceInputs["sslCertificateAuthority"] = args ? args.sslCertificateAuthority : undefined;
            resourceInputs["sslKey"] = args ? args.sslKey : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["validate"] = args ? args.validate : undefined;
            resourceInputs["qualifiedSqlName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectionConfluentSchemaRegistry.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectionConfluentSchemaRegistry resources.
 */
export interface ConnectionConfluentSchemaRegistryState {
    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryAwsPrivatelink>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    password?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryPassword>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySshTunnel>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference
     * to a secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificate>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to
     * a secret object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    sslKey?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslKey>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    url?: pulumi.Input<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    username?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryUsername>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ConnectionConfluentSchemaRegistry resource.
 */
export interface ConnectionConfluentSchemaRegistryArgs {
    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryAwsPrivatelink>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    password?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryPassword>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySshTunnel>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference
     * to a secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificate>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to
     * a secret object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    sslKey?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslKey>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    url: pulumi.Input<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    username?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryUsername>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
