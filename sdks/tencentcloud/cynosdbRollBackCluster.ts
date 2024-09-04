// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CynosdbRollBackCluster extends pulumi.CustomResource {
    /**
     * Get an existing CynosdbRollBackCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CynosdbRollBackClusterState, opts?: pulumi.CustomResourceOptions): CynosdbRollBackCluster {
        return new CynosdbRollBackCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cynosdbRollBackCluster:CynosdbRollBackCluster';

    /**
     * Returns true if the given object is an instance of CynosdbRollBackCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CynosdbRollBackCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CynosdbRollBackCluster.__pulumiType;
    }

    /**
     * The ID of cluster.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Expected rollback Time.
     */
    public readonly expectTime!: pulumi.Output<string | undefined>;
    /**
     * Expected Threshold (Obsolete).
     */
    public readonly expectTimeThresh!: pulumi.Output<number | undefined>;
    /**
     * Database list.
     */
    public readonly rollbackDatabases!: pulumi.Output<outputs.CynosdbRollBackClusterRollbackDatabase[] | undefined>;
    /**
     * Rollback ID.
     */
    public readonly rollbackId!: pulumi.Output<number>;
    /**
     * Rollback mode by time point, full: normal; Db: fast; Table: Extreme speed (default is normal).
     */
    public readonly rollbackMode!: pulumi.Output<string | undefined>;
    /**
     * Backfile policy timeRollback - Backfile by point in time snapRollback - Backfile by backup file.
     */
    public readonly rollbackStrategy!: pulumi.Output<string>;
    /**
     * Table list.
     */
    public readonly rollbackTables!: pulumi.Output<outputs.CynosdbRollBackClusterRollbackTable[] | undefined>;

    /**
     * Create a CynosdbRollBackCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CynosdbRollBackClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CynosdbRollBackClusterArgs | CynosdbRollBackClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CynosdbRollBackClusterState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["expectTime"] = state ? state.expectTime : undefined;
            resourceInputs["expectTimeThresh"] = state ? state.expectTimeThresh : undefined;
            resourceInputs["rollbackDatabases"] = state ? state.rollbackDatabases : undefined;
            resourceInputs["rollbackId"] = state ? state.rollbackId : undefined;
            resourceInputs["rollbackMode"] = state ? state.rollbackMode : undefined;
            resourceInputs["rollbackStrategy"] = state ? state.rollbackStrategy : undefined;
            resourceInputs["rollbackTables"] = state ? state.rollbackTables : undefined;
        } else {
            const args = argsOrState as CynosdbRollBackClusterArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.rollbackId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rollbackId'");
            }
            if ((!args || args.rollbackStrategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rollbackStrategy'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["expectTime"] = args ? args.expectTime : undefined;
            resourceInputs["expectTimeThresh"] = args ? args.expectTimeThresh : undefined;
            resourceInputs["rollbackDatabases"] = args ? args.rollbackDatabases : undefined;
            resourceInputs["rollbackId"] = args ? args.rollbackId : undefined;
            resourceInputs["rollbackMode"] = args ? args.rollbackMode : undefined;
            resourceInputs["rollbackStrategy"] = args ? args.rollbackStrategy : undefined;
            resourceInputs["rollbackTables"] = args ? args.rollbackTables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CynosdbRollBackCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CynosdbRollBackCluster resources.
 */
export interface CynosdbRollBackClusterState {
    /**
     * The ID of cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Expected rollback Time.
     */
    expectTime?: pulumi.Input<string>;
    /**
     * Expected Threshold (Obsolete).
     */
    expectTimeThresh?: pulumi.Input<number>;
    /**
     * Database list.
     */
    rollbackDatabases?: pulumi.Input<pulumi.Input<inputs.CynosdbRollBackClusterRollbackDatabase>[]>;
    /**
     * Rollback ID.
     */
    rollbackId?: pulumi.Input<number>;
    /**
     * Rollback mode by time point, full: normal; Db: fast; Table: Extreme speed (default is normal).
     */
    rollbackMode?: pulumi.Input<string>;
    /**
     * Backfile policy timeRollback - Backfile by point in time snapRollback - Backfile by backup file.
     */
    rollbackStrategy?: pulumi.Input<string>;
    /**
     * Table list.
     */
    rollbackTables?: pulumi.Input<pulumi.Input<inputs.CynosdbRollBackClusterRollbackTable>[]>;
}

/**
 * The set of arguments for constructing a CynosdbRollBackCluster resource.
 */
export interface CynosdbRollBackClusterArgs {
    /**
     * The ID of cluster.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Expected rollback Time.
     */
    expectTime?: pulumi.Input<string>;
    /**
     * Expected Threshold (Obsolete).
     */
    expectTimeThresh?: pulumi.Input<number>;
    /**
     * Database list.
     */
    rollbackDatabases?: pulumi.Input<pulumi.Input<inputs.CynosdbRollBackClusterRollbackDatabase>[]>;
    /**
     * Rollback ID.
     */
    rollbackId: pulumi.Input<number>;
    /**
     * Rollback mode by time point, full: normal; Db: fast; Table: Extreme speed (default is normal).
     */
    rollbackMode?: pulumi.Input<string>;
    /**
     * Backfile policy timeRollback - Backfile by point in time snapRollback - Backfile by backup file.
     */
    rollbackStrategy: pulumi.Input<string>;
    /**
     * Table list.
     */
    rollbackTables?: pulumi.Input<pulumi.Input<inputs.CynosdbRollBackClusterRollbackTable>[]>;
}
