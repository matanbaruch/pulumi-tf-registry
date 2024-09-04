// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConnectionKafka extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionKafka resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionKafkaState, opts?: pulumi.CustomResourceOptions): ConnectionKafka {
        return new ConnectionKafka(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/connectionKafka:ConnectionKafka';

    /**
     * Returns true if the given object is an instance of ConnectionKafka.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionKafka {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionKafka.__pulumiType;
    }

    /**
     * The AWS connection to use for IAM authentication.
     */
    public readonly awsConnection!: pulumi.Output<outputs.ConnectionKafkaAwsConnection | undefined>;
    /**
     * AWS PrivateLink configuration. Conflicts with `kafka_broker`.
     */
    public readonly awsPrivatelink!: pulumi.Output<outputs.ConnectionKafkaAwsPrivatelink | undefined>;
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
     * The Kafka broker's configuration.
     */
    public readonly kafkaBrokers!: pulumi.Output<outputs.ConnectionKafkaKafkaBroker[] | undefined>;
    /**
     * The identifier for the connection.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    public readonly ownershipRole!: pulumi.Output<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    public readonly progressTopic!: pulumi.Output<string | undefined>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    public readonly progressTopicReplicationFactor!: pulumi.Output<number | undefined>;
    /**
     * The fully qualified name of the connection.
     */
    public /*out*/ readonly qualifiedSqlName!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    public readonly saslMechanisms!: pulumi.Output<string | undefined>;
    /**
     * The SASL password for the Kafka broker.
     */
    public readonly saslPassword!: pulumi.Output<outputs.ConnectionKafkaSaslPassword | undefined>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    public readonly saslUsername!: pulumi.Output<outputs.ConnectionKafkaSaslUsername | undefined>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    public readonly schemaName!: pulumi.Output<string | undefined>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    public readonly securityProtocol!: pulumi.Output<string | undefined>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    public readonly sshTunnel!: pulumi.Output<outputs.ConnectionKafkaSshTunnel | undefined>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    public readonly sslCertificate!: pulumi.Output<outputs.ConnectionKafkaSslCertificate | undefined>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    public readonly sslCertificateAuthority!: pulumi.Output<outputs.ConnectionKafkaSslCertificateAuthority | undefined>;
    /**
     * The client key for the Kafka broker.
     */
    public readonly sslKey!: pulumi.Output<outputs.ConnectionKafkaSslKey | undefined>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    public readonly validate!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ConnectionKafka resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConnectionKafkaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectionKafkaArgs | ConnectionKafkaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectionKafkaState | undefined;
            resourceInputs["awsConnection"] = state ? state.awsConnection : undefined;
            resourceInputs["awsPrivatelink"] = state ? state.awsPrivatelink : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["kafkaBrokers"] = state ? state.kafkaBrokers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ownershipRole"] = state ? state.ownershipRole : undefined;
            resourceInputs["progressTopic"] = state ? state.progressTopic : undefined;
            resourceInputs["progressTopicReplicationFactor"] = state ? state.progressTopicReplicationFactor : undefined;
            resourceInputs["qualifiedSqlName"] = state ? state.qualifiedSqlName : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["saslMechanisms"] = state ? state.saslMechanisms : undefined;
            resourceInputs["saslPassword"] = state ? state.saslPassword : undefined;
            resourceInputs["saslUsername"] = state ? state.saslUsername : undefined;
            resourceInputs["schemaName"] = state ? state.schemaName : undefined;
            resourceInputs["securityProtocol"] = state ? state.securityProtocol : undefined;
            resourceInputs["sshTunnel"] = state ? state.sshTunnel : undefined;
            resourceInputs["sslCertificate"] = state ? state.sslCertificate : undefined;
            resourceInputs["sslCertificateAuthority"] = state ? state.sslCertificateAuthority : undefined;
            resourceInputs["sslKey"] = state ? state.sslKey : undefined;
            resourceInputs["validate"] = state ? state.validate : undefined;
        } else {
            const args = argsOrState as ConnectionKafkaArgs | undefined;
            resourceInputs["awsConnection"] = args ? args.awsConnection : undefined;
            resourceInputs["awsPrivatelink"] = args ? args.awsPrivatelink : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["kafkaBrokers"] = args ? args.kafkaBrokers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownershipRole"] = args ? args.ownershipRole : undefined;
            resourceInputs["progressTopic"] = args ? args.progressTopic : undefined;
            resourceInputs["progressTopicReplicationFactor"] = args ? args.progressTopicReplicationFactor : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["saslMechanisms"] = args ? args.saslMechanisms : undefined;
            resourceInputs["saslPassword"] = args ? args.saslPassword : undefined;
            resourceInputs["saslUsername"] = args ? args.saslUsername : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["securityProtocol"] = args ? args.securityProtocol : undefined;
            resourceInputs["sshTunnel"] = args ? args.sshTunnel : undefined;
            resourceInputs["sslCertificate"] = args ? args.sslCertificate : undefined;
            resourceInputs["sslCertificateAuthority"] = args ? args.sslCertificateAuthority : undefined;
            resourceInputs["sslKey"] = args ? args.sslKey : undefined;
            resourceInputs["validate"] = args ? args.validate : undefined;
            resourceInputs["qualifiedSqlName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectionKafka.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectionKafka resources.
 */
export interface ConnectionKafkaState {
    /**
     * The AWS connection to use for IAM authentication.
     */
    awsConnection?: pulumi.Input<inputs.ConnectionKafkaAwsConnection>;
    /**
     * AWS PrivateLink configuration. Conflicts with `kafka_broker`.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionKafkaAwsPrivatelink>;
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
     * The Kafka broker's configuration.
     */
    kafkaBrokers?: pulumi.Input<pulumi.Input<inputs.ConnectionKafkaKafkaBroker>[]>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    progressTopic?: pulumi.Input<string>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    progressTopicReplicationFactor?: pulumi.Input<number>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    saslMechanisms?: pulumi.Input<string>;
    /**
     * The SASL password for the Kafka broker.
     */
    saslPassword?: pulumi.Input<inputs.ConnectionKafkaSaslPassword>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    saslUsername?: pulumi.Input<inputs.ConnectionKafkaSaslUsername>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    securityProtocol?: pulumi.Input<string>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionKafkaSshTunnel>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionKafkaSslCertificate>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionKafkaSslCertificateAuthority>;
    /**
     * The client key for the Kafka broker.
     */
    sslKey?: pulumi.Input<inputs.ConnectionKafkaSslKey>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ConnectionKafka resource.
 */
export interface ConnectionKafkaArgs {
    /**
     * The AWS connection to use for IAM authentication.
     */
    awsConnection?: pulumi.Input<inputs.ConnectionKafkaAwsConnection>;
    /**
     * AWS PrivateLink configuration. Conflicts with `kafka_broker`.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionKafkaAwsPrivatelink>;
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
     * The Kafka broker's configuration.
     */
    kafkaBrokers?: pulumi.Input<pulumi.Input<inputs.ConnectionKafkaKafkaBroker>[]>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    progressTopic?: pulumi.Input<string>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    progressTopicReplicationFactor?: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    saslMechanisms?: pulumi.Input<string>;
    /**
     * The SASL password for the Kafka broker.
     */
    saslPassword?: pulumi.Input<inputs.ConnectionKafkaSaslPassword>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    saslUsername?: pulumi.Input<inputs.ConnectionKafkaSaslUsername>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    securityProtocol?: pulumi.Input<string>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionKafkaSshTunnel>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionKafkaSslCertificate>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionKafkaSslCertificateAuthority>;
    /**
     * The client key for the Kafka broker.
     */
    sslKey?: pulumi.Input<inputs.ConnectionKafkaSslKey>;
    /**
     * **Private Preview** If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
