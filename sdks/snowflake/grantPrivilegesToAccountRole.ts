// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GrantPrivilegesToAccountRole extends pulumi.CustomResource {
    /**
     * Get an existing GrantPrivilegesToAccountRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GrantPrivilegesToAccountRoleState, opts?: pulumi.CustomResourceOptions): GrantPrivilegesToAccountRole {
        return new GrantPrivilegesToAccountRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'snowflake:index/grantPrivilegesToAccountRole:GrantPrivilegesToAccountRole';

    /**
     * Returns true if the given object is an instance of GrantPrivilegesToAccountRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GrantPrivilegesToAccountRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GrantPrivilegesToAccountRole.__pulumiType;
    }

    /**
     * The fully qualified name of the account role to which privileges will be granted.
     */
    public readonly accountRoleName!: pulumi.Output<string>;
    /**
     * Grant all privileges on the account role.
     */
    public readonly allPrivileges!: pulumi.Output<boolean | undefined>;
    public readonly alwaysApply!: pulumi.Output<boolean | undefined>;
    /**
     * This is a helper field and should not be set. Its main purpose is to help to achieve the functionality described by the
     * always_apply field.
     */
    public readonly alwaysApplyTrigger!: pulumi.Output<string | undefined>;
    /**
     * If true, the privileges will be granted on the account.
     */
    public readonly onAccount!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the account object on which privileges will be granted
     */
    public readonly onAccountObject!: pulumi.Output<outputs.GrantPrivilegesToAccountRoleOnAccountObject | undefined>;
    /**
     * Specifies the schema on which privileges will be granted.
     */
    public readonly onSchema!: pulumi.Output<outputs.GrantPrivilegesToAccountRoleOnSchema | undefined>;
    /**
     * Specifies the schema object on which privileges will be granted.
     */
    public readonly onSchemaObject!: pulumi.Output<outputs.GrantPrivilegesToAccountRoleOnSchemaObject | undefined>;
    /**
     * The privileges to grant on the account role.
     */
    public readonly privileges!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies whether the grantee can grant the privileges to other users.
     */
    public readonly withGrantOption!: pulumi.Output<boolean | undefined>;

    /**
     * Create a GrantPrivilegesToAccountRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrantPrivilegesToAccountRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GrantPrivilegesToAccountRoleArgs | GrantPrivilegesToAccountRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GrantPrivilegesToAccountRoleState | undefined;
            resourceInputs["accountRoleName"] = state ? state.accountRoleName : undefined;
            resourceInputs["allPrivileges"] = state ? state.allPrivileges : undefined;
            resourceInputs["alwaysApply"] = state ? state.alwaysApply : undefined;
            resourceInputs["alwaysApplyTrigger"] = state ? state.alwaysApplyTrigger : undefined;
            resourceInputs["onAccount"] = state ? state.onAccount : undefined;
            resourceInputs["onAccountObject"] = state ? state.onAccountObject : undefined;
            resourceInputs["onSchema"] = state ? state.onSchema : undefined;
            resourceInputs["onSchemaObject"] = state ? state.onSchemaObject : undefined;
            resourceInputs["privileges"] = state ? state.privileges : undefined;
            resourceInputs["withGrantOption"] = state ? state.withGrantOption : undefined;
        } else {
            const args = argsOrState as GrantPrivilegesToAccountRoleArgs | undefined;
            if ((!args || args.accountRoleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountRoleName'");
            }
            resourceInputs["accountRoleName"] = args ? args.accountRoleName : undefined;
            resourceInputs["allPrivileges"] = args ? args.allPrivileges : undefined;
            resourceInputs["alwaysApply"] = args ? args.alwaysApply : undefined;
            resourceInputs["alwaysApplyTrigger"] = args ? args.alwaysApplyTrigger : undefined;
            resourceInputs["onAccount"] = args ? args.onAccount : undefined;
            resourceInputs["onAccountObject"] = args ? args.onAccountObject : undefined;
            resourceInputs["onSchema"] = args ? args.onSchema : undefined;
            resourceInputs["onSchemaObject"] = args ? args.onSchemaObject : undefined;
            resourceInputs["privileges"] = args ? args.privileges : undefined;
            resourceInputs["withGrantOption"] = args ? args.withGrantOption : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GrantPrivilegesToAccountRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GrantPrivilegesToAccountRole resources.
 */
export interface GrantPrivilegesToAccountRoleState {
    /**
     * The fully qualified name of the account role to which privileges will be granted.
     */
    accountRoleName?: pulumi.Input<string>;
    /**
     * Grant all privileges on the account role.
     */
    allPrivileges?: pulumi.Input<boolean>;
    alwaysApply?: pulumi.Input<boolean>;
    /**
     * This is a helper field and should not be set. Its main purpose is to help to achieve the functionality described by the
     * always_apply field.
     */
    alwaysApplyTrigger?: pulumi.Input<string>;
    /**
     * If true, the privileges will be granted on the account.
     */
    onAccount?: pulumi.Input<boolean>;
    /**
     * Specifies the account object on which privileges will be granted
     */
    onAccountObject?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnAccountObject>;
    /**
     * Specifies the schema on which privileges will be granted.
     */
    onSchema?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnSchema>;
    /**
     * Specifies the schema object on which privileges will be granted.
     */
    onSchemaObject?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnSchemaObject>;
    /**
     * The privileges to grant on the account role.
     */
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether the grantee can grant the privileges to other users.
     */
    withGrantOption?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a GrantPrivilegesToAccountRole resource.
 */
export interface GrantPrivilegesToAccountRoleArgs {
    /**
     * The fully qualified name of the account role to which privileges will be granted.
     */
    accountRoleName: pulumi.Input<string>;
    /**
     * Grant all privileges on the account role.
     */
    allPrivileges?: pulumi.Input<boolean>;
    alwaysApply?: pulumi.Input<boolean>;
    /**
     * This is a helper field and should not be set. Its main purpose is to help to achieve the functionality described by the
     * always_apply field.
     */
    alwaysApplyTrigger?: pulumi.Input<string>;
    /**
     * If true, the privileges will be granted on the account.
     */
    onAccount?: pulumi.Input<boolean>;
    /**
     * Specifies the account object on which privileges will be granted
     */
    onAccountObject?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnAccountObject>;
    /**
     * Specifies the schema on which privileges will be granted.
     */
    onSchema?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnSchema>;
    /**
     * Specifies the schema object on which privileges will be granted.
     */
    onSchemaObject?: pulumi.Input<inputs.GrantPrivilegesToAccountRoleOnSchemaObject>;
    /**
     * The privileges to grant on the account role.
     */
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether the grantee can grant the privileges to other users.
     */
    withGrantOption?: pulumi.Input<boolean>;
}
