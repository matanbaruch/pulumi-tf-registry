// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SchemaRegistryClusterConfig extends pulumi.CustomResource {
    /**
     * Get an existing SchemaRegistryClusterConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SchemaRegistryClusterConfigState, opts?: pulumi.CustomResourceOptions): SchemaRegistryClusterConfig {
        return new SchemaRegistryClusterConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'confluent:index/schemaRegistryClusterConfig:SchemaRegistryClusterConfig';

    /**
     * Returns true if the given object is an instance of SchemaRegistryClusterConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SchemaRegistryClusterConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SchemaRegistryClusterConfig.__pulumiType;
    }

    public readonly compatibilityLevel!: pulumi.Output<string>;
    /**
     * The Cluster API Credentials.
     */
    public readonly credentials!: pulumi.Output<outputs.SchemaRegistryClusterConfigCredentials | undefined>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    public readonly restEndpoint!: pulumi.Output<string | undefined>;
    public readonly schemaRegistryCluster!: pulumi.Output<outputs.SchemaRegistryClusterConfigSchemaRegistryCluster | undefined>;

    /**
     * Create a SchemaRegistryClusterConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SchemaRegistryClusterConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SchemaRegistryClusterConfigArgs | SchemaRegistryClusterConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SchemaRegistryClusterConfigState | undefined;
            resourceInputs["compatibilityLevel"] = state ? state.compatibilityLevel : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["restEndpoint"] = state ? state.restEndpoint : undefined;
            resourceInputs["schemaRegistryCluster"] = state ? state.schemaRegistryCluster : undefined;
        } else {
            const args = argsOrState as SchemaRegistryClusterConfigArgs | undefined;
            resourceInputs["compatibilityLevel"] = args ? args.compatibilityLevel : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["restEndpoint"] = args ? args.restEndpoint : undefined;
            resourceInputs["schemaRegistryCluster"] = args ? args.schemaRegistryCluster : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SchemaRegistryClusterConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SchemaRegistryClusterConfig resources.
 */
export interface SchemaRegistryClusterConfigState {
    compatibilityLevel?: pulumi.Input<string>;
    /**
     * The Cluster API Credentials.
     */
    credentials?: pulumi.Input<inputs.SchemaRegistryClusterConfigCredentials>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    restEndpoint?: pulumi.Input<string>;
    schemaRegistryCluster?: pulumi.Input<inputs.SchemaRegistryClusterConfigSchemaRegistryCluster>;
}

/**
 * The set of arguments for constructing a SchemaRegistryClusterConfig resource.
 */
export interface SchemaRegistryClusterConfigArgs {
    compatibilityLevel?: pulumi.Input<string>;
    /**
     * The Cluster API Credentials.
     */
    credentials?: pulumi.Input<inputs.SchemaRegistryClusterConfigCredentials>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    restEndpoint?: pulumi.Input<string>;
    schemaRegistryCluster?: pulumi.Input<inputs.SchemaRegistryClusterConfigSchemaRegistryCluster>;
}
