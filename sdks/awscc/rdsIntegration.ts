// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsIntegration extends pulumi.CustomResource {
    /**
     * Get an existing RdsIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsIntegrationState, opts?: pulumi.CustomResourceOptions): RdsIntegration {
        return new RdsIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/rdsIntegration:RdsIntegration';

    /**
     * Returns true if the given object is an instance of RdsIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsIntegration.__pulumiType;
    }

    /**
     * An optional set of non-secret key?value pairs that contains additional contextual information about the data. For more
     * information, see [Encryption
     * context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Key Management
     * Service Developer Guide*. You can only include this parameter if you specify the ``KMSKeyId`` parameter.
     */
    public readonly additionalEncryptionContext!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Data filters for the integration. These filters determine which tables from the source database are sent to the target
     * Amazon Redshift data warehouse.
     */
    public readonly dataFilter!: pulumi.Output<string>;
    /**
     * A description of the integration.
     */
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly integrationArn!: pulumi.Output<string>;
    /**
     * The name of the integration.
     */
    public readonly integrationName!: pulumi.Output<string>;
    /**
     * The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't
     * specify an encryption key, RDS uses a default AWS owned key.
     */
    public readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     */
    public readonly sourceArn!: pulumi.Output<string>;
    /**
     * A list of tags. For more information, see [Tagging Amazon RDS
     * Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.
     */
    public readonly tags!: pulumi.Output<outputs.RdsIntegrationTag[]>;
    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     */
    public readonly targetArn!: pulumi.Output<string>;

    /**
     * Create a RdsIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsIntegrationArgs | RdsIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsIntegrationState | undefined;
            resourceInputs["additionalEncryptionContext"] = state ? state.additionalEncryptionContext : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dataFilter"] = state ? state.dataFilter : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["integrationArn"] = state ? state.integrationArn : undefined;
            resourceInputs["integrationName"] = state ? state.integrationName : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["sourceArn"] = state ? state.sourceArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetArn"] = state ? state.targetArn : undefined;
        } else {
            const args = argsOrState as RdsIntegrationArgs | undefined;
            if ((!args || args.sourceArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceArn'");
            }
            if ((!args || args.targetArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetArn'");
            }
            resourceInputs["additionalEncryptionContext"] = args ? args.additionalEncryptionContext : undefined;
            resourceInputs["dataFilter"] = args ? args.dataFilter : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["integrationName"] = args ? args.integrationName : undefined;
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["sourceArn"] = args ? args.sourceArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetArn"] = args ? args.targetArn : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["integrationArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsIntegration resources.
 */
export interface RdsIntegrationState {
    /**
     * An optional set of non-secret key?value pairs that contains additional contextual information about the data. For more
     * information, see [Encryption
     * context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Key Management
     * Service Developer Guide*. You can only include this parameter if you specify the ``KMSKeyId`` parameter.
     */
    additionalEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    createTime?: pulumi.Input<string>;
    /**
     * Data filters for the integration. These filters determine which tables from the source database are sent to the target
     * Amazon Redshift data warehouse.
     */
    dataFilter?: pulumi.Input<string>;
    /**
     * A description of the integration.
     */
    description?: pulumi.Input<string>;
    integrationArn?: pulumi.Input<string>;
    /**
     * The name of the integration.
     */
    integrationName?: pulumi.Input<string>;
    /**
     * The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't
     * specify an encryption key, RDS uses a default AWS owned key.
     */
    kmsKeyId?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     */
    sourceArn?: pulumi.Input<string>;
    /**
     * A list of tags. For more information, see [Tagging Amazon RDS
     * Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsIntegrationTag>[]>;
    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     */
    targetArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RdsIntegration resource.
 */
export interface RdsIntegrationArgs {
    /**
     * An optional set of non-secret key?value pairs that contains additional contextual information about the data. For more
     * information, see [Encryption
     * context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Key Management
     * Service Developer Guide*. You can only include this parameter if you specify the ``KMSKeyId`` parameter.
     */
    additionalEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Data filters for the integration. These filters determine which tables from the source database are sent to the target
     * Amazon Redshift data warehouse.
     */
    dataFilter?: pulumi.Input<string>;
    /**
     * A description of the integration.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the integration.
     */
    integrationName?: pulumi.Input<string>;
    /**
     * The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't
     * specify an encryption key, RDS uses a default AWS owned key.
     */
    kmsKeyId?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     */
    sourceArn: pulumi.Input<string>;
    /**
     * A list of tags. For more information, see [Tagging Amazon RDS
     * Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsIntegrationTag>[]>;
    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     */
    targetArn: pulumi.Input<string>;
}
