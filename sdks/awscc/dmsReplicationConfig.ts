// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DmsReplicationConfig extends pulumi.CustomResource {
    /**
     * Get an existing DmsReplicationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DmsReplicationConfigState, opts?: pulumi.CustomResourceOptions): DmsReplicationConfig {
        return new DmsReplicationConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/dmsReplicationConfig:DmsReplicationConfig';

    /**
     * Returns true if the given object is an instance of DmsReplicationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DmsReplicationConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DmsReplicationConfig.__pulumiType;
    }

    /**
     * Configuration parameters for provisioning a AWS DMS Serverless replication
     */
    public readonly computeConfig!: pulumi.Output<outputs.DmsReplicationConfigComputeConfig>;
    /**
     * The Amazon Resource Name (ARN) of the Replication Config
     */
    public /*out*/ readonly replicationConfigArn!: pulumi.Output<string>;
    /**
     * A unique identifier of replication configuration
     */
    public readonly replicationConfigIdentifier!: pulumi.Output<string>;
    /**
     * JSON settings for Servereless replications that are provisioned using this replication configuration
     */
    public readonly replicationSettings!: pulumi.Output<string>;
    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration
     */
    public readonly replicationType!: pulumi.Output<string>;
    /**
     * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN)
     * for that resource
     */
    public readonly resourceIdentifier!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
     */
    public readonly sourceEndpointArn!: pulumi.Output<string>;
    /**
     * JSON settings for specifying supplemental data
     */
    public readonly supplementalSettings!: pulumi.Output<string>;
    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
     */
    public readonly tableMappings!: pulumi.Output<string>;
    /**
     * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
     */
    public readonly tags!: pulumi.Output<outputs.DmsReplicationConfigTag[]>;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
     */
    public readonly targetEndpointArn!: pulumi.Output<string>;

    /**
     * Create a DmsReplicationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DmsReplicationConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DmsReplicationConfigArgs | DmsReplicationConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DmsReplicationConfigState | undefined;
            resourceInputs["computeConfig"] = state ? state.computeConfig : undefined;
            resourceInputs["replicationConfigArn"] = state ? state.replicationConfigArn : undefined;
            resourceInputs["replicationConfigIdentifier"] = state ? state.replicationConfigIdentifier : undefined;
            resourceInputs["replicationSettings"] = state ? state.replicationSettings : undefined;
            resourceInputs["replicationType"] = state ? state.replicationType : undefined;
            resourceInputs["resourceIdentifier"] = state ? state.resourceIdentifier : undefined;
            resourceInputs["sourceEndpointArn"] = state ? state.sourceEndpointArn : undefined;
            resourceInputs["supplementalSettings"] = state ? state.supplementalSettings : undefined;
            resourceInputs["tableMappings"] = state ? state.tableMappings : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetEndpointArn"] = state ? state.targetEndpointArn : undefined;
        } else {
            const args = argsOrState as DmsReplicationConfigArgs | undefined;
            if ((!args || args.computeConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeConfig'");
            }
            if ((!args || args.replicationConfigIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replicationConfigIdentifier'");
            }
            if ((!args || args.replicationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'replicationType'");
            }
            if ((!args || args.sourceEndpointArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceEndpointArn'");
            }
            if ((!args || args.tableMappings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableMappings'");
            }
            if ((!args || args.targetEndpointArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetEndpointArn'");
            }
            resourceInputs["computeConfig"] = args ? args.computeConfig : undefined;
            resourceInputs["replicationConfigIdentifier"] = args ? args.replicationConfigIdentifier : undefined;
            resourceInputs["replicationSettings"] = args ? args.replicationSettings : undefined;
            resourceInputs["replicationType"] = args ? args.replicationType : undefined;
            resourceInputs["resourceIdentifier"] = args ? args.resourceIdentifier : undefined;
            resourceInputs["sourceEndpointArn"] = args ? args.sourceEndpointArn : undefined;
            resourceInputs["supplementalSettings"] = args ? args.supplementalSettings : undefined;
            resourceInputs["tableMappings"] = args ? args.tableMappings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetEndpointArn"] = args ? args.targetEndpointArn : undefined;
            resourceInputs["replicationConfigArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DmsReplicationConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DmsReplicationConfig resources.
 */
export interface DmsReplicationConfigState {
    /**
     * Configuration parameters for provisioning a AWS DMS Serverless replication
     */
    computeConfig?: pulumi.Input<inputs.DmsReplicationConfigComputeConfig>;
    /**
     * The Amazon Resource Name (ARN) of the Replication Config
     */
    replicationConfigArn?: pulumi.Input<string>;
    /**
     * A unique identifier of replication configuration
     */
    replicationConfigIdentifier?: pulumi.Input<string>;
    /**
     * JSON settings for Servereless replications that are provisioned using this replication configuration
     */
    replicationSettings?: pulumi.Input<string>;
    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration
     */
    replicationType?: pulumi.Input<string>;
    /**
     * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN)
     * for that resource
     */
    resourceIdentifier?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
     */
    sourceEndpointArn?: pulumi.Input<string>;
    /**
     * JSON settings for specifying supplemental data
     */
    supplementalSettings?: pulumi.Input<string>;
    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
     */
    tableMappings?: pulumi.Input<string>;
    /**
     * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DmsReplicationConfigTag>[]>;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
     */
    targetEndpointArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DmsReplicationConfig resource.
 */
export interface DmsReplicationConfigArgs {
    /**
     * Configuration parameters for provisioning a AWS DMS Serverless replication
     */
    computeConfig: pulumi.Input<inputs.DmsReplicationConfigComputeConfig>;
    /**
     * A unique identifier of replication configuration
     */
    replicationConfigIdentifier: pulumi.Input<string>;
    /**
     * JSON settings for Servereless replications that are provisioned using this replication configuration
     */
    replicationSettings?: pulumi.Input<string>;
    /**
     * The type of AWS DMS Serverless replication to provision using this replication configuration
     */
    replicationType: pulumi.Input<string>;
    /**
     * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN)
     * for that resource
     */
    resourceIdentifier?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
     */
    sourceEndpointArn: pulumi.Input<string>;
    /**
     * JSON settings for specifying supplemental data
     */
    supplementalSettings?: pulumi.Input<string>;
    /**
     * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
     */
    tableMappings: pulumi.Input<string>;
    /**
     * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DmsReplicationConfigTag>[]>;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
     */
    targetEndpointArn: pulumi.Input<string>;
}
