// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlRollback extends pulumi.CustomResource {
    /**
     * Get an existing MysqlRollback resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlRollbackState, opts?: pulumi.CustomResourceOptions): MysqlRollback {
        return new MysqlRollback(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mysqlRollback:MysqlRollback';

    /**
     * Returns true if the given object is an instance of MysqlRollback.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlRollback {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlRollback.__pulumiType;
    }

    /**
     * The database information to be archived, indicating that the entire database is archived.
     */
    public readonly databases!: pulumi.Output<outputs.MysqlRollbackDatabase[] | undefined>;
    /**
     * Cloud database instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Database rollback time, the time format is: yyyy-mm-dd hh:mm:ss.
     */
    public readonly rollbackTime!: pulumi.Output<string>;
    /**
     * Rollback strategy. Available values are: table, db, full; the default value is full. table- Extremely fast rollback
     * mode, only import the backup and binlog of the selected table level, if there is a cross-table operation, and the
     * associated table is not selected at the same time, the rollback will fail. In this mode, the parameter Databases must be
     * empty; db- Quick mode, only import the backup and binlog of the selected library level, if there is a cross-database
     * operation, and the associated library is not selected at the same time, the rollback will fail; full- normal rollback
     * mode, the backup and binlog of the entire instance will be imported, at a slower rate.
     */
    public readonly strategy!: pulumi.Output<string>;
    /**
     * The database table information to be rolled back, indicating that the file is rolled back by table.
     */
    public readonly tables!: pulumi.Output<outputs.MysqlRollbackTable[] | undefined>;

    /**
     * Create a MysqlRollback resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlRollbackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlRollbackArgs | MysqlRollbackState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlRollbackState | undefined;
            resourceInputs["databases"] = state ? state.databases : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["rollbackTime"] = state ? state.rollbackTime : undefined;
            resourceInputs["strategy"] = state ? state.strategy : undefined;
            resourceInputs["tables"] = state ? state.tables : undefined;
        } else {
            const args = argsOrState as MysqlRollbackArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.rollbackTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rollbackTime'");
            }
            if ((!args || args.strategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'strategy'");
            }
            resourceInputs["databases"] = args ? args.databases : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["rollbackTime"] = args ? args.rollbackTime : undefined;
            resourceInputs["strategy"] = args ? args.strategy : undefined;
            resourceInputs["tables"] = args ? args.tables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlRollback.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlRollback resources.
 */
export interface MysqlRollbackState {
    /**
     * The database information to be archived, indicating that the entire database is archived.
     */
    databases?: pulumi.Input<pulumi.Input<inputs.MysqlRollbackDatabase>[]>;
    /**
     * Cloud database instance ID.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Database rollback time, the time format is: yyyy-mm-dd hh:mm:ss.
     */
    rollbackTime?: pulumi.Input<string>;
    /**
     * Rollback strategy. Available values are: table, db, full; the default value is full. table- Extremely fast rollback
     * mode, only import the backup and binlog of the selected table level, if there is a cross-table operation, and the
     * associated table is not selected at the same time, the rollback will fail. In this mode, the parameter Databases must be
     * empty; db- Quick mode, only import the backup and binlog of the selected library level, if there is a cross-database
     * operation, and the associated library is not selected at the same time, the rollback will fail; full- normal rollback
     * mode, the backup and binlog of the entire instance will be imported, at a slower rate.
     */
    strategy?: pulumi.Input<string>;
    /**
     * The database table information to be rolled back, indicating that the file is rolled back by table.
     */
    tables?: pulumi.Input<pulumi.Input<inputs.MysqlRollbackTable>[]>;
}

/**
 * The set of arguments for constructing a MysqlRollback resource.
 */
export interface MysqlRollbackArgs {
    /**
     * The database information to be archived, indicating that the entire database is archived.
     */
    databases?: pulumi.Input<pulumi.Input<inputs.MysqlRollbackDatabase>[]>;
    /**
     * Cloud database instance ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Database rollback time, the time format is: yyyy-mm-dd hh:mm:ss.
     */
    rollbackTime: pulumi.Input<string>;
    /**
     * Rollback strategy. Available values are: table, db, full; the default value is full. table- Extremely fast rollback
     * mode, only import the backup and binlog of the selected table level, if there is a cross-table operation, and the
     * associated table is not selected at the same time, the rollback will fail. In this mode, the parameter Databases must be
     * empty; db- Quick mode, only import the backup and binlog of the selected library level, if there is a cross-database
     * operation, and the associated library is not selected at the same time, the rollback will fail; full- normal rollback
     * mode, the backup and binlog of the entire instance will be imported, at a slower rate.
     */
    strategy: pulumi.Input<string>;
    /**
     * The database table information to be rolled back, indicating that the file is rolled back by table.
     */
    tables?: pulumi.Input<pulumi.Input<inputs.MysqlRollbackTable>[]>;
}
