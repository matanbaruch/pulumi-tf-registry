// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SqlserverDb extends pulumi.CustomResource {
    /**
     * Get an existing SqlserverDb resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlserverDbState, opts?: pulumi.CustomResourceOptions): SqlserverDb {
        return new SqlserverDb(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sqlserverDb:SqlserverDb';

    /**
     * Returns true if the given object is an instance of SqlserverDb.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlserverDb {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlserverDb.__pulumiType;
    }

    /**
     * Character set DB uses. Valid values: `Chinese_PRC_CI_AS`, `Chinese_PRC_CS_AS`, `Chinese_PRC_BIN`,
     * `Chinese_Taiwan_Stroke_CI_AS`, `SQL_Latin1_General_CP1_CI_AS`, and `SQL_Latin1_General_CP1_CS_AS`. Default value is
     * `Chinese_PRC_CI_AS`.
     */
    public readonly charset!: pulumi.Output<string | undefined>;
    /**
     * Database creation time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * SQL Server instance ID which DB belongs to.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Name of SQL Server DB. The database name must be unique and must be composed of numbers, letters and underlines, and the
     * first one can not be underline.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Remark of the DB.
     */
    public readonly remark!: pulumi.Output<string | undefined>;
    /**
     * Database status, could be `creating`, `running`, `modifying` which means changing the remark, and `deleting`.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a SqlserverDb resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlserverDbArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlserverDbArgs | SqlserverDbState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlserverDbState | undefined;
            resourceInputs["charset"] = state ? state.charset : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SqlserverDbArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["charset"] = args ? args.charset : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqlserverDb.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlserverDb resources.
 */
export interface SqlserverDbState {
    /**
     * Character set DB uses. Valid values: `Chinese_PRC_CI_AS`, `Chinese_PRC_CS_AS`, `Chinese_PRC_BIN`,
     * `Chinese_Taiwan_Stroke_CI_AS`, `SQL_Latin1_General_CP1_CI_AS`, and `SQL_Latin1_General_CP1_CS_AS`. Default value is
     * `Chinese_PRC_CI_AS`.
     */
    charset?: pulumi.Input<string>;
    /**
     * Database creation time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * SQL Server instance ID which DB belongs to.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Name of SQL Server DB. The database name must be unique and must be composed of numbers, letters and underlines, and the
     * first one can not be underline.
     */
    name?: pulumi.Input<string>;
    /**
     * Remark of the DB.
     */
    remark?: pulumi.Input<string>;
    /**
     * Database status, could be `creating`, `running`, `modifying` which means changing the remark, and `deleting`.
     */
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SqlserverDb resource.
 */
export interface SqlserverDbArgs {
    /**
     * Character set DB uses. Valid values: `Chinese_PRC_CI_AS`, `Chinese_PRC_CS_AS`, `Chinese_PRC_BIN`,
     * `Chinese_Taiwan_Stroke_CI_AS`, `SQL_Latin1_General_CP1_CI_AS`, and `SQL_Latin1_General_CP1_CS_AS`. Default value is
     * `Chinese_PRC_CI_AS`.
     */
    charset?: pulumi.Input<string>;
    /**
     * SQL Server instance ID which DB belongs to.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Name of SQL Server DB. The database name must be unique and must be composed of numbers, letters and underlines, and the
     * first one can not be underline.
     */
    name?: pulumi.Input<string>;
    /**
     * Remark of the DB.
     */
    remark?: pulumi.Input<string>;
}
