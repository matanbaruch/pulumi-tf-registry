// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Usergroup extends pulumi.CustomResource {
    /**
     * Get an existing Usergroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UsergroupState, opts?: pulumi.CustomResourceOptions): Usergroup {
        return new Usergroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'commvault:index/usergroup:Usergroup';

    /**
     * Returns true if the given object is an instance of Usergroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Usergroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Usergroup.__pulumiType;
    }

    /**
     * This property can be used to allow addition of users/groups from child companies. Only applicable for commcell and
     * reseller company group.
     */
    public readonly allowmultiplecompanymembers!: pulumi.Output<string>;
    public readonly associatedexternalgroups!: pulumi.Output<outputs.UsergroupAssociatedexternalgroup[] | undefined>;
    /**
     * Azure Object ID used to link this user group to Azure AD group and manage group membership of the user during SAML login
     */
    public readonly azureguid!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    /**
     * Option to not inherit the RestrictConsoleTypes from the parent. By default the value is false, parent
     * RestrictConsoleTypes will be inherited.
     */
    public readonly donotinheritrestrictconsoletypes!: pulumi.Output<string>;
    /**
     * allows the enabling/disabling of the user group.
     */
    public readonly enabled!: pulumi.Output<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    public readonly enablelocalauthentication!: pulumi.Output<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    public readonly enabletwofactorauthentication!: pulumi.Output<string>;
    /**
     * Used to determine if a backup data limit will be set for the user group being created
     */
    public readonly enforcefsquota!: pulumi.Output<string>;
    /**
     * When set to true, users in this group cannot activate or be set as server owner
     */
    public readonly laptopadmins!: pulumi.Output<string>;
    /**
     * To create an active directory usergroup, the domain name should be mentioned along with the usergroup name
     * (domainName\\usergroupName) and localUserGroup value must be given.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * determines if an existing user has to be added to the user group or removed from the user group [ADD, DELETE]
     */
    public readonly planoperationtype!: pulumi.Output<string>;
    /**
     * if enforceFSQuota is set to true, the quota limit can be set in GBs
     */
    public readonly quotalimitingb!: pulumi.Output<number>;
    public readonly restrictconsoletypes!: pulumi.Output<outputs.UsergroupRestrictconsoletype[] | undefined>;
    public readonly users!: pulumi.Output<outputs.UsergroupUser[] | undefined>;

    /**
     * Create a Usergroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UsergroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UsergroupArgs | UsergroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UsergroupState | undefined;
            resourceInputs["allowmultiplecompanymembers"] = state ? state.allowmultiplecompanymembers : undefined;
            resourceInputs["associatedexternalgroups"] = state ? state.associatedexternalgroups : undefined;
            resourceInputs["azureguid"] = state ? state.azureguid : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["donotinheritrestrictconsoletypes"] = state ? state.donotinheritrestrictconsoletypes : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["enablelocalauthentication"] = state ? state.enablelocalauthentication : undefined;
            resourceInputs["enabletwofactorauthentication"] = state ? state.enabletwofactorauthentication : undefined;
            resourceInputs["enforcefsquota"] = state ? state.enforcefsquota : undefined;
            resourceInputs["laptopadmins"] = state ? state.laptopadmins : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["planoperationtype"] = state ? state.planoperationtype : undefined;
            resourceInputs["quotalimitingb"] = state ? state.quotalimitingb : undefined;
            resourceInputs["restrictconsoletypes"] = state ? state.restrictconsoletypes : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
        } else {
            const args = argsOrState as UsergroupArgs | undefined;
            resourceInputs["allowmultiplecompanymembers"] = args ? args.allowmultiplecompanymembers : undefined;
            resourceInputs["associatedexternalgroups"] = args ? args.associatedexternalgroups : undefined;
            resourceInputs["azureguid"] = args ? args.azureguid : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["donotinheritrestrictconsoletypes"] = args ? args.donotinheritrestrictconsoletypes : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["enablelocalauthentication"] = args ? args.enablelocalauthentication : undefined;
            resourceInputs["enabletwofactorauthentication"] = args ? args.enabletwofactorauthentication : undefined;
            resourceInputs["enforcefsquota"] = args ? args.enforcefsquota : undefined;
            resourceInputs["laptopadmins"] = args ? args.laptopadmins : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["planoperationtype"] = args ? args.planoperationtype : undefined;
            resourceInputs["quotalimitingb"] = args ? args.quotalimitingb : undefined;
            resourceInputs["restrictconsoletypes"] = args ? args.restrictconsoletypes : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Usergroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Usergroup resources.
 */
