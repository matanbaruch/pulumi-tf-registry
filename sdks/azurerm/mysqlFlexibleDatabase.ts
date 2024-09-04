// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlFlexibleDatabase extends pulumi.CustomResource {
    /**
     * Get an existing MysqlFlexibleDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlFlexibleDatabaseState, opts?: pulumi.CustomResourceOptions): MysqlFlexibleDatabase {
        return new MysqlFlexibleDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/mysqlFlexibleDatabase:MysqlFlexibleDatabase';

    /**
     * Returns true if the given object is an instance of MysqlFlexibleDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlFlexibleDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlFlexibleDatabase.__pulumiType;
    }

    public readonly charset!: pulumi.Output<string>;
    public readonly collation!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly serverName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlFlexibleDatabaseTimeouts | undefined>;

    /**
     * Create a MysqlFlexibleDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlFlexibleDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlFlexibleDatabaseArgs | MysqlFlexibleDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlFlexibleDatabaseState | undefined;
            resourceInputs["charset"] = state ? state.charset : undefined;
            resourceInputs["collation"] = state ? state.collation : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serverName"] = state ? state.serverName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MysqlFlexibleDatabaseArgs | undefined;
            if ((!args || args.charset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'charset'");
            }
            if ((!args || args.collation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["charset"] = args ? args.charset : undefined;
            resourceInputs["collation"] = args ? args.collation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlFlexibleDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlFlexibleDatabase resources.
 */
export interface MysqlFlexibleDatabaseState {
    charset?: pulumi.Input<string>;
    collation?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    serverName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlFlexibleDatabaseTimeouts>;
}

/**
 * The set of arguments for constructing a MysqlFlexibleDatabase resource.
 */
export interface MysqlFlexibleDatabaseArgs {
    charset: pulumi.Input<string>;
    collation: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    serverName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlFlexibleDatabaseTimeouts>;
}
