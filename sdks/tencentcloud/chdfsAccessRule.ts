// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ChdfsAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing ChdfsAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChdfsAccessRuleState, opts?: pulumi.CustomResourceOptions): ChdfsAccessRule {
        return new ChdfsAccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/chdfsAccessRule:ChdfsAccessRule';

    /**
     * Returns true if the given object is an instance of ChdfsAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ChdfsAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ChdfsAccessRule.__pulumiType;
    }

    /**
     * access group id.
     */
    public readonly accessGroupId!: pulumi.Output<string>;
    /**
     * rule detail.
     */
    public readonly accessRule!: pulumi.Output<outputs.ChdfsAccessRuleAccessRule>;

    /**
     * Create a ChdfsAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChdfsAccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ChdfsAccessRuleArgs | ChdfsAccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ChdfsAccessRuleState | undefined;
            resourceInputs["accessGroupId"] = state ? state.accessGroupId : undefined;
            resourceInputs["accessRule"] = state ? state.accessRule : undefined;
        } else {
            const args = argsOrState as ChdfsAccessRuleArgs | undefined;
            if ((!args || args.accessGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessGroupId'");
            }
            if ((!args || args.accessRule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessRule'");
            }
            resourceInputs["accessGroupId"] = args ? args.accessGroupId : undefined;
            resourceInputs["accessRule"] = args ? args.accessRule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ChdfsAccessRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ChdfsAccessRule resources.
 */
export interface ChdfsAccessRuleState {
    /**
     * access group id.
     */
    accessGroupId?: pulumi.Input<string>;
    /**
     * rule detail.
     */
    accessRule?: pulumi.Input<inputs.ChdfsAccessRuleAccessRule>;
}

/**
 * The set of arguments for constructing a ChdfsAccessRule resource.
 */
export interface ChdfsAccessRuleArgs {
    /**
     * access group id.
     */
    accessGroupId: pulumi.Input<string>;
    /**
     * rule detail.
     */
    accessRule: pulumi.Input<inputs.ChdfsAccessRuleAccessRule>;
}
