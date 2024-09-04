// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationInstance extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationInstanceState, opts?: pulumi.CustomResourceOptions): OrganizationInstance {
        return new OrganizationInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/organizationInstance:OrganizationInstance';

    /**
     * Returns true if the given object is an instance of OrganizationInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationInstance.__pulumiType;
    }

    /**
     * Organize the creation time.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Creator Uin.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly hostUin!: pulumi.Output<number>;
    /**
     * Whether the members are allowed to withdraw.Allow: Allow, not allowed: DENIEDNote: This field may return NULL,
     * indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly isAllowQuit!: pulumi.Output<string>;
    /**
     * Whether a trusted service administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the valid
     * value cannot be obtained.
     */
    public /*out*/ readonly isAssignManager!: pulumi.Output<boolean>;
    /**
     * Whether the real -name subject administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the
     * valid value cannot be obtained.
     */
    public /*out*/ readonly isAuthManager!: pulumi.Output<boolean>;
    /**
     * Whether to organize an administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the valid
     * value cannot be obtained.
     */
    public /*out*/ readonly isManager!: pulumi.Output<boolean>;
    /**
     * Members join time.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly joinTime!: pulumi.Output<string>;
    /**
     * Creator nickname.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly nickName!: pulumi.Output<string>;
    /**
     * Enterprise organization ID.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly orgId!: pulumi.Output<number>;
    /**
     * List of membership authority of members.Note: This field may return NULL, indicating that the valid value cannot be
     * obtained.
     */
    public /*out*/ readonly orgPermissions!: pulumi.Output<outputs.OrganizationInstanceOrgPermission[]>;
    /**
     * Strategic name.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly orgPolicyName!: pulumi.Output<string>;
    /**
     * Strategy type.Financial Management: FinancialNote: This field may return NULL, indicating that the valid value cannot be
     * obtained.
     */
    public /*out*/ readonly orgPolicyType!: pulumi.Output<string>;
    /**
     * Enterprise organization type.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly orgType!: pulumi.Output<number>;
    /**
     * The name of the payment.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly payName!: pulumi.Output<string>;
    /**
     * UIN on behalf of the payer.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly payUin!: pulumi.Output<string>;
    /**
     * Organize the root node ID.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    public /*out*/ readonly rootNodeId!: pulumi.Output<number>;

    /**
     * Create a OrganizationInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OrganizationInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationInstanceArgs | OrganizationInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationInstanceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["hostUin"] = state ? state.hostUin : undefined;
            resourceInputs["isAllowQuit"] = state ? state.isAllowQuit : undefined;
            resourceInputs["isAssignManager"] = state ? state.isAssignManager : undefined;
            resourceInputs["isAuthManager"] = state ? state.isAuthManager : undefined;
            resourceInputs["isManager"] = state ? state.isManager : undefined;
            resourceInputs["joinTime"] = state ? state.joinTime : undefined;
            resourceInputs["nickName"] = state ? state.nickName : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["orgPermissions"] = state ? state.orgPermissions : undefined;
            resourceInputs["orgPolicyName"] = state ? state.orgPolicyName : undefined;
            resourceInputs["orgPolicyType"] = state ? state.orgPolicyType : undefined;
            resourceInputs["orgType"] = state ? state.orgType : undefined;
            resourceInputs["payName"] = state ? state.payName : undefined;
            resourceInputs["payUin"] = state ? state.payUin : undefined;
            resourceInputs["rootNodeId"] = state ? state.rootNodeId : undefined;
        } else {
            const args = argsOrState as OrganizationInstanceArgs | undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["hostUin"] = undefined /*out*/;
            resourceInputs["isAllowQuit"] = undefined /*out*/;
            resourceInputs["isAssignManager"] = undefined /*out*/;
            resourceInputs["isAuthManager"] = undefined /*out*/;
            resourceInputs["isManager"] = undefined /*out*/;
            resourceInputs["joinTime"] = undefined /*out*/;
            resourceInputs["nickName"] = undefined /*out*/;
            resourceInputs["orgId"] = undefined /*out*/;
            resourceInputs["orgPermissions"] = undefined /*out*/;
            resourceInputs["orgPolicyName"] = undefined /*out*/;
            resourceInputs["orgPolicyType"] = undefined /*out*/;
            resourceInputs["orgType"] = undefined /*out*/;
            resourceInputs["payName"] = undefined /*out*/;
            resourceInputs["payUin"] = undefined /*out*/;
            resourceInputs["rootNodeId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationInstance resources.
 */
export interface OrganizationInstanceState {
    /**
     * Organize the creation time.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Creator Uin.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    hostUin?: pulumi.Input<number>;
    /**
     * Whether the members are allowed to withdraw.Allow: Allow, not allowed: DENIEDNote: This field may return NULL,
     * indicating that the valid value cannot be obtained.
     */
    isAllowQuit?: pulumi.Input<string>;
    /**
     * Whether a trusted service administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the valid
     * value cannot be obtained.
     */
    isAssignManager?: pulumi.Input<boolean>;
    /**
     * Whether the real -name subject administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the
     * valid value cannot be obtained.
     */
    isAuthManager?: pulumi.Input<boolean>;
    /**
     * Whether to organize an administrator.Yes: true, no: falseNote: This field may return NULL, indicating that the valid
     * value cannot be obtained.
     */
    isManager?: pulumi.Input<boolean>;
    /**
     * Members join time.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    joinTime?: pulumi.Input<string>;
    /**
     * Creator nickname.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    nickName?: pulumi.Input<string>;
    /**
     * Enterprise organization ID.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    orgId?: pulumi.Input<number>;
    /**
     * List of membership authority of members.Note: This field may return NULL, indicating that the valid value cannot be
     * obtained.
     */
    orgPermissions?: pulumi.Input<pulumi.Input<inputs.OrganizationInstanceOrgPermission>[]>;
    /**
     * Strategic name.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    orgPolicyName?: pulumi.Input<string>;
    /**
     * Strategy type.Financial Management: FinancialNote: This field may return NULL, indicating that the valid value cannot be
     * obtained.
     */
    orgPolicyType?: pulumi.Input<string>;
    /**
     * Enterprise organization type.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    orgType?: pulumi.Input<number>;
    /**
     * The name of the payment.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    payName?: pulumi.Input<string>;
    /**
     * UIN on behalf of the payer.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    payUin?: pulumi.Input<string>;
    /**
     * Organize the root node ID.Note: This field may return NULL, indicating that the valid value cannot be obtained.
     */
    rootNodeId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a OrganizationInstance resource.
 */
export interface OrganizationInstanceArgs {
}
