// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SqlserverConfigDatabaseCdc extends pulumi.CustomResource {
    /**
     * Get an existing SqlserverConfigDatabaseCdc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlserverConfigDatabaseCdcState, opts?: pulumi.CustomResourceOptions): SqlserverConfigDatabaseCdc {
        return new SqlserverConfigDatabaseCdc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sqlserverConfigDatabaseCdc:SqlserverConfigDatabaseCdc';

    /**
     * Returns true if the given object is an instance of SqlserverConfigDatabaseCdc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlserverConfigDatabaseCdc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlserverConfigDatabaseCdc.__pulumiType;
    }

    /**
     * database name.
     */
    public readonly dbName!: pulumi.Output<string>;
    /**
     * Instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Enable or disable CDC. Valid values: enable, disable.
     */
    public readonly modifyType!: pulumi.Output<string>;

    /**
     * Create a SqlserverConfigDatabaseCdc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlserverConfigDatabaseCdcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlserverConfigDatabaseCdcArgs | SqlserverConfigDatabaseCdcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlserverConfigDatabaseCdcState | undefined;
            resourceInputs["dbName"] = state ? state.dbName : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["modifyType"] = state ? state.modifyType : undefined;
        } else {
            const args = argsOrState as SqlserverConfigDatabaseCdcArgs | undefined;
            if ((!args || args.dbName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbName'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.modifyType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modifyType'");
            }
            resourceInputs["dbName"] = args ? args.dbName : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["modifyType"] = args ? args.modifyType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqlserverConfigDatabaseCdc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlserverConfigDatabaseCdc resources.
 */
export interface SqlserverConfigDatabaseCdcState {
    /**
     * database name.
     */
    dbName?: pulumi.Input<string>;
    /**
     * Instance ID.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Enable or disable CDC. Valid values: enable, disable.
     */
    modifyType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SqlserverConfigDatabaseCdc resource.
 */
export interface SqlserverConfigDatabaseCdcArgs {
    /**
     * database name.
     */
    dbName: pulumi.Input<string>;
    /**
     * Instance ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Enable or disable CDC. Valid values: enable, disable.
     */
    modifyType: pulumi.Input<string>;
}
