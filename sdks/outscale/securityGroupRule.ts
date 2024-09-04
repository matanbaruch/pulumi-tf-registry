// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityGroupRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityGroupRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityGroupRuleState, opts?: pulumi.CustomResourceOptions): SecurityGroupRule {
        return new SecurityGroupRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outscale:index/securityGroupRule:SecurityGroupRule';

    /**
     * Returns true if the given object is an instance of SecurityGroupRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityGroupRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityGroupRule.__pulumiType;
    }

    public readonly flow!: pulumi.Output<string>;
    public readonly fromPortRange!: pulumi.Output<number | undefined>;
    public readonly ipProtocol!: pulumi.Output<string | undefined>;
    public readonly ipRange!: pulumi.Output<string | undefined>;
    public /*out*/ readonly netId!: pulumi.Output<string>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.SecurityGroupRuleRule[] | undefined>;
    public readonly securityGroupAccountIdToLink!: pulumi.Output<string | undefined>;
    public readonly securityGroupId!: pulumi.Output<string>;
    public /*out*/ readonly securityGroupName!: pulumi.Output<string>;
    public readonly securityGroupNameToLink!: pulumi.Output<string | undefined>;
    public readonly toPortRange!: pulumi.Output<number | undefined>;

    /**
     * Create a SecurityGroupRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityGroupRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityGroupRuleArgs | SecurityGroupRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityGroupRuleState | undefined;
            resourceInputs["flow"] = state ? state.flow : undefined;
            resourceInputs["fromPortRange"] = state ? state.fromPortRange : undefined;
            resourceInputs["ipProtocol"] = state ? state.ipProtocol : undefined;
            resourceInputs["ipRange"] = state ? state.ipRange : undefined;
            resourceInputs["netId"] = state ? state.netId : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["securityGroupAccountIdToLink"] = state ? state.securityGroupAccountIdToLink : undefined;
            resourceInputs["securityGroupId"] = state ? state.securityGroupId : undefined;
            resourceInputs["securityGroupName"] = state ? state.securityGroupName : undefined;
            resourceInputs["securityGroupNameToLink"] = state ? state.securityGroupNameToLink : undefined;
            resourceInputs["toPortRange"] = state ? state.toPortRange : undefined;
        } else {
            const args = argsOrState as SecurityGroupRuleArgs | undefined;
            if ((!args || args.flow === undefined) && !opts.urn) {
                throw new Error("Missing required property 'flow'");
            }
            if ((!args || args.securityGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupId'");
            }
            resourceInputs["flow"] = args ? args.flow : undefined;
            resourceInputs["fromPortRange"] = args ? args.fromPortRange : undefined;
            resourceInputs["ipProtocol"] = args ? args.ipProtocol : undefined;
            resourceInputs["ipRange"] = args ? args.ipRange : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["securityGroupAccountIdToLink"] = args ? args.securityGroupAccountIdToLink : undefined;
            resourceInputs["securityGroupId"] = args ? args.securityGroupId : undefined;
            resourceInputs["securityGroupNameToLink"] = args ? args.securityGroupNameToLink : undefined;
            resourceInputs["toPortRange"] = args ? args.toPortRange : undefined;
            resourceInputs["netId"] = undefined /*out*/;
            resourceInputs["requestId"] = undefined /*out*/;
            resourceInputs["securityGroupName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityGroupRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityGroupRule resources.
 */
export interface SecurityGroupRuleState {
    flow?: pulumi.Input<string>;
    fromPortRange?: pulumi.Input<number>;
    ipProtocol?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    netId?: pulumi.Input<string>;
    requestId?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRuleRule>[]>;
    securityGroupAccountIdToLink?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    securityGroupName?: pulumi.Input<string>;
    securityGroupNameToLink?: pulumi.Input<string>;
    toPortRange?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SecurityGroupRule resource.
 */
export interface SecurityGroupRuleArgs {
    flow: pulumi.Input<string>;
    fromPortRange?: pulumi.Input<number>;
    ipProtocol?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRuleRule>[]>;
    securityGroupAccountIdToLink?: pulumi.Input<string>;
    securityGroupId: pulumi.Input<string>;
    securityGroupNameToLink?: pulumi.Input<string>;
    toPortRange?: pulumi.Input<number>;
}
