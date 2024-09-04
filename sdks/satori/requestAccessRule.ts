// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RequestAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing RequestAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RequestAccessRuleState, opts?: pulumi.CustomResourceOptions): RequestAccessRule {
        return new RequestAccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'satori:index/requestAccessRule:RequestAccessRule';

    /**
     * Returns true if the given object is an instance of RequestAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RequestAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RequestAccessRule.__pulumiType;
    }

    /**
     * Access level to grant, valid values are: READ_ONLY, READ_WRITE, OWNER.
     */
    public readonly accessLevel!: pulumi.Output<string>;
    /**
     * Identities of Satori users/IdP groups that will be set as access rule approvers. Once an access rule approver is
     * defined, it is the ONLY entity that can approve the request generated from this access rule
     */
    public readonly approvers!: pulumi.Output<outputs.RequestAccessRuleApprover[] | undefined>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Rule expiration settings.
     */
    public readonly expireIn!: pulumi.Output<outputs.RequestAccessRuleExpireIn | undefined>;
    /**
     * Identity to apply the rule for.
     */
    public readonly identity!: pulumi.Output<outputs.RequestAccessRuleIdentity>;
    /**
     * Parent data policy ID, the data_policy_id field of a dataset.
     */
    public readonly parentDataPolicy!: pulumi.Output<string>;
    /**
     * Require from the approver an `approver note` when approving the request created from the defined rule. Defaults to
     * `false`.
     */
    public readonly requireApproverNote!: pulumi.Output<boolean | undefined>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    public readonly revokeIfNotUsedInDays!: pulumi.Output<number | undefined>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no
     * policies.
     */
    public readonly securityPolicies!: pulumi.Output<string[] | undefined>;

    /**
     * Create a RequestAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RequestAccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RequestAccessRuleArgs | RequestAccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RequestAccessRuleState | undefined;
            resourceInputs["accessLevel"] = state ? state.accessLevel : undefined;
            resourceInputs["approvers"] = state ? state.approvers : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["expireIn"] = state ? state.expireIn : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["parentDataPolicy"] = state ? state.parentDataPolicy : undefined;
            resourceInputs["requireApproverNote"] = state ? state.requireApproverNote : undefined;
            resourceInputs["revokeIfNotUsedInDays"] = state ? state.revokeIfNotUsedInDays : undefined;
            resourceInputs["securityPolicies"] = state ? state.securityPolicies : undefined;
        } else {
            const args = argsOrState as RequestAccessRuleArgs | undefined;
            if ((!args || args.accessLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessLevel'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.parentDataPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentDataPolicy'");
            }
            resourceInputs["accessLevel"] = args ? args.accessLevel : undefined;
            resourceInputs["approvers"] = args ? args.approvers : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["expireIn"] = args ? args.expireIn : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["parentDataPolicy"] = args ? args.parentDataPolicy : undefined;
            resourceInputs["requireApproverNote"] = args ? args.requireApproverNote : undefined;
            resourceInputs["revokeIfNotUsedInDays"] = args ? args.revokeIfNotUsedInDays : undefined;
            resourceInputs["securityPolicies"] = args ? args.securityPolicies : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RequestAccessRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RequestAccessRule resources.
 */
export interface RequestAccessRuleState {
    /**
     * Access level to grant, valid values are: READ_ONLY, READ_WRITE, OWNER.
     */
    accessLevel?: pulumi.Input<string>;
    /**
     * Identities of Satori users/IdP groups that will be set as access rule approvers. Once an access rule approver is
     * defined, it is the ONLY entity that can approve the request generated from this access rule
     */
    approvers?: pulumi.Input<pulumi.Input<inputs.RequestAccessRuleApprover>[]>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Rule expiration settings.
     */
    expireIn?: pulumi.Input<inputs.RequestAccessRuleExpireIn>;
    /**
     * Identity to apply the rule for.
     */
    identity?: pulumi.Input<inputs.RequestAccessRuleIdentity>;
    /**
     * Parent data policy ID, the data_policy_id field of a dataset.
     */
    parentDataPolicy?: pulumi.Input<string>;
    /**
     * Require from the approver an `approver note` when approving the request created from the defined rule. Defaults to
     * `false`.
     */
    requireApproverNote?: pulumi.Input<boolean>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    revokeIfNotUsedInDays?: pulumi.Input<number>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no
     * policies.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a RequestAccessRule resource.
 */
export interface RequestAccessRuleArgs {
    /**
     * Access level to grant, valid values are: READ_ONLY, READ_WRITE, OWNER.
     */
    accessLevel: pulumi.Input<string>;
    /**
     * Identities of Satori users/IdP groups that will be set as access rule approvers. Once an access rule approver is
     * defined, it is the ONLY entity that can approve the request generated from this access rule
     */
    approvers?: pulumi.Input<pulumi.Input<inputs.RequestAccessRuleApprover>[]>;
    /**
     * Enable the rule. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Rule expiration settings.
     */
    expireIn?: pulumi.Input<inputs.RequestAccessRuleExpireIn>;
    /**
     * Identity to apply the rule for.
     */
    identity: pulumi.Input<inputs.RequestAccessRuleIdentity>;
    /**
     * Parent data policy ID, the data_policy_id field of a dataset.
     */
    parentDataPolicy: pulumi.Input<string>;
    /**
     * Require from the approver an `approver note` when approving the request created from the defined rule. Defaults to
     * `false`.
     */
    requireApproverNote?: pulumi.Input<boolean>;
    /**
     * Revoke access if rule not used in the last given days. Zero = do not revoke. Max value is 180. Defaults to `0`.
     */
    revokeIfNotUsedInDays?: pulumi.Input<number>;
    /**
     * IDs of security policies to apply to this rule. Empty list for default dataset security policies. [ "none" ] list for no
     * policies.
     */
    securityPolicies?: pulumi.Input<pulumi.Input<string>[]>;
}
