// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Aclsettings extends pulumi.CustomResource {
    /**
     * Get an existing Aclsettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AclsettingsState, opts?: pulumi.CustomResourceOptions): Aclsettings {
        return new Aclsettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerscale:index/aclsettings:Aclsettings';

    /**
     * Returns true if the given object is an instance of Aclsettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Aclsettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Aclsettings.__pulumiType;
    }

    /**
     * Access checks (chmod, chown). Options: unix, windows
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * Displayed mode bits. Options: approx, 777
     */
    public readonly calcmode!: pulumi.Output<string>;
    /**
     * Approximate group mode bits when ACL exists. Options: group_aces, group_only
     */
    public readonly calcmodeGroup!: pulumi.Output<string>;
    /**
     * Approximate owner mode bits when ACL exists. Options: owner_aces, owner_only
     */
    public readonly calcmodeOwner!: pulumi.Output<string>;
    /**
     * Require traverse rights in order to traverse directories with existing ACLs. Options: require, ignore
     */
    public readonly calcmodeTraverse!: pulumi.Output<string>;
    /**
     * chmod on files with existing ACLs. Options: remove, replace, replace_users_and_groups, merge_with_ugo_priority, merge,
     * deny, ignore
     */
    public readonly chmod!: pulumi.Output<string>;
    /**
     * chmod (007) on files with existing ACLs. Options: default, remove
     */
    public readonly chmod007!: pulumi.Output<string>;
    /**
     * ACLs created on directories by UNIX chmod. Options: yes, no
     */
    public readonly chmodInheritable!: pulumi.Output<string>;
    /**
     * chown/chgrp on files with existing ACLs. Options: owner_group_and_acl, owner_group_only, ignore
     */
    public readonly chown!: pulumi.Output<string>;
    /**
     * ACL creation over SMB. Options: allow, disallow
     */
    public readonly createOverSmb!: pulumi.Output<string>;
    /**
     * Read only DOS attribute. Options: deny_smb, deny_smb_and_nfs
     */
    public readonly dosAttr!: pulumi.Output<string>;
    /**
     * Group owner inheritance. Options: native, parent, creator
     */
    public readonly groupOwnerInheritance!: pulumi.Output<string>;
    /**
     * Treatment of 'rwx' permissions. Options: retain, full_control
     */
    public readonly rwx!: pulumi.Output<string>;
    /**
     * Synthetic 'deny' ACEs. Options: none, remove
     */
    public readonly syntheticDenies!: pulumi.Output<string>;
    /**
     * Access check (utimes). Options: only_owner, owner_and_write
     */
    public readonly utimes!: pulumi.Output<string>;

    /**
     * Create a Aclsettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AclsettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AclsettingsArgs | AclsettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AclsettingsState | undefined;
            resourceInputs["access"] = state ? state.access : undefined;
            resourceInputs["calcmode"] = state ? state.calcmode : undefined;
            resourceInputs["calcmodeGroup"] = state ? state.calcmodeGroup : undefined;
            resourceInputs["calcmodeOwner"] = state ? state.calcmodeOwner : undefined;
            resourceInputs["calcmodeTraverse"] = state ? state.calcmodeTraverse : undefined;
            resourceInputs["chmod"] = state ? state.chmod : undefined;
            resourceInputs["chmod007"] = state ? state.chmod007 : undefined;
            resourceInputs["chmodInheritable"] = state ? state.chmodInheritable : undefined;
            resourceInputs["chown"] = state ? state.chown : undefined;
            resourceInputs["createOverSmb"] = state ? state.createOverSmb : undefined;
            resourceInputs["dosAttr"] = state ? state.dosAttr : undefined;
            resourceInputs["groupOwnerInheritance"] = state ? state.groupOwnerInheritance : undefined;
            resourceInputs["rwx"] = state ? state.rwx : undefined;
            resourceInputs["syntheticDenies"] = state ? state.syntheticDenies : undefined;
            resourceInputs["utimes"] = state ? state.utimes : undefined;
        } else {
            const args = argsOrState as AclsettingsArgs | undefined;
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["calcmode"] = args ? args.calcmode : undefined;
            resourceInputs["calcmodeGroup"] = args ? args.calcmodeGroup : undefined;
            resourceInputs["calcmodeOwner"] = args ? args.calcmodeOwner : undefined;
            resourceInputs["calcmodeTraverse"] = args ? args.calcmodeTraverse : undefined;
            resourceInputs["chmod"] = args ? args.chmod : undefined;
            resourceInputs["chmod007"] = args ? args.chmod007 : undefined;
            resourceInputs["chmodInheritable"] = args ? args.chmodInheritable : undefined;
            resourceInputs["chown"] = args ? args.chown : undefined;
            resourceInputs["createOverSmb"] = args ? args.createOverSmb : undefined;
            resourceInputs["dosAttr"] = args ? args.dosAttr : undefined;
            resourceInputs["groupOwnerInheritance"] = args ? args.groupOwnerInheritance : undefined;
            resourceInputs["rwx"] = args ? args.rwx : undefined;
            resourceInputs["syntheticDenies"] = args ? args.syntheticDenies : undefined;
            resourceInputs["utimes"] = args ? args.utimes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Aclsettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Aclsettings resources.
 */
