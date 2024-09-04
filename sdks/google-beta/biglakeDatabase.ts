// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BiglakeDatabase extends pulumi.CustomResource {
    /**
     * Get an existing BiglakeDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BiglakeDatabaseState, opts?: pulumi.CustomResourceOptions): BiglakeDatabase {
        return new BiglakeDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/biglakeDatabase:BiglakeDatabase';

    /**
     * Returns true if the given object is an instance of BiglakeDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BiglakeDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BiglakeDatabase.__pulumiType;
    }

    /**
     * The parent catalog.
     */
    public readonly catalog!: pulumi.Output<string>;
    /**
     * Output only. The creation time of the database. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
     * up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Output only. The deletion time of the database. Only set after the database is deleted. A timestamp in RFC3339 UTC
     * "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
     * "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly deleteTime!: pulumi.Output<string>;
    /**
     * Output only. The time when this database is considered expired. Only set after the database is deleted. A timestamp in
     * RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z"
     * and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly expireTime!: pulumi.Output<string>;
    /**
     * Options of a Hive database.
     */
    public readonly hiveOptions!: pulumi.Output<outputs.BiglakeDatabaseHiveOptions>;
    /**
     * The name of the database.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BiglakeDatabaseTimeouts | undefined>;
    /**
     * The database type.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Output only. The last modification time of the database. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a BiglakeDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BiglakeDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BiglakeDatabaseArgs | BiglakeDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BiglakeDatabaseState | undefined;
            resourceInputs["catalog"] = state ? state.catalog : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deleteTime"] = state ? state.deleteTime : undefined;
            resourceInputs["expireTime"] = state ? state.expireTime : undefined;
            resourceInputs["hiveOptions"] = state ? state.hiveOptions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as BiglakeDatabaseArgs | undefined;
            if ((!args || args.catalog === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalog'");
            }
            if ((!args || args.hiveOptions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hiveOptions'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["catalog"] = args ? args.catalog : undefined;
            resourceInputs["hiveOptions"] = args ? args.hiveOptions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["deleteTime"] = undefined /*out*/;
            resourceInputs["expireTime"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BiglakeDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BiglakeDatabase resources.
 */
export interface BiglakeDatabaseState {
    /**
     * The parent catalog.
     */
    catalog?: pulumi.Input<string>;
    /**
     * Output only. The creation time of the database. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
     * up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * Output only. The deletion time of the database. Only set after the database is deleted. A timestamp in RFC3339 UTC
     * "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
     * "2014-10-02T15:01:23.045123456Z".
     */
    deleteTime?: pulumi.Input<string>;
    /**
     * Output only. The time when this database is considered expired. Only set after the database is deleted. A timestamp in
     * RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z"
     * and "2014-10-02T15:01:23.045123456Z".
     */
    expireTime?: pulumi.Input<string>;
    /**
     * Options of a Hive database.
     */
    hiveOptions?: pulumi.Input<inputs.BiglakeDatabaseHiveOptions>;
    /**
     * The name of the database.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BiglakeDatabaseTimeouts>;
    /**
     * The database type.
     */
    type?: pulumi.Input<string>;
    /**
     * Output only. The last modification time of the database. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
     * resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BiglakeDatabase resource.
 */
export interface BiglakeDatabaseArgs {
    /**
     * The parent catalog.
     */
    catalog: pulumi.Input<string>;
    /**
     * Options of a Hive database.
     */
    hiveOptions: pulumi.Input<inputs.BiglakeDatabaseHiveOptions>;
    /**
     * The name of the database.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BiglakeDatabaseTimeouts>;
    /**
     * The database type.
     */
    type: pulumi.Input<string>;
}
