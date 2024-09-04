// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KafkaUserV3 extends pulumi.CustomResource {
    /**
     * Get an existing KafkaUserV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KafkaUserV3State, opts?: pulumi.CustomResourceOptions): KafkaUserV3 {
        return new KafkaUserV3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'instaclustr:index/kafkaUserV3:KafkaUserV3';

    /**
     * Returns true if the given object is an instance of KafkaUserV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KafkaUserV3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KafkaUserV3.__pulumiType;
    }

    /**
     * Authentication mechanisms supported for KafkaClusters.
     */
    public readonly authMechanism!: pulumi.Output<string>;
    /**
     * ID of the Kafka cluster.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Permissions initially granted to Kafka user upon creation.
     */
    public readonly initialPermissions!: pulumi.Output<string>;
    /**
     * Overwrite user if already exists.
     */
    public readonly overrideExistingUser!: pulumi.Output<boolean | undefined>;
    /**
     * Password for the Kafka user.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
     */
    public readonly saslScramMechanism!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.KafkaUserV3Timeouts | undefined>;
    /**
     * Username of the Kafka user.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a KafkaUserV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaUserV3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KafkaUserV3Args | KafkaUserV3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KafkaUserV3State | undefined;
            resourceInputs["authMechanism"] = state ? state.authMechanism : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["initialPermissions"] = state ? state.initialPermissions : undefined;
            resourceInputs["overrideExistingUser"] = state ? state.overrideExistingUser : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["saslScramMechanism"] = state ? state.saslScramMechanism : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as KafkaUserV3Args | undefined;
            if ((!args || args.authMechanism === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authMechanism'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.initialPermissions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'initialPermissions'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["authMechanism"] = args ? args.authMechanism : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["initialPermissions"] = args ? args.initialPermissions : undefined;
            resourceInputs["overrideExistingUser"] = args ? args.overrideExistingUser : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["saslScramMechanism"] = args ? args.saslScramMechanism : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(KafkaUserV3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KafkaUserV3 resources.
 */
export interface KafkaUserV3State {
    /**
     * Authentication mechanisms supported for KafkaClusters.
     */
    authMechanism?: pulumi.Input<string>;
    /**
     * ID of the Kafka cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Permissions initially granted to Kafka user upon creation.
     */
    initialPermissions?: pulumi.Input<string>;
    /**
     * Overwrite user if already exists.
     */
    overrideExistingUser?: pulumi.Input<boolean>;
    /**
     * Password for the Kafka user.
     */
    password?: pulumi.Input<string>;
    /**
     * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
     */
    saslScramMechanism?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KafkaUserV3Timeouts>;
    /**
     * Username of the Kafka user.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KafkaUserV3 resource.
 */
export interface KafkaUserV3Args {
    /**
     * Authentication mechanisms supported for KafkaClusters.
     */
    authMechanism: pulumi.Input<string>;
    /**
     * ID of the Kafka cluster.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Permissions initially granted to Kafka user upon creation.
     */
    initialPermissions: pulumi.Input<string>;
    /**
     * Overwrite user if already exists.
     */
    overrideExistingUser?: pulumi.Input<boolean>;
    /**
     * Password for the Kafka user.
     */
    password?: pulumi.Input<string>;
    /**
     * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
     */
    saslScramMechanism?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KafkaUserV3Timeouts>;
    /**
     * Username of the Kafka user.
     */
    username: pulumi.Input<string>;
}