export interface UsergroupState {
    /**
     * This property can be used to allow addition of users/groups from child companies. Only applicable for commcell and
     * reseller company group.
     */
    allowmultiplecompanymembers?: pulumi.Input<string>;
    associatedexternalgroups?: pulumi.Input<pulumi.Input<inputs.UsergroupAssociatedexternalgroup>[]>;
    /**
     * Azure Object ID used to link this user group to Azure AD group and manage group membership of the user during SAML login
     */
    azureguid?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Option to not inherit the RestrictConsoleTypes from the parent. By default the value is false, parent
     * RestrictConsoleTypes will be inherited.
     */
    donotinheritrestrictconsoletypes?: pulumi.Input<string>;
    /**
     * allows the enabling/disabling of the user group.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    enablelocalauthentication?: pulumi.Input<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    enabletwofactorauthentication?: pulumi.Input<string>;
    /**
     * Used to determine if a backup data limit will be set for the user group being created
     */
    enforcefsquota?: pulumi.Input<string>;
    /**
     * When set to true, users in this group cannot activate or be set as server owner
     */
    laptopadmins?: pulumi.Input<string>;
    /**
     * To create an active directory usergroup, the domain name should be mentioned along with the usergroup name
     * (domainName\\usergroupName) and localUserGroup value must be given.
     */
    name?: pulumi.Input<string>;
    /**
     * determines if an existing user has to be added to the user group or removed from the user group [ADD, DELETE]
     */
    planoperationtype?: pulumi.Input<string>;
    /**
     * if enforceFSQuota is set to true, the quota limit can be set in GBs
     */
    quotalimitingb?: pulumi.Input<number>;
    restrictconsoletypes?: pulumi.Input<pulumi.Input<inputs.UsergroupRestrictconsoletype>[]>;
    users?: pulumi.Input<pulumi.Input<inputs.UsergroupUser>[]>;
}

/**
 * The set of arguments for constructing a Usergroup resource.
 */
export interface UsergroupArgs {
    /**
     * This property can be used to allow addition of users/groups from child companies. Only applicable for commcell and
     * reseller company group.
     */
    allowmultiplecompanymembers?: pulumi.Input<string>;
    associatedexternalgroups?: pulumi.Input<pulumi.Input<inputs.UsergroupAssociatedexternalgroup>[]>;
    /**
     * Azure Object ID used to link this user group to Azure AD group and manage group membership of the user during SAML login
     */
    azureguid?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Option to not inherit the RestrictConsoleTypes from the parent. By default the value is false, parent
     * RestrictConsoleTypes will be inherited.
     */
    donotinheritrestrictconsoletypes?: pulumi.Input<string>;
    /**
     * allows the enabling/disabling of the user group.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    enablelocalauthentication?: pulumi.Input<string>;
    /**
     * Allows two-factor authentication to be enabled for the specific types of usergroups. it can be turned on or off based on
     * user preferences. There will be usergroups that will not have this option. [ON, OFF, DISABLED_AT_COMPANY]
     */
    enabletwofactorauthentication?: pulumi.Input<string>;
    /**
     * Used to determine if a backup data limit will be set for the user group being created
     */
    enforcefsquota?: pulumi.Input<string>;
    /**
     * When set to true, users in this group cannot activate or be set as server owner
     */
    laptopadmins?: pulumi.Input<string>;
    /**
     * To create an active directory usergroup, the domain name should be mentioned along with the usergroup name
     * (domainName\\usergroupName) and localUserGroup value must be given.
     */
    name?: pulumi.Input<string>;
    /**
     * determines if an existing user has to be added to the user group or removed from the user group [ADD, DELETE]
     */
    planoperationtype?: pulumi.Input<string>;
    /**
     * if enforceFSQuota is set to true, the quota limit can be set in GBs
     */
    quotalimitingb?: pulumi.Input<number>;
    restrictconsoletypes?: pulumi.Input<pulumi.Input<inputs.UsergroupRestrictconsoletype>[]>;
    users?: pulumi.Input<pulumi.Input<inputs.UsergroupUser>[]>;
}
