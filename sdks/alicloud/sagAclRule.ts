// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SagAclRule extends pulumi.CustomResource {
    /**
     * Get an existing SagAclRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagAclRuleState, opts?: pulumi.CustomResourceOptions): SagAclRule {
        return new SagAclRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/sagAclRule:SagAclRule';

    /**
     * Returns true if the given object is an instance of SagAclRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagAclRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagAclRule.__pulumiType;
    }

    public readonly aclId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destCidr!: pulumi.Output<string>;
    public readonly destPortRange!: pulumi.Output<string>;
    public readonly direction!: pulumi.Output<string>;
    public readonly ipProtocol!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly sourceCidr!: pulumi.Output<string>;
    public readonly sourcePortRange!: pulumi.Output<string>;

    /**
     * Create a SagAclRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagAclRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagAclRuleArgs | SagAclRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagAclRuleState | undefined;
            resourceInputs["aclId"] = state ? state.aclId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destCidr"] = state ? state.destCidr : undefined;
            resourceInputs["destPortRange"] = state ? state.destPortRange : undefined;
            resourceInputs["direction"] = state ? state.direction : undefined;
            resourceInputs["ipProtocol"] = state ? state.ipProtocol : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["sourceCidr"] = state ? state.sourceCidr : undefined;
            resourceInputs["sourcePortRange"] = state ? state.sourcePortRange : undefined;
        } else {
            const args = argsOrState as SagAclRuleArgs | undefined;
            if ((!args || args.aclId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclId'");
            }
            if ((!args || args.destCidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destCidr'");
            }
            if ((!args || args.destPortRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destPortRange'");
            }
            if ((!args || args.direction === undefined) && !opts.urn) {
                throw new Error("Missing required property 'direction'");
            }
            if ((!args || args.ipProtocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipProtocol'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.sourceCidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceCidr'");
            }
            if ((!args || args.sourcePortRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourcePortRange'");
            }
            resourceInputs["aclId"] = args ? args.aclId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destCidr"] = args ? args.destCidr : undefined;
            resourceInputs["destPortRange"] = args ? args.destPortRange : undefined;
            resourceInputs["direction"] = args ? args.direction : undefined;
            resourceInputs["ipProtocol"] = args ? args.ipProtocol : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["sourceCidr"] = args ? args.sourceCidr : undefined;
            resourceInputs["sourcePortRange"] = args ? args.sourcePortRange : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagAclRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagAclRule resources.
 */
export interface SagAclRuleState {
    aclId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destCidr?: pulumi.Input<string>;
    destPortRange?: pulumi.Input<string>;
    direction?: pulumi.Input<string>;
    ipProtocol?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    sourceCidr?: pulumi.Input<string>;
    sourcePortRange?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SagAclRule resource.
 */
export interface SagAclRuleArgs {
    aclId: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destCidr: pulumi.Input<string>;
    destPortRange: pulumi.Input<string>;
    direction: pulumi.Input<string>;
    ipProtocol: pulumi.Input<string>;
    policy: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    sourceCidr: pulumi.Input<string>;
    sourcePortRange: pulumi.Input<string>;
}
