// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * The specific availability zones of the cluster.
     */
    public readonly availabilityZones!: pulumi.Output<string[]>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should
     * use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    public readonly disk!: pulumi.Output<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is
     * particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID
     * changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is
     * updated.
     */
    public readonly identifyByName!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    public readonly introspectionDebugging!: pulumi.Output<boolean | undefined>;
    /**
     * The interval at which to collect introspection data.
     */
    public readonly introspectionInterval!: pulumi.Output<string | undefined>;
    /**
     * The identifier for the cluster.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    public readonly ownershipRole!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The number of replicas of each dataflow-powered object to maintain.
     */
    public readonly replicationFactor!: pulumi.Output<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    public readonly scheduling!: pulumi.Output<outputs.ClusterScheduling | undefined>;
    /**
     * The size of the managed cluster.
     */
    public readonly size!: pulumi.Output<string | undefined>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    public readonly waitUntilReady!: pulumi.Output<outputs.ClusterWaitUntilReady | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterState | undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disk"] = state ? state.disk : undefined;
            resourceInputs["identifyByName"] = state ? state.identifyByName : undefined;
            resourceInputs["introspectionDebugging"] = state ? state.introspectionDebugging : undefined;
            resourceInputs["introspectionInterval"] = state ? state.introspectionInterval : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ownershipRole"] = state ? state.ownershipRole : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["replicationFactor"] = state ? state.replicationFactor : undefined;
            resourceInputs["scheduling"] = state ? state.scheduling : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["waitUntilReady"] = state ? state.waitUntilReady : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disk"] = args ? args.disk : undefined;
            resourceInputs["identifyByName"] = args ? args.identifyByName : undefined;
            resourceInputs["introspectionDebugging"] = args ? args.introspectionDebugging : undefined;
            resourceInputs["introspectionInterval"] = args ? args.introspectionInterval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ownershipRole"] = args ? args.ownershipRole : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["replicationFactor"] = args ? args.replicationFactor : undefined;
            resourceInputs["scheduling"] = args ? args.scheduling : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["waitUntilReady"] = args ? args.waitUntilReady : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * The specific availability zones of the cluster.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should
     * use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is
     * particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID
     * changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is
     * updated.
     */
    identifyByName?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the cluster.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The number of replicas of each dataflow-powered object to maintain.
     */
    replicationFactor?: pulumi.Input<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    scheduling?: pulumi.Input<inputs.ClusterScheduling>;
    /**
     * The size of the managed cluster.
     */
    size?: pulumi.Input<string>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    waitUntilReady?: pulumi.Input<inputs.ClusterWaitUntilReady>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The specific availability zones of the cluster.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * **Public Preview** Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should
     * use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is
     * particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID
     * changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is
     * updated.
     */
    identifyByName?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the cluster.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The number of replicas of each dataflow-powered object to maintain.
     */
    replicationFactor?: pulumi.Input<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    scheduling?: pulumi.Input<inputs.ClusterScheduling>;
    /**
     * The size of the managed cluster.
     */
    size?: pulumi.Input<string>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    waitUntilReady?: pulumi.Input<inputs.ClusterWaitUntilReady>;
}
