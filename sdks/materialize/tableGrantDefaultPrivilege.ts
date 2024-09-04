// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TableGrantDefaultPrivilege extends pulumi.CustomResource {
    /**
     * Get an existing TableGrantDefaultPrivilege resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableGrantDefaultPrivilegeState, opts?: pulumi.CustomResourceOptions): TableGrantDefaultPrivilege {
        return new TableGrantDefaultPrivilege(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/tableGrantDefaultPrivilege:TableGrantDefaultPrivilege';

    /**
     * Returns true if the given object is an instance of TableGrantDefaultPrivilege.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TableGrantDefaultPrivilege {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TableGrantDefaultPrivilege.__pulumiType;
    }

    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    public readonly granteeName!: pulumi.Output<string>;
    /**
     * The privilege to grant to the object.
     */
    public readonly privilege!: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    public readonly schemaName!: pulumi.Output<string | undefined>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is
     * assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    public readonly targetRoleName!: pulumi.Output<string>;

    /**
     * Create a TableGrantDefaultPrivilege resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableGrantDefaultPrivilegeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TableGrantDefaultPrivilegeArgs | TableGrantDefaultPrivilegeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TableGrantDefaultPrivilegeState | undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["granteeName"] = state ? state.granteeName : undefined;
            resourceInputs["privilege"] = state ? state.privilege : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["schemaName"] = state ? state.schemaName : undefined;
            resourceInputs["targetRoleName"] = state ? state.targetRoleName : undefined;
        } else {
            const args = argsOrState as TableGrantDefaultPrivilegeArgs | undefined;
            if ((!args || args.granteeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'granteeName'");
            }
            if ((!args || args.privilege === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privilege'");
            }
            if ((!args || args.targetRoleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetRoleName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["granteeName"] = args ? args.granteeName : undefined;
            resourceInputs["privilege"] = args ? args.privilege : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["targetRoleName"] = args ? args.targetRoleName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TableGrantDefaultPrivilege.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TableGrantDefaultPrivilege resources.
 */
export interface TableGrantDefaultPrivilegeState {
    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    granteeName?: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is
     * assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    targetRoleName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TableGrantDefaultPrivilege resource.
 */
export interface TableGrantDefaultPrivilegeArgs {
    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    granteeName: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is
     * assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    targetRoleName: pulumi.Input<string>;
}