export interface AclsettingsState {
    /**
     * Access checks (chmod, chown). Options: unix, windows
     */
    access?: pulumi.Input<string>;
    /**
     * Displayed mode bits. Options: approx, 777
     */
    calcmode?: pulumi.Input<string>;
    /**
     * Approximate group mode bits when ACL exists. Options: group_aces, group_only
     */
    calcmodeGroup?: pulumi.Input<string>;
    /**
     * Approximate owner mode bits when ACL exists. Options: owner_aces, owner_only
     */
    calcmodeOwner?: pulumi.Input<string>;
    /**
     * Require traverse rights in order to traverse directories with existing ACLs. Options: require, ignore
     */
    calcmodeTraverse?: pulumi.Input<string>;
    /**
     * chmod on files with existing ACLs. Options: remove, replace, replace_users_and_groups, merge_with_ugo_priority, merge,
     * deny, ignore
     */
    chmod?: pulumi.Input<string>;
    /**
     * chmod (007) on files with existing ACLs. Options: default, remove
     */
    chmod007?: pulumi.Input<string>;
    /**
     * ACLs created on directories by UNIX chmod. Options: yes, no
     */
    chmodInheritable?: pulumi.Input<string>;
    /**
     * chown/chgrp on files with existing ACLs. Options: owner_group_and_acl, owner_group_only, ignore
     */
    chown?: pulumi.Input<string>;
    /**
     * ACL creation over SMB. Options: allow, disallow
     */
    createOverSmb?: pulumi.Input<string>;
    /**
     * Read only DOS attribute. Options: deny_smb, deny_smb_and_nfs
     */
    dosAttr?: pulumi.Input<string>;
    /**
     * Group owner inheritance. Options: native, parent, creator
     */
    groupOwnerInheritance?: pulumi.Input<string>;
    /**
     * Treatment of 'rwx' permissions. Options: retain, full_control
     */
    rwx?: pulumi.Input<string>;
    /**
     * Synthetic 'deny' ACEs. Options: none, remove
     */
    syntheticDenies?: pulumi.Input<string>;
    /**
     * Access check (utimes). Options: only_owner, owner_and_write
     */
    utimes?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Aclsettings resource.
 */
export interface AclsettingsArgs {
    /**
     * Access checks (chmod, chown). Options: unix, windows
     */
    access?: pulumi.Input<string>;
    /**
     * Displayed mode bits. Options: approx, 777
     */
    calcmode?: pulumi.Input<string>;
    /**
     * Approximate group mode bits when ACL exists. Options: group_aces, group_only
     */
    calcmodeGroup?: pulumi.Input<string>;
    /**
     * Approximate owner mode bits when ACL exists. Options: owner_aces, owner_only
     */
    calcmodeOwner?: pulumi.Input<string>;
    /**
     * Require traverse rights in order to traverse directories with existing ACLs. Options: require, ignore
     */
    calcmodeTraverse?: pulumi.Input<string>;
    /**
     * chmod on files with existing ACLs. Options: remove, replace, replace_users_and_groups, merge_with_ugo_priority, merge,
     * deny, ignore
     */
    chmod?: pulumi.Input<string>;
    /**
     * chmod (007) on files with existing ACLs. Options: default, remove
     */
    chmod007?: pulumi.Input<string>;
    /**
     * ACLs created on directories by UNIX chmod. Options: yes, no
     */
    chmodInheritable?: pulumi.Input<string>;
    /**
     * chown/chgrp on files with existing ACLs. Options: owner_group_and_acl, owner_group_only, ignore
     */
    chown?: pulumi.Input<string>;
    /**
     * ACL creation over SMB. Options: allow, disallow
     */
    createOverSmb?: pulumi.Input<string>;
    /**
     * Read only DOS attribute. Options: deny_smb, deny_smb_and_nfs
     */
    dosAttr?: pulumi.Input<string>;
    /**
     * Group owner inheritance. Options: native, parent, creator
     */
    groupOwnerInheritance?: pulumi.Input<string>;
    /**
     * Treatment of 'rwx' permissions. Options: retain, full_control
     */
    rwx?: pulumi.Input<string>;
    /**
     * Synthetic 'deny' ACEs. Options: none, remove
     */
    syntheticDenies?: pulumi.Input<string>;
    /**
     * Access check (utimes). Options: only_owner, owner_and_write
     */
    utimes?: pulumi.Input<string>;
}
